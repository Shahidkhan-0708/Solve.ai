# Solve

A working learning coach: bring material, check a starting point, get an explanation, apply it, repair missing reasoning, and return for a delayed recall check.

## Run

Requires Node 24 (or a supported Next.js Node version) and Python 3.12+.

On macOS/Linux:

    npm ci
    python3 -m venv .venv
    .venv/bin/python -m pip install -r backend/requirements.txt
    npm run dev

On native Windows, create a separate Windows environment:

    python -m venv .venv-windows
    .venv-windows\Scripts\python.exe -m pip install -r backend\requirements.txt
    $env:PYTHON_BIN = (Resolve-Path .venv-windows\Scripts\python.exe).Path
    npm ci
    npm run dev

This workspace already has a tested WSL Ubuntu environment under .venv and installed frontend dependencies. The runner detects it automatically. The Windows helper locates an installed Node runtime even if the nvm shim has no active version:

    powershell -ExecutionPolicy Bypass -File scripts/start.ps1

Open http://127.0.0.1:3000. The reviewed recursion demo works without a model key. Both servers must run: Next.js proxies /api to FastAPI on port 8000.

For the lighter production server:

    npm run build
    npm start

Or, on this Windows workspace after building:

    powershell -ExecutionPolicy Bypass -File scripts/start.ps1 -Production

Keep one API worker. Development uses webpack because Turbopack exhausted memory on this machine. Stop the runner with Ctrl+C. If WSL leaves a listener behind, stop the specific project uvicorn process before restarting.

## Animated recursion demo

Open **Try the guided demo**, then answer the starting check or choose **I don't know yet** to see the explanation. Each of the three concepts has Manim-rendered steps with Play, Pause, Replay, Back, and Next controls. Clips stop after one step. Still diagrams respect the operating system's reduced-motion preference; text and citations remain available if video playback fails.

The ten clips and their poster diagrams are bundled in `public/lessons/recursion-v1`. They are rendered once, require no model key, and add no runtime Python dependency. Docker includes these public assets. The first implementation covers the reviewed demo only; generated courses retain their existing text explanations.

To regenerate assets on Windows (Python 3.12):

    py -3.12 -m venv tmp/manim-env
    tmp/manim-env/Scripts/python.exe -m pip install -r scripts/manim/requirements.txt
    tmp/manim-env/Scripts/python.exe scripts/manim/render_demo.py

On macOS/Linux use `python3 -m venv tmp/manim-env` and `tmp/manim-env/bin/python` instead. Install Arial or change the scene font to an installed font. Manim 0.19.0 is pinned for this renderer. It uses Pango text, so these scenes need no LaTeX installation. The renderer checks clip counts, decodability, and dimensions before writing `app/demo-animation.json`; intermediates and Manim's cache stay in ignored `tmp/manim-media`.

## Enable live AI and search

