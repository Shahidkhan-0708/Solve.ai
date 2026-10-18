"""Google identity verification, revocable login sessions, and saved learner preferences."""
import asyncio
import hashlib
import json
import os
import secrets
import time
from contextlib import closing
from typing import Literal

from fastapi import HTTPException, Request
from fastapi.responses import JSONResponse
from pydantic import BaseModel, ConfigDict, Field, model_validator

AUTH_COOKIE = 'solve_auth'
NONCE_COOKIE = 'solve_login_nonce'


class Profile(BaseModel):
    model_config = ConfigDict(extra='forbid')
    name: str = Field(default='', max_length=120)
    age: int | None = Field(default=None, ge=12, le=120)
    education: Literal['School', 'Diploma', 'Undergraduate', 'Postgraduate', 'Other', 'Prefer not to say', ''] = ''
    course: str = Field(default='', max_length=160)
    interface_language: str = Field(default='English', min_length=2, max_length=60)
    explanation_language: str = Field(default='English', min_length=2, max_length=60)
    detail: Literal['concise', 'balanced', 'detailed'] = 'balanced'
    playback_speed: Literal[0.75, 1.0, 1.25, 1.5] = 1.0
    motion: Literal['device', 'reduced'] = 'device'
    text_size: Literal['standard', 'large'] = 'standard'
    onboarding_complete: bool = False
    notifications: bool = False

    @model_validator(mode='after')
    def completed_profile(self):
        if self.onboarding_complete and not self.name.strip(): raise ValueError('Enter a name before completing onboarding')
        return self


class GoogleLogin(BaseModel):
    model_config = ConfigDict(extra='forbid')
    credential: str = Field(min_length=20, max_length=16000)
    claim_guest: bool = False


def initialize(db):
    db.execute('CREATE TABLE IF NOT EXISTS accounts(id TEXT PRIMARY KEY,google_sub TEXT NOT NULL UNIQUE,owner TEXT NOT NULL UNIQUE,email TEXT NOT NULL)')
    db.execute('CREATE TABLE IF NOT EXISTS auth_sessions(token TEXT PRIMARY KEY,account_id TEXT NOT NULL REFERENCES accounts(id) ON DELETE CASCADE,expires REAL NOT NULL)')
    db.execute('CREATE TABLE IF NOT EXISTS auth_challenges(token TEXT PRIMARY KEY,owner TEXT NOT NULL,expires REAL NOT NULL)')
    db.execute('CREATE TABLE IF NOT EXISTS profiles(owner TEXT PRIMARY KEY,state TEXT NOT NULL,revision INTEGER NOT NULL)')


def digest(token):
    return hashlib.sha256(token.encode()).hexdigest()


def resolve(connect, token):
    if not token or len(token) != 64:
        return None
    with closing(connect()) as db:
        row = db.execute('SELECT a.id,a.owner,a.email FROM auth_sessions s JOIN accounts a ON a.id=s.account_id WHERE s.token=? AND s.expires>?', (digest(token), time.time())).fetchone()
    return {'id': row[0], 'owner': row[1], 'email': row[2]} if row else None


def profile(connect, owner):
    with closing(connect()) as db:
        row = db.execute('SELECT state,revision FROM profiles WHERE owner=?', (owner,)).fetchone()
    return {**Profile().model_dump(), **(json.loads(row[0]) if row else {}), 'revision': row[1] if row else 0}


def verify_google(credential, client_id):
    from google.oauth2 import id_token
    from google.auth.transport.requests import Request as GoogleRequest
    return id_token.verify_oauth2_token(credential, GoogleRequest(), client_id)


def claim_guest(db, guest, account):
    if guest == account['owner']:
        return
    row = db.execute('SELECT account_id FROM principals WHERE owner=?', (guest,)).fetchone()
    if row and row[0] and row[0] != account['id']:
        raise HTTPException(409, 'This guest workspace has already been claimed by another account.')
    # Preserve record IDs and animation relationships; only the authorized owner changes.
    for table in ('sessions', 'operations', 'conversations', 'records', 'media', 'push_subscriptions'):
        db.execute(f'UPDATE {table} SET owner=? WHERE owner=?', (account['owner'], guest))
    old = db.execute('SELECT state FROM profiles WHERE owner=?', (guest,)).fetchone()
    if old and not db.execute('SELECT 1 FROM profiles WHERE owner=?', (account['owner'],)).fetchone():
        db.execute('INSERT INTO profiles VALUES(?,?,1)', (account['owner'], old[0]))
    db.execute('INSERT INTO principals(owner,id,account_id) VALUES(?,?,?) ON CONFLICT(owner) DO UPDATE SET account_id=excluded.account_id', (guest, secrets.token_hex(16), account['id']))


