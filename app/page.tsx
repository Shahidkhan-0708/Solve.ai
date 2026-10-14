'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { ArrowDown, ArrowLeft, ArrowRight, BookOpen, Check, CheckCircle2, ChevronRight, Clock3, ExternalLink, FileText, FolderOpen, GraduationCap, LayoutDashboard, Lightbulb, Loader2, Plus, RotateCcw, Search, Settings, ShieldCheck, Sparkles, Target, Trash2, Upload, X } from 'lucide-react';
import { api, type Session, type Summary, type Source, type Resource, type Reference } from './api';
import AnimatedLesson from './animated-lesson';
import RecursionExercise from './recursion-exercise';

type View = 'home' | 'learn' | 'sources' | 'progress' | 'settings';
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

export default function Home() {
  const [view, setView] = useState<View>('home');
  const [session, setSession] = useState<Session | null>(null);
  const [sessions, setSessions] = useState<Summary[]>([]);
  const [health, setHealth] = useState<{ ai_configured: boolean; search_configured: boolean } | null>(null);
  const [loading, setLoading] = useState(true);
  const [busy, setBusy] = useState('');
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');
  const [intake, setIntake] = useState(false);
  const [goal, setGoal] = useState('');
  const [level, setLevel] = useState('some');
  const [minutes, setMinutes] = useState('30');
  const [deadline, setDeadline] = useState('');
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
          if (active) { setSession(current); setView(current.course ? 'learn' : 'sources'); }
        }
      } catch (e) { if (active) setError(e instanceof Error ? e.message : 'Could not load your learning sessions.'); }
      finally { if (active) setLoading(false); }
    })();
    return () => { active = false; };
  }, []);

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
      const next = await api<Session>('/sessions', 'POST', { goal, level, minutes: Number(minutes), deadline });
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
    if (file.size > 12 * 1024 * 1024) { setError('Choose a PDF smaller than 12 MB.'); return; }
    await run('Extracting your PDF', async () => {
      const data = new FormData(); data.append('file', file);
      remember(await api<Session>('/sessions/' + session.id + '/sources/file', 'POST', data));
    });
  }
  async function start() {
    if (!session) return;
    await run('Building your learning journey — this can take a minute', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/start', 'POST', { confirmed }));
      setView('learn'); setAnswer(''); await refresh();
    });
  }
  async function submit(value: string) {
    if (!session?.task) return;
    await run('Checking your reasoning', async () => {
      remember(await api<Session>('/sessions/' + session.id + '/attempt', 'POST', { task_id: session.task!.id, answer: value, recall }));
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
  const nav = [
    { id: 'home' as View, label: 'Overview', icon: LayoutDashboard },
    { id: 'learn' as View, label: 'My learning', icon: BookOpen },
    { id: 'sources' as View, label: 'My material', icon: FolderOpen },
    { id: 'progress' as View, label: 'My progress', icon: Target },
  ];

  return <div className="app-shell"><a className="skip-link" href="#main-content">Skip to learning content</a>
    <aside className="sidebar">
      <a className="logo" href="/" aria-label="Solve home"><span className="logo-image"><Image src="/solve-logo.png" alt="Solve" width={1254} height={1254} /></span></a>
      <div className="workspace-label">YOUR LEARNING SPACE</div>
      <nav aria-label="Main navigation">{nav.map(({ id, label, icon: Icon }) =>
        <button key={id} className={'nav-item ' + (view === id ? 'active' : '')} aria-current={view === id ? 'page' : undefined} onClick={() => setView(id)} disabled={!!busy}><Icon size={19} />{label}{id === 'sources' && !!session?.sources.length && <span className="nav-count">{session.sources.length}</span>}</button>
      )}</nav>
      <button className="new-session" onClick={() => { setGoal(''); setIntake(true); }} disabled={!!busy}><Plus size={17} /> New learning goal</button>
      {!!sessions.length && <div className="recent-section"><div className="workspace-label">RECENT JOURNEYS</div>{sessions.slice(0, 4).map(s =>
        <button key={s.id} className={'recent-item ' + (session?.id === s.id ? 'selected' : '')} onClick={() => openSession(s.id)} disabled={!!busy}><span className="recent-dot" />{s.goal}</button>)}</div>}
      <div className="sidebar-bottom">
        <button className={'nav-item ' + (view === 'settings' ? 'active' : '')} onClick={() => setView('settings')} disabled={!!busy}><Settings size={19} /> Settings & privacy</button>
        <div className="profile"><span className="avatar">Y</span><div><strong>Your workspace</strong><small>Private to this browser</small></div><ShieldCheck size={17} /></div>
      </div>
    </aside>

    <div className="main-shell">
      <header className="topbar"><span><span className="breadcrumb">Workspace</span><ChevronRight size={14} />{view === 'home' ? 'Overview' : view === 'learn' ? 'My learning' : view === 'sources' ? 'My material' : view === 'progress' ? 'My progress' : 'Settings'}</span><div className="topbar-right"><span className="status-dot" />{health?.ai_configured ? 'Ready to learn' : 'Reviewed demo available'}<button className="icon-button" aria-label="Open settings" onClick={() => setView('settings')} disabled={!!busy}><Settings size={16} /></button><span className="avatar small">Y</span></div></header>
      <main id="main-content">
        {error && <div className="alert error" role="alert"><span>{error}</span><button className="text-button" disabled={!!busy} onClick={() => session ? openSession(session.id) : window.location.reload()}>Reload saved work</button><button aria-label="Dismiss error" className="icon-button" onClick={() => setError('')}><X size={17} /></button></div>}
        {notice && <div className="alert success" role="status">{notice}<button aria-label="Dismiss notice" className="icon-button" onClick={() => setNotice('')}><X size={17} /></button></div>}
        {busy && <div className="busy-status" role="status"><Loader2 size={17} className="spin" />{busy}</div>}
        {loading ? <div className="empty-state"><Loader2 className="spin" /><h2>Opening your learning space…</h2></div> : <>
        {view === 'home' && <>
          <div className="workspace-heading"><div><h1>Learning sessions</h1><p>Create a session or continue one you've saved.</p></div><button className="primary" onClick={() => { setGoal(''); setIntake(true); }} disabled={!!busy}><Plus size={17} />Start a learning journey</button></div>
          <section className="journeys"><div className="section-heading"><h2>Saved sessions</h2><span>{sessions.length} saved</span></div>
            {!sessions.length && <div className="session-empty"><h3>No saved sessions</h3><p>Start a session to add your PDF, notes, or a web link.</p></div>}
            {sessions.map(s => <button className="journey-row" key={s.id} onClick={() => openSession(s.id)} disabled={!!busy}><span className="journey-icon"><BookOpen size={20} /></span><div><strong>{s.goal}</strong><small>{s.demo ? 'Demo' : 'Your material'} · {s.concepts ? s.demonstrated + ' of ' + s.concepts + ' concepts demonstrated' : 'Ready for material'}</small></div><ArrowRight size={19} /></button>)}
          </section>
          <section className="demo-row"><div><h2>Recursion demo</h2><p>Try a sample lesson before adding your own material. No API key required.</p></div><button className="secondary" onClick={demo} disabled={!!busy}>Try the guided demo<ArrowRight size={17} /></button></section>
        </>}

        {view !== 'home' && !session && <div className="empty-state"><span className="empty-icon"><BookOpen size={30} /></span><h1>No session selected</h1><p>Create a learning goal or explore the reviewed demo.</p><div className="button-row"><button className="primary" onClick={() => setIntake(true)} disabled={!!busy}>Create a learning goal <Plus size={17} /></button><button className="secondary" onClick={demo} disabled={!!busy}>Try the demo</button></div></div>}

        {view === 'sources' && session && <>
          <div className="page-heading compact"><h1>Source material</h1><p>{session.goal}</p></div>
          <div className="content-grid">
            <section className="panel"><div className="section-heading"><h2>Your material</h2><span>{session.sources.length}/6 sources</span></div>
              {!session.sources.length && <p className="muted">Add a chapter, lecture notes, or a public page to get started.</p>}
              {session.sources.map(source => <div className="source-row" key={source.id}><span className="source-icon"><FileText size={21} /></span><button className="source-title" onClick={() => openSource(source)}><strong>{source.title}</strong><small>{source.pages} {source.pages === 1 ? 'page' : 'pages'} · {source.passages.length} readable passages</small></button>{!session.course && <button className="icon-button" aria-label={'Remove ' + source.title} disabled={!!busy} onClick={() => run('Removing source', async () => remember(await api<Session>('/sessions/' + session.id + '/sources/' + source.id, 'DELETE')))}><Trash2 size={17} /></button>}<button className="icon-button" aria-label={'Read ' + source.title} onClick={() => openSource(source)}><ChevronRight size={18} /></button></div>)}
              {!session.course && <>
                <div className="tabs" role="tablist" aria-label="Material type">{(['pdf', 'text', 'url'] as const).map(tab => <button key={tab} role="tab" aria-selected={sourceTab === tab} className={sourceTab === tab ? 'selected' : ''} onClick={() => setSourceTab(tab)} disabled={!!busy}>{tab === 'pdf' ? 'Upload PDF' : tab === 'text' ? 'Paste notes' : 'Add a link'}</button>)}</div>
                {sourceTab === 'pdf' && <label className={'upload-area ' + (busy ? 'disabled' : '')}><Upload size={26} /><strong>Choose a PDF to learn from</strong><span>Text-based PDF · up to 12 MB and 100 pages</span><input type="file" accept=".pdf,application/pdf" disabled={!!busy} onChange={e => { addFile(e.target.files?.[0]); e.target.value = ''; }} /></label>}
                {sourceTab === 'text' && <form onSubmit={addText} className="stack-form"><label>Material title<input value={title} onChange={e => setTitle(e.target.value)} maxLength={120} required placeholder="e.g. Chapter 3 — Cell division" /></label><label>Your notes<textarea value={text} onChange={e => setText(e.target.value)} minLength={60} maxLength={180000} required rows={7} placeholder="Paste the material you want to understand…" /></label><button className="secondary" disabled={!!busy}>Add these notes <Plus size={17} /></button></form>}
                {sourceTab === 'url' && <form onSubmit={addURL} className="stack-form"><label>Public webpage or PDF link<input type="url" value={url} onChange={e => setUrl(e.target.value)} required maxLength={2048} placeholder="https://…" /></label><p className="form-help">Use material you have permission to access. If the page needs login or can't be read, paste the relevant text instead.</p><button className="secondary" disabled={!!busy}>Read this link <ArrowRight size={17} /></button></form>}
              </>}
              {!!session.sources.length && !session.course && <div className="source-confirm"><label className="checkbox-label"><input type="checkbox" checked={confirmed} onChange={e => setConfirmed(e.target.checked)} />I've reviewed the extracted text and it fits my goal.</label><p className="form-help">Relevant passages will be selected for the first journey. The source viewer always retains the full extracted text.</p><button className="primary" onClick={start} disabled={!confirmed || !!busy}>Build my learning journey <Sparkles size={17} /></button></div>}
              {session.course && <div className="source-confirm"><p className="form-help">{session.used_passages.length} of {session.sources.reduce((n, s) => n + s.passages.length, 0)} passages selected for this journey. Source quotations are checked; generated explanations still need critical review.</p><button className="secondary" onClick={() => setView('learn')}>Back to learning <ArrowRight size={17} /></button></div>}
            </section>
            <aside className="panel resource-panel"><span className="step-icon"><Search size={21} /></span><h2>Missing a piece?</h2><p>Find a resource, check that it fits your goal, then add the relevant link or text.</p><button className="secondary" disabled={!!busy} onClick={() => run('Finding resource links', async () => { const data = await api<{ results: Resource[]; notice?: string }>('/sessions/' + session.id + '/resources'); setResources(data.results); if (data.notice) setNotice(data.notice); })}>Find resources <ExternalLink size={16} /></button>{resources && <div className="resource-results">{resources.map((r, i) => <a key={i} href={r.url} target="_blank" rel="noreferrer"><strong>{r.title} <ExternalLink size={13} /></strong><p>{r.description}</p></a>)}</div>}<div className="privacy-note"><ShieldCheck size={17} />Your sources stay in this browser's private workspace.</div></aside>
          </div>
        </>}
        {view === 'learn' && session && <>
          {!session.course ? <div className="empty-state"><FileText size={36} /><h1>Add source material</h1><p>Review your sources, then we'll build your first learning task.</p><button className="primary" onClick={() => setView('sources')}>Add material <ArrowRight size={17} /></button></div> : <>
            <div className="learning-heading"><div><div className="eyebrow">{session.demo ? 'REVIEWED DEMO' : 'YOUR LEARNING JOURNEY'}</div><h1>{session.course.title}</h1><p>{session.goal}</p></div><div className="session-time"><Clock3 size={17} />{session.minutes} min available</div></div>
            {session.demo && <div className="demo-banner"><Sparkles size={16} />A reviewed example, not live AI. Enter numeric answers to explore the learning loop.</div>}
            <div className="learning-grid">
              <div className="learning-main">
                {session.feedback && <section className={'feedback-card ' + (session.feedback.status === 'correct' ? 'correct' : '')} aria-live="polite"><div className="feedback-label">{session.feedback.status === 'correct' ? <CheckCircle2 size={19} /> : <Lightbulb size={19} />}<strong>{session.feedback.status === 'correct' ? 'Correct answer.' : session.feedback.status === 'unable_to_assess' ? 'Let’s clarify that answer.' : 'Review this step.'}</strong><span>LAST CHECK</span></div><p>{session.feedback.explanation}</p>{!!session.feedback.missing_steps.length && <ul>{session.feedback.missing_steps.map((step, i) => <li key={i}>{step}</li>)}</ul>}{session.feedback.learner_answer && <details className="answer-evidence"><summary>Your answer and reasoning checks</summary><p>{session.feedback.learner_answer}</p><ul>{session.feedback.evidence?.map((e, i) => <li key={i}><strong>{e.status}: {e.criterion}</strong><p>{e.note}</p></li>)}</ul></details>}<small>{session.feedback.assisted === undefined ? 'Help usage was not recorded for this older attempt.' : session.feedback.assisted ? 'Worked/source help was used. A fresh independent application is still needed.' : 'No help was requested through the task controls.'}</small>{session.feedback.suspected_gap && <small>Possible gap: {session.feedback.suspected_gap}</small>}<Citation references={session.feedback.references} session={session} open={openSource} /></section>}
                {session.task && current ? <section className="task-card">
                  <div className="task-kicker"><span className="pill">{session.task.phase === 'diagnostic' ? 'QUICK CHECK' : session.task.phase === 'repair' ? 'REPAIR THE GAP' : session.task.phase === 'review' ? 'RETRIEVE IT AGAIN' : session.task.phase === 'teach_back' ? 'TEACH IT BACK' : 'MAKE IT YOURS'}</span><span>Concept {session.task.concept + 1} of {total}</span></div>
                  <h2>{current.title}</h2><p className="task-rationale">{session.task.rationale}</p>
                  {!session.task.show_lesson && <div className="independent-note"><p>Try this before reopening the worked example. Requesting help marks this attempt as assisted.</p><button className="text-button" onClick={requestHelp} disabled={!!busy}>Show a worked example</button></div>}{session.task.show_lesson && <div className="lesson"><h3>The idea, simply</h3><p>{current.explanation}</p>{session.demo ? <AnimatedLesson key={session.id + session.task.id} concept={session.task.concept} steps={current.steps} /> : <div className="visual-steps" aria-label="Worked steps">{current.steps.map((step, i) => <div key={i}><span className="visual-number">{i + 1}</span><p>{step}</p>{i < current.steps.length - 1 && <ArrowDown size={16} className="step-arrow" />}</div>)}</div>}<Citation references={current.references} session={session} open={openSource} />{session.demo && <RecursionExercise key={session.task.id} />}</div>}
                  <form onSubmit={e => { e.preventDefault(); submit(answer); }} className="answer-form">{session.task.phase === 'review' && <label>How did recall feel?<select value={recall} onChange={e => setRecall(e.target.value)}><option value="hard">Hard ? needed serious effort</option><option value="good">Good ? after some thought</option><option value="easy">Easy ? came back readily</option></select><small>Used for scheduling only after a correct, unassisted recall check.</small></label>}<label htmlFor="answer">{session.task.prompt}</label><textarea id="answer" value={answer} onChange={e => setAnswer(e.target.value)} required maxLength={5000} rows={4} placeholder={session.demo ? 'Enter the number you computed…' : 'Explain your reasoning in your own words…'} disabled={!!busy} /><div className="answer-actions"><button type="button" className="text-button" onClick={() => submit("I don't know")} disabled={!!busy}>I don't know yet</button><button className="primary" disabled={!answer.trim() || !!busy}>Check my understanding <ArrowRight size={17} /></button></div></form>
                  <button className="report-button" onClick={() => setReporting(true)} disabled={!!busy}>Something doesn't look right? Report it</button>
                </section> : <section className="completion-card"><span className="completion-icon"><Check size={34} /></span><h2>Session complete</h2><p>Now give them some space. Return after a day for a fresh recall check—understanding today doesn't guarantee retention tomorrow.</p><div className="button-row"><button className="primary" onClick={() => setView('progress')}>See my progress <ArrowRight size={17} /></button><button className="secondary" onClick={() => setIntake(true)}>Start another goal</button></div><button className="text-button" onClick={() => openSession(session.id)} disabled={!!busy}><RotateCcw size={15} /> Check for due reviews</button></section>}
              </div>
              <aside className="journey-panel panel"><div className="section-heading"><h2>Your path</h2><span>{demonstrated}/{total}</span></div><div className="progress-track" role="progressbar" aria-label="Concepts demonstrated" aria-valuenow={demonstrated} aria-valuemin={0} aria-valuemax={total}><span style={{ width: (total ? demonstrated / total * 100 : 0) + '%' }} /></div><p className="form-help">Progress comes from unassisted applications.</p><ol className="concept-list">{session.course.concepts.map((c, i) => <li key={i} className={session.task?.concept === i ? 'current' : ''}><span className={'concept-number ' + (['demonstrated', 'rechecked'].includes(session.progress[i].status) ? 'done' : '')}>{['demonstrated', 'rechecked'].includes(session.progress[i].status) ? <Check size={14} /> : i + 1}</span><div><strong>{c.title}</strong><small>{labels[session.progress[i].status]}</small>{c.prerequisites.length > 0 && <small>Builds on: {c.prerequisites.map(p => session.course!.concepts[p].title).join(', ')}</small>}</div></li>)}</ol><section className="daily-queue" aria-label="Today?s task queue"><h3>Today?s next steps</h3><p className="form-help">About 5 minutes per step; an estimate, not a timer.</p><ol>{session.daily_queue?.map((q, i) => <li key={i}><strong>{session.course!.concepts[q.concept].title}</strong><small>{q.reason}</small></li>)}</ol>{!session.daily_queue?.length && <p className="form-help">No tasks due. Your next recall date is in Progress.</p>}</section><button className="text-button" onClick={() => setView('sources')}><FileText size={15} />View source material <ChevronRight size={15} /></button></aside>
            </div>
          </>}
        </>}

        {view === 'progress' && session && <>
          <div className="page-heading compact"><h1>Learning progress</h1><p>Demonstrated understanding, with room to keep learning.</p></div>
          <div className="stats-grid"><div className="stat-card"><span className="step-icon"><CheckCircle2 size={22} /></span><strong>{demonstrated}<small> / {total}</small></strong><p>Concepts demonstrated</p></div><div className="stat-card"><span className="step-icon"><RotateCcw size={22} /></span><strong>{session.progress.filter(p => p.status === 'rechecked').length}</strong><p>Rechecked after a delay</p></div><div className="stat-card"><span className="step-icon"><GraduationCap size={22} /></span><strong>{session.attempt_count}</strong><p>Learning attempts</p></div></div>
          <section className="panel"><div className="section-heading"><h2>Your understanding, concept by concept</h2><button className="text-button" onClick={() => openSession(session.id)} disabled={!!busy}>Continue learning <ArrowRight size={16} /></button></div>{!session.course && <p className="muted">Add material and begin your journey to see progress here.</p>}{session.course?.concepts.map((c, i) => <div className="progress-row" key={i}><span className="concept-number">{i + 1}</span><div><strong>{c.title}</strong><small>{session.progress[i].review_at ? 'Next adaptive recall: ' + new Date(session.progress[i].review_at! * 1000).toLocaleString() : 'A short check will establish your starting point.'}</small>{session.progress[i].last_evidence && <small>Last evidence: {session.progress[i].last_evidence!.status} ? {session.progress[i].last_evidence!.assisted ? 'assisted' : 'no task help requested'} ? {new Date(session.progress[i].last_evidence!.at * 1000).toLocaleString()}</small>}</div><span className={'status-badge ' + session.progress[i].status}>{labels[session.progress[i].status]}</span></div>)}<p className="form-help">These labels describe practice performance. They are not grades, pass predictions, or guarantees of mastery.</p></section>
        </>}

        {view === 'settings' && session && <>
          <div className="page-heading compact"><h1>Settings & <span>privacy.</span></h1><p>Manage this session and its data.</p></div>
          <section className="panel settings-panel"><h2>Your learning session</h2><div className="setting-row"><div><strong>Goal</strong><p>{session.goal}</p></div></div><div className="setting-row"><div><strong>Live AI</strong><p>{health?.ai_configured ? 'Configured on the server. Relevant source excerpts and your answers are sent to the model provider during live sessions.' : 'Not configured. The reviewed demo works without an API key; add a server-side key to use your own material.'}</p></div><span className="status-badge">{health?.ai_configured ? 'Available' : 'Demo available'}</span></div><div className="setting-row"><div><strong>Session ownership</strong><p>Your private browser cookie owns these sessions. Clearing it loses access; other browsers cannot open them. This is a pilot workspace, without account recovery.</p></div><ShieldCheck size={23} /></div><div className="setting-row danger"><div><strong>Delete this session</strong><p>Remove its extracted sources, answers, progress, and reports from the active database.</p></div><button className="danger-button" onClick={deleteCurrent} disabled={!!busy}><Trash2 size={16} />Delete session</button></div></section>
        </>}
        </>}

      </main>
    </div>

    {intake && <Modal title="What would you like to understand?" close={() => !busy && setIntake(false)}><p className="modal-intro">A few details help us choose a useful starting point.</p><form className="stack-form" onSubmit={create}><label>Your learning goal<textarea value={goal} onChange={e => setGoal(e.target.value)} required minLength={3} maxLength={500} rows={3} placeholder="e.g. Understand how recursion works and trace a function call" autoFocus /></label><label>Where are you starting?<select value={level} onChange={e => setLevel(e.target.value)}><option value="starting">I'm starting from scratch</option><option value="some">I know a little, but have gaps</option><option value="confident">I'm comfortable and want to check</option></select></label><div className="form-columns"><label>Available time today<select value={minutes} onChange={e => setMinutes(e.target.value)}><option value="15">15 minutes</option><option value="30">30 minutes</option><option value="60">1 hour</option><option value="120">2 hours</option></select></label><label>Deadline <span className="muted">(optional)</span><input type="date" value={deadline} onChange={e => setDeadline(e.target.value)} /></label></div><button className="primary full" disabled={!!busy}>Next: add your material <ArrowRight size={17} /></button></form></Modal>}
    {viewer && <Modal title={viewer.source.title} close={() => setViewer(null)}><div className="source-meta"><span>{viewer.source.pages} {viewer.source.pages === 1 ? 'page' : 'pages'} · extracted source text</span>{viewer.source.url && <a href={viewer.source.url} target="_blank" rel="noreferrer">Original link <ExternalLink size={13} /></a>}</div>{viewer.source.passages.filter(p => !viewer.passage || p.id === viewer.passage).map(p => <section className="source-passage" key={p.id}><div className="eyebrow">PAGE {p.page}</div><p>{p.text}</p></section>)}{viewer.passage && <button className="secondary" onClick={() => setViewer({ source: viewer.source })}>Read the full extracted source</button>}</Modal>}
    {reporting && <Modal title="Help us correct this" close={() => !busy && setReporting(false)}><p className="modal-intro">Tell us which explanation, source, or assessment looks wrong. Reports are saved for review; they do not automatically change the model.</p><form className="stack-form" onSubmit={e => { e.preventDefault(); if (!session) return; run('Saving your report', async () => { await api('/sessions/' + session.id + '/report', 'POST', { note: report }); setReporting(false); setReport(''); setNotice('Report saved for review.'); }); }}><label>What needs checking?<textarea required minLength={3} maxLength={1000} rows={5} value={report} onChange={e => setReport(e.target.value)} /></label><button className="primary" disabled={!!busy}>Save report <Check size={16} /></button></form></Modal>}
  </div>;
}
