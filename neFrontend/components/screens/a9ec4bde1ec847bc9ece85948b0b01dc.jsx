'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './a9ec4bde1ec847bc9ece85948b0b01dc.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'a9ec4bde1ec847bc9ece85948b0b01dc');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-a9ec4bde1ec847bc9ece85948b0b01dc bg-surface font-body-md text-on-surface antialiased" data-screen-id="a9ec4bde1ec847bc9ece85948b0b01dc">
    <div className="w-full bg-primary text-on-primary text-[11px] font-code py-1 px-4 tracking-wider uppercase flex items-center justify-between z-50 relative select-none">
      <span>
        {"CURRENT — Chat Workspace & Exam Preparation — Desktop"}
      </span>
      <span className="opacity-60">
        {"SOLVE Learning Platform"}
      </span>
    </div>
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img alt="SOLVE Logo" className="h-6 object-contain" src="/assets/solve-logo.png" data-brand="solve" />
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Collapse sidebar" type="button" aria-label="Collapse sidebar">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"dock_to_left"}
            </span>
          </button>
        </div>
        <div className="px-space-md pb-2">
          <div className="p-1 bg-surface-container-high rounded-xl flex items-center gap-1">
            <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-label-md text-label-md font-medium" type="button">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {"Chat"}
            </button>
            <button className="flex-1 flex items-center justify-center gap-1.5 py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface font-label-md text-label-md font-medium" type="button">
              <span className="w-2 h-2 rounded-full bg-outline-variant"></span>
              {"Study"}
            </button>
          </div>
        </div>
        <div className="px-space-md py-1 flex flex-col gap-2">
          <button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:opacity-90 transition-opacity shadow-sm" type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"add"}
            </span>
            <span>
              {"+ New chat"}
            </span>
          </button>
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[16px]" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full bg-surface-container-lowest rounded-lg pl-8 pr-12 py-1.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search chats" type="text" />
            <kbd className="absolute right-2.5 font-code text-[11px] px-1.5 py-0.5 rounded bg-surface-container text-on-surface-variant">
              {"⌘K"}
            </kbd>
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-space-md py-space-sm flex flex-col gap-space-md">
          <div className="flex flex-col gap-1">
            <nav className="flex flex-col gap-0.5">
              <a className="flex items-center gap-2 px-3 py-2 rounded-lg bg-surface-container text-on-surface font-medium font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"chat_bubble"}
                </span>
                {"Active Session"}
              </a>
              <a className="flex items-center gap-2 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"alt_route"}
                </span>
                {"My Plan / Strategy"}
              </a>
              <a className="flex items-center gap-2 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"flag"}
                </span>
                {"Target Status"}
              </a>
              <a className="flex items-center gap-2 px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"hub"}
                </span>
                {"Knowledge Graph"}
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-1">
            <span className="px-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
              {"Recent chats"}
            </span>
            <nav className="flex flex-col gap-0.5">
              <a className="flex items-center justify-between px-3 py-1.5 rounded-lg bg-surface-container-high text-on-surface font-medium font-body-sm text-body-sm" href="#">
                <span className="truncate">
                  {"Data Structures mid preparation"}
                </span>
                <span className="w-1.5 h-1.5 rounded-full bg-primary shrink-0"></span>
              </a>
              <a className="flex items-center justify-between px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="truncate">
                  {"Explain recursion"}
                </span>
              </a>
              <a className="flex items-center justify-between px-3 py-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" href="#">
                <span className="truncate">
                  {"C++ Memory Leaks"}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-low">
        <div className="flex items-center justify-between px-1">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center font-label-md text-label-md font-semibold text-on-primary">
              {"AR"}
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-medium text-on-surface leading-none">
                {"Alex Rivera"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                {"Computer Science"}
              </span>
            </div>
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Settings" type="button" aria-label="Settings">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"settings"}
            </span>
          </button>
        </div>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
        <div className="flex items-center gap-2">
          <span className="font-label-md text-label-md font-semibold text-on-surface">
            {"Data Structures mid preparation"}
          </span>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container text-on-surface-variant font-medium">
            {"Exam Preparation Mode"}
          </span>
        </div>
        <div className="flex items-center gap-space-sm">
          <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm font-medium transition-colors" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              {"tune"}
            </span>
            <span>
              {"Preparation Scope"}
            </span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" title="Help" type="button" aria-label="Help">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"help_outline"}
            </span>
          </button>
        </div>
      </header>
      <main className="relative pt-16 bg-surface w-full min-h-screen">
        <div className="flex flex-col w-full font-body-md text-on-surface">
          <div className="w-full max-w-4xl mx-auto px-space-md md:px-space-xl py-space-lg flex flex-col gap-space-lg">
            <div className="flex flex-col gap-space-xl pb-32">
              <div className="flex items-center justify-center">
                <span className="font-code text-code px-3 py-1 rounded-full bg-surface-container text-on-surface-variant flex items-center gap-2">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"psychology"}
                  </span>
                  {"Socratic Active Recall Initiated · Midterm Preparation"}
                </span>
              </div>
              <div className="flex items-start gap-space-md max-w-2xl ml-auto flex-row-reverse">
                <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 text-on-primary font-label-sm text-label-sm font-semibold">
                  {"AR"}
                </div>
                <div className="flex flex-col items-end gap-1">
                  <div className="font-label-sm text-label-sm text-on-surface-variant flex items-center gap-2">
                    <span>
                      {"Alex Rivera"}
                    </span>
                    <span>
                      {"10:14 AM"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-2xl rounded-tr-xs bg-surface-container text-on-surface font-body-md text-body-md shadow-sm leading-relaxed">
                    {"Can you explain recursion? It always feels like a leap of faith when I write it."}
                  </div>
                </div>
              </div>
              <div className="flex items-start gap-space-md max-w-3xl">
                <div className="w-8 h-8 rounded-lg bg-primary-container flex items-center justify-center shrink-0 text-on-primary">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"neurology"}
                  </span>
                </div>
                <div className="flex flex-col gap-space-md w-full">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"SOLVE AI Mentor"}
                      </span>
                      <span className="font-label-sm text-label-sm px-2 py-0.2 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
                        {"Socratic Mode"}
                      </span>
                    </div>
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"10:15 AM"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm">
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      {"That 'leap of faith' feeling happens when you try to mentally simulate every single stack frame all at once. In recursion, you only need to guarantee two distinct obligations: the "}
                      <strong className="font-semibold text-on-surface">
                        {"Base Case"}
                      </strong>
                      {" (when to stop without recursing) and the "}
                      <strong className="font-semibold text-on-surface">
                        {"Recursive Step"}
                      </strong>
                      {" (delegating a strictly smaller sub-problem)."}
                    </p>
                    <div className="bg-surface-container-low p-space-md rounded-xl flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-code text-code uppercase tracking-wider text-on-surface-variant">
                          {"Execution Call Stack · factorial(3)"}
                        </span>
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"LIFO Memory Allocation"}
                        </span>
                      </div>
                      <div className="py-2 flex flex-col gap-1.5 max-w-lg mx-auto w-full">
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-code text-[11px] font-semibold text-primary">
                              {"Frame 3"}
                            </span>
                            <code className="font-code text-code text-on-surface">
                              {"factorial(1)"}
                            </code>
                          </div>
                          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-medium">
                            {"Base Case reached → returns 1"}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-code text-[11px] font-semibold text-secondary">
                              {"Frame 2"}
                            </span>
                            <code className="font-code text-code text-on-surface">
                              {"factorial(2) = 2 * factorial(1)"}
                            </code>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {"Awaiting 1"}
                          </span>
                        </div>
                        <div className="p-2.5 rounded-lg bg-surface-container-lowest border border-outline-variant flex items-center justify-between">
                          <div className="flex items-center gap-2">
                            <span className="font-code text-[11px] font-semibold text-secondary">
                              {"Frame 1"}
                            </span>
                            <code className="font-code text-code text-on-surface">
                              {"factorial(3) = 3 * factorial(2)"}
                            </code>
                          </div>
                          <span className="font-label-sm text-label-sm text-on-surface-variant">
                            {"Initial Call"}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-center justify-between text-on-surface-variant font-label-sm text-label-sm pt-1">
                        <span className="flex items-center gap-1.5">
                          <span className="w-2 h-2 rounded-full bg-primary"></span>
                          {" Stack unrolls upward once base case returns"}
                        </span>
                        <span className="font-code text-[12px]">
                          {"O(n) auxiliary stack space"}
                        </span>
                      </div>
                    </div>
                    <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                      {"If you assume "}
                      <code className="font-code text-code px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                        {"factorial(k-1)"}
                      </code>
                      {" works correctly by mathematical induction, your job is simply combining its output with "}
                      <code className="font-code text-code px-1.5 py-0.5 rounded bg-surface-container text-on-surface">
                        {"k"}
                      </code>
                      {"."}
                    </p>
                    <div className="mt-space-xs pt-space-xs flex flex-wrap items-center gap-space-sm">
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                        {"Suggested follow-ups:"}
                      </span>
                      <button className="px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Show code snippet"}
                      </button>
                      <button className="px-3.5 py-1.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        {"Why stack overflow?"}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 left-72 right-0 max-w-3xl mx-auto px-space-md z-30 pointer-events-none">
            <div className="pointer-events-auto bg-surface-container-lowest rounded-2xl shadow-xl p-2.5 flex flex-col gap-1.5 border border-outline-variant">
              <div className="flex items-center gap-2 px-2 pt-0.5">
                <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"Active Context: Data Structures Mid Prep · Recursion"}
                </span>
              </div>
              <div className="flex items-end gap-2 px-1">
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Attach reference" type="button" aria-label="Attach reference">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"add"}
                  </span>
                </button>
                <textarea className="w-full bg-transparent resize-none py-2 px-2 text-on-surface font-body-md text-body-md placeholder:text-on-surface-variant outline-none max-h-32 focus:ring-0" id="user-input" placeholder="Ask about base cases, the call stack, or write your attempt..." rows="1"></textarea>
                <button className="w-9 h-9 rounded-xl flex items-center justify-center text-on-surface-variant hover:bg-surface-container transition-colors" title="Microphone voice input" type="button" aria-label="Microphone voice input">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"mic"}
                  </span>
                </button>
                <button className="w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center hover:opacity-90 transition-opacity shrink-0 shadow-sm" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Send message" type="button" aria-label="Send message">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"arrow_upward"}
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
