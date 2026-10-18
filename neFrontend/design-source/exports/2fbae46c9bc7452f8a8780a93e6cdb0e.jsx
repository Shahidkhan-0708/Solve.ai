'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/2fbae46c9bc7452f8a8780a93e6cdb0e';
import './2fbae46c9bc7452f8a8780a93e6cdb0e.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-2fbae46c9bc7452f8a8780a93e6cdb0e bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased" data-screen-id="2fbae46c9bc7452f8a8780a93e6cdb0e">
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-14 px-space-md flex items-center justify-between border-b border-outline-variant">
          <div className="flex items-center gap-space-sm">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary">
              {"SOLVE"}
            </span>
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
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
        </div>
      </header>
      <main className="relative pt-14 w-full bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full">
          <section className="w-full bg-surface-container-low px-gutter-desktop py-space-md">
            <div className="max-w-[1280px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm flex-wrap">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-lowest shadow-sm font-label-sm text-label-sm text-on-surface">
                  <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                  <span className="text-on-surface-variant font-code text-[11px] uppercase tracking-wider">
                    {"Active Track"}
                  </span>
                  <span className="font-body-md font-medium text-primary">
                    {"Goal: Learn Python in 3 Months"}
                  </span>
                </span>
                <button className="font-label-sm text-label-sm text-on-surface-variant hover:text-primary transition-colors underline underline-offset-4 decoration-outline-variant" id="btn-edit-goal" type="button">
                  {"\n          Edit target\n        "}
                </button>
              </div>
              <div className="flex items-center gap-space-md font-code text-code text-[11px] text-on-surface-variant">
                <div className="flex items-center gap-2">
                  <span>
                    {"PROGRESS"}
                  </span>
                  <span className="text-primary font-medium">
                    {"STEP 03 / 04"}
                  </span>
                </div>
                <div className="w-24 h-1.5 bg-surface-variant rounded-full overflow-hidden">
                  <div className="h-full bg-primary w-3/4 rounded-full transition-all duration-500"></div>
                </div>
              </div>
            </div>
          </section>
          <header className="w-full px-gutter-desktop pt-space-xl pb-space-lg">
            <div className="max-w-[1280px] mx-auto">
              <div className="flex flex-col gap-space-xs max-w-3xl">
                <span className="font-code text-code text-[12px] uppercase tracking-widest text-on-surface-variant">
                  {"Intake Diagnostic • Milestone Planner"}
                </span>
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {"\n          Let’s build your 3-month preparation journey.\n        "}
                </h1>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  {"\n          Tell me about your background, available time, and what you want to create. We'll balance pacing, practice reps, and milestones.\n        "}
                </p>
              </div>
            </div>
          </header>
          <section className="w-full px-gutter-desktop pb-space-xl">
            <div className="max-w-[1280px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
              <div className="lg:col-span-7 flex flex-col gap-space-md">
                <div className="bg-surface-container-low rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                        {"verified"}
                      </span>
                      {"\n              Confirmed Diagnostics\n            "}
                    </span>
                    <span className="font-code text-code text-[11px] text-on-surface-variant">
                      {"2 Captured"}
                    </span>
                  </div>
                  <div className="group bg-surface-container-lowest rounded-lg p-space-md transition-all hover:shadow-sm">
                    <div className="flex items-start justify-between gap-space-sm">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Target Applications"}
                        </span>
                        <p className="font-headline-sm text-headline-sm text-primary">
                          {"Web apps and data analysis scripts"}
                        </p>
                        <div className="flex items-center gap-2 pt-1 font-code text-code text-[11px] text-on-surface-variant">
                          <span>
                            {"FOCUS: Flask / FastAPI"}
                          </span>
                          <span>
                            {"•"}
                          </span>
                          <span>
                            {"Pandas & Automation"}
                          </span>
                        </div>
                      </div>
                      <button className="shrink-0 p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Modify answer" type="button" aria-label="Modify answer">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"edit"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="group bg-surface-container-lowest rounded-lg p-space-md transition-all hover:shadow-sm">
                    <div className="flex items-start justify-between gap-space-sm">
                      <div className="flex flex-col gap-1 min-w-0">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Programming Background"}
                        </span>
                        <p className="font-body-md text-body-md text-primary font-medium">
                          {"A bit of basic HTML/CSS, but brand new to programming logic"}
                        </p>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"\n                  Needs foundational intuition for variables, control flow, loops, and OOP concepts before framework integration.\n                "}
                        </p>
                      </div>
                      <button className="shrink-0 p-1.5 rounded text-on-surface-variant hover:text-primary hover:bg-surface-container-high transition-colors" title="Modify answer" type="button" aria-label="Modify answer">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"edit"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-md flex flex-col gap-space-md">
                  <div className="flex items-center gap-2">
                    <span className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-code text-[12px] font-medium">
                      {"3"}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface-variant uppercase tracking-wider">
                      {"Current Assessment Query"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h2 className="font-headline-md text-headline-md text-primary">
                      {"\n              How much time can you spend each week?\n            "}
                    </h2>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {"\n              Consistency outperforms sporadic marathons. We calculate deliberate practice sessions, revision spikes, and milestone buffers based on this.\n            "}
                    </p>
                  </div>
                  <div className="flex flex-wrap gap-2 pt-space-xs" id="time-pills">
                    <button className="time-pill px-4 py-2 rounded-full font-label-md text-label-md transition-all bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary" data-hours="4" type="button">
                      {"\n              3–5 hours / week\n            "}
                    </button>
                    <button aria-pressed="true" className="time-pill px-4 py-2 rounded-full font-label-md text-label-md transition-all bg-primary text-on-primary shadow-sm" data-hours="6" type="button">
                      {"\n              6–10 hours / week\n            "}
                    </button>
                    <button className="time-pill px-4 py-2 rounded-full font-label-md text-label-md transition-all bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary" data-hours="12" type="button">
                      {"\n              10+ hours / week\n            "}
                    </button>
                    <button className="time-pill px-4 py-2 rounded-full font-label-md text-label-md transition-all bg-surface-container text-on-surface-variant hover:bg-surface-variant hover:text-primary" data-hours="flex" type="button">
                      {"\n              Flexible / Irregular\n            "}
                    </button>
                  </div>
                  <div className="bg-surface-container-low rounded-lg p-space-md flex items-center justify-between gap-space-md" id="pacing-preview">
                    <div className="flex items-center gap-3">
                      <span className="material-symbols-outlined text-[24px] text-primary" aria-hidden="true">
                        {"timelapse"}
                      </span>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-primary font-medium">
                          {"Selected Pacing: ~6 hours / week"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Yields ~72 focused hours across 12 calendar weeks. Optimal for mastery."}
                        </span>
                      </div>
                    </div>
                    <div className="hidden sm:flex flex-col text-right font-code text-code text-[11px] text-on-surface-variant">
                      <span>
                        {"3 SESSIONS / WK"}
                      </span>
                      <span className="text-primary font-medium">
                        {"~2H EACH"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-1.5 pt-space-xs">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="time-detail-input">
                      {"\n              Add qualitative context or scheduling limitations (optional)\n            "}
                    </label>
                    <div className="relative bg-surface-container-low rounded-xl focus-within:bg-surface-container-lowest transition-colors">
                      <textarea className="w-full bg-transparent p-space-md pr-24 font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant focus:outline-none resize-none" id="time-detail-input" placeholder="e.g. Mostly free on Tuesday & Thursday evenings, plus a 3-hour deep block on Sunday mornings..." rows="2"></textarea>
                      <div className="absolute right-3 bottom-3 flex items-center gap-1.5">
                        <button aria-label="Voice input" className="p-2 rounded-lg text-on-surface-variant hover:text-primary hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"mic"}
                          </span>
                        </button>
                        <button aria-label="Confirm response" className="p-2 rounded-lg bg-primary text-on-primary hover:bg-surface-tint transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"arrow_upward"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="pt-space-xs flex items-center justify-between text-on-surface-variant font-code text-code text-[12px]">
                    <span className="flex items-center gap-1">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"subdirectory_arrow_right"}
                      </span>
                      {"\n              NEXT UP: Course & Syllabus preference\n            "}
                    </span>
                    <span className="text-primary font-medium">
                      {"Step 4 of 4"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="lg:col-span-5 flex flex-col gap-space-md">
                <div className="bg-surface-container-low rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                  <div className="flex flex-col gap-1">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant flex items-center gap-1.5">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"menu_book"}
                        </span>
                        {"\n                Curriculum Integration\n              "}
                      </span>
                      <span className="font-code text-code text-[11px] px-2 py-0.5 rounded bg-surface-container text-on-surface-variant">
                        {"2 Sources Loaded"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      {"Your resources & syllabus"}
                    </h2>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"\n              Have a university syllabus, textbook, online course, or notes you want to follow? We’ll parse and map its chapter sequence to your timeline.\n            "}
                    </p>
                  </div>
                  <div className="group relative rounded-xl bg-surface-container-lowest p-space-lg text-center cursor-pointer transition-all hover:bg-surface-container">
                    <input aria-label="Upload syllabus or study materials" className="absolute inset-0 opacity-0 cursor-pointer w-full h-full" id="file-uploader" multiple type="file" />
                    <div className="flex flex-col items-center gap-2 pointer-events-none">
                      <div className="w-12 h-12 rounded-full bg-surface-container-low flex items-center justify-center text-primary group-hover:scale-110 transition-transform">
                        <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
                          {"cloud_upload"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md text-primary font-medium">
                          {"Add curriculum files or links"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Drop PDF syllabus, lecture outlines, or textbook chapters"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2 pt-1 font-code text-code text-[11px] text-on-surface-variant">
                        <span>
                          {"PDF, MD, DOCX"}
                        </span>
                        <span>
                          {"•"}
                        </span>
                        <span>
                          {"Max 50MB"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-2">
                    <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider">
                      {"Processed & Attached Files"}
                    </span>
                    <div className="bg-surface-container-lowest rounded-lg p-space-md flex items-center justify-between gap-space-sm shadow-sm hover:shadow transition-shadow">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"picture_as_pdf"}
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-label-md text-label-md text-primary font-medium truncate">
                              {"CS50_Python_Syllabus.pdf"}
                            </span>
                            <span className="inline-flex items-center px-1.5 py-0.2 rounded bg-surface-container font-code text-[10px] text-primary">
                              {"10 WEEKS"}
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                            {"Curriculum guide • Ready • 2.4 MB"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors" title="View extraction preview" type="button" aria-label="View extraction preview">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"visibility"}
                          </span>
                        </button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-error transition-colors" title="Remove resource" type="button" aria-label="Remove resource">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"close"}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="bg-surface-container-lowest rounded-lg p-space-md flex items-center justify-between gap-space-sm shadow-sm hover:shadow transition-shadow">
                      <div className="flex items-center gap-3 min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center text-primary shrink-0">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"menu_book"}
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <div className="flex items-center gap-2">
                            <span className="font-label-md text-label-md text-primary font-medium truncate">
                              {"Automate_The_Boring_Stuff.pdf"}
                            </span>
                            <span className="inline-flex items-center px-1.5 py-0.2 rounded bg-surface-container font-code text-[10px] text-primary">
                              {"PARSED"}
                            </span>
                          </div>
                          <span className="font-body-sm text-body-sm text-on-surface-variant truncate">
                            {"Reference textbook • Ready • 14.8 MB"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center gap-1 shrink-0">
                        <button className="p-1 rounded text-on-surface-variant hover:text-primary transition-colors" title="View extraction preview" type="button" aria-label="View extraction preview">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"visibility"}
                          </span>
                        </button>
                        <button className="p-1 rounded text-on-surface-variant hover:text-error transition-colors" title="Remove resource" type="button" aria-label="Remove resource">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"close"}
                          </span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container rounded-lg p-space-md flex items-start gap-3">
                    <span className="material-symbols-outlined text-[20px] text-on-surface-variant shrink-0 mt-0.5" aria-hidden="true">
                      {"auto_awesome"}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-md text-label-md text-primary font-medium">
                        {"No external materials?"}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface-variant">
                        {"\n                No problem at all. SOLVE automatically synthesizes standard open-source Python roadmaps curated from MIT 6.0001, RealPython, and Official Docs.\n              "}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                  <div className="flex items-center justify-between font-code text-code text-[11px] text-on-surface-variant">
                    <span>
                      {"PROJECTED 12-WEEK TRAJECTORY"}
                    </span>
                    <span className="text-primary font-medium">
                      {"72H CUMULATIVE"}
                    </span>
                  </div>
                  <div className="w-full h-24 pt-2">
                    <svg className="w-full h-full overflow-visible" fill="none" preserveAspectRatio="none" viewBox="0 0 380 70">
                      <defs>
                        <lineargradient id="curveGradient" x1="0" x2="0" y1="0" y2="1">
                          <stop offset="0%" stopColor="currentColor" stopOpacity="0.15"></stop>
                          <stop offset="100%" stopColor="currentColor" stopOpacity="0"></stop>
                        </lineargradient>
                      </defs>
                      <path className="text-primary" d="M0 65 Q 90 60 140 45 T 260 25 T 380 8 L 380 70 L 0 70 Z" fill="url(#curveGradient)"></path>
                      <path className="text-primary" d="M0 65 Q 90 60 140 45 T 260 25 T 380 8" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5"></path>
                      <circle className="fill-surface-container-lowest stroke-primary" cx="140" cy="45" r="3.5" strokeWidth="2"></circle>
                      <circle className="fill-surface-container-lowest stroke-primary" cx="260" cy="25" r="3.5" strokeWidth="2"></circle>
                      <circle className="fill-primary" cx="380" cy="8" r="4"></circle>
                    </svg>
                  </div>
                  <div className="grid grid-cols-3 gap-2 pt-1 border-t border-surface-container font-code text-code text-[10px] text-on-surface-variant">
                    <div>
                      <span className="block text-primary font-medium">
                        {"W1–W4"}
                      </span>
                      <span>
                        {"Syntax & Logic"}
                      </span>
                    </div>
                    <div>
                      <span className="block text-primary font-medium">
                        {"W5–W8"}
                      </span>
                      <span>
                        {"Data & Automation"}
                      </span>
                    </div>
                    <div>
                      <span className="block text-primary font-medium">
                        {"W9–W12"}
                      </span>
                      <span>
                        {"Web Apps & Ship"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <section className="w-full bg-surface-container-lowest border-t border-surface-container py-space-xl px-gutter-desktop shadow-md mt-auto">
            <div className="max-w-[1280px] mx-auto flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-space-lg">
              <div className="flex-1 bg-surface-container-low rounded-xl p-space-md">
                <div className="flex items-center gap-2 pb-2">
                  <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">
                    {"insights"}
                  </span>
                  <span className="font-label-md text-label-md text-primary font-medium">
                    {"Here’s what I understood so far:"}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-space-md pt-1">
                  <div className="flex flex-col">
                    <span className="font-code text-code text-[11px] text-on-surface-variant uppercase">
                      {"Goal"}
                    </span>
                    <span className="font-label-md text-label-md text-primary font-medium">
                      {"Python from scratch"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {"3-month target window"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-code text-code text-[11px] text-on-surface-variant uppercase">
                      {"Deliverables"}
                    </span>
                    <span className="font-label-md text-label-md text-primary font-medium">
                      {"Web Apps + Scripts"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {"Flask / Pandas automation"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-code text-code text-[11px] text-on-surface-variant uppercase">
                      {"Cadence"}
                    </span>
                    <span className="font-label-md text-label-md text-primary font-medium" id="summary-cadence">
                      {"6 hrs / week"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant" id="summary-hours">
                      {"~72 total hours"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-code text-code text-[11px] text-on-surface-variant uppercase">
                      {"Primary Sources"}
                    </span>
                    <span className="font-label-md text-label-md text-primary font-medium">
                      {"CS50 + Textbook"}
                    </span>
                    <span className="font-body-sm text-body-sm text-on-surface-variant">
                      {"2 documents aligned"}
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row items-center gap-space-md shrink-0">
                <button className="w-full sm:w-auto px-space-xl py-3.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-surface-tint shadow-md transition-all flex items-center justify-center gap-2 group" id="btn-create-plan" type="button">
                  <span>
                    {"Create my 3-month study plan"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </button>
              </div>
            </div>
            <div className="max-w-[1280px] mx-auto mt-space-md pt-space-sm flex items-center justify-between border-t border-surface-container font-code text-code text-[11px] text-on-surface-variant">
              <div className="flex items-center gap-2">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"tune"}
                </span>
                <span>
                  {"TEST PRESETS:"}
                </span>
                <button className="preset-btn hover:text-primary underline" data-preset="busy" type="button">
                  {"Busy Professional (3h/wk)"}
                </button>
                <span className="text-outline-variant">
                  {"•"}
                </span>
                <button className="preset-btn text-primary font-medium underline" data-preset="standard" type="button">
                  {"Standard Pace (6h/wk)"}
                </button>
                <span className="text-outline-variant">
                  {"•"}
                </span>
                <button className="preset-btn hover:text-primary underline" data-preset="bootcamp" type="button">
                  {"Intensive Sprint (12h/wk)"}
                </button>
              </div>
              <div className="hidden md:flex items-center gap-1">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span>
                  {"Synthesizer Ready"}
                </span>
              </div>
            </div>
          </section>
        </div>
      </main>
    </div>
  </div>;
}
