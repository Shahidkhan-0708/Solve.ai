'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/ce4e2a146c64416d9fc65c159f0b963a';
import './ce4e2a146c64416d9fc65c159f0b963a.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-ce4e2a146c64416d9fc65c159f0b963a h-full bg-white text-solvePrimary antialiased selection:bg-neutral-100" data-screen-id="ce4e2a146c64416d9fc65c159f0b963a">
    <div className="min-h-screen w-full max-w-[390px] mx-auto flex flex-col justify-between px-6 py-12">
      <header className="pt-6 sm:pt-10 flex flex-col items-center" data-purpose="brand-header">
        <img alt="SOLVE" className="w-[160px] h-auto object-contain mx-auto mb-8 transition-opacity duration-300" src="/assets/ddbb0037659215ce.png" />
      </header>
      <main className="flex flex-col items-center flex-grow justify-center my-auto" data-purpose="authentication-content">
        <div className="flex flex-col w-full">
          <div className="flex items-center justify-between mb-4 px-1">
            <div className="flex items-center space-x-1.5">
              <span className="w-6 h-1 rounded-full bg-primary"></span>
              <span className="w-2 h-1 rounded-full bg-surface-container-high"></span>
              <span className="w-2 h-1 rounded-full bg-surface-container-high"></span>
            </div>
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
              {"Step 1 of 3"}
            </span>
          </div>
          <div className="flex flex-col items-center text-center">
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
              {"\n      Let’s get to know you.\n    "}
            </h1>
            <p className="font-body-md text-body-md text-secondary mt-2 max-w-[320px] leading-relaxed">
              {"\n      A few details will help us tailor explanations to your learning background.\n    "}
            </p>
          </div>
          <form className="flex flex-col space-y-5 mt-6" id="onboardingForm" onSubmit={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
            <div className="flex flex-col space-y-1.5">
              <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="fullName">
                <span>
                  {"What should we call you?"}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Required"}
                </span>
              </label>
              <div className="relative">
                <input autocomplete="name" className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md transition-all duration-200 outline-none focus:bg-surface-container-lowest focus:shadow-sm" id="fullName" placeholder="Your name" type="text" />
              </div>
              <div className="hidden flex items-center space-x-1.5 pt-0.5 text-error" id="nameError">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"error"}
                </span>
                <span className="font-label-sm text-label-sm">
                  {"Please tell us your name to personalize your mentor"}
                </span>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="userAge">
                <span>
                  {"Age"}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Optional"}
                </span>
              </label>
              <input className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md transition-all duration-200 outline-none focus:bg-surface-container-lowest focus:shadow-sm" id="userAge" inputmode="numeric" maxlength="3" pattern="[0-9]*" placeholder="Enter your age" type="text" />
            </div>
            <div className="flex flex-col space-y-1.5 relative">
              <label className="font-label-md text-label-md text-on-surface flex items-center justify-between">
                <span>
                  {"Education level"}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Optional"}
                </span>
              </label>
              <button aria-expanded="false" aria-haspopup="listbox" className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-left flex items-center justify-between transition-all duration-200 outline-none hover:bg-surface-container focus:bg-surface-container-lowest focus:shadow-sm" id="educationTrigger" type="button">
                <span className="font-body-md text-body-md text-outline truncate" id="selectedEducation">
                  {"Select your education level"}
                </span>
                <span className="material-symbols-outlined text-secondary transition-transform duration-200 text-[20px]" id="dropdownChevron" aria-hidden="true">
                  {"expand_more"}
                </span>
              </button>
              <div className="hidden absolute z-30 top-[80px] inset-x-0 bg-surface-container-lowest rounded-xl shadow-xl overflow-hidden py-1 transition-all duration-150" id="educationMenu" role="listbox">
                <button className="edu-option w-full px-4 py-3 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-value="School" role="option" type="button">
                  <span>
                    {"School"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-0 text-primary checkmark" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button className="edu-option w-full px-4 py-3 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-value="Diploma" role="option" type="button">
                  <span>
                    {"Diploma"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-0 text-primary checkmark" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button className="edu-option w-full px-4 py-3 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-value="Undergraduate" role="option" type="button">
                  <span>
                    {"Undergraduate"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-0 text-primary checkmark" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button className="edu-option w-full px-4 py-3 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-value="Postgraduate" role="option" type="button">
                  <span>
                    {"Postgraduate"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-0 text-primary checkmark" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button className="edu-option w-full px-4 py-3 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-value="Other" role="option" type="button">
                  <span>
                    {"Other"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-0 text-primary checkmark" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
                <button className="edu-option w-full px-4 py-3 text-left font-body-md text-body-md text-on-surface hover:bg-surface-container-low transition-colors flex items-center justify-between" data-value="Prefer not to say" role="option" type="button">
                  <span>
                    {"Prefer not to say"}
                  </span>
                  <span className="material-symbols-outlined text-[18px] opacity-0 text-primary checkmark" aria-hidden="true">
                    {"check"}
                  </span>
                </button>
              </div>
            </div>
            <div className="flex flex-col space-y-1.5">
              <label className="font-label-md text-label-md text-on-surface flex items-center justify-between" htmlFor="studyField">
                <span>
                  {"Course or field of study"}
                </span>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Optional"}
                </span>
              </label>
              <input className="w-full h-[52px] px-4 rounded-xl bg-surface-container-low text-on-surface placeholder:text-outline text-body-md font-body-md transition-all duration-200 outline-none focus:bg-surface-container-lowest focus:shadow-sm" id="studyField" placeholder="e.g. Computer Science, Biology, Design" type="text" />
              <p className="font-body-sm text-body-sm text-secondary pt-0.5 leading-relaxed">
                {"\n        Learning independently? Enter a subject you’re interested in.\n      "}
              </p>
            </div>
            <div className="pt-2">
              <button className="w-full h-[52px] rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center justify-center space-x-2 transition-transform duration-100 active:scale-[0.985] shadow-sm hover:opacity-95" id="submitButton" type="button">
                <span className="hidden animate-spin rounded-full h-4 w-4 border-2 border-on-primary border-t-transparent" id="submitSpinner"></span>
                <span id="submitLabel">
                  {"Continue"}
                </span>
                <span className="material-symbols-outlined text-[18px]" id="submitArrow" aria-hidden="true">
                  {"arrow_forward"}
                </span>
              </button>
              <p className="font-label-sm text-label-sm text-secondary text-center mt-3 mb-4 select-none">
                {"\n        You can update these details anytime in Settings.\n      "}
              </p>
            </div>
          </form>
          <div className="mt-4 p-3 bg-surface-container rounded-xl flex flex-col space-y-2">
            <div className="flex items-center justify-between">
              <span className="font-label-sm text-label-sm text-on-surface-variant font-medium">
                {"UX State Preview"}
              </span>
              <span className="font-code text-code text-secondary">
                {"Mock controls"}
              </span>
            </div>
            <div className="grid grid-cols-4 gap-1.5">
              <button className="px-2 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm text-center shadow-xs transition-colors hover:bg-surface-container-high" id="stateDefault" type="button">
                {"\n        Default\n      "}
              </button>
              <button className="px-2 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm text-center shadow-xs transition-colors hover:bg-surface-container-high" id="stateDropdown" type="button">
                {"\n        Dropdown\n      "}
              </button>
              <button className="px-2 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm text-center shadow-xs transition-colors hover:bg-surface-container-high" id="stateError" type="button">
                {"\n        Error\n      "}
              </button>
              <button className="px-2 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface font-label-sm text-label-sm text-center shadow-xs transition-colors hover:bg-surface-container-high" id="stateSaving" type="button">
                {"\n        Saving\n      "}
              </button>
            </div>
          </div>
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
