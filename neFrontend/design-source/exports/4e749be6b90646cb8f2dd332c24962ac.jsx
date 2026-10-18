'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/4e749be6b90646cb8f2dd332c24962ac';
import './4e749be6b90646cb8f2dd332c24962ac.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-4e749be6b90646cb8f2dd332c24962ac bg-surface font-body-md text-on-surface flex flex-col min-h-screen" data-screen-id="4e749be6b90646cb8f2dd332c24962ac">
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
      <div className="flex flex-col w-full pb-6 px-margin">
        <div className="flex items-center justify-between py-space-sm mb-space-sm">
          <div className="flex items-center gap-space-xs">
            <img alt="SOLVE Brand" className="h-6 w-auto object-contain" src="/assets/5052899306e6929f.png" />
          </div>
          <button className="flex items-center gap-1.5 bg-primary text-on-primary px-3 py-1.5 rounded-full hover:bg-primary-container transition-all active:scale-95 shadow-sm" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              {"add"}
            </span>
            <span className="font-label-sm text-label-sm font-medium tracking-wide">
              {"New"}
            </span>
          </button>
        </div>
        <div className="w-full bg-surface-container-low p-1 rounded-xl flex items-center justify-between mb-space-lg shadow-sm">
          <button className="flex-1 py-2 px-3 rounded-lg flex flex-col items-center justify-center transition-all duration-200 bg-surface-container-lowest text-on-surface shadow-sm" id="mode-tab-chat" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"chat_bubble_outline"}
              </span>
              <span className="font-label-md text-label-md font-semibold">
                {"Chat"}
              </span>
            </div>
            <span className="text-[11px] font-label-sm text-on-surface-variant leading-none mt-0.5">
              {"Ask questions"}
            </span>
          </button>
          <button className="flex-1 py-2 px-3 rounded-lg flex flex-col items-center justify-center transition-all duration-200 text-on-surface-variant hover:text-on-surface" id="mode-tab-study" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <div className="flex items-center gap-1.5">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"school"}
              </span>
              <span className="font-label-md text-label-md font-semibold">
                {"Study"}
              </span>
            </div>
            <span className="text-[11px] font-label-sm text-on-secondary-container leading-none mt-0.5">
              {"Personal plan"}
            </span>
          </button>
        </div>
        <div className="flex flex-col w-full transition-opacity duration-300" id="view-chat">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="flex items-center gap-2 mb-1">
              <div className="w-2 h-2 rounded-full bg-primary animate-pulse"></div>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                {"Cognitive Assistant"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-primary tracking-tight">
              {"\n        What can I help you with?\n      "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {"\n        Ask a question, explore an idea, or add something you’d like help understanding.\n      "}
            </p>
          </div>
          <div className="bg-surface-container-low rounded-xl p-space-md mb-space-lg flex items-center justify-between">
            <div className="flex items-center gap-space-sm">
              <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center text-primary">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"auto_awesome"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                  {"Curiosity Mode"}
                </span>
                <span className="text-[11px] font-label-sm text-on-surface-variant">
                  {"Socratic reasoning is engaged"}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-outline text-[20px]" aria-hidden="true">
              {"toggle_on"}
            </span>
          </div>
          <div className="relative w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md mb-space-lg transition-all focus-within:shadow-lg">
            <textarea className="w-full bg-transparent resize-none outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant leading-relaxed" id="chat-input" placeholder="Ask SOLVE anything..." rows="3"></textarea>
            <div className="flex items-center justify-between pt-space-xs mt-space-xs">
              <div className="flex items-center gap-space-xs">
                <button aria-label="Attach context or media" className="w-9 h-9 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container flex items-center justify-center transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"add"}
                  </span>
                </button>
                <button aria-label="Voice input" className="w-9 h-9 rounded-full bg-surface-container-low text-on-surface-variant hover:text-primary hover:bg-surface-container flex items-center justify-center transition-colors" type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"mic"}
                  </span>
                </button>
              </div>
              <button aria-label="Send message" className="w-10 h-10 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-transform active:scale-90 shadow-sm" id="chat-send-btn" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                  {"arrow_upward"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm mb-space-xl">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
                {"Quick prompts"}
              </span>
              <span className="font-label-sm text-label-sm text-secondary">
                {"Tap to prompt"}
              </span>
            </div>
            <div className="flex flex-col gap-2">
              <button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low p-3 rounded-xl transition-all flex items-center justify-between shadow-sm group" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"lightbulb"}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface">
                    {"Explain a concept"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </button>
              <button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low p-3 rounded-xl transition-all flex items-center justify-between shadow-sm group" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"quiz"}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface">
                    {"Help with a question"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </button>
              <button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low p-3 rounded-xl transition-all flex items-center justify-between shadow-sm group" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"explore"}
                    </span>
                  </div>
                  <span className="font-body-sm text-body-sm font-medium text-on-surface">
                    {"Explore an idea"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px] group-hover:translate-x-0.5 transition-transform" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden flex flex-col w-full transition-opacity duration-300" id="view-study">
          <div className="flex flex-col gap-space-xs mb-space-lg">
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant">
                {"Trajectory Architecture"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile font-semibold text-primary tracking-tight">
              {"\n        What would you like to work towards?\n      "}
            </h1>
            <p className="font-body-md text-body-md text-on-surface-variant leading-relaxed">
              {"\n        Tell me your learning goal. We'll build a structured preparation plan around your time and resources.\n      "}
            </p>
          </div>
          <div className="w-full bg-surface-container-lowest rounded-xl p-space-md shadow-md mb-space-lg relative overflow-hidden">
            <div className="flex items-center justify-between mb-2">
              <span className="px-2 py-0.5 rounded-full bg-surface-container text-[11px] font-label-sm font-medium text-on-surface">
                {"Active Track"}
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-primary">
                {"68% Complete"}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface mb-1">
              {"\n        Python Foundations\n      "}
            </h3>
            <div className="flex items-center gap-2 text-on-surface-variant font-body-sm text-body-sm mb-4">
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"play_circle"}
              </span>
              <span>
                {"Next: Conditions & Loop Control"}
              </span>
            </div>
            <div className="w-full bg-surface-container-low h-2 rounded-full mb-4 overflow-hidden">
              <div className="bg-primary h-full rounded-full transition-all duration-500" style={{"width":"68%"}}></div>
            </div>
            <button className="w-full bg-primary text-on-primary py-2.5 px-4 rounded-lg font-label-md text-label-md font-medium hover:bg-primary-container transition-all flex items-center justify-center gap-2 active:scale-98" type="button">
              <span>
                {"Continue learning"}
              </span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_forward"}
              </span>
            </button>
          </div>
          <div className="relative w-full bg-surface-container-lowest rounded-xl shadow-md p-space-md mb-space-lg transition-all focus-within:shadow-lg">
            <label className="block font-label-sm text-label-sm font-medium text-on-surface-variant mb-1" htmlFor="study-goal-input">
              {"New Learning Target"}
            </label>
            <textarea className="w-full bg-transparent resize-none outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant leading-relaxed" id="study-goal-input" placeholder="e.g. Help me learn Python over the next 3 months with 45 mins daily practice..." rows="3"></textarea>
            <div className="flex items-center justify-between pt-space-xs mt-space-xs">
              <div className="flex items-center gap-space-xs">
                <span className="text-[11px] font-label-sm text-on-surface-variant flex items-center gap-1">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"schedule"}
                  </span>
                  {" 12-week roadmap auto-gen\n          "}
                </span>
              </div>
              <button aria-label="Generate syllabus" className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary flex items-center gap-1.5 hover:bg-primary-container transition-transform active:scale-95 shadow-sm" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="font-label-sm text-label-sm font-medium">
                  {"Build Plan"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"draw"}
                </span>
              </button>
            </div>
          </div>
          <div className="flex flex-col gap-space-sm mb-space-xl">
            <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-on-surface-variant">
              {"Recommended Frameworks"}
            </span>
            <div className="flex flex-col gap-2">
              <button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low p-3 rounded-xl transition-all flex items-center justify-between shadow-sm group" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"menu_book"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">
                      {"Prepare for semester exams"}
                    </span>
                    <span className="text-[11px] font-label-sm text-on-surface-variant">
                      {"Past paper drills & revision schedule"}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px]" aria-hidden="true">
                  {"add"}
                </span>
              </button>
              <button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low p-3 rounded-xl transition-all flex items-center justify-between shadow-sm group" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"terminal"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">
                      {"Learn a new skill"}
                    </span>
                    <span className="text-[11px] font-label-sm text-on-surface-variant">
                      {"Hands-on micro projects with feedback"}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px]" aria-hidden="true">
                  {"add"}
                </span>
              </button>
              <button className="w-full text-left bg-surface-container-lowest hover:bg-surface-container-low p-3 rounded-xl transition-all flex items-center justify-between shadow-sm group" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-3">
                  <div className="w-7 h-7 rounded-lg bg-surface-container-low flex items-center justify-center text-on-surface group-hover:bg-primary group-hover:text-on-primary transition-colors">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"psychology"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <span className="font-body-sm text-body-sm font-medium text-on-surface">
                      {"Build understanding"}
                    </span>
                    <span className="text-[11px] font-label-sm text-on-surface-variant">
                      {"First-principles intuition mapping"}
                    </span>
                  </div>
                </div>
                <span className="material-symbols-outlined text-outline-variant text-[18px]" aria-hidden="true">
                  {"add"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden flex flex-col gap-space-md pt-space-sm mb-space-lg" id="interaction-feed">
          <div className="w-full p-4 rounded-xl bg-surface-container-low flex items-start gap-3">
            <div className="w-7 h-7 rounded-full bg-primary text-on-primary flex-shrink-0 flex items-center justify-center text-[12px] font-semibold mt-0.5">
              {"S"}
            </div>
            <div className="flex flex-col gap-1 w-full">
              <span className="font-label-sm text-label-sm font-semibold text-primary">
                {"SOLVE Mentor"}
              </span>
              <p className="font-body-md text-body-md text-on-surface leading-relaxed" id="feed-response-text"></p>
              <div className="flex items-center gap-2 mt-2 pt-2 text-on-surface-variant font-label-sm text-[11px]">
                <span className="flex items-center gap-1 cursor-pointer hover:text-on-surface">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"thumb_up"}
                  </span>
                  {" Helpful"}
                </span>
                <span>
                  {"·"}
                </span>
                <span className="flex items-center gap-1 cursor-pointer hover:text-on-surface">
                  <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                    {"content_copy"}
                  </span>
                  {" Copy"}
                </span>
              </div>
            </div>
          </div>
        </div>
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
