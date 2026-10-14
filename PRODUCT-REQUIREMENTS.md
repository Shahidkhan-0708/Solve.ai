# Solve: build checklist beyond conversational tutoring

## Core solution: first implementation priority

User direction: `image copy.png` defines the main solution. This section takes precedence over the older feature priorities and build sequences below. It specifies intended behavior, not completed implementation.

**Solve decides what to study, in what order, and checks you got it.**

Build one complete loop first:

1. **Ask:** collect available study time, target grade/goal, and learning material. Collect an exam blueprint or learner-supplied topic weights when available; disclose absent weighting evidence.
2. **Triage:** create a ranked, time-boxed topic plan with prerequisites, source references, estimated effort, and a visible reason for each priority. Use supplied marks weights for a marks-per-minute estimate; without those weights, label it study priority rather than predicted exam return. Estimated times and gains must be disclosed as estimates. The total planned time must fit the learner's budget.
3. **Teach back:** teach from the selected evidence, then use an explain-in-own-words question and a different application drill. Text viva is sufficient initially. Assess reasoning criteria, accept valid paraphrases, retain uncertainty, and distinguish assisted attempts from independent evidence.
4. **Re-plan:** use observed missing reasoning, prerequisites, due reviews and remaining time to update the queue. Move supported weak spots up, preserve completed evidence, explain the ordering change, and allow the learner to override it. An uncertain judgment must not be treated as a confirmed weakness.

Source anchoring is part of this loop: show the exact supporting passage and PDF page where available. Verify quotations and disclose unsupported/conflicting evidence; citations alone do not establish correctness.

The image's **Pass Probability** meter remains a desired outcome. A numeric pass probability requires representative exam-outcome data and held-out calibration for the relevant exam and population. Until that evidence exists, display demonstrated topic coverage and assessment evidence with an explicit label; do not present coverage, model confidence or a target grade as a pass probability.

Gemini roles may supply topic analysis, source-grounded teaching and rubric assessment. Deterministic backend code owns plan ordering, time accounting, state transitions, validation and persistence. Add orchestration only where it completes this loop; role count is not an acceptance criterion.

**Core acceptance:** a learner supplies material and a time budget, receives an explained plan that fits it, completes teach-back and a fresh application, sees the queue change after a supported weakness, and resumes that updated state after reload. Verify source links, valid/invalid/ambiguous answers, assisted success, prerequisites, exhausted time and provider failure without losing saved work.

Additional animations, voice, OCR, search-provider setup, custom model training, and broad agent orchestration follow the core loop. Existing private-session, input-validation and accessibility controls remain necessary throughout. Operational release gates elsewhere in this document still apply before public use.

Research collected 2026-10-14. This is a product and implementation checklist, not a claim that these features are built or that Solve is unique. Search-provider setup is deferred at the user's request. No new services, packages, or paid calls were added during this research.

## Product promise

Bring a chapter or learning goal. Solve identifies a missing reasoning step, explains it with a source-backed worked example, asks the learner to explain or apply it, and checks a fresh application later. The learner always knows what to do next, why it was chosen, and what evidence supports their progress.

Support all learners in product language; validate individual subject packs before promising accuracy. Start implementation with the existing recursion pack, then a second reviewed pack to test whether the design generalizes. An emergency study mode can prioritize a limited time budget, but cannot promise passing marks or predict unseen exam questions.

## What large providers already offer

| Product | Officially documented capabilities | Implication for Solve |
| --- | --- | --- |
| NotebookLM | Source-based flashcards, quizzes, explanations with citations, Learning Guide, and audio/video learning formats. | Uploads, summaries, citations, and generated quizzes alone are baseline features. |
| Gemini Guided Learning | Guided learning designed to develop understanding through interactive support. | Step-by-step tutoring alone is not a defensible differentiation. |
| ChatGPT Study Mode | Interactive guidance through problems rather than only providing answers. | Asking questions before explaining is also baseline. |

