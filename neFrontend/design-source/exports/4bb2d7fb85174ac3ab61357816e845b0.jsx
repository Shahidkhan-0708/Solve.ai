'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/4bb2d7fb85174ac3ab61357816e845b0';
import './4bb2d7fb85174ac3ab61357816e845b0.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-4bb2d7fb85174ac3ab61357816e845b0 bg-surface font-body-md text-on-surface antialiased" data-screen-id="4bb2d7fb85174ac3ab61357816e845b0">
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-lg flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"school"}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
              {"SOLVE"}
            </span>
          </div>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
            {"v2.4"}
          </span>
        </div>
        <div className="px-space-md py-space-xs">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full bg-surface-container-lowest rounded-lg pl-9 pr-space-md py-2 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search sessions, topics..." type="text" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-space-md py-space-sm flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="px-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
              {"Destinations"}
            </span>
            <nav className="flex flex-col gap-1" data-active-classes="bg-primary text-on-primary font-medium rounded-lg">
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="target-status" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"flag"}
                </span>
                {"Target Status"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="learning-strategy" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"alt_route"}
                </span>
                {"My Plan & Strategy"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="knowledge-graph" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"hub"}
                </span>
                {"Knowledge Graph"}
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between px-3">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                {"Recent Sessions"}
              </span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer hover:text-on-surface" aria-hidden="true">
                {"add"}
              </span>
            </div>
            <nav className="flex flex-col gap-1" data-active-classes="bg-surface-container-high text-on-surface font-medium rounded-lg">
              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="chat-session" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"chat_bubble"}
                  </span>
                  <span className="truncate">
                    {"Calculus III Vector Fields"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"2h"}
                </span>
              </a>
              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="study-workspace" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"menu_book"}
                  </span>
                  <span className="truncate">
                    {"Quantum Mechanics Module"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"1d"}
                </span>
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="session-history" href="#">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"history"}
                </span>
                <span className="truncate">
                  {"All Past Sessions"}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-low flex flex-col gap-1">
        <nav className="flex flex-col gap-1" data-active-classes="bg-surface-container-high text-on-surface font-medium rounded-lg">
          <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="settings" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"tune"}
            </span>
            {"Workspace Settings"}
          </a>
        </nav>
        <div className="pt-space-xs mt-space-xs flex items-center justify-between px-2">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"person"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-medium text-on-surface leading-none">
                {"Alex Rivera"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                {"Mentor AI Active"}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer hover:text-on-surface" aria-hidden="true">
            {"more_vert"}
          </span>
        </div>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
        <div className="flex items-center">
          <nav className="p-1 bg-surface-container-high rounded-xl flex items-center gap-1" data-active-classes="bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-medium">
            <a className="flex items-center gap-2 px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md" data-path="chat-session" href="#">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {"Chat Mode"}
            </a>
            <a className="flex items-center gap-2 px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md" data-path="study-workspace" href="#">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {"Study Mode"}
              <span className="ml-1 font-label-sm text-label-sm px-1.5 py-0.2 rounded-full bg-secondary-container text-on-secondary-fixed font-medium">
                {"Live"}
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
              {"timer"}
            </span>
            <span>
              {"Goal: 45m left"}
            </span>
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"notifications"}
            </span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"help_outline"}
            </span>
          </button>
        </div>
      </header>
      <main className="relative pt-16 bg-surface w-full min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full bg-surface-container-lowest border-b border-surface-container py-3 px-space-lg">
            <div className="max-w-[740px] mx-auto flex items-center justify-between text-body-sm">
              <div className="flex items-center gap-space-sm min-w-0">
                <a className="flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-label-md transition-colors group" href="#">
                  <span className="material-symbols-outlined text-[16px] group-hover:-translate-x-0.5 transition-transform" aria-hidden="true">
                    {"arrow_back"}
                  </span>
                  <span>
                    {"Back to lesson "}
                    <span className="text-on-surface font-medium">
                      {"(Linked lists)"}
                    </span>
                  </span>
                </a>
                <span className="text-surface-dim">
                  {"/"}
                </span>
                <div className="flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm">
                  <span className="w-1.5 h-1.5 rounded-full bg-secondary"></span>
                  <span>
                    {"Chat · Data Structures mid prep"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="font-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  {"Practice & Teach-Back"}
                </span>
                <span className="px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface text-label-sm font-medium">
                  {"Step 2 of 7"}
                </span>
              </div>
            </div>
          </div>
          <div className="w-full bg-surface border-b border-surface-container py-2.5 px-space-lg sticky top-16 z-30 backdrop-blur-md bg-surface/90">
            <div className="max-w-[740px] mx-auto flex flex-col gap-1.5">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-on-surface-variant font-medium uppercase tracking-wider text-[11px]">
                  {"Workspace State Simulator"}
                </span>
                <span className="font-label-sm text-secondary text-[11px]" id="current-state-label">
                  {"State 1 of 8: Question (Unanswered)"}
                </span>
              </div>
              <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-1">
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-primary text-on-primary font-medium shadow-sm" id="tab-btn-1" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"1. Unanswered"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-2" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"2. Correct"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-3" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"3. Incorrect"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-4" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"4. Hint Active"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-5" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"5. Teach-Back Prompt"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-6" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"6. AI Evaluation"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-7" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"7. Chat Summary"}
                </button>
                <button className="state-tab-btn px-2.5 py-1 rounded-md text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface" id="tab-btn-8" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"8. Study Comparison"}
                </button>
              </div>
            </div>
          </div>
          <div className="w-full px-4 py-8 flex flex-col items-center">
            <div className="w-full max-w-[740px] flex flex-col gap-6">
              <section className="state-panel flex flex-col gap-6" id="state-1">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      {"Practise linked lists"}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {"Question 1 of 3"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full transition-all duration-300" style={{"width":"33.33%"}}></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4">
                    <h1 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-snug">
                      {"\n              You want to insert a new node at the beginning of a singly linked list. What should the new node’s "}
                      <code className="font-code text-code bg-surface-container px-1.5 py-0.5 rounded text-on-surface">
                        {"Next"}
                      </code>
                      {" reference point to?\n            "}
                    </h1>
                    <span className="shrink-0 font-code text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant mt-1">
                      {"SinglyLinked#01"}
                    </span>
                  </div>
                  <div className="p-3.5 bg-surface-container-low rounded-lg flex items-center justify-center gap-3 overflow-x-auto text-body-sm font-code">
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest rounded shadow-xs border border-surface-container-high text-on-surface">
                      <span className="text-secondary text-[11px]">
                        {"New:"}
                      </span>
                      <span className="font-medium">
                        {"[ Data | Next → ? ]"}
                      </span>
                    </div>
                    <span className="text-secondary font-sans text-xs">
                      {"connects to"}
                    </span>
                    <div className="flex items-center gap-1.5 px-3 py-1.5 bg-surface-container-lowest rounded shadow-xs border border-surface-container-high text-on-surface">
                      <span className="text-secondary text-[11px]">
                        {"Head:"}
                      </span>
                      <span className="font-medium">
                        {"[ A | Next → B ]"}
                      </span>
                    </div>
                  </div>
                  <div aria-label="Question options" className="flex flex-col gap-2.5" role="radiogroup">
                    <label className="group flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container cursor-pointer transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                      <div className="flex items-center gap-3">
                        <input className="w-4 h-4 text-primary focus:ring-0 accent-primary cursor-pointer" id="opt-a" name="q1_options" type="radio" />
                        <span className="font-body-md text-on-surface">
                          {"The current head node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface-variant font-code text-xs px-2 py-0.5 bg-surface-container rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {"A"}
                      </span>
                    </label>
                    <label className="group flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container cursor-pointer transition-colors" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                      <div className="flex items-center gap-3">
                        <input className="w-4 h-4 text-primary focus:ring-0 accent-primary cursor-pointer" id="opt-b" name="q1_options" type="radio" />
                        <span className="font-body-md text-on-surface">
                          {"The last node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface-variant font-code text-xs px-2 py-0.5 bg-surface-container rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {"B"}
                      </span>
                    </label>
                    <label className="group flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container cursor-pointer transition-colors" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                      <div className="flex items-center gap-3">
                        <input className="w-4 h-4 text-primary focus:ring-0 accent-primary cursor-pointer" id="opt-c" name="q1_options" type="radio" />
                        <span className="font-body-md text-on-surface">
                          {"The new node itself"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface-variant font-code text-xs px-2 py-0.5 bg-surface-container rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {"C"}
                      </span>
                    </label>
                    <label className="group flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container cursor-pointer transition-colors" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                      <div className="flex items-center gap-3">
                        <input className="w-4 h-4 text-primary focus:ring-0 accent-primary cursor-pointer" id="opt-d" name="q1_options" type="radio" />
                        <span className="font-body-md text-on-surface">
                          {"Always null"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface-variant font-code text-xs px-2 py-0.5 bg-surface-container rounded opacity-0 group-hover:opacity-100 transition-opacity">
                        {"D"}
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-label-md" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"lightbulb"}
                        </span>
                        <span>
                          {"Show a hint"}
                        </span>
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors font-label-md" type="button">
                        {"\n                Not sure\n              "}
                      </button>
                    </div>
                    <button className="px-5 py-2.5 rounded-xl bg-surface-container-highest text-secondary cursor-not-allowed font-label-md transition-all" id="check-btn" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Check answer\n            "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-2">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      {"Practise linked lists"}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {"Question 1 of 3"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{"width":"33.33%"}}></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col gap-5">
                  <div className="flex items-start justify-between gap-4 opacity-75">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-snug">
                      {"\n              You want to insert a new node at the beginning of a singly linked list. What should the new node’s "}
                      <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                        {"Next"}
                      </code>
                      {" reference point to?\n            "}
                    </h2>
                  </div>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-low border border-primary text-on-surface font-medium">
                      <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-primary flex items-center justify-center">
                          <span className="material-symbols-outlined text-on-primary text-[12px]" aria-hidden="true">
                            {"check"}
                          </span>
                        </span>
                        <span className="font-body-md text-on-surface">
                          {"The current head node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface font-medium">
                        {"Your selection"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-surface-container opacity-40">
                      <span className="font-body-md text-on-surface-variant">
                        {"The last node"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-surface-container opacity-40">
                      <span className="font-body-md text-on-surface-variant">
                        {"The new node itself"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-surface-container opacity-40">
                      <span className="font-body-md text-on-surface-variant">
                        {"Always null"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-primary flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"That’s right."}
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface leading-relaxed pl-7">
                      {"\n              The new node points to the current head so the existing chain stays connected. Then "}
                      <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                        {"head"}
                      </code>
                      {" can be safely updated to point to the new node.\n            "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-label-md flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"psychology"}
                      </span>
                      <span>
                        {"Explain this step"}
                      </span>
                    </button>
                    <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md flex items-center gap-2 shadow-sm" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Next question"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-3">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      {"Practise linked lists"}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {"Question 1 of 3"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{"width":"33.33%"}}></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col gap-5">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-snug">
                    {"\n            You want to insert a new node at the beginning of a singly linked list. What should the new node’s "}
                    <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                      {"Next"}
                    </code>
                    {" reference point to?\n          "}
                  </h2>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-low border border-dashed border-secondary text-on-surface">
                      <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full border border-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-secondary text-[12px]" aria-hidden="true">
                            {"check"}
                          </span>
                        </span>
                        <span className="font-body-md text-on-surface font-medium">
                          {"The current head node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-secondary">
                        {"Target connection"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-high/60 border border-secondary-fixed-dim text-on-surface">
                      <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-secondary text-on-secondary flex items-center justify-center">
                          <span className="material-symbols-outlined text-[12px]" aria-hidden="true">
                            {"close"}
                          </span>
                        </span>
                        <span className="font-body-md text-on-surface line-through text-on-surface-variant">
                          {"The last node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-secondary font-medium">
                        {"Selected"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-surface-container opacity-40">
                      <span className="font-body-md text-on-surface-variant">
                        {"The new node itself"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-lowest border border-surface-container opacity-40">
                      <span className="font-body-md text-on-surface-variant">
                        {"Always null"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border-l-4 border-secondary flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                        {"alt_route"}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"Let’s look at the connection."}
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface leading-relaxed pl-7">
                      {"\n              If the new node points to the last node, the existing nodes in the middle remain detached and unreachable from head. Start by connecting the new node to the current head so no data is orphaned.\n            "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-label-md flex items-center gap-1.5" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"menu_book"}
                      </span>
                      <span>
                        {"Review the example"}
                      </span>
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Try a similar question\n              "}
                      </button>
                      <button className="px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Proceed\n              "}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-4">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      {"Practise linked lists"}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {"Question 1 of 3"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{"width":"33.33%"}}></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col gap-5">
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-snug">
                    {"\n            You want to insert a new node at the beginning of a singly linked list. What should the new node’s "}
                    <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                      {"Next"}
                    </code>
                    {" reference point to?\n          "}
                  </h2>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-on-surface" aria-hidden="true">
                          {"lightbulb"}
                        </span>
                        <span className="font-label-md text-on-surface font-semibold">
                          {"Contextual Hint"}
                        </span>
                      </div>
                      <span className="font-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                        {"Assisted Practice · No score deduction"}
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface pl-6">
                      {"\n              The new node needs to maintain an active pointer to the rest of the list before you overwrite the head reference. Ask: what holds the start of the list right now?\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-2.5">
                    <label className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <input defaultChecked className="w-4 h-4 text-primary accent-primary" name="q4_opts" type="radio" />
                        <span className="font-body-md text-on-surface font-medium">
                          {"The current head node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface-variant font-code text-xs px-2 py-0.5 bg-surface-container rounded">
                        {"A"}
                      </span>
                    </label>
                    <label className="flex items-center justify-between p-3.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container-low border border-surface-container cursor-pointer transition-colors">
                      <div className="flex items-center gap-3">
                        <input className="w-4 h-4 text-primary accent-primary" name="q4_opts" type="radio" />
                        <span className="font-body-md text-on-surface">
                          {"The last node"}
                        </span>
                      </div>
                      <span className="font-label-sm text-on-surface-variant font-code text-xs px-2 py-0.5 bg-surface-container rounded">
                        {"B"}
                      </span>
                    </label>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Hide hint\n            "}
                    </button>
                    <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md shadow-sm" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Check answer\n            "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-5">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      {"Teach-Back Verification"}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {"Activity 2 of 3"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{"width":"66.6%"}}></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col gap-5">
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-label-sm uppercase tracking-wider text-secondary font-medium">
                        {"Feynman Technique"}
                      </span>
                      <span className="w-1 h-1 rounded-full bg-surface-dim"></span>
                      <span className="font-label-sm text-secondary">
                        {"Active Recall"}
                      </span>
                    </div>
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold">
                      {"\n              Explain it in your own words\n            "}
                    </h2>
                    <p className="font-body-md text-on-surface-variant mt-1.5">
                      {"\n              How would you add a node at the beginning of a linked list, and why does the order of the steps matter?\n            "}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-b border-surface-container pb-3">
                    <div className="inline-flex p-1 bg-surface-container-high rounded-lg">
                      <button className="px-3 py-1 text-label-md font-medium rounded-md bg-surface-container-lowest text-on-surface shadow-xs transition-all flex items-center gap-1.5" id="mode-type-btn" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"edit_note"}
                        </span>
                        <span>
                          {"Type"}
                        </span>
                      </button>
                      <button className="px-3 py-1 text-label-md font-medium rounded-md text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1.5" id="mode-speak-btn" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"mic"}
                        </span>
                        <span>
                          {"Speak"}
                        </span>
                      </button>
                    </div>
                    <span className="font-label-sm text-secondary">
                      {"A short explanation (2–3 sentences) is enough."}
                    </span>
                  </div>
                  <div className="flex flex-col gap-3" id="teach-type-container">
                    <div className="relative">
                      <textarea className="w-full p-4 rounded-xl bg-surface-container-low border border-surface-container text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary focus:bg-surface-container-lowest transition-all" id="teach-textarea" placeholder="First, I would point the new node's next pointer to the current head, and then..." rows="4"></textarea>
                      <span className="absolute right-3 bottom-3 font-code text-[11px] text-secondary">
                        {"Draft saved"}
                      </span>
                    </div>
                  </div>
                  <div className="hidden flex flex-col gap-4" id="teach-speak-container">
                    <div className="p-5 rounded-xl bg-surface-container-low border border-surface-container flex flex-col items-center justify-center gap-4 text-center">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                        <span className="font-code text-body-sm font-medium text-on-surface">
                          {"Recording: 0:24"}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 h-8">
                        <span className="w-1 bg-primary rounded-full h-2 animate-pulse"></span>
                        <span className="w-1 bg-primary rounded-full h-5"></span>
                        <span className="w-1 bg-primary rounded-full h-7 animate-pulse"></span>
                        <span className="w-1 bg-primary rounded-full h-3"></span>
                        <span className="w-1 bg-primary rounded-full h-6 animate-pulse"></span>
                        <span className="w-1 bg-primary rounded-full h-4"></span>
                        <span className="w-1 bg-primary rounded-full h-8 animate-pulse"></span>
                        <span className="w-1 bg-primary rounded-full h-5"></span>
                        <span className="w-1 bg-primary rounded-full h-2"></span>
                      </div>
                      <div className="w-full text-left p-3 rounded-lg bg-surface-container-lowest border border-surface-container">
                        <span className="font-label-sm text-secondary block mb-1">
                          {"Live Transcript (Editable):"}
                        </span>
                        <p className="font-body-md text-on-surface">
                          {"\n                  \"First, I connect the new node to whatever node head is currently pointing to so we do not lose our pointer to the rest of the list...\"\n                "}
                        </p>
                      </div>
                      <div className="flex items-center gap-3">
                        <button className="px-4 py-1.5 rounded-lg text-secondary hover:text-on-surface font-label-md" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Cancel"}
                        </button>
                        <button className="px-4 py-1.5 rounded-lg bg-surface-container-high text-on-surface hover:bg-surface-container-highest font-label-md flex items-center gap-1.5" type="button">
                          <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                            {"stop"}
                          </span>
                          <span>
                            {"Stop & Review"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <span className="font-label-sm text-secondary">
                      {"Evaluated by Mentor AI using structural accuracy rubric"}
                    </span>
                    <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md flex items-center gap-2 shadow-sm" onClick={event => { const result = actions.current[22]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Get feedback"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-6">
                <div className="flex flex-col gap-2">
                  <div className="flex items-center justify-between font-label-sm">
                    <span className="text-on-surface-variant font-medium">
                      {"Teach-Back Verification"}
                    </span>
                    <span className="text-on-surface font-semibold">
                      {"Evaluation Results"}
                    </span>
                  </div>
                  <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden flex">
                    <div className="h-full bg-primary rounded-full" style={{"width":"66.6%"}}></div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-6 shadow-sm border border-surface-container flex flex-col gap-6">
                  <div className="flex items-center justify-between">
                    <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"\n              Feedback on your explanation\n            "}
                    </h2>
                    <span className="font-label-sm px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-medium">
                      {"Conceptually Sound (85%)"}
                    </span>
                  </div>
                  <div className="p-3.5 rounded-lg bg-surface-container-low border-l-2 border-secondary">
                    <span className="font-label-sm text-secondary uppercase tracking-wider text-[11px] block mb-1">
                      {"Your response:"}
                    </span>
                    <p className="font-body-md text-on-surface italic">
                      {"\n              \"I would point the new node’s next pointer to the current head node so we do not lose the rest of the list. That preserves the chain.\"\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex gap-3.5">
                      <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-label-md text-on-surface font-semibold">
                          {"What you explained well"}
                        </span>
                        <p className="font-body-md text-on-surface-variant">
                          {"\n                  You correctly identified the critical first step: connecting the new node to the existing first node before doing anything else.\n                "}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex gap-3.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                        {"add_task"}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-label-md text-on-surface font-semibold">
                          {"One step to add"}
                        </span>
                        <p className="font-body-md text-on-surface-variant">
                          {"\n                  After setting that link, explicitly update the "}
                          <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                            {"head"}
                          </code>
                          {" variable itself to point to the new node ("}
                          <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                            {"head = newNode"}
                          </code>
                          {").\n                "}
                        </p>
                      </div>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex gap-3.5">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                        {"info"}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-label-md text-on-surface font-semibold">
                          {"Why it matters"}
                        </span>
                        <p className="font-body-md text-on-surface-variant">
                          {"\n                  Without reassigning "}
                          <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                            {"head"}
                          </code>
                          {", any future traversal or search operation still begins at the old first node, leaving your new node disconnected from the program’s entry point.\n                "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <div className="flex items-center gap-2">
                      <button className="px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-label-md" onClick={event => { const result = actions.current[23]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Try explaining again\n              "}
                      </button>
                      <button className="px-3 py-1.5 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors font-label-md" type="button">
                        {"\n                Review the example\n              "}
                      </button>
                    </div>
                    <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md flex items-center gap-2 shadow-sm" onClick={event => { const result = actions.current[24]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Continue learning"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-7">
                <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-surface-container flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-secondary uppercase tracking-wider font-medium">
                        {"Session Complete"}
                      </span>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">
                        {"\n                Practice complete\n              "}
                      </h2>
                      <p className="font-body-md text-on-surface-variant">
                        {"\n                Context: Chat · Data Structures mid preparation\n              "}
                      </p>
                    </div>
                    <span className="material-symbols-outlined text-[32px] text-primary" aria-hidden="true">
                      {"task_alt"}
                    </span>
                  </div>
                  <div className="grid grid-cols-3 gap-3">
                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-1">
                      <span className="font-display text-[2rem] leading-none font-semibold text-on-surface">
                        {"3"}
                      </span>
                      <span className="font-label-sm text-on-surface-variant">
                        {"Questions attempted"}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-1">
                      <span className="font-display text-[2rem] leading-none font-semibold text-on-surface">
                        {"2"}
                      </span>
                      <span className="font-label-sm text-on-surface-variant">
                        {"Correct on 1st attempt"}
                      </span>
                    </div>
                    <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-1">
                      <span className="font-display text-[2rem] leading-none font-semibold text-on-surface">
                        {"1"}
                      </span>
                      <span className="font-label-sm text-on-surface-variant">
                        {"Completed with support"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-2">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                        {"update"}
                      </span>
                      <span className="font-label-md text-on-surface font-semibold">
                        {"Worth revisiting before your exam"}
                      </span>
                    </div>
                    <p className="font-body-md text-on-surface-variant pl-6">
                      {"\n              Updating the "}
                      <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                        {"head"}
                      </code>
                      {" pointer after linking the new node. You understood the connection order, but skipped the pointer reassignment step during teach-back.\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-3 pt-2 border-t border-surface-container">
                    <div className="flex items-center justify-between">
                      <button className="px-4 py-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors font-label-md" type="button">
                        {"\n                Review this topic\n              "}
                      </button>
                      <button className="px-6 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md flex items-center gap-2 shadow-sm" onClick={event => { const result = actions.current[25]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span>
                          {"Continue preparation"}
                        </span>
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"arrow_forward"}
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-2 text-label-sm text-secondary justify-center pt-1">
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        {"lock_clock"}
                      </span>
                      <span>
                        {"Saved to Data Structures mid prep. Chat results do not affect formal Study mode curriculum metrics."}
                      </span>
                    </div>
                  </div>
                </div>
              </section>
              <section className="state-panel hidden flex flex-col gap-6" id="state-8">
                <div className="p-3.5 rounded-xl bg-surface-container-high border border-surface-container flex items-center justify-between text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-on-surface text-[18px]" aria-hidden="true">
                      {"compare_arrows"}
                    </span>
                    <span className="text-on-surface font-medium">
                      {"Design Comparison: Study Mode Completion"}
                    </span>
                  </div>
                  <span className="text-label-sm text-secondary font-code">
                    {"Curriculum Track Mode"}
                  </span>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-7 shadow-sm border border-surface-container flex flex-col gap-6">
                  <div className="flex items-start justify-between">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-primary"></span>
                        <span className="font-label-sm text-on-surface font-medium uppercase tracking-wider">
                          {"Formal Study Track"}
                        </span>
                      </div>
                      <h2 className="font-headline-lg text-headline-lg text-on-surface font-semibold">
                        {"\n                Milestone 2.3 Verified\n              "}
                      </h2>
                      <p className="font-body-md text-on-surface-variant">
                        {"\n                Curriculum: Python Foundations · Generators & Iteration Protocol\n              "}
                      </p>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center">
                      <span className="material-symbols-outlined text-[24px] text-on-surface" aria-hidden="true">
                        {"verified"}
                      </span>
                    </div>
                  </div>
                  <div className="p-4 rounded-xl bg-surface-container-low border border-surface-container flex flex-col gap-3">
                    <div className="flex items-center justify-between font-label-md">
                      <span className="text-on-surface font-medium">
                        {"Track Mastery Progression"}
                      </span>
                      <span className="font-code text-on-surface font-medium">
                        {"78% Complete"}
                      </span>
                    </div>
                    <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
                      <div className="h-full bg-primary rounded-full" style={{"width":"78%"}}></div>
                    </div>
                    <div className="flex items-center justify-between font-label-sm text-secondary">
                      <span>
                        {"Next scheduled review: Tomorrow, 10:00 AM"}
                      </span>
                      <span>
                        {"Spaced repetition active"}
                      </span>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-2 border-t border-surface-container">
                    <button className="px-4 py-2 rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors font-label-md" onClick={event => { const result = actions.current[26]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              ← Return to Chat Practice\n            "}
                    </button>
                    <div className="flex items-center gap-2">
                      <button className="px-4 py-2 rounded-xl bg-surface-container-high text-on-surface hover:bg-surface-container-highest transition-colors font-label-md" type="button">
                        {"\n                Plan spaced revision\n              "}
                      </button>
                      <button className="px-5 py-2.5 rounded-xl bg-primary text-on-primary hover:bg-neutral-800 transition-colors font-label-md shadow-sm" type="button">
                        {"\n                Next Module: Coroutines →\n              "}
                      </button>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
