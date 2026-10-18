# Remaining implementation plan

Updated 2026-10-14. This is a plan, not a completion claim.

## Verified starting point

The app already has Gemini generation and rubric assessment, PDF/text/public-link intake, source quotations, teach-back, assistance tracking, independent applications, saved assessment evidence, a deterministic recursion exercise, a time-budget/prerequisite planner, and recurring FSRS reviews. Reuse these components.

Recorded checks: 25 backend checks; real Gemini integration on recursion and a draft fractions pack; seven draft grading cases; 13 browser checks and a production build in an isolated copy. Those browser checks did not upload a real PDF. The student's reported upload failure remains unresolved. The isolated build does not prove the currently running workspace serves the same version.

The earlier status table in PRODUCT-REQUIREMENTS.md describes the pre-implementation baseline. Its final implementation record and this plan describe the later state.

## Execution order

| Order | Deliverable | Smallest implementation | Completion check |
| --- | --- | --- | --- |
| 1 | Material upload works visibly | Reproduce file selection and drag/drop against the current material page. Trace the request and response before changing code. Fix the shared upload path; show extraction status, a source row on success, and actionable errors. Confirm supported formats. | Browser uploads a real text PDF, inspects extracted text, reloads successfully, and retries after an invalid file. Check size limits, unreadable/scanned pages, duplicate material, and session ownership. |
| 2 | Learner chooses a useful source scope | Reuse existing passages and citations. Let the learner choose pages/chapters before generation; pass that selection through the existing start endpoint. Show included pages and excluded pages explicitly. | Every generated concept has validated evidence inside the selected scope. Missing support is disclosed. Preserve default behavior for saved sessions. Do not imply complete textbook coverage from a subset. |
| 3 | Assessment quality becomes reviewable | Expand the existing grading dataset with independently approved cases from both subjects. Save prompt/model versions and outcome reports using the existing scripts. Add clarification handling only where reviewed ambiguous cases show a concrete need. | Reviewer checks paraphrases, partial reasoning, wrong rules, ambiguity, conflicts, and instruction attacks. Critical false-credit/source-support regressions block a release. Thresholds are agreed before running the release comparison. |
| 4 | A reported wrong grade can be corrected | Reuse reports and saved attempts. Add an authorized reviewer correction record containing original attempt ID, corrected result, reason, reviewer, and time. Recompute affected progress/review state from evidence without regenerating or deleting answers. | Corrections preserve the original record, cannot credit assisted work as independent, and remain consistent after reload. Unauthorized users cannot view or change another learner's records. |
| 5 | The learning path is easier to understand | Reuse prerequisite links and StudyPlan. Show why a task is next, supporting gap evidence, and blocked prerequisites in the existing list. Add branching only where reviewed evidence identifies a prerequisite gap. | A learner can inspect the reason, override an eligible next topic, and retain completed work. Uncertain grades do not create confirmed weakness labels. No separate graph library is needed. |
| 6 | Learner access and hosting are dependable | Define the host and account-recovery requirements, then use maintained authentication rather than custom passwords. Add an ownership-checked session export. Verify HTTPS, secure cookies, retention, backup restoration, and actual usage limits on that host. | Authorized cross-device access, recovery, export, deletion, private ownership, and hosted restore are tested. Browser-only access remains clearly described until this is done. |
| 7 | Learning benefit is measured | Obtain subject approval, prepare unseen questions for the second pack, and run the already drafted equal-time pilot and delayed assessments. Record latency, usage, mistakes, and dropout reasons. | Actual anonymized results and reviewer disagreements are recorded. Findings determine the next subject or feature; they do not become guaranteed-retention claims. |

## Change scope and dependencies

- Intake: app/workspace.tsx upload controls, app/api.ts transport if evidence points there, backend PDF/source endpoints, and browser/API checks. Change Next configuration only if the actual request path demonstrates a limit mismatch. Read the installed Next guides before framework edits.
- Source scope: backend selection/start validation, session defaults, app/api.ts types, material review UI, and existing source-boundary tests. Keep private reference answers server-side.
- Quality/corrections: existing grading fixtures/scripts, attempt storage, report/reviewer authorization, feedback/progress UI, and replay tests. Define the reviewer access boundary before exposing correction controls.
- Path explanation: existing plan calculation and StudyPlan; reuse stored prerequisites and assessment evidence.
- Accounts/export/hosting: choose a concrete provider only after hosting and recovery requirements are known. Never log keys or expose another learner's material. Account migration must preserve existing session ownership.

