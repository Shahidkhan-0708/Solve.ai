'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/8078b6cd74a84eefa4641af5257a43a5';
import './8078b6cd74a84eefa4641af5257a43a5.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-8078b6cd74a84eefa4641af5257a43a5 bg-surface font-body-md text-body-md text-on-surface antialiased" data-screen-id="8078b6cd74a84eefa4641af5257a43a5">
    <div className="w-full bg-surface-container-highest px-space-md py-1.5 flex items-center justify-between text-on-surface font-label-sm text-label-sm border-b border-surface-container">
      <span className="font-medium tracking-wide">
        {"CURRENT — Target Status & Learning Statistics — Desktop"}
      </span>
      <span className="text-secondary text-[12px]">
        {"Authoritative Verified Production Spec"}
      </span>
    </div>
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low z-50 flex flex-col justify-between py-space-md px-space-md">
      <div className="flex flex-col gap-space-md overflow-hidden">
        <div className="flex items-center gap-space-sm px-space-xs">
          <span className="w-2 h-2 rounded-full bg-primary"></span>
          <span className="font-headline-sm text-headline-sm text-on-surface tracking-tight font-semibold">
            {"SOLVE"}
          </span>
          <span className="font-label-sm text-label-sm bg-surface-container text-on-surface-variant px-space-xs py-0.5 rounded">
            {"AI MENTOR"}
          </span>
        </div>
        <div className="relative flex items-center">
          <span className="material-symbols-outlined absolute left-2.5 text-on-surface-variant text-[18px]" aria-hidden="true">
            {"search"}
          </span>
          <input className="w-full bg-surface-container-lowest text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm pl-8 pr-3 py-1.5 rounded-lg border-0 outline-none focus:bg-surface-container" placeholder="Search syllabus & notes..." type="text" />
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-space-xs font-medium">
            {"Navigation"}
          </span>
          <nav className="flex flex-col gap-1" data-active-classes="bg-primary text-on-primary font-medium rounded-lg">
            <a className="flex items-center justify-between px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="my-plan-and-strategy" href="#">
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"track_changes"}
                </span>
                <span>
                  {"My Plan & Strategy"}
                </span>
              </span>
            </a>
            <a aria-current="page" className="flex items-center justify-between px-space-sm py-2 transition-colors bg-primary text-on-primary font-medium rounded-lg" data-path="target-status" href="#">
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"verified"}
                </span>
                <span>
                  {"Target Status"}
                </span>
              </span>
              <span className="font-label-sm text-label-sm bg-surface-container-highest text-on-surface px-1.5 py-0.5 rounded-full font-medium">
                {"ACTIVE"}
              </span>
            </a>
            <a className="flex items-center justify-between px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="knowledge-graph" href="#">
              <span className="flex items-center gap-2.5">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"hub"}
                </span>
                <span>
                  {"Knowledge Graph"}
                </span>
              </span>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant px-space-xs font-medium">
            {"Recent Sessions"}
          </span>
          <div className="flex flex-col gap-1">
            <a className="flex flex-col px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="session-advanced-calculus" href="#">
              <span className="font-label-md text-label-md truncate">
                {"Multi-variable Gradient Descent"}
              </span>
              <span className="font-label-sm text-label-sm text-secondary">
                {"24m ago · Chat Mode"}
              </span>
            </a>
            <a className="flex flex-col px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="session-linear-algebra" href="#">
              <span className="font-label-md text-label-md truncate">
                {"Eigenvectors & Projection"}
              </span>
              <span className="font-label-sm text-label-sm text-secondary">
                {"Yesterday · Study Mode"}
              </span>
            </a>
            <a className="flex flex-col px-space-sm py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="session-probabilistic-models" href="#">
              <span className="font-label-md text-label-md truncate">
                {"Markov Decision Processes"}
              </span>
              <span className="font-label-sm text-label-sm text-secondary">
                {"3d ago · Study Mode"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-between pt-space-sm px-space-xs">
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              {"person"}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="font-label-md text-label-md font-medium text-on-surface">
              {"Alex Rivera"}
            </span>
            <span className="font-label-sm text-label-sm text-secondary">
              {"Cognitive Tier 3"}
            </span>
          </div>
        </div>
        <a className="text-on-surface-variant hover:text-on-surface transition-colors p-1" data-path="settings" href="#">
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            {"tune"}
          </span>
        </a>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl z-40 shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
        <div className="w-full h-16 px-space-lg flex items-center justify-between gap-space-md">
          <div className="flex items-center gap-space-lg">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              {"SOLVE"}
            </span>
            <div className="flex items-center p-0.5 bg-surface-container rounded-lg">
              <button className="px-3 py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-medium" type="button">
                {"Chat"}
              </button>
              <button className="px-3 py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                {"Study"}
              </button>
            </div>
          </div>
          <div className="flex-1 max-w-md hidden md:flex items-center">
            <div className="w-full relative flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]" aria-hidden="true">
                {"search"}
              </span>
              <input className="w-full bg-surface-container-low text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm pl-9 pr-4 py-1.5 rounded-lg border-0 outline-none focus:bg-surface-container-high transition-colors" placeholder="Ask a concept or jump to module..." type="text" />
            </div>
          </div>
          <div className="flex items-center gap-space-sm">
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"notifications"}
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"history"}
              </span>
            </button>
            <button className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"help_outline"}
              </span>
            </button>
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"person"}
              </span>
            </div>
          </div>
        </div>
      </header>
      <main className="w-full pt-16 bg-surface min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-[1020px] mx-auto px-space-md md:px-space-lg py-space-xl flex flex-col gap-space-2xl">
            <header className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
              <div className="flex flex-col gap-1 max-w-xl">
                <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm uppercase tracking-wider font-medium">
                  <span>
                    {"Target Verification"}
                  </span>
                  <span>
                    {"/"}
                  </span>
                  <span>
                    {"Status Ledger"}
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                  {"Target Status"}
                </h1>
                <p className="font-body-md text-body-md text-secondary">
                  {"See your progress and decide what to work on next."}
                </p>
              </div>
              <div className="flex flex-col items-start md:items-end gap-1.5">
                <div className="relative inline-block text-left">
                  <div className="flex items-center gap-2 bg-surface-container-lowest px-3 py-2 rounded-xl shadow-sm">
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase">
                      {"Scope:"}
                    </span>
                    <select className="bg-transparent font-label-md text-label-md font-semibold text-on-surface focus:outline-none cursor-pointer pr-2" id="scope-selector" onChange={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                      <option defaultValue="chat-ds">
                        {"Chat · Data Structures mid preparation"}
                      </option>
                      <option defaultValue="study-py">
                        {"Study · Python foundations"}
                      </option>
                    </select>
                    <span className="material-symbols-outlined text-secondary text-[18px] pointer-events-none -ml-2" aria-hidden="true">
                      {"unfold_more"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span className="font-label-sm text-label-sm text-secondary" id="scope-badge-text">
                    {"Chat Exam Context · Isolated learning records"}
                  </span>
                </div>
              </div>
            </header>
            <main className="flex flex-col gap-space-2xl" id="main-content-flow">
              <section className="flex flex-col gap-space-sm" id="section-goal-summary">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-medium">
                        {"Active Target Specification"}
                      </span>
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold" id="target-title">
                        {"Data Structures mid exam preparation"}
                      </h2>
                    </div>
                    <div className="flex items-center gap-space-sm self-start md:self-auto">
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container font-medium transition-colors" type="button">
                        {"\n                Edit target\n              "}
                      </button>
                      <a className="px-3 py-1.5 rounded-lg bg-surface-container-highest text-on-surface font-label-md text-label-md hover:bg-surface-container-high font-medium transition-colors flex items-center gap-1" data-path="my-plan-and-strategy" href="#">
                        <span>
                          {"View plan"}
                        </span>
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"arrow_forward"}
                        </span>
                      </a>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-md pt-space-xs">
                    <div className="flex flex-col p-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm text-secondary font-medium">
                        {"Evaluation Criterion"}
                      </span>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5" id="target-spec-criterion">
                        {"Pass"}
                      </span>
                    </div>
                    <div className="flex flex-col p-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm text-secondary font-medium">
                        {"Scheduled Exam Time"}
                      </span>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5" id="target-spec-time">
                        {"Tomorrow at 10:00 AM"}
                      </span>
                    </div>
                    <div className="flex flex-col p-space-sm bg-surface-container-low rounded-lg">
                      <span className="font-label-sm text-label-sm text-secondary font-medium">
                        {"Original Study Budget"}
                      </span>
                      <span className="font-headline-sm text-headline-sm font-semibold text-on-surface mt-0.5" id="target-spec-budget">
                        {"4 hours allocated"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-start gap-2 text-secondary bg-surface-container-low/60 px-3 py-2 rounded-lg">
                    <span className="material-symbols-outlined text-[16px] mt-0.5" aria-hidden="true">
                      {"info"}
                    </span>
                    <p className="font-body-sm text-body-sm">
                      {"\n              Study time budget is distinct from exam start time. Progress reflects verified practice evidence.\n            "}
                    </p>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-sm" id="section-recommended-action">
                <div className="bg-surface-container-lowest p-space-lg rounded-xl shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md relative overflow-hidden">
                  <div className="flex flex-col gap-space-xs max-w-2xl">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 bg-primary text-on-primary font-label-sm text-label-sm rounded uppercase tracking-wider font-semibold">
                        {"Recommended next step"}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Priority intervention"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold pt-1">
                      {"Review updating head"}
                    </h3>
                    <p className="font-body-md text-body-md text-secondary leading-relaxed">
                      {"\n              Your teach-back included the new link correctly, but missed updating the head pointer variable to reference the new node.\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2.5 shrink-0">
                    <button className="px-4 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Open explanation\n            "}
                    </button>
                    <button className="px-4 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-surface-container-highest hover:text-on-surface transition-all flex items-center justify-center gap-2" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Practise this step"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-plan-progress">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-space-xs">
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wider">
                      {"Sequential Path"}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"Preparation progress"}
                    </h3>
                  </div>
                  <span className="font-label-md text-label-md font-medium text-on-surface bg-surface-container-low px-2.5 py-1 rounded-lg">
                    {"\n            1 of 6 learning activities completed\n          "}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-secondary -mt-2">
                  {"\n          Breaks excluded from learning metric. Completion does not imply permanent mastery.\n        "}
                </p>
                <div className="bg-surface-container-lowest p-space-md md:p-space-lg rounded-xl shadow-sm flex flex-col gap-space-lg">
                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-2">
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-low gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"01"}
                        </span>
                        <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                          {"check_circle"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Quick starting check"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Completed"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-high gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-primary font-medium">
                          {"02"}
                        </span>
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Linked lists"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface font-medium">
                          {"In progress"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-low/60 gap-2 opacity-70">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"03"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Stacks & queues"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Not started"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-low/40 gap-2">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"REST"}
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                          {"coffee"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-secondary">
                          {"Short break"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"10m planned"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-low/60 gap-2 opacity-70">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"04"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Trees & traversals"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Not started"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-low/60 gap-2 opacity-70">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"05"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Mixed practice"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Not started"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col justify-between p-3 rounded-lg bg-surface-container-low/60 gap-2 opacity-70">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary font-medium">
                          {"06"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-surface-container-highest"></span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Final review"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Not started"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-body-sm text-body-sm text-secondary">
                      {"Total session scope: 3.5 hrs remaining against target window"}
                    </span>
                    <a className="font-label-md text-label-md font-medium text-on-surface hover:text-secondary flex items-center gap-1" data-path="my-plan-and-strategy" href="#">
                      <span>
                        {"Open preparation plan"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </a>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-practice-evidence">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"Practice evidence · Linked-list practice"}
                    </h3>
                    <button className="font-label-md text-label-md font-medium text-on-surface hover:text-secondary flex items-center gap-1.5 px-3 py-1 bg-surface-container-lowest rounded-lg shadow-sm" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Review attempts (Drawer)"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"open_in_new"}
                      </span>
                    </button>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {"\n            These results describe this practice session, not your expected exam score or probability of passing.\n          "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md" id="practice-metrics-grid">
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase">
                      {"Questions attempted"}
                    </span>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="font-display text-display font-semibold text-on-surface leading-none">
                        {"3"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"items"}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary mt-2">
                      {"Recorded during current run"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase">
                      {"First attempt correct"}
                    </span>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="font-display text-display font-semibold text-on-surface leading-none">
                        {"2"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"of 3"}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary mt-2">
                      {"Independent synthesis"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase">
                      {"Completed with support"}
                    </span>
                    <div className="flex items-baseline gap-2 mt-3">
                      <span className="font-display text-display font-semibold text-on-surface leading-none">
                        {"1"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"item"}
                      </span>
                    </div>
                    <span className="font-body-sm text-body-sm text-secondary mt-2">
                      {"Hint requested on link order"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex flex-col justify-between">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary font-medium uppercase">
                        {"Teach-back activity"}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                        {"record_voice_over"}
                      </span>
                    </div>
                    <div className="flex flex-col mt-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"1 missing step identified"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary mt-1">
                        {"Head pointer re-assignment omitted during final verification"}
                      </span>
                    </div>
                    <button className="text-left font-label-sm text-label-sm text-primary font-medium hover:underline mt-2" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Examine feedback transcript →\n            "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-topics-attention">
                <div className="flex flex-col gap-0.5">
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"Topics needing attention"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {"Specific sub-concepts flagged during your latest verified attempts."}
                  </p>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col">
                  <div className="p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors">
                    <div className="flex items-start gap-space-sm">
                      <span className="w-2 h-2 rounded-full bg-primary mt-2"></span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Updating head"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Missing from recent explanation step in teach-back."}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm self-end sm:self-auto shrink-0">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:bg-surface-container-highest hover:text-on-surface transition-all" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Practise\n              "}
                      </button>
                    </div>
                  </div>
                  <div className="h-px bg-surface-container-high w-full"></div>
                  <div className="p-space-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors">
                    <div className="flex items-start gap-space-sm">
                      <span className="w-2 h-2 rounded-full bg-secondary mt-2"></span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Pointer rearrangement order"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Assisted by hint during question 1."}
                        </span>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm self-end sm:self-auto shrink-0">
                      <button className="px-3.5 py-1.5 rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm font-medium hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Review worked example\n              "}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-recent-activity">
                <div className="flex items-center justify-between">
                  <div className="flex flex-col gap-0.5">
                    <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"Recent learning activity"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Verifiable audit record of actions completed within this scope."}
                    </p>
                  </div>
                  <span className="font-label-sm text-label-sm text-secondary">
                    {"Chronological sequence"}
                  </span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl shadow-sm p-space-md flex flex-col gap-space-md">
                  <div className="flex items-start justify-between gap-space-md py-1">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface mt-0.5">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"record_voice_over"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Teach-back reviewed"}
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary">
                            {"· Singly linked list insertion explanation"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Result: Feedback given (1 step missing)"}
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                      {"25m ago"}
                    </span>
                  </div>
                  <div className="h-px bg-surface-container-high w-full"></div>
                  <div className="flex items-start justify-between gap-space-md py-1">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface mt-0.5">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"quiz"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Practice session completed"}
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary">
                            {"· Linked lists (3 questions)"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Result: 2 first-try, 1 assisted"}
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                      {"35m ago"}
                    </span>
                  </div>
                  <div className="h-px bg-surface-container-high w-full"></div>
                  <div className="flex items-start justify-between gap-space-md py-1">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface mt-0.5">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"menu_book"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Lesson explored"}
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary">
                            {"· Guided pointer trace & memory mapping"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Result: Step 1–3 complete"}
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                      {"50m ago"}
                    </span>
                  </div>
                  <div className="h-px bg-surface-container-high w-full"></div>
                  <div className="flex items-start justify-between gap-space-md py-1">
                    <div className="flex items-start gap-space-sm">
                      <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface mt-0.5">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"fact_check"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Starting check completed"}
                          </span>
                          <span className="font-label-sm text-label-sm text-secondary">
                            {"· Data Structures starting assessment"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Baseline recorded · 10 items processed"}
                        </span>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary whitespace-nowrap">
                      {"1h ago"}
                    </span>
                  </div>
                </div>
              </section>
            </main>
          </div>
          <div className="fixed inset-0 bg-primary/20 backdrop-blur-sm z-50 transition-opacity duration-200 hidden" id="attempt-drawer-backdrop" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
          <aside className="fixed top-0 right-0 h-screen w-full sm:w-[480px] bg-surface-container-lowest z-50 shadow-2xl transform translate-x-full transition-transform duration-200 ease-in-out flex flex-col justify-between" id="attempt-drawer">
            <div className="p-space-lg bg-surface-container-low flex items-center justify-between">
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-medium">
                  {"Session Verification"}
                </span>
                <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Attempt Review"}
                </h4>
                <span className="font-body-sm text-body-sm text-secondary">
                  {"Linked Lists Practice · Question 1"}
                </span>
              </div>
              <button className="w-8 h-8 rounded-lg bg-surface-container-highest text-on-surface hover:bg-surface-container flex items-center justify-center transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto p-space-lg flex flex-col gap-space-lg">
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  {"Question Prompt"}
                </span>
                <div className="p-space-md bg-surface-container-low rounded-xl">
                  <p className="font-body-md text-body-md text-on-surface leading-relaxed font-medium">
                    {"\n            \"Insert new node at beginning of singly linked list. What should Next point to?\"\n          "}
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  {"Your Selected Response"}
                </span>
                <div className="p-space-md bg-surface-container-low rounded-xl flex items-center justify-between">
                  <span className="font-body-md text-body-md text-on-surface">
                    {"The current head node (Option A)"}
                  </span>
                  <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 rounded font-medium">
                    {"Recorded"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  {"Attempt Audit"}
                </span>
                <div className="p-space-md bg-surface-container-low rounded-xl flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                      {"check_circle"}
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      {"First attempt: Correct"}
                    </span>
                  </div>
                  <div className="bg-surface-container-highest/60 p-2.5 rounded-lg flex items-start gap-2 text-secondary">
                    <span className="material-symbols-outlined text-[16px] mt-0.5" aria-hidden="true">
                      {"lightbulb"}
                    </span>
                    <span className="font-body-sm text-body-sm">
                      <strong>
                        {"Hint viewed:"}
                      </strong>
                      {" \"The new node needs to keep a connection to the existing list.\"\n            "}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                <span className="font-label-sm text-label-sm text-secondary uppercase font-semibold">
                  {"Concept Feedback"}
                </span>
                <div className="p-space-md bg-surface-container-low rounded-xl">
                  <p className="font-body-md text-body-md text-secondary leading-relaxed">
                    {"\n            The new node points to the current head so the existing chain stays connected. Once connected, reassign the head variable to this newly initialized node.\n          "}
                  </p>
                </div>
              </div>
            </div>
            <div className="p-space-lg bg-surface-container-low flex flex-col sm:flex-row items-center gap-2.5">
              <button className="w-full sm:w-1/2 px-4 py-2.5 rounded-xl bg-surface-container-highest text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n        Close drawer\n      "}
              </button>
              <button className="w-full sm:w-1/2 px-4 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-surface-container-highest hover:text-on-surface transition-all" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n        Practise similar\n      "}
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>;
}
