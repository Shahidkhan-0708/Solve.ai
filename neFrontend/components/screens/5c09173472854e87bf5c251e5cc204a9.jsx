'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './5c09173472854e87bf5c251e5cc204a9.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '5c09173472854e87bf5c251e5cc204a9');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-5c09173472854e87bf5c251e5cc204a9 bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased" data-screen-id="5c09173472854e87bf5c251e5cc204a9">
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
            <a aria-current="page" className="flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg transition-colors bg-primary-container text-on-primary-container font-label-md" data-path="learning-workspace" href="#">
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
            <a aria-current="page" className="px-space-md py-1 rounded-md font-label-md transition-colors bg-surface-container-lowest text-on-surface shadow-sm" data-path="learning-workspace" href="#">
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
      <main className="relative pt-14 w-full bg-surface-container-lowest min-h-screen">
        <div className="flex flex-col w-full relative min-h-[calc(100vh-3.5rem)] justify-between items-center px-4 sm:px-6">
          <div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-surface-container-high/40 via-surface-container-low/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full"></div>
          <div className="w-full max-w-[720px] flex flex-col items-center pt-16 sm:pt-20 md:pt-24 pb-8 transition-all duration-300">
            <div className="flex items-center gap-2 mb-6">
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary"></span>
              <span className="font-code text-code text-on-surface-variant uppercase tracking-widest text-[11px]">
                {"SOLVE AI MENTOR · COGNITIVE WORKSPACE"}
              </span>
            </div>
            <h1 className="font-headline-lg text-headline-lg text-primary text-center tracking-tight transition-all duration-200 select-none" id="main-headline">
              {"\n      What would you like to learn today?\n    "}
            </h1>
            <p className="font-body-md text-body-md text-secondary text-center mt-3 mb-10 max-w-[500px]" id="main-subtext">
              {"\n      Tell me your goal, ask a question, or add something you’re studying.\n    "}
            </p>
            <div className="w-full relative group">
              <div className="hidden absolute left-4 bottom-[64px] z-30 w-64 bg-surface-container-lowest rounded-xl shadow-xl p-1.5 flex-col gap-1 transition-all duration-150 animate-in fade-in slide-in-from-bottom-2" id="attachment-popover">
                <div className="px-3 py-1.5 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                  {"Resources & Inputs"}
                </div>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container text-body-sm font-body-sm transition-colors" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    {"upload_file"}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {"Upload files or photos"}
                    </span>
                    <span className="font-code text-[10px] text-secondary">
                      {"PDF, DOCX, JPG, PNG up to 25MB"}
                    </span>
                  </div>
                </button>
                <button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container text-body-sm font-body-sm transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    {"link"}
                  </span>
                  <div className="flex flex-col">
                    <span className="font-medium">
                      {"Add a link"}
                    </span>
                    <span className="font-code text-[10px] text-secondary">
                      {"Notion, ArXiv paper, web URL"}
                    </span>
                  </div>
                </button>
                <div className="h-px bg-surface-container-high my-1"></div>
                <button className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-left text-on-surface-variant hover:text-on-surface hover:bg-surface-container text-body-sm font-body-sm transition-colors" type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"history_edu"}
                  </span>
                  <span>
                    {"Import past curriculum"}
                  </span>
                </button>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-[20px] shadow-sm hover:shadow-md focus-within:shadow-md transition-all duration-200 flex flex-col p-4 bg-gradient-to-b from-surface-container-lowest to-surface-container-lowest">
                <div className="hidden flex-wrap gap-2 pb-3 pt-1" id="attachments-tray">
                  <div className="inline-flex items-center gap-2 pl-2.5 pr-2 py-1.5 bg-surface-container rounded-lg group/chip transition-all duration-150" id="sample-file-chip">
                    <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">
                      {"description"}
                    </span>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-on-surface font-medium leading-none">
                        {"Unit 2 notes.pdf"}
                      </span>
                      <span className="font-code text-[10px] text-secondary leading-tight">
                        {"4.2 MB · Ready for analysis"}
                      </span>
                    </div>
                    <button aria-label="Remove attachment" className="ml-2 w-5 h-5 flex items-center justify-center rounded-full text-secondary hover:text-primary hover:bg-surface-container-highest transition-colors" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        {"close"}
                      </span>
                    </button>
                  </div>
                </div>
                <textarea className="w-full bg-transparent resize-none font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none transition-colors leading-relaxed" id="prompt-input" placeholder="Describe your goal or ask a question…" rows="3"></textarea>
                <div className="flex items-center justify-between pt-3 mt-1">
                  <div className="flex items-center gap-1">
                    <button aria-label="Add resources" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-container active:scale-95 transition-all relative" id="attach-button" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Add resources" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"add"}
                      </span>
                    </button>
                    <button aria-label="Use microphone" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-container active:scale-95 transition-all" id="mic-button" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Use microphone" type="button">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                    <div className="h-4 w-px bg-surface-container-highest mx-1"></div>
                    <span className="font-code text-[11px] text-secondary hidden sm:inline-block">
                      {"Markdown supported"}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="font-code text-[11px] text-secondary hidden sm:inline-block mr-1">
                      {"Press ↵"}
                    </span>
                    <button aria-label="Send message" className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 cursor-not-allowed bg-surface-container text-secondary" disabled id="send-button" title="Send message" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_upward"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2 mt-5">
              <span className="font-label-sm text-label-sm text-secondary mr-1">
                {"Suggested prompts:"}
              </span>
              <button className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary" aria-hidden="true">
                  {"school"}
                </span>
                {"\n        Prepare for an exam\n      "}
              </button>
              <button className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary" aria-hidden="true">
                  {"lightbulb"}
                </span>
                {"\n        Understand a topic\n      "}
              </button>
              <button className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary" aria-hidden="true">
                  {"bolt"}
                </span>
                {"\n        Learn a new skill\n      "}
              </button>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-14">
              <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                    {"model_training"}
                  </span>
                  <span className="font-code text-[11px] text-secondary">
                    {"ACTIVE"}
                  </span>
                </div>
                <div>
                  <h2 className="font-label-md text-label-md text-on-surface font-semibold group-hover:underline">
                    {"Socratic Dialogue"}
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    {"Guided step-by-step reasoning instead of passive answer regurgitation."}
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                    {"account_tree"}
                  </span>
                  <span className="font-code text-[11px] text-secondary">
                    {"SYNCED"}
                  </span>
                </div>
                <div>
                  <h2 className="font-label-md text-label-md text-on-surface font-semibold group-hover:underline">
                    {"Concept Map Linking"}
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    {"Every query anchors itself automatically to your Target Knowledge Graph."}
                  </p>
                </div>
              </div>
              <div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group">
                <div className="flex items-center justify-between mb-3">
                  <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                    {"verified"}
                  </span>
                  <span className="font-code text-[11px] text-secondary">
                    {"PROVEN"}
                  </span>
                </div>
                <div>
                  <h2 className="font-label-md text-label-md text-on-surface font-semibold group-hover:underline">
                    {"Spaced Synthesis"}
                  </h2>
                  <p className="font-body-sm text-body-sm text-secondary mt-1">
                    {"Interleaved active recall injected organically during deeper explanations."}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full pb-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-25"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary"></span>
              </span>
              <span className="font-code text-code text-secondary text-[11px]">
                {"NEURAL CORE v2.4 · READY"}
              </span>
            </div>
            <div className="flex items-center bg-surface-container-high/70 backdrop-blur-md p-1 rounded-full shadow-sm">
              <span className="font-code text-[11px] text-secondary px-3 select-none flex items-center gap-1.5">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"tune"}
                </span>
                {"\n        Demo States:\n      "}
              </span>
              <div className="flex items-center gap-0.5 overflow-x-auto max-w-full">
                <button className="px-2.5 py-1 rounded-full font-label-sm text-[12px] bg-primary text-on-primary transition-all whitespace-nowrap" id="btn-state-first-use" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          First-use\n        "}
                </button>
                <button className="px-2.5 py-1 rounded-full font-label-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-all whitespace-nowrap" id="btn-state-returning" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Returning User\n        "}
                </button>
                <button className="px-2.5 py-1 rounded-full font-label-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-all whitespace-nowrap" id="btn-state-text-entered" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Text Entered\n        "}
                </button>
                <button className="px-2.5 py-1 rounded-full font-label-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-all whitespace-nowrap" id="btn-state-attachment-open" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Attachment Menu\n        "}
                </button>
                <button className="px-2.5 py-1 rounded-full font-label-sm text-[12px] text-on-surface-variant hover:text-on-surface transition-all whitespace-nowrap" id="btn-state-attachment-added" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Attachment Added\n        "}
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