Sources: [NotebookLM student features](https://blog.google/innovation-and-ai/models-and-research/google-labs/notebooklm-student-features/), [Gemini Guided Learning](https://blog.google/products-and-platforms/products/education/guided-learning/), [ChatGPT Study Mode](https://openai.com/index/chatgpt-study-mode/).

The proposed differentiation is a hypothesis: a focused, visible loop connecting source evidence, observed reasoning gaps, manipulable examples, transfer tests, and delayed results. We have not demonstrated that competitors lack this combination or that learners prefer Solve. Validate that through equal-time comparative sessions and actual retained performance.

The supplied researchingoogle.txt contains older claims that NotebookLM lacks active recall and that large contexts can be processed instantly. Do not use those as current evidence: official documentation now describes quizzes/flashcards, and this project's latency must be measured. Preserve the useful teach-back idea; reject guaranteed pass criteria and unsupported predicted exam topics.

## Existing foundation, based on current source inspection

- Next.js learning workspace with intake, current task, source viewer, path, progress, settings, and mobile layout.
- PDF/text/public-link intake, confirmation, duplicate detection, bounded sizes, and source passages with page numbers.
- Gemini generation and grading integration, schema validation, exact source-quote verification, and hidden reference answers.
- Diagnostic, repair, fresh application, ambiguous-answer handling, saved progress, and a fixed 24-hour review.
- Animated recursion demo: step controls, video/still fallback, keyboard controls, and reduced-motion support. Generated courses currently use text explanations.
- Private browser sessions, origin checks, URL-fetch safeguards, usage caps, deletion, request timing/token logs, and isolated backup restore checks.
- Pilot protocol, draft pre/post/delayed transfer assessments, grading rubric, and empty results sheet.
- Google/YouTube search links work without a search API key. Automated search-provider setup stays deferred.

Integration code is not the same as verified real-provider quality. The latest reported backend run passed 12 tests; this research did not rerun tests, verify a live Gemini key, or inspect a public deployment.

## Required product work and acceptance evidence

P0 = finish the dependable core before wider use. P1 = strengthen the learning experience after core validation. P2 = add only when usage proves the need.

| Requirement | Current state | Smallest complete next step | Evidence required | Priority |
| --- | --- | --- | --- | --- |
| Real Gemini reliability | Integration and mocked checks exist; live quality unverified | Run the isolated live smoke check, then review generated lessons and grading on approved examples | Correct source quotes, equivalent valid answers accepted, instruction attacks rejected, provider failures do not lose work | P0 |
| Source/topic coverage | Up to 20 passages selected by keywords; coverage disclosed | Show topics included, unsupported, and excluded; let learner choose a chapter/topic scope | Reviewer confirms selected evidence covers each advertised lesson; missing material is explicit | P0 |
| Traceable reasoning gap | Feedback includes missing steps and a suspected gap | Attach each gap to the learner's answer, concept, required reasoning, and supporting passage; label uncertain hypotheses | Reviewer can explain the basis of a gap; one wrong answer never becomes a permanent learner label | P0 |
| Teach-back and transfer | Short-answer loop exists; no separate teach-back task type | Add an explain-in-your-own-words task with a reasoning rubric, followed by an unseen application | Accept paraphrases, distinguish memorized definition from usable reasoning, ask clarification when ambiguous | P0 |
| Fair grading and correction | Reports and uncertainty exist | Show the criteria after assessment, allow a dispute, retain the original result and reviewed correction | Correction can be audited and updates derived progress consistently; no silent history rewriting | P0 |
| Visual learning workspace | Reviewed recursion clips exist | Add one vetted, parameterized visual exercise: learner predicts a step, changes an input, then sees the resulting trace | Visual result, explanation, source, and answer criteria agree; accessible text provides the same lesson | P1 |
| Reasoning-based concept map | Ordered prerequisites exist, but selection is sequential | Display supported prerequisite links and direct a learner to the missing prerequisite when evidence supports it | Reviewer approves links; an unrelated error does not send learner down an arbitrary branch | P1 |
| Adaptive review | Fixed 24-hour review exists | Store review evidence and difficulty ratings, then replace the fixed interval with a tested scheduler | Failed recall becomes due sooner; uncertain grading does not alter memory state; timezone-safe persistence | P1 |
| Useful daily plan | Minutes/level influence generation; no timed planner | Present a short queue using due reviews, observed gaps, prerequisites, and remaining minutes | Learner can understand and override the ordering; plan does not imply predicted marks | P1 |
| Honest progress | Introduced/demonstrated/rechecked statuses exist | Show dates, observed attempts, assistance used, fresh versus repeated questions, and next due task | Assisted or repeated success cannot masquerade as independent transfer | P0 |
| Quality regression checks | API/browser tests and manual pilot materials exist | Create a small reviewed benchmark of source packs, questions, student answers, and expected rubric judgments | Compare prompt/model revisions on the same cases, record disagreements, block critical regressions | P0 |
| Durable learner access | Browser-cookie ownership only | Add recoverable identity and data export before offering durable public accounts | Sign-in/recovery and deletion work across authorized devices; other users cannot access sessions | P1 |
| Production operation | Local backups and container config exist | Deploy HTTPS, verify secure cookies, rehearse hosted recovery, and establish retention/support ownership | Public health, private sessions, real restore, failure handling, and usage limits verified on the host | P0 before public use |
| Scanned diagrams and PDFs | Unreadable pages rejected; diagrams not understood | Add explicit opt-in OCR/multimodal intake for one reviewed pack, with page/region provenance | Reviewer checks diagram labels, formulas, extracted text, and citations; unreadable regions stay flagged | P2 |
| Lecture/voice support | Not implemented | Add permitted transcripts first; voice teach-back only if text testing proves demand | Learner can correct transcription; consent, deletion, accessibility, and provider cost are clear | P2 |

## What Context7 established

Three official library IDs were resolved and queried. These are research references, not a request to install the libraries.

1. `/googleapis/python-genai`: multimodal content and media-resolution configuration are documented. Higher media detail can consume more tokens. The retrieved answer did not fully resolve PDF page-verification behavior, so it was supplemented with [Google's document-understanding documentation](https://ai.google.dev/gemini-api/docs/document-processing). Provider document understanding does not establish citation correctness or learning efficacy; retain application checks and human review. Keep the existing httpx REST integration unless the SDK removes a concrete implementation obstacle. [SDK source](https://github.com/googleapis/python-genai).
2. `/open-spaced-repetition/py-fsrs`: `review_card` returns updated card state and a review log using Again/Hard/Good/Easy ratings and review time. Card and review history can be serialized. This is a candidate replacement for the fixed review interval, not a mastery detector. Do not automatically equate an uncertain AI grade with failed recall, and do not present model-estimated recall as a calibrated probability without validation. [Py-FSRS documentation](https://github.com/open-spaced-repetition/py-fsrs).
3. `/langfuse/langfuse-docs`: dataset experiments compare repeated runs using expected outputs and evaluator scores. Adopt the repeatable dataset/experiment pattern first in local files and the existing test runner. Langfuse is optional if reviewing runs becomes difficult; hosted tracing introduces another service and learner-data handling decision. Judge explanations semantically with reviewed rubrics; substring or exact-match examples are insufficient for free-form understanding. [Dataset experiments](https://langfuse.com/docs/evaluation/experiments/experiments-via-sdk).

Context7 supplies technical documentation. Competitor claims were separately checked against official product pages. Neither source proves the proposed product advantage.

## Minimum data we need to preserve

Extend the existing session structure where practical; do not introduce a new service for each item.

- Source evidence: stable source/passage ID, page or region, content version, extraction limitations, selected coverage.
- Learning objective: concept ID, approved prerequisites, source references, reasoning rubric.
- Assessment evidence: question ID and version, task type, prompt, reference criteria kept server-side, submitted answer, hints/assistance, result, rationale, uncertainty, timestamps.
- Gap record: supporting attempt IDs, suspected missing step, verification state, repair attempted, and result on a distinct application.
- Review record: due time, actual review time, scheduling input, updated state, and separate delayed-transfer result.
- Quality record: model/prompt version, rubric version, reviewed benchmark case, provider tokens/latency, dispute and correction history. Never include raw keys in logs.

A large concept database, vector service, event bus, or autonomous agent system is not needed to start this work. Reconsider retrieval infrastructure only after representative long materials reveal measured coverage failures; reconsider database/concurrency architecture before multiple API workers or when pilot traffic requires it.

## The learner-facing experience to build

1. Choose a goal and time budget, add permitted material, and confirm the covered topics.
2. Receive one small starting task, with an explicit "I don't know" path.
3. See the missing reasoning step, a short source-backed worked example, and an optional visual trace.
4. Explain the rule or predict a changed example before revealing its outcome.
5. Complete a distinct application without the worked answer visible.
6. See what was demonstrated, what remains uncertain, and the next useful task.
7. Return for a delayed task before reopening hints or the previous solution.

Keep progress and source evidence visible. Use a focused task workspace rather than making the learner invent prompts. Every optional visual needs readable text, keyboard access, loading/error states, and reduced-motion behavior. Use reviewed templates for interactive visuals; never run arbitrary model-generated Python or JavaScript.

## Materials, people, access, and costs required

| Needed | Purpose | Existing or missing |
| --- | --- | --- |
| Gemini key and accessible model | Real generation/grading checks | Configuration fields exist; key validity/quota still must be verified |
| Two approved source packs | Test the loop beyond one demo | Recursion pack exists; independent review and second pack needed |
| Source-linked rubrics and misconception examples | Define what counts as valid reasoning | Demo answers and pilot rubric exist; broader benchmark needed |
| Reviewed visual templates and expected traces | Make explanations interactive and verifiable | Recursion clips exist; parameterized templates needed |
| Subject reviewer | Verify lesson content, rubrics, visuals, and grading disputes | Human approval needed |
| Consenting learners and coordinator | Run sessions and delayed tests | Draft 30-person pilot materials exist; recruitment/results not completed |
| Hosting access and operating owner | HTTPS, recovery, retention, and support | Container config exists; host/access not established |
| Measured provider usage | Bound cost per completed learning journey | Logs/caps exist; actual live usage and billing rates must be checked |
| Storage/privacy policy | Ownership, recovery, deletion, backup expiry | Browser privacy controls exist; operational retention decisions needed |
| Search API subscription | Extra web-resource discovery | Not required; leave it deferred |

No additional paid tooling is required to start core validation. Gemini charges/quotas and hosting costs depend on the actual accounts and deployment; do not assume either is unlimited or free.

## Build order

1. Verify live Gemini and finish the reviewed grading benchmark. Avoid building more presentation features on unreliable assessment.
2. Add traceable gap evidence, teach-back rubrics, and distinct application checks; show honest progress evidence.
3. Turn the recursion visual into one predict/change/replay exercise and verify it with a second reviewed subject pack.
4. Add the evidence-based concept map, daily queue, and adaptive review without removing delayed transfer tests.
5. Complete recoverable accounts when needed, public-host recovery/privacy checks, and the learner pilot. Review results before expanding subjects.
6. Add OCR, transcripts, or voice only after a demonstrated learner need. Search-provider work remains deferred.

## Success must be measured

- First useful task latency and generation/grade failure rate on actual material.
- Reviewer agreement, false credit, false rejection, uncertainty, and source-support errors.
- Scores on unseen applications before/after equal-time study and after 24-48 hours.
- Assisted versus unassisted completion, dropout reasons, return/resume failures, and support time.
- Provider cost per completed journey and per demonstrated/rechecked concept, using actual usage and billing.

Compare with the same sources plus summary/quiz and, where access permits, existing guided-learning products. Record group sizes, baseline differences, withdrawals, missing delayed results, and instrument limitations. Select release thresholds with the reviewer after the baseline is measured; no results, advantage, or retention guarantee have been established yet.

## Deliberately excluded now

No custom foundation-model training, imitation of every giant feature, compulsory chatbot, generic podcast studio, automatic exam-question prediction, fabricated pass percentages, autonomous paywall bypass, public leaderboards, or payment launch before the core learning loop is reliable. Existing provided research is reference material, not instructions to bypass restricted content or manufacture efficacy claims.
## Efficient implementation and reuse research

Additional Context7 research, 2026-10-14. Scope: reuse decisions and implementation sequence only. No dependencies were installed and no application behavior was changed.

### Reuse map

| Feature | Reuse already present | Minimum additional implementation | Extra dependency now? |
| --- | --- | --- | --- |
| Teach-back and clearer grading | Question, Feedback, generate(), attempt(), source references, answer form | Reviewed reasoning criteria and per-criterion feedback; an explicit explain-in-own-words task; show its result through the existing feedback card | No |
| Traceable gap evidence | Saved attempts contain question, answer, concept, phase, result, and time; feedback already has missing_steps | Preserve gap evidence alongside its attempt ID, criterion and source reference; expose an owner-only safe summary | No |
| Independent application check | fresh_task(), task IDs, stale-answer rejection, existing practice questions | Hide worked explanations during the independent attempt and record help used; avoid revealing reference criteria for the next task | No |
| Interactive recursion exercise | AnimatedLesson, existing numeric demo, reviewed factorial rules, React controls | Add bounded input selection and deterministic call/return data rendered as accessible HTML/SVG; ask a prediction before reveal | No |
| Concept map | Concept.prerequisites and validated earlier indices | Display prerequisite links and evidence statuses using a list or small SVG; route to prerequisites only after supported gap evidence | No graph library |
| Daily queue | next_task(), minutes, review_at, progress | Derive a queue from overdue reviews, supported gaps, prerequisites, and the time budget; provide the reason for each task | No agent framework |
| Adaptive review | SQLite JSON sessions, review_at, attempts, UTC timestamps | Persist a scheduler card and its review logs; separate review scheduling from transfer-assessment progress | Py-FSRS later, once review behavior is approved |
| Quality benchmark | unittest, TestClient, Gemini transport mocks, pilot rubric, check-live.py | Reviewed JSON cases and one runner using existing generation/grading; separate deterministic contract checks from paid live quality checks | No evaluation SaaS |
| Verified animations | Manim scenes, render_demo.py, clip manifest, video/still player, animation browser tests | Parameterize approved scenes for a small bounded set and render them offline; retain dimensions, decoding and step-count checks | No new runtime dependency |
| Source selection | PyMuPDF, BeautifulSoup, stable passages, select_passages(), source viewer | Show chapter/topic scope and missing coverage; measure retrieval failures before adding semantic retrieval | No vector service yet |

This keeps the current Next.js + FastAPI + SQLite + Gemini architecture. Use a library where it supplies established domain behavior, such as spaced-repetition scheduling; use existing code for project-specific task selection and progress rules.

### What the Context7 documentation supports

**Manim:** `Scene.next_section()` divides a scene and `save_sections` produces section videos plus a JSON index. Our renderer already uses that pattern. Reuse it for approved explanatory clips instead of adding a video-generation service. These are pre-rendered assets, not arbitrary live interaction; free input changes need browser-rendered state or a finite set of pre-rendered variants. [Official output/sections tutorial](https://docs.manim.community/en/stable/tutorials/output_and_config.html). Context7 library: `/manimcommunity/manim`.

**Py-FSRS:** `review_card` returns an updated card and review log; it does not mutate the original card. Card/log serialization supports persistence in existing JSON session storage. Explicit timezone-aware UTC review times and disabled fuzzing support reproducible tests. Integrate the algorithm rather than inventing memory-decay equations. [Official repository and persistence examples](https://github.com/open-spaced-repetition/py-fsrs). Context7 library: `/open-spaced-repetition/py-fsrs`. Verify and pin a compatible version when implementation begins; the package is not installed now.

**Gemini/Pydantic:** the Google SDK documentation accepts a Pydantic-generated JSON schema for structured output. It advises against repeating the output schema and example JSON in the prompt. The current REST client already sends a Pydantic schema; keep it, rather than adding an SDK or orchestration wrapper only to recreate that behavior. Rubric content belongs in the task data; output shape belongs in the schema. Format validation is separate from the content review needed to establish assessment accuracy. [Official SDK schema documentation](https://github.com/googleapis/python-genai#json-response-schema). Context7 library: `/googleapis/python-genai`.

### Important compatibility and correctness work

- Existing sessions must continue to load. Add defaults for new rubric/gap/help fields and derive absent values conservatively; do not require learners to reset old progress or invent historical assistance records.
- Changes to Question/Feedback/task phases reach backend/main.py, backend/demo.py, app/api.ts, app/page.tsx, API tests, and browser journeys. A teach-back task needs its own transition checks; adding a label alone is insufficient.
- public_state() currently strips private task fields and withholds internal attempt/course question data. Preserve that boundary. If progress evidence is exposed, return only the current owner's safe data; never leak a future expected answer through a new rubric/history view.
- Source inspection shows practice currently renders the worked explanation. A new independent-transfer claim requires hiding that help while answering, explicitly tracking any reveal, and displaying the distinction in progress.
- Source inspection shows next_task() schedules due review only when status is demonstrated. Successful delayed review changes status to rechecked. Recurring review must handle rechecked concepts too; updating intervals alone would leave those concepts outside the due queue. Address this once in task selection and test a second delayed review.
- FSRS measures scheduled recall, not general understanding. Keep demonstrated/rechecked evidence independent of scheduler estimates. Do not advance memory state from unable_to_assess. Define how partial answers, incorrect recall, and learner difficulty ratings map to reviews with the subject reviewer before wiring them in.
- Keep one API worker under the existing mutation lock. Avoid holding it during expensive visual rendering; build visuals offline. If real pilot traffic requires concurrent model generation, design a task reservation/version check before relaxing the lock or adding workers.
- Interactive visuals must match the approved lesson and use bounded inputs. Preserve still/text alternatives, keyboard interaction and reduced-motion behavior. Never run model-generated Python or JavaScript.

### Concrete build sequence

**First: validate the existing engine.** Use the current isolated smoke check with the configured key, then create a small human-reviewed grading dataset. Include correct paraphrases, missing reasoning, wrong numbers, ambiguous answers, conflicting sources, instruction attacks and provider failures. Do not log submitted learning material or keys in evaluation reports by default.

**Second: improve the assessment loop.** Add reviewed criteria, traceable gap evidence and a teach-back task to the existing endpoint and feedback panel. Follow it with a distinct application and track whether help was shown. Carry old sessions forward with explicit defaults. This is the highest-value change before additional formats.

**Third: make one visual interactive.** Reuse the recursion lesson and add a deterministic trace for a bounded set of non-negative inputs, using browser state rather than a provider call. Preserve the existing clips for explanation. Correctness is checked against Python's existing factorial implementation and reviewed call-count rules. Extend the existing animation browser tests with predict/reveal, changed input, keyboard and still-mode checks. Keep the visual model separate from assessable answers so a visual preview does not silently invalidate an independent test.

**Fourth: make repeat use valuable.** Fix recurring due-review selection, then add a small daily queue and integrate FSRS when rating policy is approved. Use existing SQLite storage. Test serialization, restart/resume, lapse, uncertain assessment, and two successive due reviews with fixed timestamps.

**Fifth: validate transfer to another subject and deploy.** Repeat the loop with a second independently reviewed pack, collect the pilot's unseen and delayed results, and complete hosted recovery/privacy checks. Add recoverable accounts before promising durable cross-device access. A maintained authentication library/service is preferable to custom password storage, but provider selection depends on hosting, payment constraints and privacy; none was selected or researched in this pass.

### What we can avoid buying or rebuilding

No search subscription, LangChain/LlamaIndex, Langfuse account, vector database, graph UI library, animation runtime service, custom scheduler mathematics, background worker fleet, or new foundation-model training is needed for the first improvements. The existing reviewed clips, local tests, browser tests, HTTP client, JSON schemas and SQLite are useful infrastructure, not throwaway scaffolding.

Native browser visuals do not incur a model call per interaction, and offline clip reuse avoids per-learner rendering. These are architectural savings, not measured performance numbers. Benchmark first-task latency and cost on real Gemini sessions before claiming a speedup. Gemini usage and public hosting may still incur charges.

Research limits: this pass used three Context7 library resolutions and three focused documentation queries. It did not benchmark libraries, install FSRS, run new app tests, perform live provider calls, or establish a learning advantage. Authentication, notifications, voice, OCR and broader long-document retrieval remain separate decisions when their requirements are concrete.
