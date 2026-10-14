# Participant information and assessment forms

## Agreement to participate

Solve is an experimental learning tool. Participation is voluntary; you can stop without giving a reason. This pilot compares two study methods and does not affect course grades. It does not promise improved results.

You will complete a 10-minute starting assessment, study for 20 minutes, complete a 10-minute assessment, and return for a 10-minute assessment 24-48 hours later. Do not use AI, notes, search, or another person during assessments. During study, use only your assigned study method and the supplied recursion notes.

Use a participant ID, not your name, in answers. Do not upload personal, confidential, or unlicensed material. If live AI is enabled, selected source text and your learning answers are sent to Google Gemini for generation and grading. The reviewed numeric demo processes answers locally. Tell the coordinator if you want to withdraw your records. Your learning session can be deleted in Settings; backups expire separately. Do not clear browser cookies before your return visit.

Before recruiting, the coordinator must provide their contact, the hosting location, whether live AI is enabled, a concrete retention period, and how to request withdrawal. Do not begin until these details are supplied and you agree. Consent/contact records stay separate from assessment answers.

Agreement: I have read these details, had an opportunity to ask questions, and voluntarily agree to participate.

Participant ID: ______  Date: ______  Agreement recorded: ______

## Form A: starting assessment

Participant ID: ______  Date/time: ______

For non-negative integer n, this function returns a number:

    total(n):
        if n == 0: return 0
        return n + total(n - 1)

1. What condition stops recursion? What number does that call return?
2. Starting from total(4), list every call argument in order. How many recursive calls occur AFTER the initial call?
3. Compute total(4). Show each return from the stopping call to the initial call.
4. A programmer changes n - 1 to n + 1. Starting at n = 4, explain why the function no longer finishes normally and how to fix it.

## Form B: immediately after study

Participant ID: ______  Date/time: ______

For positive integer n, this function returns a number:

    count_sum(n):
        if n <= 1: return 1
        return n + count_sum(n - 2)

Use n = 7 for the trace; every argument in this trace is positive.

1. What condition stops recursion? What number does that call return?
2. Starting from count_sum(7), list every call argument in order. How many recursive calls occur AFTER the initial call?
3. Compute count_sum(7). Show each return from the stopping call to the initial call.
4. A programmer changes n - 2 to n + 2. Starting at n = 7, explain why the function no longer finishes normally and how to fix it.

## Form C: delayed assessment, 24-48 hours after study

Participant ID: ______  Date/time: ______

For non-negative integer n, this function returns a number:

    step_sum(n):
        if n <= 0: return 0
        return n + step_sum(n - 3)

Use n = 9 for the trace; every argument in this trace is non-negative.

1. What condition stops recursion? What number does that call return?
2. Starting from step_sum(9), list every call argument in order. How many recursive calls occur AFTER the initial call?
3. Compute step_sum(9). Show each return from the stopping call to the initial call.
4. A programmer changes n - 3 to n + 3. Starting at n = 9, explain why the function no longer finishes normally and how to fix it.

After each form, optionally record confusing wording or a technical problem. Do not include personal information. These forms are drafts awaiting an independent subject review.