# SOLVE frontend/backend integration plan

Date: 2026-10-15. Status: integration foundations and the first guest study journey implemented; remaining feature phases are still open.

## Implementation progress

Implemented the same-origin API connection, development origins, revision/CAS writes, per-session coordination, persisted grading replay, read-only session retrieval, explicit advance, schema migration, principal mapping foundation, and static-only PWA caching. `/study` now uses real saved sessions, intake/materials, grading, assisted help, plan updates, evidence, graph status, resume and reports. Original screen exports remain available under `/screens/{id}`.

Provider decision: prefer existing Google/Gemini services for OCR, transcription and spoken explanations. Google Sign-In client configuration is not available yet; do not simulate successful sign-in. Account/authentication implementation, persistent general chat, long-term goals, media and private offline synchronization remain unfinished.

Verification during implementation: production build, 45 backend tests, three request-helper tests, real browser/API proxy and guest-study checks, chat layout regression, all 41 exported visual-screen checks, generated JSX slot validation and production PWA cache checks. No paid provider calls were made by these checks. The original database was backed up to `tmp/solve-before-frontend-integration.sqlite3`; treat that backup as private learning data.

## Conclusion

Keep the Stitch Next.js frontend, FastAPI learning backend, SQLite, Gemini integration, and existing tests. First establish safe ownership, API wiring, cache boundaries, and recoverable mutations. Then connect the existing learning loop, add persistent chat, and complete the remaining account, planning, media, and offline features in dependency order.

Every missing feature remains in the roadmap. A phase is complete only when the frontend uses persisted backend results, error paths work, and its tests pass. A prototype toast, sample graph, or simulated save does not qualify.

## Review method and evidence

Context7 retrieved current primary documentation for Next.js, FastAPI streaming, and Google Identity. An independent agent challenged the proposal using gstack's architecture, code quality, testing, and performance criteria. The engineer and reviewer then resolved the concurrency and ownership choices in a follow-up exchange.

Context7 is a documentation source, not an independent reasoning agent. This is an advisory engineering review, not a completed formal gstack review or a cross-model clearance. Windows gstack links are incomplete; its startup command was reachable through WSL. No application or live-provider tests were executed during the original planning review; subsequent implementation verification is recorded above.

Primary documentation:

