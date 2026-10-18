'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/e3428b36db7843b5af5389bf3dce5f23';
import './e3428b36db7843b5af5389bf3dce5f23.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-e3428b36db7843b5af5389bf3dce5f23 bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen selection:bg-secondary-container" data-screen-id="e3428b36db7843b5af5389bf3dce5f23">
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter flex items-center justify-between gap-space-xs">
        <div className="flex items-center gap-space-xs">
          <button aria-label="Open Drawer" className="w-11 h-11 flex items-center justify-center text-on-surface hover:bg-surface-container rounded-lg transition-colors" id="drawer-toggle-btn" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {"menu"}
            </span>
          </button>
          <div className="flex items-center gap-1.5 pl-1">
            <span className="font-code text-code font-bold tracking-tight text-on-surface uppercase">
              {"SOLVE"}
            </span>
          </div>
        </div>
        <div className="flex items-center bg-surface-container p-0.5 rounded-full">
          <button className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm shadow-[0_1px_3px_rgba(0,0,0,0.04)] transition-all" id="switcher-chat" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"Chat"}
          </button>
          <button className="px-3 py-1 rounded-full text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" id="switcher-study" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"Study"}
          </button>
        </div>
        <div className="flex items-center gap-space-xs">
          <button aria-label="Compose Session" className="w-11 h-11 flex items-center justify-center text-on-surface hover:bg-surface-container rounded-lg transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"edit_square"}
            </span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              {"person"}
            </span>
          </div>
        </div>
      </div>
    </header>
    <div className="fixed inset-0 z-50 bg-on-surface/20 backdrop-blur-sm hidden transition-opacity" id="nav-backdrop" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
    <aside className="fixed top-0 bottom-0 left-0 w-80 max-w-[85vw] z-50 bg-surface-container-lowest flex flex-col shadow-[0_1px_8px_rgba(0,0,0,0.08)] -translate-x-full transition-transform duration-300 ease-in-out" id="nav-drawer">
      <div className="pt-safe">
        <div className="h-16 px-gutter flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
              {"hub"}
            </span>
            <span className="font-headline-sm text-headline-sm text-on-surface">
              {"Workspace History"}
            </span>
          </div>
          <button className="w-11 h-11 flex items-center justify-center text-on-surface-variant hover:text-on-surface" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"close"}
            </span>
          </button>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto px-gutter py-space-md flex flex-col gap-space-lg">
        <div className="flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-2">
            {"Chat Sessions"}
          </span>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"chat_bubble"}
              </span>
              <span className="truncate font-body-sm text-body-sm">
                {"Linear Algebra & Vectors"}
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"chat_bubble"}
              </span>
              <span className="truncate font-body-sm text-body-sm">
                {"Transformer Architectures"}
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"chat_bubble"}
              </span>
              <span className="truncate font-body-sm text-body-sm">
                {"Proof of Work Consensus"}
              </span>
            </a>
          </div>
        </div>
        <div className="flex flex-col gap-space-sm">
          <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-2">
            {"Study Modules"}
          </span>
          <div className="flex flex-col gap-1">
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"school"}
              </span>
              <span className="truncate font-body-sm text-body-sm">
                {"Distributed Systems Notes"}
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"school"}
              </span>
              <span className="truncate font-body-sm text-body-sm">
                {"Quantum Computing Deck"}
              </span>
            </a>
            <a className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-on-surface hover:bg-surface-container-low transition-colors" href="#">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"school"}
              </span>
              <span className="truncate font-body-sm text-body-sm">
                {"Microeconomics Cram Pack"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="p-gutter pb-safe bg-surface-container-low flex items-center justify-between">
        <div className="flex items-center gap-3">
          <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
            {"archive"}
          </span>
          <span className="font-label-md text-label-md text-on-surface">
            {"All Archives"}
          </span>
        </div>
        <span className="font-code text-code text-secondary">
          {"v1.0.4"}
        </span>
      </div>
    </aside>
    <main className="flex-1 flex flex-col relative w-full pt-16 pb-20 bg-surface">
      <div className="flex flex-col w-full relative">
        <div className="px-gutter pt-2 pb-3">
          <div className="bg-surface-container p-1 rounded-xl flex items-center justify-between gap-1 overflow-x-auto shadow-sm">
            <button className="px-2.5 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5 shadow-sm" id="tab-btn-chat" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"chat"}
              </span>
              {"\n        1. Chat Mode\n      "}
            </button>
            <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5" id="tab-btn-study" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"school"}
              </span>
              {"\n        2. Study Mode\n      "}
            </button>
            <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5" id="tab-btn-drawer-chat" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"dock_to_right"}
              </span>
              {"\n        3. Chat Drawer\n      "}
            </button>
            <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5" id="tab-btn-drawer-study" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"folder_open"}
              </span>
              {"\n        4. Study Drawer\n      "}
            </button>
            <button className="px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm whitespace-nowrap transition-all flex items-center gap-1.5" id="tab-btn-drawer-target" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"crisis_alert"}
              </span>
              {"\n        5. Target Status\n      "}
            </button>
          </div>
        </div>
        <section className="flex flex-col w-full px-gutter pb-24 transition-opacity duration-200" id="view-chat">
          <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-2.5 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-code text-code text-on-surface-variant uppercase tracking-wider">
                  {"Chat Workspace"}
                </span>
              </div>
              <button className="flex items-center gap-1 px-2.5 py-1 bg-surface-container rounded-full text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" type="button">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"add"}
                </span>
                <span>
                  {"New chat"}
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-1">
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                {"Data Structures mid preparation"}
              </h2>
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">
                    {"alarm"}
                  </span>
                  <span>
                    {"Exam in 18h"}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px] text-secondary" aria-hidden="true">
                    {"pace"}
                  </span>
                  <span>
                    {"4h Plan active"}
                  </span>
                </div>
                <div className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
                  <span className="font-code text-code">
                    {"Socratic AI"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-4">
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 text-[14px] font-semibold mt-0.5 shadow-sm">
                {"\n          S\n        "}
              </div>
              <div className="flex-1 flex flex-col gap-2 bg-surface-container-lowest p-4 rounded-xl shadow-sm text-on-surface">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {"SOLVE Mentor · 10:41 AM"}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                    {"psychology"}
                  </span>
                </div>
                <p className="font-body-md text-body-md leading-relaxed">
                  {"\n            Let's dissect node removal in a singly linked list. Before jumping to code: if we only hold a reference to node "}
                  <span className="font-code bg-surface-container px-1 py-0.5 rounded">
                    {"curr"}
                  </span>
                  {", why can't we simply dereference it without updating the predecessor?\n          "}
                </p>
                <div className="p-3 bg-surface-container-low rounded-lg flex flex-col gap-1.5 text-on-surface">
                  <div className="flex items-center gap-2 font-code text-code text-secondary font-medium">
                    <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                      {"schema"}
                    </span>
                    <span>
                      {"Memory Graph Topology"}
                    </span>
                  </div>
                  <div className="py-2 flex items-center justify-center gap-1 overflow-x-auto">
                    <div className="px-2.5 py-1.5 rounded bg-surface-container-lowest shadow-sm flex flex-col items-center">
                      <span className="font-code text-code font-bold">
                        {"Node A"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"next: &B"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                    <div className="px-2.5 py-1.5 rounded bg-primary text-on-primary shadow-sm flex flex-col items-center">
                      <span className="font-code text-code font-bold">
                        {"Node B (curr)"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-primary-container">
                        {"next: &C"}
                      </span>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                    <div className="px-2.5 py-1.5 rounded bg-surface-container-lowest shadow-sm flex flex-col items-center">
                      <span className="font-code text-code font-bold">
                        {"Node C"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"next: null"}
                      </span>
                    </div>
                  </div>
                  <span className="font-label-sm text-label-sm text-on-surface-variant italic text-center">
                    {"Break link A -> B to point directly to C"}
                  </span>
                </div>
              </div>
            </div>
            <div className="flex items-start gap-3 justify-end">
              <div className="max-w-[85%] bg-surface-container-high text-on-surface p-3.5 rounded-xl shadow-sm flex flex-col gap-1">
                <div className="flex items-center justify-between text-on-surface-variant">
                  <span className="font-label-sm text-label-sm">
                    {"You · 10:43 AM"}
                  </span>
                </div>
                <p className="font-body-md text-body-md">
                  {"\n            Because Node A's pointer is still pointing to Node B's memory address. The chain breaks if A doesn't leapfrog straight to Node C.\n          "}
                </p>
              </div>
              <div className="w-8 h-8 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"person"}
                </span>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shrink-0 text-[14px] font-semibold mt-0.5 shadow-sm">
                {"\n          S\n        "}
              </div>
              <div className="flex-1 flex flex-col gap-3 bg-surface-container-lowest p-4 rounded-xl shadow-sm text-on-surface">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {"SOLVE Mentor · 10:44 AM"}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                    {"verified"}
                  </span>
                </div>
                <p className="font-body-md text-body-md leading-relaxed">
                  {"\n            Spot on. You preserve structural traversal continuity in "}
                  <span className="font-code text-code font-bold">
                    {"O(1)"}
                  </span>
                  {" pointer operations:\n          "}
                </p>
                <div className="bg-surface-container-low p-3 rounded-lg flex flex-col gap-1.5 font-code text-code overflow-x-auto text-on-surface">
                  <div className="flex items-center justify-between text-secondary pb-1">
                    <span>
                      {"LinkedList.py"}
                    </span>
                    <button className="hover:text-primary flex items-center gap-1 font-label-sm text-label-sm" type="button">
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        {"content_copy"}
                      </span>
                      {" Copy\n              "}
                    </button>
                  </div>
                  <pre className="text-on-surface leading-snug">
                    <code>
                      <span className="text-secondary">
                        {"# Leapfrog predecessor reference"}
                      </span>
                      {"\nprev.next = curr.next\ncurr.next = "}
                      <span className="text-secondary">
                        {"None"}
                      </span>
                      <span className="text-secondary">
                        {"# Isolate target"}
                      </span>
                    </code>
                  </pre>
                </div>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1.5 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"check_circle"}
                    </span>
                    <span>
                      {"Concept locked in"}
                    </span>
                  </div>
                  <button className="px-2.5 py-1 bg-surface-container rounded-lg font-label-sm text-label-sm text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                    {"\n              Test Edge Case (Head Node)\n            "}
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="hidden flex flex-col w-full px-gutter pb-24 transition-opacity duration-200" id="view-study">
          <div className="bg-surface-container-lowest rounded-xl p-4 shadow-sm flex flex-col gap-3 mb-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-secondary"></span>
                <span className="font-code text-code text-on-surface-variant uppercase tracking-wider">
                  {"Study Workspace"}
                </span>
              </div>
              <button className="flex items-center gap-1 px-2.5 py-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm hover:opacity-90 transition-opacity" type="button">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"add"}
                </span>
                <span>
                  {"New study goal"}
                </span>
              </button>
            </div>
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface">
                {"Python Foundations Session"}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Core Language Internals · Scope resolution, iterables & generators"}
              </p>
            </div>
            <div className="flex flex-col gap-1.5 pt-1">
              <div className="flex items-center justify-between font-label-sm text-label-sm text-on-surface-variant">
                <span>
                  {"Mastery Progress"}
                </span>
                <span className="font-code text-code text-on-surface font-semibold">
                  {"68%"}
                </span>
              </div>
              <div className="w-full h-1.5 bg-surface-container rounded-full overflow-hidden">
                <div className="h-full bg-primary rounded-full w-[68%] transition-all"></div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-3.5">
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"bolt"}
                  </span>
                  <span>
                    {"Card 4 of 12"}
                  </span>
                </div>
                <span className="font-code text-code text-secondary">
                  {"LEGB Rule"}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {"What is the exact search priority order in Python variable lookups?"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Recall memory references and lexical scoping hierarchy."}
                </p>
              </div>
              <div className="grid grid-cols-1 gap-2 pt-1">
                <button className="w-full text-left p-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between transition-colors" type="button">
                  <span className="font-body-sm text-body-sm">
                    {"A. Local > Enclosing > Global > Built-in"}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                    {"radio_button_unchecked"}
                  </span>
                </button>
                <button className="w-full text-left p-3 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface flex items-center justify-between transition-colors" type="button">
                  <span className="font-body-sm text-body-sm">
                    {"B. Global > Local > Enclosing > Built-in"}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                    {"radio_button_unchecked"}
                  </span>
                </button>
              </div>
              <div className="flex items-center justify-between pt-2">
                <button className="text-on-surface-variant font-label-sm text-label-sm hover:text-on-surface flex items-center gap-1" type="button">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"visibility"}
                  </span>
                  {" Reveal Concept Hint\n          "}
                </button>
                <button className="px-3 py-1.5 bg-primary text-on-primary rounded-lg font-label-sm text-label-sm shadow-sm hover:opacity-90 transition-opacity" type="button">
                  {"\n            Submit Answer\n          "}
                </button>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-4 rounded-xl shadow-sm flex flex-col gap-3">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                  {"Active Syllabus Checkpoints"}
                </span>
                <span className="font-code text-code text-on-surface-variant">
                  {"Unit 3"}
                </span>
              </div>
              <div className="flex flex-col gap-2">
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                      {"check_box"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {"Mutable vs Immutable Memory (id, hash)"}
                    </span>
                  </div>
                  <span className="font-code text-code text-secondary">
                    {"Done"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                      {"check_box"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {"Generator Functions & `yield` mechanics"}
                    </span>
                  </div>
                  <span className="font-code text-code text-secondary">
                    {"Done"}
                  </span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low">
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"check_box_outline_blank"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface font-medium">
                      {"Metaclasses and Class Construction"}
                    </span>
                  </div>
                  <span className="font-code text-code text-primary font-bold">
                    {"Up Next"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="fixed bottom-14 left-0 right-0 p-3 bg-surface/90 backdrop-blur-md z-40">
          <div className="max-w-md mx-auto bg-surface-container-lowest rounded-xl p-2 shadow-md flex items-center gap-2">
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Attach file or code snippet" type="button" aria-label="Attach file or code snippet">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"add_circle"}
              </span>
            </button>
            <input className="flex-1 bg-transparent text-on-surface placeholder:text-on-surface-variant font-body-sm text-body-sm focus:outline-none px-1" id="composer-input" placeholder="Ask question, verify proof, or solve step..." type="text" />
            <button className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Dictate question" type="button" aria-label="Dictate question">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"mic"}
              </span>
            </button>
            <button className="w-9 h-9 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 shadow-sm" title="Send query" type="button" aria-label="Send query">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_upward"}
              </span>
            </button>
          </div>
        </div>
        <div className="fixed inset-0 z-50 pointer-events-none transition-all duration-300" id="scoped-drawer">
          <div className="absolute inset-0 bg-on-surface/20 backdrop-blur-sm opacity-0 transition-opacity pointer-events-none" id="drawer-scrim" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
          <div className="absolute top-0 bottom-0 left-0 w-80 max-w-[85vw] bg-surface-container-lowest shadow-xl -translate-x-full transition-transform duration-300 flex flex-col pointer-events-auto" id="drawer-panel">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-7 h-7 rounded-lg bg-primary text-on-primary flex items-center justify-center font-bold text-xs">
                  {"S"}
                </div>
                <span className="font-headline-sm text-headline-sm text-on-surface" id="drawer-mode-title">
                  {"Chat Workspace"}
                </span>
              </div>
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="px-4 py-2 flex flex-col gap-2.5">
              <div className="relative flex items-center">
                <span className="material-symbols-outlined absolute left-2.5 text-secondary text-[18px]" aria-hidden="true">
                  {"search"}
                </span>
                <input className="w-full pl-9 pr-3 py-2 bg-surface-container rounded-lg font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none" id="drawer-search-input" placeholder="Search chats..." type="text" />
              </div>
              <button className="w-full py-2 px-3 rounded-lg bg-primary text-on-primary flex items-center justify-center gap-2 font-label-md text-label-md hover:opacity-90 shadow-sm transition-opacity" id="drawer-action-btn" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"add"}
                </span>
                <span id="drawer-action-text">
                  {"+ New chat"}
                </span>
              </button>
            </div>
            <div className="flex-1 overflow-y-auto px-4 py-3 flex flex-col gap-4">
              <div className="flex flex-col gap-1.5" id="drawer-history-container">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-1" id="drawer-section-label">
                  {"Chat History"}
                </span>
                <div className="flex flex-col gap-1" id="drawer-history-list"></div>
              </div>
              <div className="flex flex-col gap-1.5 pt-2">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider px-1">
                  {"Deep Context Navigation"}
                </span>
                <a className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors" href="#" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"hub"}
                    </span>
                    <span className="font-body-sm text-body-sm">
                      {"Knowledge Graph Map"}
                    </span>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                    {"chevron_right"}
                  </span>
                </a>
                <a className="flex items-center justify-between p-2.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-on-surface transition-colors" href="#" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                  <div className="flex items-center gap-2.5">
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"crisis_alert"}
                    </span>
                    <span className="font-body-sm text-body-sm">
                      {"Target Status & Readiness"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1 font-code text-code text-on-surface font-semibold">
                    <span>
                      {"92%"}
                    </span>
                    <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                      {"chevron_right"}
                    </span>
                  </div>
                </a>
              </div>
            </div>
            <div className="p-4 bg-surface-container-low flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-full bg-surface-container-high flex items-center justify-center font-code text-code font-bold text-on-surface">
                  {"\n            DS\n          "}
                </div>
                <div className="flex flex-col">
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                    {"Midterm Sprint"}
                  </span>
                  <span className="font-code text-code text-secondary">
                    {"Active Session"}
                  </span>
                </div>
              </div>
              <span className="font-code text-code text-on-surface-variant">
                {"SOLVE v2.4"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold">
      <div className="flex justify-around items-center h-14 px-gutter">
        <a aria-current="page" className="flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] transition-colors text-primary font-semibold" data-path="workspace" href="#">
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            {"terminal"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Workspace"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] text-on-surface-variant transition-colors" data-path="library" href="#">
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            {"menu_book"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Library"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] text-on-surface-variant transition-colors" data-path="explore" href="#">
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            {"explore"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Explore"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-0.5 min-w-[44px] min-h-[44px] text-on-surface-variant transition-colors" data-path="profile" href="#">
          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
            {"account_circle"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Profile"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
