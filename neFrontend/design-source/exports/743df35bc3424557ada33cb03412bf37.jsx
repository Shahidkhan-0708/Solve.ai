'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/743df35bc3424557ada33cb03412bf37';
import './743df35bc3424557ada33cb03412bf37.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-743df35bc3424557ada33cb03412bf37 bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased" data-screen-id="743df35bc3424557ada33cb03412bf37">
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-14 px-space-md flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-space-sm">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
              {"SOLVE"}
            </span>
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
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
        </div>
      </header>
      <main className="relative pt-14 w-full bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container border-b border-outline-variant px-space-xl py-2 flex items-center justify-between z-30">
            <div className="flex items-center gap-space-sm">
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
              <span className="font-code text-code text-on-surface-variant uppercase tracking-wider text-[11px]">
                {"Workflow State"}
              </span>
            </div>
            <div className="flex items-center gap-1 bg-surface-container-low p-1 rounded-lg border border-outline-variant text-[11px]">
              <button className="px-2.5 py-1 rounded font-label-sm transition-colors bg-primary text-on-primary" id="btn-state-ready" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"1. Plan Ready"}
              </button>
              <button className="px-2.5 py-1 rounded font-label-sm text-on-surface-variant hover:text-on-surface transition-colors" id="btn-state-drawer" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"2. Adjust Drawer"}
              </button>
              <button className="px-2.5 py-1 rounded font-label-sm text-on-surface-variant hover:text-on-surface transition-colors" id="btn-state-updating" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"3. Skeleton Regenerating"}
              </button>
              <button className="px-2.5 py-1 rounded font-label-sm text-on-surface-variant hover:text-on-surface transition-colors" id="btn-state-error" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"4. Re-calibration Error"}
              </button>
            </div>
          </div>
          <div className="relative w-full flex justify-center pb-28 px-space-md lg:px-0">
            <div className="w-full max-w-[840px] pt-space-xl flex flex-col gap-space-2xl">
              <section className="flex flex-col gap-space-md" id="section-goal">
                <div className="flex flex-col gap-1.5">
                  <span className="font-label-sm text-label-sm uppercase tracking-widest text-on-surface-variant">
                    {"Your learning approach"}
                  </span>
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                    {"A focused plan for your next 4 hours."}
                  </h1>
                  <div className="flex flex-wrap items-center gap-2 pt-1 font-body-sm text-body-sm text-on-surface-variant">
                    <span className="font-medium text-on-surface">
                      {"Data Structures"}
                    </span>
                    <span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
                    <span>
                      {"Exam tomorrow, 10 AM"}
                    </span>
                    <span className="inline-block w-1 h-1 rounded-full bg-outline"></span>
                    <span className="inline-flex items-center px-2 py-0.5 rounded-full bg-surface-container text-on-surface text-[12px] font-label-sm">
                      {"Target: Pass"}
                    </span>
                    <button className="ml-1 text-on-surface-variant hover:text-primary underline underline-offset-4 font-label-sm transition-colors" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"Edit details"}
                    </button>
                  </div>
                </div>
                <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-space-md">
                  <div className="flex items-center gap-space-sm w-full sm:w-auto">
                    <button className="h-12 px-6 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-space-sm hover:bg-neutral-800 active:bg-black transition-all shadow-sm" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Start with a quick check"}
                      </span>
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                    <button className="h-12 px-5 rounded-xl bg-surface-container-lowest border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Adjust plan\n            "}
                    </button>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant flex items-center gap-1">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"sync"}
                    </span>
                    {"\n            You can change the plan as you learn.\n          "}
                  </span>
                </div>
              </section>
              <section className="hidden rounded-xl border border-error/20 bg-error-container/30 p-space-md text-on-surface" id="banner-error">
                <div className="flex items-start gap-space-md">
                  <span className="material-symbols-outlined text-error text-[22px] mt-0.5" aria-hidden="true">
                    {"error_outline"}
                  </span>
                  <div className="flex-1 flex flex-col gap-1">
                    <h4 className="font-label-md text-label-md text-primary font-semibold">
                      {"Constraint collision: 4 topics requested for 2 hours"}
                    </h4>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"The timing does not leave sufficient room for active recall on Trees and Queues. SOLVE recommended a 3-topic focal point for tomorrow's 10 AM deadline."}
                    </p>
                    <div className="flex items-center gap-3 mt-2">
                      <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary text-label-sm font-label-sm hover:bg-neutral-800 transition-colors" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Auto-adjust to High Yield (80/20)"}
                      </button>
                      <button className="text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface underline" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Modify custom hours"}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-approach">
                <div className="flex flex-col gap-1 border-b border-outline-variant pb-space-sm">
                  <h2 className="font-headline-sm text-headline-sm text-primary">
                    {"How we'll work"}
                  </h2>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    {"\n            We’ll work through questions from your materials, explain the steps, and check what you can recall. Your answers will help us decide where to spend more time.\n          "}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-1">
                  <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant flex flex-col gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center font-code text-code text-on-surface font-semibold">
                      {"\n              1\n            "}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-label-md text-label-md text-primary font-semibold">
                        {"Understand"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Start with a clear explanation and a worked example."}
                      </p>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant flex flex-col gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center font-code text-code text-on-surface font-semibold">
                      {"\n              2\n            "}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-label-md text-label-md text-primary font-semibold">
                        {"Practise"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Try a similar question with hints when you need them."}
                      </p>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low border border-outline-variant flex flex-col gap-space-sm">
                    <div className="w-7 h-7 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center font-code text-code text-on-surface font-semibold">
                      {"\n              3\n            "}
                    </div>
                    <div className="flex flex-col gap-0.5">
                      <h3 className="font-label-md text-label-md text-primary font-semibold">
                        {"Explain back"}
                      </h3>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Describe the idea in your own words so we can find any gaps."}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden transition-all">
                  <button className="w-full px-space-md py-3.5 flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant" aria-hidden="true">
                        {"lightbulb"}
                      </span>
                      <span className="font-label-md text-label-md text-on-surface font-medium">
                        {"Why this approach?"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-transform" id="disclosure-icon" aria-hidden="true">
                      {"expand_more"}
                    </span>
                  </button>
                  <div className="px-space-md pb-space-md pt-1 text-on-surface-variant font-body-sm text-body-sm hidden flex-col gap-space-sm border-t border-outline-variant/60" id="disclosure-content">
                    <p>
                      {"You have four hours and a specific set of materials. This plan keeps the session focused on those resources and uses short practice checks to identify where you need more help without passive reading fatigue."}
                    </p>
                    <div className="pt-1">
                      <button className="text-primary hover:underline font-label-sm text-label-sm inline-flex items-center gap-1 font-medium" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Adjust this approach\n                "}
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {"arrow_forward"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-sequence">
                <div className="flex flex-col sm:flex-row sm:items-baseline justify-between border-b border-outline-variant pb-space-sm gap-2">
                  <div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      {"Your study sequence"}
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"\n              Suggested timings · Total 4 hours (incl. 10m break). We can adjust them as you work.\n            "}
                    </p>
                  </div>
                  <span className="font-code text-code text-on-surface-variant bg-surface-container px-2 py-1 rounded">
                    {"7 STEPS · 240 MIN"}
                  </span>
                </div>
                <div className="flex flex-col gap-2.5" id="sequence-list">
                  <div className="p-space-md rounded-xl bg-surface-container-low border border-primary/25 flex flex-col gap-space-sm relative">
                    <div className="flex items-start justify-between gap-space-md">
                      <div className="flex items-start gap-space-md min-w-0">
                        <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-[11px] font-bold shrink-0 mt-0.5">
                          {"1"}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <div className="flex flex-wrap items-center gap-2">
                            <h3 className="font-label-md text-label-md text-primary font-semibold">
                              {"Quick starting check"}
                            </h3>
                            <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary text-[10px] font-label-sm tracking-wide uppercase">
                              {"Up next"}
                            </span>
                            <span className="font-code text-[12px] text-on-surface-variant">
                              {"10 min"}
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface mt-1">
                            {"A few short diagnostic questions to establish your baseline in arrays, pointers, and node addressing."}
                          </p>
                        </div>
                      </div>
                      <button className="shrink-0 px-3.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-neutral-800 transition-colors" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Start here\n              "}
                      </button>
                    </div>
                  </div>
                  <div className="rounded-xl border border-outline-variant bg-surface-container-lowest overflow-hidden transition-all">
                    <div className="p-space-md flex items-center justify-between gap-space-md cursor-pointer hover:bg-surface-container-low transition-colors" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                      <div className="flex items-start gap-space-md min-w-0">
                        <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-code text-[11px] shrink-0 mt-0.5">
                          {"2"}
                        </span>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <h4 className="font-label-md text-label-md text-primary font-medium">
                              {"Linked lists"}
                            </h4>
                            <span className="font-code text-[12px] text-on-surface-variant">
                              {"40 min"}
                            </span>
                            <span className="text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded">
                              {"Not started"}
                            </span>
                          </div>
                          <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                            {"Understand operations, pointer manipulation, trace an example, and practise insertions."}
                          </p>
                        </div>
                      </div>
                      <button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
                        <span className="material-symbols-outlined text-[20px] rotate-180 transition-transform" id="step-2-icon" aria-hidden="true">
                          {"expand_more"}
                        </span>
                      </button>
                    </div>
                    <div className="px-space-md pb-space-md pt-2 border-t border-outline-variant/60 bg-surface-container-low/40 flex flex-col gap-space-sm text-body-sm" id="step-2-detail">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-sm">
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/70">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant text-[10px] block">
                            {"Planned Activity"}
                          </span>
                          <span className="text-on-surface font-medium text-body-sm mt-0.5 block">
                            {"Step-by-step trace & 2 exam practice questions (Singly & Doubly)"}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant/70">
                          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant text-[10px] block">
                            {"Target Source"}
                          </span>
                          <span className="text-on-surface font-medium text-body-sm mt-0.5 flex items-center gap-1.5">
                            <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden="true">
                              {"description"}
                            </span>
                            {"\n                    DSA question bank.pdf (Q1 - Q4)\n                  "}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors">
                    <div className="flex items-start gap-space-md min-w-0">
                      <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-code text-[11px] shrink-0 mt-0.5">
                        {"3"}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-label-md text-label-md text-primary font-medium">
                            {"Stacks and queues"}
                          </h4>
                          <span className="font-code text-[12px] text-on-surface-variant">
                            {"40 min"}
                          </span>
                          <span className="text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded">
                            {"Not started"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                          {"Compare LIFO vs FIFO execution patterns and solve prefix/postfix evaluation tasks."}
                        </p>
                      </div>
                    </div>
                    <button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                  <div className="rounded-xl border border-dashed border-outline-variant/80 bg-surface-container/30 px-space-md py-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-space-md">
                      <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface-variant flex items-center justify-center shrink-0">
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {"local_cafe"}
                        </span>
                      </span>
                      <div className="flex items-center gap-3">
                        <span className="font-label-md text-label-md text-on-surface font-medium">
                          {"Short rest break"}
                        </span>
                        <span className="font-code text-[11px] text-on-surface-variant">
                          {"10 min"}
                        </span>
                      </div>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant text-[12px]">
                      {"Diffuse cognitive reset"}
                    </span>
                  </div>
                  <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors">
                    <div className="flex items-start gap-space-md min-w-0">
                      <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-code text-[11px] shrink-0 mt-0.5">
                        {"5"}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-label-md text-label-md text-primary font-medium">
                            {"Trees and traversals"}
                          </h4>
                          <span className="font-code text-[12px] text-on-surface-variant">
                            {"50 min"}
                          </span>
                          <span className="text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded">
                            {"Not started"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                          {"Work through visual binary trees, in-order/pre-order paths, and subtree balance."}
                        </p>
                      </div>
                    </div>
                    <button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                  <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors">
                    <div className="flex items-start gap-space-md min-w-0">
                      <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-code text-[11px] shrink-0 mt-0.5">
                        {"6"}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-label-md text-label-md text-primary font-medium">
                            {"Mixed question-bank practice"}
                          </h4>
                          <span className="font-code text-[12px] text-on-surface-variant">
                            {"50 min"}
                          </span>
                          <span className="text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded">
                            {"Not started"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                          {"Try composite exam questions under mild pacing constraints and analyse failure points."}
                        </p>
                      </div>
                    </div>
                    <button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                  <div className="rounded-xl border border-outline-variant bg-surface-container-lowest p-space-md flex items-center justify-between gap-space-md hover:bg-surface-container-low transition-colors">
                    <div className="flex items-start gap-space-md min-w-0">
                      <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-code text-[11px] shrink-0 mt-0.5">
                        {"7"}
                      </span>
                      <div className="flex flex-col min-w-0">
                        <div className="flex items-center gap-2">
                          <h4 className="font-label-md text-label-md text-primary font-medium">
                            {"Recall and final review"}
                          </h4>
                          <span className="font-code text-[12px] text-on-surface-variant">
                            {"40 min"}
                          </span>
                          <span className="text-[11px] font-label-sm text-on-surface-variant bg-surface-container px-1.5 py-0.2 rounded">
                            {"Not started"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 truncate">
                          {"Feynman explanation back to mentor, key memory cues, and final confidence verification."}
                        </p>
                      </div>
                    </div>
                    <button className="text-on-surface-variant hover:text-on-surface p-1" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"chevron_right"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="hidden flex-col gap-2.5" id="sequence-skeleton">
                  <div className="h-20 w-full rounded-xl bg-surface-container animate-pulse"></div>
                  <div className="h-16 w-full rounded-xl bg-surface-container-low animate-pulse"></div>
                  <div className="h-16 w-full rounded-xl bg-surface-container-low animate-pulse"></div>
                  <div className="h-10 w-full rounded-xl bg-surface-container/50 animate-pulse"></div>
                  <div className="h-16 w-full rounded-xl bg-surface-container-low animate-pulse"></div>
                </div>
              </section>
              <section className="flex flex-col gap-space-md" id="section-resources">
                <div className="flex items-center justify-between border-b border-outline-variant pb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      {"Based on your materials"}
                    </h2>
                    <span className="font-code text-[11px] text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded">
                      {"2 INDEXED"}
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors" type="button">
                      {"View all"}
                    </button>
                    <span className="text-outline-variant">
                      {"·"}
                    </span>
                    <button className="font-label-sm text-label-sm text-primary font-medium hover:underline flex items-center gap-1" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"add"}
                      </span>
                      {" Add resources\n            "}
                    </button>
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md">
                  <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-space-md hover:bg-surface-container-low/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-on-surface">
                      <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                        {"picture_as_pdf"}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-label-md text-label-md text-primary font-medium truncate">
                          {"DSA question bank.pdf"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" title="Analyzed & ready"></span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                          {"Question bank"}
                        </span>
                        <span className="font-code text-[11px] text-on-surface-variant">
                          {"14 pages parsed"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-lowest border border-outline-variant flex items-start gap-space-md hover:bg-surface-container-low/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-surface-container flex items-center justify-center shrink-0 text-on-surface">
                      <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                        {"image"}
                      </span>
                    </div>
                    <div className="flex flex-col min-w-0 flex-1">
                      <div className="flex items-center justify-between gap-1">
                        <span className="font-label-md text-label-md text-primary font-medium truncate">
                          {"Unit 2 notes.jpg"}
                        </span>
                        <span className="w-2 h-2 rounded-full bg-emerald-600 shrink-0" title="Analyzed & ready"></span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-[11px]">
                          {"Photo / Notes"}
                        </span>
                        <span className="font-code text-[11px] text-on-surface-variant">
                          {"OCR extracted"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
          <div className="fixed inset-0 bg-black/20 z-50 transition-opacity opacity-0 pointer-events-none" id="drawer-veil" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
          <aside className="fixed top-0 right-0 h-full w-full sm:w-[440px] bg-surface-container-lowest border-l border-outline-variant z-50 flex flex-col justify-between translate-x-full transition-transform duration-300 ease-out shadow-2xl" id="drawer-panel">
            <div className="flex flex-col flex-1 min-h-0 overflow-y-auto">
              <div className="h-16 px-space-xl flex items-center justify-between border-b border-outline-variant shrink-0">
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                    {"tune"}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm text-primary">
                    {"Adjust your plan"}
                  </h3>
                </div>
                <button className="p-1 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <div className="p-space-xl flex flex-col gap-space-xl">
                <div className="flex flex-col gap-space-sm">
                  <label className="font-label-md text-label-md text-primary font-medium">
                    {"Available study time"}
                  </label>
                  <div className="grid grid-cols-4 gap-2">
                    <button className="btn-hour py-2 text-center rounded-lg border border-outline-variant font-label-md text-label-md hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"2 hrs"}
                    </button>
                    <button className="btn-hour py-2 text-center rounded-lg border border-outline-variant font-label-md text-label-md hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"3 hrs"}
                    </button>
                    <button className="btn-hour py-2 text-center rounded-lg border border-primary bg-primary text-on-primary font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"4 hrs"}
                    </button>
                    <button className="btn-hour py-2 text-center rounded-lg border border-outline-variant font-label-md text-label-md hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"5 hrs"}
                    </button>
                  </div>
                  <span className="text-[12px] font-body-sm text-on-surface-variant">
                    {"Exam is tomorrow at 10:00 AM. 4h includes built-in breaks."}
                  </span>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <label className="font-label-md text-label-md text-primary font-medium">
                    {"Target objective"}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <label className="flex items-center gap-space-sm p-space-sm rounded-lg border border-primary bg-surface-container-low cursor-pointer">
                      <input defaultChecked className="w-4 h-4 accent-primary" name="target" type="radio" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-primary font-medium">
                          {"Pass safely"}
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          {"Core 80/20 topics"}
                        </span>
                      </div>
                    </label>
                    <label className="flex items-center gap-space-sm p-space-sm rounded-lg border border-outline-variant hover:bg-surface-container-low cursor-pointer transition-colors">
                      <input className="w-4 h-4 accent-primary" name="target" type="radio" />
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-primary font-medium">
                          {"Higher grade"}
                        </span>
                        <span className="text-[11px] text-on-surface-variant">
                          {"Full curriculum breadth"}
                        </span>
                      </div>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between">
                    <label className="font-label-md text-label-md text-primary font-medium">
                      {"Topics to cover"}
                    </label>
                    <span className="font-label-sm text-[11px] text-on-surface-variant">
                      {"All selected"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5 rounded-xl border border-outline-variant p-2">
                    <label className="flex items-center justify-between p-2 rounded hover:bg-surface-container-low cursor-pointer">
                      <div className="flex items-center gap-space-sm">
                        <input defaultChecked className="w-4 h-4 accent-primary rounded" type="checkbox" />
                        <span className="font-body-md text-body-md text-on-surface">
                          {"Linked lists"}
                        </span>
                      </div>
                      <span className="font-code text-[11px] text-on-surface-variant">
                        {"High Yield"}
                      </span>
                    </label>
                    <label className="flex items-center justify-between p-2 rounded hover:bg-surface-container-low cursor-pointer">
                      <div className="flex items-center gap-space-sm">
                        <input defaultChecked className="w-4 h-4 accent-primary rounded" type="checkbox" />
                        <span className="font-body-md text-body-md text-on-surface">
                          {"Stacks and queues"}
                        </span>
                      </div>
                      <span className="font-code text-[11px] text-on-surface-variant">
                        {"Core"}
                      </span>
                    </label>
                    <label className="flex items-center justify-between p-2 rounded hover:bg-surface-container-low cursor-pointer">
                      <div className="flex items-center gap-space-sm">
                        <input defaultChecked className="w-4 h-4 accent-primary rounded" type="checkbox" />
                        <span className="font-body-md text-body-md text-on-surface">
                          {"Trees and traversals"}
                        </span>
                      </div>
                      <span className="font-code text-[11px] text-on-surface-variant">
                        {"Deep Check"}
                      </span>
                    </label>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs">
                  <label className="font-label-md text-label-md text-primary font-medium">
                    {"Anything you'd like to change?"}
                  </label>
                  <textarea className="w-full p-space-sm rounded-xl border border-outline-variant bg-surface-container-lowest font-body-sm text-body-sm text-on-surface focus:outline-none focus:border-primary transition-colors placeholder:text-on-surface-variant" id="drawer-note" placeholder="e.g. Spend more time on binary tree traversals, I struggle with recursion..." rows="3"></textarea>
                </div>
              </div>
            </div>
            <div className="p-space-lg border-t border-outline-variant bg-surface-container-lowest flex items-center justify-between gap-space-md shrink-0">
              <button className="px-space-md py-2.5 rounded-xl border border-outline-variant font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n        Cancel\n      "}
              </button>
              <button className="flex-1 py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-neutral-800 transition-colors flex items-center justify-center gap-space-xs shadow-sm" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span>
                  {"Update plan"}
                </span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"check"}
                </span>
              </button>
            </div>
          </aside>
          <div className="fixed bottom-0 left-64 right-0 bg-surface-container-lowest/90 backdrop-blur-md border-t border-outline-variant z-30 px-space-md py-3 flex justify-center">
            <div className="w-full max-w-[840px] flex items-center gap-space-sm">
              <div className="flex-1 flex items-center bg-surface-container-lowest border border-outline-variant rounded-xl px-space-md py-2 shadow-sm focus-within:border-primary transition-colors">
                <button className="text-on-surface-variant hover:text-on-surface p-1 rounded transition-colors mr-1" title="Add reference or file" type="button" aria-label="Add reference or file">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"add"}
                  </span>
                </button>
                <input className="flex-1 bg-transparent text-body-md font-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none" id="quick-prompt" placeholder="Ask about this plan or tell me what to change..." type="text" />
                <button className="text-on-surface-variant hover:text-on-surface p-1 rounded transition-colors" title="Voice dictation" type="button" aria-label="Voice dictation">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"mic"}
                  </span>
                </button>
                <button className="ml-2 w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-neutral-800 transition-colors shrink-0" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"arrow_upward"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="fixed top-16 right-8 bg-inverse-surface text-inverse-on-surface px-4 py-3 rounded-xl shadow-lg z-50 flex items-center gap-2 transform translate-y-4 opacity-0 pointer-events-none transition-all" id="toast">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"check_circle"}
            </span>
            <span className="font-label-md text-label-md" id="toast-message">
              {"Plan calibrated for 4-hour window"}
            </span>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
