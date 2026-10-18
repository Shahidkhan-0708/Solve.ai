'use client';

import { useState } from 'react';
import type { PlanUpdate, Reference, Session } from './api';
import './study-plan.css';

export default function StudyPlan({ session, busy, update, openReference }: {
  session: Session; busy: boolean; update: (body: PlanUpdate) => Promise<void>;
  openReference: (reference: Reference) => void;
}) {
  const [editing, setEditing] = useState(false);
  const [minutes, setMinutes] = useState('');
  const [marks, setMarks] = useState<string[]>([]);
  const [preferred, setPreferred] = useState('');
  const concepts = session.course!.concepts;
  const weighted = session.topic_marks.length === concepts.length && session.topic_marks.every(m => m !== null);
  const deferred = session.ranked_topics.filter(q => !session.daily_queue.some(slot => slot.concept === q.concept));

  function edit() {
    setMinutes(String(session.remaining_minutes));
    setMarks(concepts.map((_, i) => session.topic_marks[i] === null ? '' : String(session.topic_marks[i])));
    setPreferred(session.preferred_concept == null ? '' : String(session.preferred_concept));
    setEditing(true);
  }

  return <section className="panel study-plan" aria-label="Your study plan">
    <div className="section-heading"><div><h2>Today’s topics</h2><p>{session.target ? `Target: ${session.target}` : session.goal}</p></div><button className="secondary" onClick={edit} disabled={busy}>Edit study plan</button></div>
    <div className="plan-budget"><strong>{session.remaining_minutes} min remaining</strong><span>{session.planned_minutes} min planned · {session.spent_minutes} min logged</span></div>
<details className="study-details"><summary>How topics are ordered</summary><p className="form-help">{weighted ? 'Uses your topic marks and estimated study time, while accounting for prerequisites, due reviews and confirmed gaps.' : 'Prioritizes prerequisites, due reviews and confirmed gaps. Add topic marks in Edit study plan to include exam priorities.'} Times are estimates, not guaranteed results.</p></details>
    <ol className="plan-topics">{session.daily_queue.map(q => {
      const concept = concepts[q.concept];
      const reference = concept.references[0];
      const source = session.sources.find(s => s.passages.some(p => p.id === reference?.passage_id));
      const passage = source?.passages.find(p => p.id === reference?.passage_id);
      return <li key={q.concept}>
        <div className="plan-topic-heading"><strong>{concept.title}</strong><span>{q.minutes} min{q.partial ? ' · shorter session' : ''}</span></div>
        <p>{q.reason}</p>
        
        {!q.ready && <small>First demonstrate: {concept.prerequisites.filter(i => !['demonstrated', 'rechecked'].includes(session.progress[i].status)).map(i => concepts[i].title).join(', ')}</small>}
        <div className="plan-topic-actions">{source && reference && <button className="text-button" disabled={busy} onClick={() => openReference(reference)}>{source.title} · p. {passage?.page}</button>}
          {q.ready && q.concept !== session.task?.concept && <button className="text-button" disabled={busy} onClick={() => update({ preferred_concept: q.concept })}>{session.preferred_concept === q.concept ? 'Chosen next' : 'Study next'}</button>}</div>
      </li>;
    })}</ol>
    {!session.daily_queue.length && <p className="form-help">{session.remaining_minutes <= 0 ? 'Your time budget is used. The next step is saved; set more time when you are ready.' : 'No topics due. Check Progress for your next recall date.'}</p>}
    {deferred.length > 0 && <details className="study-details"><summary>Topics for later ({deferred.length})</summary><p className="form-help">{deferred.map(q => concepts[q.concept].title).join(', ')}.</p></details>}
    {session.preferred_concept !== undefined && session.preferred_concept !== null && <p className="form-help">Next chosen topic: {concepts[session.preferred_concept].title}. Finish the saved step and its understanding checks first. <button className="text-button" disabled={busy} onClick={() => update({ preferred_concept: null })}>Use recommended order</button></p>}
    {editing && <form className="stack-form plan-editor" onSubmit={e => {
      e.preventDefault();
      update({ remaining_minutes: Number(minutes), topic_marks: marks.map(m => m.trim() === '' ? null : Number(m)), preferred_concept: preferred === '' ? null : Number(preferred) });
    }}>
      <h3>Adjust your plan</h3><label>Remaining study time (minutes)<input type="number" min="0" max="600" step="1" required value={minutes} onChange={e => setMinutes(e.target.value)} disabled={busy} /></label>
      <label>Next topic after the current understanding checks<select value={preferred} disabled={busy} onChange={e => setPreferred(e.target.value)}><option value="">Use recommended order</option>{session.ranked_topics.filter(q => q.ready && q.concept !== session.task?.concept).map(q => <option key={q.concept} value={q.concept}>{concepts[q.concept].title}</option>)}</select></label>
      <p className="form-help">Use exam topic marks or your own weights. Leave unknown values blank; these do not predict your grade.</p>
      {concepts.map((c, i) => <label key={i}>Exam marks: {c.title}<input type="number" min="0" max="1000" step="1" value={marks[i] || ''} placeholder="Unknown" disabled={busy} onChange={e => setMarks(marks.map((m, j) => j === i ? e.target.value : m))} /></label>)}
      <div className="button-row"><button className="primary" disabled={busy}>Save study plan</button><button type="button" className="secondary" disabled={busy} onClick={() => setEditing(false)}>Close plan editor</button></div>
    </form>}
  </section>;
}