def install(api):
    app = api.app

    @app.get('/api/me')
    def me(request: Request):
        account = request.state.account
        return {'id': digest('public:' + request.state.owner)[:32], 'authenticated': bool(account),
                'email': account['email'] if account else None, 'profile': profile(api.connect, request.state.owner)}

    @app.put('/api/me/profile')
    def save_profile(payload: Profile, request: Request):
        owner = request.state.owner
        with closing(api.connect()) as db:
            db.execute('BEGIN IMMEDIATE')
            old = db.execute('SELECT revision FROM profiles WHERE owner=?', (owner,)).fetchone()
            expected = request.headers.get('if-match')
            if expected is not None and expected != f'"{old[0] if old else 0}"':
                raise HTTPException(409, 'Your profile changed in another tab. Reload it before saving.')
            revision = (old[0] if old else 0) + 1
            db.execute('INSERT INTO profiles VALUES(?,?,?) ON CONFLICT(owner) DO UPDATE SET state=excluded.state,revision=excluded.revision', (owner, payload.model_dump_json(), revision))
            db.execute('INSERT OR IGNORE INTO principals(owner,id) VALUES(?,?)', (owner, secrets.token_hex(16)))
            db.commit()
        return {**payload.model_dump(), 'revision': revision}

    @app.get('/api/auth/config')
    def config():
        client = os.getenv('GOOGLE_CLIENT_ID', '')
        return {'google_enabled': bool(client), 'client_id': client or None,
                'reason': None if client else 'Google sign-in is unavailable until its client is configured.'}

    @app.post('/api/auth/challenge')
    def challenge(request: Request):
        client = os.getenv('GOOGLE_CLIENT_ID')
        if not client:
            raise HTTPException(503, 'Google sign-in is not configured. You can continue as a guest.')
        nonce = secrets.token_hex(32)
        with closing(api.connect()) as db:
            db.execute('DELETE FROM auth_challenges WHERE expires<=?', (time.time(),))
            db.execute('INSERT INTO auth_challenges VALUES(?,?,?)', (digest(nonce), request.state.guest_owner, time.time()+300))
            db.commit()
        response = JSONResponse({'client_id': client, 'nonce': nonce})
        response.set_cookie(NONCE_COOKIE, nonce, httponly=True, secure=os.getenv('SECURE_COOKIES', 'false') == 'true', samesite='strict', max_age=300)
        return response

    @app.post('/api/auth/google')
    async def google_login(payload: GoogleLogin, request: Request):
        client = os.getenv('GOOGLE_CLIENT_ID')
        if not client:
            raise HTTPException(503, 'Google sign-in is not configured. You can continue as a guest.')
        nonce = request.cookies.get(NONCE_COOKIE, '')
        with closing(api.connect()) as db:
            challenge = db.execute('SELECT owner,expires FROM auth_challenges WHERE token=?', (digest(nonce),)).fetchone()
        if not challenge or challenge[0] != request.state.guest_owner or challenge[1] <= time.time():
            raise HTTPException(401, 'Sign-in expired. Start Google sign-in again.')
        try:
            info = await asyncio.wait_for(asyncio.to_thread(verify_google, payload.credential, client), 15)
        except (ValueError, TimeoutError):
            raise HTTPException(401, 'Google could not verify this sign-in. Please retry.')
        except ImportError:
            raise HTTPException(503, 'Google verification is unavailable. Install the backend requirements.')
        except Exception:
            raise HTTPException(503, 'Google identity verification is temporarily unavailable.')
        if not isinstance(info.get('sub'), str) or not 1 <= len(info['sub']) <= 255 or info.get('nonce') != nonce or info.get('aud') != client or info.get('iss') not in {'accounts.google.com', 'https://accounts.google.com'} or info.get('exp', 0) <= time.time():
            raise HTTPException(401, 'Invalid Google sign-in identity.')
        auth_token = secrets.token_hex(32)
        with closing(api.connect()) as db:
            db.execute('BEGIN IMMEDIATE')
            used = db.execute('DELETE FROM auth_challenges WHERE token=? AND expires>?', (digest(nonce), time.time())).rowcount
            if used != 1:
                raise HTTPException(401, 'This sign-in was already used. Start again.')
            row = db.execute('SELECT id,owner,email FROM accounts WHERE google_sub=?', (info['sub'],)).fetchone()
            if row:
                account = {'id': row[0], 'owner': row[1], 'email': row[2]}
            else:
                account = {'id': secrets.token_hex(16), 'owner': secrets.token_hex(32), 'email': str(info.get('email', ''))}
                db.execute('INSERT INTO accounts VALUES(?,?,?,?)', (account['id'], info['sub'], account['owner'], account['email']))
            db.execute('INSERT OR IGNORE INTO principals VALUES(?,?,?)', (account['owner'], secrets.token_hex(16), account['id']))
            if payload.claim_guest:
                claim_guest(db, request.state.guest_owner, account)
            db.execute('DELETE FROM auth_sessions WHERE expires<=?', (time.time(),))
            db.execute('INSERT INTO auth_sessions VALUES(?,?,?)', (digest(auth_token), account['id'], time.time()+30*86400))
            db.commit()
        response = JSONResponse({'authenticated': True, 'claimed_guest': payload.claim_guest})
        response.set_cookie(AUTH_COOKIE, auth_token, httponly=True, secure=os.getenv('SECURE_COOKIES', 'false') == 'true', samesite='strict', max_age=30*86400)
        response.delete_cookie(NONCE_COOKIE)
        if payload.claim_guest:
            response.set_cookie(api.COOKIE, secrets.token_hex(32), httponly=True, secure=os.getenv('SECURE_COOKIES', 'false') == 'true', samesite='strict', max_age=365*86400)
        return response

    @app.post('/api/auth/logout')
    def logout(request: Request):
        with closing(api.connect()) as db:
            db.execute('DELETE FROM auth_sessions WHERE token=?', (digest(request.cookies.get(AUTH_COOKIE, '')),))
            db.commit()
        response = JSONResponse({'signed_out': True})
        response.delete_cookie(AUTH_COOKIE)
        response.delete_cookie(NONCE_COOKIE)
        response.delete_cookie(api.COOKIE)
        return response
