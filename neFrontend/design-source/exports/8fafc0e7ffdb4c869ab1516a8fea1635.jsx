'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/8fafc0e7ffdb4c869ab1516a8fea1635';
import './8fafc0e7ffdb4c869ab1516a8fea1635.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-8fafc0e7ffdb4c869ab1516a8fea1635 bg-surface font-body-md text-on-surface flex flex-col min-h-screen" data-screen-id="8fafc0e7ffdb4c869ab1516a8fea1635">
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-14 px-margin flex items-center justify-between">
        <button aria-label="Open Menu" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary rounded-lg transition-colors" id="drawer-open-btn" type="button">
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
            {"menu"}
          </span>
        </button>
        <div className="flex items-center gap-space-xs">
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold">
            {"SOLVE"}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant font-normal hidden">
            {"Chat Session"}
          </span>
        </div>
        <div className="flex items-center gap-space-xs">
          <a aria-label="New chat" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary rounded-lg transition-colors" data-path="chat-session" href="#">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {"edit_square"}
            </span>
          </a>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover ml-1" src="/assets/7e17bca1d79158ba.png" />
        </div>
      </div>
    </header>
    <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
    <aside className="fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-surface-container-lowest shadow-[0_4px_24px_rgba(0,0,0,0.08)] transform -translate-x-full transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe" id="drawer-panel">
      <div className="p-space-lg flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-7 h-7 bg-primary text-on-primary rounded flex items-center justify-center font-headline-sm text-headline-sm font-semibold">
            {"S"}
          </div>
          <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
            {"SOLVE"}
          </span>
        </div>
        <button aria-label="Close Drawer" className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface rounded-lg" id="drawer-close-btn" type="button">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"close"}
          </span>
        </button>
      </div>
      <div className="px-space-md mb-space-sm">
        <a className="w-full flex items-center justify-center gap-space-sm bg-primary text-on-primary h-11 px-space-md rounded-lg font-label-md text-label-md font-medium transition-colors hover:bg-primary-container" data-path="chat-session" href="#">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            {"add"}
          </span>
          <span>
            {"New chat"}
          </span>
        </a>
      </div>
      <div className="px-space-md py-space-xs">
        <div className="flex items-center gap-space-sm px-space-md h-10 bg-surface-container-low rounded-lg text-on-surface-variant">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            {"search"}
          </span>
          <input className="bg-transparent border-0 outline-none w-full font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant" placeholder="Search chats..." type="text" />
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-space-md py-space-sm space-y-space-md">
        <div className="space-y-1">
          <p className="px-space-sm text-[11px] font-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
            {"Learning Trajectory"}
          </p>
          <a className="flex items-center gap-space-md px-space-sm h-11 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" data-path="learning-plan" href="#">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant" aria-hidden="true">
              {"alt_route"}
            </span>
            <span className="font-label-md text-label-md">
              {"My Plan / Strategy"}
            </span>
          </a>
          <a className="flex items-center gap-space-md px-space-sm h-11 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" data-path="knowledge-graph" href="#">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant" aria-hidden="true">
              {"hub"}
            </span>
            <span className="font-label-md text-label-md">
              {"Knowledge Graph"}
            </span>
          </a>
          <a className="flex items-center gap-space-md px-space-sm h-11 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" data-path="target-status" href="#">
            <span className="material-symbols-outlined text-[20px] text-on-surface-variant" aria-hidden="true">
              {"radar"}
            </span>
            <span className="font-label-md text-label-md">
              {"Target Status"}
            </span>
          </a>
        </div>
        <div className="space-y-1">
          <p className="px-space-sm text-[11px] font-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
            {"Recent"}
          </p>
          <a className="flex items-center gap-space-sm px-space-sm h-10 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="chat-session" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"chat_bubble_outline"}
            </span>
            <span className="font-body-sm text-body-sm truncate">
              {"Deriving Backprop from Scratch"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-sm h-10 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="chat-session" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"chat_bubble_outline"}
            </span>
            <span className="font-body-sm text-body-sm truncate">
              {"Information Entropy Intuition"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-sm h-10 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container-low transition-colors" data-path="chat-session" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"chat_bubble_outline"}
            </span>
            <span className="font-body-sm text-body-sm truncate">
              {"Distributed Systems Consensus"}
            </span>
          </a>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-low">
        <a className="flex items-center justify-between p-space-xs rounded-lg hover:bg-surface-container transition-colors" data-path="settings" href="#">
          <div className="flex items-center gap-space-sm">
            <img alt="Profile" className="w-9 h-9 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
            <div className="flex flex-col">
              <span className="font-label-md text-label-md text-on-surface font-medium leading-none">
                {"Alex Rivera"}
              </span>
              <span className="font-body-sm text-body-sm text-on-surface-variant">
                {"Settings & Profile"}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[20px] text-on-surface-variant" aria-hidden="true">
            {"tune"}
          </span>
        </a>
      </div>
    </aside>
    <main className="flex flex-col relative w-full pt-14 pb-20 bg-surface min-h-screen">
      <div className="flex flex-col w-full px-margin pb-space-xl">
        <div className="flex items-center justify-between py-space-sm mb-space-sm">
          <a className="inline-flex items-center gap-space-xs text-on-surface hover:text-primary transition-colors py-1" data-path="chat-session" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"arrow_back"}
            </span>
            <span className="font-label-sm text-label-sm font-medium">
              {"Back to lesson"}
            </span>
          </a>
          <span className="font-label-sm text-label-sm text-on-surface-variant truncate max-w-[190px]">
            {"Chat · Data Structures mid prep"}
          </span>
        </div>
        <div className="w-full bg-surface-container-low p-1 rounded-xl flex items-center justify-between gap-1 mb-space-lg">
          <button className="stage-btn flex-1 py-1.5 px-2 rounded-lg text-center font-label-sm text-label-sm font-medium bg-surface-container-lowest text-on-surface shadow-sm transition-all" id="tab-btn-question" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Q1: Practice\n    "}
          </button>
          <button className="stage-btn flex-1 py-1.5 px-2 rounded-lg text-center font-label-sm text-label-sm font-medium text-on-surface-variant hover:text-on-surface transition-all" id="tab-btn-feedback" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Feedback\n    "}
          </button>
          <button className="stage-btn flex-1 py-1.5 px-2 rounded-lg text-center font-label-sm text-label-sm font-medium text-on-surface-variant hover:text-on-surface transition-all" id="tab-btn-teachback" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Teach-Back\n    "}
          </button>
          <button className="stage-btn flex-1 py-1.5 px-2 rounded-lg text-center font-label-sm text-label-sm font-medium text-on-surface-variant hover:text-on-surface transition-all" id="tab-btn-summary" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Summary\n    "}
          </button>
        </div>
        <section className="flex flex-col space-y-space-md" id="view-question">
          <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium uppercase tracking-wider">
                {"Question 1 of 3"}
              </span>
              <div aria-label="Step progress" className="flex items-center gap-1.5">
                <div className="w-6 h-1.5 rounded-full bg-primary"></div>
                <div className="w-6 h-1.5 rounded-full bg-surface-container-highest"></div>
                <div className="w-6 h-1.5 rounded-full bg-surface-container-highest"></div>
              </div>
            </div>
            <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight">
              {"\n        Practise linked lists\n      "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface leading-snug">
              {"\n        You want to insert a new node at the beginning of a singly linked list. What should the new node’s "}
              <code className="font-code text-code bg-surface-container-low px-1.5 py-0.5 rounded text-on-surface">
                {"Next"}
              </code>
              {" reference point to?\n      "}
            </p>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {"Pointer Topology"}
              </span>
              <span className="font-code text-code text-[11px] text-on-surface-variant">
                {"O(1) prepend"}
              </span>
            </div>
            <div className="w-full bg-surface-container-low p-space-sm rounded-lg flex items-center justify-center">
              <svg className="w-full max-w-[280px] h-12 text-on-surface" fill="none" viewBox="0 0 280 48">
                <rect fill="currentColor" fillOpacity="0.08" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" width="58" x="4" y="8"></rect>
                <text fill="currentColor" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle" x="33" y="27">
                  {"NEW"}
                </text>
                <path d="M64 24H106M106 24L99 19M106 24L99 29" stroke="currentColor" strokeDasharray="3 3" strokeWidth="1.5"></path>
                <rect fill="currentColor" fillOpacity="0.9" height="32" rx="4" width="64" x="110" y="8"></rect>
                <text fill="#ffffff" fontFamily="Inter" fontSize="10" fontWeight="600" textAnchor="middle" x="142" y="27">
                  {"HEAD [0]"}
                </text>
                <path d="M176 24H208M208 24L202 20M208 24L202 28" stroke="currentColor" strokeWidth="1.5"></path>
                <rect fill="currentColor" fillOpacity="0.08" height="32" rx="4" stroke="currentColor" strokeWidth="1.5" width="60" x="212" y="8"></rect>
                <text fill="currentColor" fontFamily="Inter" fontSize="10" fontWeight="500" textAnchor="middle" x="242" y="27">
                  {"NODE [1]"}
                </text>
              </svg>
            </div>
          </div>
          <div aria-label="Multiple choice options" className="space-y-space-xs" role="radiogroup">
            <button className="quiz-option w-full min-h-[52px] p-space-md rounded-xl bg-surface-container-lowest text-left flex items-center justify-between shadow-sm transition-all" data-selected="true" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <div className="flex items-center gap-space-md min-w-0">
                <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold shrink-0">
                  {"A"}
                </span>
                <span className="font-body-md text-body-md text-on-surface font-medium truncate">
                  {"The current head node"}
                </span>
              </div>
              <span className="material-symbols-outlined text-primary text-[20px] shrink-0" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                {"check_circle"}
              </span>
            </button>
            <button className="quiz-option w-full min-h-[52px] p-space-md rounded-xl bg-surface-container-lowest text-left flex items-center justify-between shadow-sm transition-all" data-selected="false" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <div className="flex items-center gap-space-md min-w-0">
                <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-label-sm text-label-sm font-semibold shrink-0">
                  {"B"}
                </span>
                <span className="font-body-md text-body-md text-on-surface truncate">
                  {"The last node"}
                </span>
              </div>
              <div className="w-5 h-5 rounded-full bg-surface-container shrink-0"></div>
            </button>
            <button className="quiz-option w-full min-h-[52px] p-space-md rounded-xl bg-surface-container-lowest text-left flex items-center justify-between shadow-sm transition-all" data-selected="false" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <div className="flex items-center gap-space-md min-w-0">
                <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-label-sm text-label-sm font-semibold shrink-0">
                  {"C"}
                </span>
                <span className="font-body-md text-body-md text-on-surface truncate">
                  {"The new node itself"}
                </span>
              </div>
              <div className="w-5 h-5 rounded-full bg-surface-container shrink-0"></div>
            </button>
            <button className="quiz-option w-full min-h-[52px] p-space-md rounded-xl bg-surface-container-lowest text-left flex items-center justify-between shadow-sm transition-all" data-selected="false" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <div className="flex items-center gap-space-md min-w-0">
                <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center font-label-sm text-label-sm font-semibold shrink-0">
                  {"D"}
                </span>
                <span className="font-body-md text-body-md text-on-surface truncate">
                  {"Always null"}
                </span>
              </div>
              <div className="w-5 h-5 rounded-full bg-surface-container shrink-0"></div>
            </button>
          </div>
          <div className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm">
            <button className="w-full p-space-md flex items-center justify-between text-left hover:bg-surface-container-low transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <div className="flex items-center gap-space-sm text-on-surface">
                <span className="material-symbols-outlined text-[18px] text-on-surface-variant" aria-hidden="true">
                  {"lightbulb"}
                </span>
                <span className="font-label-md text-label-md font-medium">
                  {"Show a hint"}
                </span>
              </div>
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-transform duration-200" id="hint-chevron" aria-hidden="true">
                {"expand_more"}
              </span>
            </button>
            <div className="hidden px-space-md pb-space-md pt-0 text-on-surface-variant font-body-sm text-body-sm leading-relaxed bg-surface-container-lowest" id="hint-content">
              {"\n        Think about maintaining memory reachable links. If you redirect the "}
              <code className="font-code text-code">
                {"head"}
              </code>
              {" pointer first before attaching the new node, what happens to the remaining nodes in the chain?\n      "}
            </div>
          </div>
          <div className="pt-space-xs flex items-center gap-space-sm">
            <button className="w-2/5 h-12 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Not sure\n      "}
            </button>
            <button className="w-3/5 h-12 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium flex items-center justify-center gap-space-xs hover:bg-primary-container transition-all shadow-sm" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"Check answer"}
              </span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_forward"}
              </span>
            </button>
          </div>
        </section>
        <section className="hidden flex-col space-y-space-md" id="view-feedback">
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
            <div className="inline-flex items-center gap-space-xs bg-surface-container-low px-2.5 py-1 rounded-full text-on-surface">
              <span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                {"check_circle"}
              </span>
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider">
                {"Correct on 1st attempt"}
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {"\n        That’s right\n      "}
            </h2>
            <p className="font-body-md text-body-md text-on-surface leading-relaxed">
              {"\n        The new node points to the current head so the existing chain stays connected. If you pointed "}
              <code className="font-code text-code bg-surface-container-low px-1 py-0.5 rounded">
                {"head"}
              </code>
              {" directly to the new node first, you’d orphan every existing element in memory.\n      "}
            </p>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                {"Canonical Implementation"}
              </span>
              <span className="font-code text-code text-[11px] text-on-surface-variant">
                {"Python 3"}
              </span>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-lg font-code text-code text-[12px] text-on-surface overflow-x-auto leading-relaxed">
              {"\n        newNode.next = self.head"}
              <br />
              {"\n        self.head = newNode\n      "}
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
            <div className="flex items-center gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center font-label-sm text-label-sm font-semibold">
                {"S"}
              </div>
              <div>
                <p className="font-label-md text-label-md font-semibold text-on-surface">
                  {"SOLVE Mentor"}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Reinforcement technique"}
                </p>
              </div>
            </div>
            <p className="font-body-md text-body-md text-on-surface">
              {"\n        \"You've grasped the logic quickly. To make sure this intuition sticks during high-pressure system interviews, try explaining it in your own words.\"\n      "}
            </p>
          </div>
          <div className="flex flex-col gap-space-xs pt-space-xs">
            <button className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium flex items-center justify-center gap-space-xs hover:bg-primary-container transition-all" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"Proceed to Teach-Back"}
              </span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"psychology"}
              </span>
            </button>
            <button className="w-full h-11 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Review question again\n      "}
            </button>
          </div>
        </section>
        <section className="hidden flex-col space-y-space-md" id="view-teachback">
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                {"Teach-Back exercise"}
              </span>
              <span className="font-code text-code text-[11px] text-on-surface-variant">
                {"Feynman Method"}
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {"\n        Explain it in your own words\n      "}
            </h2>
            <p className="font-body-md text-body-md text-on-surface">
              {"\n        \"How would you add a node at the beginning of a linked list, and why does the exact order of pointer assignments matter?\"\n      "}
            </p>
          </div>
          <div className="flex items-center justify-between bg-surface-container-low p-1 rounded-xl">
            <button className="flex-1 py-1.5 px-3 rounded-lg text-center font-label-sm text-label-sm font-medium transition-all text-on-surface-variant hover:text-on-surface" id="mod-type-btn" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px] align-middle mr-1" aria-hidden="true">
                {"edit_note"}
              </span>
              {"Type response\n      "}
            </button>
            <button className="flex-1 py-1.5 px-3 rounded-lg text-center font-label-sm text-label-sm font-medium transition-all bg-surface-container-lowest text-on-surface shadow-sm" id="mod-speak-btn" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px] align-middle mr-1" aria-hidden="true">
                {"mic"}
              </span>
              {"Speak response\n      "}
            </button>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md" id="container-speak">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs text-on-surface">
                <div className="w-2.5 h-2.5 rounded-full bg-error animate-pulse"></div>
                <span className="font-code text-code text-[12px] font-medium text-on-surface">
                  {"0:18 Recording"}
                </span>
              </div>
              <button className="px-2.5 py-1 rounded-lg bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm font-medium flex items-center gap-1 transition-colors" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"stop"}
                </span>
                <span>
                  {"Stop"}
                </span>
              </button>
            </div>
            <div aria-label="Audio waveform" className="h-10 bg-surface-container-low rounded-lg px-space-sm flex items-center justify-between gap-1 overflow-hidden">
              <div className="w-1 bg-on-surface-variant h-3 rounded-full"></div>
              <div className="w-1 bg-on-surface-variant h-5 rounded-full"></div>
              <div className="w-1 bg-primary h-8 rounded-full"></div>
              <div className="w-1 bg-primary h-6 rounded-full"></div>
              <div className="w-1 bg-primary h-9 rounded-full"></div>
              <div className="w-1 bg-primary h-4 rounded-full"></div>
              <div className="w-1 bg-primary h-7 rounded-full"></div>
              <div className="w-1 bg-primary h-8 rounded-full"></div>
              <div className="w-1 bg-primary h-5 rounded-full"></div>
              <div className="w-1 bg-on-surface-variant h-4 rounded-full"></div>
              <div className="w-1 bg-primary h-7 rounded-full"></div>
              <div className="w-1 bg-primary h-9 rounded-full"></div>
              <div className="w-1 bg-primary h-6 rounded-full"></div>
              <div className="w-1 bg-primary h-4 rounded-full"></div>
              <div className="w-1 bg-on-surface-variant h-2 rounded-full"></div>
              <div className="w-1 bg-on-surface-variant h-3 rounded-full"></div>
            </div>
            <div className="space-y-space-xs">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Live Speech Transcription"}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Tap to edit"}
                </span>
              </div>
              <textarea className="w-full p-space-sm bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface focus:outline-none focus:bg-surface-container-lowest resize-none leading-relaxed" rows="3">
                {"First, I allocate the new node. Then I set its pointer to the existing head. Only after that do I reassign head to the new node, because if you flip the order you detach the rest of the list."}
              </textarea>
            </div>
          </div>
          <div className="hidden bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs" id="container-type">
            <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="teach-typed-input">
              {"Your written explanation"}
            </label>
            <textarea className="w-full p-space-sm bg-surface-container-low rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none resize-none" id="teach-typed-input" placeholder="Explain how you would connect the pointers and the risk of overwriting head..." rows="4"></textarea>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-md">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface">
                {"SOLVE Evaluation"}
              </span>
              <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface font-semibold bg-surface-container-low px-2 py-0.5 rounded-full">
                <span>
                  {"94% Clarity"}
                </span>
              </span>
            </div>
            <div className="space-y-space-sm">
              <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                    {"verified"}
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold">
                    {"What you explained well"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-5">
                  {"\n            Explicitly addressed the order-of-operations risk: preserving the chain reference before mutating the head identifier.\n          "}
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-on-surface" aria-hidden="true">
                    {"add_circle"}
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold">
                    {"One step to add"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-5">
                  {"\n            Mention the empty list base case ("}
                  <code className="font-code text-code text-[11px]">
                    {"head == null"}
                  </code>
                  {") to demonstrate defensive programming.\n          "}
                </p>
              </div>
              <div className="p-space-sm bg-surface-container-low rounded-lg space-y-1">
                <div className="flex items-center gap-space-xs text-on-surface">
                  <span className="material-symbols-outlined text-[16px] text-on-surface" aria-hidden="true">
                    {"lightbulb"}
                  </span>
                  <span className="font-label-sm text-label-sm font-semibold">
                    {"Why it matters"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant pl-5">
                  {"\n            Interviewers test this to check if you grasp pointer mechanics vs garbage collector leaks in unmanaged runtimes.\n          "}
                </p>
              </div>
            </div>
          </div>
          <button className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium flex items-center justify-center gap-space-xs hover:bg-primary-container transition-all" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span>
              {"Finalise Teach-Back"}
            </span>
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"done_all"}
            </span>
          </button>
        </section>
        <section className="hidden flex-col space-y-space-md" id="view-summary">
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm text-center space-y-space-xs">
            <div className="w-12 h-12 rounded-full bg-surface-container-low mx-auto flex items-center justify-center text-primary mb-1">
              <span className="material-symbols-outlined text-[28px]" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                {"task_alt"}
              </span>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {"Practice Complete"}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant max-w-xs mx-auto">
              {"\n        Your mental model for singly linked list pointers is solidified for mid-term prep.\n      "}
            </p>
          </div>
          <div className="grid grid-cols-3 gap-space-xs">
            <div className="bg-surface-container-lowest p-space-sm rounded-xl text-center shadow-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant block">
                {"Attempted"}
              </span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {"3/3"}
              </span>
            </div>
            <div className="bg-surface-container-lowest p-space-sm rounded-xl text-center shadow-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant block">
                {"First-Try"}
              </span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {"2"}
              </span>
            </div>
            <div className="bg-surface-container-lowest p-space-sm rounded-xl text-center shadow-sm">
              <span className="font-label-sm text-label-sm text-on-surface-variant block">
                {"Assisted"}
              </span>
              <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {"1"}
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                {"sync_saved_locally"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="font-label-md text-label-md font-medium text-on-surface truncate">
                  {"Saved to Chat conversation"}
                </p>
                <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                  {"Session context updated with Feynman notes"}
                </p>
              </div>
            </div>
            <div className="p-space-sm bg-surface-container-low rounded-lg text-on-surface-variant font-body-sm text-body-sm flex items-center justify-between">
              <span>
                {"Knowledge Graph Node"}
              </span>
              <span className="font-code text-code font-medium text-on-surface">
                {"LinkedList.Prepend → Mastered"}
              </span>
            </div>
          </div>
          <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm space-y-space-xs">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
              {"Next on your trajectory"}
            </span>
            <h3 className="font-label-md text-label-md font-semibold text-on-surface">
              {"Deleting a Node given only pointer to it"}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {"\n        Continue your momentum to cover fast/slow pointers and cycle detection before moving to Stacks.\n      "}
            </p>
          </div>
          <div className="pt-space-xs">
            <a className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium flex items-center justify-center gap-space-xs hover:bg-primary-container transition-all shadow-sm" data-path="chat-session" href="#">
              <span>
                {"Continue preparation"}
              </span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_forward"}
              </span>
            </a>
          </div>
        </section>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-medium">
      <div className="flex justify-around items-center h-16 px-space-md">
        <a className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-on-surface-variant transition-colors" data-path="chat-session" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"forum"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Mentor"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-on-surface-variant transition-colors" data-path="learning-plan" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"alt_route"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Plan"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-on-surface-variant transition-colors" data-path="knowledge-graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"hub"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Graph"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 min-w-[56px] h-12 text-on-surface-variant transition-colors" data-path="target-status" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"radar"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Status"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
