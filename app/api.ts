export type Reference = { passage_id: string; quote: string };
export type Source = { id: string; title: string; kind: string; url: string; pages: number; passages: { id: string; page: number; text: string }[] };
export type Concept = { title: string; explanation: string; steps: string[]; prerequisites: number[]; references: Reference[] };
export type Task = { id: string; concept: number; phase: 'diagnostic' | 'practice' | 'repair' | 'review' | 'teach_back'; prompt: string; rationale: string; show_lesson: boolean; assisted: boolean };
export type Session = {
  id: string; goal: string; level: string; minutes: number; deadline: string; demo: boolean;
  sources: Source[]; course: { title: string; concepts: Concept[] } | null;
  progress: { status: 'new' | 'introduced' | 'demonstrated' | 'rechecked'; review_at: number | null; successes: number; independent_successes?: number; last_evidence?: { status: string; phase: string; assisted: boolean; at: number } }[];
  task: Task | null; attempt_count: number; used_passages: string[];
  daily_queue: { concept: number; phase: string; reason: string; minutes: number }[];
  feedback: { assisted?: boolean; learner_answer?: string; attempt_id?: string; at?: number; evidence?: { criterion: string; status: string; note: string }[]; status: string; explanation: string; missing_steps: string[]; suspected_gap: string; concept: number; answered_prompt: string; references: Reference[] } | null;
};
export type Summary = { id: string; goal: string; demo: boolean; updated: number; concepts: number; demonstrated: number };
export type Resource = { title: string; url: string; description: string };

export async function api<T>(path: string, method = 'GET', body?: unknown): Promise<T> {
  const controller = new AbortController();
  const timeout = setTimeout(() => controller.abort(), 180000);
  try {
    const form = body instanceof FormData;
    const response = await fetch('/api' + path, {
      method, credentials: 'same-origin', signal: controller.signal,
      headers: body && !form ? { 'Content-Type': 'application/json' } : {},
      body: body ? form ? body as FormData : JSON.stringify(body) : undefined,
    });
    const data = await response.json().catch(() => ({ detail: 'The server returned an unreadable response. Please retry.' }));
    if (!response.ok) {
      const detail = typeof data.detail === 'string' ? data.detail : 'Please check the input and try again.';
      throw new Error(detail);
    }
    return data;
  } catch (error) {
    if (error instanceof Error && error.name === 'AbortError') throw new Error('This request took too long. Your session is saved; reload it before retrying.');
    if (error instanceof TypeError) throw new Error('Cannot reach Solve. Check your connection and that the backend is running.');
    throw error;
  } finally { clearTimeout(timeout); }
}
