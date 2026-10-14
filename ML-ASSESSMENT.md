# Solve: ML necessity assessment

Assessment date: 2026-10-14. This answers `Admin Requirements.txt` using the current project rather than its unfilled example fields. Scope is an architecture assessment; no application changes, model training, paid provider calls, or deployment are required.

## Project details

- **Core task:** teach from supplied material, assess the learner's reasoning, repair gaps, test a fresh application, and schedule delayed recall.
- **Inputs:** extracted PDF/public-page/pasted text, learner goal, level and time budget, free-form answers, reviewed lesson questions, source references, and attempt history. Scanned images and audio are outside current intake support.
- **Outputs:** structured lessons, questions, source quotations, criterion-level feedback, progress evidence, and a deterministic task/review queue.
- **Scale:** a local/pilot architecture with Next.js, FastAPI and SQLite. The backend has three AI request slots, a configurable daily deployment cap (default 200 calls), and a 60-second timeout per provider attempt with up to two attempts. These settings are limits, not measured throughput or latency guarantees. A target user count, latency SLA and cost ceiling have not been established.
- **Error tolerance:** subjective explanation/grading needs explicit uncertainty and reviewer correction. Ownership, hidden-answer access, input validation, persistence and progress transitions require deterministic enforcement. No automated grader can promise universal subject accuracy.
- **Available data:** a reviewed recursion demo, API/browser checks, a live smoke-check script, and draft pilot assessments/rubric. The pilot CSV is an empty template. No representative, human-labelled training corpus or measured learning benefit was established by this inspection. Private local session data was not inspected.

## 1. Verdict (ML vs. heuristic vs. LLM/API)

**Off-the-shelf API or LLM prompt sufficient.** Keep the existing source-grounded Gemini integration and deterministic application logic. This is the appropriate starting architecture; semantic grading quality still needs live evaluation. Custom training is not justified by the available evidence.

| Capability | Smallest sufficient method | Reason |
| --- | --- | --- |
| Lessons, teach-back questions, fresh applications | Existing LLM API with supplied evidence and reviewed criteria | Rules cannot cover arbitrary subject explanations and paraphrases economically. |
| Free-form reasoning assessment | LLM rubric assessment with uncertainty and human review | String matching misses valid alternatives; schema validation alone cannot establish correctness. |
| Reviewed demo numeric answers | Existing deterministic checks | Exact reference values are available; the demo explicitly declines semantic grading. |
| Extraction, bounds, ownership, source quote checks | Existing parsers, validation and database code | These are verifiable contracts, not prediction tasks. |
| Progress, prerequisite display, daily queue | Explicit state transitions and ordering | The learner should be able to understand why a task was chosen. |
| Recall scheduling | Existing FSRS package and saved review history | An established scheduler is already integrated; no custom memory model is needed now. |
| Recursion traces and animations | Bounded deterministic traces and reviewed offline assets | Results must match the lesson; model generation per interaction adds no necessary value. |
| Passage selection | Existing keyword baseline initially | Measure missed evidence before adding semantic retrieval. |

