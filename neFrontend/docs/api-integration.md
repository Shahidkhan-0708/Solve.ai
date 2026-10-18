# neFrontend API integration

The frontend uses `lib/api.mjs` through the existing screen controller and backend workspace. Backend responses are authoritative; browser state holds drafts and selected record IDs. Reference exports under `/screens` do not send backend mutations.

| API family | Connected frontend |
| --- | --- |
| `health`, `capabilities`, `me`, `me/profile` | Ownership bootstrap, service availability, onboarding and settings |
| `auth/config`, `auth/challenge`, `auth/google`, `auth/logout` | Welcome sign-in and sign-out; unavailable configuration is reported |
| `conversations`, `conversations/{id}` | Chat/Study conversation creation, history, search, selection, settings and record management |
| `conversations/{id}/messages`, `stop` | Streaming, interruption and regeneration |
| Conversation `visual`, message `feedback`, `export` | Delivery controls, response feedback and downloads |
| Conversation `attachments`, `media/{id}` | Private file extraction, media playback and resource removal |
| `sessions`, session `intake`, `sources/text`, `sources/url`, `sources/file` | Assessment intake, saved study details and material management |
| Session `start`, `help`, `choices`, `attempt`, `advance` | Source-backed plans, assisted examples, question formats, assessed work and explicit continuation |
| Session `plan`, `evidence`, `explain`, `lesson-feedback`, `report` | Study budgets, supplied exam marks, preferred topics, graph/evidence, explanations and feedback |
| `study-history`, session `export`, session patch/delete | Workspace-filtered learning history, archive/pin/restore, downloads and deletion |
| Session `animations`, animation status and media | Generated lesson playback with source passages, step controls and still diagrams |
| `goals`, goal patch/delete/export | Saved goal creation, selection, weekly hours, archive/restore, deletion and downloads |
| Goal `plan`, `sessions`, `milestones` | Roadmap generation, linked learning sessions and explicit milestone check-offs |
| `cards`, card `review`, card delete | Account flashcard library and recall scheduling |
| `notifications`, notification `read`/delete | Reminder creation and management of due reminders |
| `push/config`, `push/subscriptions` | Browser push permission, subscription and unsubscribe controls |
| `media/transcribe`, `media/speech` | Microphone transcription and spoken explanations |
| `interface/translate` | Interface-language preferences, stable action labels and restoration of English |

Website/notes material added to an existing conversation is linked to its owned learning context before the next turn. Conversation context updates validate session ownership. Removing a website source calls the learning-session source endpoint rather than the binary-media endpoint. Partial bulk-removal failures preserve items the server did not delete.

Mutations use fresh record revisions, and grading retries preserve operation IDs. Lesson previews, voice explanations, bookmarks and animations retain assisted-learning semantics. Goal check-offs and flashcard records do not fabricate learning-session mastery.

The browser checks use a real isolated FastAPI database with providers disabled. They cover profile persistence, intake values, conversation/history/XSS, ownership, assessment/time accounting, goal archive/restore, card creation/deletion, reviewed lesson playback/stills, issue reporting followed by grading, reminders and language preference recovery. Unit checks cover request errors, partial deletion, context ownership/scoping, provider contracts and PWA privacy. Live Google authentication, microphone hardware, paid model/media responses and device push delivery require configured services and are not established by these checks.

Live verification (2026-10-15): configured Gemini passed source-backed lesson generation, exact quotations, grading, teach-back, frontend chat streaming/persistence, and AI storyboard/review followed by two rendered Manim clips. Push configuration uses server-only VAPID keys in ignored backend/.env. Live browser testing found the standard browser subscription expirationTime field was rejected; the API now validates this optional field while retaining key and endpoint validation.

Live push verification passed through Chrome and Firebase Cloud Messaging: subscription registration, scheduled backend dispatch, the production service-worker push handler, browser notification creation, and persisted delivered status. The test reminder and subscription were removed afterward. Tests used a dedicated persistent Chrome profile; notification visibility and behavior on other devices/operating systems remain untested. The running frontend and generated service worker were aligned after a stale-build cache failure.

Message completion verification: a live two-message conversation produced two complete saved replies, restored all four messages after reload, and reached a ready final animation with all clip and still URLs returning 200. The browser regression checks drafting during an in-flight answer, send-button availability, notification access, recent-thread navigation and mobile controls. Fixed the streaming callback clearing new follow-up drafts, the send button becoming enabled while a response was still in progress, and the toolbar tabs blocking notifications. Storyboard prompts now include bounded, exact citation choices; rejected storyboards retain the reviewer reason and can still require Retry. This is not an audit of every historical conversation.
