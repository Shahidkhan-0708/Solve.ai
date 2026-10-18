'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './ccbe72bd11cc456a875e203ea08fcdfe.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'ccbe72bd11cc456a875e203ea08fcdfe');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-ccbe72bd11cc456a875e203ea08fcdfe h-full flex items-center justify-center p-0 sm:p-6 bg-neutral-100 text-neutral-900 select-none" data-screen-id="ccbe72bd11cc456a875e203ea08fcdfe">
    <main aria-live="polite" className="mobile-frame relative bg-[#FFFFFF] overflow-hidden flex flex-col justify-between px-6 pb-6 pt-12">
      <div aria-hidden="true" className="h-10 w-full"></div>
      <section aria-label="Brand Transition Content" className="flex-1 flex flex-col items-center justify-center -mt-10">
        <div className="mb-6 flex items-center justify-center">
          <img alt="SOLVE" className="w-[160px] h-auto mx-auto object-contain pointer-events-none select-none" src="/assets/solve-logo.png" data-brand="solve" />
        </div>
        <div className="state-panel animate-fade-in text-center flex flex-col items-center" id="state-default">
          <p className="text-[16px] font-medium text-[#616161] text-center tracking-[-0.01em]">
            {"\n          Let’s make learning simpler.\n        "}
          </p>
        </div>
        <div className="state-panel hidden text-center flex flex-col items-center animate-fade-in" id="state-loading">
          <p className="text-[16px] font-medium text-[#616161] tracking-[-0.01em]">
            {"\n          Opening your workspace…\n        "}
          </p>
          <div aria-hidden="true" className="mt-4 flex items-center justify-center">
            <svg className="animate-spin-slow h-4 w-4 text-neutral-400" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
              <path className="opacity-80" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" fill="currentColor"></path>
            </svg>
          </div>
        </div>
        <div className="state-panel hidden w-full max-w-[320px] text-center flex flex-col items-center animate-fade-in" id="state-error">
          <h2 className="text-[18px] font-semibold text-neutral-900 tracking-[-0.015em]">
            {"\n          Couldn’t open your workspace.\n        "}
          </h2>
          <p className="text-[14px] font-normal text-neutral-500 mt-1 mb-6">
            {"\n          Your details are saved. Please try again.\n        "}
          </p>
          <button className="w-full h-12 bg-neutral-900 active:bg-neutral-800 text-white rounded-xl font-medium text-[15px] transition-colors focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2 flex items-center justify-center" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n          Try again\n        "}
          </button>
        </div>
        <div className="state-panel hidden w-full max-w-[342px] animate-fade-in text-left bg-neutral-50 p-5 rounded-2xl border border-neutral-200/80" id="state-specs">
          <div className="flex items-center justify-between mb-3 border-b border-neutral-200/60 pb-2.5">
            <span className="text-[11px] font-semibold uppercase tracking-wider text-neutral-400">
              {"Handoff Specifications"}
            </span>
            <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-medium bg-emerald-100 text-emerald-800">
              {"WCAG AAA"}
            </span>
          </div>
          <ul className="space-y-2.5 text-[13px] text-neutral-700">
            <li className="flex items-start">
              <span className="font-semibold w-24 shrink-0 text-neutral-900">
                {"Fade-In:"}
              </span>
              <span className="text-neutral-600">
                {"200ms cubic-bezier(0.16, 1, 0.3, 1)"}
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-24 shrink-0 text-neutral-900">
                {"Duration:"}
              </span>
              <span className="text-neutral-600">
                {"800ms – 1,200ms total handoff budget"}
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-24 shrink-0 text-neutral-900">
                {"Reduced Motion:"}
              </span>
              <span className="text-neutral-600">
                {"Zero transforms; instant opacity fallbacks"}
              </span>
            </li>
            <li className="flex items-start">
              <span className="font-semibold w-24 shrink-0 text-neutral-900">
                {"Screen Reader:"}
              </span>
              <span className="text-neutral-600">
                {"polite announcement on mount & recovery"}
              </span>
            </li>
          </ul>
        </div>
      </section>
      <nav aria-label="Interactive State Preview Switcher" className="w-full flex justify-center pb-2 z-20">
        <div className="inline-flex items-center bg-neutral-900/90 backdrop-blur-md p-1 rounded-full shadow-lg border border-white/10 max-w-full overflow-x-auto no-scrollbar">
          <button className="state-btn active-state px-3 py-1.5 rounded-full text-[12px] font-medium text-white bg-white/20 transition-all focus:outline-none" id="btn-default" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n          Default\n        "}
          </button>
          <button className="state-btn px-3 py-1.5 rounded-full text-[12px] font-medium text-neutral-300 hover:text-white transition-all focus:outline-none" id="btn-loading" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n          Loading\n        "}
          </button>
          <button className="state-btn px-3 py-1.5 rounded-full text-[12px] font-medium text-neutral-300 hover:text-white transition-all focus:outline-none" id="btn-error" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n          Error\n        "}
          </button>
          <button className="state-btn px-3 py-1.5 rounded-full text-[12px] font-medium text-neutral-300 hover:text-white transition-all focus:outline-none" id="btn-specs" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n          Specs\n        "}
          </button>
        </div>
      </nav>
    </main>
  </div>;
}
