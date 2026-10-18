'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/b893ca7f0ddb475ab04ed32d9a205271';
import './b893ca7f0ddb475ab04ed32d9a205271.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-b893ca7f0ddb475ab04ed32d9a205271 bg-surface font-body-md text-on-surface antialiased" data-screen-id="b893ca7f0ddb475ab04ed32d9a205271">
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
              <a aria-current="page" className="flex items-center justify-between px-3 py-2 transition-all bg-surface-container-high text-on-surface font-medium rounded-lg" data-path="chat-session" href="#">
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
            <a aria-current="page" className="flex items-center gap-2 px-space-md py-1.5 rounded-lg transition-all bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-medium" data-path="chat-session" href="#">
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
        <div className="flex flex-col w-full font-body-md text-on-surface">
          <div className="w-full flex flex-col">
            <section className="w-full bg-surface-container-lowest px-space-xl py-space-md shadow-sm">
              <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex flex-col gap-1 min-w-0">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-code text-code text-on-surface-variant uppercase tracking-widest">
                      {"Chat Workspace // Task Context"}
                    </span>
                    <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface font-medium">
                      {"Exam Prep Mode"}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm flex-wrap">
                    <h1 className="font-headline-md text-headline-md font-semibold text-on-surface tracking-tight">
                      {"Data Structures mid preparation"}
                    </h1>
                    <button className="flex items-center gap-1 font-label-md text-label-md px-2.5 py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface transition-all" type="button">
                      <span>
                        {"View 4-Hour Exam Sequence · Step 2 of 7 Active"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-2 flex-wrap">
                  <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="font-medium">
                      {"Target: Pass"}
                    </span>
                    <span className="text-on-surface-variant">
                      {"· Tomorrow 10:00 AM"}
                    </span>
                  </div>
                  <div className="hidden lg:flex items-center gap-1 px-3 py-1.5 rounded-lg bg-surface-container-low font-label-sm text-label-sm text-on-surface-variant">
                    <span>
                      {"Linked Lists, Stacks, Trees"}
                    </span>
                  </div>
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:opacity-90 transition-opacity" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"tune"}
                    </span>
                    <span>
                      {"Adjust Scope"}
                    </span>
                  </button>
                </div>
              </div>
            </section>
            <div className="w-full max-w-7xl mx-auto px-space-md md:px-space-xl py-space-lg grid grid-cols-1 lg:grid-cols-12 gap-space-xl">
              <main className="lg:col-span-8 flex flex-col gap-space-lg">
                <div className="flex flex-col gap-space-xl pb-32">
                  <div className="flex items-center justify-center">
                    <span className="font-code text-code px-3 py-1 rounded-full bg-surface-container text-on-surface-variant flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        {"psychology"}
                      </span>
                      {"\n              Socratic Active Recall Initiated · Midterm Sequence\n            "}
                    </span>
                  </div>
                  <div className="flex items-start gap-space-md max-w-2xl ml-auto flex-row-reverse">
                    <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"person"}
                      </span>
                    </div>
                    <div className="flex flex-col items-end gap-1">
                      <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
                        <span>
                          {"Alex Mercer"}
                        </span>
                        <span>
                          {"10:14 AM"}
                        </span>
                      </div>
                      <div className="p-space-md rounded-2xl rounded-tr-xs bg-surface-container text-on-surface font-body-md text-body-md shadow-sm">
                        {"\n                Explain linked lists simply. I get confused about the links and how nodes connect in memory.\n              "}
                      </div>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md max-w-3xl">
                    <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center shrink-0 text-on-primary">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"neurology"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-md w-full">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"SOLVE AI Mentor"}
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant">
                            {"Socratic Mode"}
                          </span>
                        </div>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"10:15 AM"}
                        </span>
                      </div>
                      <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                        <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                          {"\n                  Think of it as a chain of physical nodes rather than a contiguous block like an array. Each node holds exactly two parts: its "}
                          <strong className="font-semibold text-on-surface">
                            {"data payload"}
                          </strong>
                          {" and a "}
                          <strong className="font-semibold text-on-surface">
                            {"reference pointer"}
                          </strong>
                          {" pointing explicitly to where the next node lives in memory.\n                "}
                        </p>
                        <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm overflow-x-auto">
                          <div className="flex items-center justify-between">
                            <span className="font-code text-code uppercase tracking-wider text-on-surface-variant">
                              {"Singly Linked List Memory Map"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Non-contiguous Allocation"}
                            </span>
                          </div>
                          <div className="py-space-md flex items-center justify-center min-w-[540px]">
                            <svg className="w-full max-w-xl text-on-surface" fill="none" viewBox="0 0 540 110" xmlns="http://www.w3.org/2000/svg">
                              <rect className="fill-surface-container-highest" height="34" rx="6" width="55" x="10" y="35"></rect>
                              <text className="font-code text-[11px]" fill="currentColor" fontWeight="600" textAnchor="middle" x="37" y="56">
                                {"HEAD"}
                              </text>
                              <path d="M65 52H95" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                              <path d="M90 48L96 52L90 56" fill="currentColor"></path>
                              <g className="transition-transform duration-200 hover:scale-105 origin-center cursor-pointer">
                                <rect className="fill-surface-container-lowest" height="56" rx="8" width="90" x="98" y="24"></rect>
                                <rect className="fill-surface-container" height="56" rx="8" width="48" x="98" y="24"></rect>
                                <text className="font-code text-[12px] font-bold" fill="currentColor" textAnchor="middle" x="122" y="57">
                                  {"12"}
                                </text>
                                <circle className="fill-on-surface" cx="166" cy="52" r="5"></circle>
                                <text className="font-code text-[9px] opacity-60" fill="currentColor" textAnchor="middle" x="122" y="16">
                                  {"0x004F"}
                                </text>
                              </g>
                              <path d="M171 52H215" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                              <path d="M210 48L216 52L210 56" fill="currentColor"></path>
                              <g className="transition-transform duration-200 hover:scale-105 origin-center cursor-pointer">
                                <rect className="fill-surface-container-lowest" height="56" rx="8" width="90" x="218" y="24"></rect>
                                <rect className="fill-surface-container" height="56" rx="8" width="48" x="218" y="24"></rect>
                                <text className="font-code text-[12px] font-bold" fill="currentColor" textAnchor="middle" x="242" y="57">
                                  {"99"}
                                </text>
                                <circle className="fill-on-surface" cx="286" cy="52" r="5"></circle>
                                <text className="font-code text-[9px] opacity-60" fill="currentColor" textAnchor="middle" x="242" y="16">
                                  {"0x00A1"}
                                </text>
                              </g>
                              <path d="M291 52H335" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                              <path d="M330 48L336 52L330 56" fill="currentColor"></path>
                              <g className="transition-transform duration-200 hover:scale-105 origin-center cursor-pointer">
                                <rect className="fill-surface-container-lowest" height="56" rx="8" width="90" x="338" y="24"></rect>
                                <rect className="fill-surface-container" height="56" rx="8" width="48" x="338" y="24"></rect>
                                <text className="font-code text-[12px] font-bold" fill="currentColor" textAnchor="middle" x="362" y="57">
                                  {"37"}
                                </text>
                                <circle className="fill-on-surface" cx="406" cy="52" r="5"></circle>
                                <text className="font-code text-[9px] opacity-60" fill="currentColor" textAnchor="middle" x="362" y="16">
                                  {"0x00C8"}
                                </text>
                              </g>
                              <path d="M411 52H455" stroke="currentColor" strokeLinecap="round" strokeWidth="2"></path>
                              <path d="M450 48L456 52L450 56" fill="currentColor"></path>
                              <rect className="fill-surface-container-high" height="34" rx="6" width="55" x="458" y="35"></rect>
                              <text className="font-code text-[11px]" fill="currentColor" fontWeight="600" textAnchor="middle" x="485" y="56">
                                {"NULL"}
                              </text>
                            </svg>
                          </div>
                          <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-2">
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-on-surface"></span>
                              {" Data Value\n                    "}
                            </span>
                            <span className="flex items-center gap-1.5">
                              <span className="w-2 h-2 rounded-full bg-secondary"></span>
                              {" Pointer to Next Node\n                    "}
                            </span>
                            <span className="flex items-center gap-1.5 font-code">
                              {"\n                      O(1) insertion at head\n                    "}
                            </span>
                          </div>
                        </div>
                        <p className="font-body-md text-body-md text-on-surface">
                          {"\n                  Notice that "}
                          <code className="font-code text-code px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                            {"0x004F"}
                          </code>
                          {" has no geometric relationship with "}
                          <code className="font-code text-code px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                            {"0x00A1"}
                          </code>
                          {". Unlike array cells that sit side-by-side, linked nodes can wander anywhere in free RAM. The next pointer is your only lifeline.\n                "}
                        </p>
                        <div className="mt-space-xs pt-space-md flex flex-wrap items-center gap-space-sm">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Ready to test comprehension?"}
                          </span>
                          <button className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-neutral-800 transition-colors shadow-sm flex items-center gap-2" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                              {"quiz"}
                            </span>
                            <span>
                              {"Try a practice question"}
                            </span>
                          </button>
                          <button className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            {"\n                    Ask follow-up: Head deletion\n                  "}
                          </button>
                          <button className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            {"\n                    Compare time complexity\n                  "}
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="hidden transition-all duration-300" id="practice-card">
                    <div className="flex items-start gap-space-md max-w-3xl ml-11">
                      <div className="w-full bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                        <div className="flex items-center justify-between">
                          <span className="font-code text-code uppercase tracking-wider text-on-surface-variant">
                            {"Exam Challenge · Question 7 of 15"}
                          </span>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface">
                            {"Moderate"}
                          </span>
                        </div>
                        <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                          {"\n                  What is the worst-case runtime complexity for accessing the "}
                          <em>
                            {"k"}
                          </em>
                          {"-th element of a singly linked list with "}
                          <em>
                            {"n"}
                          </em>
                          {" elements?\n                "}
                        </h2>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
                          <button className="text-left p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors font-body-md text-body-md flex items-center justify-between" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            <span>
                              {"A) O(1) Constant Time"}
                            </span>
                            <span className="font-code text-code text-on-surface-variant">
                              {"#1"}
                            </span>
                          </button>
                          <button className="text-left p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors font-body-md text-body-md flex items-center justify-between" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            <span>
                              {"B) O(n) Linear Traversal"}
                            </span>
                            <span className="font-code text-code text-on-surface-variant">
                              {"#2"}
                            </span>
                          </button>
                          <button className="text-left p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors font-body-md text-body-md flex items-center justify-between" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            <span>
                              {"C) O(log n) Binary Search"}
                            </span>
                            <span className="font-code text-code text-on-surface-variant">
                              {"#3"}
                            </span>
                          </button>
                          <button className="text-left p-3.5 rounded-xl bg-surface-container hover:bg-surface-container-high transition-colors font-body-md text-body-md flex items-center justify-between" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            <span>
                              {"D) O(k · log n)"}
                            </span>
                            <span className="font-code text-code text-on-surface-variant">
                              {"#4"}
                            </span>
                          </button>
                        </div>
                        <div className="hidden p-3 rounded-lg bg-surface-container font-body-sm text-body-sm text-on-surface" id="quiz-feedback"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="fixed bottom-6 left-72 right-0 max-w-4xl mx-auto px-space-md z-30 pointer-events-none">
                  <div className="pointer-events-auto bg-surface-container-lowest rounded-2xl shadow-xl p-2.5 flex flex-col gap-2">
                    <div className="flex items-center gap-2 px-2 pt-1">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Context attached: Data Structures Mid Prep · Linked Lists Step 2"}
                      </span>
                    </div>
                    <div className="flex items-end gap-2 px-1">
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Attach file or code snippet" type="button" aria-label="Attach file or code snippet">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {"add"}
                        </span>
                      </button>
                      <textarea className="w-full bg-transparent resize-none py-2 px-2 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant outline-none max-h-32 focus:ring-0" id="user-input" placeholder="Ask about this topic or step..." rows="1"></textarea>
                      <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Voice Input" type="button" aria-label="Voice Input">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {"mic"}
                        </span>
                      </button>
                      <button className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 shadow-sm" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Send message" type="button" aria-label="Send message">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"arrow_upward"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </main>
              <aside className="lg:col-span-4 flex flex-col gap-space-lg">
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <div className="flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                        {"hub"}
                      </span>
                      <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        {"Chat Scope"}
                      </h2>
                    </div>
                    <div className="flex items-center gap-1">
                      <button className="px-2.5 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium transition-colors" id="tab-graph-btn" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Graph\n              "}
                      </button>
                      <button className="px-2.5 py-1 rounded-lg bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-medium hover:text-on-surface transition-colors" id="tab-status-btn" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Target Status\n              "}
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-md" id="scope-tab-graph">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        {"Concepts Active in Stream"}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Dynamic semantic tracking for Alex's Midterm target"}
                      </p>
                    </div>
                    <div className="flex flex-col gap-2">
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-semibold text-on-surface">
                              {"Singly Linked Lists"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Core Data Structure"}
                            </span>
                          </div>
                        </div>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-medium">
                          {"92% Mastery"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-semibold text-on-surface">
                              {"Head Pointer Reference"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Memory & Pointer Arithmetic"}
                            </span>
                          </div>
                        </div>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-medium">
                          {"68% Mastery"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between hover:bg-surface-container transition-colors cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-semibold text-on-surface">
                              {"Traversal & Bounds"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Null Termination"}
                            </span>
                          </div>
                        </div>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-medium">
                          {"45% Mastery"}
                        </span>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between opacity-60 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="flex items-center gap-2.5">
                          <span className="w-2.5 h-2.5 rounded-full bg-outline-variant"></span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-medium text-on-surface">
                              {"Doubly Linked Lists"}
                            </span>
                            <span className="font-label-sm text-label-sm text-on-surface-variant">
                              {"Upcoming Step 3"}
                            </span>
                          </div>
                        </div>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant">
                          {"Queued"}
                        </span>
                      </div>
                    </div>
                    <div className="p-3 rounded-xl bg-surface-container flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-on-surface" aria-hidden="true">
                          {"account_tree"}
                        </span>
                        <span className="font-label-sm text-label-sm font-medium text-on-surface">
                          {"Open Full Graph Visualizer"}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden="true">
                        {"chevron_right"}
                      </span>
                    </div>
                  </div>
                  <div className="hidden flex flex-col gap-space-md" id="scope-tab-status">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                        {"Exam Readiness Real-time"}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Strict evidence-based metrics only"}
                      </p>
                    </div>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Topics Practised"}
                        </span>
                        <span className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
                          {"3 / 7"}
                        </span>
                        <div className="w-full bg-surface-container-high h-1.5 rounded-full mt-2 overflow-hidden">
                          <div className="bg-primary h-full rounded-full" style={{"width":"42.8%"}}></div>
                        </div>
                      </div>
                      <div className="p-3 rounded-xl bg-surface-container-low flex flex-col">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Accuracy Rate"}
                        </span>
                        <span className="font-headline-md text-headline-md font-semibold text-on-surface mt-1">
                          {"85%"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant mt-1">
                          {"6 attempted"}
                        </span>
                      </div>
                    </div>
                    <div className="p-3.5 rounded-xl bg-surface-container-low flex items-start gap-2.5">
                      <span className="material-symbols-outlined text-[18px] text-on-surface shrink-0 mt-0.5" aria-hidden="true">
                        {"verified_user"}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                          {"0 Pass Probability Fabrication"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant leading-snug">
                          {"\n                  Results calibrated purely from recorded recall checks. SOLVE does not simulate fake confidence gauges.\n                "}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-col gap-1.5">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Target Checklist:"}
                      </span>
                      <div className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                          {"check_circle"}
                        </span>
                        <span>
                          {"Node memory model verified"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                          {"check_circle"}
                        </span>
                        <span>
                          {"Head pointer edge conditions"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm">
                        <span className="material-symbols-outlined text-[16px] text-outline-variant" aria-hidden="true">
                          {"radio_button_unchecked"}
                        </span>
                        <span>
                          {"Recursive reverse traversal"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                      {"Session History Index"}
                    </span>
                    <span className="font-code text-code text-on-surface-variant">
                      {"4 Active"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1.5">
                    <div className="p-2.5 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium flex items-center justify-between">
                      <div className="flex items-center gap-2 truncate">
                        <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                          {"chat_bubble"}
                        </span>
                        <span className="truncate">
                          {"Data Structures mid prep"}
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm px-1.5 py-0.5 rounded bg-surface-container-highest text-on-surface">
                        {"Exam"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2 truncate">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"chat_bubble_outline"}
                        </span>
                        <span className="truncate">
                          {"Explain recursion"}
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Socratic"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2 truncate">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"chat_bubble_outline"}
                        </span>
                        <span className="truncate">
                          {"Help with integration"}
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Calculus"}
                      </span>
                    </div>
                    <div className="p-2.5 rounded-xl hover:bg-surface-container-low text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-colors flex items-center justify-between cursor-pointer">
                      <div className="flex items-center gap-2 truncate">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"chat_bubble_outline"}
                        </span>
                        <span className="truncate">
                          {"Newton's laws intuition"}
                        </span>
                      </div>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Physics"}
                      </span>
                    </div>
                  </div>
                  <div className="pt-2">
                    <div className="relative flex items-center w-full">
                      <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[16px]" aria-hidden="true">
                        {"search"}
                      </span>
                      <input className="w-full bg-surface-container-low rounded-xl pl-9 pr-3 py-1.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none focus:bg-surface-container" id="chat-filter-input" onInput={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} placeholder="Filter dialogue history..." type="text" />
                    </div>
                    <div className="hidden mt-2 p-3 text-center rounded-xl bg-surface-container-low text-on-surface-variant font-body-sm text-body-sm" id="filter-empty-state">
                      {"\n              No matching conversation found.\n            "}
                    </div>
                  </div>
                </div>
              </aside>
            </div>
          </div>
          <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-xs hidden items-center justify-center p-space-md" id="target-status-drawer">
            <div className="bg-surface-container-lowest max-w-lg w-full rounded-2xl shadow-xl p-space-xl flex flex-col gap-space-lg animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-center justify-between pb-space-xs">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
                    {"tune"}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"Adjust Midterm Preparation Scope"}
                  </h3>
                </div>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <div className="flex flex-col gap-space-md">
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm font-medium text-on-surface">
                    {"Target Goal Criterion"}
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button className="p-3 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium text-left" type="button">
                      {"\n              Target: Pass Midterm\n            "}
                    </button>
                    <button className="p-3 rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium text-left hover:bg-surface-container-high" type="button">
                      {"\n              Target: Grade Mastery (A)\n            "}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-1">
                  <label className="font-label-sm text-label-sm font-medium text-on-surface">
                    {"Included Concepts in Dialogue"}
                  </label>
                  <div className="flex flex-col gap-2">
                    <label className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-low cursor-pointer font-body-sm text-body-sm text-on-surface">
                      <input defaultChecked className="w-4 h-4 rounded text-primary bg-surface-container-high border-none" type="checkbox" />
                      <span>
                        {"Singly & Doubly Linked Lists"}
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-low cursor-pointer font-body-sm text-body-sm text-on-surface">
                      <input defaultChecked className="w-4 h-4 rounded text-primary bg-surface-container-high border-none" type="checkbox" />
                      <span>
                        {"Stack Implementations via Linked Lists"}
                      </span>
                    </label>
                    <label className="flex items-center gap-2.5 p-2 rounded-lg hover:bg-surface-container-low cursor-pointer font-body-sm text-body-sm text-on-surface">
                      <input defaultChecked className="w-4 h-4 rounded text-primary bg-surface-container-high border-none" type="checkbox" />
                      <span>
                        {"Binary Search Tree Traversals"}
                      </span>
                    </label>
                  </div>
                </div>
              </div>
              <div className="flex items-center justify-end gap-2 pt-space-xs">
                <button className="px-4 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Cancel\n        "}
                </button>
                <button className="px-4 py-2 rounded-xl bg-primary text-on-primary hover:opacity-90 font-label-md text-label-md font-medium transition-opacity" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Save & Apply Scope\n        "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
