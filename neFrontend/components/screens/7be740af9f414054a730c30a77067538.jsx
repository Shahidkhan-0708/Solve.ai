'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './7be740af9f414054a730c30a77067538.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '7be740af9f414054a730c30a77067538');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-7be740af9f414054a730c30a77067538 h-full bg-white text-neutral-900 font-sans antialiased overflow-hidden select-none flex flex-col justify-between" data-screen-id="7be740af9f414054a730c30a77067538">
    <main className="w-full h-full flex flex-col items-center justify-center p-6" role="main">
      <div aria-live="polite" className="transition-stage opacity-100 flex flex-col items-center text-center max-w-md w-full" data-purpose="brand-stage" id="transition-stage" role="status">
        <img alt="SOLVE" className="w-[200px] h-auto mx-auto object-contain block" data-purpose="brand-logo" src="/assets/solve-logo.png" data-brand="solve" />
        <div className="w-full flex flex-col items-center" id="state-content">
          <p className="mt-6 text-[18px] leading-normal font-medium text-solve-gray tracking-tight" data-purpose="tagline">
            {"\n          Let’s make learning simpler.\n        "}
          </p>
        </div>
      </div>
    </main>
    <aside aria-hidden="true" className="fixed bottom-20 right-6 w-96 max-w-[calc(100vw-3rem)] bg-white/95 backdrop-blur-md border border-neutral-200/80 shadow-xl rounded-2xl p-5 translate-y-4 opacity-0 pointer-events-none transition-all duration-200 ease-out z-40" data-purpose="motion-annotations-panel" id="specs-drawer">
      <div className="flex items-center justify-between pb-3 border-b border-neutral-100">
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
          <h2 className="text-xs font-semibold tracking-wide uppercase text-neutral-800">
            {"Motion & Handoff Specs"}
          </h2>
        </div>
        <button aria-label="Close motion specs" className="text-neutral-400 hover:text-neutral-700 p-1 text-sm rounded-md transition-colors" id="close-specs-btn" type="button">
          {"\n        ✕\n      "}
        </button>
      </div>
      <dl className="mt-3.5 space-y-3 text-xs leading-relaxed text-neutral-600">
        <div>
          <dt className="font-medium text-neutral-900">
            {"Target Total Duration"}
          </dt>
          <dd className="text-neutral-500 mt-0.5">
            {"800–1200ms total transition time"}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-neutral-900">
            {"Fade-In Curve"}
          </dt>
          <dd className="text-neutral-500 mt-0.5">
            {"Opacity "}
            <span className="font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded text-neutral-700">
              {"0 → 1"}
            </span>
            {" over 200ms using "}
            <span className="font-mono text-[11px] bg-neutral-100 px-1 py-0.5 rounded text-neutral-700">
              {"cubic-bezier(0.16, 1, 0.3, 1)"}
            </span>
          </dd>
        </div>
        <div>
          <dt className="font-medium text-neutral-900">
            {"Hold Duration"}
          </dt>
          <dd className="text-neutral-500 mt-0.5">
            {"~600ms steady state before seamless workspace handoff"}
          </dd>
        </div>
        <div>
          <dt className="font-medium text-neutral-900">
            {"Accessibility & Reduced Motion"}
          </dt>
          <dd className="text-neutral-500 mt-0.5">
            {"Static immediate layout without animated opacity shifts ("}
            <code className="font-mono text-[10px] text-neutral-600">
              {"prefers-reduced-motion: reduce"}
            </code>
            {"). Tagged with "}
            <code className="font-mono text-[10px] text-neutral-600">
              {"aria-live=\"polite\""}
            </code>
            {" and "}
            <code className="font-mono text-[10px] text-neutral-600">
              {"role=\"status\""}
            </code>
            {"."}
          </dd>
        </div>
      </dl>
    </aside>
    <nav aria-label="Prototype State Switcher" className="fixed bottom-6 right-6 z-50 flex items-center gap-1.5 p-1.5 bg-neutral-900/90 hover:bg-neutral-900 text-white backdrop-blur-md rounded-2xl shadow-lg border border-neutral-800 transition-all text-xs" data-purpose="prototype-state-controller">
      <button aria-pressed="true" className="px-3 py-1.5 rounded-xl font-medium transition-all bg-white text-neutral-900 shadow-sm" id="btn-state-default" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
        {"\n      Default\n    "}
      </button>
      <button aria-pressed="false" className="px-3 py-1.5 rounded-xl font-medium text-neutral-400 hover:text-white transition-all" id="btn-state-loading" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
        {"\n      Loading\n    "}
      </button>
      <button aria-pressed="false" className="px-3 py-1.5 rounded-xl font-medium text-neutral-400 hover:text-white transition-all" id="btn-state-error" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
        {"\n      Error\n    "}
      </button>
      <span className="w-[1px] h-4 bg-neutral-700/80 mx-0.5"></span>
      <button className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all flex items-center justify-center" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} title="Replay Transition Animation" type="button" aria-label="Replay Transition Animation">
        <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span className="sr-only">
          {"Replay Transition"}
        </span>
      </button>
      <button className="p-1.5 rounded-xl text-neutral-400 hover:text-white hover:bg-neutral-800 transition-all flex items-center justify-center" id="specs-toggle-btn" title="Toggle Motion Specs Panel" type="button" aria-label="Toggle Motion Specs Panel">
        <svg aria-hidden="true" className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
        </svg>
        <span className="sr-only">
          {"Toggle Motion Specs"}
        </span>
      </button>
    </nav>
  </div>;
}
