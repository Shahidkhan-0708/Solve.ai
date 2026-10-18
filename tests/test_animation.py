import asyncio
import json
import sqlite3
import tempfile
import unittest
from pathlib import Path
from unittest.mock import patch

from fastapi import HTTPException
from pydantic import ValidationError
from backend import animation as a

PASSAGES = [{"id": "p1", "text": "A whole can be divided into two equal parts."}]


def plan():
    step = {"title": "See the whole", "explanation": "Start with one whole before dividing it.", "operation": "reveal",
            "objects": [{"id": "whole", "label": "One whole", "kind": "card", "quantity": 0}],
            "connections": [], "focus": ["whole"], "references": [{"passage_id": "p1", "quote": PASSAGES[0]["text"]}]}
    return a.AnimationPlan(title="Equal parts", steps=[step, {**step, "title": "Divide the whole", "operation": "split"}])


class StoryboardChecks(unittest.TestCase):
    def test_rejects_invalid_links_duplicate_ids_and_code(self):
        for change in ({"focus": ["missing"]}, {"connections": [{"from_id": "whole", "to_id": "whole"}]},
                       {"code": "print('unsafe')"}, {"objects": plan().steps[0].model_dump()["objects"] * 2}):
            with self.subTest(change=change), self.assertRaises(ValidationError):
                a.VisualStep.model_validate({**plan().steps[0].model_dump(), **change})

    def test_citations_must_be_real_and_nonblank(self):
        a.verify_citations(plan(), PASSAGES)
        for quote in (" " * 20, "Invented and unsupported quotation"):
            invalid = plan()
            invalid.steps[0].references[0].quote = quote
            with self.assertRaises(HTTPException):
                a.verify_citations(invalid, PASSAGES)

    def test_connect_cannot_silently_remove_an_earlier_part(self):
        draft = plan()
        draft.steps[1].operation = "connect"
        draft.steps[1].objects[0].id = "part"
        draft.steps[1].focus = ["part"]
        with self.assertRaises(HTTPException):
            a.verify_sequence(draft)
        draft.steps[1].operation = "split"
        a.verify_sequence(draft)


class QueueChecks(unittest.IsolatedAsyncioTestCase):
    async def asyncSetUp(self):
        self.temp = tempfile.TemporaryDirectory()
        self.data = Path(self.temp.name)
        self.db = self.data / "test.db"
        a.render_slot = asyncio.Semaphore(1)
        with self.connect() as db:
            db.execute("CREATE TABLE sessions(id TEXT PRIMARY KEY)")
            db.execute("INSERT INTO sessions VALUES('session')")
            a.initialize(db)
        self.concept = {"title": "Equal parts", "explanation": "Divide one whole into two equal parts.",
                        "steps": ["See the whole", "Divide it"], "references": [{"passage_id": "p1", "quote": PASSAGES[0]["text"]}]}

    def connect(self):
        db = sqlite3.connect(self.db)
        db.execute("PRAGMA foreign_keys=ON")
        return db

    async def asyncTearDown(self):
        await a.remove(self.data, "session")
        self.temp.cleanup()

    async def test_ready_cache_and_private_manifest(self):
        calls = []

        async def generate(model, prompt, owner):
            calls.append(model)
            if model is a.AnimationPlan:
                self.assertEqual(json.loads(prompt)["citation_choices"], [{"passage_id": "p1", "quote": PASSAGES[0]["text"]}])
            return plan() if model is a.AnimationPlan else a.PlanReview(approved=True, issue="")

        async def renderer(*args, **kwargs):
            directory = Path(args[3])
            clips = []
            for i, step in enumerate(plan().steps):
                for extension in ("mp4", "png"):
                    (directory / f"step-{i}.{extension}").write_bytes(b"fixture")
                clips.append({"video": f"step-{i}.mp4", "still": f"step-{i}.png", "title": step.title, "explanation": step.explanation})
            (directory / "manifest.json").write_text(json.dumps(clips))

            class Process:
                returncode = 0
                async def wait(self): return 0
            return Process()

        with patch.object(a.asyncio, "create_subprocess_exec", renderer):
            a.enqueue(self.connect, generate, self.data, self.data, "session", 0, "owner", self.concept, PASSAGES)
            task = a.jobs[("session", 0)]
            a.enqueue(self.connect, generate, self.data, self.data, "session", 0, "owner", self.concept, PASSAGES)
            self.assertIs(task, a.jobs[("session", 0)])
            await task
            result = a.enqueue(self.connect, generate, self.data, self.data, "session", 0, "owner", self.concept, PASSAGES)
        self.assertEqual(result["status"], "ready")
        self.assertEqual(len(calls), 2)
        self.assertTrue(result["steps"][0]["video"].startswith("/api/sessions/session/animations/0/media/"))
        await a.remove(self.data, "session")
        self.assertFalse((self.data / "animations" / "session").exists())

    async def test_failed_review_is_bounded_and_retryable(self):
        calls = []
        async def generate(model, prompt, owner):
            calls.append(model)
            return plan() if model is a.AnimationPlan else a.PlanReview(approved=False, issue="Not clear enough")
        a.enqueue(self.connect, generate, self.data, self.data, "session", 0, "owner", self.concept, PASSAGES)
        await a.jobs[("session", 0)]
        self.assertEqual(a.read(self.connect, "session", 0)["status"], "failed")
        self.assertIn("Not clear enough", a.read(self.connect, "session", 0)["error"])
        self.assertEqual(len(calls), 4)
        self.assertNotIn(("session", 0), a.jobs)

    async def test_delete_cancels_waiting_job(self):
        await a.render_slot.acquire()
        async def never(*args): raise AssertionError("Deleted work must not call AI")
        a.enqueue(self.connect, never, self.data, self.data, "session", 0, "owner", self.concept, PASSAGES)
        await a.remove(self.data, "session")
        self.assertNotIn(("session", 0), a.jobs)
        a.render_slot.release()
