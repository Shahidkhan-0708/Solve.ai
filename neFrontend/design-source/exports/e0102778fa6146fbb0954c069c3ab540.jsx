'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/e0102778fa6146fbb0954c069c3ab540';
import './e0102778fa6146fbb0954c069c3ab540.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-e0102778fa6146fbb0954c069c3ab540 bg-surface font-body-md text-body-md text-on-surface flex flex-col min-h-screen" data-screen-id="e0102778fa6146fbb0954c069c3ab540">
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-16 px-margin flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container active:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {"arrow_back"}
            </span>
          </button>
          <h1 className="font-headline-sm text-headline-sm text-on-surface truncate">
            {"History & Search"}
          </h1>
        </div>
        <div className="flex items-center gap-space-sm">
          <button aria-label="More actions" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {"more_vert"}
            </span>
          </button>
          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
            <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
              {"person"}
            </span>
          </div>
        </div>
      </div>
    </header>
    <main className="flex flex-col relative w-full pt-16 pb-safe bg-surface min-h-screen">
      <div className="flex flex-col w-full text-on-surface">
        <div className="px-margin py-space-sm bg-surface-container-low shadow-sm sticky top-0 z-30 flex flex-col gap-space-xs">
          <div className="flex items-center justify-between">
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary flex items-center gap-1">
              <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                {"science"}
              </span>
              {"\n        Prototype Views\n      "}
            </span>
            <span className="font-code text-code text-secondary text-[11px]">
              {"SOLVE v2.4"}
            </span>
          </div>
          <div className="flex items-center gap-space-xs overflow-x-auto pb-1 -mx-margin px-margin scrollbar-none">
            <button className="state-tab whitespace-nowrap px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all bg-primary text-on-primary" id="tab-state-1" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        1. Search\n      "}
            </button>
            <button className="state-tab whitespace-nowrap px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all bg-surface-container text-secondary hover:text-on-surface" id="tab-state-2" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        2. History Drawer\n      "}
            </button>
            <button className="state-tab whitespace-nowrap px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all bg-surface-container text-secondary hover:text-on-surface" id="tab-state-3" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        3. Action Sheet\n      "}
            </button>
            <button className="state-tab whitespace-nowrap px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all bg-surface-container text-secondary hover:text-on-surface" id="tab-state-4" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        4. Resume Banner\n      "}
            </button>
            <button className="state-tab whitespace-nowrap px-3 py-1.5 rounded-full font-label-sm text-label-sm transition-all bg-surface-container text-secondary hover:text-on-surface" id="tab-state-5" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        5. Empty Search\n      "}
            </button>
          </div>
        </div>
        <section className="state-screen flex flex-col w-full px-margin py-space-md gap-space-md" id="state-1">
          <div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
            <div className="flex items-center gap-space-xs">
              <button aria-label="Back" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"arrow_back"}
                </span>
              </button>
              <div className="flex-1 flex items-center bg-surface-container-low rounded-lg px-3 py-2 gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                  {"search"}
                </span>
                <input className="bg-transparent flex-1 text-on-surface font-body-md text-body-md focus:outline-none" placeholder="Search threads, steps..." style={{"fontSize":"16px"}} type="text" defaultValue="head pointer" />
                <button aria-label="Clear query" className="w-8 h-8 flex items-center justify-center rounded-full text-secondary hover:text-on-surface transition-colors" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1 px-1">
              <div className="flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Searching Chat history only"}
                </span>
              </div>
              <div className="flex items-center bg-surface-container-low p-0.5 rounded-full">
                <button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm bg-primary text-on-primary shadow-xs" type="button">
                  {"Chat"}
                </button>
                <button className="px-2.5 py-1 rounded-full font-label-sm text-label-sm text-secondary hover:text-on-surface transition-colors" type="button">
                  {"Study"}
                </button>
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between px-1">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
              {"3 Results across 2 modules"}
            </span>
            <span className="font-label-sm text-label-sm text-secondary">
              {"Chronological"}
            </span>
          </div>
          <div className="flex flex-col gap-space-sm">
            <article className="cursor-pointer bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs active:scale-[0.99]" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
              <div className="flex items-center justify-between gap-space-xs">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium truncate">
                  {"Data Structures mid preparation"}
                </h2>
                <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary flex-shrink-0">
                  {"Exam Prep"}
                </span>
              </div>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {"\n          …connect the new node to the current "}
                <mark className="bg-surface-container-high text-on-surface font-semibold px-1 rounded">
                  {"head pointer"}
                </mark>
                {"…\n        "}
              </p>
              <div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
                <div className="flex items-center gap-1.5">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"account_tree"}
                  </span>
                  <span>
                    {"Linked lists · Step 2"}
                  </span>
                  <span>
                    {"·"}
                  </span>
                  <span>
                    {"25m ago"}
                  </span>
                </div>
                <span className="text-on-surface font-medium flex items-center gap-0.5 text-[11px] uppercase tracking-wider">
                  {"\n            Context\n            "}
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </span>
              </div>
            </article>
            <article className="cursor-pointer bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs active:scale-[0.99]" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
              <div className="flex items-center justify-between gap-space-xs">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium truncate">
                  {"Explain recursion"}
                </h2>
                <span className="font-code text-code text-secondary text-[11px]">
                  {"2d ago"}
                </span>
              </div>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {"\n          …base case acts similarly to the null guard on a "}
                <mark className="bg-surface-container-high text-on-surface font-semibold px-1 rounded">
                  {"head pointer"}
                </mark>
                {"…\n        "}
              </p>
              <div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
                <span>
                  {"Found in Step 4 conceptual breakdown"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </div>
            </article>
            <article className="cursor-pointer bg-surface-container-lowest p-space-md rounded-xl shadow-sm hover:shadow-md transition-all flex flex-col gap-space-xs active:scale-[0.99]" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
              <div className="flex items-center justify-between gap-space-xs">
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium truncate">
                  {"C++ Memory Leaks"}
                </h2>
                <span className="font-code text-code text-secondary text-[11px]">
                  {"5d ago"}
                </span>
              </div>
              <p className="font-body-md text-body-md text-secondary leading-relaxed">
                {"\n          …adjusting the "}
                <mark className="bg-surface-container-high text-on-surface font-semibold px-1 rounded">
                  {"head pointer"}
                </mark>
                {" leaves a dangling reference…\n        "}
              </p>
              <div className="flex items-center justify-between pt-space-xs text-secondary font-label-sm text-label-sm">
                <span>
                  {"Systems · Debugging Log"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </div>
            </article>
          </div>
          <div className="mt-space-sm p-space-sm bg-surface-container-low rounded-lg flex items-center gap-space-sm">
            <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
              {"lightbulb"}
            </span>
            <p className="font-body-sm text-body-sm text-secondary">
              {"\n        Tip: Switch to "}
              <span className="text-on-surface font-medium">
                {"Study"}
              </span>
              {" scope above to find formulas, flashcards, and verified solutions.\n      "}
            </p>
          </div>
        </section>
        <section className="state-screen hidden flex flex-col w-full px-margin py-space-md gap-space-md" id="state-2">
          <div className="bg-surface-container-lowest rounded-xl shadow-md p-space-md flex flex-col gap-space-md">
            <div className="flex items-center justify-between pb-space-sm">
              <div className="flex items-center gap-space-xs">
                <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center font-display font-semibold text-label-md">
                  {"\n            S\n          "}
                </div>
                <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
                  {"SOLVE"}
                </span>
              </div>
              <button className="min-h-[44px] px-3.5 py-2 bg-primary text-on-primary rounded-lg font-label-md text-label-md flex items-center gap-1.5 shadow-sm active:scale-95 transition-transform" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"add"}
                </span>
                <span>
                  {"New chat"}
                </span>
              </button>
            </div>
            <button className="w-full min-h-[44px] flex items-center justify-between px-3.5 py-2.5 rounded-lg bg-surface-container-low text-secondary hover:text-on-surface transition-colors text-left" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"search"}
                </span>
                <span className="font-body-md text-body-md">
                  {"Search chats..."}
                </span>
              </div>
              <span className="font-code text-code text-[11px] bg-surface-container px-1.5 py-0.5 rounded">
                {"⌘K"}
              </span>
            </button>
            <div className="flex flex-col gap-space-xs">
              <div className="flex items-center justify-between px-1">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"push_pin"}
                  </span>
                  {"\n            Pinned\n          "}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"1"}
                </span>
              </div>
              <div className="flex items-center justify-between p-3 rounded-lg bg-surface-container-low hover:bg-surface-container transition-colors group">
                <div className="flex-1 cursor-pointer min-w-0 pr-2" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                      {"push_pin"}
                    </span>
                    <span className="font-body-md text-body-md text-on-surface font-medium truncate">
                      {"Data Structures mid preparation"}
                    </span>
                  </div>
                  <p className="font-label-sm text-label-sm text-secondary truncate mt-0.5">
                    {"Active step: Linked lists recursive traversal"}
                  </p>
                </div>
                <button aria-label="Chat options" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"more_horiz"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-space-xs">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider px-1">
                {"Recent Chats"}
              </span>
              <div className="flex flex-col gap-1">
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                  <div className="flex-1 cursor-pointer min-w-0 pr-2" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <span className="font-body-md text-body-md text-on-surface truncate block">
                      {"Explain recursion"}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary block">
                      {"Yesterday · Computer Science"}
                    </span>
                  </div>
                  <button aria-label="Chat options" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"more_horiz"}
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                  <div className="flex-1 cursor-pointer min-w-0 pr-2" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <span className="font-body-md text-body-md text-on-surface truncate block">
                      {"Help with integration"}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary block">
                      {"3 days ago · Calculus II"}
                    </span>
                  </div>
                  <button aria-label="Chat options" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"more_horiz"}
                    </span>
                  </button>
                </div>
                <div className="flex items-center justify-between p-3 rounded-lg hover:bg-surface-container-low transition-colors">
                  <div className="flex-1 cursor-pointer min-w-0 pr-2" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <span className="font-body-md text-body-md text-on-surface truncate block">
                      {"Newton's laws intuition"}
                    </span>
                    <span className="font-label-sm text-label-sm text-secondary block">
                      {"1 week ago · Classical Mechanics"}
                    </span>
                  </div>
                  <button aria-label="Chat options" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"more_horiz"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
            <div className="pt-space-sm mt-space-xs flex items-center justify-between">
              <button className="min-h-[44px] flex items-center gap-2 font-label-md text-label-md text-secondary hover:text-on-surface transition-colors py-2 px-1" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"folder"}
                </span>
                <span>
                  {"View archived chats"}
                </span>
              </button>
              <span className="font-code text-code text-secondary text-[11px]">
                {"8 total"}
              </span>
            </div>
          </div>
        </section>
        <section className="state-screen hidden flex flex-col w-full relative" id="state-3">
          <div className="p-margin flex flex-col gap-space-sm opacity-25 pointer-events-none select-none">
            <div className="h-12 bg-surface-container-high rounded-lg w-full"></div>
            <div className="h-28 bg-surface-container rounded-xl w-full"></div>
            <div className="h-28 bg-surface-container rounded-xl w-full"></div>
            <div className="h-28 bg-surface-container rounded-xl w-full"></div>
          </div>
          <div className="px-margin pb-safe pt-space-xs flex flex-col justify-end">
            <div className="bg-surface-container-lowest rounded-2xl shadow-xl p-space-md flex flex-col gap-space-md">
              <div className="w-10 h-1 bg-surface-container-high rounded-full mx-auto mb-1"></div>
              <div className="flex flex-col gap-0.5">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  {"Conversation Actions"}
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold truncate">
                  {"Data Structures mid preparation"}
                </h2>
                <p className="font-body-sm text-body-sm text-secondary">
                  {"Last updated 25 minutes ago in Linked Lists"}
                </p>
              </div>
              <div className="flex flex-col gap-1.5">
                <button className="min-h-[48px] w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low active:bg-surface-container transition-colors text-left" type="button">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"push_pin"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        {"Pin to top"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"Keep readily accessible in sidebar"}
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button className="min-h-[48px] w-full flex items-center justify-between p-3 rounded-xl hover:bg-surface-container-low active:bg-surface-container transition-colors text-left" type="button">
                  <div className="flex items-center gap-3">
                    <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"edit"}
                      </span>
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md text-on-surface">
                        {"Rename conversation"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"Customize subject label"}
                      </span>
                    </div>
                  </div>
                  <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                    {"chevron_right"}
                  </span>
                </button>
                <div className="p-3 rounded-xl bg-surface-container-low flex flex-col gap-1.5">
                  <button className="min-h-[44px] w-full flex items-center justify-between text-left" type="button">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"archive"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-on-surface">
                          {"Move to archive"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Hide from recent list"}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"chevron_right"}
                    </span>
                  </button>
                  <div className="flex items-center gap-1.5 pl-12 text-secondary font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"verified"}
                    </span>
                    <span>
                      {"Plan and practice evidence will remain safe"}
                    </span>
                  </div>
                </div>
              </div>
              <button className="min-h-[48px] w-full py-3 rounded-xl bg-surface-container font-label-md text-label-md text-on-surface hover:bg-surface-container-high transition-colors font-medium" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Cancel\n        "}
              </button>
            </div>
          </div>
        </section>
        <section className="state-screen hidden flex flex-col w-full relative pb-16" id="state-4">
          <div className="sticky top-16 z-20 mx-margin mt-space-xs p-3.5 bg-primary text-on-primary rounded-xl shadow-md flex flex-col gap-space-xs animate-in">
            <div className="flex items-start justify-between gap-space-xs">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[20px] text-on-primary" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                  {"bolt"}
                </span>
                <span className="font-label-md text-label-md font-medium">
                  {"Unfinished practice"}
                </span>
              </div>
              <span className="font-code text-code text-[11px] bg-primary-container px-2 py-0.5 rounded text-on-primary-container">
                {"\n          Question 1 of 3\n        "}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-on-primary-fixed-variant pl-7">
              {"\n        Linked lists: Node deletion and pointer reassignment boundary check.\n      "}
            </p>
            <div className="flex items-center justify-end gap-space-xs pt-1">
              <button className="min-h-[44px] px-3 py-1.5 rounded-lg font-label-sm text-label-sm text-on-primary-container hover:text-on-primary transition-colors" onClick={event => { const result = actions.current[22]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Dismiss\n        "}
              </button>
              <button className="min-h-[44px] px-4 py-1.5 bg-on-primary text-primary rounded-lg font-label-sm text-label-sm font-semibold flex items-center gap-1 shadow-xs active:scale-95 transition-transform" type="button">
                <span>
                  {"Resume practice"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"arrow_forward"}
                </span>
              </button>
            </div>
          </div>
          <div className="px-margin py-space-md flex flex-col gap-space-md">
            <div className="flex flex-col gap-1.5 max-w-[90%]">
              <div className="flex items-center gap-1.5">
                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center text-[10px] text-on-primary font-bold">
                  {"\n            S\n          "}
                </div>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"SOLVE Mentor"}
                </span>
                <span className="font-code text-code text-[10px] text-secondary">
                  {"10:42 AM"}
                </span>
              </div>
              <div className="p-space-md bg-surface-container-lowest rounded-2xl rounded-tl-sm shadow-sm flex flex-col gap-space-xs">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {"\n            Let's trace how the pointer behaves when deleting the 3rd node. Here is our setup in C++:\n          "}
                </p>
                <pre className="bg-surface-container-low p-space-sm rounded-lg font-code text-code text-[12px] text-on-surface overflow-x-auto">
                  {"Node* temp = head->next;"}
                  <br />
                  {"head->next = temp->next;"}
                  <br />
                  {"delete temp;"}
                </pre>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 max-w-[95%] self-end">
              <div className="flex items-center justify-end gap-1.5">
                <span className="font-label-sm text-label-sm text-secondary">
                  {"You"}
                </span>
                <span className="font-code text-code text-[10px] text-secondary">
                  {"10:45 AM"}
                </span>
              </div>
              <div className="p-space-md bg-surface-container-high text-on-surface rounded-2xl rounded-tr-sm shadow-sm flex flex-col gap-space-xs">
                <p className="font-body-md text-body-md leading-relaxed">
                  {"\n            Wait, what if "}
                  <code className="font-code bg-surface-container px-1 py-0.5 rounded">
                    {"head->next"}
                  </code>
                  {" is null? Doesn't accessing "}
                  <code className="font-code bg-surface-container px-1 py-0.5 rounded">
                    {"temp->next"}
                  </code>
                  {" cause a segmentation fault?\n          "}
                </p>
              </div>
            </div>
            <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-space-sm">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm font-semibold tracking-wider text-secondary uppercase">
                  {"\n            Active Question\n          "}
                </span>
                <span className="font-code text-code text-[11px] text-secondary">
                  {"2 min read"}
                </span>
              </div>
              <h3 className="font-headline-sm text-headline-sm font-medium text-on-surface">
                {"\n          What is the boundary guard condition before re-linking?\n        "}
              </h3>
              <div className="flex flex-col gap-2 pt-1">
                <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm text-on-surface cursor-pointer hover:bg-surface-container">
                  <span>
                    {"A. Check if head is nullptr only"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    {"radio_button_unchecked"}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-primary text-on-primary flex items-center justify-between text-body-sm font-body-sm cursor-pointer shadow-xs">
                  <span>
                    {"B. Verify both head != nullptr && head->next != nullptr"}
                  </span>
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"check_circle"}
                  </span>
                </div>
                <div className="p-3 rounded-lg bg-surface-container-low flex items-center justify-between text-body-sm font-body-sm text-on-surface cursor-pointer hover:bg-surface-container">
                  <span>
                    {"C. Allocate temporary heap memory"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    {"radio_button_unchecked"}
                  </span>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-30">
            <button className="min-h-[44px] px-4 py-2 bg-primary text-on-primary rounded-full shadow-lg flex items-center gap-1.5 font-label-sm text-label-sm active:scale-95 transition-transform" type="button">
              <span>
                {"Jump to latest"}
              </span>
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"arrow_downward"}
              </span>
            </button>
          </div>
        </section>
        <section className="state-screen hidden flex flex-col w-full px-margin py-space-md gap-space-md" id="state-5">
          <div className="flex flex-col gap-space-sm bg-surface-container-lowest p-space-sm rounded-xl shadow-sm">
            <div className="flex items-center gap-space-xs">
              <button aria-label="Back" className="w-11 h-11 flex items-center justify-center rounded-lg text-secondary hover:text-on-surface hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[23]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"arrow_back"}
                </span>
              </button>
              <div className="flex-1 flex items-center bg-surface-container-low rounded-lg px-3 py-2 gap-2">
                <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                  {"search"}
                </span>
                <input className="bg-transparent flex-1 text-on-surface font-body-md text-body-md focus:outline-none" id="empty-search-input" style={{"fontSize":"16px"}} type="text" defaultValue="quicksort pivot edge-case matrix" />
                <button aria-label="Clear query" className="w-8 h-8 flex items-center justify-center rounded-full text-secondary hover:text-on-surface transition-colors" onClick={event => { const result = actions.current[24]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="my-space-2xl flex flex-col items-center justify-center text-center px-space-md py-space-xl bg-surface-container-lowest rounded-2xl shadow-sm">
            <div className="w-16 h-16 rounded-full bg-surface-container-low flex items-center justify-center mb-space-sm">
              <span className="material-symbols-outlined text-secondary text-[32px]" aria-hidden="true">
                {"manage_search"}
              </span>
            </div>
            <h2 className="font-headline-md text-headline-md font-medium text-on-surface mb-space-xs">
              {"\n        No matching chats\n      "}
            </h2>
            <p className="font-body-md text-body-md text-secondary max-w-[280px] mb-space-lg leading-relaxed">
              {"\n        Try another word, simplify keywords, or search within your notes folder.\n      "}
            </p>
            <div className="flex flex-col sm:flex-row gap-space-xs w-full max-w-xs">
              <button className="min-h-[44px] flex-1 px-4 py-2.5 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-medium shadow-sm active:scale-95 transition-transform flex items-center justify-center gap-1.5" onClick={event => { const result = actions.current[25]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"backspace"}
                </span>
                <span>
                  {"Clear query"}
                </span>
              </button>
              <button className="min-h-[44px] flex-1 px-4 py-2.5 bg-surface-container text-on-surface rounded-xl font-label-md text-label-md font-medium hover:bg-surface-container-high transition-colors flex items-center justify-center gap-1.5" onClick={event => { const result = actions.current[26]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span>
                  {"View all history"}
                </span>
              </button>
            </div>
            <div className="mt-space-xl flex flex-col items-center gap-space-xs w-full">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                {"Suggested topics"}
              </span>
              <div className="flex flex-wrap justify-center gap-1.5 pt-1">
                <button className="px-3 py-1 rounded-full bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" onClick={event => { const result = actions.current[27]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n            Linked lists\n          "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" onClick={event => { const result = actions.current[28]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n            Recursion\n          "}
                </button>
                <button className="px-3 py-1 rounded-full bg-surface-container-low text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" onClick={event => { const result = actions.current[29]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n            Integration\n          "}
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </main>
  </div>;
}
