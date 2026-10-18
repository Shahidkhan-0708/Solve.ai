"""Exercise real source -> Gemini storyboard/review -> Manim -> private media in an isolated database."""
import json
import os
import sys
import tempfile
import time
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))

with tempfile.TemporaryDirectory(prefix="solve-animation-") as directory:
    os.environ["DATA_DIR"] = directory
    from backend import main
    from fastapi.testclient import TestClient
    if not (os.getenv("GROQ_API_KEY", "").strip() or os.getenv("GEMINI_API_KEY", "").strip()):
        raise SystemExit("Configure GROQ_API_KEY before running this live check.")
    destination = ROOT / "tmp" / "animation-check"
    destination.mkdir(parents=True, exist_ok=True)
    real_generate = main.generate
    outcomes = []
    async def record(model, prompt, owner):
        result = await real_generate(model, prompt, owner)
        outcomes.append(model.__name__)
        (destination / f"ai-{len(outcomes)}-{model.__name__}.json").write_text(result.model_dump_json(indent=2))
        if model is main.animation.PlanReview:
            print(f"Teaching review: {result.approved}: {result.issue}", flush=True)
        return result
    main.generate = record
    origin = {"origin": "http://127.0.0.1:3000"}
    with TestClient(main.app) as client:
        def post(path, body=None):
            response = client.post("/api" + path, json=body, headers=origin)
            assert response.status_code == 200, response.text
            return response.json()
        state = post("/sessions", {"goal": "Understand why current is the same in a series circuit", "minutes": 45})
        sid = state["id"]
        source = "In a series circuit, components are connected in one continuous closed path, with no branches. Current is the rate at which charge passes a point, measured in amperes. Charge is not consumed by resistors. The same current flows through every component because there is only one path for charge. A schematic connection order is supply, R1, R2, then back to the supply; arrows between these parts represent the single path. The total resistance is the sum of individual resistances: R_total = R1 + R2. For a 2 ohm resistor and a 4 ohm resistor connected in series, total resistance is 6 ohms. With a 12 volt source, Ohm's law gives I = V / R_total = 12 / 6 = 2 amperes. The current through each resistor is 2 amperes. The voltage drops are V1 = I * R1 = 4 volts and V2 = I * R2 = 8 volts. These drops add to the 12 volt supply."
        post(f"/sessions/{sid}/sources/text", {"title": "Series circuit notes", "text": source})
        state = post(f"/sessions/{sid}/start", {"confirmed": True})
        state = post(f"/sessions/{sid}/help", {"task_id": state["task"]["id"]})
        endpoint = f"/sessions/{sid}/animations/{state['task']['concept']}"
        post(endpoint)
        deadline = time.monotonic() + 420
        previous = None
        while time.monotonic() < deadline:
            job = client.get("/api" + endpoint).json()
            if job["status"] != previous:
                print(job["status"], flush=True)
                previous = job["status"]
            if job["status"] in {"ready", "failed"}: break
            time.sleep(2)
        assert job["status"] == "ready", job.get("error", "Render timed out")
        from fastapi.testclient import TestClient as Outsider
        for i, step in enumerate(job["steps"]):
            for field, extension in (("video", "mp4"), ("still", "png")):
                media = client.get(step[field])
                assert media.status_code == 200 and media.content
                assert "private" in media.headers["cache-control"]
                assert Outsider(main.app).get(step[field]).status_code == 404
                (destination / f"step-{i}.{extension}").write_bytes(media.content)
        assert post(endpoint)["steps"] == job["steps"], "Ready result was not reused"
        (destination / "report.json").write_text(json.dumps({"title": job["title"], "steps": job["steps"], "status": "passed"}, indent=2))
        response = client.delete("/api/sessions/" + sid, headers=origin)
        assert response.status_code == 200 and not (Path(directory) / "animations" / sid).exists()
        print(f"PASS: {len(job['steps'])} generated clips, owner-only media, cache reuse and deletion", flush=True)
