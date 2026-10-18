'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './dc81286e0dda4a8e90db0fcfd869701c.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'dc81286e0dda4a8e90db0fcfd869701c');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-dc81286e0dda4a8e90db0fcfd869701c bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-surface-container-highest" data-screen-id="dc81286e0dda4a8e90db0fcfd869701c">
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <button aria-label="Menu" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {"menu"}
            </span>
          </button>
          <div className="flex items-center gap-space-xs pl-space-xs">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tighter text-primary uppercase"><BrandLogo className="stitch-wordmark" /></span>
            <span className="text-on-surface-variant/40 font-code text-body-sm font-light select-none">
              {"/"}
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant font-medium tracking-tight truncate max-w-[110px]">
              {"My Plan / Strategy"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <button aria-label="Edit Plan" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"edit"}
            </span>
          </button>
          <button aria-label="Toggle Audio" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"volume_up"}
            </span>
          </button>
          <div className="pl-space-xs flex items-center">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
          </div>
        </div>
      </div>
    </header>
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      <div className="flex flex-col w-full px-gutter pb-8 space-y-space-md">
        <section className="w-full bg-surface-container-high p-space-xs rounded-xl flex items-center justify-between text-on-surface-variant overflow-x-auto select-none">
          <div className="flex items-center gap-space-xs w-full justify-between">
            <button className="flex-1 py-1 px-2 text-center rounded-lg bg-surface text-primary font-label-sm text-label-sm shadow-sm transition-all whitespace-nowrap" id="btn-state-overview" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Overview\n      "}
            </button>
            <button className="flex-1 py-1 px-2 text-center rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all whitespace-nowrap" id="btn-state-detail" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Plan Detail\n      "}
            </button>
            <button className="flex-1 py-1 px-2 text-center rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all whitespace-nowrap" id="btn-state-sheet" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Adjust Sheet\n      "}
            </button>
            <button className="flex-1 py-1 px-2 text-center rounded-lg text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all whitespace-nowrap" id="btn-state-empty" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Empty\n      "}
            </button>
          </div>
        </section>
        <div className="flex flex-col w-full space-y-space-md" id="view-overview">
          <header className="flex flex-col space-y-space-sm pt-space-xs">
            <div className="flex items-center justify-between">
              <h1 className="font-headline-lg-mobile text-headline-lg-mobile tracking-tight text-on-background">
                {"\n          My Plan / Strategy\n        "}
              </h1>
              <span className="inline-flex items-center justify-center w-7 h-7 rounded-full bg-surface-container text-on-surface-variant font-code text-code">
                {"\n          3\n        "}
              </span>
            </div>
            <div className="w-full bg-surface-container p-1 rounded-xl flex items-center">
              <button className="flex-1 py-2 text-center rounded-lg bg-primary text-on-primary font-label-md text-label-md transition-all shadow-sm" id="tab-chat-mode" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Chat Session\n        "}
              </button>
              <button className="flex-1 py-2 text-center rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md transition-all" id="tab-study-mode" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Study Track\n        "}
              </button>
            </div>
          </header>
          <div className="flex items-center gap-space-xs overflow-x-auto py-0.5 no-scrollbar">
            <button className="px-3.5 py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1.5 shrink-0" type="button">
              <span>
                {"Active"}
              </span>
              <span className="w-1.5 h-1.5 rounded-full bg-on-primary"></span>
              <span className="opacity-80">
                {"3"}
              </span>
            </button>
            <button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm shrink-0 transition-colors" type="button">
              {"\n        Completed (14)\n      "}
            </button>
            <button className="px-3.5 py-1.5 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm shrink-0 transition-colors" type="button">
              {"\n        Archived\n      "}
            </button>
          </div>
          <div className="flex flex-col space-y-space-md">
            <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md relative overflow-hidden">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="inline-block w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      {"High Priority"}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-tight">
                    {"\n              Data Structures mid preparation\n            "}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"\n              Target: Pass · Exam tomorrow, 10:00 AM\n            "}
                  </p>
                </div>
                <button aria-label="Pin strategy" className="w-9 h-9 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                    {"push_pin"}
                  </span>
                </button>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold tracking-wider text-on-surface-variant uppercase">
                    {"\n              Next Step · 10 Min\n            "}
                  </span>
                  <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface">
                    {"\n              Step 2 of 7\n            "}
                  </span>
                </div>
                <div className="font-body-md text-body-md text-on-surface font-medium">
                  {"\n            Linked lists: insertion steps & pointer rearrangement\n          "}
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-primary h-full w-[28%] rounded-full transition-all duration-500"></div>
                </div>
              </div>
              <div className="flex flex-col space-y-space-xs pt-1">
                <button className="w-full h-12 bg-primary hover:bg-neutral-800 active:bg-neutral-900 text-on-primary rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 transition-all shadow-sm" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span>
                    {"Continue prep"}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </button>
                <div className="flex items-center gap-space-xs">
                  <button className="flex-1 h-10 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-sm text-label-sm transition-colors text-center" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              View full sequence\n            "}
                  </button>
                  <button className="h-10 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-lg font-label-sm text-label-sm flex items-center justify-center transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"tune"}
                    </span>
                  </button>
                  <button aria-label="More options" className="h-10 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface rounded-lg flex items-center justify-center transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"more_horiz"}
                    </span>
                  </button>
                </div>
              </div>
            </article>
            <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md" id="card-python-plan">
              <div className="flex items-start justify-between gap-space-sm">
                <div className="space-y-1">
                  <div className="flex items-center gap-1.5">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      {"Foundations"}
                    </span>
                  </div>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-tight">
                    {"\n              Python foundations & software design\n            "}
                  </h2>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"\n              Build a Python project · 3-Month goal\n            "}
                  </p>
                </div>
                <span className="px-2 py-0.5 bg-surface-container text-on-surface-variant font-label-sm text-label-sm rounded">
                  {"\n            Paced\n          "}
                </span>
              </div>
              <div className="bg-surface-container-low rounded-lg p-space-md space-y-space-xs">
                <div className="flex items-center justify-between">
                  <span className="font-label-sm text-label-sm font-semibold tracking-wider text-on-surface-variant uppercase">
                    {"\n              Milestone 2 of 6\n            "}
                  </span>
                  <span className="font-code text-code text-secondary">
                    {"33% Done"}
                  </span>
                </div>
                <div className="font-body-md text-body-md text-on-surface font-medium">
                  {"\n            Practise conditions, while loops, and list guards (20 min)\n          "}
                </div>
                <div className="w-full bg-surface-container-highest h-1.5 rounded-full overflow-hidden mt-1">
                  <div className="bg-secondary h-full w-[33%] rounded-full"></div>
                </div>
              </div>
              <div className="flex items-center justify-between pt-1">
                <button className="h-11 px-4 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-lg flex items-center gap-2 transition-colors" type="button">
                  <span>
                    {"Continue learning"}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </button>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Updated 2h ago"}
                </span>
              </div>
            </article>
            <article className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
              <div className="space-y-0.5">
                <span className="font-label-sm text-label-sm uppercase text-secondary tracking-wider">
                  {"Concept Drill"}
                </span>
                <h3 className="font-headline-sm text-headline-sm text-on-surface">
                  {"Calculus II: Series Convergence"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Step 5 of 5 · Ready for final check"}
                </p>
              </div>
              <button className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center text-on-surface hover:bg-surface-container-high transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"play_arrow"}
                </span>
              </button>
            </article>
          </div>
        </div>
        <div className="hidden flex-col w-full space-y-space-md" id="view-detail">
          <div className="flex items-center justify-between py-1">
            <button className="flex items-center gap-1.5 text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1 -ml-1" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_back"}
              </span>
              <span>
                {"Back to plans"}
              </span>
            </button>
            <div className="flex items-center gap-1">
              <button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"tune"}
                </span>
              </button>
              <button className="p-2 rounded-lg text-on-surface-variant hover:bg-surface-container transition-colors" type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"share"}
                </span>
              </button>
            </div>
          </div>
          <header className="space-y-1">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-error-container text-on-error-container font-label-sm text-label-sm">
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                {"alarm"}
              </span>
              <span>
                {"Exam tomorrow at 10:00 AM"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-medium pt-1">
              {"\n        Data Structures mid preparation\n      "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {"\n        Strict 4-hour sequential sprint adapted for high-yield exam retention.\n      "}
            </p>
          </header>
          <div className="bg-primary text-on-primary p-space-md rounded-xl space-y-space-sm shadow-md">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-surface-container-highest">
                {"CURRENT OBJECTIVE"}
              </span>
              <span className="font-code text-code text-surface-container-highest">
                {"40 min block"}
              </span>
            </div>
            <div className="font-headline-sm text-headline-sm font-medium">
              {"\n        Linked lists: node insertion, boundary checks & pointer rewire\n      "}
            </div>
            <button className="w-full h-11 bg-surface-container-lowest text-primary rounded-lg font-label-md text-label-md font-semibold flex items-center justify-center gap-2 hover:bg-surface-container transition-colors" type="button">
              <span>
                {"Continue preparation"}
              </span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_forward"}
              </span>
            </button>
          </div>
          <div className="flex items-center justify-between pt-2">
            <h2 className="font-label-md text-label-md uppercase tracking-wider text-secondary font-semibold">
              {"\n        Curriculum Sequence (7 Steps)\n      "}
            </h2>
            <span className="font-code text-code text-on-surface-variant">
              {"1/7 Done · 2h 50m left"}
            </span>
          </div>
          <div className="flex flex-col space-y-space-xs">
            <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center text-primary shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                  {"check"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md line-through text-on-surface-variant">
                    {"1. Quick starting diagnostic"}
                  </span>
                  <span className="font-code text-code text-on-surface-variant">
                    {"10m"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant/70 mt-0.5">
                  {"Baseline confidence established (Score: 82%)"}
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl space-y-space-sm">
              <div className="flex items-start gap-space-sm">
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center text-on-primary shrink-0 mt-0.5">
                  <span className="inline-block w-2.5 h-2.5 rounded-full bg-on-primary animate-ping"></span>
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between">
                    <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"2. Linked lists"}
                    </span>
                    <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 rounded font-medium">
                      {"In Progress"}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    {"Focus: Singly vs Doubly linked boundary guards"}
                  </p>
                </div>
              </div>
              <div className="ml-9 pl-space-xs space-y-space-xs pt-1">
                <div className="bg-surface-container-low p-space-sm rounded-lg space-y-2">
                  <div className="flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                        {"check_circle"}
                      </span>
                      <span className="font-body-sm text-body-sm">
                        {"Singly linked head/tail insertion"}
                      </span>
                    </div>
                    <span className="font-code text-code text-secondary">
                      {"Done"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                        {"radio_button_checked"}
                      </span>
                      <span className="font-body-sm text-body-sm font-medium">
                        {"Delete node without head pointer"}
                      </span>
                    </div>
                    <span className="font-code text-code text-primary font-medium">
                      {"Active"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between text-on-surface-variant">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"radio_button_unchecked"}
                      </span>
                      <span className="font-body-sm text-body-sm">
                        {"Cycle detection (Floyd's algorithm)"}
                      </span>
                    </div>
                    <span className="font-code text-code">
                      {"Up next"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm pt-1">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"menu_book"}
                  </span>
                  <span>
                    {"Source: DSA Midterm Masterbank (Problem 14-22)"}
                  </span>
                </div>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-0.5">
                <span className="font-code text-code">
                  {"3"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">
                    {"Stacks & Queue operations"}
                  </span>
                  <span className="font-code text-code text-on-surface-variant">
                    {"40m"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"LIFO, FIFO, Monotonic stacks and bracket balancing"}
                </p>
              </div>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-xl flex items-center gap-space-sm px-space-md">
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"coffee"}
                </span>
              </div>
              <div className="flex-1 flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-on-surface font-medium">
                  {"Recharge break (Hydrate & rest eyes)"}
                </span>
                <span className="font-code text-code text-on-surface-variant">
                  {"10m"}
                </span>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-0.5">
                <span className="font-code text-code">
                  {"5"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">
                    {"Trees & traversals"}
                  </span>
                  <span className="font-code text-code text-on-surface-variant">
                    {"50m"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"BST validation, In-order recursion, Height balance"}
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-0.5">
                <span className="font-code text-code">
                  {"6"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">
                    {"Rapid mixed drills"}
                  </span>
                  <span className="font-code text-code text-on-surface-variant">
                    {"50m"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"10 randomized test cases under timed pressure"}
                </p>
              </div>
            </div>
            <div className="bg-surface-container-lowest p-space-md rounded-xl flex items-start gap-space-sm">
              <div className="w-7 h-7 rounded-full bg-surface-container flex items-center justify-center text-on-surface-variant shrink-0 mt-0.5">
                <span className="font-code text-code">
                  {"7"}
                </span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <span className="font-label-md text-label-md text-on-surface">
                    {"Final recall & Cheat-sheet audit"}
                  </span>
                  <span className="font-code text-code text-on-surface-variant">
                    {"40m"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Formula memory lock and edge case review"}
                </p>
              </div>
            </div>
          </div>
          <details className="bg-surface-container-low rounded-xl group overflow-hidden transition-all">
            <summary className="p-space-md flex items-center justify-between cursor-pointer list-none select-none">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                  {"psychology"}
                </span>
                <span className="font-label-md text-label-md text-on-surface font-medium">
                  {"Why this strategic sequence?"}
                </span>
              </div>
              <span className="material-symbols-outlined text-[20px] text-on-surface-variant transition-transform group-open:rotate-180" aria-hidden="true">
                {"expand_more"}
              </span>
            </summary>
            <div className="px-space-md pb-space-md font-body-sm text-body-sm text-on-surface-variant space-y-2">
              <p>
                {"\n          SOLVE organized this structure using your quiz logs from Wednesday. You demonstrated 91% proficiency in basic arrays but dropped to 54% when pointer logic and trees appeared together.\n        "}
              </p>
              <p>
                {"\n          The middle break is positioned at 90 minutes to prevent cognitive saturation prior to the tree balancing modules.\n        "}
              </p>
            </div>
          </details>
          <div className="flex items-center gap-space-xs pt-2">
            <button className="flex-1 h-11 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-xl transition-colors" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Adjust remaining time\n      "}
            </button>
            <a className="flex-1 h-11 bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center justify-center gap-1.5 hover:bg-neutral-800 transition-colors" data-path="mentor" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"chat"}
              </span>
              <span>
                {"Open mentor"}
              </span>
            </a>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center py-16 px-gutter text-center space-y-space-md" id="view-empty">
          <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-on-surface-variant">
            <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
              {"checklist"}
            </span>
          </div>
          <div className="space-y-1 max-w-xs">
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {"\n        No study plans yet\n      "}
            </h3>
            <p className="font-body-md text-body-md text-on-surface-variant">
              {"\n        Ask your SOLVE mentor to generate an exam sprint, revision sequence, or continuous goal strategy.\n      "}
            </p>
          </div>
          <button className="h-11 px-6 bg-primary text-on-primary font-label-md text-label-md rounded-xl flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"add"}
            </span>
            <span>
              {"Create a learning plan"}
            </span>
          </button>
        </div>
        <div className="fixed inset-0 z-50 bg-black/40 backdrop-blur-xs hidden transition-opacity" id="adjust-sheet-backdrop" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
        <div className="fixed bottom-0 inset-x-0 z-50 bg-surface-container-lowest rounded-t-2xl p-gutter space-y-space-md shadow-2xl transform translate-y-full transition-transform duration-300 max-w-lg mx-auto" id="adjust-sheet">
          <div className="w-10 h-1.5 bg-surface-container-highest rounded-full mx-auto -mt-1 cursor-grab" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
          <div className="flex items-center justify-between">
            <div>
              <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {"\n          Adjust your plan\n        "}
              </h2>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"Data Structures mid preparation"}
              </p>
            </div>
            <button className="p-1 text-on-surface-variant hover:text-on-surface rounded-lg" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"close"}
              </span>
            </button>
          </div>
          <div className="space-y-space-md">
            <div className="space-y-1.5">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">
                {"Available Time Left"}
              </label>
              <div className="grid grid-cols-3 gap-2">
                <button className="py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md text-center" type="button">
                  {"\n            2.0 Hours\n          "}
                </button>
                <button className="py-2.5 px-3 bg-primary text-on-primary rounded-lg font-label-md text-label-md text-center font-medium shadow-xs" type="button">
                  {"\n            2.5 Hours\n          "}
                </button>
                <button className="py-2.5 px-3 bg-surface-container hover:bg-surface-container-high text-on-surface rounded-lg font-label-md text-label-md text-center" type="button">
                  {"\n            3.0 Hours\n          "}
                </button>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">
                {"Prioritize Depth"}
              </label>
              <div className="flex flex-wrap gap-1.5">
                <span className="px-3 py-1 bg-primary text-on-primary rounded-full font-label-sm text-label-sm">
                  {"Trees (+15m)"}
                </span>
                <span className="px-3 py-1 bg-surface-container text-on-surface rounded-full font-label-sm text-label-sm">
                  {"Graphs"}
                </span>
                <span className="px-3 py-1 bg-surface-container text-on-surface rounded-full font-label-sm text-label-sm">
                  {"Time Complexity"}
                </span>
              </div>
            </div>
            <div className="space-y-1.5">
              <label className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-medium">
                {"Direct instructions to mentor"}
              </label>
              <textarea className="w-full bg-surface-container-low rounded-lg p-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:ring-1 focus:ring-primary" placeholder="e.g., Cut down the rest break, I need more recursion practice..." rows="2"></textarea>
            </div>
            <div className="bg-surface-container-low p-space-sm rounded-lg flex items-center gap-2 text-on-surface">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"tune"}
              </span>
              <span className="font-body-sm text-body-sm">
                <strong className="font-medium">
                  {"Change:"}
                </strong>
                {" +15m on trees, -15m review session."}
              </span>
            </div>
            <div className="flex items-center gap-space-xs pt-1">
              <button className="flex-1 h-12 bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md rounded-xl transition-colors" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Cancel\n        "}
              </button>
              <button className="flex-1 h-12 bg-primary text-on-primary font-label-md text-label-md font-semibold rounded-xl hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Update plan\n        "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.03)]" data-active-classes="text-primary font-semibold">
      <div className="flex justify-around items-center h-16 px-space-sm">
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="mentor" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"psychology"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Mentor"}
          </span>
        </a>
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="my-plan-strategy" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"assignment"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Plan"}
          </span>
        </a>
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"monitoring"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Graph"}
          </span>
        </a>
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="status" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"radio_button_checked"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Status"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