Steps 1–2 unblock trustworthy intake. Step 3 defines what a valid correction means before step 4. Steps 5–6 build on existing evidence rather than replacing the learning engine. Subject review and pilot preparation can proceed alongside implementation, but a completed pilot requires real participants and delayed results.

## Efficiency rules

Keep the current Next/FastAPI/SQLite structure and Gemini provider. Use native browser interactions, existing HTTP transport, saved schemas, and installed FSRS. Keep visuals deterministic and reuse the reviewed clips. Avoid repeated model calls for local navigation, planning, and traces.

Measure current latency and token usage before optimizing. Limit generation to the chosen source scope. Add caching only after repeated equivalent requests demonstrate useful savings, with ownership and content-version checks. Keep one API worker until a tested reservation/version mechanism makes concurrent generation safe.

Do not add an agent framework, vector database, event bus, hosted tracing service, graph library, or paid search subscription to complete these steps. Search remains deferred. OCR, Word/PowerPoint import, voice, and further animations are separate features; add the smallest one only when the actual learner material or pilot evidence calls for it.

## Claims and unresolved facts

No idea or implementation is beyond question. Support reliability with reproducible checks and learning claims with reviewed learner results. Current successful checks are limited examples, not universal grading accuracy, calibrated pass probability, or a demonstrated advantage over other products.

Still needed: the failing upload's file type and interaction, independent subject/rubric review, host/account requirements, consenting learners, and real latency/cost measurements. The PDF browser reproduction was interrupted before completion; no upload fix is claimed here.

## Context7 research: concrete efficiency changes

Research completed against official Gemini API and FastAPI documentation, and HTTPX 0.28.1 documentation matching the installed dependency. Three library resolutions and three focused queries were used. Current official web pages were checked where the returned material omitted lifecycle details or included legacy examples. These findings refine the plan; they are not implemented optimizations or measured speedups.

### First: measure the actual bottlenecks

Record request wait time, provider latency, input/output/cache token counts where available, PDF extraction time, failures, and peak memory under representative concurrent uploads. Use task names and anonymous request IDs; exclude source text, learner answers, and keys from performance logs. Compare before/after on the same source packs and tasks. Set the latency and cost targets before selecting a release candidate.

### Reuse provider connections

The current generate() creates a new AsyncClient on each attempt. HTTPX explicitly recommends reusing a scoped client to benefit from connection pooling. Create one Gemini client per application lifespan, close it on shutdown, and retain request-local keys/payloads and the existing AI call limits. Bound its pool to the intended concurrency. Configure connect/read/write/pool timeouts separately and add an overall operation deadline: an HTTPX read timeout measures inactivity between chunks, not total request duration.

Scope: FastAPI lifespan, generate(), provider transport tests, and TestClient lifecycle setup. Check client reuse, cleanup, pool exhaustion, cancellation, timeout errors, and isolation between requests. Keep public-URL fetching's existing SSRF protections; this change is for Gemini transport.

