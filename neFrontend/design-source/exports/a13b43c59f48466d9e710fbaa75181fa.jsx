'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/a13b43c59f48466d9e710fbaa75181fa';
import './a13b43c59f48466d9e710fbaa75181fa.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-a13b43c59f48466d9e710fbaa75181fa bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased" data-screen-id="a13b43c59f48466d9e710fbaa75181fa">
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
          <div className="w-full bg-surface-container-low px-space-lg py-2 flex items-center justify-between border-b border-outline-variant/60">
            <div className="flex items-center gap-space-sm">
              <span className="font-code text-code text-on-surface-variant flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-primary inline-block"></span>
                {"\n        STAGE 01: ASSESSMENT & RESOURCE EXTRACTION\n      "}
              </span>
              <span className="text-outline-variant font-mono">
                {"/"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant">
                {"Interactive View States:"}
              </span>
            </div>
            <div className="flex items-center gap-1.5 bg-surface-container-lowest p-1 rounded-lg border border-outline-variant">
              <button className="px-2.5 py-1 rounded text-label-sm font-label-sm bg-primary text-on-primary transition-all" id="btn-state-in-progress" type="button">
                {"Active Flow"}
              </button>
              <button className="px-2.5 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all" id="btn-state-processing" type="button">
                {"Processing State"}
              </button>
              <button className="px-2.5 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all" id="btn-state-summary" type="button">
                {"Complete Summary"}
              </button>
              <button className="px-2.5 py-1 rounded text-label-sm font-label-sm text-on-surface-variant hover:text-on-surface transition-all" id="btn-state-no-materials" type="button">
                {"No Materials Fallback"}
              </button>
            </div>
          </div>
          <div className="max-w-[1280px] w-full mx-auto px-space-lg py-space-xl flex flex-col gap-space-2xl">
            <header className="flex flex-col gap-space-md">
              <div className="inline-flex items-center justify-between bg-surface-container-low border border-outline-variant px-space-md py-2 rounded-lg max-w-2xl">
                <div className="flex items-center gap-space-sm min-w-0">
                  <span className="font-code text-code text-on-surface-variant uppercase tracking-wider text-[11px]">
                    {"Your goal"}
                  </span>
                  <span className="text-outline-variant">
                    {"·"}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface truncate font-medium">
                    {"Help me prepare for my Data Structures mid exam."}
                  </p>
                </div>
                <button className="flex items-center gap-1 text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-colors ml-space-md" type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"edit"}
                  </span>
                  {"\n          Edit\n        "}
                </button>
              </div>
              <div className="flex flex-col gap-1">
                <h1 className="font-headline-lg text-headline-lg text-primary tracking-tight">
                  {"Let’s find the right approach for you."}
                </h1>
                <p className="font-body-md text-body-md text-on-surface-variant max-w-2xl">
                  {"\n          Tell me a little about your situation and add any material you’d like to use. SOLVE adapts the curriculum directly to your remaining timeframe.\n        "}
                </p>
              </div>
            </header>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <section aria-label="Your situation assessment" className="lg:col-span-7 flex flex-col gap-space-lg">
                <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                      {"psychology_alt"}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      {"Your situation"}
                    </h2>
                  </div>
                  <span className="font-code text-code text-on-surface-variant text-[12px]">
                    {"Step 3 of 4"}
                  </span>
                </div>
                <div className="flex flex-col gap-space-md bg-surface-container-low/70 border border-outline-variant rounded-xl p-space-md">
                  <div className="flex items-start justify-between gap-space-sm group">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Question 01"}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        {"When is your exam?"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-container-lowest border border-outline-variant rounded-full pl-3 pr-2 py-1 shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium">
                        {"Tomorrow at 10 AM"}
                      </span>
                      <button aria-label="Edit answer" className="text-on-surface-variant hover:text-on-surface p-0.5 rounded-full hover:bg-surface-container transition-colors" type="button">
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {"edit"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="h-px bg-outline-variant/60 w-full"></div>
                  <div className="flex items-start justify-between gap-space-sm group">
                    <div className="flex flex-col gap-1">
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"Question 02"}
                      </span>
                      <p className="font-body-sm text-body-sm text-on-surface">
                        {"How much time can you spend studying before then?"}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 bg-surface-container-lowest border border-outline-variant rounded-full pl-3 pr-2 py-1 shadow-sm">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium">
                        {"About 4 hours"}
                      </span>
                      <button aria-label="Edit answer" className="text-on-surface-variant hover:text-on-surface p-0.5 rounded-full hover:bg-surface-container transition-colors" type="button">
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {"edit"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="bg-surface-container-lowest border border-primary/20 rounded-xl p-space-lg shadow-sm flex flex-col gap-space-lg relative overflow-hidden">
                  <div className="absolute top-0 left-0 h-1 bg-primary w-24"></div>
                  <div className="flex flex-col gap-1.5">
                    <div className="flex items-center gap-2">
                      <span className="font-code text-code text-on-surface-variant text-[11px] tracking-widest uppercase">
                        {"Current Prompt"}
                      </span>
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {"What would you like to achieve?"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"This directly calibrates the pedagogical balance between high-yield recap and deep problem synthesis."}
                    </p>
                  </div>
                  <div aria-label="Goal target" className="flex flex-wrap gap-2.5" role="radiogroup">
                    <button className="goal-pill px-4 py-2 rounded-full border border-primary bg-primary text-on-primary font-label-md text-label-md transition-all flex items-center gap-2 shadow-sm" data-selected="true" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"check"}
                      </span>
                      {"\n              Pass the exam\n            "}
                    </button>
                    <button className="goal-pill px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-secondary hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
                      {"\n              Aim for a higher score (85%+)\n            "}
                    </button>
                    <button className="goal-pill px-4 py-2 rounded-full border border-outline-variant bg-surface-container-lowest text-on-surface hover:border-secondary hover:bg-surface-container transition-all font-label-md text-label-md" type="button">
                      {"\n              Set a specific target score\n            "}
                    </button>
                  </div>
                  <div className="flex flex-col gap-2 pt-2 border-t border-outline-variant/60">
                    <label className="font-label-sm text-label-sm text-on-surface-variant" htmlFor="custom-situation-input">
                      {"Or elaborate in your own words:"}
                    </label>
                    <div className="relative flex items-center">
                      <input className="w-full bg-surface-container-low border border-outline-variant rounded-xl pl-4 pr-24 py-3 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary transition-colors" id="custom-situation-input" placeholder="e.g. Focus on AVL trees, graphs, and Big-O recursion..." type="text" />
                      <div className="absolute right-2 flex items-center gap-1">
                        <button aria-label="Voice input" className="p-1.5 rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"mic"}
                          </span>
                        </button>
                        <button aria-label="Send response" className="p-1.5 rounded-lg bg-primary text-on-primary hover:bg-neutral-800 transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"arrow_upward"}
                          </span>
                        </button>
                      </div>
                    </div>
                    <p className="font-code text-code text-on-surface-variant text-[11px] flex items-center gap-1.5 mt-1">
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        {"auto_awesome"}
                      </span>
                      {"\n              Adaptive questioning continues based on your goal & uploaded materials.\n            "}
                    </p>
                  </div>
                </div>
                <div className="border-l-2 border-outline-variant pl-4 py-1 flex items-center justify-between">
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"\n            Synthesizing 80/20 Pareto focus: prioritizing Graph BFS/DFS, Tree Rotations, and Array vs Linked-List trade-offs.\n          "}
                  </p>
                  <span className="font-code text-code text-on-surface-variant text-[11px] whitespace-nowrap ml-4">
                    {"80/20 RULE APPLIED"}
                  </span>
                </div>
              </section>
              <section aria-label="Your resources repository" className="lg:col-span-5 flex flex-col gap-space-lg">
                <div className="flex items-center justify-between pb-space-sm border-b border-outline-variant">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                      {"folder_open"}
                    </span>
                    <h2 className="font-headline-sm text-headline-sm text-primary">
                      {"Your resources"}
                    </h2>
                  </div>
                  <span className="font-code text-code text-on-surface-variant text-[12px]">
                    {"2 files detected"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant -mt-2">
                  {"\n          Add notes, question banks, photos, or links. You can keep answering while we read them.\n        "}
                </p>
                <div className="border-2 border-dashed border-outline-variant hover:border-primary/60 bg-surface-container-low/50 rounded-xl p-space-lg flex flex-col items-center justify-center text-center transition-colors group cursor-pointer" id="dropzone-area">
                  <div className="w-12 h-12 rounded-full bg-surface-container-lowest border border-outline-variant flex items-center justify-center mb-space-sm group-hover:scale-105 transition-transform shadow-sm">
                    <span className="material-symbols-outlined text-primary text-[24px]" aria-hidden="true">
                      {"cloud_upload"}
                    </span>
                  </div>
                  <span className="font-label-md text-label-md text-on-surface font-semibold">
                    {"Add resources"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                    {"Drop PDF, images, past papers, or slides here"}
                  </span>
                  <div className="flex items-center gap-3 mt-space-md">
                    <button className="px-3.5 py-1.5 rounded-lg border border-outline-variant bg-surface-container-lowest font-label-sm text-label-sm text-on-surface hover:bg-surface-container transition-colors shadow-sm" type="button">
                      {"\n              Browse files\n            "}
                    </button>
                    <span className="text-outline-variant text-[12px]">
                      {"or"}
                    </span>
                    <button className="font-label-sm text-label-sm text-primary hover:underline flex items-center gap-1 font-medium" type="button">
                      <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                        {"add_link"}
                      </span>
                      {"\n              Add a link\n            "}
                    </button>
                  </div>
                </div>
                <div className="flex flex-col gap-space-sm" id="resource-list-container">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase tracking-wider text-[11px]">
                    {"Attached for Synthesis"}
                  </span>
                  <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-md flex flex-col gap-space-sm shadow-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-space-sm min-w-0">
                        <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                          <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                            {"description"}
                          </span>
                        </div>
                        <div className="flex flex-col min-w-0">
                          <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
                            {"DSA question bank.pdf"}
                          </span>
                          <div className="flex items-center gap-2 mt-0.5">
                            <span className="font-code text-code text-on-surface-variant text-[11px]">
                              {"Question bank"}
                            </span>
                            <span className="text-outline-variant text-[10px]">
                              {"·"}
                            </span>
                            <span className="font-code text-code text-on-surface-variant text-[11px]">
                              {"2.4 MB"}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 font-label-sm text-label-sm text-on-surface bg-surface-container px-2 py-0.5 rounded border border-outline-variant">
                          <span className="w-1.5 h-1.5 rounded-full bg-primary"></span>
                          {"\n                  Ready\n                "}
                        </span>
                        <button aria-label="Remove resource" className="text-on-surface-variant hover:text-error p-1 rounded transition-colors" type="button">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"close"}
                          </span>
                        </button>
                      </div>
                    </div>
                    <div className="mt-1 pt-space-sm border-t border-outline-variant/60 flex flex-col gap-2">
                      <div className="flex items-center justify-between">
                        <label className="font-label-sm text-label-sm text-on-surface flex items-center gap-1">
                          <span className="material-symbols-outlined text-[15px] text-on-surface-variant" aria-hidden="true">
                            {"help"}
                          </span>
                          {"\n                  Will exam questions come only from this question bank?\n                "}
                        </label>
                      </div>
                      <div className="grid grid-cols-3 gap-2">
                        <button className="context-q-opt py-1.5 px-2 rounded-lg border border-primary bg-primary text-on-primary font-label-sm text-label-sm text-center font-medium transition-colors" type="button">
                          {"\n                  Yes, strictly\n                "}
                        </button>
                        <button className="context-q-opt py-1.5 px-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm text-center transition-colors" type="button">
                          {"\n                  No, partial\n                "}
                        </button>
                        <button className="context-q-opt py-1.5 px-2 rounded-lg border border-outline-variant bg-surface-container-low text-on-surface hover:bg-surface-container font-label-sm text-label-sm text-center transition-colors" type="button">
                          {"\n                  Not sure\n                "}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest border border-outline-variant rounded-xl p-space-md flex items-center justify-between shadow-sm">
                    <div className="flex items-center gap-space-sm min-w-0">
                      <div className="w-9 h-9 rounded-lg bg-surface-container flex items-center justify-center flex-shrink-0 text-primary">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {"image"}
                        </span>
                      </div>
                      <div className="flex flex-col min-w-0">
                        <span className="font-body-sm text-body-sm text-on-surface font-medium truncate">
                          {"Unit 2 notes.jpg"}
                        </span>
                        <div className="flex items-center gap-2 mt-0.5">
                          <span className="font-code text-code text-on-surface-variant text-[11px]">
                            {"Photo / Handwriting"}
                          </span>
                          <span className="text-outline-variant text-[10px]">
                            {"·"}
                          </span>
                          <span className="font-code text-code text-on-surface-variant text-[11px]">
                            {"1.1 MB"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="inline-flex items-center gap-1.5 font-label-sm text-label-sm text-on-surface-variant bg-surface-container-low px-2 py-0.5 rounded border border-outline-variant" id="reading-status-badge">
                        <svg className="animate-spin h-3 w-3 text-primary" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
                        </svg>
                        {"\n                Reading...\n              "}
                      </span>
                      <button aria-label="Remove resource" className="text-on-surface-variant hover:text-error p-1 rounded transition-colors" type="button">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"close"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
                <div className="rounded-xl border border-outline-variant bg-surface-container-low/60 p-space-md flex flex-col gap-2">
                  <div className="flex items-center justify-between">
                    <span className="font-label-sm text-label-sm text-on-surface font-medium flex items-center gap-1.5">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"info"}
                      </span>
                      {"\n              Don’t have materials ready?\n            "}
                    </span>
                    <button className="text-on-surface-variant hover:text-primary font-label-sm text-label-sm underline" id="toggle-no-materials-details" type="button">
                      {"\n              How this works\n            "}
                    </button>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant" id="no-materials-desc">
                    {"\n            That’s completely okay. SOLVE can draw from standard curriculum benchmarks and synthesize verified high-yield practice modules for your syllabus.\n          "}
                  </p>
                  <div className="pt-1 flex items-center gap-3">
                    <button className="text-primary font-label-sm text-label-sm border border-outline-variant rounded-lg px-3 py-1.5 bg-surface-container-lowest hover:bg-surface-container transition-colors" type="button">
                      {"\n              Help me find standard syllabus resources\n            "}
                    </button>
                  </div>
                </div>
              </section>
            </div>
            <section aria-label="Synthesis Summary" className="bg-surface-container-low border border-outline-variant rounded-2xl p-space-lg flex flex-col gap-space-md shadow-sm" id="completion-summary-section">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md border-b border-outline-variant pb-space-md">
                <div className="flex items-center gap-space-sm">
                  <div className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-code text-[13px] font-semibold">
                    {"\n            ✓\n          "}
                  </div>
                  <div className="flex flex-col">
                    <h3 className="font-headline-sm text-headline-sm text-primary">
                      {"Here’s what I understood"}
                    </h3>
                    <span className="font-code text-code text-on-surface-variant text-[12px]">
                      {"Ready to compile personalized study trajectory"}
                    </span>
                  </div>
                </div>
                <button className="self-start md:self-auto font-label-sm text-label-sm text-on-surface-variant hover:text-on-surface flex items-center gap-1" type="button">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"tune"}
                  </span>
                  {"\n          Edit details\n        "}
                </button>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-5 gap-space-md py-1">
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-[10px]">
                    {"Target Goal"}
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate">
                    {"Data Structures Mid"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-[10px]">
                    {"Exam Window"}
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate">
                    {"Tomorrow, 10:00 AM"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-[10px]">
                    {"Study Bandwidth"}
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate">
                    {"4 Hours Active"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-[10px]">
                    {"Objective"}
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate">
                    {"Pass with High Margin"}
                  </span>
                </div>
                <div className="flex flex-col gap-0.5">
                  <span className="font-label-sm text-label-sm text-on-surface-variant uppercase text-[10px]">
                    {"Materials"}
                  </span>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface truncate">
                    {"Bank.pdf + Unit 2 notes"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-sm border-t border-outline-variant/60">
                <div className="flex items-center gap-2">
                  <span className="flex h-2.5 w-2.5 relative" id="final-status-indicator">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-50"></span>
                    <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-primary"></span>
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface-variant" id="final-status-text">
                    {"\n            Finishing reading your notes "}
                    <span className="text-on-surface font-medium">
                      {"(ready in ~15s)..."}
                    </span>
                  </p>
                </div>
                <button className="h-[52px] px-8 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center gap-2 hover:bg-neutral-800 transition-all shadow-md group" id="cta-generate-approach" type="button">
                  <span>
                    {"Create my learning approach"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] group-hover:translate-x-1 transition-transform" aria-hidden="true">
                    {"arrow_forward"}
                  </span>
                </button>
              </div>
            </section>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
