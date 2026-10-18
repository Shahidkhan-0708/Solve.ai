## Active frontend

The active frontend is [`neFrontend`](./neFrontend), served on port 3002. From that folder run `npm install`, then `npm run dev`, or `npm run build` and `npm start` for production/PWA. Its `/api` proxy connects to the FastAPI backend on port 8000; `API_URL` can override that origin. The old `nFrontend` implementation has been migrated into `neFrontend`. Root `npm run dev` and `npm start` launch this frontend together with FastAPI; root `npm run build` builds it.

# Solve

A working learning coach: bring material, check a starting point, get an explanation, apply it, repair missing reasoning, and return for a delayed recall check.

## Core study loop

Create a learning journey with your available time, target grade/outcome and material. After source confirmation, Solve creates source-backed concepts, teach-back questions, reasoning criteria, and fresh application checks. The learning page shows a ranked study plan, supporting source passages, time allocations, and topics outside the current budget.

Use **Edit study plan** to set remaining minutes and optionally supply exam marks for each topic. Complete weights enable ranking by supplied marks divided by estimated concept study time. Missing weights keep the plan based on prerequisites, due recall and confirmed reasoning gaps; marks and expected gains are never guessed. Dependencies come before dependent concepts. Model estimates are not measured learning times or promised exam gains.

Each answer includes a **Minutes spent on this step** field. Adjust the five-minute suggestion to the time you actually spent; the submitted value reduces the budget. This is a manual log, not a background timer. Old attempts have no inferred time charges. When time is used, the next task phase and completed evidence stay saved; set a fresh budget to continue. Returning on another day does not silently reset the budget.

Incorrect or partially correct reasoning moves a supported gap into the plan. An uncertain judgment does not create a confirmed weakness. Teach-back and assisted success still require a fresh independent application. Choose **Study next**, or choose a ready topic in the plan editor, to override the next topic after the current concept's understanding checks. Completed work and the current question are preserved.

The path shows demonstrated topic coverage, not pass probability. Calibrated pass predictions and actual learning benefit need representative outcome data and subject review. The planner, persistence, budgets and progress transitions run in application code; Gemini supplies source-grounded content and proposed rubric judgments.

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

The demo also includes an interactive sandbox for inputs 0 through 7: predict the result, change the input, and step through the calls and returns. It uses deterministic browser logic, works with keyboard controls, and does not update progress or make AI calls.

The ten clips and their poster diagrams are bundled in `public/lessons/recursion-v1`. They are rendered once, require no model key, and add no runtime Python dependency. Docker includes these public assets.

## AI-generated visual lessons

For your own material, opening **Show a worked example** starts a private animation job. Gemini turns the source-backed concept into a small storyboard, with one reasoning change per step. Exact quotations are verified and a separate teaching review checks the storyboard, with one correction attempt. A fixed Manim renderer then splits, transforms, highlights, connects and combines validated cards, quantities and arrows. No model-generated Python or HTML is executed.

Each step has its own video, still diagram and short explanation. Students control Play, Pause, Replay, Back and Next; reduced motion uses stills. Text remains available while rendering or after failure, with a retry button. Finished clips are reused for that concept. Media requires the session's owner cookie; deleting the session cancels its jobs and removes its clips.

Install the pinned backend requirements to enable rendering. Ubuntu also needs `build-essential python3.12-dev pkg-config libcairo2-dev libpango1.0-dev fonts-dejavu-core ffmpeg`; Docker installs its renderer dependencies. The API Python environment must contain Manim, or set `MANIM_PYTHON` to another Python environment containing the pinned Manim, FastAPI and Pydantic packages. No LaTeX is required. Keep one API process: the queue runs one job at a time, accepts at most eight jobs, and limits each render to four minutes. Interrupted jobs become retryable after restart.

Run `.venv/bin/python scripts/check-animation.py` for an isolated live source-to-video check; it makes Gemini calls and saves sample clips under `tmp/animation-check`. The visuals currently use schematic cards, dots, bars and arrows, with 2–8 steps and at most six objects per step. They do not generate arbitrary anatomy, 3D scenes or narration. Automated source and model checks do not replace subject review.

To regenerate assets on Windows (Python 3.12):

    py -3.12 -m venv tmp/manim-env
    tmp/manim-env/Scripts/python.exe -m pip install -r scripts/manim/requirements.txt
    tmp/manim-env/Scripts/python.exe scripts/manim/render_demo.py

