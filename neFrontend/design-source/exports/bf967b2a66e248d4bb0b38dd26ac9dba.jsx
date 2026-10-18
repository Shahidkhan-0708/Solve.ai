'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/bf967b2a66e248d4bb0b38dd26ac9dba';
import './bf967b2a66e248d4bb0b38dd26ac9dba.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-bf967b2a66e248d4bb0b38dd26ac9dba bg-surface font-body-md text-on-surface flex flex-col min-h-screen" data-screen-id="bf967b2a66e248d4bb0b38dd26ac9dba">
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
      <div className="flex flex-col w-full text-on-surface">
        <div className="px-margin pt-space-sm pb-space-xs flex items-center justify-between gap-space-xs overflow-x-auto">
          <div className="flex items-center gap-1.5 p-1 bg-surface-container-high rounded-full">
            <button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-primary text-on-primary shadow-sm transition-all" id="pill-plan-view" type="button">
              {"Plan"}
            </button>
            <button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" id="pill-details-view" type="button">
              {"Expanded"}
            </button>
            <button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" id="pill-sheet-view" type="button">
              {"Adjust"}
            </button>
            <button className="px-3 py-1 text-label-sm font-label-sm rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface transition-all" id="pill-loading-view" type="button">
              {"Syncing"}
            </button>
          </div>
          <span className="inline-flex items-center gap-1 text-[11px] font-code text-on-surface-variant uppercase tracking-wider bg-surface-container-low px-2 py-1 rounded-md">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
            {"\n      Synthesized\n    "}
          </span>
        </div>
        <div className="hidden mx-margin mt-space-xs p-space-sm bg-surface-container-low rounded-xl" id="loading-state-banner">
          <div className="flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-[18px] text-primary animate-spin" aria-hidden="true">
              {"sync"}
            </span>
            <span className="text-body-sm font-body-sm text-on-surface font-medium">
              {"Calibrating cognitive load for 4-hour crunch..."}
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-space-lg px-margin pt-space-xs pb-space-2xl">
          <section className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-space-xs">
              <span className="text-label-sm font-label-sm uppercase tracking-wider text-secondary font-medium">
                {"Your learning approach"}
              </span>
              <span className="text-label-sm font-label-sm bg-surface-container-high text-on-surface px-2 py-0.5 rounded-full font-medium">
                {"4h Total"}
              </span>
            </div>
            <h1 className="text-headline-lg-mobile font-headline-lg-mobile text-primary tracking-tight leading-snug">
              {"\n        A focused plan for your next 4 hours.\n      "}
            </h1>
            <div className="flex flex-wrap items-center gap-space-xs mt-space-sm p-space-sm bg-surface-container-low rounded-lg">
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                  {"school"}
                </span>
                <span className="text-label-sm font-label-sm text-on-surface font-medium">
                  {"Data Structures"}
                </span>
              </div>
              <span className="text-secondary">
                {"•"}
              </span>
              <div className="flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                  {"alarm"}
                </span>
                <span className="text-label-sm font-label-sm text-on-surface">
                  {"Tomorrow, 10 AM"}
                </span>
              </div>
              <span className="text-secondary">
                {"•"}
              </span>
              <span className="text-label-sm font-label-sm px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant font-medium">
                {"Target: Pass"}
              </span>
              <button className="ml-auto text-label-sm font-label-sm text-primary font-medium hover:underline inline-flex items-center gap-0.5" id="edit-details-trigger" type="button">
                {"\n          Edit\n          "}
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </button>
            </div>
            <div className="flex flex-col gap-space-sm mt-space-lg">
              <button className="w-full h-[50px] bg-primary text-on-primary rounded-xl font-label-md text-label-md font-medium hover:bg-primary-container active:scale-[0.99] transition-transform flex items-center justify-center gap-2 shadow-sm" type="button">
                <span>
                  {"Start with a quick check"}
                </span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"arrow_forward"}
                </span>
              </button>
              <button className="w-full h-[44px] bg-surface-container-low text-on-surface rounded-xl font-label-md text-label-md font-medium hover:bg-surface-container active:scale-[0.99] transition-transform flex items-center justify-center gap-2" id="open-adjust-sheet-btn" type="button">
                <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                  {"tune"}
                </span>
                <span>
                  {"Adjust plan"}
                </span>
              </button>
              <p className="text-center text-[12px] text-secondary font-body-sm mt-0.5">
                {"\n          Dynamic recalculation: You can change the sequence as you learn.\n        "}
              </p>
            </div>
          </section>
          <section className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <h2 className="text-headline-sm font-headline-sm text-on-surface">
                  {"How we’ll work"}
                </h2>
                <p className="text-body-sm font-body-sm text-secondary mt-1">
                  {"\n            We’ll work through past exam questions from your materials, explain the steps, and check what you can recall.\n          "}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-space-sm mt-space-md">
              <div className="flex gap-space-md p-space-sm bg-surface-container-low rounded-lg">
                <div className="w-7 h-7 rounded-full bg-primary text-on-primary font-label-sm font-medium flex items-center justify-center shrink-0">
                  {"\n            1\n          "}
                </div>
                <div className="flex flex-col">
                  <span className="text-label-md font-label-md font-medium text-on-surface">
                    {"Understand"}
                  </span>
                  <span className="text-body-sm font-body-sm text-secondary">
                    {"Clear explanation and 1 worked problem to lock the visual algorithm."}
                  </span>
                </div>
              </div>
              <div className="flex gap-space-md p-space-sm bg-surface-container-low rounded-lg">
                <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface font-label-sm font-medium flex items-center justify-center shrink-0">
                  {"\n            2\n          "}
                </div>
                <div className="flex flex-col">
                  <span className="text-label-md font-label-md font-medium text-on-surface">
                    {"Practise"}
                  </span>
                  <span className="text-body-sm font-body-sm text-secondary">
                    {"Similar question from your university bank with progressive hinting."}
                  </span>
                </div>
              </div>
              <div className="flex gap-space-md p-space-sm bg-surface-container-low rounded-lg">
                <div className="w-7 h-7 rounded-full bg-surface-container text-on-surface font-label-sm font-medium flex items-center justify-center shrink-0">
                  {"\n            3\n          "}
                </div>
                <div className="flex flex-col">
                  <span className="text-label-md font-label-md font-medium text-on-surface">
                    {"Explain back"}
                  </span>
                  <span className="text-body-sm font-body-sm text-secondary">
                    {"Describe the idea in 2 plain sentences or audio to catch mental blind spots."}
                  </span>
                </div>
              </div>
            </div>
            <div className="mt-space-md pt-space-xs">
              <button className="w-full flex items-center justify-between text-left py-space-xs text-on-surface-variant hover:text-on-surface" id="disclosure-toggle" type="button">
                <span className="text-label-md font-label-md font-medium flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"psychology"}
                  </span>
                  {"\n            Why this 80/20 approach?\n          "}
                </span>
                <span className="material-symbols-outlined text-[18px] transition-transform duration-200" id="disclosure-icon" aria-hidden="true">
                  {"expand_more"}
                </span>
              </button>
              <div className="hidden mt-space-xs p-space-sm bg-surface-container-low rounded-lg text-body-sm font-body-sm text-on-surface-variant" id="disclosure-content">
                {"\n          Your exam is under 24h away. Passive reading has a 20% retention rate after 12h, whereas retrieval practice + active verbalization yields 75% exam performance under time constraints.\n        "}
              </div>
            </div>
          </section>
          <section className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between pb-space-sm">
              <div>
                <h2 className="text-headline-sm font-headline-sm text-on-surface">
                  {"Your study sequence"}
                </h2>
                <p className="text-label-sm font-label-sm text-secondary">
                  {"7 stages · 4 hours scheduled"}
                </p>
              </div>
              <span className="text-code font-code text-label-sm text-on-surface-variant bg-surface-container-high px-2 py-0.5 rounded">
                {"240m"}
              </span>
            </div>
            <div className="space-y-space-sm mt-space-sm">
              <div className="p-space-md rounded-xl bg-surface-container-low transition-all">
                <div className="flex items-start justify-between gap-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center text-label-sm font-label-sm">
                      {"1"}
                    </span>
                    <div>
                      <div className="flex items-center gap-2">
                        <h3 className="text-label-md font-label-md font-semibold text-on-surface">
                          {"Quick starting check"}
                        </h3>
                        <span className="bg-primary text-on-primary text-[10px] font-label-sm uppercase px-1.5 py-0.2 rounded font-medium">
                          {"Up next"}
                        </span>
                      </div>
                      <p className="text-body-sm font-body-sm text-secondary">
                        {"10 min · Gauge baseline confidence"}
                      </p>
                    </div>
                  </div>
                  <button className="px-3 py-1.5 bg-primary text-on-primary text-label-sm font-label-sm rounded-lg hover:bg-primary-container shrink-0" type="button">
                    {"\n              Start\n            "}
                  </button>
                </div>
                <div className="mt-space-sm pt-space-sm bg-surface-container-lowest p-space-sm rounded-lg">
                  <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface-variant">
                    <span>
                      {"3 diagnostic multi-part questions"}
                    </span>
                    <span className="font-code text-label-sm text-secondary">
                      {"0/3"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="sequence-card p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer" data-step="2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-label-sm font-label-sm">
                      {"2"}
                    </span>
                    <div>
                      <h3 className="text-label-md font-label-md font-medium text-on-surface">
                        {"Linked lists (Singly & Doubly)"}
                      </h3>
                      <p className="text-body-sm font-body-sm text-secondary">
                        {"40 min · Reversals, loop detection"}
                      </p>
                    </div>
                  </div>
                  <span className="step-chevron material-symbols-outlined text-[18px] text-secondary transition-transform" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
                <div className="step-details hidden mt-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm">
                  <ul className="space-y-1.5 text-on-surface-variant text-body-sm">
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">
                        {"check_small"}
                      </span>
                      {"\n                Core concept: Pointer manipulation & edge cases\n              "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">
                        {"check_small"}
                      </span>
                      {"\n                Floyd’s cycle-finding (Tortoise & Hare)\n              "}
                    </li>
                    <li className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[14px] text-primary" aria-hidden="true">
                        {"check_small"}
                      </span>
                      {"\n                Worked exam problem: In-place list reverse\n              "}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="sequence-card p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer" data-step="3">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-label-sm font-label-sm">
                      {"3"}
                    </span>
                    <div>
                      <h3 className="text-label-md font-label-md font-medium text-on-surface">
                        {"Stacks and queues"}
                      </h3>
                      <p className="text-body-sm font-body-sm text-secondary">
                        {"40 min · Monotonic stack, circular buffers"}
                      </p>
                    </div>
                  </div>
                  <span className="step-chevron material-symbols-outlined text-[18px] text-secondary transition-transform" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
                <div className="step-details hidden mt-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm">
                  <p className="text-on-surface-variant text-body-sm">
                    {"Focus: Expression parsing, balanced parenthesis, and implementing Queue using two Stacks."}
                  </p>
                </div>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm">
                  <span className="w-6 h-6 rounded-full bg-surface-container-high text-secondary flex items-center justify-center text-label-sm font-label-sm">
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"bedtime"}
                    </span>
                  </span>
                  <div>
                    <h3 className="text-label-md font-label-md font-medium text-secondary">
                      {"Cognitive recharge break"}
                    </h3>
                    <p className="text-[12px] text-secondary">
                      {"10 min · Step away from screen"}
                    </p>
                  </div>
                </div>
                <span className="text-code font-code text-label-sm text-secondary">
                  {"10m"}
                </span>
              </div>
              <div className="sequence-card p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer" data-step="5">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-label-sm font-label-sm">
                      {"5"}
                    </span>
                    <div>
                      <h3 className="text-label-md font-label-md font-medium text-on-surface">
                        {"Trees & traversals"}
                      </h3>
                      <p className="text-body-sm font-body-sm text-secondary">
                        {"50 min · BST insertion, DFS/BFS orders"}
                      </p>
                    </div>
                  </div>
                  <span className="step-chevron material-symbols-outlined text-[18px] text-secondary transition-transform" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
                <div className="step-details hidden mt-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm">
                  <p className="text-on-surface-variant text-body-sm">
                    {"Heavy scoring section. Revisit pre/in/post-order reconstruction and height computation."}
                  </p>
                </div>
              </div>
              <div className="sequence-card p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer" data-step="6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-label-sm font-label-sm">
                      {"6"}
                    </span>
                    <div>
                      <h3 className="text-label-md font-label-md font-medium text-on-surface">
                        {"Mixed question-bank practice"}
                      </h3>
                      <p className="text-body-sm font-body-sm text-secondary">
                        {"50 min · Timed mock drills from PDF"}
                      </p>
                    </div>
                  </div>
                  <span className="step-chevron material-symbols-outlined text-[18px] text-secondary transition-transform" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
                <div className="step-details hidden mt-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm">
                  <p className="text-on-surface-variant text-body-sm">
                    {"5 curated exam questions from your uploaded \"DSA question bank.pdf\" with strict 10-minute timers."}
                  </p>
                </div>
              </div>
              <div className="sequence-card p-space-md rounded-xl bg-surface-container-lowest hover:bg-surface-container-low transition-colors cursor-pointer" data-step="7">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-space-sm">
                    <span className="w-6 h-6 rounded-full bg-surface-container text-on-surface flex items-center justify-center text-label-sm font-label-sm">
                      {"7"}
                    </span>
                    <div>
                      <h3 className="text-label-md font-label-md font-medium text-on-surface">
                        {"Recall and final review"}
                      </h3>
                      <p className="text-body-sm font-body-sm text-secondary">
                        {"40 min · High-yield formulas & complexities"}
                      </p>
                    </div>
                  </div>
                  <span className="step-chevron material-symbols-outlined text-[18px] text-secondary transition-transform" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
                <div className="step-details hidden mt-space-sm pt-space-sm bg-surface-container-low p-space-sm rounded-lg text-body-sm">
                  <p className="text-on-surface-variant text-body-sm">
                    {"Big-O cheat sheet review and mental run-through of primary data structure edge conditions."}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col bg-surface-container-lowest p-space-lg rounded-xl shadow-sm">
            <div className="flex items-center justify-between mb-space-xs">
              <h2 className="text-headline-sm font-headline-sm text-on-surface">
                {"Source materials"}
              </h2>
              <button className="text-label-sm font-label-sm text-secondary hover:text-on-surface flex items-center gap-1" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"add"}
                </span>
                {" Add more\n        "}
              </button>
            </div>
            <p className="text-body-sm font-body-sm text-secondary mb-space-sm">
              {"\n        Synthesized directly into your study prompts:\n      "}
            </p>
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-space-sm min-w-0">
                  <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                    {"picture_as_pdf"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-label-md font-label-md text-on-surface truncate">
                      {"DSA question bank.pdf"}
                    </p>
                    <p className="text-[11px] text-secondary">
                      {"24 pages parsed · 32 sample problems found"}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0" aria-hidden="true">
                  {"check_circle"}
                </span>
              </div>
              <div className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg">
                <div className="flex items-center gap-space-sm min-w-0">
                  <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                    {"image"}
                  </span>
                  <div className="min-w-0">
                    <p className="text-label-md font-label-md text-on-surface truncate">
                      {"Unit 2 handwritten notes.jpg"}
                    </p>
                    <p className="text-[11px] text-secondary">
                      {"OCR indexed · Linked lists and trees summary"}
                    </p>
                  </div>
                </div>
                <span className="material-symbols-outlined text-[18px] text-secondary shrink-0" aria-hidden="true">
                  {"check_circle"}
                </span>
              </div>
            </div>
          </section>
          <div className="bg-surface-container-lowest p-space-md rounded-2xl shadow-sm">
            <div className="flex items-center gap-space-xs bg-surface-container-low px-space-md py-space-sm rounded-xl">
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"add"}
                </span>
              </button>
              <input className="w-full bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface placeholder:text-secondary" placeholder="Ask about this plan or tell me what to change..." type="text" />
              <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface" type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"mic"}
                </span>
              </button>
              <button className="w-8 h-8 bg-primary text-on-primary rounded-lg flex items-center justify-center hover:bg-primary-container shrink-0" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"arrow_upward"}
                </span>
              </button>
            </div>
            <div className="flex items-center justify-between mt-space-xs px-1">
              <span className="text-[11px] text-secondary">
                {"Adaptive prompt suggestions:"}
              </span>
              <button className="text-[11px] text-primary hover:underline font-medium" type="button">
                {"\"Shorten to 3 hours\""}
              </button>
            </div>
          </div>
        </div>
        <div className="fixed inset-0 z-50 bg-primary/30 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="adjust-backdrop"></div>
        <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface-container-lowest rounded-t-2xl shadow-xl transform translate-y-full transition-transform duration-300 ease-out max-h-[777px] overflow-y-auto pb-safe" id="adjust-sheet">
          <div className="p-space-md flex flex-col items-center border-b-0">
            <div className="w-10 h-1 bg-surface-container-highest rounded-full mb-space-sm"></div>
            <div className="w-full flex items-center justify-between px-space-xs">
              <h3 className="text-headline-sm font-headline-sm text-on-surface">
                {"Adjust Strategy"}
              </h3>
              <button className="w-8 h-8 flex items-center justify-center rounded-full text-secondary hover:text-on-surface bg-surface-container-low" id="close-adjust-sheet-btn" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
          </div>
          <div className="px-space-lg pb-space-xl flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xs">
              <label className="text-label-md font-label-md text-on-surface font-medium">
                {"Available Time"}
              </label>
              <div className="grid grid-cols-4 gap-space-xs">
                <button className="time-chip py-2 bg-surface-container-low text-on-surface-variant rounded-lg text-label-sm font-label-sm" type="button">
                  {"2h Fast"}
                </button>
                <button className="time-chip py-2 bg-surface-container-low text-on-surface-variant rounded-lg text-label-sm font-label-sm" type="button">
                  {"3h Solid"}
                </button>
                <button className="time-chip py-2 bg-primary text-on-primary rounded-lg text-label-sm font-label-sm font-medium" type="button">
                  {"4h Full"}
                </button>
                <button className="time-chip py-2 bg-surface-container-low text-on-surface-variant rounded-lg text-label-sm font-label-sm" type="button">
                  {"6h Deep"}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="text-label-md font-label-md text-on-surface font-medium">
                {"Target Level"}
              </label>
              <div className="grid grid-cols-3 gap-space-xs">
                <button className="level-chip py-2 bg-primary text-on-primary rounded-lg text-label-sm font-label-sm font-medium" type="button">
                  {"Target: Pass"}
                </button>
                <button className="level-chip py-2 bg-surface-container-low text-on-surface-variant rounded-lg text-label-sm font-label-sm" type="button">
                  {"Score 75%+"}
                </button>
                <button className="level-chip py-2 bg-surface-container-low text-on-surface-variant rounded-lg text-label-sm font-label-sm" type="button">
                  {"A+ Mastery"}
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <label className="text-label-md font-label-md text-on-surface font-medium">
                {"Topic Focus Priority"}
              </label>
              <div className="flex flex-col gap-2">
                <label className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
                  <span className="text-body-sm font-body-sm text-on-surface">
                    {"Trees & Binary Search Trees"}
                  </span>
                  <input defaultChecked className="w-4 h-4 accent-primary rounded" type="checkbox" />
                </label>
                <label className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
                  <span className="text-body-sm font-body-sm text-on-surface">
                    {"Linked Lists reversals & cycles"}
                  </span>
                  <input defaultChecked className="w-4 h-4 accent-primary rounded" type="checkbox" />
                </label>
                <label className="flex items-center justify-between p-space-sm bg-surface-container-low rounded-lg cursor-pointer">
                  <span className="text-body-sm font-body-sm text-on-surface">
                    {"Queue / Stack Implementations"}
                  </span>
                  <input className="w-4 h-4 accent-primary rounded" type="checkbox" />
                </label>
              </div>
            </div>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <button className="flex-1 h-11 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-medium hover:bg-primary-container" id="apply-adjust-btn" type="button">
                {"\n          Recalculate & Save\n        "}
              </button>
              <button className="px-space-md h-11 bg-surface-container text-on-surface rounded-xl font-label-md text-label-md font-medium hover:bg-surface-container-high" id="cancel-adjust-btn" type="button">
                {"\n          Cancel\n        "}
              </button>
            </div>
          </div>
        </div>
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
