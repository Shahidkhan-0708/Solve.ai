import asyncio
import json
import os
import sqlite3
import tempfile
import unittest
from contextlib import closing
from unittest.mock import AsyncMock, patch

import httpx
from fastapi.testclient import TestClient

DATA = tempfile.TemporaryDirectory()
os.environ["DATA_DIR"] = DATA.name
from backend import main, persistence

ORIGIN = {"origin": "http://127.0.0.1:3001"}


class FoundationChecks(unittest.TestCase):
    def setUp(self):
        origins = patch.object(main, "ORIGINS", main.ORIGINS | {ORIGIN["origin"]})
        origins.start()
        self.addCleanup(origins.stop)
        self.client = TestClient(main.app)
        self.client.get("/api/health")
        response = self.client.post("/api/demo", headers=ORIGIN)
        self.assertEqual(response.status_code, 200, response.text)
        self.state = response.json()
        self.path = "/api/sessions/" + self.state["id"]
        self.owner = main.hashlib.sha256(self.client.cookies.get(main.COOKIE).encode()).hexdigest()

    def test_old_database_migration_preserves_records_and_is_repeatable(self):
        with sqlite3.connect(":memory:") as db:
            db.execute("PRAGMA foreign_keys=ON")
            db.execute("CREATE TABLE sessions(id TEXT PRIMARY KEY,owner TEXT,state TEXT,updated REAL)")
            db.execute("INSERT INTO sessions VALUES('old','owner','{\"goal\":\"Preserve me\"}',1)")
            persistence.migrate(db)
            persistence.migrate(db)
            self.assertEqual(db.execute("SELECT state,revision FROM sessions").fetchone(), ('{"goal":"Preserve me"}', 0))
            self.assertEqual(db.execute("SELECT COUNT(*) FROM schema_migrations").fetchone()[0], 2)
            self.assertEqual(db.execute("SELECT owner FROM principals").fetchall(), [("owner",)])

    def test_health_invalid_routes_and_rejected_writes_do_not_create_principals(self):
        with closing(main.connect()) as db:
            before = db.execute("SELECT COUNT(*) FROM principals").fetchone()[0]
        for _ in range(3):
            outsider = TestClient(main.app)
            self.assertEqual(outsider.get("/api/health").status_code, 200)
            self.assertEqual(outsider.get("/api/missing").status_code, 404)
            self.assertEqual(outsider.post("/api/demo").status_code, 403)
        with closing(main.connect()) as db:
            self.assertEqual(db.execute("SELECT COUNT(*) FROM principals").fetchone()[0], before)

    def test_port_3002_accepts_writes_and_other_origins_remain_blocked(self):
        for origin in ('http://127.0.0.1:3002', 'http://localhost:3002'):
            self.assertIn(origin, main.ORIGINS)
            response = self.client.post('/api/conversations', json={'mode': 'chat', 'title': 'Origin check'}, headers={'origin': origin})
            self.assertEqual(response.status_code, 200, response.text)
        for origin in ('https://untrusted.example', 'http://localhost:30020'):
            response = self.client.post('/api/conversations', json={'mode': 'chat', 'title': 'Origin check'}, headers={'origin': origin})
            self.assertEqual(response.status_code, 403, response.text)

    def test_compare_and_swap_rejects_stale_and_cross_owner_writes(self):
        first = main.load(self.state["id"], self.owner)
        stale = main.load(self.state["id"], self.owner)
        first["target"] = "Saved first"
        main.save(first, self.owner)
        for owner in (self.owner, "another-owner"):
            with self.assertRaises(main.HTTPException) as failure:
                main.save(stale, owner)
            self.assertEqual(failure.exception.status_code, 409)
        self.assertEqual(main.load(self.state["id"], self.owner)["target"], "Saved first")
        stale.pop("revision")
        with self.assertRaises(main.HTTPException):
            main.save(stale, self.owner)

    def test_read_only_get_and_explicit_advance_with_revision_conflict(self):
        saved = main.load(self.state["id"], self.owner)
        saved["task"] = None
        main.save(saved, self.owner)
        read = self.client.get(self.path + "?read_only=true").json()
        self.assertTrue(read["needs_advance"])
        self.assertIsNone(read["task"])
        self.assertEqual(read["revision"], saved["revision"])
        response = self.client.post(self.path + "/advance", headers={**ORIGIN, "if-match": str(saved["revision"] - 1)})
        self.assertEqual(response.status_code, 409)
        response = self.client.post(self.path + "/advance", headers={**ORIGIN, "if-match": f'"{saved["revision"]}"'})
        self.assertEqual(response.status_code, 200, response.text)
        self.assertIsNotNone(response.json()["task"])
        self.assertEqual(self.client.post(self.path + "/advance", headers={**ORIGIN, "if-match": '"broken"'}).status_code, 400)

    def test_answer_replay_preserves_original_result_without_regrading(self):
        payload = {"task_id": self.state["task"]["id"], "answer": "1", "spent_minutes": 3}
        headers = {**ORIGIN, "idempotency-key": "grade-operation-0001", "if-match": str(self.state["revision"])}
        first = self.client.post(self.path + "/attempt", json=payload, headers=headers)
        self.assertEqual(first.status_code, 200, first.text)
        first = first.json()
        next_answer = self.client.post(self.path + "/attempt", json={"task_id": first["task"]["id"], "answer": "1"}, headers=ORIGIN)
        self.assertEqual(next_answer.status_code, 200, next_answer.text)
        replay = self.client.post(self.path + "/attempt", json=payload, headers=headers)
        self.assertEqual(replay.status_code, 200, replay.text)
        self.assertEqual(replay.json()["attempt_count"], 2)
        self.assertEqual(replay.json()["remaining_minutes"], 42)
        self.assertEqual(replay.json()["operation"]["result"], first["operation"]["result"])
        self.assertEqual(self.client.post(self.path + "/attempt", json={**payload, "answer": "changed"}, headers=headers).status_code, 409)
        outsider = TestClient(main.app)
        self.assertEqual(outsider.post(self.path + "/attempt", json=payload, headers=headers).status_code, 404)

    def test_committed_grade_survives_failed_advance_and_operation_deletes(self):
        payload = {"task_id": self.state["task"]["id"], "answer": "1", "spent_minutes": 4}
        headers = {**ORIGIN, "idempotency-key": "grade-operation-0002"}
        with patch.object(main, "fresh_task", new=AsyncMock(side_effect=main.HTTPException(502, "Provider unavailable"))):
            response = self.client.post(self.path + "/attempt", json=payload, headers=headers)
        self.assertEqual(response.status_code, 200, response.text)
        graded = response.json()
        self.assertEqual(graded["attempt_count"], 1)
        self.assertEqual(graded["remaining_minutes"], 41)
        self.assertEqual(graded["operation"]["status"], "graded")
        self.assertTrue(graded["needs_advance"])
        replay = self.client.post(self.path + "/attempt", json=payload, headers=headers).json()
        self.assertEqual(replay["operation"], graded["operation"])
        self.assertIsNone(replay["task"])
        advanced = self.client.post(self.path + "/advance", headers=ORIGIN).json()
        self.assertEqual(advanced["attempt_count"], 1)
        self.assertIsNotNone(advanced["task"])
        self.assertEqual(self.client.delete(self.path, headers=ORIGIN).status_code, 200)
        with closing(main.connect()) as db:
            self.assertEqual(db.execute("SELECT COUNT(*) FROM operations WHERE session_id=?", (self.state["id"],)).fetchone()[0], 0)

    def test_interrupted_uncommitted_operations_are_retryable(self):
        with closing(main.connect()) as db:
            persistence.record_operation(db, self.state["id"], self.owner, "interrupted-operation", "fingerprint", "pending")
            db.commit()
            persistence.migrate(db)
            db.commit()
            self.assertEqual(persistence.operation(db, self.state["id"], self.owner, "interrupted-operation")["status"], "interrupted")

    def test_uncommitted_retry_cannot_bypass_revision_after_another_tab_requested_help(self):
        payload = {"task_id": self.state["task"]["id"], "answer": "1"}
        headers = {**ORIGIN, "idempotency-key": "failed-operation-0001", "if-match": str(self.state["revision"])}
        with patch.object(main, "demo_feedback", side_effect=main.HTTPException(502, "Provider unavailable")):
            self.assertEqual(self.client.post(self.path + "/attempt", json=payload, headers=headers).status_code, 502)
        helped = self.client.post(self.path + "/help", json={"task_id": payload["task_id"]}, headers=ORIGIN).json()
        self.assertEqual(self.client.post(self.path + "/attempt", json=payload, headers=headers).status_code, 409)
        response = self.client.post(self.path + "/attempt", json=payload, headers={**headers, "if-match": str(helped["revision"])})
        self.assertEqual(response.status_code, 200, response.text)
        self.assertEqual(response.json()["attempt_count"], 1)
        self.assertTrue(response.json()["operation"]["result"]["feedback"]["assisted"])

    def test_evidence_is_private_paginated_and_retains_feedback_without_expected_answers(self):
        first = self.client.post(self.path + "/attempt", json={"task_id": self.state["task"]["id"], "answer": "1"}, headers=ORIGIN).json()
        self.client.post(self.path + "/attempt", json={"task_id": first["task"]["id"], "answer": "1"}, headers=ORIGIN)
        evidence = self.client.get(self.path + "/evidence?limit=1").json()
        self.assertEqual(evidence["total"], 2)
        self.assertEqual(len(evidence["items"]), 1)
        self.assertEqual(evidence["next_offset"], 1)
        self.assertEqual(evidence["practice_questions"], 1)
        self.assertEqual(evidence["first_independent_correct"], 1)
        self.assertEqual(evidence["items"][0]["feedback"]["status"], "correct")
        self.assertNotIn('expected_answer', json.dumps(evidence))
        self.assertEqual(self.client.get(self.path + "/evidence?limit=101").status_code, 422)
        self.assertEqual(TestClient(main.app).get(self.path + "/evidence").status_code, 404)


