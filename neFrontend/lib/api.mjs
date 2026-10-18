export class ApiError extends Error {
  constructor(message, status) { super(message.replace(/Gemini|Groq/gi,'SOLVE')); this.name = 'ApiError'; this.status = status; }
}

let ownerReady;
// Bootstrap once so simultaneous first loads cannot receive different guest cookies.
export function ensureOwner() {
  return ownerReady ||= api('/health').catch(error => { ownerReady = null; throw error; });
}

export async function api(path, { method = 'GET', body, revision, operationId, signal } = {}) {
  const controller = new AbortController();
  const abort = () => controller.abort(signal.reason);
  if (signal?.aborted) abort();
  else signal?.addEventListener('abort', abort, { once: true });
  const timeout = setTimeout(() => controller.abort(), 180000);
  const form = body instanceof FormData;
  try {
    const request = {
      method, credentials: 'same-origin', cache: 'no-store', signal: controller.signal,
      headers: {
        ...(body !== undefined && !form ? { 'Content-Type': 'application/json' } : {}),
        ...(revision !== undefined ? { 'If-Match': `"${revision}"` } : {}),
        ...(operationId ? { 'Idempotency-Key': operationId } : {}),
      },
      body: body === undefined ? undefined : form ? body : JSON.stringify(body),
    };
    let response = await fetch('/api' + path, request);
    // A reset proxy connection can return plain-text 500; only safe reads may retry.
    if (method === 'GET' && response.status === 500 && !response.headers.get('content-type')?.includes('application/json')) {
      await response.body?.cancel();
      response = await fetch('/api' + path, request);
    }
    const data = await response.json().catch(() => { throw new ApiError('The server returned an unreadable response. Please retry.', response.status); });
    if (!response.ok) throw new ApiError(typeof data.detail === 'string' ? data.detail : Array.isArray(data.detail) ? data.detail.map(item => item.msg).join('; ') : 'Check your input and try again.', response.status);
    return data;
  } catch (error) {
    if (signal?.aborted) throw error;
    if (error.name === 'AbortError') throw new ApiError('This request took too long. Reload saved work before retrying.', 0);
    if (error instanceof TypeError) throw new ApiError('Cannot reach SOLVE. Your draft is preserved; check your connection and retry.', 0);
    throw error;
  } finally {
    clearTimeout(timeout);
    signal?.removeEventListener('abort', abort);
  }
}

export const getSession = id => api(`/sessions/${encodeURIComponent(id)}?read_only=true`);
