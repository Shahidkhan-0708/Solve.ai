'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './30f8e0cca8dd4c48a53247f17497526a.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '30f8e0cca8dd4c48a53247f17497526a');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-30f8e0cca8dd4c48a53247f17497526a bg-background font-body-md text-body-md text-on-surface antialiased select-none" data-screen-id="30f8e0cca8dd4c48a53247f17497526a">
    <aside className="fixed left-0 top-0 h-full w-72 bg-surface-container-low z-50 flex flex-col justify-between shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="flex flex-col h-full overflow-hidden">
        <div className="p-space-lg flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"neurology"}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface"><BrandLogo className="stitch-wordmark" /></span>
          </div>
          <span className="font-code text-code text-on-surface-variant bg-surface-container-highest px-space-xs py-0.5 rounded">
            {"v2.4"}
          </span>
        </div>
        <div className="px-space-lg pb-space-md">
          <div className="bg-surface-container-high p-1 rounded-xl flex items-center gap-1">
            <button className="flex-1 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm font-medium shadow-[0_1px_3px_rgba(0,0,0,0.04)] text-center transition-all" type="button">
              {"Chat"}
            </button>
            <button className="flex-1 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm font-medium text-center transition-all" type="button">
              {"Study"}
            </button>
          </div>
        </div>
        <div className="px-space-lg pb-space-sm">
          <button className="w-full py-2.5 px-space-md rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-neutral-800 active:bg-black transition-colors flex items-center justify-center gap-space-xs" type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"add"}
            </span>
            <span>
              {"New conversation"}
            </span>
          </button>
        </div>
        <div className="px-space-lg pb-space-md">
          <button className="w-full py-2 px-space-md rounded-xl bg-surface-container-lowest text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm flex items-center justify-between transition-colors shadow-[0_1px_2px_rgba(0,0,0,0.02)]" type="button">
            <div className="flex items-center gap-space-xs">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"search"}
              </span>
              <span>
                {"Search history"}
              </span>
            </div>
            <kbd className="font-code text-code text-on-surface-variant bg-surface-container px-1.5 py-0.5 rounded text-[11px]">
              {"⌘K"}
            </kbd>
          </button>
        </div>
        <nav className="px-space-lg flex flex-col gap-1 pb-space-md" data-active-classes="bg-surface-container text-on-surface font-medium rounded-lg">
          <a aria-current="page" className="flex items-center gap-space-sm px-space-md py-2 transition-colors bg-surface-container text-on-surface font-medium rounded-lg" data-path="chat-workspace" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"chat_bubble"}
            </span>
            <span>
              {"Active Session"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-md py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="strategy-planner" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"alt_route"}
            </span>
            <span>
              {"My Plan & Strategy"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-md py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="target-status" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"check_circle"}
            </span>
            <span>
              {"Target Status"}
            </span>
          </a>
          <a className="flex items-center gap-space-sm px-space-md py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="knowledge-graph" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"hub"}
            </span>
            <span>
              {"Knowledge Graph"}
            </span>
          </a>
        </nav>
        <div className="flex-1 overflow-y-auto px-space-lg flex flex-col gap-space-md">
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between py-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="uppercase tracking-wider text-[11px] font-semibold">
                {"Pinned Focus"}
              </span>
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                {"push_pin"}
              </span>
            </div>
            <div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="flex items-center gap-2 truncate pr-2">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant shrink-0" aria-hidden="true">
                  {"psychology"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface truncate">
                  {"Bayesian Probability Networks"}
                </span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-surface-container text-on-surface-variant transition-opacity" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"more_horiz"}
                </span>
              </button>
            </div>
            <div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
              <div className="flex items-center gap-2 truncate pr-2">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant shrink-0" aria-hidden="true">
                  {"code"}
                </span>
                <span className="font-body-sm text-body-sm text-on-surface truncate">
                  {"Distributed Raft Consensus"}
                </span>
              </div>
              <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-surface-container text-on-surface-variant transition-opacity" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"more_horiz"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex items-center justify-between py-1 text-on-surface-variant font-label-sm text-label-sm">
              <span className="uppercase tracking-wider text-[11px] font-semibold">
                {"Recent Threads"}
              </span>
              <span className="font-code text-code text-[11px]">
                {"7"}
              </span>
            </div>
            <div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="font-body-sm text-body-sm text-on-surface truncate pr-2">
                {"Quant Finance & Arbitrage"}
              </span>
              <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-surface-container text-on-surface-variant transition-opacity" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"more_horiz"}
                </span>
              </button>
            </div>
            <div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="font-body-sm text-body-sm text-on-surface truncate pr-2">
                {"Quantum Gate Formulation"}
              </span>
              <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-surface-container text-on-surface-variant transition-opacity" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"more_horiz"}
                </span>
              </button>
            </div>
            <div className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg hover:bg-surface-container-high transition-colors cursor-pointer">
              <span className="font-body-sm text-body-sm text-on-surface truncate pr-2">
                {"Neural Architecture Search"}
              </span>
              <button className="opacity-0 group-hover:opacity-100 p-0.5 rounded hover:bg-surface-container text-on-surface-variant transition-opacity" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"more_horiz"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="p-space-md m-space-sm bg-surface-container-lowest rounded-xl flex items-center justify-between shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
        <div className="flex items-center gap-space-sm min-w-0">
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              {"person"}
            </span>
          </div>
          <div className="flex flex-col truncate">
            <span className="font-label-md text-label-md font-medium text-on-surface truncate leading-tight">
              {"Elena Rostova"}
            </span>
            <span className="font-body-sm text-body-sm text-on-surface-variant truncate text-[11px]">
              {"Cognitive Architect"}
            </span>
          </div>
        </div>
        <button className="p-1 text-on-surface-variant hover:text-on-surface hover:bg-surface-container rounded-lg transition-colors" type="button">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            {"tune"}
          </span>
        </button>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/85 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.03)] z-40 flex items-center justify-between px-space-xl">
        <div className="flex items-center gap-space-lg">
          <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span className="font-medium text-on-surface">
              {"Cognitive Workspace"}
            </span>
            <span className="text-outline-variant">
              {"/"}
            </span>
            <span>
              {"Deep Synthesis Mode"}
            </span>
          </div>
          <div className="hidden lg:flex items-center gap-2 bg-surface-container-low px-space-sm py-1 rounded-full text-on-surface-variant font-body-sm text-body-sm">
            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
              {"schedule"}
            </span>
            <span>
              {"42m session focus"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <button className="flex items-center gap-2 bg-surface-container-low hover:bg-surface-container px-space-md py-1.5 rounded-xl text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors" type="button">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              {"search"}
            </span>
            <span className="hidden sm:inline">
              {"Command Palette"}
            </span>
            <kbd className="font-code text-code bg-surface-container-lowest px-1 rounded text-[10px]">
              {"⌘P"}
            </kbd>
          </button>
          <div className="flex items-center gap-1">
            <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"history"}
              </span>
            </button>
            <button className="p-2 rounded-xl text-on-surface-variant hover:bg-surface-container-low hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"bookmark_border"}
              </span>
            </button>
          </div>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              {"person"}
            </span>
          </div>
        </div>
      </header>
      <main className="relative pt-16 bg-background min-h-screen">
        <div className="flex flex-col w-full">
          <header className="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md px-space-xl py-space-sm shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
            <div className="flex items-center gap-space-sm">
              <span className="font-code text-code text-[11px] text-on-surface-variant uppercase tracking-widest bg-surface-container px-2 py-0.5 rounded">
                {"Interactive State Simulator"}
              </span>
              <span className="text-outline-variant text-xs">
                {"/"}
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-on-surface" id="active-state-indicator">
                {"1. Chat Search Dialog (Active)"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0" id="state-selector-pills">
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-primary text-on-primary font-medium shadow-sm" data-state="chat-search" type="button">
                {"\n        1. Chat Search (Active)\n      "}
              </button>
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-state="study-search" type="button">
                {"\n        2. Study Search (Grouped)\n      "}
              </button>
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-state="message-jump" type="button">
                {"\n        3. Message Jump & Highlight\n      "}
              </button>
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-state="sidebar-menu" type="button">
                {"\n        4. Sidebar Management\n      "}
              </button>
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-state="practice-banner" type="button">
                {"\n        5. Unfinished Practice\n      "}
              </button>
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-state="archived-history" type="button">
                {"\n        6. Archived History\n      "}
              </button>
              <button className="state-pill px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all whitespace-nowrap bg-surface-container-high text-on-surface-variant hover:text-on-surface hover:bg-surface-container" data-state="search-empty" type="button">
                {"\n        7. Search Empty / Loading\n      "}
              </button>
            </div>
          </header>
          <div className="relative w-full min-h-[calc(100vh-8.5rem)] bg-background flex flex-col justify-start">
            <div className="w-full max-w-4xl mx-auto px-space-lg py-space-xl flex flex-col gap-space-xl transition-all duration-300" id="thread-workspace">
              <div className="flex items-center justify-between pb-space-sm">
                <div className="flex flex-col gap-0.5">
                  <div className="flex items-center gap-space-xs text-on-surface-variant font-label-sm text-label-sm">
                    <span>
                      {"Threads"}
                    </span>
                    <span className="text-outline-variant">
                      {"/"}
                    </span>
                    <span className="font-semibold text-on-surface">
                      {"Data Structures mid preparation"}
                    </span>
                    <span className="bg-surface-container-high px-2 py-0.5 rounded text-[11px] font-code text-on-surface-variant ml-2">
                      {"Exam Prep · Active"}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Last active 25 minutes ago · Memory checkpoint preserved"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Manage conversation" type="button" aria-label="Manage conversation">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"more_vert"}
                    </span>
                  </button>
                  <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl bg-surface-container-lowest shadow-sm hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"search"}
                    </span>
                    <span>
                      {"Search thread"}
                    </span>
                    <kbd className="font-code text-code bg-surface-container px-1 rounded text-[10px]">
                      {"⌘F"}
                    </kbd>
                  </button>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-md flex flex-col sm:flex-row sm:items-center justify-between gap-space-md relative overflow-hidden" id="practice-banner-container">
                <div className="flex items-start gap-space-sm">
                  <div className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"bolt"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Unfinished Practice In Session"}
                      </span>
                      <span className="font-code text-code text-[11px] bg-surface-container px-2 py-0.2 rounded font-medium">
                        {"Question 1 of 3"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"\n              Practice activity: "}
                      <span className="font-medium text-on-surface">
                        {"Pointer Inversion in Singly Linked Lists"}
                      </span>
                      {". State serialized at node exchange step.\n            "}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                  <button className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-neutral-800 transition-all flex items-center gap-1.5 shadow-sm" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span>
                      {"Resume practice"}
                    </span>
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </button>
                  <button className="p-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Dismiss banner" type="button" aria-label="Dismiss banner">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"close"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-space-xl">
                <div className="flex items-start gap-space-md max-w-2xl">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-code text-xs font-semibold text-on-surface shrink-0">
                    {"\n            AR\n          "}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Alex Rivera"}
                      </span>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"10:14 AM"}
                      </span>
                    </div>
                    <div className="p-space-md rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md">
                      {"\n              When inserting at the beginning of a singly linked list, why do we need to assign the new node's next pointer before updating the head pointer? What happens if we do it the other way around?\n            "}
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-space-md max-w-3xl relative transition-all duration-300 rounded-2xl p-space-sm -m-space-sm" id="target-matched-message">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"neurology"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-sm w-full">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"SOLVE AI Mentor"}
                        </span>
                        <span className="font-code text-code text-[11px] text-on-surface-variant">
                          {"10:15 AM"}
                        </span>
                        <span className="hidden font-code text-code text-[11px] bg-primary text-on-primary px-2 py-0.5 rounded font-medium flex items-center gap-1" id="jump-tag-indicator">
                          <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                            {"my_location"}
                          </span>
                          <span>
                            {"Matched search: “head pointer”"}
                          </span>
                        </span>
                      </div>
                      <button className="p-1 rounded text-on-surface-variant hover:text-on-surface hover:bg-surface-container" type="button">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"content_copy"}
                        </span>
                      </button>
                    </div>
                    <div className="p-space-lg rounded-2xl bg-surface-container-lowest shadow-sm flex flex-col gap-space-md transition-all" id="target-message-body">
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                        {"\n                Spot on. You preserve structural traversal continuity. Now connect the new node to the current \n                "}
                        <mark className="bg-surface-container-highest text-on-surface px-1 py-0.5 rounded font-medium">
                          {"head pointer"}
                        </mark>
                        {"\n                first so that you don't lose the reference to the rest of the existing chain.\n              "}
                      </p>
                      <div className="bg-surface-container-low p-space-md rounded-xl font-code text-code text-xs text-on-surface flex flex-col gap-2">
                        <div className="text-on-surface-variant font-label-sm text-[11px] uppercase tracking-wider">
                          {"Memory Allocation Trace"}
                        </div>
                        <div className="bg-surface-container-lowest p-3 rounded-lg overflow-x-auto">
                          <pre className="font-code text-code text-xs leading-normal">
                            {"newNode->next = head;    // Step 1: Link new node to head node\nhead = newNode;          // Step 2: Relocate head pointer to newNode"}
                          </pre>
                        </div>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"\n                  If you swap those two lines, "}
                          <code className="bg-surface-container px-1 rounded">
                            {"head = newNode"}
                          </code>
                          {" overwrites the memory address of the entire subsequent chain before attaching it, causing an irreversible memory leak.\n                "}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 pt-2 text-on-surface-variant font-label-sm text-label-sm">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"bookmark"}
                        </span>
                        <span>
                          {"Linked lists · Step 2 of 7 in Master Core Structures"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex items-start gap-space-md max-w-2xl">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-code text-xs font-semibold text-on-surface shrink-0">
                    {"\n            AR\n          "}
                  </div>
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Alex Rivera"}
                      </span>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"10:18 AM"}
                      </span>
                    </div>
                    <div className="p-space-md rounded-2xl bg-surface-container-low text-on-surface font-body-md text-body-md">
                      {"\n              Got it! So the head pointer assignment is always the commitment step. Let's practice writing the deletion code now.\n            "}
                    </div>
                  </div>
                </div>
              </div>
              <div className="hidden sticky bottom-6 self-center z-20" id="floating-jump-latest">
                <button className="px-4 py-2 rounded-full bg-primary text-on-primary font-label-md text-label-md font-medium shadow-md flex items-center gap-2 hover:bg-neutral-800 transition-all" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span>
                    {"Jump to latest message"}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"arrow_downward"}
                  </span>
                </button>
              </div>
              <div className="sticky bottom-0 bg-background/90 backdrop-blur-md pt-2 pb-6">
                <div className="bg-surface-container-lowest p-space-sm rounded-2xl shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-2 px-2 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span>
                      {"SOLVE Mentor is listening"}
                    </span>
                    <span className="text-outline-variant">
                      {"·"}
                    </span>
                    <span className="font-code text-[11px]">
                      {"C++ / Data Structures context active"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <input className="flex-1 px-3 py-2 bg-transparent text-on-surface placeholder:text-on-surface-variant focus:outline-none font-body-md text-body-md" placeholder="Ask a follow-up or test an edge case..." type="text" />
                    <button className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:bg-neutral-800 transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_upward"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="fixed inset-0 top-16 left-72 bg-black/30 backdrop-blur-sm z-40 flex items-start justify-center p-space-lg md:p-space-2xl overflow-y-auto transition-opacity duration-200" id="modal-backdrop">
              <div className="w-full max-w-[680px] bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150" id="chat-search-dialog">
                <div className="p-space-lg pb-space-md flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"Search chats"}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-medium">
                      {"Chat only"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-on-surface-variant font-code text-code text-[11px] hidden sm:inline">
                      {"ESC to close"}
                    </span>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"close"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="mx-space-lg px-space-md py-2 rounded-xl bg-surface-container-low flex items-center justify-between text-on-surface-variant font-body-sm text-body-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[16px] text-on-surface" aria-hidden="true">
                      {"info"}
                    </span>
                    <span>
                      {"Study history is isolated in Study mode."}
                    </span>
                  </div>
                  <button className="font-label-sm text-label-sm font-medium text-on-surface hover:underline" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            Switch to Study search →\n          "}
                  </button>
                </div>
                <div className="p-space-lg flex flex-col gap-1.5">
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface text-[20px]" aria-hidden="true">
                      {"search"}
                    </span>
                    <input className="w-full pl-11 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant shadow-sm focus:outline-none focus:ring-1 focus:ring-primary" id="chat-search-input" placeholder="Search conversation titles and messages..." type="text" defaultValue="head pointer" />
                    <button className="absolute right-3 p-1 rounded-md text-on-surface-variant hover:text-on-surface" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"clear"}
                      </span>
                    </button>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant px-1">
                    {"\n            Search covers conversation titles, message text, and synthesized code excerpts.\n          "}
                  </span>
                </div>
                <div className="px-space-lg pb-space-lg flex flex-col gap-space-sm max-h-[380px] overflow-y-auto">
                  <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm px-1 py-1">
                    <span className="uppercase tracking-wider font-semibold text-[11px]">
                      {"3 Results Found"}
                    </span>
                    <span className="font-code text-code text-[11px]">
                      {"Sorted by relevance"}
                    </span>
                  </div>
                  <div className="group p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer flex flex-col gap-2 shadow-sm" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface group-hover:text-primary">
                          {"\n                  Data Structures mid preparation\n                "}
                        </span>
                        <span className="bg-primary text-on-primary font-code text-code text-[10px] px-2 py-0.5 rounded font-medium">
                          {"Chat Exam Prep"}
                        </span>
                      </div>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"25m ago"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {"\n              “…spot on. You preserve structural traversal continuity. Now connect the new node to the current "}
                      <span className="bg-surface-container-highest text-on-surface font-semibold px-1 rounded">
                        {"head pointer"}
                      </span>
                      {" before reassignment…”\n            "}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {"turn_slight_right"}
                        </span>
                        {"\n                Linked lists · Step 2 of 7\n              "}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        {"\n                Jump to message "}
                        <span className="font-code">
                          {"↵"}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="group p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all cursor-pointer flex flex-col gap-2 shadow-sm" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"\n                  Explain recursion\n                "}
                        </span>
                        <span className="bg-surface-container-high text-on-surface-variant font-code text-code text-[10px] px-2 py-0.5 rounded">
                          {"Core Logic"}
                        </span>
                      </div>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"2d ago"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {"\n              “…base case acts similarly to the null guard on a "}
                      <span className="bg-surface-container-highest text-on-surface font-semibold px-1 rounded">
                        {"head pointer"}
                      </span>
                      {" before traversing down recursive invocation frames…”\n            "}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"\n                Function call stack unwinding\n              "}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        {"\n                Open conversation "}
                        <span className="font-code">
                          {"↵"}
                        </span>
                      </span>
                    </div>
                  </div>
                  <div className="group p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container transition-all cursor-pointer flex flex-col gap-2 shadow-sm" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"\n                  C++ Memory Leaks & Pointers\n                "}
                        </span>
                        <span className="bg-surface-container-high text-on-surface-variant font-code text-code text-[10px] px-2 py-0.5 rounded">
                          {"Systems Debug"}
                        </span>
                      </div>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"5d ago"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed">
                      {"\n              “…deleting the old node without adjusting the "}
                      <span className="bg-surface-container-highest text-on-surface font-semibold px-1 rounded">
                        {"head pointer"}
                      </span>
                      {" leaves a dangling reference in the parent stack block…”\n            "}
                    </p>
                    <div className="flex items-center justify-between pt-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"\n                Valgrind analysis traces\n              "}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1 group-hover:translate-x-0.5 transition-transform">
                        {"\n                Open conversation "}
                        <span className="font-code">
                          {"↵"}
                        </span>
                      </span>
                    </div>
                  </div>
                </div>
                <div className="px-space-lg py-space-sm bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center gap-1 font-code text-[11px]">
                      <kbd className="bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
                        {"↑"}
                      </kbd>
                      <kbd className="bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
                        {"↓"}
                      </kbd>
                      <span className="text-on-surface-variant ml-1 font-body-sm">
                        {"Navigate"}
                      </span>
                    </span>
                    <span className="flex items-center gap-1 font-code text-[11px]">
                      <kbd className="bg-surface-container-lowest px-1.5 py-0.5 rounded shadow-sm">
                        {"↵"}
                      </kbd>
                      <span className="text-on-surface-variant ml-1 font-body-sm">
                        {"Select"}
                      </span>
                    </span>
                  </div>
                  <button className="text-on-surface font-medium hover:underline text-label-sm flex items-center gap-1" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                      {"inventory_2"}
                    </span>
                    <span>
                      {"View Archived History"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="hidden w-full max-w-[680px] bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150" id="study-search-dialog">
                <div className="p-space-lg pb-space-md flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"Search study curriculum"}
                    </h2>
                    <span className="px-2.5 py-0.5 rounded-full bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium">
                      {"Study only"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-on-surface-variant font-code text-code text-[11px] hidden sm:inline">
                      {"ESC to close"}
                    </span>
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"close"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="p-space-lg flex flex-col gap-1.5">
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface text-[20px]" aria-hidden="true">
                      {"school"}
                    </span>
                    <input className="w-full pl-11 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant shadow-sm focus:outline-none focus:ring-1 focus:ring-primary" placeholder="Search learning objectives, syllabus goals, and study sessions..." type="text" defaultValue="loop" />
                    <button className="absolute right-3 p-1 rounded-md text-on-surface-variant hover:text-on-surface" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"clear"}
                      </span>
                    </button>
                  </div>
                  <span className="font-body-sm text-body-sm text-on-surface-variant px-1">
                    {"\n            Grouped by parent objective milestones and mastered checkpoints.\n          "}
                  </span>
                </div>
                <div className="px-space-lg pb-space-lg flex flex-col gap-space-md max-h-[400px] overflow-y-auto">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between px-2 text-on-surface font-label-sm text-label-sm">
                      <div className="flex items-center gap-2 font-semibold">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"folder_open"}
                        </span>
                        <span>
                          {"Python Foundations"}
                        </span>
                        <span className="bg-surface-container px-2 py-0.2 rounded font-code text-[11px] font-normal text-on-surface-variant">
                          {"Target Milestone 1"}
                        </span>
                      </div>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"2 Sessions"}
                      </span>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container-high transition-all cursor-pointer flex flex-col gap-1 ml-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Conditions and loops"}
                        </span>
                        <span className="font-code text-code text-[11px] bg-primary text-on-primary px-2 py-0.2 rounded font-medium">
                          {"85% Complete"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"\n                “…check when the "}
                        <mark className="bg-surface-container-highest px-1 rounded font-medium text-on-surface">
                          {"loop"}
                        </mark>
                        {" should stop using break invariants and condition evaluation guards…”\n              "}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Practice: While vs For iterators"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface font-medium">
                          {"Resume study unit →"}
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all cursor-pointer flex flex-col gap-1 ml-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Functional Programming & Iterators"}
                        </span>
                        <span className="font-code text-code text-[11px] text-on-surface-variant">
                          {"Mastered"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"\n                “…replacing stateful while "}
                        <mark className="bg-surface-container-highest px-1 rounded font-medium text-on-surface">
                          {"loop"}
                        </mark>
                        {" constructs with map and comprehension idioms…”\n              "}
                      </p>
                      <div className="flex items-center justify-between pt-1">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Synthesized Summary note"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface font-medium">
                          {"Review notes →"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2 pt-2">
                    <div className="flex items-center justify-between px-2 text-on-surface font-label-sm text-label-sm">
                      <div className="flex items-center gap-2 font-semibold">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"folder_open"}
                        </span>
                        <span>
                          {"Asynchronous Event Loops in Distributed Systems"}
                        </span>
                      </div>
                      <span className="font-code text-code text-[11px] text-on-surface-variant">
                        {"1 Session"}
                      </span>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-all cursor-pointer flex flex-col gap-1 ml-4 shadow-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Node.js vs Tokio Core Event Loop Architecture"}
                        </span>
                        <span className="font-code text-code text-[11px] bg-surface-container px-2 py-0.2 rounded">
                          {"Planned"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"\n                “…how the main "}
                        <mark className="bg-surface-container-highest px-1 rounded font-medium text-on-surface">
                          {"loop"}
                        </mark>
                        {" thread delegates non-blocking I/O to libuv threadpool workers…”\n              "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="px-space-lg py-space-sm bg-surface-container-low flex items-center justify-between">
                  <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface flex items-center gap-1" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"arrow_back"}
                    </span>
                    <span>
                      {"Return to Chat Search"}
                    </span>
                  </button>
                  <span className="font-code text-code text-[11px] text-on-surface-variant">
                    {"Curriculum DB: Synced"}
                  </span>
                </div>
              </div>
              <div className="hidden w-full max-w-[680px] bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150" id="search-empty-dialog">
                <div className="p-space-lg pb-space-md flex items-center justify-between">
                  <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"Search chats"}
                  </h2>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className="px-space-lg pb-space-md">
                  <div className="relative flex items-center">
                    <span className="material-symbols-outlined absolute left-3.5 text-on-surface text-[20px]" aria-hidden="true">
                      {"search"}
                    </span>
                    <input className="w-full pl-11 pr-10 py-3 rounded-xl bg-surface-container-lowest text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary" type="text" defaultValue="hyper-quantum topological tensor" />
                    <button className="absolute right-3 p-1 rounded-md text-on-surface-variant hover:text-on-surface" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"clear"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="px-space-lg py-space-md flex flex-col items-center justify-center text-center gap-3">
                  <div className="w-8 h-8 rounded-full border-2 border-primary border-t-transparent animate-spin"></div>
                  <div className="flex flex-col gap-0.5">
                    <span className="font-label-md text-label-md font-medium text-on-surface">
                      {"Scanning vector embeddings across 124 threads..."}
                    </span>
                    <span className="font-code text-code text-[11px] text-on-surface-variant">
                      {"Searching semantic index · 48ms"}
                    </span>
                  </div>
                </div>
                <div className="m-space-lg p-space-xl rounded-xl bg-surface-container-low flex flex-col items-center justify-center text-center gap-space-sm">
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface-variant">
                    <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                      {"search_off"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1 max-w-sm">
                    <h3 className="font-label-md text-label-md font-semibold text-on-surface">
                      {"No matching conversations found"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"\n              We couldn’t find any chat sessions containing “hyper-quantum topological tensor”. Try searching for broader terms or switch modes.\n            "}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 mt-2">
                    <button className="px-3.5 py-1.5 rounded-xl bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:bg-neutral-800 transition-colors" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Search in Study mode\n            "}
                    </button>
                    <button className="px-3.5 py-1.5 rounded-xl bg-surface-container-lowest text-on-surface font-label-sm text-label-sm hover:bg-surface-container transition-colors shadow-sm" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Reset search query\n            "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full max-w-md bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150" id="rename-modal-dialog">
                <div className="p-space-lg pb-space-sm flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                      {"edit"}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"Rename conversation"}
                    </h2>
                  </div>
                  <button className="w-7 h-7 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className="p-space-lg flex flex-col gap-space-md">
                  <div className="flex flex-col gap-1.5">
                    <label className="font-label-sm text-label-sm font-medium text-on-surface-variant">
                      {"Conversation title"}
                    </label>
                    <input className="w-full px-3.5 py-2.5 rounded-xl bg-surface-container-low text-on-surface font-body-md text-body-md shadow-sm focus:outline-none focus:ring-1 focus:ring-primary" id="rename-input-field" type="text" defaultValue="Data Structures mid preparation" />
                  </div>
                  <div className="flex items-center justify-end gap-2 pt-2">
                    <button className="px-4 py-2 rounded-xl text-on-surface-variant hover:text-on-surface hover:bg-surface-container font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Cancel\n            "}
                    </button>
                    <button className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Save changes\n            "}
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden w-full max-w-2xl bg-surface-container-lowest rounded-2xl shadow-xl flex flex-col overflow-hidden my-auto animate-in fade-in zoom-in-95 duration-150" id="archived-history-dialog">
                <div className="p-space-lg pb-space-sm flex items-center justify-between">
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[22px] text-on-surface" aria-hidden="true">
                        {"inventory_2"}
                      </span>
                      <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                        {"Archived chat history"}
                      </h2>
                    </div>
                    <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"\n              These conversations are removed from your active sidebar but remain searchable and restorable.\n            "}
                    </span>
                  </div>
                  <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className="p-space-lg flex flex-col gap-space-sm max-h-[420px] overflow-y-auto">
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                          {"\n                  Matrix Eigenvalues & Diagonalization\n                "}
                        </span>
                        <span className="bg-surface-container px-2 py-0.2 rounded font-code text-[11px] text-on-surface-variant shrink-0">
                          {"Linear Alg"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {"\n                14 messages · Archived 18 days ago · 3 study notes extracted\n              "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium transition-colors shadow-sm flex items-center gap-1" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                          {"unarchive"}
                        </span>
                        <span>
                          {"Restore"}
                        </span>
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[22]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Open\n              "}
                      </button>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                          {"\n                  Rust Borrow Checker & Lifetimes\n                "}
                        </span>
                        <span className="bg-surface-container px-2 py-0.2 rounded font-code text-[11px] text-on-surface-variant shrink-0">
                          {"Systems"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {"\n                28 messages · Archived 1 month ago · Full practice code recorded\n              "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium transition-colors shadow-sm flex items-center gap-1" onClick={event => { const result = actions.current[23]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                          {"unarchive"}
                        </span>
                        <span>
                          {"Restore"}
                        </span>
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[24]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Open\n              "}
                      </button>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md shadow-sm">
                    <div className="flex flex-col gap-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="font-label-md text-label-md font-semibold text-on-surface truncate">
                          {"\n                  Microservices Saga Pattern vs 2PC\n                "}
                        </span>
                        <span className="bg-surface-container px-2 py-0.2 rounded font-code text-[11px] text-on-surface-variant shrink-0">
                          {"Architecture"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {"\n                9 messages · Archived 2 months ago\n              "}
                      </p>
                    </div>
                    <div className="flex items-center gap-2 shrink-0">
                      <button className="px-3 py-1.5 rounded-lg bg-surface-container-lowest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium transition-colors shadow-sm flex items-center gap-1" onClick={event => { const result = actions.current[25]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                          {"unarchive"}
                        </span>
                        <span>
                          {"Restore"}
                        </span>
                      </button>
                      <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[26]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"\n                Open\n              "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="px-space-lg py-space-sm bg-surface-container-low flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm">
                  <span>
                    {"Total archived storage: 3 conversations (184 KB)"}
                  </span>
                  <button className="text-on-surface font-medium hover:underline" onClick={event => { const result = actions.current[27]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            Back to search\n          "}
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden fixed left-4 top-56 z-50 w-64 bg-surface-container-lowest rounded-xl shadow-2xl p-1.5 flex flex-col gap-0.5 animate-in fade-in duration-150" id="sidebar-context-menu">
              <div className="px-3 py-2 text-on-surface-variant font-code text-code text-[11px] uppercase tracking-wider flex items-center justify-between">
                <span>
                  {"Thread Options"}
                </span>
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"tune"}
                </span>
              </div>
              <button className="w-full px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-2.5 transition-colors" onClick={event => { const result = actions.current[28]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"edit"}
                </span>
                <span>
                  {"Rename conversation"}
                </span>
              </button>
              <button className="w-full px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-2.5 transition-colors" onClick={event => { const result = actions.current[29]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"push_pin"}
                </span>
                <span id="pin-btn-text">
                  {"Unpin from sidebar"}
                </span>
              </button>
              <button className="w-full px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-2.5 transition-colors" onClick={event => { const result = actions.current[30]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"archive"}
                </span>
                <span>
                  {"Archive thread"}
                </span>
              </button>
              <div className="my-1 border-t border-surface-container-high"></div>
              <button className="w-full px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container font-label-sm text-label-sm flex items-center gap-2.5 transition-colors" onClick={event => { const result = actions.current[31]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"download"}
                </span>
                <span>
                  {"Export as Markdown"}
                </span>
              </button>
              <button className="w-full px-3 py-2 rounded-lg text-left text-error hover:bg-error-container font-label-sm text-label-sm flex items-center gap-2.5 transition-colors" onClick={event => { const result = actions.current[32]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"delete"}
                </span>
                <span>
                  {"Delete thread"}
                </span>
              </button>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