Sources: [HTTPX async client lifecycle](https://github.com/encode/httpx/blob/0.28.1/docs/async.md), [timeouts](https://www.python-httpx.org/advanced/timeouts/), [FastAPI lifespan](https://fastapi.tiangolo.com/advanced/events/).

### Make retries bounded and safe

Keep retries in one layer. HTTPX transport retries cover connection failures, not every HTTP status or read failure. Retain application handling for transient provider errors; use a bounded Retry-After when supplied, otherwise a short backoff with jitter, always inside the overall deadline and quota. Do not retry invalid input, blocked output, or schema failures blindly. A timed-out generation can still incur provider usage even when no result reaches the app.

Scope: generate() and existing mocked provider checks. Verify exhausted retries, 429/503, network failures, invalid Retry-After, cancellation, malformed output, and saved-state recovery. User messages must distinguish retryable provider failure from unsupported material.

Source: [HTTPX transport retry limits](https://www.python-httpx.org/advanced/transports/).

### Preserve upload limits without redundant buffering

FastAPI UploadFile already spools larger uploads to disk. Our middleware first accumulates the whole mutation body in a bytearray, then copies it to bytes, while the PDF endpoint also reads file bytes. This is a code-based memory concern; its actual peak must be measured. After reproducing the user bug, evaluate a streaming request-size guard that counts received bytes and lets the multipart parser spool the upload. Retain the enforced total-size limit for missing or misleading Content-Length, origin checks, file signatures, page limits, and explicit scanned-page errors. Do not remove the boundary guard merely to save memory.

Scope: boundaries(), source_file(), browser upload checks, and API boundary tests. Test chunked oversized requests, exact supported limits including multipart overhead, corrupt/encrypted/image-only PDFs, disconnects, retry, and temporary-file cleanup. Keep CPU-bound extraction off the event loop. A streaming limiter must be checked against the installed Starlette/FastAPI receive behavior before adoption.

Source: [FastAPI file uploads and spooling](https://fastapi.tiangolo.com/tutorial/request-files).

### Use Gemini caching only where it earns savings

Keep stable selected source evidence at the beginning of applicable prompts and changing questions/answers after it. Gemini documents automatic implicit caching, but hits are conditional. Log actual cache-hit usage from the response shape used by our REST API. Do not assume fields from a different SDK/API apply. The retrieved threshold table does not establish support or minimum tokens for our configured Gemini 3.1 Flash-Lite model.

Do not introduce explicit cache objects yet: Context7 returned a legacy SDK example, while current documentation limits explicit caching by API/model. Verify support, token minimums, storage pricing, retention/deletion behavior, and break-even reuse for the exact deployed model before adding it. Short concept evidence may be cheaper to send directly. Never share learner-specific application cache entries across owners.

Scope: prompt construction, response usage accounting, source-version/owner isolation if an application cache is later justified, and source-grounding regression checks. Prompt reordering still requires the grading benchmark; it is not automatically quality-neutral.

Source: [Current Gemini caching documentation](https://ai.google.dev/gemini-api/docs/caching).

### Remove global waiting only with conflict protection

Code inspection shows the mutation middleware holds one global lock through provider calls. This serializes writes across learners. First measure two independent sessions under a slow mocked provider. If concurrent use needs improvement, use a persisted operation ID and session version: reserve under a short lock, generate outside it, then commit under a short lock only if the reservation/version is still current. Reject stale results and replay completed attempts without grading twice. Session deletion, source edits, retries, and process restart must not resurrect old work.

Scope: mutation locking, start/attempt/help/plan/delete callers, session storage, pending-task recovery, and concurrency tests. Keep one process until cross-process reservations and quota/state updates have been verified. Merely removing the lock or adding workers is not a safe optimization. This recommendation comes from application code inspection, not a documentation guarantee.

## Supported-case reliability matrix

| Case | Required behavior |
| --- | --- |
| Text PDF, notes, permitted public page | Extract and show saved evidence; require review before teaching. |
| Scanned, corrupt, encrypted, oversized, or unsupported file | Explain the limitation and a useful next action; never silently succeed or omit unreadable pages. |
| Long or irrelevant source material | Bound scope, disclose excluded evidence, and request missing material rather than inventing support. |
| Equivalent, incomplete, ambiguous, or conflicting answer | Apply reviewed criteria; preserve uncertainty and support correction. |
| Slow provider, rate limit, or invalid response | Bound time/retries, retain saved work, and expose a retryable error where appropriate. |
| Double submission, stale response, reload, or interruption | Preserve one assessed attempt and recover the pending next task without repeating credit. |
| Two learners or unauthorized request | Keep source/answer ownership isolated; reject unauthorized access and writes. |
| Keyboard, mobile, reduced motion | Keep intake and core learning usable with text alternatives. |

This defines what to verify; it does not claim those checks have all passed. Broad document understanding, fair grading across every subject, and zero provider failures cannot be guaranteed by choosing a library.

Revised implementation order: resolve the upload report; establish baseline timings; add connection reuse and bounded deadlines/retries; complete source scope and reviewed quality checks; address upload memory/concurrency only as measured load requires; then proceed with corrections, durable access, hosted recovery, and the pilot. No additional paid search service or agent framework is needed for these changes.

## Follow-up implementation and verification

The material box lacked drag/drop handlers. Both dropping and selecting a PDF now use addFile(), display a saved-source confirmation, and retain existing server validation. Unsupported extensions and multiple dropped files produce explicit errors. Two actual-PDF browser checks passed on an isolated production build, covering extraction, source inspection, reload, invalid PDF recovery, dropping, unsupported format, and multiple-file handling.

The error in image copy 7.png was traced to a live Gemini 503 UNAVAILABLE response for the configured Gemini 3.1 Flash-Lite model. generate() now makes at most three attempts within a 120-second generation deadline, uses bounded numeric Retry-After values or backoff with jitter, and distinguishes exhausted provider quota from temporary unavailability. All 28 current backend checks passed, including retries, bounded delay, repeated provider failure, timeouts, and saved assessment recovery. This cannot resolve a continuing provider outage. Connection reuse, upload streaming, concurrency reservations, and the other planned features remain unimplemented.

The workspace production build also passed. The local frontend and API were restarted without deleting learner storage, and both PDF browser checks passed again against http://127.0.0.1:3000. Provider availability after restart has not been established.

### Repeated provider error investigation, 2026-10-15 local time

The repeated error included both provider overload and a schema rejection. Gemini rejected the deeply bounded course schema with HTTP 400; the same shape without nested numeric/string/array limits succeeded. gemini_schema() now removes those provider grammar bounds while strict Pydantic models and source/scene validation still enforce them before saving. Tests check nested simplification, unchanged original schemas, retained required fields/enums, and continued server-side rejection of oversized values. Both current Gemini responseFormat requests and the older 2.5 JSON configuration are covered. Course output has a larger bounded token allowance, and truncated responses now receive an accurate size-limit error. All 29 backend checks passed.

No model replacement was enabled. At diagnosis, 3.1 Flash-Lite, 3.5 Flash, 3.6 Flash, and 3.8 Flash returned overload errors; 3.1 Pro reported zero free-tier quota; retired 2.5 models were unavailable to new users. The available 3.5 Flash-Lite completed source-generation/teach-back flows on draft packs but failed critical grading cases. The experimental conflict-priority prompt also failed benchmark cases, so the existing grading-v2 instruction was retained. Gemini 2.5 Flash experienced response-format issues, a timed-out full generation, validation disagreement, and quota exhaustion. Failed benchmark reports were retained, including tmp/grading-20261014T165634351203.json and tmp/grading-20261014T172224213494.json; they are not release passes.

The request bug is fixed, but live availability and a reliably validated replacement remain unresolved. Free-tier versus suitable paid-quota account constraints were requested from the user. Do not claim an external provider outage or quota limit has been resolved by this code change.

### Latest verification, 2026-10-15

The originally configured Gemini 3.1 Flash-Lite subsequently recovered; no key or model change was needed. The complete real learning flow passed with the corrected request schema and the current separate-animation course design. The live checker now verifies worked steps and validates inline scenes only when present, instead of requiring duplicate visual data in every course.

An inconsistent ambiguous-answer assessment revealed a recoverable validation failure. assess() now requests one review using the original answer, evidence, criteria, draft and validation error, then applies the same strict checks again. It does not accept a still-invalid assessment or derive credit from inconsistent output. The original grading-v2 instruction was retained. All 30 backend checks passed, including successful review, bounded retry, retained evidence, and rejection after a second invalid result. All seven live grading cases passed; report: tmp/grading-20261014T193023073858.json, prompt version criterion-grading-v2-validation-review.

The local API was restarted with these changes. Earlier failed model experiments remain recorded above; current success does not establish universal grading accuracy, subject approval, learner efficacy, or continued provider availability.
