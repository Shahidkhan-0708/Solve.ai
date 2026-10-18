'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/806c7bbcea9245b0a066dfb07392c70d';
import './806c7bbcea9245b0a066dfb07392c70d.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-806c7bbcea9245b0a066dfb07392c70d bg-surface font-body-md text-on-surface flex flex-col min-h-screen" data-screen-id="806c7bbcea9245b0a066dfb07392c70d">
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-14 px-margin flex items-center justify-between">
        <button aria-label="Open Menu" className="w-11 h-11 flex items-center justify-center text-on-surface hover:text-secondary rounded-lg transition-colors" id="drawer-open-btn" type="button">
          <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
            {"menu"}
          </span>
        </button>
        <div className="flex items-center gap-space-xs">
          <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold">
            {"SOLVE"}
          </span>
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
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover ml-1" src="/assets/7e17bca1d79158ba.png" />
        </div>
      </div>
    </header>
    <div className="fixed inset-0 z-50 bg-primary/20 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="drawer-backdrop"></div>
    <aside className="fixed top-0 bottom-0 left-0 z-50 w-80 max-w-[85vw] bg-surface-container-lowest shadow-[0_4px_24px_rgba(0,0,0,0.08)] transform -translate-x-full transition-transform duration-300 ease-out flex flex-col pt-safe pb-safe" id="drawer-panel">
      <div className="p-space-lg flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <div className="w-7 h-7 bg-primary text-on-primary rounded flex items-center justify-center font-headline-sm text-headline-sm font-semibold">
            {"S"}
          </div>
          <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface">
            {"SOLVE"}
          </span>
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
            <img alt="Profile" className="w-9 h-9 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
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
      <div className="flex flex-col w-full relative pb-10">
        <div className="w-full px-margin pt-space-xs pb-space-sm flex justify-center items-center">
          <div className="bg-surface-container-high p-0.5 rounded-full flex items-center shadow-sm">
            <button className="px-space-md py-1 rounded-full bg-surface-container-lowest text-primary font-label-sm text-label-sm font-medium shadow-sm transition-all flex items-center gap-1.5" id="mode-chat-btn" type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"chat_bubble"}
              </span>
              <span>
                {"Chat"}
              </span>
            </button>
            <button className="px-space-md py-1 rounded-full text-secondary font-label-sm text-label-sm font-medium transition-all hover:text-primary flex items-center gap-1.5" id="mode-study-btn" type="button">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"school"}
              </span>
              <span>
                {"Study"}
              </span>
            </button>
          </div>
        </div>
        <div className="w-full max-w-107.5 mx-auto px-margin flex flex-col space-y-space-lg">
          <div className="flex flex-col items-center text-center pt-space-md">
            <div className="mb-space-md flex items-center justify-center">
              <img alt="SOLVE Mentor AI" className="w-27 h-auto object-contain" src="/assets/a67b9d60d5f1f882.png" />
            </div>
            <div className="inline-flex items-center gap-1.5 px-space-sm py-0.5 rounded-full bg-surface-container-low text-secondary text-label-sm font-label-sm mb-space-sm">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span className="text-[11px] font-medium tracking-wide uppercase">
                {"AI Research Mentor Ready"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-primary tracking-tight">
              {"\n        What would you like to learn today?\n      "}
            </h1>
            <p className="font-body-md text-body-md text-secondary mt-space-xs max-w-77.5 leading-relaxed">
              {"\n        Tell me your goal, ask a question, or add something you’re studying.\n      "}
            </p>
          </div>
          <div className="w-full bg-surface-container-lowest rounded-[18px] p-space-md shadow-sm transition-all duration-200">
            <div className="hidden flex-wrap items-center gap-space-xs mb-space-sm" id="attachments-container">
              <div className="inline-flex items-center gap-1.5 px-space-sm py-1 rounded-lg bg-surface-container-low text-primary text-label-sm font-label-sm">
                <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                  {"picture_as_pdf"}
                </span>
                <span className="font-medium text-xs">
                  {"Unit 2 notes.pdf"}
                </span>
                <button aria-label="Remove attachment" className="text-secondary hover:text-primary ml-0.5 flex items-center" id="remove-attachment-btn" type="button">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <span className="text-[11px] text-secondary font-label-sm">
                {"1.8 MB"}
              </span>
            </div>
            <div className="relative w-full min-h-22 flex flex-col justify-between">
              <textarea className="w-full bg-transparent resize-none outline-none font-body-md text-body-md text-primary placeholder:text-secondary leading-snug" id="main-composer-input" placeholder="Describe your goal or ask a question…" rows="3"></textarea>
              <div className="flex items-center justify-between pt-space-xs">
                <div className="flex items-center gap-1">
                  <button aria-label="Add resources" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-container-low transition-colors" id="attach-doc-btn" title="Add resources" type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"add_circle"}
                    </span>
                  </button>
                  <button aria-label="Voice transcription" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-container-low transition-colors" id="mic-input-btn" title="Voice transcription" type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"mic"}
                    </span>
                  </button>
                </div>
                <button aria-label="Send message" className="w-9 h-9 rounded-full bg-surface-container-high text-secondary flex items-center justify-center transition-all duration-200 cursor-not-allowed" disabled id="send-action-btn" type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"arrow_upward"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="flex flex-col space-y-space-xs">
            <span className="text-[11px] uppercase tracking-wider text-secondary font-label-sm font-medium px-space-xs">
              {"\n        Suggested exploration\n      "}
            </span>
            <div className="flex flex-wrap gap-2">
              <button className="starter-pill text-left px-3.5 py-2 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm hover:text-primary hover:bg-surface-container-low transition-all shadow-sm" type="button">
                {"\n          Prepare for an exam\n        "}
              </button>
              <button className="starter-pill text-left px-3.5 py-2 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm hover:text-primary hover:bg-surface-container-low transition-all shadow-sm" type="button">
                {"\n          Understand a topic\n        "}
              </button>
              <button className="starter-pill text-left px-3.5 py-2 rounded-full bg-surface-container-lowest text-secondary font-label-sm text-label-sm hover:text-primary hover:bg-surface-container-low transition-all shadow-sm" type="button">
                {"\n          Learn a new skill\n        "}
              </button>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex items-center justify-between">
            <div className="flex items-center gap-space-sm min-w-0">
              <div className="w-10 h-10 rounded-lg bg-surface-container-low flex items-center justify-center shrink-0 text-primary">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"psychology"}
                </span>
              </div>
              <div className="flex flex-col min-w-0">
                <span className="font-label-md text-label-md font-medium text-primary truncate">
                  {"Curated Focus Path"}
                </span>
                <span className="font-body-sm text-body-sm text-secondary truncate">
                  {"Deep Learning Foundations (72% complete)"}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
              {"chevron_right"}
            </span>
          </div>
        </div>
        <div className="w-full max-w-107.5 mx-auto px-margin mt-space-xl">
          <div className="bg-surface-container-low rounded-xl p-space-sm flex flex-col space-y-space-xs">
            <div className="flex items-center justify-between px-space-xs">
              <span className="text-[10px] font-label-sm uppercase tracking-wider text-secondary font-semibold">
                {"Interactive Prototype Preview"}
              </span>
              <span className="text-[10px] font-mono text-secondary">
                {"States"}
              </span>
            </div>
            <div className="grid grid-cols-2 gap-1.5">
              <button className="state-switch-btn px-2.5 py-1.5 rounded-lg bg-primary text-on-primary text-[11px] font-label-sm font-medium transition-all text-center" id="state-default-btn" type="button">
                {"\n          Default (First-use)\n        "}
              </button>
              <button className="state-switch-btn px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary text-[11px] font-label-sm font-medium hover:text-primary transition-all text-center" id="state-drawer-btn" type="button">
                {"\n          Drawer Open\n        "}
              </button>
              <button className="state-switch-btn px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary text-[11px] font-label-sm font-medium hover:text-primary transition-all text-center" id="state-text-btn" type="button">
                {"\n          Text Entered\n        "}
              </button>
              <button className="state-switch-btn px-2.5 py-1.5 rounded-lg bg-surface-container-lowest text-secondary text-[11px] font-label-sm font-medium hover:text-primary transition-all text-center" id="state-attach-btn" type="button">
                {"\n          Attachment Added\n        "}
              </button>
            </div>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/90 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-medium">
      <div className="flex justify-around items-center h-16 px-space-md">
        <a aria-current="page" className="flex flex-col items-center justify-center gap-1 min-w-14 h-12 transition-colors text-primary font-medium" data-path="chat-session" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"forum"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Mentor"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 min-w-14 h-12 text-on-surface-variant transition-colors" data-path="learning-plan" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"alt_route"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Plan"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 min-w-14 h-12 text-on-surface-variant transition-colors" data-path="knowledge-graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"hub"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Graph"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center gap-1 min-w-14 h-12 text-on-surface-variant transition-colors" data-path="target-status" href="#">
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