class ConcurrencyChecks(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        origins = patch.object(main, "ORIGINS", main.ORIGINS | {ORIGIN["origin"]})
        origins.start()
        self.addCleanup(origins.stop)

    async def test_slow_provider_does_not_block_another_session_and_same_session_serializes(self):
        async with httpx.AsyncClient(transport=httpx.ASGITransport(app=main.app), base_url="http://test") as client:
            await client.get("/api/health")
            first = (await client.post("/api/demo", headers=ORIGIN)).json()
            second = (await client.post("/api/demo", headers=ORIGIN)).json()
            entered, release = asyncio.Event(), asyncio.Event()
            async def slow_prepare(state, owner):
                if state["id"] == first["id"]:
                    entered.set()
                    await release.wait()
            with patch.object(main, "prepare_task", side_effect=slow_prepare):
                pending = asyncio.create_task(client.post(f'/api/sessions/{first["id"]}/plan', json={"remaining_minutes": 20}, headers=ORIGIN))
                await asyncio.wait_for(entered.wait(), 15)
                same = asyncio.create_task(client.post(f'/api/sessions/{first["id"]}/plan', json={"remaining_minutes": 15}, headers=ORIGIN))
                try:
                    independent = await asyncio.wait_for(client.post(f'/api/sessions/{second["id"]}/plan', json={"remaining_minutes": 25}, headers=ORIGIN), 15)
                    self.assertEqual(independent.status_code, 200, independent.text)
                    self.assertFalse(same.done())
                finally:
                    release.set()
                self.assertEqual((await pending).status_code, 200)
                self.assertEqual((await same).status_code, 200)
                saved = (await client.get(f'/api/sessions/{first["id"]}?read_only=true')).json()
                self.assertEqual(saved["remaining_minutes"], 15)
