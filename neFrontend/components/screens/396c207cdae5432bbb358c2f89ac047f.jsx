'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import { BorderBeam } from 'border-beam';
import './396c207cdae5432bbb358c2f89ac047f.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '396c207cdae5432bbb358c2f89ac047f');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-396c207cdae5432bbb358c2f89ac047f bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased" data-screen-id="396c207cdae5432bbb358c2f89ac047f">
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-14 px-space-md flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-space-sm">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary"><BrandLogo className="stitch-wordmark" /></span>
          </div>
          <button aria-label="Collapse sidebar" className="text-on-surface-variant hover:text-on-surface flex items-center justify-center p-space-xs rounded transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"dock_to_right"}
            </span>
          </button>
        </div>
        <div className="p-space-sm flex flex-col gap-space-sm">
          <button className="w-full flex items-center justify-between px-space-md py-space-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="flex items-center gap-space-sm">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"edit_square"}
              </span>
              {"New session"}
            </span>
            <span className="font-code text-code text-on-surface-variant">
              {"⌘N"}
            </span>
          </button>
          <div className="relative">
            <span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full bg-surface-container border border-outline-variant rounded-lg pl-8 pr-space-sm py-1.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary transition-colors" placeholder="Search chats..." type="text" />
          </div>
        </div>
        <div className="px-space-sm pt-space-xs">
          <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-label-md">
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="learning-workspace" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"chat"}
              </span>
              {"Learning Workspace"}
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="study-plan" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"route"}
              </span>
              {"My Plan / Strategy"}
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="knowledge-graph" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"hub"}
              </span>
              {"Knowledge Graph"}
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="target-status" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"flag"}
              </span>
              {"Target Status"}
            </a>
          </nav>
        </div>
        <div className="flex-1 overflow-y-auto px-space-sm pt-space-md min-h-0">
          <div className="flex items-center justify-between px-space-sm pb-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
            <span>
              {"Recent Conversations"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <a className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors truncate" data-path="learning-workspace" href="#">
              <span className="truncate">
                {"Transformer Attention Mechanics"}
              </span>
              <span className="font-code text-code text-on-surface-variant text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {"2h"}
              </span>
            </a>
            <a className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors truncate" data-path="learning-workspace" href="#">
              <span className="truncate">
                {"Calculus III: Vector Fields"}
              </span>
              <span className="font-code text-code text-on-surface-variant text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {"1d"}
              </span>
            </a>
            <a className="group flex items-center justify-between px-space-sm py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors truncate" data-path="learning-workspace" href="#">
              <span className="truncate">
                {"Distributed Consensus Draft"}
              </span>
              <span className="font-code text-code text-on-surface-variant text-[11px] opacity-0 group-hover:opacity-100 transition-opacity">
                {"3d"}
              </span>
            </a>
          </div>
        </div>
      </div>
      <div className="p-space-sm border-t border-outline-variant">
        <nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-label-md">
          <a className="flex items-center justify-between px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" data-path="settings" href="#">
            <div className="flex items-center gap-space-sm min-w-0">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"settings"}
              </span>
              <span className="truncate">
                {"Settings & Preferences"}
              </span>
            </div>
          </a>
        </nav>
      </div>
    </aside>
    <div className="pl-64">
      <header className="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant z-40 flex items-center justify-between px-space-lg">
        <div className="w-32 flex items-center">
          <span className="font-code text-code text-on-surface-variant">
            {"SOLVE v2.4"}
          </span>
        </div>
        <div className="flex items-center bg-surface-container p-0.5 rounded-lg border border-outline-variant">
          <nav className="flex items-center" data-active-classes="bg-surface-container-lowest text-on-surface shadow-sm">
            <a className="px-space-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="learning-workspace" href="#">
              {"Chat"}
            </a>
            <a className="px-space-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" data-path="study-workspace" href="#">
              {"Study"}
            </a>
          </nav>
        </div>
        <div className="w-32 flex items-center justify-end gap-space-sm">
          <button aria-label="Workspace actions" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"tune"}
            </span>
          </button>
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/missing-export-asset.svg" data-missing-asset="/assets/7e17bca1d79158ba.png" />
        </div>
      </header>
      <main className="relative pt-14 w-full bg-surface-container-lowest min-h-screen chat-home-main">
        <div className="flex flex-col w-full">
          <div className="w-full flex flex-col items-center px-gutter-desktop pb-space-2xl">
            <div data-chat-status="true" className="w-full max-w-4xl pt-space-md pb-space-sm flex items-center justify-between">
              <div className="flex items-center gap-space-sm">
                <span className="inline-flex items-center justify-center w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-code text-code text-on-surface-variant tracking-wider uppercase">
                  {"Active Session // Fast Ingestion Mode"}
                </span>
              </div>
              <div className="flex items-center gap-space-md">
                <span className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"bolt"}
                  </span>
                  {" Instant Synthesizer\n        "}
                </span>
                <span className="font-code text-code text-on-surface-variant">
                  {"Tokens: 14.8k / 32k"}
                </span>
              </div>
            </div>
            <div className="w-full max-w-4xl flex flex-col items-center">
              <section className="w-full flex flex-col items-center pt-16 pb-8 transition-all duration-300" id="view-chat-home">
                <div className="mb-space-lg flex items-center justify-center w-14 h-14 rounded-2xl bg-surface-container-low shadow-sm">
                  <img alt="SOLVE Brand Identity" className="h-5 w-auto object-contain filter grayscale contrast-125 opacity-90" src="/assets/solve-logo.png" data-brand="solve" />
                </div>
                <div className="text-center max-w-2xl mx-auto space-y-space-xs mb-space-xl">
                  <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight font-semibold watermelon-hero-heading">
                    {"\n            What can I help you with?\n          "}
                  </h1>
                  <p className="font-body-lg text-body-lg text-secondary watermelon-hero-subtitle">
                    {"\n            Ask a question, explore an idea, or add something you'd like help understanding.\n          "}
                  </p>
                </div>
                <BorderBeam size="md" colorVariant="ocean" borderRadius={18} className="w-full max-w-210" style={{ width: '100%', maxWidth: '840px' }}>
                  <div data-chat-composer="true" className="w-full max-w-210 rounded-2xl bg-surface-container-lowest shadow-md p-space-md transition-all focus-within:shadow-xl focus-within:bg-surface-container-lowest watermelon-hero-composer" style={{ width: '100%', maxWidth: '840px' }}>
                    <div className="px-space-sm pt-space-xs">
                      <textarea className="w-full resize-none bg-transparent font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none transition-colors leading-relaxed min-h-24" id="prompt-input-home" placeholder="Ask SOLVE anything, drop a concept, or paste code..." rows="3"></textarea>
                    </div>
                    <div className="flex items-center justify-between pt-space-sm px-space-xs">
                      <div className="flex items-center gap-space-xs">
                        <button className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors font-label-md text-label-md" id="btn-upload-file" title="Add resources, PDFs, notes, or code files" type="button" aria-label="Add resources, PDFs, notes, or code files">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"add_circle"}
                          </span>
                          <span className="font-label-sm text-label-sm">
                            {"Add Context"}
                          </span>
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Web Search Augmentation" type="button" aria-label="Web Search Augmentation">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"language"}
                          </span>
                        </button>
                        <button className="inline-flex items-center gap-1 px-2.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" title="Deep Reasoner Mode" type="button" aria-label="Deep Reasoner Mode">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"psychology"}
                          </span>
                        </button>
                      </div>
                      <div className="flex items-center gap-space-sm">
                        <button aria-label="Voice input" className="p-2 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"mic"}
                          </span>
                        </button>
                        <button aria-label="Send query" className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:bg-surface-container-highest hover:text-on-surface transition-all active:scale-95 shadow-sm" id="btn-send-home" type="button">
                          <span className="material-symbols-outlined text-[19px]" aria-hidden="true">
                            {"arrow_upward"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                </BorderBeam>
                <div className="flex flex-wrap items-center justify-center gap-space-sm mt-space-lg max-w-3xl watermelon-hero-pills">
                  <button className="group flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-all shadow-sm" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-primary transition-colors" aria-hidden="true">
                      {"auto_stories"}
                    </span>
                    <span className="font-label-md text-label-md">
                      {"Explain a concept"}
                    </span>
                  </button>
                  <button className="group flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-all shadow-sm" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-primary transition-colors" aria-hidden="true">
                      {"help_outline"}
                    </span>
                    <span className="font-label-md text-label-md">
                      {"Help with a question"}
                    </span>
                  </button>
                  <button className="group flex items-center gap-2 px-space-md py-2 rounded-full bg-surface-container-low text-secondary hover:text-primary hover:bg-surface-container transition-all shadow-sm" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[16px] text-secondary group-hover:text-primary transition-colors" aria-hidden="true">
                      {"lightbulb"}
                    </span>
                    <span className="font-label-md text-label-md">
                      {"Explore an idea"}
                    </span>
                  </button>
                </div>
                <div className="mt-space-2xl flex items-center gap-space-sm text-secondary font-body-sm text-body-sm watermelon-hero-footer">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"verified_user"}
                  </span>
                  <span>
                    {"Zero-overhead inquiry. No study plan scheduling required."}
                  </span>
                </div>
              </section>
              <section className="hidden w-full flex-col space-y-space-xl pt-space-md pb-32 animate-fadeIn" id="view-chat-active">
                <div className="w-full flex items-center justify-between pb-space-sm">
                  <div className="flex items-center gap-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      {"Topic"}
                    </span>
                    <span className="font-headline-sm text-headline-sm text-primary">
                      {"Recursion in Computer Science"}
                    </span>
                  </div>
                  <div className="flex items-center gap-space-sm">
                    <button className="flex items-center gap-1 px-space-sm py-1 rounded-md text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-sm text-label-sm" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"bookmark_border"}
                      </span>
                      {" Save to Plan\n            "}
                    </button>
                    <button className="flex items-center gap-1 px-space-sm py-1 rounded-md text-secondary hover:text-primary hover:bg-surface-container transition-colors font-label-sm text-label-sm" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"share"}
                      </span>
                      {" Share\n            "}
                    </button>
                  </div>
                </div>
                <div className="w-full flex items-start justify-end gap-space-md pl-12">
                  <div className="max-w-xl rounded-2xl bg-surface-container-low px-space-lg py-space-md shadow-sm">
                    <p className="font-body-md text-body-md text-primary font-medium">
                      {"\n              Explain recursion simply. I keep getting lost in how the call stack remembers where to return.\n            "}
                    </p>
                    <span className="block mt-space-xs font-code text-code text-on-surface-variant text-[11px] text-right">
                      {"Just now"}
                    </span>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary shrink-0 flex items-center justify-center text-on-primary text-xs font-semibold">
                    {"\n            U\n          "}
                  </div>
                </div>
                <div className="w-full flex items-start gap-space-md pr-12">
                  <div className="w-8 h-8 rounded-full bg-surface-container-high shrink-0 flex items-center justify-center text-primary shadow-sm">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"neurology"}
                    </span>
                  </div>
                  <div className="flex-1 space-y-space-md">
                    <div className="rounded-2xl bg-surface-container-lowest p-space-xl space-y-space-md shadow-sm">
                      <div className="flex items-center justify-between pb-space-xs">
                        <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary font-semibold">
                          {"SOLVE AI Mentor"}
                        </span>
                        <span className="font-code text-code text-on-surface-variant text-[11px]">
                          {"Instant Breakdown • 0.38s"}
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-primary leading-relaxed">
                        {"\n                At its heart, "}
                        <strong className="font-semibold text-primary">
                          {"recursion"}
                        </strong>
                        {" is just delegating work to a clone of yourself until the job is small enough for a toddler to solve.\n              "}
                      </p>
                      <div className="rounded-xl bg-surface-container-low p-space-lg space-y-space-sm">
                        <div className="flex items-center gap-space-sm text-primary">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"layers"}
                          </span>
                          <span className="font-headline-sm text-headline-sm">
                            {"The Russian Doll Analogy (Call Stack)"}
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary leading-normal">
                          {"\n                  Imagine opening a Russian nesting doll looking for a tiny gold coin.\n                "}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-space-xs">
                          <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm space-y-1">
                            <span className="font-code text-code text-primary font-bold">
                              {"1. Winding Up"}
                            </span>
                            <p className="font-body-sm text-body-sm text-secondary">
                              {"You pop doll A open, set its lid on the table, and look at doll B. Doll A is paused, waiting."}
                            </p>
                          </div>
                          <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm space-y-1">
                            <span className="font-code text-code text-primary font-bold">
                              {"2. Base Case"}
                            </span>
                            <p className="font-body-sm text-body-sm text-secondary">
                              {"You finally hit the smallest doll with the coin. No more doll openings!"}
                            </p>
                          </div>
                          <div className="p-space-sm rounded-lg bg-surface-container-lowest shadow-sm space-y-1">
                            <span className="font-code text-code text-primary font-bold">
                              {"3. Unwinding"}
                            </span>
                            <p className="font-body-sm text-body-sm text-secondary">
                              {"You put lids back on from smallest to largest in reverse order (Last-In, First-Out)."}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="rounded-xl bg-primary text-on-primary p-space-md space-y-space-xs">
                        <div className="flex items-center justify-between text-on-primary-container pb-space-xs">
                          <span className="font-code text-code uppercase tracking-wide">
                            {"python // countdown.py"}
                          </span>
                          <button className="font-code text-code hover:text-on-primary transition-colors flex items-center gap-1" type="button">
                            <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                              {"content_copy"}
                            </span>
                            {" copy\n                  "}
                          </button>
                        </div>
                        <pre className="font-code text-code text-[12px] leading-relaxed overflow-x-auto text-primary-fixed">
                          <code>
                            {"def countdown(n):\n    if n <= 0:             # <-- Base Case (Exit condition)\n        print(\"Blast off!\")\n        return\n    print(n)\n    countdown(n - 1)       # <-- Recursive Case (Self reference)\n    print(f\"Resuming {n}\") # <-- Stack Unwinds here"}
                          </code>
                        </pre>
                      </div>
                      <div className="pt-space-sm">
                        <p className="font-body-md text-body-md text-primary font-medium">
                          {"\n                  Would you like a simple everyday analogy, an interactive step-by-step memory diagram, or should we trace a specific algorithm like Fibonacci?\n                "}
                        </p>
                        <div className="flex flex-wrap gap-space-sm mt-space-md">
                          <button className="px-space-md py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            {"\n                    Draw memory stack diagram\n                  "}
                          </button>
                          <button className="px-space-md py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            {"\n                    Trace Fibonacci call tree\n                  "}
                          </button>
                          <button className="px-space-md py-1.5 rounded-full bg-surface-container text-primary font-label-md text-label-md hover:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            {"\n                    Why does StackOverflow occur?\n                  "}
                          </button>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-sm px-space-xs text-secondary">
                      <button className="p-1 hover:text-primary transition-colors" title="Helpful response" type="button" aria-label="Helpful response">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"thumb_up"}
                        </span>
                      </button>
                      <button className="p-1 hover:text-primary transition-colors" title="Needs improvement" type="button" aria-label="Needs improvement">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"thumb_down"}
                        </span>
                      </button>
                      <button className="p-1 hover:text-primary transition-colors" title="Regenerate" type="button" aria-label="Regenerate">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"refresh"}
                        </span>
                      </button>
                      <span className="text-xs">
                        {"•"}
                      </span>
                      <button className="text-xs font-label-sm text-label-sm hover:text-primary transition-colors" type="button">
                        {"\n                Extract as Flashcard\n              "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="sticky bottom-4 w-full rounded-2xl bg-surface-container-lowest shadow-xl p-space-sm transition-all focus-within:shadow-2xl">
                  <div className="flex items-center gap-space-sm px-space-xs">
                    <button className="w-8 h-8 rounded-lg text-secondary hover:text-primary hover:bg-surface-container flex items-center justify-center transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"add"}
                      </span>
                    </button>
                    <input className="flex-1 bg-transparent py-2 font-body-md text-body-md text-primary placeholder:text-secondary focus:outline-none" id="prompt-input-active" placeholder="Ask a clarifying question or continue exploration..." type="text" />
                    <button className="p-2 rounded-lg text-secondary hover:text-primary hover:bg-surface-container transition-colors" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-surface-container-highest hover:text-on-surface transition-colors" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_upward"}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="hidden w-full flex-col space-y-space-lg pt-space-lg animate-fadeIn" id="view-mode-comparison">
                <div className="w-full text-center space-y-1 mb-space-sm">
                  <h2 className="font-headline-md text-headline-md text-primary font-semibold">
                    {"Mode Topology Comparison"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary">
                    {"SOLVE dual-engine dynamic cognitive architecture"}
                  </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md w-full">
                  <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-md space-y-space-md flex flex-col justify-between">
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="px-space-sm py-1 rounded-full bg-primary text-on-primary font-code text-code text-[11px] uppercase tracking-wider">
                          {"\n                  Selected // Active\n                "}
                        </span>
                        <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
                          {"chat_bubble"}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {"Chat Mode"}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary leading-relaxed">
                        {"\n                Optimized for fluid exploratory reasoning, immediate tactical troubleshooting, and zero-friction questions. No commitments or multi-week study schedules.\n              "}
                      </p>
                      <ul className="space-y-space-xs pt-space-sm font-body-sm text-body-sm text-primary">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]" aria-hidden="true">
                            {"check"}
                          </span>
                          {" Zero-setup immediate answers\n                "}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]" aria-hidden="true">
                            {"check"}
                          </span>
                          {" Dynamic code tracing & analogies\n                "}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-primary text-[16px]" aria-hidden="true">
                            {"check"}
                          </span>
                          {" Ad-hoc resource ingestion\n                "}
                        </li>
                      </ul>
                    </div>
                    <button className="w-full py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-surface-container-highest hover:text-on-surface transition-colors mt-space-md" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Enter Chat Workspace\n            "}
                    </button>
                  </div>
                  <div className="p-space-xl rounded-2xl bg-surface-container-lowest shadow-sm space-y-space-md flex flex-col justify-between">
                    <div className="space-y-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="px-space-sm py-1 rounded-full bg-surface-container text-secondary font-code text-code text-[11px] uppercase tracking-wider">
                          {"\n                  Target Oriented\n                "}
                        </span>
                        <span className="material-symbols-outlined text-secondary text-[24px]" aria-hidden="true">
                          {"route"}
                        </span>
                      </div>
                      <h3 className="font-headline-md text-headline-md text-primary">
                        {"Study Mode"}
                      </h3>
                      <p className="font-body-md text-body-md text-secondary leading-relaxed">
                        {"\n                Structured deliberate practice with spaced repetition, knowledge graphs, target exam milestones, and active diagnostic assessments.\n              "}
                      </p>
                      <ul className="space-y-space-xs pt-space-sm font-body-sm text-body-sm text-secondary">
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                            {"check"}
                          </span>
                          {" Curated curriculum milestones\n                "}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                            {"check"}
                          </span>
                          {" Spaced repetition flashcards\n                "}
                        </li>
                        <li className="flex items-center gap-2">
                          <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                            {"check"}
                          </span>
                          {" Comprehensive knowledge mastery scoring\n                "}
                        </li>
                      </ul>
                    </div>
                    <a className="w-full text-center py-2.5 rounded-xl bg-surface-container-low text-primary hover:bg-surface-container font-label-md text-label-md transition-colors mt-space-md" data-path="study-workspace" href="#">
                      {"\n              Switch to Study Mode\n            "}
                    </a>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
