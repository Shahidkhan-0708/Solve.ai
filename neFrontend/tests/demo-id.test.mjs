import {test} from 'node:test';import assert from 'node:assert/strict';import {demoId} from '../lib/demo-id.mjs';
test('chat and attachments work without secure-context randomUUID',()=>{const ids=new Set(Array.from({length:1000},()=>demoId({})));assert.equal(ids.size,1000);});
test('use native UUID when available',()=>assert.equal(demoId({randomUUID:()=> 'native-id'}),'native-id'));
