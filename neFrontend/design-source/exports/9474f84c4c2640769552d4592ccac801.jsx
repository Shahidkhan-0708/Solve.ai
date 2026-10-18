'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/9474f84c4c2640769552d4592ccac801';
import './9474f84c4c2640769552d4592ccac801.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-9474f84c4c2640769552d4592ccac801 h-full bg-white text-[#111111] antialiased flex flex-col justify-between selection:bg-[#111111] selection:text-white" data-screen-id="9474f84c4c2640769552d4592ccac801">
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 -translate-y-4 sm:-translate-y-6">
      <div className="w-full max-w-[400px] flex flex-col items-center text-center">
        <header className="mb-8 w-full flex justify-center">
          <img alt="SOLVE" className="w-[180px] h-auto object-contain block select-none" loading="eager" src="/assets/ddbb0037659215ce.png" />
        </header>
        <h1 className="text-[34px] sm:text-[36px] font-semibold tracking-[-0.03em] leading-[1.15] text-[#111111] mb-3">
          {"\n        A simpler way to learn.\n      "}
        </h1>
        <p className="text-[16px] text-[#616161] leading-[1.6] tracking-normal mb-9">
          {"\n        Understand difficult topics, prepare for exams, and explore new skills with your personal AI mentor.\n      "}
        </p>
        <div className="w-full flex flex-col items-center">
          <div className="w-full relative">
            <button className="btn-sign-in w-full h-[52px] bg-[#FFFFFF] hover:bg-[#F7F7F7] active:bg-[#EFEFEF] border border-[#E5E5E5] text-[#111111] font-medium rounded-[12px] shadow-none flex items-center justify-center gap-3.5 px-5 text-[15px] focus:outline-none focus:ring-2 focus:ring-[#111111]/20 focus:border-[#111111] cursor-pointer select-none" data-purpose="google-sign-in-action" id="googleSignInBtn" type="button">
              <svg aria-hidden="true" className="w-[19px] h-[19px] shrink-0" id="googleLogoIcon" viewBox="0 0 24 24">
                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"></path>
                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"></path>
                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z" fill="#FBBC05"></path>
                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z" fill="#EA4335"></path>
              </svg>
              <svg className="spinner-quiet w-[18px] h-[18px] text-[#111111] shrink-0 hidden" fill="none" id="loadingSpinner" stroke="currentColor" strokeLinecap="round" strokeWidth="2.5" viewBox="0 0 24 24">
                <circle className="opacity-20" cx="12" cy="12" r="10" stroke="currentColor"></circle>
                <path className="opacity-90" d="M12 2a10 10 0 0 1 10 10"></path>
              </svg>
              <span className="tracking-normal" id="btnLabel">
                {"Continue with Google"}
              </span>
            </button>
            <div className="hidden mt-3 text-[13px] text-[#D93025] flex items-center justify-center gap-1.5 transition-opacity duration-200" id="errorMessage" role="alert">
              <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" strokeLinecap="round" strokeLinejoin="round"></path>
              </svg>
              <span>
                {"Couldn’t sign you in. Please try again."}
              </span>
            </div>
          </div>
          <p className="text-[14px] text-[#616161] text-center mt-5 mb-8 select-none">
            {"\n          New here? We’ll help you get set up.\n        "}
          </p>
          <footer className="text-[12px] text-[#8E8E93] text-center leading-[1.6]">
            {"\n          By continuing, you agree to our \n          "}
            <a className="text-[#111111] underline underline-offset-4 hover:text-[#000000] decoration-[#CCCCCC] hover:decoration-[#111111] transition-colors" href="#">
              {"Terms of Service"}
            </a>
            {" \n          and \n          "}
            <a className="text-[#111111] underline underline-offset-4 hover:text-[#000000] decoration-[#CCCCCC] hover:decoration-[#111111] transition-colors" href="#">
              {"Privacy Policy"}
            </a>
            {".\n        "}
          </footer>
        </div>
      </div>
    </main>
    <aside className="fixed bottom-5 right-5 bg-white/95 backdrop-blur-sm border border-[#E5E5E5] rounded-xl shadow-lg px-3.5 py-2.5 z-50 text-[12px] flex items-center gap-2 text-[#616161]" data-purpose="state-controller-dock">
      <span className="font-medium text-[#111111] text-[11px] uppercase tracking-wider mr-1 select-none">
        {"State:"}
      </span>
      <button className="px-2.5 py-1 rounded-md bg-[#F7F7F7] text-[#111111] font-medium border border-[#E5E5E5] hover:bg-[#EFEFEF] transition-all" id="stateDefault" type="button">
        {"\n      Default\n    "}
      </button>
      <button className="px-2.5 py-1 rounded-md hover:bg-[#F7F7F7] text-[#616161] font-medium transition-all" id="stateLoading" type="button">
        {"\n      Loading\n    "}
      </button>
      <button className="px-2.5 py-1 rounded-md hover:bg-[#F7F7F7] text-[#616161] font-medium transition-all" id="stateError" type="button">
        {"\n      Error\n    "}
      </button>
      <div className="w-px h-3.5 bg-[#E5E5E5] mx-1"></div>
      <button className="text-[#8E8E93] hover:text-[#111111] p-1 transition-colors" id="stateReset" title="Reset to idle state" type="button" aria-label="Reset to idle state">
        <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
          <path d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" strokeLinecap="round" strokeLinejoin="round"></path>
        </svg>
      </button>
    </aside>
  </div>;
}
