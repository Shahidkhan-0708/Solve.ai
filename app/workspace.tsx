'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import { ThinkingOrb } from 'thinking-orbs';
import QuickActions from './quick-actions';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronRight, Clock3, ExternalLink, FileText, GraduationCap, Lightbulb, Loader2, Plus, RotateCcw, ShieldCheck, Sparkles, Trash2, Upload, X } from 'lucide-react';
import { api, type Session, type Summary, type Source, type Resource, type Reference, type PlanUpdate } from './api';
import AnimatedLesson from './animated-lesson';
import GeneratedLesson from './generated-lesson';
import RecursionExercise from './recursion-exercise';
import StudyPlan from './study-plan';

const ChatInput = dynamic(() => import('./chat-input'), { ssr: false });

type View = 'home' | 'plan' | 'learn' | 'sources' | 'progress' | 'settings';
const labels = { new: 'Not checked', introduced: 'Introduced', demonstrated: 'Demonstrated', rechecked: 'Rechecked' };

function Modal({ title, children, close }: { title: string; children: React.ReactNode; close: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const id = useId();
  useEffect(() => { dialog.current?.showModal(); }, []);
  return <dialog ref={dialog} aria-labelledby={id} onCancel={close}>
    <div className="modal-heading"><h2 id={id}>{title}</h2><button className="icon-button" onClick={close} aria-label="Close dialog"><X size={20} /></button></div>
    {children}
  </dialog>;
}

function Citation({ references, session, open }: { references: Reference[]; session: Session; open: (source: Source, passage?: string) => void }) {
  return <div className="citations">{references.map((reference, i) => {
    const source = session.sources.find(s => s.passages.some(p => p.id === reference.passage_id));
    const passage = source?.passages.find(p => p.id === reference.passage_id);
    return source ? <button key={i} onClick={() => open(source, reference.passage_id)}><FileText size={13} /> {source.title} · p. {passage?.page}</button> : null;
  })}</div>;
}

export default function Workspace({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const stage = usePathname().split('/').pop() || 'goal';
  const view: View = stage === 'material' ? 'sources' : stage === 'plan' ? 'plan' : stage === 'learn' ? 'learn' : stage === 'replan' ? 'progress' : stage === 'settings' ? 'settings' : 'home';
  function setView(next: View) { router.push('/study/' + ({ home: 'sessions', sources: 'material', plan: 'plan', learn: 'learn', progress: 'replan', settings: 'settings' }[next])); }
  function setIntake(open: boolean) { if (open) router.push('/study/goal'); }
  const demoRequested = useRef(false);
  const [session, setSession] = useState<Session | null>(null);
  const [sessions, setSessions] = useState<Summary[]>([]);
  const [health, setHealth] = useState<{ ai_configured: boolean; search_configured: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('some');
  const [minutes, setMinutes] = useState('30');
  const [deadline, setDeadline] = useState('');
  const [target, setTarget] = useState('');
  const [spentMinutes, setSpentMinutes] = useState('5');
  const [sourceTab, setSourceTab] = useState<'pdf' | 'text' | 'url'>('pdf');
  const [title, setTitle] = useState('');
  const [text, setText] = useState('');
  const [url, setUrl] = useState('');
  const [confirmed, setConfirmed] = useState(false);
  const [resources, setResources] = useState<Resource[] | null>(null);
  const [viewer, setViewer] = useState<{ source: Source; passage?: string } | null>(null);
  const [answer, setAnswer] = useState('');
  const [reporting, setReporting] = useState(false);
  const [report, setReport] = useState('');
  const [recall, setRecall] = useState('good');

  function remember(next: Session) {
    setSession(next);
    setConfirmed(false);
    setRecall('good');
    setSpentMinutes('5');
    localStorage.setItem('solve-session', next.id);
  }
  async function refresh() { setSessions(await api<Summary[]>('/sessions')); }
  async function run(label: string, operation: () => Promise<void>) {
    if (busy) return;
    setBusy(label); setError(''); setNotice('');
    try { await operation(); }
    catch (e) { setError(e instanceof Error ? e.message : 'Something went wrong. Please retry.'); }
    finally { setBusy(''); }
  }
  useEffect(() => {
    let active = true;
    (async () => {
      try {
        const h = await api<{ ai_configured: boolean; search_configured: boolean }>('/health');
        const list = await api<Summary[]>('/sessions');
        if (!active) return;
        setHealth(h); setSessions(list);
        const sid = localStorage.getItem('solve-session');
        if (sid && list.some(s => s.id === sid)) {
          const current = await api<Session>('/sessions/' + sid);
          if (active) setSession(current);
        }
      } catch (e) { if (active) setError(e instanceof Error ? e.message : 'Could not load your learning sessions.'); }
      finally { if (active) setLoading(false); }
    })();
    return () => { active = false; };
  }, []);
  useEffect(() => {
    if (stage === 'demo' && !loading && !demoRequested.current) {
      demoRequested.current = true;
      void demo();
    }
  }, [stage, loading]);

  async function openSession(id: string) {
    await run('Opening your session', async () => {
      const current = await api<Session>('/sessions/' + id);
      remember(current); setAnswer(''); setResources(null); setView(current.course ? 'learn' : 'sources');
    });
  }
  async function demo() {
    await run('Preparing the reviewed demo', async () => {
      const next = await api<Session>('/demo', 'POST');
      remember(next); setAnswer(''); setView('learn'); await refresh();
    });
  }
  async function create(e: React.FormEvent) {
    e.preventDefault();
    await run('Saving your goal', async () => {
      const next = await api<Session>('/sessions', 'POST', { goal, level, minutes: Number(minutes), deadline, target });
      remember(next); setIntake(false); setResources(null); setView('sources'); await refresh();
    });
  }
  async function addText(e: React.FormEvent) {
    e.preventDefault(); if (!session) return;
    await run('Reading your material', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/sources/text', 'POST', { title, text }));
      setTitle(''); setText('');
    });
  }
  async function addURL(e: React.FormEvent) {
    e.preventDefault(); if (!session) return;
    await run('Reading the public page', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/sources/url', 'POST', { url }));
      setUrl('');
    });
  }
  async function addFile(file?: File) {
    if (!file || !session) return;
    if (!/\.pdf$/i.test(file.name)) { setError('Choose a PDF, or use Paste notes or Add a link for other material.'); return; }
    if (file.size > 12 * 1024 * 1024) { setError('Choose a PDF smaller than 12 MB.'); return; }
    await run('Extracting your PDF', async () => {
      const data = new FormData(); data.append('file', file);
      remember(await api<Session>('/sessions/' + session.id + '/sources/file', 'POST', data));
      setNotice(file.name + ' added. Open it to review the extracted text.');
    });
  }
  async function start() {
    if (!session) return;
    await run('Building your learning journey — this can take a minute', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/start', 'POST', { confirmed }));
      setView('plan'); setAnswer(''); await refresh();
    });
  }
  async function submit(value: string) {
    if (!session?.task) return;
    await run('Checking your reasoning', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/attempt', 'POST', { task_id: session.task!.id, answer: value, recall, spent_minutes: Number(spentMinutes) }));
      setAnswer(''); await refresh();
    });
  }
  async function deleteCurrent() {
    if (!session || !window.confirm('Delete this session, including its material and answers? This cannot be undone.')) return;
    await run('Deleting your session', async () => {
      await api('/sessions/' + session.id, 'DELETE');
      setSession(null); localStorage.removeItem('solve-session'); setView('home'); await refresh();
      setNotice('Session and its learning data deleted.');
    });
  }
  async function requestHelp() {
    if (!session?.task) return;
    await run('Opening a worked example', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/help', 'POST', { task_id: session.task!.id }));
    });
  }
  async function updatePlan(body: PlanUpdate) {
    if (!session) return;
    await run('Updating your study plan', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/plan', 'POST', body));
      setNotice('Study plan saved. Your completed work is preserved.');
    });
  }
  async function openSource(source: Source, passage?: string) {
    if (session?.task && !session.task.assisted) {
      await run('Recording source help', async () => {
        remember(await api<Session>('/sessions/' + session.id + '/help', 'POST', { task_id: session.task!.id }));
        setViewer({ source, passage });
      });
    } else setViewer({ source, passage });
  }
  const demonstrated = session?.progress.filter(p => ['demonstrated', 'rechecked'].includes(p.status)).length || 0;
  const total = session?.progress.length || 0;
  const current = session?.task && session.course ? session.course.concepts[session.task.concept] : null;

  const flowHeader = <header className="flow-header"><Link href="/" className="text-button">Home</Link>
    <div className="flow-tools"><QuickActions busy={!!busy} /></div>
  </header>;

  if (['goal', 'time', 'target'].includes(stage)) return <div className="setup-shell">{children}{flowHeader}
    <main className="setup-page" id="main-content">
      <h1>{stage === 'goal' ? 'What do you want to study?' : stage === 'time' ? 'How much time do you have?' : 'What are you aiming for?'}</h1>
      {error && <div className="alert error" role="alert">{error}</div>}
      <form className="stack-form" onSubmit={e => {
        if (stage === 'target') { void create(e); return; }
        e.preventDefault(); router.push('/study/' + (stage === 'goal' ? 'time' : 'target'));
      }}>
        {stage === 'goal' && <label>Your learning goal<textarea value={goal} onChange={e => setGoal(e.target.value)} required minLength={3} maxLength={500} rows={4} placeholder="e.g. Understand recursion and trace a function call" autoFocus /></label>}
        {stage === 'time' && <><label>Available time today<select value={minutes} onChange={e => setMinutes(e.target.value)}><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="60">1 hour</option><option value="120">2 hours</option></select></label><label>Deadline (optional)<input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} /></label></>}
        {stage === 'target' && <><label>Target grade or outcome (optional)<input value={target} onChange={e => setTarget(e.target.value)} maxLength={120} placeholder="e.g. Aim for 70%, or explain recursion independently" autoFocus /></label><label>Where are you starting?<select value={level} onChange={e => setLevel(e.target.value)}><option value="starting">I'm starting from scratch</option><option value="some">I know a little, but have gaps</option><option value="confident">I'm comfortable and want to check</option></select></label>{!goal.trim() && <p role="status">Add your learning goal first. <Link href="/study/goal">Go to the first question</Link>.</p>}</>}
        <div className="setup-actions"><button type="button" className="text-button" disabled={!!busy} onClick={() => router.push(stage === 'goal' ? '/' : '/study/' + (stage === 'time' ? 'goal' : 'time'))}><ArrowLeft size={16} />Back</button>
          <button className="primary" disabled={!!busy || (stage === 'target' && (loading || goal.trim().length < 3))}>{busy || 'Next'}<ArrowRight size={17} /></button></div>
      </form>
    </main>
  </div>;

  return <div className="app-shell flow-workspace">{children}{flowHeader}<a className="skip-link" href="#main-content">Skip to learning content</a>

    <div className="main-shell">
      <main id="main-content">
        {error && <div className="alert error" role="alert"><span>{error}</span><button className="text-button" disabled={!!busy} onClick={() => session ? openSession(session.id) : window.location.reload()}>Reload saved work</button><button aria-label="Dismiss error" className="icon-button" onClick={() => setError('')}><X size={17} /></button></div>}
        {notice && <div className="alert success" role="status">{notice}<button aria-label="Dismiss notice" className="icon-button" onClick={() => setNotice('')}><X size={17} /></button></div>}
        {busy && <div className="busy-status" role="status">{busy === 'Checking your reasoning' || busy === 'Updating your study plan' || busy.startsWith('Building your learning journey') ? <ThinkingOrb state="solving" size={64} theme="light" aria-hidden="true" /> : <Loader2 size={17} className="spin" />}{busy}</div>}
        {loading ? <div className="empty-state"><span className="logo-image"><Image src="/solve-logo.png" alt="Solve" width={1254} height={1254} /></span><p role="status">Preparing your study steps…</p></div> : <>
        {view === 'home' && <>
          <div className="workspace-heading"><div><h1>Learning sessions</h1><p>Create a session or continue one you've saved.</p></div><button className="primary" onClick={() => { setGoal(''); setIntake(true); }} disabled={!!busy}><Plus size={17} />Start a learning journey</button></div>
          <section className="journeys"><div className="section-heading"><h2>Saved sessions</h2><span>{sessions.length} saved</span></div>
            {!sessions.length && <div className="session-empty"><h3>No saved sessions</h3><p>Start a session to add your PDF, notes, or a web link.</p></div>}
            {sessions.map(s => <button className="journey-row" key={s.id} onClick={() => openSession(s.id)} disabled={!!busy}><span className="journey-icon"><BookOpen size={20} /></span><div><strong>{s.goal}</strong><small>{s.demo ? 'Demo' : 'Your material'} · {s.concepts ? s.demonstrated + ' of ' + s.concepts + ' concepts demonstrated' : 'Ready for material'}</small></div><ArrowRight size={19} /></button>)}
          </section>
          <section className="demo-row"><div><h2>Recursion demo</h2><p>Try a sample lesson before adding your own material.</p></div><button className="secondary" onClick={demo} disabled={!!busy}>Try the guided demo<ArrowRight size={17} /></button></section>
        </>}

        {view !== 'home' && !session && <div className="empty-state"><span className="empty-icon"><BookOpen size={30} /></span><h1>No session selected</h1><p>Create a learning goal or explore the reviewed demo.</p><div className="button-row"><button className="primary" onClick={() => setIntake(true)} disabled={!!busy}>Create a learning goal <Plus size={17} /></button><button className="secondary" onClick={demo} disabled={!!busy}>Try the demo</button></div></div>}

        {view === 'sources' && session && <>
          <div className="page-heading compact"><h1>Source material</h1><p>{session.goal}</p></div>
          <div className="content-grid">
            <section className="panel"><div className="section-heading"><h2>Your material</h2><span>{session.sources.length}/6 sources</span></div>
              {!session.sources.length && <p className="muted">Add a chapter, lecture notes, or a public page to get started.</p>}
              {session.sources.map(source => <div className="source-row" key={source.id}><span className="source-icon"><FileText size={21} /></span><button className="source-title" onClick={() => openSource(source)}><strong>{source.title}</strong><small>{source.pages} {source.pages === 1 ? 'page' : 'pages'}</small></button>{!session.course && <button className="icon-button" aria-label={'Remove ' + source.title} disabled={!!busy} onClick={() => run('Removing source', async () => remember(await api<Session>('/sessions/' + session.id + '/sources/' + source.id, 'DELETE')))}><Trash2 size={17} /></button>}</div>)}
              {!session.course && <>
                <div className="tabs" role="tablist" aria-label="Material type">{(['pdf', 'text', 'url'] as const).map(tab => <button key={tab} role="tab" aria-selected={sourceTab === tab} className={sourceTab === tab ? 'selected' : ''} onClick={() => setSourceTab(tab)} disabled={!!busy}>{tab === 'pdf' ? 'Upload PDF' : tab === 'text' ? 'Paste notes' : 'Add a link'}</button>)}</div>
                {sourceTab === 'pdf' && <label className={'upload-area ' + (busy ? 'disabled' : '')} onDragOver={e => e.preventDefault()} onDrop={e => {
                  e.preventDefault();
                  if (busy) return;
                  if (e.dataTransfer.files.length !== 1) { setError('Add one PDF at a time.'); return; }
                  void addFile(e.dataTransfer.files[0]);
                }}><Upload size={26} /><strong>Choose a PDF or drop it here</strong><span>Text-based PDF · up to 12 MB and 100 pages</span><input type="file" accept=".pdf,application/pdf" disabled={!!busy} onChange={e => { void addFile(e.target.files?.[0]); e.target.value = ''; }} /></label>}
                {sourceTab === 'text' && <form onSubmit={addText} className="stack-form"><label>Material title<input value={title} onChange={e => setTitle(e.target.value)} maxLength={120} required placeholder="e.g. Chapter 3 — Cell division" /></label><label>Your notes<textarea value={text} onChange={e => setText(e.target.value)} minLength={60} maxLength={180000} required rows={7} placeholder="Paste the material you want to understand…" /></label><button className="secondary" disabled={!!busy}>Add these notes <Plus size={17} /></button></form>}
                {sourceTab === 'url' && <form onSubmit={addURL} className="stack-form"><label>Public webpage or PDF link<input type="url" value={url} onChange={e => setUrl(e.target.value)} required maxLength={2048} placeholder="https://…" /></label><p className="form-help">Use material you have permission to access. If the page needs login or can't be read, paste the relevant text instead.</p><button className="secondary" disabled={!!busy}>Read this link <ArrowRight size={17} /></button></form>}
              </>}
              {!!session.sources.length && !session.course && <div className="source-confirm"><label className="checkbox-label"><input type="checkbox" checked={confirmed} onChange={e => setConfirmed(e.target.checked)} />I've reviewed the extracted text and it fits my goal.</label><button className="primary" onClick={start} disabled={!confirmed || !!busy}>Build study plan <ArrowRight size={17} /></button></div>}
              {session.course && <div className="source-confirm"><p className="form-help">Check generated explanations against your sources.</p><button className="primary" disabled={!!busy} onClick={() => setView('plan')}>View study plan <ArrowRight size={17} /></button></div>}
            </section>
            <aside className="panel resource-panel"><details className="study-details"><summary>Need more material?</summary><p>Find a resource, check that it fits your goal, then add the relevant link or text.</p><button className="secondary" disabled={!!busy} onClick={() => run('Finding resource links', async () => { const data = await api<{ results: Resource[]; notice?: string }>('/sessions/' + session.id + '/resources'); setResources(data.results); if (data.notice) setNotice(data.notice); })}>Find resources <ExternalLink size={16} /></button>{resources && <div className="resource-results">{resources.map((r, i) => <a key={i} href={r.url} target="_blank" rel="noreferrer"><strong>{r.title} <ExternalLink size={13} /></strong><p>{r.description}</p></a>)}</div>}</details><div className="privacy-note"><ShieldCheck size={17} />Only this browser can access your saved sessions.</div></aside>
          </div>
        </>}
        {(view === 'plan' || view === 'progress') && session?.course && <>
          {view === 'plan' && <div className="workspace-heading"><h1>Study plan</h1></div>}
          <StudyPlan key={session.id} session={session} busy={!!busy} update={updatePlan} openReference={reference => {
            const source = session.sources.find(s => s.passages.some(p => p.id === reference.passage_id));
            if (source) openSource(source, reference.passage_id);
          }} />
          {view === 'plan' && <div className="setup-actions"><button className="text-button" disabled={!!busy} onClick={() => setView('sources')}><ArrowLeft size={16} />Material</button><button className="primary" disabled={!!busy} onClick={() => setView('learn')}>Continue learning<ArrowRight size={17} /></button></div>}
        </>}
        {view === 'plan' && session && !session.course && <div className="empty-state"><h1>First, bring your material.</h1><p>Review your sources so we can build a useful study plan.</p><button className="primary" onClick={() => setView('sources')}>Add material<ArrowRight size={17} /></button></div>}
        {view === 'learn' && session && <>
          {!session.course ? <div className="empty-state"><FileText size={36} /><h1>Add source material</h1><p>Review your sources, then we'll build your first learning task.</p><button className="primary" onClick={() => setView('sources')}>Add material <ArrowRight size={17} /></button></div> : <>
            <div className="learning-heading"><div><h1>{session.course.title}</h1></div><div className="session-time"><Clock3 size={17} />{session.remaining_minutes} min remaining</div></div>
            {session.demo && <div className="demo-banner"><Sparkles size={16} />Guided demo · answer with a number.</div>}
            <button className="text-button" disabled={!!busy} onClick={() => setView('plan')}><ArrowLeft size={16} />Study plan</button>
            <div className="learning-grid">
              <div className="learning-main">
                {session.feedback && <section className={'feedback-card ' + (session.feedback.status === 'correct' ? 'correct' : '')} aria-live="polite"><div className="feedback-label">{session.feedback.status === 'correct' ? <CheckCircle2 size={19} /> : <Lightbulb size={19} />}<strong>{session.feedback.status === 'correct' ? 'Correct answer.' : session.feedback.status === 'unable_to_assess' ? 'Let’s clarify that answer.' : 'Review this step.'}</strong><span>LAST CHECK</span></div><p>{session.feedback.explanation}</p>{!!session.feedback.missing_steps.length && <ul>{session.feedback.missing_steps.map((step, i) => <li key={i}>{step}</li>)}</ul>}{session.feedback.learner_answer && <details className="answer-evidence"><summary>Your answer and reasoning checks</summary><p>{session.feedback.learner_answer}</p><ul>{session.feedback.evidence?.map((e, i) => <li key={i}><strong>{e.status}: {e.criterion}</strong><p>{e.note}</p></li>)}</ul></details>}<small>{session.feedback.assisted === undefined ? 'Help usage was not recorded for this older attempt.' : session.feedback.assisted ? 'Worked/source help was used. A fresh independent application is still needed.' : 'No help was requested through the task controls.'}</small>{session.feedback.suspected_gap && <small>Possible gap: {session.feedback.suspected_gap}</small>}<Citation references={session.feedback.references} session={session} open={openSource} /></section>}
                {session.remaining_minutes <= 0 ? <section className="completion-card"><span className="completion-icon"><Clock3 size={34} /></span><h2>Study time used</h2><p>Your answers and next step are saved. Set a fresh budget when you are ready to continue.</p><button className="primary" disabled={!!busy} onClick={() => updatePlan({ remaining_minutes: 30 })}>Continue with 30 minutes <ArrowRight size={17} /></button></section> : session.task && current ? <section className="task-card">
                  <div className="task-kicker"><span className="pill">{session.task.phase === 'diagnostic' ? 'QUICK CHECK' : session.task.phase === 'repair' ? 'REPAIR THE GAP' : session.task.phase === 'review' ? 'RETRIEVE IT AGAIN' : session.task.phase === 'teach_back' ? 'TEACH IT BACK' : 'MAKE IT YOURS'}</span><span>Concept {session.task.concept + 1} of {total}</span></div>
                  <h2>{current.title}</h2><p className="task-rationale">{session.task.rationale}</p>
                  {!session.task.show_lesson && <div className="independent-note"><p>Try this before reopening the worked example. Requesting help marks this attempt as assisted.</p><button className="text-button" onClick={requestHelp} disabled={!!busy}>Show a worked example</button></div>}{session.task.show_lesson && <div className="lesson"><h3>The idea, simply</h3><p>{current.explanation}</p>{session.demo ? <AnimatedLesson key={session.id + session.task.id} concept={session.task.concept} steps={current.steps} demo /> : <GeneratedLesson key={session.id + session.task.id} sid={session.id} index={session.task.concept} concept={current} />}<Citation references={current.references} session={session} open={openSource} />{session.demo && <details className="study-details"><summary>Optional practice: try another input</summary><RecursionExercise key={session.task.id} /></details>}</div>}
                  <form onSubmit={e => { e.preventDefault(); submit(answer); }} className="answer-form">{session.task.phase === 'review' && <label>How did recall feel?<select value={recall} onChange={e => setRecall(e.target.value)}><option value="hard">Hard — needed serious effort</option><option value="good">Good — after some thought</option><option value="easy">Easy — came back readily</option></select><small>Helps schedule your next review after a correct answer without help.</small></label>}<label htmlFor="answer">{session.task.prompt}</label><ChatInput key={session.task.id} value={answer} onChange={setAnswer} disabled={!!busy} demo={session.demo} /><label className="time-log">Minutes spent on this step<input type="number" min="0" max="600" step="1" required value={spentMinutes} disabled={!!busy} onChange={e => setSpentMinutes(e.target.value)} /><small>Include time spent reading or using help. This reduces your remaining budget.</small></label><div className="answer-actions"><button type="button" className="text-button" onClick={() => submit("I don't know")} disabled={!!busy || spentMinutes === '' || !Number.isInteger(Number(spentMinutes)) || Number(spentMinutes) < 0 || Number(spentMinutes) > 600}>I don't know yet</button><button className="primary" disabled={!answer.trim() || !!busy}>Check my understanding <ArrowRight size={17} /></button></div></form>
                  <button className="report-button" onClick={() => setReporting(true)} disabled={!!busy}>Something doesn't look right? Report it</button>
                </section> : <section className="completion-card"><span className="completion-icon"><Check size={34} /></span><h2>Session complete</h2><p>Your progress is saved. Check Learning progress for your next review date.</p><div className="button-row"><button className="secondary" onClick={() => setIntake(true)}>Start another goal</button></div><button className="text-button" onClick={() => openSession(session.id)} disabled={!!busy}><RotateCcw size={15} /> Check for due reviews</button></section>}
              </div>
              <aside className="journey-panel panel"><div className="section-heading"><h2>Your path</h2><span>{demonstrated}/{total}</span></div><div className="progress-track" role="progressbar" aria-label="Concepts demonstrated" aria-valuenow={demonstrated} aria-valuemin={0} aria-valuemax={total}><span style={{ width: (total ? demonstrated / total * 100 : 0) + '%' }} /></div><p className="form-help">Demonstrated means you applied a concept without help.</p><ol className="concept-list">{session.course.concepts.map((c, i) => <li key={i} className={session.task?.concept === i ? 'current' : ''}><span className={'concept-number ' + (['demonstrated', 'rechecked'].includes(session.progress[i].status) ? 'done' : '')}>{['demonstrated', 'rechecked'].includes(session.progress[i].status) ? <Check size={14} /> : i + 1}</span><div><strong>{c.title}</strong><small>{labels[session.progress[i].status]}</small>{c.prerequisites.length > 0 && <small>Builds on: {c.prerequisites.map(p => session.course!.concepts[p].title).join(', ')}</small>}</div></li>)}</ol><button className="text-button" onClick={() => setView('sources')}><FileText size={15} />View source material <ChevronRight size={15} /></button></aside>
            </div>
            <div className="plan-next"><button className="primary" disabled={!!busy} onClick={() => setView('progress')}>Review progress<ArrowRight size={17} /></button></div>
          </>}
        </>}

        {view === 'progress' && session && <>
          <div className="page-heading compact"><h1>Learning progress</h1></div>
          <div className="stats-grid"><div className="stat-card"><span className="step-icon"><CheckCircle2 size={22} /></span><strong>{demonstrated}<small> / {total}</small></strong><p>Concepts demonstrated</p></div><div className="stat-card"><span className="step-icon"><RotateCcw size={22} /></span><strong>{session.progress.filter(p => p.status === 'rechecked').length}</strong><p>Rechecked after a delay</p></div><div className="stat-card"><span className="step-icon"><GraduationCap size={22} /></span><strong>{session.attempt_count}</strong><p>Learning attempts</p></div></div>
          <section className="panel"><div className="section-heading"><h2>Your understanding, concept by concept</h2></div>{!session.course && <p className="muted">Add material and begin your journey to see progress here.</p>}{session.course?.concepts.map((c, i) => <div className="progress-row" key={i}><span className="concept-number">{i + 1}</span><div><strong>{c.title}</strong><small>{session.progress[i].review_at ? 'Next review: ' + new Date(session.progress[i].review_at! * 1000).toLocaleString() : 'A short check will establish your starting point.'}</small>{session.progress[i].last_evidence && <small>Last check: {session.progress[i].last_evidence!.status} · {session.progress[i].last_evidence!.assisted ? 'assisted' : 'without help'} · {new Date(session.progress[i].last_evidence!.at * 1000).toLocaleString()}</small>}</div><span className={'status-badge ' + session.progress[i].status}>{labels[session.progress[i].status]}</span></div>)}<p className="form-help">Progress reflects your practice, not a predicted exam grade.</p></section>
          <div className="plan-next"><button className="primary" disabled={!!busy} onClick={() => openSession(session.id)}>Continue learning<ArrowRight size={17} /></button></div>
        </>}

        {view === 'settings' && session && <>
          <div className="page-heading compact"><h1>Settings & privacy</h1><p>Manage this session and its data.</p></div>
          <section className="panel settings-panel"><h2>Your learning session</h2><div className="setting-row"><div><strong>Goal</strong><p>{session.goal}</p></div></div><div className="setting-row"><div><strong>Live AI</strong><p>{health?.ai_configured ? 'Configured on the server. Relevant source excerpts and your answers are sent to the model provider during live sessions.' : 'Currently unavailable for your own material. You can use the guided demo.'}</p></div><span className="status-badge">{health?.ai_configured ? 'Available' : 'Demo available'}</span></div><div className="setting-row"><div><strong>Session ownership</strong><p>Your private browser cookie owns these sessions. Clearing it loses access; other browsers cannot open them. This is a pilot workspace, without account recovery.</p></div><ShieldCheck size={23} /></div><div className="setting-row danger"><div><strong>Delete this session</strong><p>Remove its extracted sources, answers, progress, and reports from the active database.</p></div><button className="danger-button" onClick={deleteCurrent} disabled={!!busy}><Trash2 size={16} />Delete session</button></div></section>
        </>}
        </>}

      </main>
    </div>

    {viewer && <Modal title={viewer.source.title} close={() => setViewer(null)}><div className="source-meta"><span>{viewer.source.pages} {viewer.source.pages === 1 ? 'page' : 'pages'} · extracted source text</span>{viewer.source.url && <a href={viewer.source.url} target="_blank" rel="noreferrer">Original link <ExternalLink size={13} /></a>}</div>{viewer.source.passages.filter(p => !viewer.passage || p.id === viewer.passage).map(p => <section className="source-passage" key={p.id}><div className="eyebrow">PAGE {p.page}</div><p>{p.text}</p></section>)}{viewer.passage && <button className="secondary" onClick={() => setViewer({ source: viewer.source })}>Read the full extracted source</button>}</Modal>}
    {reporting && <Modal title="Help us correct this" close={() => !busy && setReporting(false)}><p className="modal-intro">Tell us which explanation, source, or assessment looks wrong. Reports are saved for review; they do not automatically change the model.</p><form className="stack-form" onSubmit={e => { e.preventDefault(); if (!session) return; run('Saving your report', async () => { await api('/sessions/' + session.id + '/report', 'POST', { note: report }); setReporting(false); setReport(''); setNotice('Report saved for review.'); }); }}><label>What needs checking?<textarea required minLength={3} maxLength={1000} rows={5} value={report} onChange={e => setReport(e.target.value)} /></label><button className="primary" disabled={!!busy}>Save report <Check size={16} /></button></form></Modal>}
  </div>;
}
