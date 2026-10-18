'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/850cb09187854f21adffa14f6bda2976';
import './850cb09187854f21adffa14f6bda2976.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-850cb09187854f21adffa14f6bda2976 bg-surface font-body-md text-body-md text-on-surface antialiased" data-screen-id="850cb09187854f21adffa14f6bda2976">
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between p-space-md">
      <div className="flex flex-col gap-space-lg">
        <div className="flex items-center gap-space-sm px-space-sm py-space-xs">
          <div className="w-7 h-7 rounded bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold tracking-tight">
            {"S"}
          </div>
          <div className="flex flex-col">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              {"SOLVE"}
            </span>
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
          <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all font-label-md text-label-md" data-path="my-plan-and-strategy" href="#">
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
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
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
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
        </div>
      </header>
      <main className="relative pt-16 bg-surface">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container-high px-space-xl py-2 flex items-center justify-between text-on-surface">
            <div className="flex items-center gap-space-sm">
              <span className="font-code text-code text-on-surface-variant font-medium tracking-tight">
                {"DEMO_STATE:"}
              </span>
              <div className="flex items-center gap-1 overflow-x-auto" id="simulator-pills">
                <button className="sim-btn px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-primary text-on-primary transition-all" id="btn-state-1" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"1. Chat Map (Node Selected)"}
                </button>
                <button className="sim-btn px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all" id="btn-state-2" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"2. Study Map (Python)"}
                </button>
                <button className="sim-btn px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all" id="btn-state-3" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"3. Expanded Evidence"}
                </button>
                <button className="sim-btn px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all" id="btn-state-4" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"4. Cluster Overview"}
                </button>
                <button className="sim-btn px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all" id="btn-state-5" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"5. List View"}
                </button>
                <button className="sim-btn px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container-lowest text-on-surface hover:bg-surface-container transition-all" id="btn-state-6" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"6. Empty State"}
                </button>
              </div>
            </div>
            <div className="hidden lg:flex items-center gap-2 text-on-surface-variant text-label-sm font-label-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span>
                {"Live Sync Enabled"}
              </span>
            </div>
          </div>
          <div className="px-space-xl pt-space-xl pb-space-md bg-surface">
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-space-lg pb-space-lg">
              <div className="flex flex-col gap-1 max-w-2xl">
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm tracking-wider uppercase">
                  <span>
                    {"Cognitive Mapping"}
                  </span>
                  <span>
                    {"/"}
                  </span>
                  <span>
                    {"Mastery Engine"}
                  </span>
                </div>
                <h1 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                  {"Knowledge Graph"}
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {"See how your learning connects, identify mastery gaps, and choose what to explore next."}
                </p>
              </div>
              <div className="flex flex-wrap items-center gap-2">
                <div className="relative inline-block text-left" id="scopeDropdown">
                  <button className="flex items-center gap-2 bg-surface-container-lowest px-3.5 py-2 rounded-lg shadow-sm text-on-surface font-label-md text-label-md hover:bg-surface-container-low transition-colors" type="button">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      {"Scope: Chat · Data Structures mid prep"}
                    </span>
                    <span className="material-symbols-outlined text-[1.125rem] text-on-surface-variant" aria-hidden="true">
                      {"expand_more"}
                    </span>
                  </button>
                </div>
                <button className="flex items-center gap-2 bg-surface-container px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                  <span>
                    {"Study · Python Foundations"}
                  </span>
                </button>
                <button className="flex items-center gap-1.5 bg-surface-container-low px-3 py-2 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                  <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                    {"tune"}
                  </span>
                  <span>
                    {"All Scopes"}
                  </span>
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest rounded-xl p-3 shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
              <div className="flex items-center gap-space-md flex-1">
                <div className="flex items-center bg-surface-container rounded-lg p-0.5">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-sm font-label-sm text-label-sm font-medium transition-all" id="view-mode-map" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                      {"schema"}
                    </span>
                    <span>
                      {"Map View"}
                    </span>
                  </button>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium transition-all" id="view-mode-list" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                      {"format_list_bulleted"}
                    </span>
                    <span>
                      {"List View"}
                    </span>
                  </button>
                </div>
                <div className="relative flex-1 max-w-xs">
                  <span className="material-symbols-outlined text-[1.125rem] absolute left-3 top-2.5 text-on-surface-variant" aria-hidden="true">
                    {"search"}
                  </span>
                  <input className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-surface-container-low text-on-surface placeholder-on-surface-variant font-body-sm text-body-sm focus:outline-none focus:bg-surface-container-lowest transition-all" placeholder="Find a concept..." type="text" />
                </div>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
                <button className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap" type="button">
                  {"All concepts (8)"}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap" type="button">
                  {"Explored (5)"}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap" type="button">
                  {"Practised (3)"}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface-variant font-label-sm text-label-sm flex items-center gap-1 whitespace-nowrap" type="button">
                  <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                  <span>
                    {"Needs review (1)"}
                  </span>
                </button>
              </div>
              <div className="hidden xl:flex items-center gap-space-md text-label-sm font-label-sm text-on-surface-variant pl-space-md">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                  <span>
                    {"Planned"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                  <span>
                    {"Explored"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[0.875rem] text-primary" aria-hidden="true">
                    {"check_circle"}
                  </span>
                  <span>
                    {"Practised"}
                  </span>
                </div>
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-error"></span>
                  <span>
                    {"Needs review"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="px-space-xl py-space-md flex-1">
            <div className="relative flex gap-space-lg w-full h-[760px] overflow-hidden rounded-xl">
              <div className="relative flex-1 bg-surface-container-lowest rounded-xl shadow-sm overflow-hidden flex flex-col justify-between" id="map-canvas-container">
                <div className="absolute inset-0 pointer-events-none opacity-40">
                  <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
                    <defs>
                      <pattern height="32" id="dot-grid" patternUnits="userSpaceOnUse" width="32">
                        <circle cx="2" cy="2" fill="#747878" opacity="0.3" r="1"></circle>
                      </pattern>
                    </defs>
                    <rect fill="url(#dot-grid)" height="100%" width="100%"></rect>
                  </svg>
                </div>
                <div className="relative z-10 p-space-md flex items-center justify-between pointer-events-none">
                  <div className="flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm pointer-events-auto">
                    <span className="material-symbols-outlined text-[1.125rem] text-primary" aria-hidden="true">
                      {"layers"}
                    </span>
                    <span className="font-code text-code text-on-surface font-semibold tracking-wide">
                      {"CLUSTER: DATA STRUCTURES // FOUNDATIONS"}
                    </span>
                    <span className="text-on-surface-variant font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded ml-1">
                      {"Graph v1.4"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 bg-surface-container-lowest/90 backdrop-blur-md px-3 py-1.5 rounded-lg shadow-sm text-on-surface-variant font-label-sm text-label-sm pointer-events-auto">
                    <span>
                      {"Progress: 3 / 8 mastered"}
                    </span>
                    <div className="w-16 h-1.5 bg-surface-container rounded-full overflow-hidden">
                      <div className="bg-primary h-full w-[37.5%]"></div>
                    </div>
                  </div>
                </div>
                <div className="relative flex-1 w-full h-full overflow-hidden" id="graph-viewport">
                  <svg className="absolute inset-0 w-full h-full pointer-events-none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M 220 340 L 410 220" fill="none" stroke="#1c1b1b" strokeLinecap="round" strokeWidth="2"></path>
                    <circle cx="315" cy="280" fill="#f9f9f9" r="10" stroke="#747878" strokeWidth="1"></circle>
                    <text fill="#444748" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" x="315" y="283">
                      {"PART"}
                    </text>
                    <path d="M 220 370 L 410 440" fill="none" stroke="#c4c7c7" strokeDasharray="4 4" strokeWidth="1.5"></path>
                    <path d="M 180 400 L 250 560" fill="none" stroke="#c4c7c7" strokeDasharray="4 4" strokeWidth="1.5"></path>
                    <path d="M 520 200 L 670 140" fill="none" stroke="#747878" strokeWidth="1.5"></path>
                    <path d="M 520 220 L 670 230" fill="none" stroke="#747878" strokeWidth="1.5"></path>
                    <path d="M 520 240 L 670 330" fill="none" stroke="#1c1b1b" strokeWidth="2"></path>
                    <path d="M 750 260 C 780 280, 780 300, 750 320" fill="none" markerEnd="url(#arrow)" stroke="#1c1b1b" strokeDasharray="3 3" strokeWidth="1.5"></path>
                    <defs>
                      <marker id="arrow" markerHeight="6" markerWidth="6" orient="auto-start-reverse" refX="6" refY="5" viewBox="0 0 10 10">
                        <path d="M 0 1 L 8 5 L 0 9 z" fill="#1c1b1b"></path>
                      </marker>
                    </defs>
                  </svg>
                  <div className="absolute left-[785px] top-[282px] -translate-x-1/2 -translate-y-1/2 bg-surface-container text-on-surface font-code text-label-sm px-2 py-0.5 rounded shadow-sm z-20 pointer-events-none">
                    {"\n            used in →\n          "}
                  </div>
                  <div className="absolute left-[130px] top-[320px] z-20 cursor-pointer group" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="bg-primary text-on-primary px-5 py-3.5 rounded-xl shadow-md flex items-center gap-3 transition-transform duration-200 group-hover:scale-105">
                      <span className="material-symbols-outlined text-[1.5rem]" aria-hidden="true">
                        {"hub"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-surface-container-high tracking-wider uppercase">
                          {"Domain Root"}
                        </span>
                        <span className="font-headline-sm text-headline-sm font-semibold leading-tight">
                          {"Data Structures"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[410px] top-[195px] z-20 cursor-pointer group" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="bg-surface-container-lowest text-on-surface px-4 py-3 rounded-xl shadow-md flex items-center gap-3 transition-transform duration-200 group-hover:scale-105">
                      <span className="w-3 h-3 rounded-full bg-primary flex items-center justify-center">
                        <span className="w-1.5 h-1.5 rounded-full bg-surface"></span>
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-1.5">
                          <span className="font-label-md text-label-md font-semibold">
                            {"Linked lists"}
                          </span>
                          <span className="material-symbols-outlined text-[1rem] text-primary" aria-hidden="true">
                            {"check_circle"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"3 Concepts linked"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[670px] top-[115px] z-20 cursor-pointer group" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="bg-surface-container-lowest text-on-surface px-3.5 py-2.5 rounded-lg shadow-sm flex items-center gap-2.5 hover:bg-surface-container-low transition-all">
                      <span className="material-symbols-outlined text-[1.125rem] text-primary" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium">
                          {"Nodes and references"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Memory pointers"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[670px] top-[210px] z-20 cursor-pointer group" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="bg-surface-container-lowest text-on-surface px-3.5 py-2.5 rounded-lg shadow-sm flex items-center gap-2.5 hover:bg-surface-container-low transition-all">
                      <span className="material-symbols-outlined text-[1.125rem] text-primary" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium">
                          {"Head reference"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"List entry point"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[660px] top-[305px] z-30 cursor-pointer" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="bg-surface-container-lowest text-on-surface p-4 rounded-xl shadow-md ring-2 ring-primary flex flex-col gap-2 max-w-[240px] transform hover:scale-[1.02] transition-transform">
                      <div className="flex items-start justify-between gap-2">
                        <span className="px-2 py-0.5 rounded bg-error-container text-on-error-container font-label-sm text-label-sm font-semibold flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
                          {"\n                  Needs review\n                "}
                        </span>
                        <span className="material-symbols-outlined text-[1.25rem] text-primary" aria-hidden="true">
                          {"radio_button_checked"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-headline-sm text-headline-sm font-semibold leading-snug">
                          {"Insertion at the beginning"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant line-clamp-1 mt-0.5">
                          {"Singly-linked list operation"}
                        </span>
                      </div>
                      <div className="pt-1 flex items-center justify-between text-on-surface-variant text-label-sm font-label-sm">
                        <span>
                          {"Accuracy: 64%"}
                        </span>
                        <span className="text-primary font-medium">
                          {"Focus target"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[410px] top-[430px] z-20 cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
                    <div className="bg-surface-container-low text-on-surface-variant px-4 py-3 rounded-xl shadow-sm flex items-center gap-3">
                      <span className="material-symbols-outlined text-[1.25rem] text-outline" aria-hidden="true">
                        {"schedule"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Stacks & Queues"}
                        </span>
                        <span className="font-label-sm text-label-sm">
                          {"Planned in 4h sequence"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-[240px] top-[550px] z-20 cursor-pointer opacity-75 hover:opacity-100 transition-opacity">
                    <div className="bg-surface-container-low text-on-surface-variant px-4 py-3 rounded-xl shadow-sm flex items-center gap-3">
                      <span className="material-symbols-outlined text-[1.25rem] text-outline" aria-hidden="true">
                        {"schedule"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Trees & Traversals"}
                        </span>
                        <span className="font-label-sm text-label-sm">
                          {"Upcoming milestone"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="relative z-10 p-space-md flex items-center gap-2 pointer-events-none">
                  <div className="flex items-center bg-surface-container-lowest/90 backdrop-blur-md rounded-lg p-1 shadow-sm pointer-events-auto">
                    <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Zoom In" type="button" aria-label="Zoom In">
                      <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                        {"add"}
                      </span>
                    </button>
                    <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Zoom Out" type="button" aria-label="Zoom Out">
                      <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                        {"remove"}
                      </span>
                    </button>
                    <div className="w-px h-4 bg-surface-container-high mx-1"></div>
                    <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Fit to View" type="button" aria-label="Fit to View">
                      <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                        {"crop_free"}
                      </span>
                    </button>
                    <button className="w-8 h-8 rounded flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Reset Orientation" type="button" aria-label="Reset Orientation">
                      <span className="material-symbols-outlined text-[1.25rem]" aria-hidden="true">
                        {"restart_alt"}
                      </span>
                    </button>
                  </div>
                  <span className="font-code text-code text-on-surface-variant bg-surface-container-lowest/80 px-2.5 py-1 rounded shadow-sm hidden sm:inline-block">
                    {"Scale: 100%"}
                  </span>
                </div>
              </div>
              <div className="hidden flex-1 bg-surface-container-lowest rounded-xl shadow-sm p-space-xl overflow-y-auto" id="list-view-container">
                <div className="flex items-center justify-between pb-space-lg">
                  <div>
                    <h2 className="font-headline-md text-headline-md text-on-surface">
                      {"Curriculum Concept Index"}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {"Hierarchical view of mapped knowledge items and mastery progression."}
                    </p>
                  </div>
                  <div className="flex items-center gap-2">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm" type="button">
                      {"Export Graph (.json)"}
                    </button>
                  </div>
                </div>
                <div className="space-y-space-md">
                  <div className="p-4 rounded-xl bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-[1.5rem]" aria-hidden="true">
                        {"folder_open"}
                      </span>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-headline-sm text-headline-sm font-semibold">
                            {"Data Structures (Root)"}
                          </span>
                          <span className="px-2 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm">
                            {"Domain"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"8 Total nodes · 3 Explored · 1 Actionable"}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-on-surface-variant" aria-hidden="true">
                      {"chevron_right"}
                    </span>
                  </div>
                  <div className="ml-8 p-4 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between hover:bg-surface-container-low transition-colors">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-primary text-[1.25rem]" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm font-medium">
                          {"Linked lists"}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Sequential memory storage connected via pointers"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface">
                        {"Practised"}
                      </span>
                      <button className="text-primary font-label-sm text-label-sm hover:underline" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Inspect"}
                      </button>
                    </div>
                  </div>
                  <div className="ml-16 p-4 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between ring-2 ring-primary">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-error text-[1.25rem]" aria-hidden="true">
                        {"warning"}
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          {"Insertion at the beginning"}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Teach-back incomplete · Head pointer reconnection required"}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-error-container text-on-error-container font-semibold">
                        {"Needs review"}
                      </span>
                      <button className="px-3 py-1 bg-primary text-on-primary rounded font-label-sm text-label-sm" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Focus Target"}
                      </button>
                    </div>
                  </div>
                  <div className="ml-16 p-4 rounded-xl bg-surface-container-lowest shadow-sm flex items-center justify-between opacity-80">
                    <div className="flex items-center gap-4">
                      <span className="material-symbols-outlined text-outline text-[1.25rem]" aria-hidden="true">
                        {"radio_button_unchecked"}
                      </span>
                      <div>
                        <span className="font-headline-sm text-headline-sm font-medium text-on-surface">
                          {"Head reference"}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Specialized reference pointing directly to memory origin"}
                        </p>
                      </div>
                    </div>
                    <span className="font-label-sm text-label-sm px-2.5 py-1 rounded bg-surface-container text-on-surface">
                      {"Practised"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="hidden flex-1 bg-surface-container-lowest rounded-xl shadow-sm p-space-2xl flex flex-col items-center justify-center text-center" id="empty-state-container">
                <div className="w-16 h-16 rounded-full bg-surface-container flex items-center justify-center mb-space-md">
                  <span className="material-symbols-outlined text-[2rem] text-on-surface-variant" aria-hidden="true">
                    {"hub"}
                  </span>
                </div>
                <h3 className="font-headline-md text-headline-md text-on-surface mb-2">
                  {"No Knowledge Nodes Formed Yet"}
                </h3>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-md mb-space-lg">
                  {"\n          Start a learning dialogue with SOLVE or start a study plan to generate your interactive concept network.\n        "}
                </p>
                <div className="flex items-center gap-3">
                  <button className="bg-primary text-on-primary px-5 py-2.5 rounded-xl font-label-md text-label-md font-medium hover:bg-primary-container transition-colors" type="button">
                    {"Start Mentor Discussion"}
                  </button>
                  <button className="bg-surface-container text-on-surface px-4 py-2.5 rounded-xl font-label-md text-label-md font-medium hover:bg-surface-container-high transition-colors" type="button">
                    {"Explore Sample Graph"}
                  </button>
                </div>
              </div>
              <aside className="w-80 lg:w-96 bg-surface-container-lowest rounded-xl shadow-sm p-space-lg flex flex-col justify-between overflow-y-auto" id="node-details-drawer">
                <div className="flex flex-col gap-space-lg">
                  <div className="flex items-center justify-between pb-space-sm">
                    <span className="font-code text-code font-semibold tracking-wider text-on-surface-variant">
                      {"CONCEPT DETAILS"}
                    </span>
                    <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Close Details" type="button" aria-label="Close Details">
                      <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                        {"close"}
                      </span>
                    </button>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                        {"Active Thread Node"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"#DS-041"}
                      </span>
                    </div>
                    <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold leading-tight" id="drawer-title">
                      {"Insertion at the beginning"}
                    </h2>
                    <div className="flex items-center gap-1.5 text-on-surface-variant font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                        {"forum"}
                      </span>
                      <span>
                        {"Chat · Data Structures mid preparation"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-low p-3.5 rounded-lg">
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed" id="drawer-description">
                      {"\n              Adding a new first node while keeping the existing singly linked list connected without mutating subsequent pointers.\n            "}
                    </p>
                  </div>
                  <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-2.5" id="drawer-status-card">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold text-error flex items-center gap-1">
                        <span className="material-symbols-outlined text-[1rem]" aria-hidden="true">
                          {"error_outline"}
                        </span>
                        <span>
                          {"Needs review · Teach-back incomplete"}
                        </span>
                      </span>
                      <span className="font-code text-code text-on-surface-variant">
                        {"Step 3/4"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-normal">
                      {"\n              Your explanation correctly identified connecting the new node to the first node, but missed updating the head pointer variable to reference the new node.\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <button className="w-full h-11 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2 shadow-sm" type="button">
                      <span>
                        {"Practise this concept"}
                      </span>
                      <span className="material-symbols-outlined text-[1.125rem]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                    <div className="grid grid-cols-2 gap-2">
                      <button className="py-2 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium transition-colors text-center" type="button">
                        {"\n                Open explanation\n              "}
                      </button>
                      <button className="py-2 px-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium transition-colors flex items-center justify-center gap-1" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span>
                          {"Evidence (3)"}
                        </span>
                        <span className="material-symbols-outlined text-[1rem]" id="evidence-chevron" aria-hidden="true">
                          {"expand_more"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-2" id="evidence-section">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm font-semibold tracking-wide text-on-surface-variant uppercase">
                        {"Evidence History"}
                      </span>
                      <span className="font-code text-code text-on-surface-variant">
                        {"Today 14:22"}
                      </span>
                    </div>
                    <div className="space-y-2.5">
                      <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm font-medium text-on-surface">
                            {"1. Guided Workspace (Steps 1–3)"}
                          </span>
                          <span className="material-symbols-outlined text-[0.875rem] text-primary" aria-hidden="true">
                            {"check_circle"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Read analogy & completed visual pointer memory trace."}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm font-medium text-on-surface">
                            {"2. Practice Question #1 (MCQ)"}
                          </span>
                          <span className="material-symbols-outlined text-[0.875rem] text-primary" aria-hidden="true">
                            {"check_circle"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Answered correctly on first attempt (Time: 38s)."}
                        </p>
                      </div>
                      <div className="p-3 rounded-lg bg-surface-container-low flex flex-col gap-1 ring-1 ring-error/30">
                        <div className="flex items-center justify-between">
                          <span className="font-label-sm text-label-sm font-medium text-error">
                            {"3. Teach-Back Verification"}
                          </span>
                          <span className="material-symbols-outlined text-[0.875rem] text-error" aria-hidden="true">
                            {"report_problem"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Explanation prompt skipped head re-assignment instruction."}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-2 pb-4">
                    <span className="font-label-sm text-label-sm font-semibold tracking-wide text-on-surface-variant uppercase">
                      {"Related Concepts"}
                    </span>
                    <div className="flex flex-col gap-2">
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low cursor-pointer transition-colors" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
                            {"arrow_upward"}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-medium">
                              {"Nodes and references"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Pre-requisite · Explored"}
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
                          {"arrow_forward_ios"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-lowest shadow-sm hover:bg-surface-container-low cursor-pointer transition-colors" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                        <div className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
                            {"subdirectory_arrow_right"}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md text-on-surface font-medium">
                              {"Head reference"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Used in · Explored"}
                            </span>
                          </div>
                        </div>
                        <span className="material-symbols-outlined text-[1rem] text-on-surface-variant" aria-hidden="true">
                          {"arrow_forward_ios"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    {"AI Mentor suggestion available"}
                  </span>
                  <button className="text-primary font-medium hover:underline" type="button">
                    {"Ask follow-up"}
                  </button>
                </div>
              </aside>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
