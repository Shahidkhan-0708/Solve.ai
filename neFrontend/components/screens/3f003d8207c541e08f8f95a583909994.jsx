'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './3f003d8207c541e08f8f95a583909994.css';
export default function Screen({ children, title, history, onNewGoal, onSearch, onNavigate } = {}) {
  const liveStudySlot = Boolean(children);
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = liveStudySlot ? { actions: {}, cleanup() {} } : initialize(root.current, '3f003d8207c541e08f8f95a583909994');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, [liveStudySlot]);
  return <div onClick={onNavigate} ref={root} className="stitch-screen stitch-screen-3f003d8207c541e08f8f95a583909994 bg-surface font-body-md text-on-surface antialiased" data-live-study={liveStudySlot} data-screen-id="3f003d8207c541e08f8f95a583909994">
    <div className="w-full bg-primary text-on-primary py-2 px-6 font-code text-label-sm uppercase tracking-wider flex items-center justify-between z-50 relative select-none">
      <span>
        {"CURRENT — Study Workspace: Python Foundations — Desktop"}
      </span>
      <span className="opacity-80">
        {liveStudySlot ? "Study workspace" : "Authoritative View"}
      </span>
    </div>
    <aside className="fixed left-0 top-8 h-[calc(100vh-2rem)] w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-lg flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"school"}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface"><BrandLogo className="stitch-wordmark" /></span>
          </div>
          <div className="flex items-center p-0.5 bg-surface-container rounded-lg text-label-sm">
            <a className="px-2 py-0.5 rounded text-on-surface-variant hover:text-on-surface" href="#">
              {"Chat"}
            </a>
            <span className="px-2 py-0.5 rounded bg-surface-container-lowest font-semibold text-on-surface shadow-sm">
              {"Study"}
            </span>
          </div>
        </div>
        <div className="px-space-md py-space-xs flex flex-col gap-2">
          <button onClick={onNewGoal} className="w-full flex items-center justify-center gap-2 bg-primary hover:bg-neutral-800 text-on-primary font-label-md text-label-md py-2 px-3 rounded-lg transition-colors font-medium" type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"add"}
            </span>
            <span>
              {"New study goal"}
            </span>
          </button>
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full bg-surface-container-lowest rounded-lg pl-9 pr-space-md py-2 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none" onChange={onSearch} placeholder="Search study history" type="text" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-space-md py-space-sm flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="px-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
              {"Navigation"}
            </span>
            <nav className="flex flex-col gap-1">
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg bg-surface-container-high text-on-surface font-medium transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"flag"}
                </span>
                {"Active Goal"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"alt_route"}
                </span>
                {"My Plan / Strategy"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"trending_up"}
                </span>
                {"Target Status"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"hub"}
                </span>
                {"Knowledge Graph"}
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-space-xs">
            <span className="px-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
              {"Study History"}
            </span>
            {history || <>
<nav className="flex flex-col gap-1">
              <a className="flex items-center justify-between px-3 py-2 transition-all bg-surface-container text-on-surface font-semibold rounded-lg font-body-sm text-body-sm" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"terminal"}
                  </span>
                  <span className="truncate">
                    {title || "Python foundations"}
                  </span>
                </div>
                <span className="w-2 h-2 rounded-full bg-primary"></span>
              </a>
              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"translate"}
                  </span>
                  <span className="truncate">
                    {"Conversational English"}
                  </span>
                </div>
              </a>
              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"functions"}
                  </span>
                  <span className="truncate">
                    {"Mathematics foundations"}
                  </span>
                </div>
              </a>
            </nav>