Set GEMINI_API_KEY in the project-root .env (copy .env.example if needed), or use backend/.env. Both the backend and live check read the root file; existing process variables take precedence, followed by backend/.env, then root .env. Restart the servers after changing configuration. GEMINI_MODEL defaults to gemini-3.5-flash and must support JSON Schema structured outputs. The backend uses Gemini's native generateContent API with server-side authentication; see [Google's structured output guide](https://ai.google.dev/gemini-api/docs/generate-content/structured-output).

Live sessions send selected source passages and submitted answers to Google Gemini. The reviewed demo uses local, deterministic numeric checks and does not call the provider. Free-form understanding cannot be assessed by that demo.

BRAVE_SEARCH_API_KEY is optional. With a key, resource discovery returns public search results; without one, it provides clearly labelled Google/YouTube search links. Results are not ingested until the learner verifies fit and adds the relevant URL or text. Dynamic/login-required pages fall back to copying permitted text.

No API keys are sent to the browser. The live AI wire path is implemented and covered with a mocked provider contract; actual provider generation needs a real key and subject review. After configuring the key, run `.venv/bin/python scripts/check-live.py` (or the WSL equivalent). This makes paid provider calls using an isolated temporary database and checks generation, quotations, an instruction-only answer, reference grading, and fresh practice. Without a key it exits with NOT RUN, not a passing result.

## Supported material and boundaries

- PDF, pasted text, public HTML/plain-text/PDF links.
- Six sources per session, 12 MB per PDF, 100 PDF pages, 180,000 extracted characters per session.
- Image-only/unreadable pages are rejected explicitly; OCR, audio/video transcription and headless browser extraction are not included.
- Full extracted source text stays available. Up to 20 passages are selected for the first journey; the UI states selected/total coverage.
- Quoted passages must exist in the supplied sources. This verifies provenance, not that every generated explanation or grade is factually correct.
- Learning plans have up to eight concepts in prerequisite order. Initial checks do not count as demonstrated understanding.
- Correct repair answers lead to another application question. Ambiguous answers do not advance progress.
- Demonstrated concepts are scheduled for a recall check after 24 hours. Rechecked means correct on the delayed check, not guaranteed mastery.
- Available time and level guide plan generation. The optional deadline supplies context; this release does not have a calendar or deadline notification scheduler.

## Data and operations

SQLite stores extracted material, attempts, reports, and progress in backend/data/solve.sqlite3. Uploaded binary files are not retained. Session ownership uses a random HttpOnly, SameSite=Strict cookie; only its hash is stored. Sessions are private to that browser, without account recovery. Clearing the cookie loses access.

Mutation requests require a configured Origin. URLs are checked for private/reserved addresses at every redirect, with DNS results pinned for the connection. File size and content are validated. AI/source text is treated as untrusted data and rendered as text, not executable HTML.

Anonymous browser limits and a deployment-wide AI request cap bound pilot usage. Configure MAX_AI_CALLS_PER_DAY. Rate limits are a pilot safeguard; public launch still needs appropriate identity and abuse controls. The single-process write lock serializes mutations, including model generation. Add per-session concurrency and database version checks before increasing workers.

Check GET /api/health through the frontend. It reports configuration booleans, never secrets. Request logging includes route/status/latency; model logging records token usage, not source text or answers. The solve logger emits request timings and token counts at INFO level.

Back up SQLite consistently:

    .venv/bin/python scripts/backup.py backend/data/solve.sqlite3 tmp/solve-backup.sqlite3

The backend checks rehearse restoration into an isolated database: integrity, source/course/attempt/report preservation, browser ownership, task resume, and a new answer after restore. This does not yet verify a remote host or its volume backups. For a real recovery, stop the API, preserve the current database and any WAL/SHM files, verify the chosen backup with SQLite integrity_check, copy it to a fresh DATA_DIR as solve.sqlite3, and restart one API worker with that DATA_DIR. Confirm that the original browser resumes its session before retiring the old data. Do not replace files while the API is running. A backup restores database state, not a lost browser ownership cookie.

Backups contain private data. Restrict access and define a retention/deletion policy. Session deletion removes data from the active database; existing backups need separate expiry. Error reports are saved inside their session for manual review; there is no external ticket submission or automatic model retraining.

## Checks

    npm run typecheck
    npm run build
    .venv/bin/python -m unittest discover -s tests -p test_api.py -v

With both servers running:

    npm run test:e2e

On this workspace, backend checks can be run using:

    wsl -d Ubuntu --cd "/mnt/c/Users/HP/OneDrive/Documents/webd/task/Solve.ai" -- .venv/bin/python -m unittest discover -s tests -p test_api.py -v

Playwright covers overview, intake, citations, repair, new practice, ambiguity, browser isolation, resume, completion, mobile layout, reporting and deletion. Screenshots go to tmp/ui. The browser runner copies tests to native temporary storage to avoid OneDrive cloud entries being skipped during discovery, then removes those copies. Backend checks include PDF failures, duplicate sources, schema/citation validation, stale submissions, session isolation, delayed review, isolated backup/restore, and the mocked live contract.

## Container deployment

Dockerfile, backend/Dockerfile and compose.yaml package the two services, keep the API internal, and persist SQLite in a private volume:

    docker compose up --build

The web port binds only to the host loopback interface. For a public pilot, place an HTTPS reverse proxy in front, set SOLVE_ORIGIN to that exact HTTPS origin and SECURE_COOKIES=true, and configure provider keys through the deployment environment. API_URL is compiled into the frontend rewrite; rebuild when changing it.

Container configuration is provided; container execution and a public deployment require Docker/hosting access. No production deployment has been performed.

## Pilot and demo

See PILOT.md for the reviewed source pack, judging walkthrough, reference checks, evaluation protocol, and release gates. Draft participant forms, unseen pre/post/delayed assessments, the private reviewer rubric, and an empty results sheet are in pilot/. They require independent subject review and actual consenting participants. The recursion pack is the only locally reviewed subject pack; broad subject accuracy remains an evaluation task.

## Install Solve

Solve includes a web app manifest and branded home-screen icons. In Chrome or Edge, open the site and choose Install Solve from the browser menu or address bar. On iPhone or iPad, open it in Safari, choose Share, then Add to Home Screen. The installed app opens in a standalone window.

Public installation requires HTTPS; localhost works for development. This version requires an internet connection for lessons and saved sessions. It does not cache private learning data or support offline lessons. No push notifications are requested.

Run the installation metadata check with both services available:

    npm run test:e2e -- --grep PWA
