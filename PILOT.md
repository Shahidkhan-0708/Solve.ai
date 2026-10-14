# Pilot and demonstration

## Honest demo narrative

1. Start the reviewed recursion demo.
2. Answer the base-case diagnostic incorrectly.
3. Show the worked steps and open the supporting source passage.
4. Answer the repair, then a different application question.
5. Show the concept change to demonstrated and resume after reload.
6. Explain that delayed recall is scheduled for the next day, not simulated.
7. Show a real unreadable-source error using an image-only/blank PDF, or the uncertainty response by entering a free-form answer in the numeric demo.

Avoid claims of guaranteed retention, calibrated pass probability, universal subject expertise, instantaneous processing, or continuous model training.

## Reviewed pack

backend/demo.py contains original explanatory text and reference questions. It defines factorial only for non-negative integers, returns 1 for n <= 1, and otherwise returns n * factorial(n - 1).

Reference diagnostic/application answers:
- Stopping condition: factorial(0) = 1; tracing factorial(4) stops at n = 1.
- Shrinking the problem: factorial(3) uses two recursive calls after the initial call; factorial(5) uses four.
- Returns: factorial(3) = 6; factorial(4) = 24.
- Repair and delayed-review questions are distinct. The demo accepts numeric answers only and explicitly refuses semantic grading.

Before adding a subject pack, have a subject reviewer check the extracted source, question wording, expected reasoning, worked steps, quotations, conflicting sources and prerequisite order. Include one wrong-source case, one misconception, one equivalent valid answer, and one ambiguous answer.

## 30-person directional pilot

Obtain participant agreement and permission to use course material. Assign 15 learners to Solve and 15 to the same source material plus a summary-and-quiz baseline. Use the same goal, source pack and fixed learning time.

Prepare unseen pre/post questions and a delayed test before running the pilot. Have a reviewer grade answers without knowing the group. Record:
- Pre/post scores on unseen applications.
- Delayed score after 24-48 hours.
- Completion and reasons for stopping.
- First useful task latency and provider token usage.
- Incorrect/uncertain grading and reviewer disagreement.
- Return/resume success, reported errors and support effort.

Use participant IDs in evaluation records rather than names. Keep consent records separate. Do not infer an efficacy guarantee from 30 people or repeated practice questions.

## Launch gates

- Source and answer quality reviewed for each advertised subject.
- No cross-browser session access, lost answers, or unreported missing PDF pages.
- Real provider generation and grading tested with a key on reviewed examples.
- Deployment backup and restore rehearsed, HTTPS and secure cookies configured.
- Acceptable measured first-task latency and cost per completed session.
- Pilot review supports a next iteration; no payment test until the core loop works reliably.

Content review, recruiting consenting participants, collecting delayed results, public hosting and payment testing require real people or accounts. Those activities have not been performed by this implementation.

## Prepared pilot materials

- [Participant information and three unseen assessments](pilot/participant-forms.md).
- [Coordinator procedure and private grading rubric](pilot/coordinator-review.md); keep the key away from participants.
- [Empty anonymous results sheet](pilot/results-template.csv); no results have been fabricated.

The forms use new recursive sum functions to test transfer beyond the demo's factorial questions. An independent subject reviewer must approve them before use. The coordinator must supply contact, retention, hosting and withdrawal details before consent is obtained.

## Local operational checks

Twelve backend checks pass, including restoration to a separate database with integrity checking, retained learning state, private ownership, resume, and a subsequent answer. Gemini transport checks cover generation/grading/question schemas, blocked or incomplete responses, malformed JSON, bounded retries, and missing-key behavior. Hosted backup/restore remains a deployment check.

scripts/check-live.py provides an isolated real-provider smoke check. It intentionally reports NOT RUN until GEMINI_API_KEY is configured; live generation/grading has not been verified with a real provider in this workspace.