On macOS/Linux use `python3 -m venv tmp/manim-env` and `tmp/manim-env/bin/python` instead. Install Arial or change the scene font to an installed font. Manim 0.19.0 is pinned for this renderer. It uses Pango text, so these scenes need no LaTeX installation. The renderer checks clip counts, decodability, and dimensions before writing `app/demo-animation.json`; intermediates and Manim's cache stay in ignored `tmp/manim-media`.

## Enable live AI and search

Set GEMINI_API_KEY in the project-root .env (copy .env.example if needed), or use backend/.env. Both the backend and live check read the root file; existing process variables take precedence, followed by backend/.env, then root .env. Restart the servers after changing configuration. GEMINI_MODEL defaults to gemini-3.1-flash-lite and must support JSON Schema structured outputs. The backend uses Gemini's native generateContent API with server-side authentication; see [Google's structured output guide](https://ai.google.dev/gemini-api/docs/generate-content/structured-output).

Live sessions send selected source passages and submitted answers to Google Gemini. The reviewed demo uses local, deterministic numeric checks and does not call the provider. Free-form understanding cannot be assessed by that demo.

Resource discovery uses the configured Gemini API with Google Search grounding. Only returned web-source metadata is shown as search results. Without a key or when grounding is unavailable, it provides clearly labelled Google/YouTube search links. Results are not ingested until the learner verifies fit and adds the relevant URL or text. Dynamic/login-required pages fall back to copying permitted text.

No API keys are sent to the browser. The live flow has been verified with Gemini 3.1 Flash-Lite on the original recursion notes and a draft fractions source pack. It checks generation, exact source quotes, instruction-only answers, reference grading, and teach-back before independent practice. These integration checks do not replace subject review or a learner pilot. After configuring the key, run `.venv/bin/python scripts/check-live.py` (or the WSL equivalent). This makes paid provider calls using an isolated temporary database and checks generation, quotations, an instruction-only answer, reference grading, and fresh practice. Without a key it exits with NOT RUN, not a passing result.

## Supported material and boundaries

- PDF, pasted text, public HTML/plain-text/PDF links.
- Six sources per session, 12 MB per PDF, 100 PDF pages, 180,000 extracted characters per session.
- Image-only/unreadable pages are rejected explicitly; OCR, audio/video transcription and headless browser extraction are not included.
- Full extracted source text stays available. Up to 20 passages are selected for the first journey; the UI states selected/total coverage.
- Quoted passages must exist in the supplied sources. This verifies provenance, not that every generated explanation or grade is factually correct.
- Learning plans have up to eight concepts in prerequisite order. Initial checks do not count as demonstrated understanding.
- New live courses include reasoning criteria and teach-back before a fresh application. Ambiguous answers do not advance progress; contradictory rubric judgments are rejected. Old sessions without those fields still load.
- Worked explanations are hidden during independent checks. Requesting worked/source help is saved; a correct assisted answer leads to another independent application rather than demonstrated progress.
- Feedback shows the learner answer, individual reasoning checks and supporting source references. Failed next-question generation retains the assessment and resumes without regrading the submitted answer.
- The first recall check is scheduled after 24 hours. Later checks use FSRS 6.3.2 and saved review history, with at least a day between delayed checks. Hard/Good/Easy ratings affect scheduling only after correct, unassisted recall. Incorrect recall uses Again; uncertain grades leave the schedule unchanged. Successfully rechecked concepts remain eligible for later review. These are practice records, not calibrated mastery probabilities.
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

## Live grading benchmark

Run `.venv/bin/python scripts/check-grading.py` with the configured key. The seven-case draft dataset in tests/grading-cases.json covers valid paraphrases, incomplete reasoning, wrong rules, ambiguous references, instruction attacks, numeric answers without reasoning, and conflicting source material. It uses the same assessment function as the app, with paced requests and temporary data. Outcome-only reports, model and prompt/dataset versions are saved under ignored tmp/. The revised dataset passed on Gemini 3.1 Flash-Lite on 2026-10-14; independent reviewer approval remains required.

To check a second subject, run `.venv/bin/python scripts/check-live.py pilot/fractions-source.md`. This draft original source pack passed the same integration flow, but has not received independent subject approval or learner efficacy testing. No additional provider or search key is required.
