'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './d128cbc44b014283b966d3c345fc3f03.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'd128cbc44b014283b966d3c345fc3f03');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-d128cbc44b014283b966d3c345fc3f03 h-full bg-white text-solvePrimary antialiased selection:bg-neutral-100" data-screen-id="d128cbc44b014283b966d3c345fc3f03">
    <div className="min-h-screen w-full max-w-97.5 mx-auto flex flex-col justify-between px-6 py-12">
      <header className="pt-6 sm:pt-10 flex flex-col items-center" data-purpose="brand-header">
        <img alt="SOLVE" className="w-40 h-auto object-contain mx-auto mb-8 transition-opacity duration-300" src="/assets/solve-logo.png" data-brand="solve" />
      </header>
      <main className="flex flex-col items-center grow justify-center my-auto" data-purpose="authentication-content">
        <div className="text-center w-full">
          <h1 className="text-[30px] leading-[1.2] font-semibold tracking-tight text-[#111111] mb-3">
            {"\n          A simpler way to learn.\n        "}
          </h1>
          <p className="text-[15.5px] leading-relaxed text-[#616161] px-2 max-w-[320px] mx-auto mb-9">
            {"\n          Understand difficult topics, prepare for exams, and explore new skills with your personal AI mentor.\n        "}
          </p>
        </div>
        <div className="w-full space-y-3">
          <button className="btn-press-active w-full h-13 min-h-12 border border-[#E5E5E5] bg-[#FFFFFF] hover:bg-[#FAFAFA] active:bg-[#F7F7F7] text-[#111111] font-medium rounded-xl flex items-center justify-center gap-3.5 px-4 text-[15px] shadow-none touch-manipulation transition-all duration-150 focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-neutral-400" data-purpose="google-signin-trigger" id="googleSignInBtn" type="button">
            <svg aria-hidden="true" className="w-5 h-5 shrink-0" id="googleLogoIcon" viewBox="0 0 24 24">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
            </svg>
            <svg className="hidden animate-spin w-4.75 h-4.75 text-[#111111]" fill="none" id="loadingSpinner" viewBox="0 0 24 24">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
              <path className="opacity-75" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" fill="currentColor"></path>
            </svg>
            <span className="tracking-normal select-none font-medium" id="btnLabel">
              {"Continue with Google"}
            </span>
          </button>
          <div className="w-full flex items-center gap-3 my-0.5">
            <div className="h-px bg-[#EDEDED] flex-1" />
            <span className="text-[11px] uppercase tracking-wider text-[#9E9E9E] font-medium select-none">{"or"}</span>
            <div className="h-px bg-[#EDEDED] flex-1" />
          </div>
          <button
            className="btn-guest-login w-full h-13 min-h-12 font-medium rounded-xl flex items-center justify-center gap-2.5 px-4 text-[15px] shadow-sm focus:outline-none focus:ring-2 focus:ring-[#111111]/30"
            data-purpose="guest-sign-in-action"
            data-guest-continue="true"
            id="guestSignInBtn"
            type="button"
            onClick={() => window.location.assign('/chat')}
          >
            <span className="material-symbols-outlined text-[19px]" aria-hidden="true">person</span>
            <span className="tracking-normal select-none font-medium">{"Continue as guest"}</span>
          </button>
          <div className="opacity-0 max-h-0 overflow-hidden transition-all duration-300 ease-out flex items-center justify-center" id="statusNotification">
            <p className="text-[13px] text-red-600 font-medium text-center py-0.5" id="statusMessage">
              {"\n            Couldn't sign you in. Please try again.\n          "}
            </p>
          </div>
          <p className="text-[13.5px] text-[#616161] text-center mt-2.5 select-none">
            {"\n          New here? We’ll help you get set up.\n        "}
          </p>
        </div>
      </main>
      <footer className="mt-auto pt-8" data-purpose="legal-footer">
        <p className="text-[12px] text-[#8E8E93] text-center leading-relaxed max-w-[320px] mx-auto select-none">
          {"\n        By continuing, you agree to our \n        "}
          <a className="text-[#111111] underline underline-offset-4 hover:text-black transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-400 rounded-sm" href="#terms">
            {"Terms of Service"}
          </a>
          {" \n        and \n        "}
          <a className="text-[#111111] underline underline-offset-4 hover:text-black transition-colors focus:outline-none focus:ring-1 focus:ring-neutral-400 rounded-sm" href="#privacy">
            {"Privacy Policy"}
          </a>
          {".\n      "}
        </p>
      </footer>
    </div>
  </div>;
}