Gemini supports JSON Schema structured outputs, but its documentation distinguishes valid structure from semantically correct values. Keep application validation and subject review. [Google structured output documentation](https://ai.google.dev/gemini-api/docs/structured-output).

## 2. Feasibility and trade-offs

**Complexity versus value.** A few rules are sufficient for workflow and exact calculations, but inadequate for arbitrary free-text reasoning. The useful model work is language interpretation and generation. Custom training would add a second system to maintain without evidence that the existing model is the bottleneck. More rules or more training will not repair missing source evidence, invalid rubrics, or misleading progress claims.

**Data readiness.** Attempts and learner ratings are not automatically training labels. Before training, collect permitted, de-identified examples with independently reviewed source support, criteria, answers and judgments. Include valid paraphrases, partial reasoning, ambiguity, conflicting sources and instruction attacks. Split evaluation by learner and source pack so repeated questions do not inflate results. The proposed 30-person pilot informs product iteration; it does not establish enough training data or statistical certainty by itself.

**Maintenance.** The API approach incurs provider cost, network latency, quota failures and model-version regressions; the existing timeout, retry, schema and usage controls help manage these. Custom models additionally require dataset versioning, training/hosting infrastructure, evaluation, monitoring, rollback and ongoing relabelling. Classical ML is cheaper than deep learning but still needs a narrowly defined target and reliable labels.

**Current-code caveat.** `backend/requirements.txt` already pins `fsrs==6.3.2`, and `schedule_review()` persists cards/logs. `learning_queue()` includes due reviews for both demonstrated and rechecked concepts. The scheduler's proposed date is clamped to at least 24 hours, including failed recall. Do not describe this as an unmodified FSRS policy or claim immediate failed-recall scheduling. The package provides card/log persistence and configurable scheduling. [Official Py-FSRS repository](https://github.com/open-spaced-repetition/py-fsrs).

## 3. Recommended step 1: the baseline

Validate the implemented architecture before adding another model or service:

1. Use the reviewed recursion pack plus a second independently reviewed subject pack. Keep numeric demo checks deterministic and assess live free-text answers against explicit criteria.
2. Prepare at least 100 adjudicated answer cases across the two packs, covering the edge cases above. This is an initial diagnostic benchmark, not proof of broad accuracy. Retain separate development and untouched evaluation cases.
3. Run `scripts/check-live.py` in its isolated database with an authorized provider key, then evaluate the reviewed cases. Existing mocked tests verify contracts; they do not measure real-provider content quality.
4. Record false credit, false rejection, assessment coverage (the fraction receiving a definite judgment), source-support failures, p50/p95 first-task and grading latency, failure rate, and actual cost per completed journey. Include uncertain outputs when reporting coverage so abstention cannot conceal poor performance.
5. Compare equal-time unseen application and delayed recall outcomes against the same material plus summary/quiz using the prepared pilot procedure. Keep assistance and repeated-question success distinct from independent transfer.

Continue using the current parser, keyword selector, SQLite, Gemini client, rubric validation, numeric checks and FSRS integration. No vector database, agent framework, training pipeline or new dependency is needed for this baseline.

## 4. Trigger points for upgrading to ML

The thresholds below are **proposed decision criteria**, not achieved results or universal sample-size rules. Agree latency, cost and quality limits with the reviewer and operating owner before the pilot.

| Candidate upgrade | Trigger to investigate | Evidence required before adopting |
| --- | --- | --- |
| Pretrained embeddings/reranking for retrieval | Needed supporting evidence is absent from the selected passages on more than 10% of at least 100 reviewed queries, after fixing extraction and explicit scope selection | At least 95% query-level evidence coverage on held-out queries within the agreed latency/cost budget; use pretrained retrieval first, without custom training. |
| Prompt or provider revision | False credit exceeds 5%, false rejection exceeds 10%, or definite-assessment coverage falls below 80% on reviewed held-out answers | Reviewer analysis identifies whether the failure is source selection, rubric, prompt or model behavior. Re-evaluate the same held-out cases and report uncertainty by subject; small samples cannot prove these rates reliably. |
| Lightweight classical ML | A specific tabular prediction, such as prioritizing review risk, is needed and the rule baseline fails a declared outcome target | Begin an experiment only with at least 1,000 labelled outcomes from at least 100 learners, adequate positive/negative cases, and permitted use. Require a held-out temporal improvement of at least 10% relative on the chosen error metric, with uncertainty reported and no worse delayed-learning outcome. These counts are screening floors, not adequacy guarantees. |
| Fine-tuned language model | The same narrow grading errors persist after evidence/rubric/prompt fixes and a comparison of suitable existing APIs, or measured API latency/cost violates the agreed budget | Start feasibility work with at least 2,000 adjudicated examples spanning intended subjects and answer styles, plus a separate evaluation set. Adopt only after at least a 20% relative reduction in the targeted error, no increase in false credit, and acceptable total operating cost. Sample requirements may be much larger. |
| Custom deep learning from scratch | A required input/task cannot be served by available pretrained models and a bounded prototype confirms that gap | A sufficient permitted dataset, specialist capacity, compute budget, and demonstrated advantage over pretrained alternatives. Nothing inspected establishes this condition. |

Any ownership breach, leaked future reference answer, or lost saved work is an application defect requiring an immediate fix, not a trigger to train ML. Critical factual errors require subject review and correction before wider use.

The smallest next investment is reviewed evaluation data and real-provider measurement. Training becomes a candidate only when those measurements show a specific, persistent limitation that a model experiment improves.

### Evidence and limits

Local evidence inspected: `Admin Requirements.txt`, `README.md`, `PRODUCT-REQUIREMENTS.md`, `PILOT.md`, `backend/main.py`, `backend/requirements.txt`, test/script inventory, and the empty pilot results template. Current code takes precedence where older documentation describes absent teach-back support, fixed scheduling, or FSRS as a future installation.

No live provider evaluation, application tests, pilot sessions, training-data audit, load benchmark or deployment check was run for this assessment. No application behavior or dependency was changed. Provider quality, cost, subject generalization and learning benefit remain unverified.
