'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './d61eb197eb274c65b2d2813cd180aa90.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'd61eb197eb274c65b2d2813cd180aa90');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-d61eb197eb274c65b2d2813cd180aa90 bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased" data-screen-id="d61eb197eb274c65b2d2813cd180aa90">
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-14 px-space-md flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-space-sm">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary"><BrandLogo className="stitch-wordmark" /></span>
          </div>
          <button aria-label="Collapse sidebar" className="text-on-surface-variant hover:text-on-surface flex items-center justify-center p-space-xs rounded transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"dock_to_right"}
            </span>
          </button>
        </div>
        <div className="p-space-sm flex flex-col gap-space-sm">
          <button className="w-full flex items-center justify-between px-space-md py-space-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"edit_square"}
              </span>
              {"New session"}
            </span>
            <span className="font-code text-code text-on-surface-variant">
              {"⌘N"}
            </span>
          </button>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full bg-surface-container border border-outline-variant rounded-lg pl-8 pr-space-sm py-1.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary transition-colors" placeholder="Search chats..." type="text" />
          </div>
        </div>
        <div className="px-space-sm pt-space-xs">
          <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-label-md">
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="learning-workspace" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"chat"}
              </span>
              {"Learning Workspace"}
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="study-plan" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"route"}
              </span>
              {"My Plan / Strategy"}
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="knowledge-graph" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"hub"}
              </span>
              {"Knowledge Graph"}
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="target-status" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"flag"}
              </span>
              {"Target Status"}
            </a>
          </nav>
        </div>
        <div className="flex-1 overflow-y-auto px-space-sm pt-space-md min-h-0">
          <div className="flex items-center justify-between px-space-sm pb-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            <span>
              {"Recent Conversations"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <a className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors truncate" data-path="learning-workspace" href="#">
              <span className="truncate">
                {"Transformer Attention Mechanics"}
              </span>
              <span className="font-code text-code text-on-surface-variant text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {"2h"}
              </span>
            </a>
            <a className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors truncate" data-path="learning-workspace" href="#">
              <span className="truncate">
                {"Calculus III: Vector Fields"}
              </span>
              <span className="font-code text-code text-on-surface-variant text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {"1d"}
              </span>
            </a>
            <a className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors truncate" data-path="learning-workspace" href="#">
              <span className="truncate">
                {"Distributed Consensus Draft"}
              </span>
              <span className="font-code text-code text-on-surface-variant text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {"3d"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="p-space-sm border-t border-outline-variant">
        <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-label-md">
          <a className="flex items-center justify-between px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"settings"}
              </span>
              <span className="truncate">
                {"Settings & Preferences"}
              </span>
            </div>
          </a>
        </nav>
      </div>
    </aside>
    <div className="pl-64">
      <header className="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant z-40 flex items-center justify-between px-space-lg">
        <div className="w-32 flex items-center">
          <span className="font-code text-code text-on-surface-variant">
            {"SOLVE v2.4"}
          </span>
        </div>
        <div className="flex items-center bg-surface-container p-0.5 rounded-lg border border-outline-variant">
          <nav className="flex items-center" data-active-classes="bg-surface-container-lowest text-on-surface shadow-sm">
            <a className="px-space-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="learning-workspace" href="#">
              {"Chat"}
            </a>
            <a className="px-space-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="study-workspace" href="#">
              {"Study"}
            </a>
          </nav>
        </div>
        <div className="w-32 flex items-center justify-end gap-space-sm">
          <button aria-label="Workspace actions" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"tune"}
            </span>
          </button>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
        </div>
      </header>
      <main className="relative pt-14 w-full bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container-low px-space-xl py-space-sm flex flex-col md:flex-row items-center justify-between gap-space-md">
            <div className="flex items-center gap-space-md">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  {"Study Engine Active"}
                </span>
              </div>
              <span className="text-outline-variant">
                {"/"}
              </span>
              <p className="font-body-sm text-body-sm text-secondary">
                {"\n        Structured preparation calibrated to your pace and cognitive load.\n      "}
              </p>
            </div>
            <div className="flex items-center bg-surface-container p-1 rounded-lg">
              <span className="font-code text-code text-on-surface-variant text-[11px] px-2 uppercase tracking-wide">
                {"Preview State:"}
              </span>
              <button className="px-space-sm py-1 rounded text-label-sm font-label-md transition-all bg-surface-container-lowest text-on-surface shadow-sm" id="btn-state-new" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n        New Goal\n      "}
              </button>
              <button className="px-space-sm py-1 rounded text-label-sm font-label-md transition-all text-on-surface-variant hover:text-on-surface" id="btn-state-returning" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n        Returning Learner\n      "}
              </button>
              <button className="px-space-sm py-1 rounded text-label-sm font-label-md transition-all text-on-surface-variant hover:text-on-surface" id="btn-state-preview" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n        3-Month Python Plan\n      "}
              </button>
            </div>
          </div>
          <div className="max-w-[1080px] w-full mx-auto px-space-lg py-space-2xl flex flex-col gap-space-2xl">
            <div className="hidden flex flex-col w-full bg-surface-container-low rounded-xl p-space-xl transition-all" id="returning-card">
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-space-lg">
                <div className="flex flex-col gap-space-xs max-w-xl">
                  <div className="flex items-center gap-space-sm mb-1">
                    <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary font-semibold">
                      {"Active Syllabus Target"}
                    </span>
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                    <span className="font-code text-code text-secondary text-[11px]">
                      {"Sprint 04 / 12"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Python foundations"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary">
                    {"\n            Next module ready: "}
                    <span className="text-on-surface font-medium">
                      {"Practise conditions, guard clauses & nested loops"}
                    </span>
                    {". Deep memory consolidation calibrated.\n          "}
                  </p>
                </div>
                <div className="flex flex-wrap items-center gap-space-sm">
                  <button className="px-space-lg py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-tint active:scale-[0.98] transition-all flex items-center gap-space-sm shadow-sm" type="button">
                    <span>
                      {"Continue learning"}
                    </span>
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </button>
                  <button className="px-space-md py-2.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            View plan\n          "}
                  </button>
                </div>
              </div>
              <div className="mt-space-lg pt-space-md flex flex-wrap items-center justify-between gap-space-md bg-surface-container-lowest/70 p-space-md rounded-lg">
                <div className="flex items-center gap-space-xl">
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Trajectory"}
                    </span>
                    <span className="font-code text-code text-on-surface font-medium">
                      {"Week 4 · Structural Foundations"}
                    </span>
                  </div>
                  <div className="h-6 w-px bg-surface-variant"></div>
                  <div className="flex flex-col">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Estimated Milestone"}
                    </span>
                    <span className="font-code text-code text-on-surface font-medium">
                      {"OOP Mastery by Nov 28"}
                    </span>
                  </div>
                </div>
                <button className="text-secondary hover:text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors group" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span>
                    {"Start another goal"}
                  </span>
                  <span className="material-symbols-outlined text-[14px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                    {"north_east"}
                  </span>
                </button>
              </div>
            </div>
            <div className="hidden flex flex-col w-full bg-surface-container-low rounded-xl p-space-xl transition-all" id="plan-preview">
              <div className="flex items-start justify-between mb-space-lg pb-space-sm">
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="px-2 py-0.5 rounded text-[11px] font-code bg-primary text-on-primary font-medium">
                      {"90-DAY FORMATION"}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Updated 2h ago"}
                    </span>
                  </div>
                  <h3 className="font-headline-md text-headline-md text-on-surface">
                    {"Curriculum Strategy: Python & Algorithm Engineering"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    {"Autonomous 12-week blueprint mapped across syntax, data structures, and idiomatic API creation."}
                  </p>
                </div>
                <button className="p-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md mb-space-xl">
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-code text-code text-[11px] text-secondary">
                        {"PHASE 01 · WEEKS 1-4"}
                      </span>
                      <span className="material-symbols-outlined text-primary text-[18px]" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                        {"check_circle"}
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                      {"Foundational Rigor"}
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Control flow, memory models, functions, iterators, and testing primitives."}
                    </p>
                  </div>
                  <div className="mt-4 pt-2">
                    <span className="font-label-sm text-label-sm text-primary font-medium">
                      {"Current Focus: Loops & Recursion"}
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-code text-code text-[11px] text-secondary">
                        {"PHASE 02 · WEEKS 5-8"}
                      </span>
                      <span className="material-symbols-outlined text-outline text-[18px]" aria-hidden="true">
                        {"radio_button_unchecked"}
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                      {"Architectural Patterns"}
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Dunder methods, dataclasses, asynchronous I/O, generators, and package structuring."}
                    </p>
                  </div>
                  <div className="mt-4 pt-2">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Unlocks at Milestone 04"}
                    </span>
                  </div>
                </div>
                <div className="p-space-md rounded-lg bg-surface-container-lowest flex flex-col justify-between">
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="font-code text-code text-[11px] text-secondary">
                        {"PHASE 03 · WEEKS 9-12"}
                      </span>
                      <span className="material-symbols-outlined text-outline text-[18px]" aria-hidden="true">
                        {"radio_button_unchecked"}
                      </span>
                    </div>
                    <h4 className="font-headline-sm text-headline-sm text-on-surface mb-1">
                      {"Production Synthesis"}
                    </h4>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"FastAPI service deployment, concurrency locks, profiler optimizations, benchmark suite."}
                    </p>
                  </div>
                  <div className="mt-4 pt-2">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Unlocks at Milestone 08"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-space-md">
                  <button className="px-space-md py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 hover:bg-surface-tint transition-all" type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"play_arrow"}
                    </span>
                    <span>
                      {"Resume Phase 01 Practice"}
                    </span>
                  </button>
                  <button className="px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-label-md text-label-md hover:bg-surface-container-high transition-all flex items-center gap-2" type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"tune"}
                    </span>
                    <span>
                      {"Adjust Target Pace"}
                    </span>
                  </button>
                </div>
                <span className="font-code text-code text-[12px] text-secondary">
                  {"Expected commitment: 4.5 hrs / wk"}
                </span>
              </div>
            </div>
            <div className="w-full flex flex-col items-center justify-center text-center max-w-[760px] mx-auto transition-all">
              <div className="flex flex-col items-center gap-space-sm mb-space-xl">
                <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center mb-1">
                  <span className="material-symbols-outlined text-on-surface text-[22px]" aria-hidden="true">
                    {"route"}
                  </span>
                </div>
                <h1 className="font-display text-headline-lg lg:text-display text-on-surface tracking-tight font-semibold">
                  {"\n          What would you like to work towards?\n        "}
                </h1>
                <p className="font-body-lg text-body-lg text-secondary max-w-xl">
                  {"\n          Tell me your learning goal. We'll build a preparation plan around your starting point, time, and resources.\n        "}
                </p>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-md flex flex-col gap-space-md text-left transition-shadow hover:shadow-md focus-within:shadow-md">
                <div className="relative w-full">
                  <textarea className="w-full resize-none bg-transparent font-body-lg text-body-lg text-on-surface placeholder:text-secondary focus:outline-none transition-colors" id="goal-input" placeholder="e.g. Help me learn Python over the next three months for systems programming..." rows="3"></textarea>
                </div>
                <div className="flex items-center justify-between pt-space-xs">
                  <div className="flex items-center gap-space-xs">
                    <button className="flex items-center gap-1.5 px-space-sm py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md" title="Attach syllabus or curriculum PDF/MD" type="button" aria-label="Attach syllabus or curriculum PDF/MD">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"add"}
                      </span>
                      <span className="hidden sm:inline">
                        {"Attach syllabus"}
                      </span>
                    </button>
                    <button className="p-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors flex items-center justify-center" title="Audio dictation" type="button" aria-label="Audio dictation">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <span className="font-code text-code text-on-surface-variant text-[11px] hidden sm:inline">
                      {"⌘ + Enter"}
                    </span>
                    <button aria-label="Generate Study Strategy" className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:bg-surface-tint active:scale-95 transition-all shadow-sm" id="send-goal-btn" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_upward"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flex flex-col items-center gap-space-sm mt-space-lg w-full">
                <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wider">
                  {"Suggested starting architectures"}
                </span>
                <div className="flex flex-wrap items-center justify-center gap-space-sm">
                  <button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            Prepare for semester exams\n          "}
                  </button>
                  <button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            Learn a new skill\n          "}
                  </button>
                  <button className="px-space-md py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            Build understanding in a subject\n          "}
                  </button>
                </div>
              </div>
            </div>
            <div className="w-full pt-space-xl">
              <div className="flex items-center justify-between mb-space-md">
                <div className="flex items-center gap-2">
                  <span className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
                    {"Active Study Tracks"}
                  </span>
                  <span className="font-code text-code text-secondary text-[11px] bg-surface-container px-2 py-0.5 rounded-full">
                    {"3 In Progress"}
                  </span>
                </div>
                <a className="font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors flex items-center gap-1" href="#">
                  <span>
                    {"Manage all tracks"}
                  </span>
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"chevron_right"}
                  </span>
                </a>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md">
                <div className="bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-code text-code text-[11px] text-secondary">
                        {"3-MO INTENSIVE"}
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-medium">
                        {"On Track"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary">
                      {"Python Foundations"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Milestone 2/6: Functional Programming, Generators, & Context Managers."}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center justify-between">
                    <span className="font-code text-code text-[11px] text-secondary">
                      {"42h total log"}
                    </span>
                    <span className="material-symbols-outlined text-secondary group-hover:text-on-surface transition-colors text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-code text-code text-[11px] text-secondary">
                        {"MIDTERM PREP"}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Oct 24 Target"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary">
                      {"Data Structures Midterm"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Graph traversals, Red-Black Trees, and amortized complexity bounds."}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center justify-between">
                    <span className="font-code text-code text-[11px] text-secondary">
                      {"18 problem models"}
                    </span>
                    <span className="material-symbols-outlined text-secondary group-hover:text-on-surface transition-colors text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low hover:bg-surface-container p-space-lg rounded-xl transition-all flex flex-col justify-between group">
                  <div>
                    <div className="flex items-center justify-between mb-space-sm">
                      <span className="font-code text-code text-[11px] text-secondary">
                        {"RESEARCH READINESS"}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Continuous"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface mb-1 group-hover:text-primary">
                      {"Distributed Systems"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Raft consensus paper synthesis, Paxos proofs, and vector clocks."}
                    </p>
                  </div>
                  <div className="mt-space-lg pt-space-sm flex items-center justify-between">
                    <span className="font-code text-code text-[11px] text-secondary">
                      {"7 papers mapped"}
                    </span>
                    <span className="material-symbols-outlined text-secondary group-hover:text-on-surface transition-colors text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="w-full bg-surface-container-low/50 rounded-xl p-space-xl flex flex-col md:flex-row items-center justify-between gap-space-xl">
              <div className="flex items-center gap-space-lg">
                <div className="w-12 h-12 rounded-xl bg-surface-container flex items-center justify-center shrink-0">
                  <span className="material-symbols-outlined text-on-surface text-[24px]" aria-hidden="true">
                    {"cognition"}
                  </span>
                </div>
                <div className="flex flex-col">
                  <h4 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Cognitive load pacing, not dopamine loops"}
                  </h4>
                  <p className="font-body-sm text-body-sm text-secondary mt-0.5">
                    {"\n            SOLVE rejects superficial gamification, synthetic streaks, and guilt-driven notifications. We pace learning according to active retrieval, space repetition, and real mental energy.\n          "}
                  </p>
                </div>
              </div>
              <div className="shrink-0 flex items-center gap-space-sm">
                <button className="px-space-md py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md hover:bg-surface-container transition-all" type="button">
                  {"\n          Methodology Guide\n        "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