</>}
          </div>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-low flex flex-col gap-1">
        <div className="flex items-center justify-between px-2 py-1">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-sm text-label-sm text-on-primary font-semibold">
              {liveStudySlot ? "G" : "AR"}
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-medium text-on-surface leading-none">
                {liveStudySlot ? "Guest learner" : "Alex Rivera"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                {liveStudySlot ? "Private to this browser" : "Learner Account"}
              </span>
            </div>
          </div>
          <button className="w-8 h-8 flex items-center justify-center rounded-lg hover:bg-surface-container text-on-surface-variant hover:text-on-surface transition-colors" title="Settings" type="button" aria-label="Settings">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"settings"}
            </span>
          </button>
        </div>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-8 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
        <div className="flex items-center gap-space-sm">
          <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
            {"Study Workspace"}
          </span>
          <span className="font-label-sm text-label-sm text-on-surface-variant">
            {"/"}
          </span>
          <span className="font-label-md text-label-md text-secondary">
            {title || "Python foundations"}
          </span>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
            <span className="w-2 h-2 rounded-full bg-primary"></span>
            <span>
              {"Study Mode Active"}
            </span>
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"notifications"}
            </span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"help_outline"}
            </span>
          </button>
        </div>
      </header>
      <main className="relative pt-16 bg-surface w-full min-h-screen">
{children || <>

        <div className="w-full max-w-7xl mx-auto px-gutter-desktop py-space-xl flex flex-col gap-space-lg">
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex flex-wrap items-center justify-between gap-space-sm">
              <div>
                <span className="font-code text-code uppercase tracking-wider text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-md">
                  {"LONG-TERM STUDY GOAL"}
                </span>
                <h1 className="font-headline-lg text-headline-lg font-bold text-on-surface mt-2">
                  {title || "Python foundations"}
                </h1>
              </div>
              <div className="flex items-center gap-2">
                <button className="bg-primary text-on-primary hover:bg-neutral-800 transition-colors px-4 py-2 rounded-lg font-label-md text-label-md font-medium flex items-center gap-2" type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"calendar_month"}
                  </span>
                  <span>
                    {"Set availability"}
                  </span>
                </button>
              </div>
            </div>
            <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col md:flex-row md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm">
                <span className="material-symbols-outlined text-secondary text-[22px]" aria-hidden="true">
                  {"flag"}
                </span>
                <div>
                  <span className="font-label-sm text-label-sm uppercase font-semibold text-secondary block">
                    {"Objective"}
                  </span>
                  <span className="font-body-md text-body-md text-on-surface font-medium">
                    {"Build a small Python project over 3 months"}
                  </span>
                </div>
              </div>
              <div className="flex items-center gap-space-sm bg-surface-container-lowest px-3 py-1.5 rounded-md shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Target:"}
                </span>
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                  {"3 Months"}
                </span>
              </div>
            </div>
          </section>
          <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-space-xs gap-2">
              <div>
                <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {"Milestones Roadmap"}
                </h2>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {"Beginner curriculum path to project readiness"}
                </p>
              </div>
              <div className="flex items-center gap-2 bg-surface-container px-3 py-1 rounded-lg">
                <span className="font-label-md text-label-md font-semibold text-on-surface">
                  {"1 of 6"}
                </span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"milestones completed"}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-3">
              <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg transition-all">
                <div className="flex items-center gap-space-md">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-body-sm font-semibold">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"check"}
                    </span>
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"1. Python basics"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
                        {"Completed ✓"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"Variables, data types, inputs, arithmetic expressions, basic I/O"}
                    </p>
                  </div>
                </div>
                <span className="font-code text-label-sm text-secondary font-medium">
                  {"Done"}
                </span>
              </div>
              <div className="flex items-center justify-between p-space-md bg-surface-container-lowest rounded-lg border border-on-surface/10 shadow-sm">
                <div className="flex items-center gap-space-md">
                  <span className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-body-sm font-semibold">
                    {"2"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"2. Conditions and loops"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-primary text-on-primary font-medium flex items-center gap-1">
                        <span className="w-1.5 h-1.5 rounded-full bg-white"></span>
                        {"In Progress ●"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"If/else branching, while loops, for loops, control flow patterns"}
                    </p>
                  </div>
                </div>
                <button className="bg-primary hover:bg-neutral-800 text-on-primary font-label-sm text-label-sm font-medium px-3.5 py-1.5 rounded-lg transition-colors" type="button">
                  {"Continue"}
                </button>
              </div>
              <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg opacity-80">
                <div className="flex items-center gap-space-md">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-code text-body-sm font-medium">
                    {"3"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        {"3. Functions"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        {"Not started"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"Parameters, return statements, local and global scope"}
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Up next"}
                </span>
              </div>
              <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg opacity-70">
                <div className="flex items-center gap-space-md">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-code text-body-sm font-medium">
                    {"4"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        {"4. Collections"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        {"Not started"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"Lists, dictionaries, tuples, sets, iteration over collections"}
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Locked"}
                </span>
              </div>
              <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg opacity-70">
                <div className="flex items-center gap-space-md">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-code text-body-sm font-medium">
                    {"5"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        {"5. Files and debugging"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        {"Not started"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"File read/write, syntax vs runtime errors, try/except basics"}
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Locked"}
                </span>
              </div>
              <div className="flex items-center justify-between p-space-md bg-surface-container-low rounded-lg opacity-70">
                <div className="flex items-center gap-space-md">
                  <span className="w-8 h-8 rounded-full bg-surface-container-high text-on-surface-variant flex items-center justify-center font-code text-body-sm font-medium">
                    {"6"}
                  </span>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        {"6. Small project"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container text-on-surface-variant font-medium">
                        {"Not started"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"Synthesize learning by building a complete command-line utility"}
                    </p>
                  </div>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Capstone"}
                </span>
              </div>
            </div>
            <div className="mt-space-sm p-space-md bg-surface-container-low rounded-lg flex items-start gap-space-sm">
              <span className="material-symbols-outlined text-on-surface text-[20px] mt-0.5" aria-hidden="true">
                {"info"}
              </span>
              <div className="flex flex-col gap-0.5">
                <span className="font-label-md text-label-md font-semibold text-on-surface">
                  {"Tracking Note"}
                </span>
                <p className="font-body-sm text-body-sm text-on-surface-variant">
                  {"Completion tracks planned activities. Understanding is checked through practice."}
                </p>
              </div>
            </div>
          </section>
        </div>
      
</>}
</main>
    </div>
  </div>;
}
