'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './c6a7d91a36b947e1ba2dc0ac687c28e0.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'c6a7d91a36b947e1ba2dc0ac687c28e0');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-c6a7d91a36b947e1ba2dc0ac687c28e0 bg-surface font-body-md text-on-surface flex flex-col min-h-screen" data-screen-id="c6a7d91a36b947e1ba2dc0ac687c28e0">
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-14 px-margin flex items-center justify-between">
        <button aria-label="Open Menu" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary rounded-lg transition-colors" id="drawer-open-btn" type="button">
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
            {"menu"}
          </span>
        </button>
        <div className="flex items-center gap-space-xs">
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold"><BrandLogo className="stitch-wordmark" /></span>
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
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover ml-1" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
        </div>
      </div>
    </header>
    <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
    <aside className="fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-surface-container-lowest shadow-[0_4px_24px_rgba(0,0,0,0.08)] transform -translate-x-full transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe" id="drawer-panel">
      <div className="p-space-lg flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-7 h-7 bg-primary text-on-primary rounded flex items-center justify-center font-headline-sm text-headline-sm font-semibold"><BrandLogo className="stitch-wordmark-mini" /></div>
          <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface"><BrandLogo className="stitch-wordmark" /></span>
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
            <img alt="Profile" className="w-9 h-9 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
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
      <div className="flex flex-col w-full px-margin pb-6 max-w-xl mx-auto space-y-space-md">
        <div className="flex items-center justify-between p-space-xs rounded-xl bg-surface-container-low overflow-x-auto no-scrollbar shadow-sm">
          <div className="flex items-center gap-1 text-[11px] font-label-sm uppercase tracking-wider text-on-surface-variant px-space-xs">
            <span className="material-symbols-outlined text-[15px] text-primary" aria-hidden="true">
              {"tune"}
            </span>
            <span>
              {"State:"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 flex-nowrap" id="state-toggles">
            <button className="px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-primary text-on-primary shadow-xs transition-all flex items-center gap-1" id="btn-situation" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"1. Situation"}
              </span>
            </button>
            <button className="px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1" id="btn-resources" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"2. Resources"}
              </span>
            </button>
            <button className="px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1" id="btn-complete" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"Complete"}
              </span>
            </button>
            <button className="px-2.5 py-1 rounded-full text-label-sm font-label-sm bg-surface-container text-on-surface hover:bg-surface-container-high transition-all flex items-center gap-1" id="btn-nomaterials" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"No Files"}
              </span>
            </button>
          </div>
        </div>
        <section className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm transition-all">
          <div className="flex items-center justify-between mb-space-xs">
            <div className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                {"Active Learning Target"}
              </span>
            </div>
            <button className="flex items-center gap-0.5 text-on-surface-variant hover:text-primary transition-colors text-label-sm font-label-sm px-1.5 py-0.5 rounded" type="button">
              <span>
                {"Edit"}
              </span>
              <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                {"edit"}
              </span>
            </button>
          </div>
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-start gap-space-sm mb-space-sm">
            <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" aria-hidden="true">
              {"school"}
            </span>
            <p className="font-body-md text-body-md text-on-surface font-medium leading-snug">
              {"\n        “Help me prepare for my Data Structures mid exam.”\n      "}
            </p>
          </div>
          <div className="space-y-0.5">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
              {"\n        Let’s find the right approach for you.\n      "}
            </h1>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {"\n        Answer contextual prompts & drop study materials so SOLVE can calibrate your strategy.\n      "}
            </p>
          </div>
        </section>
        <div className="grid grid-cols-2 p-1 bg-surface-container-low rounded-xl text-center shadow-xs">
          <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg bg-surface-container-lowest text-on-surface font-label-md text-label-md shadow-sm transition-all" id="tab-btn-situation" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="w-4 h-4 rounded-full bg-primary text-on-primary text-[10px] flex items-center justify-center font-code">
              {"1"}
            </span>
            <span>
              {"Situation Profile"}
            </span>
          </button>
          <button className="flex items-center justify-center gap-1.5 py-2 rounded-lg text-on-surface-variant font-label-md text-label-md hover:text-on-surface transition-all" id="tab-btn-resources" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="w-4 h-4 rounded-full bg-surface-container-highest text-on-surface-variant text-[10px] flex items-center justify-center font-code" id="tab-pill-resources">
              {"2"}
            </span>
            <span>
              {"Learning Materials"}
            </span>
          </button>
        </div>
        <section className="space-y-space-md transition-opacity duration-200" id="section-situation">
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                {"Understood Situation"}
              </span>
              <span className="font-code text-code text-[11px] text-on-surface-variant">
                {"2/3 calibrated"}
              </span>
            </div>
            <div className="flex flex-wrap gap-2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden="true">
                  {"event"}
                </span>
                <span>
                  {"Exam: "}
                  <strong>
                    {"Tomorrow, 10:00 AM"}
                  </strong>
                </span>
                <button className="ml-1 text-on-surface-variant hover:text-primary" type="button">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"edit"}
                  </span>
                </button>
              </div>
              <div className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container-low text-on-surface font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden="true">
                  {"timer"}
                </span>
                <span>
                  {"Study window: "}
                  <strong>
                    {"4 hours total"}
                  </strong>
                </span>
                <button className="ml-1 text-on-surface-variant hover:text-primary" type="button">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"edit"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-start gap-space-sm">
              <div className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center shrink-0 mt-0.5">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"psychology_alt"}
                </span>
              </div>
              <div className="space-y-1">
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-primary font-semibold">
                    {"QUESTION 3"}
                  </span>
                  <span className="font-code text-code text-[11px] text-on-surface-variant">
                    {"Goal Depth"}
                  </span>
                </div>
                <h2 className="font-headline-sm text-headline-sm text-on-surface font-medium leading-snug">
                  {"\n            What outcome are you prioritizing with 4 hours left?\n          "}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"\n            SOLVE adapts the synthesized curriculum based on your trade-off curve (80/20 rule vs rigorous proof mastery).\n          "}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-1" id="goal-options">
              <button className="w-full text-left p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all flex items-center justify-between group" id="opt-pass" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center group-[.active]:bg-primary group-[.active]:text-on-primary">
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"check"}
                    </span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-medium">
                      {"Pass the exam safely"}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      {"High-yield core algorithms + standard past questions"}
                    </div>
                  </div>
                </div>
                <span className="font-code text-code text-[11px] text-on-surface-variant bg-surface-container px-2 py-0.5 rounded">
                  {"80/20 Pareto"}
                </span>
              </button>
              <button className="w-full text-left p-space-sm rounded-xl bg-surface-container-lowest border-0 hover:bg-surface-container-low text-on-surface transition-all flex items-center justify-between group active" id="opt-high" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-primary text-on-primary flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"check"}
                    </span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-semibold">
                      {"Aim for higher score (B+ or A)"}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Covers edge cases, memory pointers & tree balancing proofs"}
                    </div>
                  </div>
                </div>
                <span className="font-code text-code text-[11px] text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded">
                  {"Deep Logic"}
                </span>
              </button>
              <button className="w-full text-left p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container text-on-surface transition-all flex items-center justify-between group" id="opt-custom" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-space-sm">
                  <div className="w-5 h-5 rounded-full bg-surface-container-highest flex items-center justify-center">
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"tune"}
                    </span>
                  </div>
                  <div>
                    <div className="font-label-md text-label-md text-on-surface font-medium">
                      {"Custom focus area"}
                    </div>
                    <div className="font-body-sm text-body-sm text-on-surface-variant">
                      {"e.g. \"Only Heap Trees and Dynamic Programming\""}
                    </div>
                  </div>
                </div>
                <span className="material-symbols-outlined text-on-surface-variant text-[18px]" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </button>
            </div>
            <div className="pt-space-xs">
              <label className="block font-label-sm text-label-sm text-on-surface-variant mb-1.5" htmlFor="situation-notes">
                {"\n          Or explain any specific anxiety / topics in your own words:\n        "}
              </label>
              <div className="rounded-xl bg-surface-container-low p-2 focus-within:bg-surface-container transition-colors">
                <textarea className="w-full bg-transparent text-on-surface font-body-sm text-body-sm placeholder:text-on-surface-variant resize-none outline-none p-1" id="situation-notes" placeholder="Type or tap the microphone to describe what scares you most about this test..." rows="2"></textarea>
                <div className="flex items-center justify-between pt-1">
                  <div className="flex items-center gap-1">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container-high transition-colors" title="Voice note" type="button" aria-label="Voice note">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                    <span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">
                      {"Speech-to-text active"}
                    </span>
                  </div>
                  <button className="px-3 py-1 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm flex items-center gap-1 hover:bg-primary-container transition-colors" type="button">
                    <span>
                      {"Save answer"}
                    </span>
                    <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="space-y-space-md transition-opacity duration-200" id="section-resources">
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                  {"Add Your Materials"}
                </h3>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"PDF, PPTX, Docx, or past paper snapshot photos."}
                </p>
              </div>
              <span className="w-8 h-8 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"library_add"}
                </span>
              </span>
            </div>
            <div className="grid grid-cols-2 gap-2.5">
              <button className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center justify-center text-center gap-1.5 transition-all group min-h-[92px]" type="button">
                <div className="w-9 h-9 rounded-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"upload_file"}
                  </span>
                </div>
                <span className="font-label-md text-label-md text-on-surface font-medium">
                  {"Browse files"}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">
                  {"PDFs, slides, docs"}
                </span>
              </button>
              <button className="p-space-sm rounded-xl bg-surface-container-low hover:bg-surface-container flex flex-col items-center justify-center text-center gap-1.5 transition-all group min-h-[92px]" type="button">
                <div className="w-9 h-9 rounded-full bg-surface-container-highest group-hover:bg-primary group-hover:text-on-primary flex items-center justify-center transition-colors">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"photo_camera"}
                  </span>
                </div>
                <span className="font-label-md text-label-md text-on-surface font-medium">
                  {"Snap past test"}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant text-[11px]">
                  {"OCR formula scanner"}
                </span>
              </button>
            </div>
            <div className="flex items-center gap-space-sm p-space-xs pl-space-sm bg-surface-container-low rounded-xl">
              <span className="material-symbols-outlined text-[18px] text-on-surface-variant" aria-hidden="true">
                {"link"}
              </span>
              <input className="bg-transparent border-0 outline-none w-full font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant" placeholder="Or paste Notion / Google Drive / Canvas URL..." type="text" />
              <button className="px-3 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm hover:bg-primary-container transition-colors shrink-0" type="button">
                {"\n          Attach\n        "}
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm" id="materials-list-container">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-1.5">
                <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                  {"Processed Context"}
                </span>
                <span className="px-1.5 py-0.5 rounded bg-surface-container font-code text-[11px] text-on-surface">
                  {"2 files"}
                </span>
              </div>
              <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-error transition-colors" type="button">
                {"Clear all"}
              </button>
            </div>
            <div className="space-y-2" id="resource-items">
              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"picture_as_pdf"}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-on-surface truncate font-medium">
                      {"DSA_Midterm_QuestionBank_2023.pdf"}
                    </p>
                    <div className="flex items-center gap-2 font-code text-code text-[11px] text-on-surface-variant">
                      <span>
                        {"3.2 MB"}
                      </span>
                      <span>
                        {"•"}
                      </span>
                      <span className="inline-flex items-center text-primary font-medium">
                        <span className="material-symbols-outlined text-[13px] mr-0.5" aria-hidden="true">
                          {"verified"}
                        </span>
                        {" 42 Questions indexed\n                "}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-space-sm min-w-0">
                  <div className="w-9 h-9 rounded-lg bg-surface-container-highest text-primary flex items-center justify-center shrink-0 relative">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"image"}
                    </span>
                    <span className="absolute -top-1 -right-1 w-2.5 h-2.5 rounded-full bg-primary animate-ping"></span>
                  </div>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md text-on-surface truncate font-medium">
                      {"Unit2_BinarySearchTree_Handwritten.jpg"}
                    </p>
                    <div className="flex items-center gap-2 font-code text-code text-[11px] text-on-surface-variant">
                      <span className="animate-pulse">
                        {"Reading handwriting with OCR... 68%"}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
            </div>
            <div className="p-space-sm rounded-xl bg-surface-container-high mt-space-sm space-y-space-xs">
              <div className="flex items-start gap-2">
                <span className="material-symbols-outlined text-[18px] text-primary mt-0.5" aria-hidden="true">
                  {"help_center"}
                </span>
                <div className="space-y-0.5">
                  <p className="font-label-md text-label-md text-on-surface font-medium leading-tight">
                    {"\n              Will the exam questions come only from this question bank?\n            "}
                  </p>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"\n              If yes, SOLVE prioritizes exact question variations. If no, we synthesize broader conceptual theorems.\n            "}
                  </p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-1.5 pt-1">
                <button className="py-1.5 px-2 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm text-center shadow-xs" type="button">
                  {"\n            Yes, 100%\n          "}
                </button>
                <button className="py-1.5 px-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm text-center transition-colors" type="button">
                  {"\n            No, partial\n          "}
                </button>
                <button className="py-1.5 px-2 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-sm text-label-sm text-center transition-colors" type="button">
                  {"\n            Not sure\n          "}
                </button>
              </div>
            </div>
          </div>
          <div className="hidden rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm" id="no-materials-box">
            <div className="p-space-md rounded-xl bg-surface-container-low text-center space-y-space-xs">
              <div className="w-12 h-12 mx-auto rounded-full bg-surface-container-highest flex items-center justify-center text-on-surface-variant">
                <span className="material-symbols-outlined text-[26px]" aria-hidden="true">
                  {"manage_search"}
                </span>
              </div>
              <h4 className="font-headline-sm text-headline-sm text-on-surface font-medium">
                {"Don't have your course syllabus?"}
              </h4>
              <p className="font-body-sm text-body-sm text-on-surface-variant max-w-sm mx-auto">
                {"\n          No stress. SOLVE will automatically scrape standard university syllabi (MIT 6.006 / Stanford CS106B) and generate synthetic problem sets tailored to your 4-hour window.\n        "}
              </p>
              <div className="pt-2">
                <button className="px-4 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-primary-container transition-colors inline-flex items-center gap-1.5" type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"auto_awesome"}
                  </span>
                  <span>
                    {"Synthesize standard DSA syllabus"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>
        <section className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-xs">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                {"auto_graph"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface uppercase tracking-wider font-semibold">
                {"Projected Learning Method"}
              </span>
            </div>
            <span className="font-code text-code text-[11px] text-on-surface-variant">
              {"Explainable AI"}
            </span>
          </div>
          <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
            <div className="space-y-0.5">
              <div className="flex items-center gap-1.5">
                <span className="font-label-md text-label-md text-on-surface font-semibold">
                  {"80/20 High-Yield Sprint + Visual Metaphors"}
                </span>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"\n          Reason: 4-hour hard ceiling + DSA midterm with verified question bank.\n        "}
              </p>
            </div>
            <div className="w-10 h-10 rounded-lg bg-surface-container-highest flex items-center justify-center text-primary shrink-0 ml-2">
              <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
                {"speed"}
              </span>
            </div>
          </div>
        </section>
        <aside className="sticky bottom-0 z-20 pt-2 pb-1 bg-surface/90 backdrop-blur-md">
          <div className="p-space-sm rounded-xl bg-surface-container-lowest shadow-md space-y-2">
            <div className="flex items-center justify-between text-[12px] text-on-surface-variant px-1 font-body-sm">
              <span className="flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-primary"></span>
                <span>
                  {"Ready to synthesize (4h window · High score focus)"}
                </span>
              </span>
              <span className="font-code text-[11px] text-primary font-medium">
                {"94% Confidence"}
              </span>
            </div>
            <button className="w-full h-12 bg-primary text-on-primary rounded-xl font-label-md text-label-md font-medium hover:bg-primary-container active:bg-primary flex items-center justify-center gap-2 shadow-sm transition-all" id="action-btn" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"bolt"}
              </span>
              <span id="action-btn-text">
                {"Create my learning approach"}
              </span>
            </button>
          </div>
        </aside>
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
