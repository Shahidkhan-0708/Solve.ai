'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './4ba7d929b90b4e038d603a5c5f9f5832.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '4ba7d929b90b4e038d603a5c5f9f5832');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-4ba7d929b90b4e038d603a5c5f9f5832 h-full bg-white text-[#111111] antialiased flex flex-col justify-between selection:bg-[#111111] selection:text-white" data-screen-id="4ba7d929b90b4e038d603a5c5f9f5832">
    <main className="flex-1 flex flex-col items-center justify-center px-6 py-12 -translate-y-4 sm:-translate-y-6">
      <div className="flex flex-col w-full items-center justify-center">
        <div className="w-full max-w-[440px] flex flex-col items-center">
          <header className="flex flex-col items-center text-center w-full">
            <div className="w-[140px] flex items-center justify-center select-none mb-6">
              <img alt="SOLVE — Learning Platform" className="w-full h-auto object-contain transition-opacity duration-200 hover:opacity-90" src="/assets/solve-logo.png" data-brand="solve" />
            </div>
            <h1 className="font-headline-lg text-headline-lg text-on-background tracking-tight text-center">
              {"\n        Let’s get to know you.\n      "}
            </h1>
            <p className="font-body-md text-body-md text-secondary mt-2 text-center max-w-[380px]">
              {"\n        A few details will help us tailor explanations to your learning background.\n      "}
            </p>
          </header>
          <div className="hidden w-full mt-6 p-3.5 rounded-xl bg-error-container/40 text-on-error-container flex items-center gap-3 transition-all duration-200" id="globalErrorBanner" role="alert">
            <span className="material-symbols-outlined text-[20px] text-error flex-shrink-0" aria-hidden="true">
              {"error"}
            </span>
            <span className="font-body-sm text-body-sm text-on-error-container font-medium">
              {"Couldn’t save your details. Please try again."}
            </span>
          </div>
          <form className="w-full mt-8 flex flex-col gap-[22px]" id="onboardingForm" noValidate={true}>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="fullName">
                {"\n          What should we call you?\n        "}
              </label>
              <div className="relative w-full">
                <input autoComplete="name" className="w-full h-[52px] px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-lg text-body-lg outline-none transition-all duration-150 shadow-sm focus:shadow-md" id="fullName" name="fullName" placeholder="Your name" style={{"boxShadow":"rgb(229, 229, 229) 0px 0px 0px 1px inset"}} type="text" />
              </div>
              <div className="hidden items-center gap-1.5 text-error mt-0.5" id="nameError" role="alert">
                <span className="material-symbols-outlined text-[16px] text-error flex-shrink-0" aria-hidden="true">
                  {"warning"}
                </span>
                <span className="font-body-sm text-body-sm text-error">
                  {"Enter the name you’d like us to use."}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full">
              <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="age">
                <span>
                  {"Age "}
                  <span className="font-body-sm text-body-sm text-secondary font-normal">
                    {"(Optional)"}
                  </span>
                </span>
              </label>
              <div className="relative w-full">
                <input className="w-full h-[52px] px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-lg text-body-lg outline-none transition-all duration-150 shadow-sm focus:shadow-md" id="age" inputMode="numeric" name="age" pattern="[0-9]*" placeholder="Enter your age" style={{"boxShadow":"rgb(229, 229, 229) 0px 0px 0px 1px inset"}} type="text" />
              </div>
              <div className="hidden items-center gap-1.5 text-error mt-0.5" id="ageError" role="alert">
                <span className="material-symbols-outlined text-[16px] text-error flex-shrink-0" aria-hidden="true">
                  {"warning"}
                </span>
                <span className="font-body-sm text-body-sm text-error">
                  {"Enter a valid age in years, or leave this blank."}
                </span>
              </div>
            </div>
            <div className="flex flex-col gap-2 w-full relative" id="educationContainer">
              <label className="font-label-md text-label-md text-on-surface" id="educationLabel">
                {"\n          Education level "}
                <span className="font-body-sm text-body-sm text-secondary font-normal">
                  {"(Optional)"}
                </span>
              </label>
              <button aria-expanded="false" aria-haspopup="listbox" aria-labelledby="educationLabel" className="w-full h-[52px] px-4 rounded-xl bg-surface-container-lowest text-on-surface font-body-lg text-body-lg flex items-center justify-between outline-none transition-all duration-150 group cursor-pointer text-left shadow-sm focus:shadow-md" id="educationToggle" style={{"boxShadow":"rgb(229, 229, 229) 0px 0px 0px 1px inset"}} type="button">
                <span className="text-secondary select-none" id="educationSelectedText">
                  {"Select your education level"}
                </span>
                <span className="material-symbols-outlined text-secondary text-[22px] transition-transform duration-200" id="chevronIcon" aria-hidden="true">
                  {"\n            keyboard_arrow_down\n          "}
                </span>
              </button>
              <div className="hidden absolute top-[82px] left-0 w-full bg-surface-container-lowest rounded-xl shadow-xl z-30 py-1.5 overflow-hidden transition-all duration-150 animate-in fade-in" id="educationMenu" role="listbox" style={{"boxShadow":"rgba(0, 0, 0, 0.08) 0px 4px 20px -2px, rgb(229, 229, 229) 0px 0px 0px 1px inset"}}>
                <button aria-selected="false" className="dropdown-item w-full px-4 py-2.5 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-val="School" role="option" type="button">
                  <span>
                    {"School"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary opacity-0 check-indicator" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button aria-selected="false" className="dropdown-item w-full px-4 py-2.5 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-val="Diploma" role="option" type="button">
                  <span>
                    {"Diploma"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary opacity-0 check-indicator" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button aria-selected="false" className="dropdown-item w-full px-4 py-2.5 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-val="Undergraduate" role="option" type="button">
                  <span>
                    {"Undergraduate"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary opacity-0 check-indicator" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button aria-selected="false" className="dropdown-item w-full px-4 py-2.5 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-val="Postgraduate" role="option" type="button">
                  <span>
                    {"Postgraduate"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary opacity-0 check-indicator" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button aria-selected="false" className="dropdown-item w-full px-4 py-2.5 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-val="Other" role="option" type="button">
                  <span>
                    {"Other"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary opacity-0 check-indicator" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button aria-selected="false" className="dropdown-item w-full px-4 py-2.5 text-left font-body-md text-body-md text-secondary hover:bg-surface-container-low hover:text-on-surface transition-colors flex items-center justify-between" data-val="Prefer not to say" role="option" type="button">
                  <span>
                    {"Prefer not to say"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] text-primary opacity-0 check-indicator" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col gap-1.5 w-full">
              <label className="font-label-md text-label-md text-on-surface" htmlFor="fieldOfStudy">
                {"\n          Course or field of study "}
                <span className="font-body-sm text-body-sm text-secondary font-normal">
                  {"(Optional)"}
                </span>
              </label>
              <div className="relative w-full">
                <input className="w-full h-[52px] px-4 rounded-xl bg-surface-container-lowest text-on-surface placeholder:text-secondary font-body-lg text-body-lg outline-none transition-all duration-150 shadow-sm focus:shadow-md" id="fieldOfStudy" name="fieldOfStudy" placeholder="e.g. Computer Science, Biology, Design" style={{"boxShadow":"rgb(229, 229, 229) 0px 0px 0px 1px inset"}} type="text" />
              </div>
              <p className="font-body-sm text-body-sm text-secondary mt-1">
                {"\n          Learning independently? Enter a subject you’re interested in.\n        "}
              </p>
            </div>
            <div className="pt-2 flex flex-col items-center w-full">
              <button className="w-full h-[52px] rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium tracking-normal transition-all duration-150 hover:bg-[#222222] active:bg-[#000000] flex items-center justify-center cursor-pointer shadow-sm select-none" id="submitBtn" style={{backgroundColor:"#111111",color:"#ffffff"}} type="submit">
                <span id="btnText" style={{color:"#ffffff"}}>
                  {"Continue"}
                </span>
                <span className="hidden spinner-quiet ml-2" id="btnSpinner">
                  <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3"></circle>
                    <path className="opacity-75" d="M4 12a8 8 0 018-8v3a5 5 0 00-5 5H4z" fill="currentColor"></path>
                  </svg>
                </span>
              </button>
              <p className="font-body-sm text-body-sm text-secondary mt-4 text-center">
                {"\n          You can update these details in Settings.\n        "}
              </p>
            </div>
          </form>
        </div>
        <aside className="fixed bottom-5 right-5 bg-surface-container-lowest/95 backdrop-blur-sm rounded-xl shadow-xl px-3 py-2 z-50 flex items-center gap-1.5 text-secondary" style={{"boxShadow":"rgba(0, 0, 0, 0.06) 0px 4px 16px, rgb(229, 229, 229) 0px 0px 0px 1px inset"}}>
          <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface font-semibold mr-1 select-none">
            {"State:"}
          </span>
          <button className="px-2 py-1 rounded font-label-sm text-label-sm font-medium bg-surface-container text-on-surface transition-all" id="previewDefault" type="button">
            {"Default"}
          </button>
          <button className="px-2 py-1 rounded font-label-sm text-label-sm font-medium hover:bg-surface-container-low transition-all" id="previewDropdown" type="button">
            {"Dropdown Open"}
          </button>
          <button className="px-2 py-1 rounded font-label-sm text-label-sm font-medium hover:bg-surface-container-low transition-all" id="previewValidationError" type="button">
            {"Validation Error"}
          </button>
          <button className="px-2 py-1 rounded font-label-sm text-label-sm font-medium hover:bg-surface-container-low transition-all" id="previewSaving" type="button">
            {"Saving"}
          </button>
          <button className="px-2 py-1 rounded font-label-sm text-label-sm font-medium hover:bg-surface-container-low transition-all" id="previewSaveError" type="button">
            {"Save Error"}
          </button>
        </aside>
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
