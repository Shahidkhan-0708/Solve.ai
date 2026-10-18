import os
import json
import torch
from pathlib import Path
from transformers import AutoModelForCausalLM, AutoTokenizer
from peft import PeftModel

ROOT = Path(__file__).resolve().parent
LORA_PATH = ROOT / "models" / "solve_grader_lora"

device = "cuda" if torch.cuda.is_available() else "cpu"
dtype = torch.float16 if torch.cuda.is_available() else torch.float32

print(f"Loading base model and Solve.ai LoRA adapter on: {device} ({dtype})...")
model_name = "Qwen/Qwen2.5-1.5B-Instruct"

tokenizer = AutoTokenizer.from_pretrained(model_name)
base_model = AutoModelForCausalLM.from_pretrained(
    model_name,
    torch_dtype=dtype,
    device_map=device
)

print(f"Applying custom Solve LoRA adapter from: {LORA_PATH}...")
model = PeftModel.from_pretrained(base_model, str(LORA_PATH))
model.eval()

def grade_student_answer(concept: str, question: str, criteria: str, student_answer: str) -> dict:
    prompt = f"""<|im_start|>user
System: You are Solve AI, a careful learning coach. Evaluate the student answer against the numbered criteria. Return strict JSON matching the Solve Feedback schema.
Task: Grade Student Answer
Concept: {concept}
Question: {question}
Criteria:
{criteria}
Student Answer: "{student_answer}"<|im_end|>
<|im_start|>assistant
"""
    inputs = tokenizer(prompt, return_tensors="pt").to(device)
    with torch.no_grad():
        outputs = model.generate(
            **inputs,
            max_new_tokens=250,
            temperature=0.1,
            do_sample=False,
            pad_token_id=tokenizer.pad_token_id
        )
    
    raw = tokenizer.decode(outputs[0], skip_special_tokens=False)
    json_str = raw.split("<|im_start|>assistant\n")[-1].replace("<|im_end|>", "").strip()
    return json.loads(json_str)

if __name__ == "__main__":
    print("\n" + "="*60)
    print("RUNNING LIVE LOCAL MODEL TEST (Solve.ai Rubric Grader)")
    print("="*60)
    
    test_cases = [
        {
            "concept": "Recursion",
            "question": "Explain recursion and what is required to make it work safely.",
            "criteria": "0: Identifies base case to prevent stack overflow.\n1: Identifies self-referential call reducing state.",
            "student_answer": "A function calls itself until reaching a base condition that terminates it."
        },
        {
            "concept": "Stacks vs Queues",
            "question": "Explain the difference between stack and queue access orders.",
            "criteria": "0: Identifies Stack as LIFO (Last In First Out).\n1: Identifies Queue as FIFO (First In First Out).",
            "student_answer": "A stack is LIFO like plates, but a queue is FIFO like a ticket line."
        }
    ]
    
    for i, tc in enumerate(test_cases, 1):
        print(f"\n[Test Case {i}] Concept: {tc['concept']}")
        print(f"Student: \"{tc['student_answer']}\"")
        result = grade_student_answer(tc["concept"], tc["question"], tc["criteria"], tc["student_answer"])
        print("\n[Solve.ai Feedback JSON]:")
        print(json.dumps(result, indent=2))
        print("-" * 60)
