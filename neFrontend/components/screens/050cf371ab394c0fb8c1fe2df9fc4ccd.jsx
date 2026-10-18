'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './050cf371ab394c0fb8c1fe2df9fc4ccd.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '050cf371ab394c0fb8c1fe2df9fc4ccd');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-050cf371ab394c0fb8c1fe2df9fc4ccd bg-surface font-body-md text-body-md text-on-surface antialiased" data-screen-id="050cf371ab394c0fb8c1fe2df9fc4ccd">
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between p-space-md">
      <div className="flex flex-col gap-space-lg">
        <div className="flex items-center gap-space-sm px-space-sm py-space-xs">
          <div className="w-7 h-7 rounded bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold tracking-tight"><BrandLogo className="stitch-wordmark-mini" /></div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface"><BrandLogo className="stitch-wordmark" /></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {"Personal AI Mentor"}
            </span>
          </div>
        </div>
        <nav className="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary font-medium rounded-lg">
          <div className="px-space-sm pt-space-xs pb-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              {"Navigation"}
            </span>
          </div>
          <a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-2 transition-all bg-primary-container text-on-primary font-medium rounded-lg" data-path="my-plan-and-strategy" href="#">
            <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
              {"track_changes"}
            </span>
            <span>
              {"My Plan & Strategy"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-md text-label-md" data-path="target-status" href="#">
            <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
              {"flag"}
            </span>
            <span>
              {"Target Status"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-md text-label-md" data-path="knowledge-graph" href="#">
            <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
              {"hub"}
            </span>
            <span>
              {"Knowledge Graph"}
            </span>
          </a>
        </nav>
        <div className="flex flex-col gap-space-xs px-space-sm">
          <div className="flex items-center justify-between pb-space-xs">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
              {"Recent Sessions"}
            </span>
            <span className="font-label-sm text-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">
              {"Study"}
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <a className="py-1.5 px-2 rounded hover:bg-surface-container hover:text-on-surface text-on-surface-variant font-body-sm text-body-sm truncate transition-colors flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-[0.875rem] text-on-surface-variant" aria-hidden="true">
                {"history"}
              </span>
              {"Algorithmic Complexity"}
            </a>
            <a className="py-1.5 px-2 rounded hover:bg-surface-container hover:text-on-surface text-on-surface-variant font-body-sm text-body-sm truncate transition-colors flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-[0.875rem] text-on-surface-variant" aria-hidden="true">
                {"history"}
              </span>
              {"Distributed Consensus"}
            </a>
            <a className="py-1.5 px-2 rounded hover:bg-surface-container hover:text-on-surface text-on-surface-variant font-body-sm text-body-sm truncate transition-colors flex items-center gap-2" href="#">
              <span className="material-symbols-outlined text-[0.875rem] text-on-surface-variant" aria-hidden="true">
                {"history"}
              </span>
              {"System Architecture v3"}
            </a>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-space-sm pt-space-md border-t border-surface-container-high">
        <nav className="flex flex-col gap-space-xs" data-active-classes="bg-primary-container text-on-primary font-medium rounded-lg">
          <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-md text-label-md" data-path="settings" href="#">
            <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
              {"settings"}
            </span>
            <span>
              {"Settings"}
            </span>
          </a>
        </nav>
        <div className="flex items-center justify-between px-space-sm py-space-xs rounded-lg bg-surface-container-lowest">
          <div className="flex items-center gap-space-sm">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-medium leading-none">
                {"Alex Rivera"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                {"Mastery Track"}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
            {"more_vert"}
          </span>
        </div>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center bg-surface-container rounded-lg p-1">
            <button className="px-space-md py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" title="Mentor Discussion Mode" type="button" aria-label="Mentor Discussion Mode">
              {"Chat"}
            </button>
            <button className="px-space-md py-1 rounded bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-label-sm text-label-sm font-medium transition-colors" title="Curriculum & Deep Focus Mode" type="button" aria-label="Curriculum & Deep Focus Mode">
              {"Study"}
            </button>
          </div>
          <div className="hidden sm:flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
            <span className="w-2 h-2 rounded-full bg-on-surface-variant"></span>
            <span>
              {"Focus Interval 45m"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-sm py-1.5 rounded-lg border border-surface-container-high text-on-surface-variant">
            <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
              {"search"}
            </span>
            <span className="font-body-sm text-body-sm">
              {"Search topics..."}
            </span>
            <kbd className="font-code text-code bg-surface-container px-1 rounded text-on-surface-variant">
              {"⌘K"}
            </kbd>
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
              {"notifications"}
            </span>
          </button>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
        </div>
      </header>
      <main className="relative pt-16 bg-surface">
        <div className="max-w-[1100px] mx-auto px-space-xl py-space-xl">
          <div className="flex flex-col w-full">
            <div className="w-full bg-surface-container-low rounded-xl p-space-sm mb-space-xl flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[1.125rem] text-on-surface-variant" aria-hidden="true">
                  {"tune"}
                </span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  {"State Simulator"}
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto">
                <button className="state-tab-btn active px-3 py-1.5 rounded-lg text-on-primary bg-primary font-label-sm text-label-sm transition-all" data-target="state-chat-overview" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n        1. Chat Overview\n      "}
                </button>
                <button className="state-tab-btn px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all" data-target="state-study-overview" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n        2. Study Overview\n      "}
                </button>
                <button className="state-tab-btn px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all" data-target="state-chat-detail" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n        3. Chat Detail\n      "}
                </button>
                <button className="state-tab-btn px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all" data-target="state-study-detail" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n        4. Study Detail\n      "}
                </button>
                <button className="state-tab-btn px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all" data-target="state-adjust-plan" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n        5. Adjust Plan Panel\n      "}
                </button>
                <button className="state-tab-btn px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-all" data-target="state-empty-archive" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n        6. Empty / Archived\n      "}
                </button>
              </div>
            </div>
            <header className="flex flex-col gap-space-lg mb-space-2xl">
              <div className="flex flex-col md:flex-row md:items-end justify-between gap-space-md">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-space-xs font-label-sm text-label-sm text-on-surface-variant">
                    <span>
                      {"STRATEGY & CURRICULUM"}
                    </span>
                    <span>
                      {"/"}
                    </span>
                    <span className="text-on-surface" id="header-context-badge">
                      {"CHAT PREPARATION"}
                    </span>
                  </div>
                  <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"My Plan / Strategy"}
                  </h1>
                  <p className="font-body-md text-body-md text-on-surface-variant max-w-xl" id="header-subtitle">
                    {"\n          Your preparation plans and next steps.\n        "}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="flex items-center gap-space-xs bg-primary text-on-primary px-space-md py-2.5 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors shadow-sm" id="primary-action-btn" type="button">
                    <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                      {"add"}
                    </span>
                    <span id="primary-action-label">
                      {"Plan a task"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs">
                <div className="flex items-center gap-1.5 bg-surface-container-low p-1 rounded-lg">
                  <button className="px-space-md py-1.5 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm transition-all" type="button">
                    {"\n          Active (2)\n        "}
                  </button>
                  <button className="px-space-md py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">
                    {"\n          Completed (7)\n        "}
                  </button>
                  <button className="px-space-md py-1.5 rounded-md text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">
                    {"\n          Archived (3)\n        "}
                  </button>
                </div>
                <div className="flex items-center gap-space-xs bg-surface-container-lowest px-space-md py-2 rounded-lg text-on-surface-variant max-w-xs w-full shadow-sm">
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    {"search"}
                  </span>
                  <input className="bg-transparent font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none w-full" placeholder="Search plans..." type="text" />
                </div>
              </div>
            </header>
            <section className="state-container flex flex-col gap-space-lg" id="state-chat-overview">
              <article className="bg-surface-container-lowest rounded-xl p-space-xl flex flex-col gap-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">
                        {"CHAT PLAN"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Exam Prep"}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                      {"Data Structures mid preparation"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"flag"}
                        </span>
                        {" Target: Pass"}
                      </span>
                      <span className="text-surface-container-highest">
                        {"·"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"schedule"}
                        </span>
                        {" Exam: Tomorrow, 10:00 AM"}
                      </span>
                      <span className="text-surface-container-highest">
                        {"·"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"timelapse"}
                        </span>
                        {" 4-hour structured sequence"}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Plan actions" type="button" aria-label="Plan actions">
                      <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                        {"more_horiz"}
                      </span>
                    </button>
                    <div className="hidden absolute right-0 mt-1 w-44 bg-surface-container-lowest rounded-lg p-1 shadow-md z-30" id="chat-overflow">
                      <button className="w-full text-left px-3 py-1.5 rounded font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors" type="button">
                        {"Rename plan"}
                      </button>
                      <button className="w-full text-left px-3 py-1.5 rounded font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Adjust sequence"}
                      </button>
                      <button className="w-full text-left px-3 py-1.5 rounded font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                        {"Archive plan"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex flex-col gap-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"Current Next Step"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Linked lists: explain the insertion steps"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"\n            Trace insertion at head, tail, and arbitrary indices. Includes 2 practice problems from your lecture slide deck.\n          "}
                    </p>
                    <div className="flex items-center gap-space-md pt-1 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="flex items-center gap-1 font-medium text-on-surface">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"timer"}
                        </span>
                        {"\n              About 10 min\n            "}
                      </span>
                      <span className="text-surface-container-highest">
                        {"·"}
                      </span>
                      <span className="flex items-center gap-1 text-on-surface-variant">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"check_circle"}
                        </span>
                        {"\n              Starting check done\n            "}
                      </span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-stretch gap-2 shrink-0">
                    <button className="bg-primary text-on-primary px-space-lg py-2.5 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Continue preparation"}
                      </span>
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors text-center" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n            View sequence (7 steps)\n          "}
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm pt-2 bg-surface-container-lowest">
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    {"info"}
                  </span>
                  <span>
                    {"Allocated study time is distinct from scheduled exam time. SOLVE paces reviews based on your target threshold."}
                  </span>
                </div>
              </article>
              <article className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md shadow-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant">
                      {"CHAT TASK"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Target: Code Review · 1h allocated"}
                    </span>
                  </div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Async I/O in Node.js event loop trace"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Next: Microtask queue priority vs setImmediate()"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors" type="button">
                    {"\n          Open conversation\n        "}
                  </button>
                </div>
              </article>
            </section>
            <section className="state-container hidden flex-col gap-space-lg" id="state-study-overview">
              <article className="bg-surface-container-lowest rounded-xl p-space-xl flex flex-col gap-space-lg shadow-sm">
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">
                        {"STUDY CURRICULUM"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"3-Month Milestone"}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                      {"Python foundations"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-space-md gap-y-1 font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"track_changes"}
                        </span>
                        {" Goal: Build a functional automation CLI tool"}
                      </span>
                      <span className="text-surface-container-highest">
                        {"·"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"calendar_today"}
                        </span>
                        {" Cadence: 6 hours / week"}
                      </span>
                      <span className="text-surface-container-highest">
                        {"·"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"donut_large"}
                        </span>
                        {" 2 of 6 Milestones active"}
                      </span>
                    </div>
                  </div>
                  <div className="relative">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Plan actions" type="button" aria-label="Plan actions">
                      <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                        {"more_horiz"}
                      </span>
                    </button>
                    <div className="hidden absolute right-0 mt-1 w-44 bg-surface-container-lowest rounded-lg p-1 shadow-md z-30" id="study-overflow">
                      <button className="w-full text-left px-3 py-1.5 rounded font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors" type="button">
                        {"Rename curriculum"}
                      </button>
                      <button className="w-full text-left px-3 py-1.5 rounded font-body-sm text-body-sm text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Adjust pace & hours"}
                      </button>
                      <button className="w-full text-left px-3 py-1.5 rounded font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                        {"Archive"}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-low rounded-lg p-space-lg flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                  <div className="flex flex-col gap-1.5 max-w-xl">
                    <div className="flex items-center gap-2">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"Current Milestone Step"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Practise conditions and loops"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"\n            Current milestone: Control flow (Milestone 2 of 6). Implement FizzBuzz logic and step through while-loops with sentinel variables.\n          "}
                    </p>
                    <div className="flex items-center gap-space-md pt-1 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="flex items-center gap-1 font-medium text-on-surface">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"schedule"}
                        </span>
                        {"\n              About 20 min\n            "}
                      </span>
                      <span className="text-surface-container-highest">
                        {"·"}
                      </span>
                      <span className="bg-surface-container-highest px-2 py-0.5 rounded text-on-surface text-label-sm font-medium">
                        {"Compact review available: 3 flashpoints"}
                      </span>
                    </div>
                  </div>
                  <div className="flex sm:flex-col items-stretch gap-2 shrink-0">
                    <button className="bg-primary text-on-primary px-space-lg py-2.5 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Continue learning"}
                      </span>
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2 rounded-lg font-label-md text-label-md transition-colors text-center" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n            View full roadmap\n          "}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                    <span>
                      {"Curriculum progression"}
                    </span>
                    <span className="font-code text-code text-on-surface">
                      {"33% complete (1 of 6 milestones)"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary" style={{"width":"33.3%"}}></div>
                  </div>
                </div>
              </article>
            </section>
            <section className="state-container hidden flex-col gap-space-xl" id="state-chat-detail">
              <div className="flex flex-col gap-space-md">
                <button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors w-fit" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                    {"arrow_back"}
                  </span>
                  <span>
                    {"Back to all plans"}
                  </span>
                </button>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">
                        {"Chat · Exam prep"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Structured sequence"}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      {"Data Structures mid preparation"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-space-lg gap-y-1 font-body-sm text-body-sm text-on-surface-variant pt-1">
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-on-surface">
                          {"Target:"}
                        </span>
                        {" Pass"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-on-surface">
                          {"Exam:"}
                        </span>
                        {" Tomorrow, 10:00 AM"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-on-surface">
                          {"Total Plan Time:"}
                        </span>
                        {" 4h 00m"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"forum"}
                      </span>
                      <span>
                        {"Open conversation"}
                      </span>
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1.5" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"tune"}
                      </span>
                      <span>
                        {"Adjust remaining time"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-lg shadow-sm">
                <div className="flex flex-col gap-2 max-w-xl">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                    {"Your Next Step"}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {"Linked lists: explain the insertion steps"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {"\n          Try a short exercise, then review the parts you find difficult. SOLVE will check pointer rewiring logic before moving to deletion.\n        "}
                  </p>
                </div>
                <button className="bg-primary text-on-primary px-space-xl py-3 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors shrink-0 flex items-center gap-2" type="button">
                  <span>
                    {"Continue preparation"}
                  </span>
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </button>
              </div>
              <div className="flex flex-col gap-space-md">
                <div className="flex items-center justify-between pb-space-xs">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Sequential Plan Breakdown"}
                  </h3>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {"Step 2 of 7 in progress"}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm opacity-85">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[1rem] text-on-surface" aria-hidden="true">
                          {"check"}
                        </span>
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-md text-body-md font-medium text-on-surface line-through truncate">
                          {"1. Quick starting check"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"10 min · Diagnostic on arrays & memory models"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium shrink-0">
                      {"COMPLETED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col gap-space-md shadow-sm">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-center gap-space-md min-w-0">
                        <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold shrink-0">
                          {"\n                2\n              "}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            {"Linked lists: traversal & insertion"}
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {"40 min · High exam weighting (approx. 25%)"}
                          </span>
                        </div>
                      </div>
                      <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-label-sm text-label-sm font-medium shrink-0 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-on-primary animate-pulse"></span>
                        {"\n              IN PROGRESS\n            "}
                      </span>
                    </div>
                    <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-2 ml-10">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium">
                        {"Included tasks for this block:"}
                      </span>
                      <ul className="flex flex-col gap-1.5 font-body-sm text-body-sm text-on-surface-variant">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[1rem] text-on-surface" aria-hidden="true">
                            {"check_box"}
                          </span>
                          <span>
                            {"Single vs doubly linked list pointer updates"}
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
                            {"check_box_outline_blank"}
                          </span>
                          <span>
                            {"2 Practice questions from "}
                            <code className="font-code text-code bg-surface-container-highest px-1 rounded text-on-surface">
                              {"DSA question bank.pdf"}
                            </code>
                          </span>
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
                            {"check_box_outline_blank"}
                          </span>
                          <span>
                            {"Edge cases: empty head, single element, cycle detection"}
                          </span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant shrink-0">
                        {"\n              3\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-md text-body-md font-medium text-on-surface truncate">
                          {"3. Stacks and queues"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"40 min · LIFO/FIFO operations, queue via dual stacks"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant shrink-0">
                        {"\n              4\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-md text-body-md font-medium text-on-surface truncate">
                          {"4. Short cognitive break"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"10 min · Rest period for memory consolidation"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant shrink-0">
                        {"\n              5\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-md text-body-md font-medium text-on-surface truncate">
                          {"5. Trees and traversals"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"50 min · In-order, pre-order, post-order & BST balancing"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant shrink-0">
                        {"\n              6\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-md text-body-md font-medium text-on-surface truncate">
                          {"6. Mixed question-bank practice"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"50 min · Timed past exam questions"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center font-label-sm text-label-sm text-on-surface-variant shrink-0">
                        {"\n              7\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-md text-body-md font-medium text-on-surface truncate">
                          {"7. Active recall and final review"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"40 min · High-yield formula sheet synthesis"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2 py-0.5 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-space-lg flex flex-col gap-2">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md font-medium text-on-surface flex items-center gap-2">
                    <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                      {"psychology"}
                    </span>
                    {"\n          Why this plan?\n        "}
                  </span>
                  <button className="font-label-sm text-label-sm text-on-surface font-medium hover:underline flex items-center gap-1" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span>
                      {"Tell SOLVE what to change"}
                    </span>
                    <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                      {"chevron_right"}
                    </span>
                  </button>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"\n        You have four hours and two reference files. This sequence prioritizes high-weight data structures with early diagnostic checks, ensuring 90 minutes of active retrieval practice before your exam tomorrow morning.\n      "}
                </p>
              </div>
            </section>
            <section className="state-container hidden flex-col gap-space-xl" id="state-study-detail">
              <div className="flex flex-col gap-space-md">
                <button className="flex items-center gap-1 font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors w-fit" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                    {"arrow_back"}
                  </span>
                  <span>
                    {"Back to all goals"}
                  </span>
                </button>
                <div className="flex flex-col md:flex-row md:items-start justify-between gap-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface font-medium">
                        {"Study · Long-term Goal"}
                      </span>
                      <span className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Three-Month Horizon"}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                      {"Python foundations"}
                    </h2>
                    <div className="flex flex-wrap items-center gap-x-space-lg gap-y-1 font-body-sm text-body-sm text-on-surface-variant pt-1">
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-on-surface">
                          {"Target:"}
                        </span>
                        {" Build a small Python CLI project"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-on-surface">
                          {"Weekly Cadence:"}
                        </span>
                        {" 6h / week"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="font-medium text-on-surface">
                          {"Current Status:"}
                        </span>
                        {" Milestone 2 of 6"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 shrink-0">
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-2.5 rounded-lg font-label-md text-label-md transition-colors flex items-center gap-1.5" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"tune"}
                      </span>
                      <span>
                        {"Adjust study cadence"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="bg-surface-container-lowest rounded-xl p-space-xl flex flex-col md:flex-row md:items-center justify-between gap-space-lg shadow-sm">
                <div className="flex flex-col gap-2 max-w-xl">
                  <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                    {"Current Milestone Step"}
                  </span>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {"Practise conditions and loops"}
                  </h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {"\n          Complete the interactive coding session on nested conditions and loop control keywords ("}
                    <code className="font-code text-code">
                      {"break"}
                    </code>
                    {", "}
                    <code className="font-code text-code">
                      {"continue"}
                    </code>
                    {").\n        "}
                  </p>
                </div>
                <button className="bg-primary text-on-primary px-space-xl py-3 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors shrink-0 flex items-center gap-2" type="button">
                  <span>
                    {"Continue learning"}
                  </span>
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </button>
              </div>
              <div className="flex flex-col gap-space-md">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {"Curriculum Milestones"}
                </h3>
                <div className="flex flex-col gap-3">
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm opacity-90">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[1.125rem] text-on-surface" aria-hidden="true">
                          {"check"}
                        </span>
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-lg text-body-lg font-medium text-on-surface truncate">
                          {"1. Python basics"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Variables, types, operators, and basic I/O"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-medium shrink-0">
                      {"COMPLETED ACTIVITIES ✓"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-lg flex flex-col gap-space-md shadow-sm">
                    <div className="flex items-center justify-between gap-space-md">
                      <div className="flex items-center gap-space-md min-w-0">
                        <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-md text-label-md font-semibold shrink-0">
                          {"\n                2\n              "}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-headline-sm text-headline-sm text-on-surface">
                            {"Conditions and loops"}
                          </span>
                          <span className="font-body-sm text-body-sm text-on-surface-variant">
                            {"Decision trees, boolean algebra, and iterable loops"}
                          </span>
                        </div>
                      </div>
                      <span className="px-2.5 py-1 rounded bg-primary text-on-primary font-label-sm text-label-sm font-medium shrink-0 flex items-center gap-1.5">
                        <span className="w-2 h-2 rounded-full bg-on-primary animate-pulse"></span>
                        {"\n              CURRENT MILESTONE\n            "}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-5 gap-2 pt-space-xs ml-11">
                      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-on-surface font-label-sm text-label-sm font-medium">
                          <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                            {"done"}
                          </span>
                          {" Step 1\n              "}
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Learn concept"}
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1">
                        <div className="flex items-center gap-1 text-on-surface font-label-sm text-label-sm font-medium">
                          <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                            {"done"}
                          </span>
                          {" Step 2\n              "}
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Work through example"}
                        </span>
                      </div>
                      <div className="bg-surface-container rounded-lg p-space-sm flex flex-col gap-1 border border-primary/20">
                        <div className="flex items-center gap-1 text-on-surface font-label-sm text-label-sm font-semibold">
                          <span className="material-symbols-outlined text-[0.875rem] text-primary" aria-hidden="true">
                            {"play_arrow"}
                          </span>
                          {" Step 3\n              "}
                        </div>
                        <span className="font-body-sm text-body-sm font-medium text-on-surface">
                          {"Practise"}
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1 opacity-60">
                        <div className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          {"Step 4"}
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Explain back"}
                        </span>
                      </div>
                      <div className="bg-surface-container-low rounded-lg p-space-sm flex flex-col gap-1 opacity-60">
                        <div className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                          {"Step 5"}
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Review later"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-md text-label-md text-on-surface-variant shrink-0">
                        {"\n              3\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-lg text-body-lg font-medium text-on-surface truncate">
                          {"3. Functions and modular design"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Arguments, return semantics, scope, and closures"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-md text-label-md text-on-surface-variant shrink-0">
                        {"\n              4\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-lg text-body-lg font-medium text-on-surface truncate">
                          {"4. Collections and data handling"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Lists, dictionaries, sets, and comprehension patterns"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-md text-label-md text-on-surface-variant shrink-0">
                        {"\n              5\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-lg text-body-lg font-medium text-on-surface truncate">
                          {"5. Files and debugging"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"File I/O context managers, exception handling, and pdb"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex items-center gap-space-md min-w-0">
                      <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center font-label-md text-label-md text-on-surface-variant shrink-0">
                        {"\n              6\n            "}
                      </div>
                      <div className="flex flex-col truncate">
                        <span className="font-body-lg text-body-lg font-medium text-on-surface truncate">
                          {"6. A small project: CLI Automation tool"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Synthesis milestone and code review with SOLVE"}
                        </span>
                      </div>
                    </div>
                    <span className="px-2.5 py-1 rounded bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant shrink-0">
                      {"NOT STARTED"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="state-container hidden flex-col gap-space-xl" id="state-adjust-plan">
              <div className="flex items-center justify-between pb-space-sm border-b border-surface-container-high">
                <div className="flex flex-col">
                  <h2 className="font-headline-md text-headline-md text-on-surface tracking-tight">
                    {"Adjust Active Plan"}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Update pacing, time allocation, or topic balance without restarting progress."}
                  </p>
                </div>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
                <div className="lg:col-span-7 flex flex-col gap-space-lg">
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md font-medium text-on-surface">
                      {"Available remaining study time"}
                    </label>
                    <div className="grid grid-cols-3 gap-2">
                      <button className="py-2.5 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors text-center" type="button">
                        {"\n              2.5 Hours\n            "}
                      </button>
                      <button className="py-2.5 px-3 rounded-lg bg-primary text-on-primary font-label-md text-label-md shadow-sm transition-colors text-center font-medium" type="button">
                        {"\n              3.5 Hours (Current)\n            "}
                      </button>
                      <button className="py-2.5 px-3 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors text-center" type="button">
                        {"\n              5.0 Hours\n            "}
                      </button>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Time available prior to tomorrow's 10:00 AM target."}
                    </span>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md font-medium text-on-surface">
                      {"Target Outcome"}
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      <label className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                        <input defaultChecked className="accent-primary" name="target_goal" type="radio" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface font-medium">
                            {"Solid Pass"}
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {"Focus on core concepts"}
                          </span>
                        </div>
                      </label>
                      <label className="flex items-center gap-2 p-3 rounded-lg bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                        <input className="accent-primary" name="target_goal" type="radio" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md text-on-surface font-medium">
                            {"High Mastery"}
                          </span>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {"Include complex edge cases"}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md font-medium text-on-surface">
                      {"Topic Weighting"}
                    </label>
                    <div className="flex flex-wrap gap-2">
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">
                        <span>
                          {"Trees & Traversals (+15m)"}
                        </span>
                        <button className="material-symbols-outlined text-[0.875rem]" type="button" aria-hidden="true">
                          {"close"}
                        </button>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span>
                          {"Linked Lists"}
                        </span>
                      </span>
                      <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                        <span>
                          {"Stacks & Queues"}
                        </span>
                      </span>
                      <button className="inline-flex items-center gap-1 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm" type="button">
                        <span className="material-symbols-outlined text-[0.875rem]" aria-hidden="true">
                          {"add"}
                        </span>
                        {" Add focus topic\n            "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="font-label-md text-label-md font-medium text-on-surface">
                      {"Custom instructions for mentor"}
                    </label>
                    <textarea className="w-full bg-surface-container-lowest rounded-lg p-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none shadow-sm resize-none" placeholder="e.g. Spend more time on trees; shorter final review." rows="3" defaultValue={"Spend more time on trees; shorter final review before cutoff."}></textarea>
                  </div>
                </div>
                <div className="lg:col-span-5 flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-xl shadow-sm h-fit">
                  <div className="flex items-center gap-2 pb-space-xs border-b border-surface-container-high">
                    <span className="material-symbols-outlined text-[1.125rem] text-on-surface" aria-hidden="true">
                      {"difference"}
                    </span>
                    <span className="font-label-md text-label-md font-medium text-on-surface">
                      {"Proposed Sequence Changes"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3 font-body-sm text-body-sm">
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[1rem] text-on-surface-variant mt-0.5" aria-hidden="true">
                        {"add_circle"}
                      </span>
                      <div>
                        <span className="font-medium text-on-surface">
                          {"Trees and traversals"}
                        </span>
                        <p className="text-on-surface-variant">
                          {"+15 min added (now 65 min total)"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[1rem] text-on-surface-variant mt-0.5" aria-hidden="true">
                        {"remove_circle"}
                      </span>
                      <div>
                        <span className="font-medium text-on-surface">
                          {"Active recall & final review"}
                        </span>
                        <p className="text-on-surface-variant">
                          {"Reduced by 15 min (now 25 min total)"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-2">
                      <span className="material-symbols-outlined text-[1rem] text-on-surface-variant mt-0.5" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <div>
                        <span className="font-medium text-on-surface">
                          {"No structural disruption"}
                        </span>
                        <p className="text-on-surface-variant">
                          {"Completed Step 1 and in-progress Step 2 preserved."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-space-md border-t border-surface-container-high">
                    <button className="bg-primary text-on-primary py-2.5 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors text-center font-medium shadow-sm" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n            Apply changes\n          "}
                    </button>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface py-2.5 rounded-lg font-label-md text-label-md transition-colors text-center" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n            Keep current plan\n          "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="state-container hidden flex-col gap-space-2xl" id="state-empty-archive">
              <div className="flex items-center gap-space-sm pb-space-xs border-b border-surface-container-high">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  {"Preview Variants:"}
                </span>
                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm" onClick={event => { const result = actions.current[22]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"Empty Chat"}
                </button>
                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm" onClick={event => { const result = actions.current[23]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"Empty Study"}
                </button>
                <button className="px-2.5 py-1 rounded bg-surface-container text-on-surface font-label-sm text-label-sm" onClick={event => { const result = actions.current[24]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"Archived Plans (3)"}
                </button>
              </div>
              <div className="empty-view flex flex-col items-center justify-center py-space-2xl text-center bg-surface-container-lowest rounded-xl p-space-xl shadow-sm" id="empty-chat">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-space-md">
                  <span className="material-symbols-outlined text-[1.5rem]" aria-hidden="true">
                    {"assignment_late"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {"No preparation plans yet"}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-lg">
                  {"\n        Tell SOLVE what you need help preparing for, whether it's an upcoming exam, a code interview, or a project sprint.\n      "}
                </p>
                <button className="bg-primary text-on-primary px-space-lg py-2.5 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors shadow-sm" type="button">
                  {"\n        Plan a task\n      "}
                </button>
              </div>
              <div className="empty-view hidden flex-col items-center justify-center py-space-2xl text-center bg-surface-container-lowest rounded-xl p-space-xl shadow-sm" id="empty-study">
                <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant mb-space-md">
                  <span className="material-symbols-outlined text-[1.5rem]" aria-hidden="true">
                    {"school"}
                  </span>
                </div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                  {"No study goals yet"}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-sm mb-space-lg">
                  {"\n        Choose a technical subject or career milestone you’d like to master over weeks or months.\n      "}
                </p>
                <button className="bg-primary text-on-primary px-space-lg py-2.5 rounded-lg font-label-md text-label-md hover:bg-neutral-800 transition-colors shadow-sm" type="button">
                  {"\n        Start a study goal\n      "}
                </button>
              </div>
              <div className="empty-view hidden flex-col gap-space-md" id="archived-plans">
                <div className="flex items-center justify-between">
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Archived Plans (3)"}
                  </h3>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Plans are saved indefinitely for review"}
                  </span>
                </div>
                <div className="flex flex-col gap-2">
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md font-medium text-on-surface">
                        {"Calculus II Exam Sprint"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Archived 2 weeks ago · 6 of 6 steps completed"}
                      </span>
                    </div>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-1.5 rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"undo"}
                      </span>
                      <span>
                        {"Restore"}
                      </span>
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md font-medium text-on-surface">
                        {"React 18 Concurrent Rendering Deep Dive"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Archived 1 month ago · Archived before completion"}
                      </span>
                    </div>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-1.5 rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"undo"}
                      </span>
                      <span>
                        {"Restore"}
                      </span>
                    </button>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col">
                      <span className="font-body-md text-body-md font-medium text-on-surface">
                        {"PostgreSQL Query Optimizer"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Archived 2 months ago · Completed"}
                      </span>
                    </div>
                    <button className="bg-surface-container hover:bg-surface-container-high text-on-surface px-space-md py-1.5 rounded-lg font-label-sm text-label-sm transition-colors flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"undo"}
                      </span>
                      <span>
                        {"Restore"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
