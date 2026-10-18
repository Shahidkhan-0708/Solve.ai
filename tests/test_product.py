import os
import tempfile
import time
import io
import wave
import zipfile
import unittest
from unittest.mock import AsyncMock, patch

DATA = tempfile.TemporaryDirectory()
os.environ['DATA_DIR'] = DATA.name
from fastapi.testclient import TestClient
from backend import main, product, accounts, media, notifications

ORIGIN = {'origin': 'http://127.0.0.1:3001'}


class ProductChecks(unittest.TestCase):
    def test_existing_conversation_can_attach_only_owned_learning_context(self):
        mine=self.post('/sessions',{'goal':'My circuit notes'}).json()
        foreign=self.other.post('/api/sessions',json={'goal':'Private circuit notes'},headers=ORIGIN).json()
        thread=self.post('/conversations',{'title':'Existing conversation'}).json()
        path='/api/conversations/'+thread['id']
        saved=self.client.patch(path,json={'session_id':mine['id']},headers={**ORIGIN,'if-match':f'"{thread["revision"]}"'})
        self.assertEqual(saved.status_code,200,saved.text)
        denied=self.client.patch(path,json={'session_id':foreign['id']},headers={**ORIGIN,'if-match':f'"{saved.json()["revision"]}"'})
        self.assertEqual(denied.status_code,404)
        self.assertEqual(self.client.get(path).json()['session_id'],mine['id'])

    def test_learning_history_keeps_chat_and_study_scopes_separate(self):
        study=self.post('/sessions', {'goal':'Workspace scope probe study'}).json()
        chat=self.post('/sessions', {'goal':'Workspace scope probe chat'}).json()
        response=self.client.patch('/api/sessions/'+chat['id'],json={'workspace':'chat'},headers={**ORIGIN,'if-match':str(chat['revision'])})
        self.assertEqual(response.status_code,200,response.text)
        study_items=self.client.get('/api/study-history?workspace=study&q=Workspace%20scope%20probe').json()['items']
        chat_items=self.client.get('/api/study-history?workspace=chat&q=Workspace%20scope%20probe').json()['items']
        self.assertIn(study['id'],[item['id'] for item in study_items])
        self.assertNotIn(chat['id'],[item['id'] for item in study_items])
        self.assertEqual([item['id'] for item in chat_items],[chat['id']])

    def setUp(self):
        self.origins = patch.object(main, 'ORIGINS', main.ORIGINS | {ORIGIN['origin']})
        self.origins.start(); self.addCleanup(self.origins.stop)
        self.client = TestClient(main.app); self.client.get('/api/health')
        self.other = TestClient(main.app); self.other.get('/api/health')

    def post(self, path, body): return self.client.post('/api'+path, json=body, headers=ORIGIN)

    def test_completed_answer_uses_private_cached_manim_pipeline(self):
        thread = self.post('/conversations', {'title': 'Explain recursion'}).json()
        async def chunks(*args):
            yield 'Recursion solves a problem by solving a smaller version. The base case stops further calls.'
        with patch.object(product, 'provider_chunks', side_effect=chunks):
            self.post('/conversations/'+thread['id']+'/messages', {'text': 'Explain recursion', 'operation_id': 'animation-operation-0001'})
        messages = self.client.get('/api/conversations/'+thread['id']).json()['messages']
        mid = messages[-1]['id']
        path = '/api/conversations/'+thread['id']+'/animations/'+mid
        with patch.object(main.animation, 'enqueue', return_value={'status': 'queued', 'steps': []}) as queue:
            self.assertEqual(self.client.post(path, headers=ORIGIN).status_code, 200)
            first_sid = queue.call_args.args[4]
            self.assertEqual(self.client.post(path, headers=ORIGIN).status_code, 200)
            self.assertEqual(queue.call_args.args[4], first_sid)
            self.assertIn('Recursion solves', queue.call_args.args[-1][0]['text'])
        self.assertEqual(self.client.get(path).status_code, 200)
        self.assertEqual(self.other.post(path, headers=ORIGIN).status_code, 404)
        self.assertEqual(self.other.get(path).status_code, 404)
        self.assertEqual(self.client.post('/api/conversations/'+thread['id']+'/animations/'+messages[0]['id'], headers=ORIGIN).status_code, 404)
        self.assertNotIn(first_sid, [item['id'] for item in self.client.get('/api/sessions').json()])
        self.assertEqual(self.client.delete('/api/conversations/'+thread['id'], headers=ORIGIN).status_code, 200)
        self.assertEqual(self.client.get('/api/sessions/'+first_sid+'?read_only=true').status_code, 404)

    def test_pending_intake_edit_preserves_sources_and_owner(self):
        session=self.post('/sessions', {'goal':'Learn algebra','minutes':60}).json()
        path='/api/sessions/'+session['id']
        source=self.post('/sessions/'+session['id']+'/sources/text', {'title':'Notes','text':'A variable represents a value. An equation compares expressions and preserves equality.'}).json()
        edited=self.client.put(path+'/intake',json={'goal':'Prepare for algebra','minutes':180,'level':'starting'},headers={**ORIGIN,'if-match':str(source['revision'])})
        self.assertEqual(edited.status_code,200,edited.text)
        self.assertEqual(edited.json()['remaining_minutes'],180)
        self.assertEqual(len(edited.json()['sources']),1)
        self.assertEqual(self.other.put(path+'/intake',json={'goal':'Other learner','minutes':120},headers=ORIGIN).status_code,404)

    def test_profile_validation_versioning_and_isolation(self):
        me = self.client.get('/api/me').json()
        profile = {k: v for k, v in me['profile'].items() if k != 'revision'}
        profile.update(name='Test learner', age=22)
        response = self.client.put('/api/me/profile', json=profile, headers={**ORIGIN, 'if-match': '"0"'})
        self.assertEqual(response.status_code, 200, response.text)
        self.assertEqual(self.client.put('/api/me/profile', json=profile, headers={**ORIGIN, 'if-match': '"0"'}).status_code, 409)
        self.assertEqual(self.other.get('/api/me').json()['profile']['name'], '')
        profile['age'] = -1
        self.assertEqual(self.client.put('/api/me/profile', json=profile, headers=ORIGIN).status_code, 422)

    def test_conversation_search_export_archive_delete_private(self):
        value = self.post('/conversations', {'title': '100% algebra'}).json(); path = '/api/conversations/'+value['id']
        response = self.client.get('/api/conversations?q=100%25')
        self.assertEqual(response.status_code, 200, response.text)
        self.assertIn(value['id'], [item['id'] for item in response.json()['items']])
        self.assertEqual(self.other.get(path).status_code, 404)
        saved = self.client.patch(path, json={'pinned': True, 'archived': True}, headers={**ORIGIN, 'if-match': '"1"'})
        self.assertEqual(saved.status_code, 200, saved.text)
        self.assertEqual(self.client.get('/api/conversations').json()['items'], [])
        self.assertIn('algebra', self.client.get(path+'/export?format=latex').text)
        self.assertEqual(self.client.delete(path, headers=ORIGIN).status_code, 200)
        self.assertEqual(self.client.get(path).status_code, 404)

    def test_real_stream_persist_replay_regenerate_and_provider_failure(self):
        value = self.post('/conversations', {}).json(); path = '/conversations/'+value['id']
        async def chunks(*args):
            yield 'Reasoning '; yield 'from evidence.'
        payload = {'text': 'Explain algebra', 'operation_id': 'test-operation-00001'}
        with patch.object(product, 'provider_chunks', side_effect=chunks) as provider:
            response = self.post(path+'/messages', payload)
            self.assertEqual(response.status_code, 200, response.text)
            self.assertIn('"type": "done"', response.text)
            self.assertEqual(self.post(path+'/messages', payload).status_code, 200)
            self.assertEqual(provider.call_count, 1)
            thread = self.client.get('/api'+path).json(); assistant = thread['messages'][-1]
            self.assertEqual(assistant['text'], 'Reasoning from evidence.')
            self.assertEqual(self.post(path+'/messages', {**payload, 'text': 'Different text'}).status_code, 409)
            self.assertEqual(self.post(path+'/messages', {**payload, 'operation_id': 'test-operation-00002', 'regenerate_id': assistant['id']}).status_code, 200)
            thread = self.client.get('/api'+path).json()
            self.assertEqual(len([item for item in thread['messages'] if item['role'] == 'user']), 1)
            self.assertEqual(self.other.get('/api'+path+'/export').status_code, 404)

    def test_goals_cards_and_reminders_are_private_and_validated(self):
        goal = self.post('/goals', {'title': 'Learn algebra', 'weekly_hours': 4, 'timezone': 'Asia/Kolkata'}).json()
        self.assertEqual(self.other.get('/api/goals/'+goal['id']).status_code, 404)
        self.assertEqual(self.client.patch('/api/goals/'+goal['id'], json={'timezone': 'Not/AZone'}, headers=ORIGIN).status_code, 422)
        card = self.post('/cards', {'front': 'What is a variable?', 'back': 'A symbol representing a value.'}).json()
        self.assertIn(card['id'], [item['id'] for item in self.client.get('/api/cards').json()])
        self.assertEqual(self.other.get('/api/cards').json(), [])
        self.assertEqual(self.post('/notifications', {'title': 'Review', 'due': '2020-01-01T10:00:00'}).status_code, 422)
        self.assertEqual(self.post('/notifications', {'title': 'Review', 'due': '2030-01-01T10:00:00Z', 'url': 'https://evil.example'}).status_code, 422)

    def test_google_disabled_and_signed_identity_nonce_single_use(self):
        thread = self.post('/conversations', {'title': 'Keep my guest work'}).json()
        guest_cookie = self.client.cookies.get(main.COOKIE)
        with patch.dict(os.environ, {'GOOGLE_CLIENT_ID': ''}):
            self.assertFalse(self.client.get('/api/auth/config').json()['google_enabled'])
            self.assertEqual(self.post('/auth/google', {'credential': 'x'*30}).status_code, 503)
        with patch.dict(os.environ, {'GOOGLE_CLIENT_ID': 'configured-test-client'}):
            challenge = self.post('/auth/challenge', {}).json()
            info = {'sub': 'verified-subject', 'nonce': challenge['nonce'], 'aud': 'configured-test-client', 'iss': 'https://accounts.google.com', 'exp': time.time()+300, 'email': 'test@example.com'}
            with patch.object(accounts, 'verify_google', return_value=info):
                self.assertEqual(self.post('/auth/google', {'credential': 'x'*30, 'claim_guest': True}).status_code, 200)
                self.assertTrue(self.client.get('/api/me').json()['authenticated'])
                self.assertEqual(self.client.get('/api/conversations/'+thread['id']).status_code, 200)
                old_guest = TestClient(main.app); old_guest.cookies.set(main.COOKIE, guest_cookie)
                self.assertEqual(old_guest.get('/api/conversations/'+thread['id']).status_code, 404)
                self.assertEqual(self.post('/auth/google', {'credential': 'x'*30}).status_code, 401)
            self.assertEqual(self.post('/auth/logout', {}).status_code, 200)
            self.assertFalse(self.client.get('/api/me').json()['authenticated'])

    def test_upload_text_and_media_private_delete(self):
        value = self.post('/conversations', {}).json(); path = '/api/conversations/'+value['id']+'/attachments'
        result = self.client.post(path, files={'file': ('notes.txt', b'Variables represent values.', 'text/plain')}, headers=ORIGIN)
        self.assertEqual(result.status_code, 200, result.text)
        asset = result.json()
        self.assertEqual(self.other.get('/api/media/'+asset['id']).status_code, 404)
        self.assertEqual(self.client.get('/api/media/'+asset['id']).content, b'Variables represent values.')
        self.assertEqual(self.client.delete('/api/conversations/'+value['id'], headers=ORIGIN).status_code, 200)
        self.assertEqual(self.client.get('/api/media/'+asset['id']).status_code, 404)
        with self.assertRaises(main.HTTPException): media.decode_audio(b'#EXTM3U\nhttp://internal/service')

    def test_speech_cache_recording_retention_and_private_attempt_binding(self):
        buffer = io.BytesIO()
        with wave.open(buffer, 'wb') as audio:
            audio.setnchannels(1); audio.setsampwidth(2); audio.setframerate(16000); audio.writeframes(b'\0\0'*16000)
        with patch.object(media, 'speech_bytes', new=AsyncMock(return_value=(buffer.getvalue(), 1))) as provider:
            one = self.post('/media/speech', {'text': 'A variable represents a value.'})
            self.assertEqual(one.status_code, 200, one.text)
            two = self.post('/media/speech', {'text': 'A variable represents a value.'})
            self.assertEqual(one.json()['id'], two.json()['id']); self.assertEqual(provider.await_count, 1)
            self.assertEqual(self.other.get(one.json()['url']).status_code, 404)
        session = self.post('/demo', {}).json()
        with patch.object(main, 'generate', new=AsyncMock(return_value=media.Extraction(text='one', readable=True))):
            response = self.client.post('/api/media/transcribe', files={'file': ('voice.wav', buffer.getvalue(), 'audio/wav')}, data={'session_id': session['id']}, headers=ORIGIN)
        self.assertEqual(response.status_code, 200, response.text)
        recording = response.json()
        self.assertEqual(recording['transcript'], 'one')
        other_session = self.post('/demo', {}).json()
        self.assertEqual(self.post('/sessions/'+other_session['id']+'/attempt', {'task_id': other_session['task']['id'], 'answer': '1', 'audio_id': recording['id']}).status_code, 422)
        result = self.post('/sessions/'+session['id']+'/attempt', {'task_id': session['task']['id'], 'answer': '1', 'audio_id': recording['id']})
        self.assertEqual(result.status_code, 200, result.text)
        attempts = self.client.get('/api/sessions/'+session['id']+'/evidence').json()['items']
        self.assertEqual(attempts[0]['audio_id'], recording['id'])

    def test_docx_parsing_rejects_entities_and_choices_keep_original_answer(self):
        buffer = io.BytesIO()
        with zipfile.ZipFile(buffer, 'w') as document:
            document.writestr('word/document.xml', '<w:document xmlns:w="http://schemas.openxmlformats.org/wordprocessingml/2006/main"><w:p><w:t>Algebra notes</w:t></w:p></w:document>')
        self.assertIn('Algebra notes', str(media.docx_text(buffer.getvalue())))
        malicious = io.BytesIO()
        with zipfile.ZipFile(malicious, 'w') as document: document.writestr('word/document.xml', '<!DOCTYPE x [<!ENTITY x SYSTEM "file:///etc/passwd">]><x>&x;</x>')
        with self.assertRaises(main.HTTPException): media.docx_text(malicious.getvalue())
        session = self.post('/demo', {}).json()
        with patch.object(main, 'generate', new=AsyncMock(return_value=product.Choices(options=['1', '2', '3', '4']))) as provider:
            result = self.post('/sessions/'+session['id']+'/choices', {})
            self.assertEqual(result.status_code, 200, result.text)
            self.assertCountEqual(result.json()['options'], ['1', '2', '3', '4'])
            self.assertEqual(self.post('/sessions/'+session['id']+'/choices', {}).status_code, 200)
            self.assertEqual(provider.await_count, 1)
        self.assertNotIn('_answer', self.client.get('/api/sessions/'+session['id']+'?read_only=true').text)

    def test_roadmap_budget_and_real_card_review(self):
        goal = self.post('/goals', {'title': 'Learn algebra', 'weekly_hours': 4}).json()
        plan = product.Roadmap(milestones=[product.Milestone(title='Study variables', week=1, hours=5, rationale='Start with symbols')])
        with patch.object(main, 'generate', new=AsyncMock(return_value=plan)):
            self.assertEqual(self.post('/goals/'+goal['id']+'/plan', {}).status_code, 502)
        self.assertEqual(self.client.get('/api/goals/'+goal['id']).json()['milestones'], [])
        plan.milestones[0].hours = 3
        with patch.object(main, 'generate', new=AsyncMock(return_value=plan)):
            response = self.post('/goals/'+goal['id']+'/plan', {})
            self.assertEqual(response.status_code, 200, response.text)
        card = self.post('/cards', {'front': 'What is a variable?', 'back': 'A symbol representing a value.'}).json()
        feedback = main.Feedback(status='correct', explanation='Correct definition', missing_steps=[], suspected_gap='', criteria=[])
        with patch.object(main, 'assess', new=AsyncMock(return_value=feedback)):
            response = self.post('/cards/'+card['id']+'/review', {'answer': 'A symbol representing a value.'})
            self.assertEqual(response.status_code, 200, response.text)
            self.assertGreater(response.json()['progress']['review_at'], time.time())

    def test_push_input_validation_opt_in_and_delivery_deduplication(self):
        import asyncio
        import base64
        from datetime import datetime, timezone
        key = lambda content: base64.urlsafe_b64encode(content).decode().rstrip('=')
        subscription = {'endpoint': 'https://fcm.googleapis.com/fcm/send/test', 'keys': {'p256dh': key(b'\4'+b'x'*64), 'auth': key(b'x'*16)}}
        self.assertEqual(self.post('/push/subscriptions', {**subscription, 'keys': {'auth': 'bad'}}).status_code, 422)
        with patch.dict(os.environ, {'VAPID_PRIVATE_KEY': 'test-private', 'VAPID_PUBLIC_KEY': 'test-public'}), patch.object(main, 'validated_addresses', return_value=[]):
            self.assertEqual(self.post('/push/subscriptions', {**subscription, 'endpoint': 'https://user:password@fcm.googleapis.com/test'}).status_code, 422)
            browser_subscription = {**subscription, 'expirationTime': None}
            self.assertEqual(self.post('/push/subscriptions', browser_subscription).status_code, 200)
            self.assertEqual(self.post('/push/subscriptions', {**browser_subscription, 'expirationTime': -1}).status_code, 422)
            profile = self.client.get('/api/me').json()['profile']; profile.pop('revision'); profile['notifications'] = True
            self.assertEqual(self.client.put('/api/me/profile', json=profile, headers=ORIGIN).status_code, 200)
            future = time.time()+300
            reminder = self.post('/notifications', {'title': 'Review algebra', 'due': datetime.fromtimestamp(future, timezone.utc).isoformat()})
            self.assertEqual(reminder.status_code, 200, reminder.text)
            with patch.object(notifications, 'deliver') as provider, patch('backend.notifications.time.time', return_value=future+1):
                asyncio.run(notifications.dispatch_once(main)); asyncio.run(notifications.dispatch_once(main))
                self.assertEqual(provider.call_count, 1)

    def test_study_history_management_and_private_interface_translation_cache(self):
        session = self.post('/demo', {}).json(); path = '/api/sessions/'+session['id']
        response = self.client.patch(path, json={'title': 'My recursion study', 'pinned': True, 'archived': True}, headers={**ORIGIN, 'if-match': str(session['revision'])})
        self.assertEqual(response.status_code, 200, response.text)
        self.assertEqual(self.client.get('/api/sessions').json(), [])
        self.assertIn(session['id'], [item['id'] for item in self.client.get('/api/study-history?archived=true&q=recursion').json()['items']])
        self.assertEqual(self.other.get(path+'/export').status_code, 404)
        self.assertIn('My recursion study', self.client.get(path+'/export').text)
        with patch.object(main, 'generate', new=AsyncMock(return_value=product.Translations(labels=['Speichern', 'Verlauf']))) as provider:
            payload = {'language': 'Deutsch', 'labels': ['Save', 'History']}
            one = self.post('/interface/translate', payload); two = self.post('/interface/translate', payload)
            self.assertEqual(one.status_code, 200, one.text); self.assertEqual(one.json(), two.json()); self.assertEqual(provider.await_count, 1)
            self.assertEqual(self.post('/interface/translate', {'language': 'Unknown', 'labels': ['Save']}).status_code, 422)


    def test_guest_logout_ends_browser_access_without_deleting_records(self):
        session = self.post('/sessions', {'goal': 'Private guest work'}).json()
        path = '/api/sessions/' + session['id']
        self.assertEqual(self.client.get(path).status_code, 200)
        response = self.post('/auth/logout', {})
        self.assertEqual(response.status_code, 200)
        self.assertNotIn(main.COOKIE, self.client.cookies)
        self.assertEqual(self.client.get(path).status_code, 404)
        self.assertEqual(self.client.get('/api/me').json()['profile']['name'], '')

if __name__ == '__main__': unittest.main()
