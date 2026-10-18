import assert from 'node:assert/strict';
import { test } from 'node:test';
import { api, ApiError, getSession, ensureOwner } from '../lib/api.mjs';

test('simultaneous first loads bootstrap exactly one guest cookie', async () => {
  const original = globalThis.fetch; let calls = 0;
  try {
    globalThis.fetch = async url => { calls++; assert.equal(url, '/api/health'); return { ok: true, json: async () => ({ ok: true }) }; };
    const values = await Promise.all([ensureOwner(), ensureOwner(), ensureOwner()]);
    assert.equal(calls, 1); assert.deepEqual(values, [{ ok: true }, { ok: true }, { ok: true }]);
  } finally { globalThis.fetch = original; }
});

test('API requests preserve same-origin credentials, revisions and grading operation IDs', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async (url, options) => {
      assert.equal(url, '/api/sessions/demo/attempt');
      assert.equal(options.credentials, 'same-origin');
      assert.equal(options.cache, 'no-store');
      assert.equal(options.headers['If-Match'], '"3"');
      assert.equal(options.headers['Idempotency-Key'], 'operation-12345678');
      assert.deepEqual(JSON.parse(options.body), { answer: '<script>untrusted text</script>' });
      return Response.json({ attempt_count: 1 });
    };
    assert.deepEqual(await api('/sessions/demo/attempt', { method: 'POST', body: { answer: '<script>untrusted text</script>' }, revision: 3, operationId: 'operation-12345678' }), { attempt_count: 1 });
  } finally { globalThis.fetch = original; }
});

test('session reads are explicit read-only requests and errors are actionable', async () => {
  const original = globalThis.fetch;
  try {
    globalThis.fetch = async url => {
      assert.equal(url, '/api/sessions/session%2Fid?read_only=true');
      return Response.json({ detail: 'Your session changed.' }, { status: 409 });
    };
    await assert.rejects(getSession('session/id'), error => error instanceof ApiError && error.status === 409 && error.message === 'Your session changed.');
    globalThis.fetch = async () => new Response('invalid JSON');
    await assert.rejects(api('/health'), /unreadable response/);
    globalThis.fetch = async () => { throw new TypeError('network error'); };
    await assert.rejects(api('/health'), /draft is preserved/);
  } finally { globalThis.fetch = original; }
});

test('PDF uploads keep multipart boundaries and aborted requests stay aborted', async () => {
  const original = globalThis.fetch;
  try {
    const body = new FormData();
    body.append('file', new Blob(['%PDF']), 'source.pdf');
    globalThis.fetch = async (url, options) => {
      assert.equal(options.body, body);
      assert.equal(options.headers['Content-Type'], undefined);
      return Response.json({ saved: true });
    };
    assert.deepEqual(await api('/sessions/demo/sources/file', { method: 'POST', body }), { saved: true });
    const controller = new AbortController();
    controller.abort();
    globalThis.fetch = async (url, options) => { options.signal.throwIfAborted(); };
    await assert.rejects(api('/health', { signal: controller.signal }), error => error.name === 'AbortError');
  } finally { globalThis.fetch = original; }
});

test("provider errors keep SOLVE branding and status",()=>{const error=new ApiError("Gemini is temporarily unavailable",503);assert.equal(error.message,"SOLVE is temporarily unavailable");assert.equal(error.status,503);});


test('transient proxy failures retry safe reads once, while mutations and JSON errors are never replayed',async()=>{
 const original=globalThis.fetch;let calls=0;
 try{
  globalThis.fetch=async()=>++calls===1?new Response('Internal Server Error',{status:500}):Response.json({ok:true});
  assert.deepEqual(await api('/health'),{ok:true});assert.equal(calls,2);
  calls=0;globalThis.fetch=async()=>{calls++;return new Response('Internal Server Error',{status:500});};
  await assert.rejects(api('/sessions',{method:'POST',body:{goal:'Save once'}}),/unreadable response/);assert.equal(calls,1);
  calls=0;await assert.rejects(api('/health'),/unreadable response/);assert.equal(calls,2);
  calls=0;globalThis.fetch=async()=>{calls++;return Response.json({detail:'Backend failure'},{status:500});};
  await assert.rejects(api('/health'),/Backend failure/);assert.equal(calls,1);
 }finally{globalThis.fetch=original;}
});
