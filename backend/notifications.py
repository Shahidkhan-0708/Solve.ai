"""Opt-in web push and persisted due reminders for the single-process deployment."""
import asyncio
import base64
import hashlib
import json
import os
import time
from contextlib import asynccontextmanager, closing, suppress
from urllib.parse import urlsplit

from fastapi import HTTPException, Request
from pydantic import BaseModel, ConfigDict, Field, model_validator


class Subscription(BaseModel):
    model_config = ConfigDict(extra='forbid')
    endpoint: str = Field(max_length=4096)
    expirationTime: float | None = Field(default=None, ge=0, allow_inf_nan=False)
    keys: dict[str, str]

    @model_validator(mode='after')
    def valid_keys(self):
        if set(self.keys) != {'p256dh', 'auth'}: raise ValueError('Invalid push keys')
        for key, length in (('p256dh', 65), ('auth', 16)):
            if len(self.keys[key]) > 256: raise ValueError('Invalid push keys')
            try: value = base64.b64decode(self.keys[key]+'='*((-len(self.keys[key]))%4), altchars=b'-_', validate=True)
            except (KeyError, ValueError): raise ValueError('Invalid push keys')
            if len(value)!=length: raise ValueError('Invalid push keys')
        return self


def initialize(db):
    db.execute('CREATE TABLE IF NOT EXISTS push_subscriptions(id TEXT PRIMARY KEY,owner TEXT NOT NULL,state TEXT NOT NULL)')


def deliver(subscription, message):
    from pywebpush import webpush
    return webpush(subscription_info=subscription, data=json.dumps(message), vapid_private_key=os.environ['VAPID_PRIVATE_KEY'],
                   vapid_claims={'sub': os.getenv('VAPID_SUBJECT', 'mailto:admin@example.com')}, timeout=15)


async def dispatch_once(api):
    from backend import accounts, product
    now = time.time()
    with closing(api.connect()) as db:
        expired = db.execute('SELECT id FROM media WHERE expires IS NOT NULL AND expires<=? LIMIT 100', (now,)).fetchall()
        for item in expired: db.execute('DELETE FROM media WHERE id=?', item)
        db.commit()
        rows = db.execute("SELECT id,owner FROM records WHERE kind='notification' AND json_extract(state,'$.due_timestamp')<=? AND json_extract(state,'$.delivered')=0 LIMIT 100", (now,)).fetchall()
    for item in expired: (api.DATA/'media'/item[0]).unlink(missing_ok=True)
    if not os.getenv('VAPID_PRIVATE_KEY') or not os.getenv('VAPID_PUBLIC_KEY'): return
    for nid, owner in rows:
        if not accounts.profile(api.connect, owner)['notifications']: continue
        item = product.read(api, 'notification', nid, owner)
        if item.get('push_attempts', 0)>=3 or now-item.get('last_push_attempt', 0)<300: continue
        with closing(api.connect()) as db: subscribers = db.execute('SELECT id,state FROM push_subscriptions WHERE owner=?', (owner,)).fetchall()
        if not subscribers: continue
        succeeded = False
        for sid, state in subscribers:
            try:
                await asyncio.to_thread(deliver, json.loads(state), {'id': nid, 'title': item['title'], 'url': item['url']})
                succeeded = True
            except Exception as failure:
                if getattr(getattr(failure, 'response', None), 'status_code', None) in {404, 410}:
                    with closing(api.connect()) as db: db.execute('DELETE FROM push_subscriptions WHERE id=? AND owner=?', (sid, owner)); db.commit()
        item.update(delivered=succeeded, push_attempts=item.get('push_attempts', 0)+1, last_push_attempt=now)
        try: product.write(api, 'notification', item, owner)
        except HTTPException: pass


async def dispatcher(api):
    while True:
        try: await dispatch_once(api)
        except Exception: api.logger.exception('Reminder dispatch failed')
        await asyncio.sleep(60)


@asynccontextmanager
async def lifespan(app):
    task = asyncio.create_task(dispatcher(app.state.api))
    try: yield
    finally:
        task.cancel()
        with suppress(asyncio.CancelledError): await task


def install(api):
    @api.app.get('/api/push/config')
    def config():
        return {'enabled': bool(os.getenv('VAPID_PRIVATE_KEY') and os.getenv('VAPID_PUBLIC_KEY')), 'public_key': os.getenv('VAPID_PUBLIC_KEY') or None}

    @api.app.post('/api/push/subscriptions')
    def subscribe(payload: Subscription, request: Request):
        if not os.getenv('VAPID_PRIVATE_KEY') or not os.getenv('VAPID_PUBLIC_KEY'): raise HTTPException(503, 'Push notifications are not configured. In-app reminders remain available.')
        url = urlsplit(payload.endpoint); host = (url.hostname or '').lower()
        try: port = url.port
        except ValueError: raise HTTPException(422, 'Invalid push URL.')
        if url.username or url.password or url.fragment or url.scheme!='https' or port not in {None, 443} or not (host=='fcm.googleapis.com' or host=='web.push.apple.com' or host.endswith('.push.services.mozilla.com') or host.endswith('.notify.windows.com')):
            raise HTTPException(422, 'Use a subscription from a supported browser push service.')
        api.validated_addresses(payload.endpoint)
        sid = hashlib.sha256(payload.endpoint.encode()).hexdigest()
        with closing(api.connect()) as db:
            existing = db.execute('SELECT owner FROM push_subscriptions WHERE id=?', (sid,)).fetchone()
            if existing and existing[0]!=request.state.owner: raise HTTPException(409, 'This subscription belongs to another account. Unsubscribe before switching accounts.')
            db.execute('INSERT INTO push_subscriptions VALUES(?,?,?) ON CONFLICT(id) DO UPDATE SET state=excluded.state', (sid, request.state.owner, payload.model_dump_json())); db.commit()
        return {'id': sid, 'subscribed': True}

    @api.app.delete('/api/push/subscriptions/{sid}')
    def unsubscribe(sid: str, request: Request):
        with closing(api.connect()) as db:
            changed = db.execute('DELETE FROM push_subscriptions WHERE id=? AND owner=?', (sid, request.state.owner)).rowcount; db.commit()
        if not changed: raise HTTPException(404, 'Subscription not found.')
        return {'unsubscribed': True}
