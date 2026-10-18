# Solve.ai feature roadmap

This document separates agreed requirements from verified implementation. A feature is implemented only when its code path and relevant checks have been reviewed.

## Existing project areas — implementation status needs verification

The session's codebase map identifies these areas. It does not establish that they are complete or connected in production.

| Area | Known location | Status |
| --- | --- | --- |
| Lesson interface and animated lessons | `app/` — Concept, AnimatedLesson, RecursionExercise | Needs code review |
| References and sources | `app/` — Reference, Source | Needs code review |
| Backend connection, spending, and boundaries | `backend/` — connect, spend, boundaries | Needs code review |
| Rendering scripts | `scripts/` and `scripts/manim/` | Needs code review |

This inventory is provisional, not an exhaustive feature audit. Repository access was unavailable when this document was created.

## Agreed feature — student learning memory

Status: **Planned; implementation not verified.**

Integrate vector search into Solve.ai so it can recognize previously encountered topics, including topics described using different words. Use stored learning results to recommend learning, reviewing, or skipping the full lesson.

### Requirements covered in planning

- Keep learning memory specific to each student.
- Store topic completion, assessment results, and review dates as structured records.
- Use vector search to retrieve related topic content and notes.
- Use retrieved evidence to explain recommendations inside the lesson interface.
- Support importing selected Markdown notes from an Obsidian vault.
- Treat imported notes as evidence of exposure, not proof of mastery.
- Let the student choose to review or continue even when skipping is recommended.

### Remaining build work, in dependency order

| Step | Deliverable | Project area | Status |
| --- | --- | --- | --- |
| 1 | Review existing student identity, persistence, completion, assessment, and review code; reuse existing records | Backend and database | Pending |
| 2 | Fill any gaps in student/topic learning history and save results after completion or assessment | Backend and database | Pending |
| 3 | Add embeddings and vector retrieval for topic content, scoped to the authenticated student's private material | Backend and database | Pending |
| 4 | Add selected Obsidian Markdown import, with validation and handling for repeat imports | Backend and app | Pending |
| 5 | Return a learn/review/skip recommendation with the evidence that supports it | Backend | Pending |
| 6 | Display the recommendation, previous learning date when available, and review/continue options | Lesson interface in `app/` | Pending |
| 7 | Verify first-time topics, repeated topics, differently named topics, review-due topics, unavailable retrieval, and isolation between students | Relevant tests | Pending |

### Agreed embedding and retrieval flow

1. After a student completes a topic or assessment, save the structured learning result and prepare the topic content or summary for indexing.
2. Send that text to an embedding API and store the returned vector alongside the student ID, topic ID, source reference, completion date, and embedding model/version. The completion record remains the source of truth for whether learning was completed.
3. When the student opens a topic, embed its content or query using the same embedding model and compatible settings.
4. Search the vector database within the authenticated student's records for related learned content.
5. Give the AI the retrieved evidence and structured completion, assessment, and review records so it can explain a learn/review/skip recommendation.

Store the source text or a reference to it as well as the vector, so the AI can use readable evidence. Imported Obsidian notes follow the indexing flow but must retain an imported-note source and must not create a verified completion record.

If the embedding API or indexing fails, preserve the learning result and report indexing as pending or failed so it can be retried without duplicating records. Do not send unnecessary student identifiers to the embedding API. A model change requires re-indexing affected content before comparing its vectors with new queries.

### Recommendation rules

- No verified completion: recommend learning; mention related notes if available.
- Completed but review is due or assessment evidence is insufficient: recommend review.
- Completed with sufficient assessment evidence and no review due: offer to skip the full lesson.
- A vector match alone never authorizes a skip.
- If retrieval fails or produces an uncertain match, keep the lesson available and do not claim the topic is mastered.

Example message: "You studied this topic earlier. You can skip the full lesson or take a quick review."

### Implementation choices still to confirm

- Existing database and vector support. Prefer pgvector if the project already uses PostgreSQL and supports the extension; do not introduce a separate database without reviewing the current stack.
- Embedding provider and model, based on existing integrations and cost.
- Mastery and review criteria, reusing the existing assessment and scheduling rules where available.

## Completion tracking

Move a deliverable to **Implemented** only after recording its code location and verification evidence. Use **Partial** when code exists but a required integration or check is missing. Planning approval alone does not change implementation status.
