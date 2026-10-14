# Coordinator protocol and private grading key

Do not share this file with learners. All materials are draft instruments: an independent subject reviewer must approve correctness, clarity, difficulty, and alignment before recruiting. This is a directional pilot, not evidence of efficacy yet.

## Before the first participant

1. Fill in the participant information's coordinator contact, host location, live-AI setting, retention period, and withdrawal procedure. Record explicit agreement separately from answers.
2. Have a subject reviewer approve the source in backend/demo.py and all three forms. Check the domains, stopping conditions, call counts, and rubric; freeze forms before the pilot. Record reviewer/date and changes here.
3. Give all learners the same original recursion notes and a 20-minute study period. For the baseline, provide those notes, the explanations/steps in DEMO_CONCEPTS as a fixed summary, and its diagnostic/practice questions as a fixed quiz with answers available after submission. Do not adapt explanations to answers.
4. For Solve, use the reviewed recursion demo. If using live generation instead, review its generated course/questions before learners begin and use the same reviewed pack for the baseline. Do not mix live and demo results in one comparison.
5. Randomly shuffle 30 anonymous IDs, assign the first 15 to Solve and the rest to baseline. Preserve the assignment list separately from the reviewer answer packets. Record the assignment before study; do not reassign after seeing outcomes.
6. Verify the hosted backup/restore, secure-cookie setup, and live-provider checks if enabled. Run one complete rehearsal with the coordinator. Retain and report technical failures.

## Each participant

- Administer Form A for 10 minutes, without assistance. Do not show its key.
- Allow 20 minutes using only the assigned method. Record first useful task latency, completion, technical incidents, and any grading disputes. Do not record names or full provider keys in logs.
- Administer Form B for 10 minutes immediately after study. Keep the key hidden until Form C is complete.
- Schedule Form C for 24-48 hours after study, with the same 10-minute limit. Record the actual elapsed hours. Administer it BEFORE learners resume Solve's delayed practice or review their notes.
- Give the reviewer packets labelled only with participant ID and form, in shuffled order; hide group labels, tool feedback, and timestamps. Keep original responses so disputes can be reviewed.
- Record withdrawals and missed return visits; leave unavailable scores blank. Never treat missing scores as zero or silently exclude failures.

## Ten-point rubric, identical structure for every form

Q1: 2 points: one for the correct stopping condition, one for the return value.
Q2: 2 points: one for the complete ordered call sequence, one for the recursive-call count excluding the initial call.
Q3: 4 points: one for the base return, one for the first unwind, one for the next unwind(s), one for the final result. A correct final number without working earns only its final-result point. Apply the intermediate points by required step, not keywords; do not deduct twice for a single arithmetic slip when subsequent reasoning follows consistently.
Q4: 2 points: one for explaining that the argument moves away from the stopping condition, one for restoring a step toward it. Equivalent correct explanations receive credit.

| Form | Q1 | Q2 | Q3 returns | Q4 fix |
| --- | --- | --- | --- | --- |
| A | n == 0; returns 0 | 4,3,2,1,0; 4 recursive calls | total(0)=0, total(1)=1, total(2)=3, total(3)=6, total(4)=10 | n - 1 |
| B | n <= 1; returns 1 | 7,5,3,1; 3 recursive calls | count_sum(1)=1, count_sum(3)=4, count_sum(5)=9, count_sum(7)=16 | n - 2 |
| C | n <= 0; returns 0 | 9,6,3,0; 3 recursive calls | step_sum(0)=0, step_sum(3)=3, step_sum(6)=9, step_sum(9)=18 | n - 3 |

For Q3's intermediate points: A's first unwind is total(1)=1 and next unwinds are total(2)=3 plus total(3)=6; B's are 4 then 9; C's are 3 then 9. For A, award the next-unwinds point only when both required steps are shown or a correct combined trace expresses both.

Reviewer approval: ______  Date: ______  Instrument version: ______

## Results and launch decision

Use results-template.csv, one row per participant; scores are 0-10, counts are non-negative integers, flags are yes/no, and missing values stay blank. Keep contact and consent records elsewhere. Link disputes to anonymous IDs in a separate reviewer note, without source/answer text in operational logs.

Report enrolled, completed, and returned counts for each group; pre/post/delayed score distributions; within-person post-minus-pre and delayed-minus-pre changes for available pairs; missingness and withdrawals; reviewer-confirmed grading errors; latency and support incidents. Compare groups with baseline differences and sample size visible. These related forms are not validated equal-difficulty instruments; do not claim calibrated efficacy or causal certainty from this small pilot.

Provider logs expose tokens by call, not participant cost totals. Use provider billing's actual model rates for the pilot period; do not invent costs or use unverified prices. Leave token/cost fields blank for the local demo and explain that no provider was used. Do not count local numeric grading as evidence that free-form AI grading is accurate.

Retain the frozen source/forms, approval, anonymous results, and decision notes. Public launch requires reviewed subject coverage, successful operational checks, acceptable measured cost/latency, and a justified next iteration. Thirty learners and delayed outcomes have not yet been collected.