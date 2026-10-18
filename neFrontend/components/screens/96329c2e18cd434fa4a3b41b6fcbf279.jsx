'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './96329c2e18cd434fa4a3b41b6fcbf279.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '96329c2e18cd434fa4a3b41b6fcbf279');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-96329c2e18cd434fa4a3b41b6fcbf279 bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen" data-screen-id="96329c2e18cd434fa4a3b41b6fcbf279">
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl pt-safe">
      <div className="h-28 px-margin flex flex-col justify-between py-space-xs">
        <div className="flex items-center justify-between">
          <button aria-label="Menu" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary rounded-lg transition-colors" type="button">
            <span className="material-symbols-outlined text-2xl" aria-hidden="true">
              {"menu"}
            </span>
          </button>
          <div className="flex items-center gap-space-xs">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface uppercase"><BrandLogo className="stitch-wordmark" /></span>
            <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
            <span className="font-code text-code text-secondary tracking-widest uppercase ml-1">
              {"AI"}
            </span>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="New Session" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary rounded-lg transition-colors" type="button">
              <span className="material-symbols-outlined text-2xl" aria-hidden="true">
                {"edit_square"}
              </span>
            </button>
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover ml-1" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
          </div>
        </div>
        <div className="flex justify-center pb-space-xs">
          <div className="bg-surface-container-high p-0.5 rounded-xl flex items-center w-full max-w-xs shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
            <button className="flex-1 py-1 px-space-md rounded-lg font-label-md text-label-md text-on-primary bg-primary transition-all text-center" type="button">
              {"Chat"}
            </button>
            <button className="flex-1 py-1 px-space-md rounded-lg font-label-md text-label-md text-secondary hover:text-on-surface transition-all text-center" type="button">
              {"Study"}
            </button>
          </div>
        </div>
      </div>
    </header>
    <main className="flex-1 flex flex-col relative w-full px-margin pt-28 pb-20 bg-surface">
      <div className="flex flex-col w-full pb-28 space-y-space-md">
        <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm space-y-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                {"account_tree"}
              </span>
              <span className="font-code text-code uppercase tracking-wider">
                {"Module 03"}
              </span>
            </div>
            <div className="flex items-center gap-space-xs">
              <button className="bg-surface-container hover:bg-surface-variant text-on-surface px-2.5 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 transition-colors" id="planPillBtn" type="button">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"calendar_month"}
                </span>
                {"\n          Plan\n        "}
              </button>
              <button className="bg-surface-container hover:bg-surface-variant text-on-surface px-2.5 py-1 rounded-full font-label-sm text-label-sm flex items-center gap-1 transition-colors" type="button">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"menu_book"}
                </span>
                {"\n          Sources\n        "}
              </button>
            </div>
          </div>
          <div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
              {"Linked lists"}
            </h1>
            <p className="font-body-sm text-body-sm text-secondary">
              {"40 min session · Data Structures & Pointer Topology"}
            </p>
          </div>
          <div className="relative overflow-hidden rounded-lg mt-2 h-20 bg-surface-container flex items-center justify-between px-space-md">
            <img className="absolute inset-0 w-full h-full object-cover opacity-25 pointer-events-none" data-alt="Monochrome minimalist abstract rendering of connected geometric nodes on a clean light gray textured background, soft editorial architectural lighting" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/fbeea959a4833307.jpg" alt="Monochrome minimalist abstract rendering of connected geometric nodes on a clean light gray textured background, soft editorial architectural lighting" />
            <div className="relative z-10 flex items-center gap-space-sm">
              <span className="w-2.5 h-2.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-md text-label-md text-on-surface font-medium">
                {"Concept Active: Dynamic Sequences"}
              </span>
            </div>
            <div className="relative z-10 flex items-center gap-1 bg-surface/90 px-2 py-0.5 rounded text-secondary font-code text-code">
              <span>
                {"O(1) prepend"}
              </span>
            </div>
          </div>
        </div>
        <div className="flex justify-end pl-8">
          <div className="bg-primary text-on-primary rounded-xl rounded-tr-none px-space-md py-space-sm shadow-sm">
            <div className="flex items-center gap-1.5 mb-1 opacity-70">
              <span className="material-symbols-outlined text-xs" aria-hidden="true">
                {"face"}
              </span>
              <span className="font-label-sm text-label-sm">
                {"You"}
              </span>
            </div>
            <p className="font-body-md text-body-md">
              {"Explain linked lists simply. I get confused about the links."}
            </p>
          </div>
        </div>
        <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm space-y-space-md">
          <div className="flex items-center gap-space-sm pb-1">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-on-primary font-code text-label-sm font-semibold">
              {"\n        S\n      "}
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {"SOLVE Mentor"}
                </span>
                <span className="font-code text-code text-secondary text-[11px] bg-surface-container px-1.5 py-0.2 rounded">
                  {"Socratic AI"}
                </span>
              </div>
              <p className="font-label-sm text-label-sm text-secondary">
                {"Just now"}
              </p>
            </div>
          </div>
          <div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
              {"Think of it as a chain of nodes."}
            </h2>
            <p className="font-body-md text-body-md text-on-surface mt-1 leading-relaxed">
              {"\n        A linked list stores items in distinct units called "}
              <span className="font-code text-code bg-surface-container px-1 py-0.5 rounded font-medium">
                {"nodes"}
              </span>
              {". Each node contains a value and a pointer reference to the next node. The "}
              <span className="font-code text-code bg-surface-container px-1 py-0.5 rounded font-medium">
                {"head"}
              </span>
              {" reference anchors the first entry.\n      "}
            </p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-md flex gap-space-sm items-start">
            <div className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-on-surface shrink-0">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                {"explore"}
              </span>
            </div>
            <div>
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block mb-0.5">
                {"Physical Analogy"}
              </span>
              <p className="font-body-sm text-body-sm text-on-surface font-medium leading-normal">
                {"\n          Treasure hunt: each clue gives you a treasure, plus a slip of paper pointing to where the next clue is hidden.\n        "}
              </p>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-sm space-y-space-xs">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-1.5 text-secondary">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"device_hub"}
                </span>
                <span className="font-label-sm text-label-sm font-medium">
                  {"Singly Linked Structure"}
                </span>
              </div>
              <button className="flex items-center gap-0.5 text-secondary hover:text-on-surface font-label-sm text-label-sm transition-colors" id="openDiagramSheetBtn" type="button">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"open_in_full"}
                </span>
                <span>
                  {"Expand diagram"}
                </span>
              </button>
            </div>
            <div className="bg-surface-container-lowest rounded-md p-space-md overflow-x-auto">
              <div className="min-w-[340px] flex items-center justify-between py-2 text-on-surface font-code text-code select-none">
                <div className="flex flex-col items-center">
                  <span className="text-secondary font-label-sm text-label-sm mb-1 font-semibold">
                    {"head"}
                  </span>
                  <div className="flex items-center">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    <span className="w-5 h-0.5 bg-primary"></span>
                    <span className="material-symbols-outlined text-xs -ml-1 text-primary" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-surface-container-high rounded flex shadow-sm">
                    <div className="px-2.5 py-1.5 font-semibold text-on-surface">
                      {"10"}
                    </div>
                    <div className="w-px bg-outline-variant"></div>
                    <div className="px-2 py-1.5 flex items-center justify-center text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-5 h-0.5 bg-primary"></span>
                    <span className="material-symbols-outlined text-xs -ml-1 text-primary" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-surface-container-high rounded flex shadow-sm">
                    <div className="px-2.5 py-1.5 font-semibold text-on-surface">
                      {"20"}
                    </div>
                    <div className="w-px bg-outline-variant"></div>
                    <div className="px-2 py-1.5 flex items-center justify-center text-primary">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <span className="w-5 h-0.5 bg-primary"></span>
                    <span className="material-symbols-outlined text-xs -ml-1 text-primary" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="bg-surface-container-high rounded flex shadow-sm">
                    <div className="px-2.5 py-1.5 font-semibold text-on-surface">
                      {"30"}
                    </div>
                    <div className="w-px bg-outline-variant"></div>
                    <div className="px-2 py-1.5 font-code text-code text-secondary flex items-center justify-center">
                      {"\n                ø\n              "}
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <p className="font-body-sm text-body-sm text-secondary px-1 text-center">
              {"Follow the "}
              <span className="font-code text-code font-medium">
                {"next"}
              </span>
              {" reference from node to node until terminal null."}
            </p>
          </div>
          <div className="bg-surface-container-low rounded-lg p-space-md space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                {"Worked Micro-Example"}
              </span>
              <span className="bg-surface-container px-2 py-0.5 rounded-full font-code text-code text-secondary" id="stepCounter">
                {"Step 1 of 3"}
              </span>
            </div>
            <div>
              <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                {"Adding a node at the beginning"}
              </h3>
              <p className="font-body-sm text-body-sm text-on-surface mt-1" id="stepDescription">
                {"Create a new node containing value 5 with an unlinked pointer."}
              </p>
            </div>
            <div className="bg-surface-container-lowest rounded-md p-space-sm flex flex-col items-center justify-center min-h-[92px] transition-all" id="stepperVisualBox">
              <div className="flex items-center gap-space-xs font-code text-code">
                <div className="bg-primary text-on-primary px-3 py-1.5 rounded flex items-center gap-1.5 shadow-sm">
                  <span className="font-semibold">
                    {"new_node: [5]"}
                  </span>
                  <span className="opacity-70 text-xs">
                    {"→ null"}
                  </span>
                </div>
                <span className="text-secondary font-body-sm text-body-sm">
                  {"isolated in memory"}
                </span>
              </div>
            </div>
            <div className="flex items-center justify-between pt-1">
              <div className="flex items-center gap-space-xs">
                <button className="bg-surface-container text-secondary opacity-50 px-3 py-1 rounded-lg font-label-md text-label-md flex items-center gap-1" disabled id="prevStepBtn" type="button">
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {"west"}
                  </span>
                  {"\n            Prev\n          "}
                </button>
                <button className="bg-primary text-on-primary hover:bg-on-surface-variant px-3 py-1 rounded-lg font-label-md text-label-md flex items-center gap-1 shadow-sm transition-colors" id="nextStepBtn" type="button">
                  {"\n            Next\n            "}
                  <span className="material-symbols-outlined text-sm" aria-hidden="true">
                    {"east"}
                  </span>
                </button>
              </div>
              <button className="text-secondary hover:text-on-surface font-label-sm text-label-sm flex items-center gap-0.5 transition-colors" type="button">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"add_comment"}
                </span>
                {"\n          Ask about step\n        "}
              </button>
            </div>
          </div>
          <div className="flex flex-wrap gap-space-xs pt-1">
            <button className="bg-surface-container hover:bg-surface-variant text-on-surface rounded-full px-3 py-1 font-label-sm text-label-sm flex items-center gap-1 transition-all" type="button">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                {"magic_button"}
              </span>
              {"\n        Simpler\n      "}
            </button>
            <button className="bg-surface-container hover:bg-surface-variant text-on-surface rounded-full px-3 py-1 font-label-sm text-label-sm flex items-center gap-1 transition-all" type="button">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                {"cycle"}
              </span>
              {"\n        Another example\n      "}
            </button>
            <button className="bg-surface-container hover:bg-surface-variant text-on-surface rounded-full px-3 py-1 font-label-sm text-label-sm flex items-center gap-1 transition-all" id="listenChipBtn" type="button">
              <span className="material-symbols-outlined text-sm" aria-hidden="true">
                {"headphones"}
              </span>
              {"\n        Listen ♫\n      "}
            </button>
          </div>
          <div className="hidden bg-surface-container-high rounded-xl p-space-sm space-y-2 animate-fadeIn transition-all" id="audioPlayerCard">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-space-xs">
                <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center shadow-sm" id="audioPlayToggle" type="button">
                  <span className="material-symbols-outlined text-base" id="playIcon" aria-hidden="true">
                    {"play_arrow"}
                  </span>
                </button>
                <div>
                  <span className="font-label-sm text-label-sm font-semibold text-on-surface block leading-tight">
                    {"Audio Explanation"}
                  </span>
                  <span className="font-code text-code text-[11px] text-secondary">
                    {"Voice Synthesis: Prof. Turing"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-xs">
                <button className="font-code text-code text-[11px] bg-surface-container px-2 py-0.5 rounded text-secondary hover:text-on-surface" type="button">
                  {"1.0x"}
                </button>
                <button className="w-7 h-7 flex items-center justify-center text-secondary hover:text-on-surface rounded-full" id="closeAudioBtn" type="button">
                  <span className="material-symbols-outlined text-base" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
            </div>
            <div className="space-y-1">
              <div className="w-full bg-surface-variant rounded-full h-1.5 relative overflow-hidden cursor-pointer">
                <div className="bg-primary h-full w-[44%] transition-all" id="audioProgress"></div>
              </div>
              <div className="flex justify-between font-code text-code text-[10px] text-secondary">
                <span id="audioCurrent">
                  {"0:42"}
                </span>
                <span>
                  {"1:38"}
                </span>
              </div>
            </div>
          </div>
          <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm">
            <div className="flex items-center gap-1.5 text-secondary">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                {"verified"}
              </span>
              <span className="font-label-md text-label-md font-semibold text-on-surface">
                {"Ready to try it?"}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              {"\n        Test your intuitive grasp with a 90-second diagram tracing puzzle.\n      "}
            </p>
            <div className="flex flex-col gap-2 pt-1">
              <button className="w-full bg-primary hover:bg-on-surface-variant text-on-primary py-2.5 px-space-md rounded-xl font-label-md text-label-md flex items-center justify-center gap-2 shadow-sm transition-colors" type="button">
                <span>
                  {"Try a practice question"}
                </span>
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"arrow_forward"}
                </span>
              </button>
              <button className="w-full bg-surface-container hover:bg-surface-variant text-on-surface py-2 px-space-md rounded-xl font-label-md text-label-md flex items-center justify-center gap-1.5 transition-colors" type="button">
                <span className="material-symbols-outlined text-sm" aria-hidden="true">
                  {"help_outline"}
                </span>
                <span>
                  {"I still have a question"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="fixed bottom-16 left-0 right-0 z-40 bg-surface/90 backdrop-blur-md px-margin py-2 shadow-sm">
          <div className="max-w-md mx-auto flex items-center gap-space-xs bg-surface-container-lowest rounded-xl p-1.5 shadow-sm">
            <button aria-label="Add attachment" className="w-9 h-9 flex items-center justify-center text-secondary hover:text-on-surface rounded-lg transition-colors" type="button">
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                {"add_circle"}
              </span>
            </button>
            <input className="flex-1 bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface placeholder:text-secondary px-1" placeholder="Ask about this topic..." type="text" />
            <button aria-label="Voice prompt" className="w-9 h-9 flex items-center justify-center text-secondary hover:text-on-surface rounded-lg transition-colors" type="button">
              <span className="material-symbols-outlined text-xl" aria-hidden="true">
                {"mic"}
              </span>
            </button>
            <button aria-label="Send" className="w-9 h-9 flex items-center justify-center bg-primary text-on-primary rounded-lg shadow-sm hover:bg-on-surface-variant transition-colors" type="button">
              <span className="material-symbols-outlined text-base" aria-hidden="true">
                {"arrow_upward"}
              </span>
            </button>
          </div>
        </div>
        <div className="bg-surface-container-low rounded-xl p-space-sm space-y-1.5 mt-4">
          <div className="flex items-center justify-between px-1">
            <span className="font-code text-code text-[11px] text-secondary uppercase font-semibold">
              {"State Switcher"}
            </span>
            <span className="font-code text-code text-[11px] text-secondary">
              {"UX Presets"}
            </span>
          </div>
          <div className="flex flex-wrap gap-1">
            <button className="preset-btn bg-primary text-on-primary text-[11px] font-label-sm px-2 py-1 rounded" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"Default Lesson"}
            </button>
            <button className="preset-btn bg-surface-container text-on-surface text-[11px] font-label-sm px-2 py-1 rounded hover:bg-surface-variant" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"Expanded Diagram Sheet"}
            </button>
            <button className="preset-btn bg-surface-container text-on-surface text-[11px] font-label-sm px-2 py-1 rounded hover:bg-surface-variant" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"Step 3 Final"}
            </button>
            <button className="preset-btn bg-surface-container text-on-surface text-[11px] font-label-sm px-2 py-1 rounded hover:bg-surface-variant" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"Audio Playing"}
            </button>
            <button className="preset-btn bg-surface-container text-on-surface text-[11px] font-label-sm px-2 py-1 rounded hover:bg-surface-variant" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"Plan Sheet"}
            </button>
          </div>
        </div>
        <div className="hidden fixed inset-0 z-50 flex flex-col justify-end" id="diagramSheet">
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-xs transition-opacity" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
          <div className="relative w-full bg-surface-container-lowest rounded-t-2xl p-space-md shadow-2xl max-h-[751px] overflow-y-auto space-y-space-md animate-slideUp">
            <div className="w-10 h-1 bg-surface-variant rounded-full mx-auto"></div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Anatomy of a Singly Linked List"}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  {"Interactive deep inspection"}
                </p>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="bg-surface-container-low rounded-xl p-space-md space-y-space-sm">
              <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider block">
                {"Single Node Breakdown"}
              </span>
              <div className="flex justify-center py-2">
                <div className="w-full max-w-xs bg-surface-container-lowest rounded-lg p-space-md shadow-sm space-y-2">
                  <div className="flex items-center justify-between font-code text-code text-xs text-secondary">
                    <span>
                      {"Node Object in Heap"}
                    </span>
                    <span className="text-primary font-bold">
                      {"0x7FFE"}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 rounded overflow-hidden">
                    <div className="bg-surface-container p-2 text-center">
                      <span className="text-[10px] text-secondary font-code block">
                        {"Value"}
                      </span>
                      <span className="font-headline-sm text-headline-sm font-semibold">
                        {"10"}
                      </span>
                    </div>
                    <div className="bg-surface-container-high p-2 text-center">
                      <span className="text-[10px] text-secondary font-code block">
                        {"Next Pointer"}
                      </span>
                      <span className="font-code text-xs text-primary font-semibold">
                        {"→ 0x7FFA"}
                      </span>
                    </div>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary text-center pt-1">
                    {"Total payload: 8 bytes payload + 8 bytes reference address."}
                  </p>
                </div>
              </div>
            </div>
            <div className="space-y-space-xs">
              <h4 className="font-label-md text-label-md text-on-surface font-semibold">
                {"Memory Allocation Comparison"}
              </h4>
              <div className="grid grid-cols-2 gap-space-xs font-body-sm text-body-sm">
                <div className="bg-surface-container-low p-2.5 rounded-lg space-y-1">
                  <span className="font-semibold block text-on-surface">
                    {"Array Memory"}
                  </span>
                  <p className="text-secondary text-xs">
                    {"Contiguous block. Fast lookups O(1), rigid resizing."}
                  </p>
                </div>
                <div className="bg-surface-container-low p-2.5 rounded-lg space-y-1">
                  <span className="font-semibold block text-on-surface">
                    {"Linked List"}
                  </span>
                  <p className="text-secondary text-xs">
                    {"Scattered references. Dynamic scaling, O(n) lookups."}
                  </p>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-on-primary py-2.5 rounded-xl font-label-md text-label-md shadow-sm" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Return to Session\n      "}
            </button>
          </div>
        </div>
        <div className="hidden fixed inset-0 z-50 flex flex-col justify-end" id="planSheet">
          <div className="absolute inset-0 bg-primary/20 backdrop-blur-xs transition-opacity" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}></div>
          <div className="relative w-full bg-surface-container-lowest rounded-t-2xl p-space-md shadow-2xl max-h-[751px] overflow-y-auto space-y-space-md animate-slideUp">
            <div className="w-10 h-1 bg-surface-variant rounded-full mx-auto"></div>
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                  {"Active Study Plan"}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  {"Data Structures & Algorithms Core"}
                </p>
              </div>
              <button className="w-8 h-8 rounded-full bg-surface-container flex items-center justify-center text-secondary hover:text-on-surface" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-lg" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-low">
                <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                  {"check_circle"}
                </span>
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-medium text-on-surface block line-through opacity-70">
                    {"1. Primitive vs Reference Types"}
                  </span>
                  <span className="font-code text-code text-[11px] text-secondary">
                    {"Completed · 25m"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-high">
                <span className="material-symbols-outlined text-primary" aria-hidden="true">
                  {"radio_button_checked"}
                </span>
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-semibold text-on-surface block">
                    {"2. Singly Linked Lists Anatomy"}
                  </span>
                  <span className="font-code text-code text-[11px] text-primary">
                    {"In progress · 40m"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-low">
                <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                  {"radio_button_unchecked"}
                </span>
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-medium text-on-surface block">
                    {"3. Reversing a Linked List in O(1) space"}
                  </span>
                  <span className="font-code text-code text-[11px] text-secondary">
                    {"Up next · 30m"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm p-2 rounded-lg bg-surface-container-low">
                <span className="material-symbols-outlined text-secondary" aria-hidden="true">
                  {"radio_button_unchecked"}
                </span>
                <div className="flex-1">
                  <span className="font-label-md text-label-md font-medium text-on-surface block">
                    {"4. Doubly & Circular Variations"}
                  </span>
                  <span className="font-code text-code text-[11px] text-secondary">
                    {"Locked"}
                  </span>
                </div>
              </div>
            </div>
            <button className="w-full bg-primary text-on-primary py-2.5 rounded-xl font-label-md text-label-md shadow-sm" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Close Plan\n      "}
            </button>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold">
      <div className="flex justify-around items-center h-16 px-margin">
        <a aria-current="page" className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 transition-colors text-primary font-semibold" data-path="mentor" href="#">
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">
            {"forum"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Mentor"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-secondary hover:text-on-surface transition-colors" data-path="plan" href="#">
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">
            {"calendar_today"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Plan"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-secondary hover:text-on-surface transition-colors" data-path="graph" href="#">
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">
            {"hub"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Graph"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center w-14 h-12 gap-0.5 text-secondary hover:text-on-surface transition-colors" data-path="status" href="#">
          <span className="material-symbols-outlined text-2xl" aria-hidden="true">
            {"insights"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Status"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
