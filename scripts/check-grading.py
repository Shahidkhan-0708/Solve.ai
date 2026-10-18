"""Run the draft grading benchmark through the real shared assessment path."""
import asyncio
import json
import os
import sys
import tempfile
from datetime import datetime, timezone
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent
sys.path.insert(0, str(ROOT))
from dotenv import load_dotenv
load_dotenv(ROOT / 'backend' / '.env', encoding='utf-8-sig')
load_dotenv(ROOT / '.env', encoding='utf-8-sig')
if not (os.getenv('GROQ_API_KEY', '').strip() or os.getenv('GEMINI_API_KEY', '').strip()):
    raise SystemExit('NOT RUN: configure GROQ_API_KEY locally. No provider calls made.')

async def run():
    from backend import main
    from backend.demo import DEMO_TEXT
    dataset = json.loads((ROOT / 'tests' / 'grading-cases.json').read_text())
    assert dataset['cases'] and len({c['id'] for c in dataset['cases']}) == len(dataset['cases'])
    outcomes = []
    for index, case in enumerate(dataset['cases']):
        if index:
            await asyncio.sleep(13)
        evidence = [{'id': 'reference', 'text': DEMO_TEXT}]
        if case.get('extra_source'):
            evidence.append({'id': 'conflict', 'text': case['extra_source']})
        try:
            feedback = await main.assess(dataset['question'], case['answer'], evidence, 'grading-benchmark')
            actual = feedback.status
        except main.HTTPException as exc:
            actual = 'provider_or_validation_error_' + str(exc.status_code)
        passed = actual in case['expected']
        outcomes.append({'id': case['id'], 'expected': case['expected'], 'actual': actual, 'passed': passed})
        print(('PASS' if passed else 'FAIL') + ': ' + case['id'] + ' -> ' + actual, flush=True)
    result = {'dataset': dataset['version'], 'prompt_version': 'criterion-grading-v2-validation-review', 'review': dataset['review'], 'model': os.getenv('GROQ_MODEL', os.getenv('GEMINI_MODEL', 'openai/gpt-oss-120b')),
              'at': datetime.now(timezone.utc).isoformat(), 'cases': outcomes}
    destination = ROOT / 'tmp' / ('grading-' + datetime.now(timezone.utc).strftime('%Y%m%dT%H%M%S%f') + '.json')
    destination.parent.mkdir(exist_ok=True)
    destination.write_text(json.dumps(result, indent=2) + '\n')
    print('Saved outcome-only report to ' + str(destination))
    print('Draft benchmark agreement does not establish learning efficacy or broad subject accuracy.')
    return all(c['passed'] for c in outcomes)

with tempfile.TemporaryDirectory(prefix='solve-grading-') as directory:
    os.environ['DATA_DIR'] = directory
    success = asyncio.run(run())
raise SystemExit(0 if success else 1)
