DEMO_TEXT = """Recursion essentials
A recursive function calls itself on a smaller version of the same problem.
Every recursive function needs a base case: a condition that returns a result without another recursive call.
For this lesson, factorial(n) returns 1 when n is 0 or 1; otherwise it returns n multiplied by factorial(n - 1).
The argument must be a non-negative integer. Subtracting one moves a positive integer toward the base case.
For factorial(4), the calls are factorial(4), factorial(3), factorial(2), factorial(1).
There are three recursive calls after the initial factorial(4) call. The call at n = 1 stops.
Each unfinished call waits on the call stack for the smaller call to return.
Returns unwind in reverse order: factorial(1) = 1; factorial(2) = 2 * 1 = 2; factorial(3) = 3 * 2 = 6; factorial(4) = 4 * 6 = 24.
Similarly, factorial(5) = 5 * 24 = 120, and factorial(6) = 6 * 120 = 720.
To trace a new example, list the calls until the base case, then compute each return from smallest to largest.
If the recursive call never gets closer to a base case, the computation will not finish normally.
"""

DEMO_CONCEPTS = [
    {
        "title": "Know when to stop",
        "explanation": "The base case is the smallest problem you can answer directly. It stops the function from calling itself forever. Our factorial function returns 1 when n is 0 or 1.",
        "steps": ["Check whether n is 0 or 1.", "If it is, return 1 without another call.", "Otherwise, use the recursive rule."],
        "prerequisites": [],
        "quote": "Every recursive function needs a base case: a condition that returns a result without another recursive call.",
        "diagnostic": {"prompt": "Our factorial function returns 1 when n is 0 or 1. What does factorial(0) return?", "expected_answer": "1"},
        "practice": {"prompt": "Trace factorial(4) until its base case. At what value of n does the chain stop? Enter the number.", "expected_answer": "1"},
        "repair": {"prompt": "A call reaches factorial(1). What number can it return immediately, without another call?", "expected_answer": "1"},
        "review": {"prompt": "With a base case of n <= 1, what is the final n reached when tracing factorial(7)?", "expected_answer": "1"}
    },
    {
        "title": "Make the problem smaller",
        "explanation": "Each factorial call subtracts one from n. This gives you a clear path to the base case. Count the arrows between calls, not the total number of calls.",
        "steps": ["Start with factorial(4).", "Follow 4 → 3 → 2 → 1.", "Count three arrows: three recursive calls after the starting call."],
        "prerequisites": [0],
        "quote": "Subtracting one moves a positive integer toward the base case.",
        "diagnostic": {"prompt": "For factorial(3), how many recursive calls happen after the initial call before reaching n = 1?", "expected_answer": "2"},
        "practice": {"prompt": "For factorial(5), count the recursive calls after the initial call, stopping at n = 1. How many?", "expected_answer": "4"},
        "repair": {"prompt": "The call chain is 4 → 3 → 2 → 1. How many arrows connect these calls?", "expected_answer": "3"},
        "review": {"prompt": "For factorial(6), how many recursive calls after the first call take you to n = 1?", "expected_answer": "5"}
    },
    {
        "title": "Follow the returns",
        "explanation": "A call waits for the smaller call to finish. Then it multiplies that answer by its own n. Compute from the base case upward to see the final result.",
        "steps": ["factorial(1) returns 1.", "factorial(2) returns 2 × 1 = 2.", "factorial(3) returns 3 × 2 = 6.", "factorial(4) returns 4 × 6 = 24."],
        "prerequisites": [0, 1],
        "quote": "Each unfinished call waits on the call stack for the smaller call to return.",
        "diagnostic": {"prompt": "Use factorial(n) = n × factorial(n - 1), with factorial(1) = 1. What is factorial(3)?", "expected_answer": "6"},
        "practice": {"prompt": "The smaller call factorial(3) returns 6. What does factorial(4) return?", "expected_answer": "24"},
        "repair": {"prompt": "factorial(1) returns 1. What does factorial(2) return when its waiting call resumes?", "expected_answer": "2"},
        "review": {"prompt": "Compute a fresh example by unwinding from n = 1: what is factorial(5)?", "expected_answer": "120"}
    }
]
