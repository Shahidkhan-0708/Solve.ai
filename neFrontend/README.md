# SOLVE neFrontend

Next.js 16 / React 19 frontend connected to the FastAPI backend in `../backend`. Default frontend port: **3002**. The original exported designs remain under `/screens/<export-id>` as reference screens.

## Run

Start the existing backend from the repository root:

    .venv/bin/python -m uvicorn backend.main:app --host 127.0.0.1 --port 8000

On this Windows workspace, use WSL Ubuntu for that Python environment. Then, from `neFrontend`:

    npm run dev

Open http://127.0.0.1:3001. For production:

    npm run build
    npm start

`/api/*` uses a same-origin rewrite to http://127.0.0.1:8000. Set the server-side `API_URL` before starting development or building if the backend runs elsewhere. Backend `ALLOWED_ORIGINS` must include the frontend origin. Keep Gemini, Google and VAPID secrets in backend configuration; no provider keys belong in frontend code.

## Connected behavior

- Guest ownership, Google sign-in/configuration, onboarding, saved profile and preferences, interface translation, sign-out.
- Persistent chat streaming, cancellation, regeneration, text/visual/audio delivery, feedback, conversation search, rename, pin, archive, restore, delete and export.
- Study intake, text/URL/file sources, extracted-text inspection and removal, source-backed plan generation, question choices, assessed attempts, teach-back, assistance tracking, next-question preparation and issue reports.
- Saved learning-session history, source-backed concept graph and evidence, budget/marks-based planning and topic selection. Chat and Study history remain scoped separately.
- Saved long-term goals, weekly hours, generated roadmaps, linked learning sessions, milestone check-offs, archive/restore, deletion and export. Milestone check-offs are planning records, not proof of demonstrated understanding.
- Flashcard creation, recall review, due dates, answer reveal and deletion; scheduled reminders, due-reminder read/delete, and browser push subscription controls.
- AI-to-Manim lesson jobs, status polling, protected clips, individual step explanations, next/previous controls and reduced-motion stills. The reviewed recursion demo reuses bundled lesson assets and works without a model key.

Backend availability and provider failures are shown in the UI. Google sign-in, live Gemini features, OCR, transcription, speech and device push require their corresponding backend configuration. The app does not simulate successful provider responses. Original export figures are illustrative; saved learning records and assessed evidence are loaded separately from the backend.

## Privacy and PWA

Requests carry same-origin credentials, mutation revisions and grading operation IDs. Private API/media responses and network HTML/RSC never enter shared service-worker caches. Only enumerated public build shells/assets are cached. The browser retains scoped UI drafts; saved records remain on the backend. Device push requires a production service worker over HTTPS or localhost and browser permission.

## Checks

    npm test
    npm run typecheck
    npm run build
    npm run test:browser

The browser suite requires a running frontend connected to an **isolated backend with GEMINI_API_KEY empty**. It verifies actual persisted records without paid provider calls. `SOLVE_TEST_URL` overrides the frontend origin; `PLAYWRIGHT_CHROMIUM_EXECUTABLE` can point to an installed Chromium executable. Run backend regressions from the repository root with `.venv/bin/python -m unittest discover -s tests -p 'test_*.py' -q`.

See [API integration map](docs/api-integration.md) for screen-to-endpoint coverage and validation limits.