- [Next.js backend for frontend](https://nextjs.org/docs/app/guides/backend-for-frontend)
- [Next.js authentication](https://nextjs.org/docs/app/guides/authentication)
- [Next.js PWA guide](https://nextjs.org/docs/app/guides/progressive-web-apps)
- [FastAPI streaming responses](https://fastapi.tiangolo.com/advanced/custom-response/)
- [Google server-side identity verification](https://developers.google.com/identity/gsi/web/guides/verify-google-id-token)

The installed Next.js 16.3.8 guides take precedence over Context7 examples that use a different version or experimental APIs. Do not introduce experimental offline APIs merely because they appear in retrieved documentation.

## What already exists

- `backend/main.py`: browser ownership, source validation, SQLite learning sessions, course generation, task grading, assisted evidence, repair, teach-back, FSRS recall, ranked/time-budgeted plans, reports and resource discovery.
- `backend/animation.py`: generated lesson jobs and owner-protected media. Reuse this pattern where appropriate without building a parallel rendering service.
- `app/api.ts` and `app/workspace.tsx`: a working request/error pattern and integration with the learning APIs. Reuse their contracts in `newFrontend`.
- Root `next.config.ts`: same-origin API rewrite. `newFrontend/next.config.mjs` lacks it.
- `newFrontend`: Stitch exports, tokens, local fonts/assets, screen variants, routing, PWA shell, and prototype interactions. Preserve the visual structure while replacing prototype controllers with React state as each flow becomes live.
- `tests/test_api.py`: ownership, CSRF, source validation, stale answers, grading, repairs, time accounting, recall, backup/restore, and interrupted next-question generation tests.
- Existing Playwright tests cover the old learning frontend; the new screens need their own real-API integration journeys.

## Challenges and recommended decisions

| Proposal | Review challenge | Recommended resolution |
|---|---|---|
| Wire APIs immediately | Frontend port 3001 is absent from default backend origins; proxy is missing | Configure one public origin and same-origin `/api` routing first; prove cookie and CSRF behavior |
| Add a Google button | Current records belong to a browser-cookie owner, not an account | Introduce principals and revocable login sessions; preserve old owner IDs through a mapping |
| Stream chat using existing writes | The global lock currently covers provider I/O and blocks unrelated users | Use per-session coordination, durable operation IDs, revisions and short transactions before streaming |
| Introduce Redis/job workers immediately | Adds infrastructure without an established requirement | Keep one process/host initially; add a queue when jobs must outlive requests or replicas are needed |
| Treat a learning session as a chat thread | Learning state has a different lifecycle and grading semantics | Separate conversations/messages; optionally link conversations to learning sessions |
| Store all progress in a new ledger | Attempts already exist; copying them risks divergent evidence | Expose existing attempts first; retain complete feedback for future attempts and derive summaries |
| Keep current PWA page caching | Personalized HTML/RSC can contain private records even when `/api` is excluded | Cache only public shell/static content; introduce explicit account-scoped private offline storage later |
| Expand one session into a three-month plan | Current contracts cap time at 600 minutes and concepts at eight | Add goals/milestones that coordinate smaller learning sessions |
| Use one successful grade as a retry result | A response may be lost after commit, causing duplicate work | Persist operation outcome and replay it; preserve grading before preparing the next task |

These are proposals for the implementation, not already approved architectural changes.

## Architecture and data boundaries

```text
Next.js Stitch screens
  | React state + one request helper; public assets remain unchanged
  v
same-origin /api proxy
  v
FastAPI: principal resolution + authorization + validation + quotas
  |
  +-- existing learning sessions -> plans/tasks/attempts/recall
  +-- accounts/login sessions -> profiles/preferences
  +-- conversations -> ordered messages -> generation operations
  +-- goals -> milestones -> linked learning sessions
  +-- sources/attachments -> validated parsing/transcription
  +-- SQLite: migrations, revisions, durable operation outcomes
  |
  +-- Gemini / media providers (outside database transactions)

Public service-worker cache: shell, fonts, icons, static assets only
Private offline store: explicit account-scoped drafts/records/outbox
```

Keep learning state JSON initially. Normalize new account/chat/goal records because their access and query needs differ. Derive graph nodes from concepts/prerequisites/evidence; do not create an unrelated graph database. Add indexed owner/mode/time fields and paginated queries. Introduce relational attempt tables only if measured query costs justify migration.

Every protected query, search, export, media request and mutation must authorize the principal. Browser-provided owner IDs, account IDs and email addresses never establish ownership.

## Implementation sequence and acceptance gates

### Phase 0: Integration and persistence foundations

- Add the same-origin rewrite and configured frontend origins without weakening existing CSRF checks.
- Adapt the existing request helper for structured errors, pending states, cancellation and no-store requests. Keep provider secrets server-side.
- Freeze request/response contracts for existing learning endpoints and add versioned database migrations with an existing-database fixture and restore rehearsal.
- Change PWA caching before any personalized server rendering is introduced. Keep static design references separate from live records.
- Define principal-to-owner mapping that preserves existing learning and animation ownership.
- Add operation IDs, result persistence and revision conflict handling to new mutations and grading retries. Preserve compatibility for the old frontend during migration.
- Replace broad provider-call serialization with per-session coordination. No database transaction stays open during provider I/O. Keep one API process and local SQLite.
- Make new reads side-effect-free. Move preparation/recovery to explicit operations; transition the old mutating session GET carefully with regression coverage.
- On restart, recover interrupted operations into an explicit retryable state. Never promise exactly-once external billing when a provider lacks idempotency.

Gate: real health/session calls from port 3001; cross-owner denial; migrations/backup restoration; concurrent independent sessions; stale revisions; response-loss retries; no private HTML/API/RSC caching.

### Phase 1: Account, onboarding and preferences

- Implement Google sign-in using the provider's supported client integration and a vetted server verification SDK. Validate signature, issuer, audience, expiry and the flow's CSRF/nonce protections. Use Google `sub`, not a supplied email, as provider identity.
- Issue revocable, expiring opaque application session cookies with appropriate HttpOnly/Secure/SameSite protections. Implement logout, session expiry and account switching.
- Offer an explicit claim action for data accessible through the current valid guest cookie. Claim atomically; never reassign an owner already claimed by another account or merge by matching email.
- Persist profile, onboarding completion, learning preferences, language/detail settings and accessibility preferences. Keep unsaved edits on validation/network failure.
- Store account preferences in the backend; implement text size and reduced motion in the browser. Test microphone permission locally instead of inventing a backend permission toggle.

Gate: invalid/expired tokens rejected; claim conflicts safe; existing guest sessions/media preserved; profile/preferences survive reload; logout and account switching isolate private local data.

### Phase 2: Complete the existing learning journey

- Connect assessment/intake, source selection, confirmation, course/approach generation, plan adjustments, lessons, practice, help, teach-back, status and resume to existing APIs.
- Display real server progress and citations; remove canned success/feedback from live views.
- Extend intake explicitly for question-bank scope and topic inclusion. Do not infer exam weights, promised scores or readiness probabilities.
- Add a validated multiple-choice contract where the Stitch practice screen requires options; preserve free-text reasoning and uncertain grading behavior.
- Expose paginated attempt history and evidence. Retain full historical feedback for new attempts; label missing legacy detail honestly.
- Derive graph states, attention topics, first-attempt/retry counts, supported answers, and trend ratios from records. Define denominators and do not turn diagnostic scores into mastery claims.
- Reuse help/repair/recall logic and generated animations. Add the lesson follow-up actions, alternative explanations/examples, code variants, bookmarks/study cards and structured feedback alongside the relevant lesson contracts.

Gate: source -> confirmation -> plan -> lesson -> answer/help -> evidence -> reload/resume works against FastAPI on desktop/mobile; no double grading/time charges; uncertain answers never advance progress; model evaluations cover new question/explanation contracts.

### Phase 3: Persistent conversational chat and history

- Add conversations with explicit Chat/Study mode, title, pin/archive state and optional learning-session link. Add ordered user/assistant messages and durable generation state.
- Persist the user message before generation. Stream deltas using an authenticated POST response and cancellable async provider reads; no WebSocket is required for text streaming.
- Implement stop, failure and regenerate states. Persist partial/interrupted output; do not append late results after cancellation/replacement. A stopped browser request does not guarantee the provider stopped billing.
- Add mode-scoped, owner-scoped paginated history/search, message jumps, rename, pin, archive, restore, delete and Markdown/LaTeX export. Use SQLite search facilities where available; do not add a search service.
- Restore active thread, drafts and navigation context without fabricating source-backed answers. Keep general chat separate from assessed learning evidence.

Gate: duplicate send/reconnect does not duplicate messages; cancel/late completion safe; histories and exports survive reload and remain private; search returns the correct message anchor and workspace only.

### Phase 4: Long-term goals, milestones and notifications

- Add long-term goals, weekly availability, learner timezone, milestones, cadence and versioned plan revisions. Link small learning sessions to goals instead of expanding one unlimited session.
- Implement edit target, adjust pace, rename/archive/restore plans and curriculum import with provenance and validation.
- Reuse prerequisite-aware prioritization and recall evidence. Show planned versus completed activity separately; breaks do not inflate learning counts.
- Add notification preferences/subscriptions and a durable due-notification dispatcher with deduplication, unsubscribe and expiry. In-app reminders and opt-in push require real scheduling, not a timer in an open tab.

Gate: three-month plans persist; revisions cannot erase completed evidence; timezone/daylight-saving changes and overdue milestones are handled; reminder delivery is deduplicated and unsubscribing stops it.

### Phase 5: Attachments and voice

- Initially expose the real supported PDF/text/URL limits. Replace the misleading 25 MB/all-format promise until those contracts are implemented.
- Add TXT/MD file parsing, DOCX extraction and image OCR with MIME/content checks, page/pixel/decompression limits, parser deadlines and source provenance. Reach the advertised upload size only after memory/resource bounds are validated; retain extracted-text/session limits.
- Add bounded audio capture/upload, transcription, editable transcript confirmation and spoken teach-back submission. Keep permission denial and text fallback usable. Define recording retention/deletion before storing audio.
- Implement listen/TTS playback and speed settings, reusing browser media controls and reduced-motion preferences. Provider availability must be explicit; a waveform is not transcription.
- Use capability responses to disable unavailable provider functions truthfully. Configure deployment microphone permissions intentionally; root headers currently disable the microphone.

Gate: supported formats parse correctly; malformed/oversized/image-only input produces clear outcomes; upload/transcription retry preserves drafts; navigation stops capture; provider failure never produces simulated success.

### Phase 6: Private offline support and final verification

- Preserve installable PWA support and public shell caching. Add account-scoped IndexedDB records/drafts with deliberate private offline availability, logout/account-switch cleanup and quota/eviction behavior.
- Add an outbox only after server idempotency exists. Replay original operation IDs; handle stale task/state revisions explicitly instead of silently overwriting newer work.
- Offline answer submission is pending, never evaluated or completed until the server confirms it. Queue only supported bounded operations; do not claim AI works offline.
- Compare all live screen states against Stitch at matching viewports. Keep fonts, spacing, icons and component geometry; replace demo content with genuine empty/loading/error states where records are absent.
- Extend the existing production runner/container path for `newFrontend`, health checks, secure origins/cookies, backups and required provider configuration. Do not deploy as part of planning.

Gate: airplane-mode reload; service-worker restart; failed/out-of-order replay; no cross-account cached records; schema upgrades; quota eviction; desktop/mobile browser journeys; production build and regression suites pass.

## Feature coverage map

| Audited gap | Planned closure |
|---|---|
| Google authentication/logout | Phase 1 |
| Onboarding/profile/preferences | Phase 1 |
| General chat/streaming/stop/regenerate | Phase 3 |
| History search/message jumps/thread management/export | Phase 3 |
| Chat/Study isolation | Foundations in 0; persistent mode records in 3 |
| Exam scope/intake extensions | Phase 2 |
| Multiple-choice and spoken practice | Text/MCQ in 2; audio in 5 |
| Graph/evidence/statistics/history detail | Phase 2 |
| Lesson customization/cards/ratings | Phase 2 |
| Long-term planning/cadence/milestones/archive | Phase 4 |
| Reminders/push | Phase 4 |
| Extra file formats/OCR/size mismatch/import | Parsing in 5; curriculum semantics in 4 |
| Voice transcription/TTS | Phase 5 |
| Offline private records/replay | Phase 6 |
| Existing study-loop functionality | Wired in Phase 2; reused throughout |

## Code quality review

Do not add live API mutations to every generated prototype controller: controllers currently mutate the DOM and conflict with React-owned data. Introduce shared request/state handling, then convert one logical screen flow at a time, retaining the exported classes and components. Document generation boundaries so a Stitch re-export cannot overwrite integration logic.

Keep model judgments separate from application state transitions. Reuse source validation, citation checks, quotas and grading error handling. Distinguish retrying an incomplete operation from repeating a successful operation. Avoid duplicate persistence for graph/status versus learning attempts.

## Performance review

SQLite remains appropriate for one host/process, with indexed owner/mode/time queries and bounded pagination. Per-session locks improve concurrency between users but are not a multi-worker solution. Revision checks prevent stale writes; provider operations run outside transactions. Define bounded context, output, attachment and audio sizes plus per-principal/deployment quotas.

Measure concurrent session latency, database busy time, streaming cancellation and service-worker install size. A hosted database becomes necessary when replicas or write volume require it; a durable queue becomes necessary when jobs must survive request lifetimes. Neither migration alone solves authorization or lost updates.

## Test diagram and failure registry

Existing tests below are inspected, not executed. All proposed paths are test gaps until implemented and verified.

```text
principal/auth/guest claim [NEW] -> unit/API + browser account switch
  invalid token / replay / conflicting claim / revoked session
operation ID + revision [NEW] -> API + concurrency/crash fixtures
  duplicate / stale tab / result lost after commit / interrupted provider
learning loop [EXISTING] -> retain API tests + NEW Stitch integration E2E
  uncertain grade / assisted work / exhausted time / failed next question
conversation/generation [NEW] -> API + streamed browser tests
  cancellation / late completion / partial output / provider outage
search/export/management [NEW] -> owner-isolation API + reload E2E
  pagination / escaped content / archived state / wrong mode
evidence/graph/stats [EXTENDED] -> deterministic aggregation tests + E2E
  retry denominators / legacy absent detail / no evidence
goals/reminders [NEW] -> schedule unit/API + dispatcher integration
  DST / revision conflict / duplicate notification / unsubscribe
parsers/audio/TTS [NEW] -> malformed fixtures + browser permission/media
  size limit / timeout / denial / missing provider / capture cleanup
private offline/outbox [NEW] -> browser cache/storage/replay tests
  logout / account switch / stale task / eviction / interrupted sync
migrations/restore [EXTENDED] -> existing database fixture + restore tests
```

| Failure | Required recovery and verification |
|---|---|
| Server response lost after grading commit | Replay original result; assert one attempt and one time charge |
| Next-question generation fails | Keep grade/evidence; retry only preparation; retain existing regression |
| Guest data claimed by another account | Reject atomically; no record/media ownership transfer |
| Chat stopped but provider later finishes | Ignore stale result; retain interrupted status; bounded provider cancellation |
| Two tabs edit the same plan | Reject stale revision; preserve edits and offer reload/reconcile |
| Source/audio parser times out | Preserve draft/input reference; show retry/remove, never mark ingested |
| Reminder retried after restart | Delivery deduplication and unsubscribe checks |
| Offline queue returns after task changed | Conflict state; do not grade the wrong question or clear the draft |
| Account switch with cached private records | Clear or isolate store; verify prior account data cannot be opened |
| Migration fails | Atomic rollback; verified backup remains recoverable |

Every new protected path requires a cross-owner rejection test. Every identified regression requires a test alongside the change. Model-facing additions need prompt/citation/uncertain-grade evaluations; mocked provider tests alone cannot establish subject correctness.

## Implementation tasks and affected areas

1. API/cache/ownership/operation foundation: `newFrontend/next.config.mjs`, request helper, `newFrontend/public/sw.js`, backend persistence/boundaries, migrations and API tests.
2. Account/profile/preferences: narrow backend auth/profile modules, existing settings/onboarding screens and browser tests.
3. Live learning/evidence: existing backend learning contracts, new paginated read endpoints, React screen flows, API/browser/model evaluation fixtures.
4. Chat/history: narrow backend conversation module and new tables, composer/history flows, streaming and privacy tests.
5. Goals/reminders: goal records, scheduler entry point, plan/status screens, scheduling fixtures and notification integration.
6. Parser/media extensions: source/media handling, capability/configuration contracts, browser recording/playback, bounded test fixtures.
7. Offline/release: private browser store/outbox, cache policy tests, live screen comparisons, runner/container/docs updates.

Implement sequentially through persistence and ownership foundations. Parallel work, if later authorized, must not independently edit the same migration/schema, ownership contract or shared runtime. No mass rewrite of all exports in one change.

## Not in scope

- A replacement backend, microservices, graph database, search cluster, Redis or a database migration solely for fashion: existing stack can support the first milestone.
- A visual redesign: Stitch remains the visual source of truth.
- Payments, social sharing, collaboration or administrator dashboards: absent from this gap-closing request.
- Public deployment, provider purchases or production data migration during planning: require concrete implementation/configuration and deployment authorization.
- Offline AI generation or guaranteed marks/mastery probabilities: unsupported and misleading.

## External requirements and recommended starting point

Start with Phase 0 and a deterministic existing demo journey, then verify the real source-backed learning flow. Build identity/profile on the established owner mapping before enabling persistent account chat. Continue through every phase; do not label unavailable media features complete simply because their contracts exist.

Google sign-in needs a configured client and authorized origins. Transcription/OCR/TTS and push need supported providers/runtime configuration, limits and retention choices. Live provider checks may incur cost and must be distinguished from deterministic tests. First deployment must remain one API process/host until measured requirements and tests justify changing that constraint.

## GSTACK REVIEW REPORT

| Review | Status | Findings |
|---|---|---|
| Documentation | Context7 consulted | Next/FastAPI/Google primary docs; installed Next guides checked |
| Scope | Advisory recommendation | Reuse existing learning backend; cover all gaps in ordered phases |
| Architecture | Advisory completed | Identity, concurrency and private-cache foundations precede live features |
| Code quality | Advisory completed | Keep integration outside generated prototype controllers; reuse contracts |
| Tests | Plan produced, not run | New auth/chat/offline/media paths require tests; preserve existing regressions |
| Performance | Advisory completed | Single-host SQLite; short transactions; bounded queries/provider work |
| Independent challenge | Same-model agent | Counterproposal resolved: no new queue initially; durable operations and explicit claim |
| Formal gstack clearance | NOT CLAIMED | Interactive full workflow and shipping review have not been completed |

**VERDICT:** Backend account/profile, conversation/history, goal/roadmap, flashcard, reminder/push, file/OCR/audio and lesson-action gaps are implemented, with canonical live frontend callers and owner/revision checks. Provider configuration and real-device/provider validation remain external release requirements. This report does not claim formal gstack clearance or production deployment.

**UNRESOLVED DECISIONS:**
- Configure the actual Google client/origins and verify the sign-in integration.
- Configure preferred Google/Gemini transcription, OCR and TTS support, budgets and recording retention.
- Confirm private offline-data retention requirements before enabling offline access to personal learning records.

## Implementation update (2026-10-15)

The new APIs live in `backend/accounts.py`, `backend/product.py`, `backend/media.py`, and `backend/notifications.py`, using the existing SQLite ownership boundary and provider helpers. Migration 2 preserves previous learning data. The original reference screens remain available; canonical chat, settings/onboarding, history, plans, learning/practice/evidence and graph routes call saved APIs. Media is private, bounded and expires; account claim moves existing guest ownership rather than copying progress or treating an email as identity.

Draft recovery preserves submission IDs for idempotent retries. Private page/API caching and offline model generation remain disabled. English is the default Stitch copy; optional interface localization uses bounded, private cached translations. Saved explanation language and detail preferences are passed to the teaching provider. No deployment was requested. Actual Google identity, push delivery and paid media-provider availability must be checked with configured credentials before release.
