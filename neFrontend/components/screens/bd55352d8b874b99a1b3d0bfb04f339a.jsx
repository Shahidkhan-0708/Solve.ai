'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './bd55352d8b874b99a1b3d0bfb04f339a.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'bd55352d8b874b99a1b3d0bfb04f339a');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-bd55352d8b874b99a1b3d0bfb04f339a bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen" data-screen-id="bd55352d8b874b99a1b3d0bfb04f339a">
    <div className="w-full bg-[#111111] text-[#FFFFFF] py-1.5 px-4 text-center font-code text-[11px] font-medium tracking-wide z-50">
      {"CURRENT — Chat Workspace — Mobile"}
    </div>
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-16 px-gutter flex items-center justify-between border-b border-[#E5E5E5] bg-[#FFFFFF]">
        <div className="flex items-center gap-space-sm">
          <button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"arrow_back"}
            </span>
          </button>
          <div className="flex items-center gap-2">
            <div className="w-6 h-6 rounded bg-[#111111] text-[#FFFFFF] flex items-center justify-center font-bold text-[12px] tracking-tight"><BrandLogo className="stitch-wordmark-mini" /></div>
            <h1 className="font-headline-sm text-headline-sm text-[#111111] font-semibold tracking-tight">
              {"Data Structures mid prep"}
            </h1>
          </div>
        </div>
        <div className="flex items-center gap-space-sm">
          <div className="w-8 h-8 rounded-full bg-[#111111] text-[#FFFFFF] font-semibold text-[12px] flex items-center justify-center" title="Alex Rivera">
            {"AR"}
          </div>
        </div>
      </div>
    </header>
    <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface px-margin">
      <div className="flex flex-col w-full relative">
        <div className="flex flex-col w-full gap-space-md" id="dynamic-viewport">
          <div className="journey-view flex flex-col gap-space-md" id="view-journey-2">
            <div className="flex flex-col items-end self-end max-w-[85%]">
              <div className="bg-primary text-on-primary rounded-2xl rounded-tr-sm px-4 py-3 shadow-sm">
                <p className="font-body-md text-body-md leading-relaxed">
                  {"Can you explain recursion? It always feels like a leap of faith when I write it."}
                </p>
              </div>
              <span className="font-label-sm text-[10px] text-on-surface-variant mt-1 mr-1">
                {"Delivered"}
              </span>
            </div>
            <div className="flex items-start gap-space-sm max-w-full">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex-shrink-0 flex items-center justify-center text-primary mt-1 shadow-sm">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"psychology"}
                </span>
              </div>
              <div className="flex flex-col gap-space-sm flex-1 min-w-0">
                <div className="bg-surface-container-lowest rounded-2xl rounded-tl-sm p-space-md shadow-sm">
                  <p className="font-body-md text-body-md text-on-surface mb-space-sm">
                    {"\n              That feeling of a \"leap of faith\" is completely natural. It happens because we tend to simulate every step in our head all at once.\n            "}
                  </p>
                  <p className="font-body-md text-body-md text-on-surface mb-space-sm">
                    {"\n              Instead, think of recursion as an "}
                    <span className="font-semibold text-primary">
                      {"agreement"}
                    </span>
                    {": solve only the single immediate step in front of you, and trust that a smaller version of the problem is already solved.\n            "}
                  </p>
                  <div className="bg-surface-container-low p-space-sm rounded-lg mb-space-sm">
                    <p className="font-body-md text-body-md italic text-on-surface">
                      {"\n                \"What is the simplest question in this chain that requires no calculation at all?\"\n              "}
                    </p>
                    <p className="font-label-sm text-label-sm text-secondary mt-1">
                      {"That is your Base Case. Everything else is just walking backwards toward it."}
                    </p>
                  </div>
                  <div className="bg-surface-container rounded-xl overflow-hidden mt-space-sm">
                    <button className="w-full min-h-[44px] flex items-center justify-between px-space-md py-space-sm bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <div className="flex items-center gap-space-xs">
                        <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">
                          {"layers"}
                        </span>
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Call Stack Trace: factorial(3)"}
                        </span>
                      </div>
                      <span className="material-symbols-outlined text-[20px] text-secondary transition-transform duration-200" id="stack-toggle-icon" aria-hidden="true">
                        {"expand_more"}
                      </span>
                    </button>
                    <div className="p-space-md flex flex-col gap-space-xs hidden" id="stack-card-content">
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface">
                        <span className="font-code text-code">
                          {"factorial(1)"}
                        </span>
                        <span className="font-label-sm text-label-sm px-2 py-0.5 bg-primary text-on-primary rounded">
                          {"Base: returns 1"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface opacity-90">
                        <span className="font-code text-code">
                          {"factorial(2)"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"2 * factorial(1)"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between p-2 rounded-lg bg-surface-container-lowest text-on-surface opacity-75">
                        <span className="font-code text-code">
                          {"factorial(3)"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"3 * factorial(2)"}
                        </span>
                      </div>
                      <div className="mt-space-xs p-2 rounded bg-surface-container-high text-on-surface-variant font-label-sm text-[11px] flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"info"}
                        </span>
                        {"\n                  Each frame pauses execution until the frame above resolves.\n                "}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar py-1">
                  <button className="min-h-[44px] px-3.5 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm whitespace-nowrap shadow-sm transition-colors flex items-center gap-1" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span>
                      {"Show code snippet"}
                    </span>
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </button>
                  <button className="min-h-[44px] px-3.5 py-1.5 rounded-full bg-surface-container-lowest hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm whitespace-nowrap shadow-sm transition-colors flex items-center gap-1" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span>
                      {"Why stack overflow?"}
                    </span>
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"help_outline"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="sticky bottom-0 bg-surface/95 backdrop-blur-md pt-2 pb-1">
              <div className="bg-[#FFFFFF] border border-[#E5E5E5] rounded-2xl p-space-xs shadow-sm flex flex-col gap-1">
                <textarea className="w-full bg-transparent px-3 py-2 text-[#111111] placeholder:text-on-surface-variant font-body-md text-body-md resize-none outline-none" id="composer-input" placeholder="Ask follow-up or challenge thesis..." rows="2"></textarea>
                <div className="flex items-center justify-between px-2 pb-1">
                  <div className="flex items-center gap-1">
                    <button className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant transition-colors" title="Attach" type="button" aria-label="Attach">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"add"}
                      </span>
                    </button>
                    <button className="w-11 h-11 flex items-center justify-center rounded-full hover:bg-surface-container text-on-surface-variant transition-colors" title="Voice Input" type="button" aria-label="Voice Input">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                  </div>
                  <button className="w-11 h-11 rounded-full bg-[#111111] text-[#FFFFFF] flex items-center justify-center shadow-sm active:scale-95 transition-transform" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Send Question" type="button" aria-label="Send Question">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"arrow_upward"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-view hidden flex flex-col gap-space-md" id="view-journey-3-4">
            <div className="grid grid-cols-2 p-1 bg-surface-container rounded-xl">
              <button className="min-h-[44px] rounded-lg bg-surface-container-lowest font-label-md text-label-md text-on-surface font-semibold shadow-sm transition-all flex items-center justify-center gap-1.5" id="horizon-sprint-btn" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"timer"}
                </span>
                {"\n          Exam Sprint (14d)\n        "}
              </button>
              <button className="min-h-[44px] rounded-lg font-label-md text-label-md text-on-surface-variant transition-all flex items-center justify-center gap-1.5" id="horizon-macro-btn" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"calendar_month"}
                </span>
                {"\n          3-Month Mastery\n        "}
              </button>
            </div>
            <div className="flex flex-col gap-space-md" id="horizon-sprint-content">
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-space-sm">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wider">
                      {"Target Objective"}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Data Structures & Algo Midterm"}
                    </h2>
                  </div>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container-high text-on-surface font-label-sm text-[11px] font-semibold">
                    {"T-minus 9 Days"}
                  </span>
                </div>
                <div className="flex items-center gap-space-md my-space-sm p-space-sm bg-surface-container-low rounded-xl">
                  <div className="relative w-16 h-16 flex-shrink-0 flex items-center justify-center">
                    <svg className="w-16 h-16 transform -rotate-90" viewBox="0 0 36 36">
                      <path className="text-surface-container-high" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeWidth="3.5"></path>
                      <path className="text-primary" d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831" fill="none" stroke="currentColor" strokeDasharray="78, 100" strokeLinecap="round" strokeWidth="3.5"></path>
                    </svg>
                    <span className="absolute font-label-md text-label-md font-bold text-on-surface">
                      {"78%"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      {"Mastery Coverage"}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"4 of 5 core archetypes verified in timed drills."}
                    </p>
                  </div>
                </div>
                <div className="flex flex-col gap-space-xs mt-space-sm">
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <span className="font-body-md text-body-md text-on-surface line-through opacity-60">
                        {"Tree Traversal Variations"}
                      </span>
                    </div>
                    <span className="font-code text-code text-secondary">
                      {"Done"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-lowest shadow-sm">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                        {"radio_button_unchecked"}
                      </span>
                      <span className="font-body-md text-body-md text-on-surface font-medium">
                        {"Dynamic Programming Memoization"}
                      </span>
                    </div>
                    <button className="min-h-[44px] px-3 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm" type="button">
                      {"Launch Drill"}
                    </button>
                  </div>
                  <div className="flex items-center justify-between p-3 rounded-xl bg-surface-container-low">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
                        {"schedule"}
                      </span>
                      <span className="font-body-md text-body-md text-on-surface-variant">
                        {"Graph Adjacency Matrices"}
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Tomorrow"}
                    </span>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex flex-col gap-space-md" id="horizon-macro-content">
              <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-space-sm">
                  <div>
                    <span className="font-label-sm text-label-sm text-secondary font-medium uppercase tracking-wider">
                      {"Curriculum Roadmap"}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Systems Architecture Specialist"}
                    </h2>
                  </div>
                  <span className="font-code text-code px-2 py-1 rounded bg-surface-container text-on-surface font-medium">
                    {"Month 2 / 3"}
                  </span>
                </div>
                <div className="flex flex-col gap-space-md mt-space-md pl-2 relative">
                  <div className="flex items-start gap-space-md">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-[10px] font-bold">
                      {"1"}
                    </div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Foundational OS Kernels & Memory"}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Completed with 94% retention index on spaced repetition."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md">
                    <div className="w-6 h-6 rounded-full bg-surface-container-high text-primary flex items-center justify-center font-label-sm text-[10px] font-bold">
                      {"2"}
                    </div>
                    <div className="flex-1">
                      <div className="flex items-center gap-2">
                        <p className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Distributed Concurrency & Locks"}
                        </p>
                        <span className="px-1.5 py-0.5 rounded bg-primary text-on-primary text-[10px] font-label-sm">
                          {"Active Phase"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"7 of 12 real-world bug-fixing labs submitted."}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-space-md opacity-60">
                    <div className="w-6 h-6 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-label-sm text-[10px] font-bold">
                      {"3"}
                    </div>
                    <div className="flex-1">
                      <p className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Event-Driven Streaming Pipelines"}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"Scheduled for final sprint evaluation."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-view hidden flex flex-col gap-space-md" id="view-journey-1">
            <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm text-center flex flex-col items-center">
              <div className="w-14 h-14 rounded-2xl bg-primary text-on-primary flex items-center justify-center mb-space-sm">
                <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
                  {"hub"}
                </span>
              </div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
                {"Knowledge Induction"}
              </h2>
              <p className="font-body-md text-body-md text-on-surface-variant mb-space-md max-w-xs">
                {"\n          SOLVE adapts to your cognitive velocity. Choose an intake pathway to seed your learning graph.\n        "}
              </p>
              <div className="w-full flex flex-col gap-space-sm">
                <button className="w-full min-h-[44px] rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium flex items-center justify-center gap-2 shadow-sm" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"chat"}
                  </span>
                  {"\n            Open Socratic Chat Session\n          "}
                </button>
                <button className="w-full min-h-[44px] rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium flex items-center justify-center gap-2 transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"assignment_turned_in"}
                  </span>
                  {"\n            Import Syllabus or Exam Spec\n          "}
                </button>
              </div>
            </div>
          </div>
          <div className="journey-view hidden flex flex-col gap-space-md" id="view-journey-5">
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
              <div className="flex items-center gap-2 px-3 py-2 bg-surface-container rounded-xl mb-space-md">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
                  {"search"}
                </span>
                <input className="bg-transparent text-on-surface font-body-md text-body-md outline-none w-full" type="text" defaultValue="Call stack frames & tail recursion" />
              </div>
              <span className="font-label-sm text-label-sm text-secondary font-semibold uppercase tracking-wider block mb-space-xs">
                {"Semantically Linked Nodes"}
              </span>
              <div className="flex flex-col gap-space-xs">
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      {"Tail Call Optimization (TCO)"}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Compiler optimization transforming recursion into iteration"}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                    {"chevron_right"}
                  </span>
                </div>
                <div className="p-3 rounded-xl bg-surface-container-low flex items-center justify-between">
                  <div>
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      {"Activation Records"}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Local variables, return pointers, and stack frame allocation"}
                    </p>
                  </div>
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                    {"chevron_right"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="journey-view hidden flex flex-col gap-space-md" id="view-journey-6">
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
              <div className="flex items-center justify-between mb-space-sm">
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  {"Topology Graph"}
                </h2>
                <span className="px-2 py-0.5 rounded bg-surface-container text-on-surface-variant font-code text-[11px]">
                  {"42 Vertices · 68 Edges"}
                </span>
              </div>
              <div className="w-full h-48 bg-surface-container rounded-xl flex items-center justify-center relative overflow-hidden">
                <svg className="w-full h-full p-4" viewBox="0 0 300 160">
                  <line stroke="#747878" strokeDasharray="3 3" strokeWidth="1.5" x1="60" x2="150" y1="80" y2="40"></line>
                  <line stroke="#747878" strokeWidth="1.5" x1="60" x2="150" y1="80" y2="120"></line>
                  <line stroke="#000000" strokeWidth="2" x1="150" x2="240" y1="40" y2="80"></line>
                  <line stroke="#747878" strokeWidth="1.5" x1="150" x2="240" y1="120" y2="80"></line>
                  <circle cx="60" cy="80" fill="#000000" r="14"></circle>
                  <text fill="#FFFFFF" fontFamily="Inter" fontSize="9" textAnchor="middle" x="60" y="84">
                    {"Base"}
                  </text>
                  <circle cx="150" cy="40" fill="#e2e2e2" r="16" stroke="#000000" strokeWidth="1.5"></circle>
                  <text fill="#1a1c1c" fontFamily="Inter" fontSize="9" textAnchor="middle" x="150" y="44">
                    {"Stack"}
                  </text>
                  <circle cx="150" cy="120" fill="#eeeeee" r="14"></circle>
                  <text fill="#5e5e5e" fontFamily="Inter" fontSize="9" textAnchor="middle" x="150" y="124">
                    {"Heap"}
                  </text>
                  <circle cx="240" cy="80" fill="#000000" r="18"></circle>
                  <text fill="#FFFFFF" fontFamily="Inter" fontSize="10" fontWeight="bold" textAnchor="middle" x="240" y="84">
                    {"Memo"}
                  </text>
                </svg>
                <span className="absolute bottom-2 right-3 font-label-sm text-[10px] text-on-surface-variant bg-surface/80 px-2 py-0.5 rounded">
                  {"Active Cluster: Dynamic Programming"}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-space-sm">
                {"\n          Nodes dynamically thicken as repetition accuracy exceeds 85%. Tapping any vertex exposes sub-prerequisites.\n        "}
              </p>
            </div>
          </div>
          <div className="journey-view hidden flex flex-col gap-space-md" id="view-journey-7">
            <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
              <div className="flex items-center gap-space-md mb-space-md">
                <img className="w-14 h-14 rounded-full object-cover bg-surface-container-high" data-alt="Minimalist grayscale user avatar with focused analytical gaze in studio portrait lighting against a crisp neutral gray backdrop" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/28beabd3a64c27e2.jpg" alt="Minimalist grayscale user avatar with focused analytical gaze in studio portrait lighting against a crisp neutral gray backdrop" />
                <div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Alex Mercer"}
                  </h2>
                  <p className="font-label-sm text-label-sm text-on-surface-variant">
                    {"Cognitive Mode: First-Principles Analytic"}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-2 gap-space-xs mb-space-md">
                <div className="p-space-sm bg-surface-container rounded-xl">
                  <span className="font-label-sm text-label-sm text-secondary">
                    {"Study Streak"}
                  </span>
                  <p className="font-headline-md text-headline-md text-on-surface font-semibold">
                    {"18 Days"}
                  </p>
                </div>
                <div className="p-space-sm bg-surface-container rounded-xl">
                  <span className="font-label-sm text-label-sm text-secondary">
                    {"Concepts Ingested"}
                  </span>
                  <p className="font-headline-md text-headline-md text-on-surface font-semibold">
                    {"142"}
                  </p>
                </div>
              </div>
              <button className="w-full min-h-[44px] rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium flex items-center justify-between px-space-md transition-colors" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span>
                  {"Inspect Architecture & Prototype Contracts"}
                </span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"verified"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm hidden flex flex-col justify-end" id="mode-drawer">
          <div className="bg-surface-container-lowest w-full rounded-t-3xl p-space-lg shadow-xl flex flex-col gap-space-md max-w-lg mx-auto">
            <div className="w-10 h-1 bg-surface-container-highest rounded-full self-center mb-1"></div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Cognitive Delivery Engine"}
                </h3>
                <p className="font-label-sm text-label-sm text-secondary">
                  {"Select pedagogical posture for chat interactions"}
                </p>
              </div>
              <button className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-container" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-space-sm">
              <label className="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container cursor-pointer" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                <input defaultChecked className="mt-1 accent-primary" name="pedagogy" type="radio" />
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-semibold text-on-surface block">
                    {"Socratic Questioner (Default)"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Guides through inquiry, prompts baseline questions before revealing full solutions."}
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                <input className="mt-1 accent-primary" name="pedagogy" type="radio" />
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-semibold text-on-surface block">
                    {"High-Density Architectural"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Immediate formulas, rigorous mathematical proofs, minimal exploratory dialogue."}
                  </span>
                </div>
              </label>
              <label className="flex items-start gap-space-md p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container cursor-pointer transition-colors" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                <input className="mt-1 accent-primary" name="pedagogy" type="radio" />
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-semibold text-on-surface block">
                    {"Oral Exam Examiner"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Simulates aggressive peer interview and checks for edge cases and asymptotic bounds."}
                  </span>
                </div>
              </label>
            </div>
            <button className="w-full min-h-[44px] rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium mt-space-xs shadow-sm" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Apply Configuration\n      "}
            </button>
          </div>
        </div>
        <div className="fixed inset-0 z-50 bg-primary/30 backdrop-blur-sm hidden flex flex-col justify-end" id="spec-sheet">
          <div className="bg-surface-container-lowest w-full max-h-[751px] rounded-t-3xl p-space-lg shadow-xl overflow-y-auto max-w-lg mx-auto flex flex-col gap-space-md">
            <div className="w-10 h-1 bg-surface-container-highest rounded-full self-center mb-1"></div>
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
                  {"architecture"}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"System Blueprint"}
                </h3>
              </div>
              <button className="min-w-[44px] min-h-[44px] flex items-center justify-center rounded-full hover:bg-surface-container" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-space-sm">
              <div className="p-space-sm bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                    {"vpn_key"}
                  </span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    {"Simulated Google OAuth 2.0"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {"\n            Preserves ephemeral user credentials into sandboxed localStorage. Auth tokens validate cross-journey persistence across Journey 1 (Entry) to Journey 7 (Profile) without full-page reloads.\n          "}
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                    {"downloading"}
                  </span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    {"Chat vs. Study Contract Isolation"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {"\n            The Socratic Chat runtime strictly isolates exploratory dialogue memory from long-term exam mastery records. Conversational insights only migrate into study roadmap vertices when confirmed via knowledge affirmation nodes.\n          "}
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-xl">
                <div className="flex items-center gap-1.5 mb-1">
                  <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                    {"sync_saved_locally"}
                  </span>
                  <span className="font-label-md text-label-md font-bold text-on-surface">
                    {"Client State Persistence"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                  {"\n            Interactive call-stack expansions, unread prompt tokens, and active journey chip selections sync instantly into memory so navigating through the bottom shell preserves scroll depth and input state.\n          "}
                </p>
              </div>
            </div>
            <button className="w-full min-h-[44px] rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium mt-space-xs shadow-sm" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Close Annotations\n      "}
            </button>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold">
      <div className="flex justify-around items-center h-16 px-gutter bg-[#FFFFFF] border-t border-[#E5E5E5]">
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-[#111111] font-semibold transition-colors" data-path="mentor" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"psychology"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Mentor"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="plan" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"event_note"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Plan"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"insights"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Graph"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="status" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"donut_large"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Status"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
