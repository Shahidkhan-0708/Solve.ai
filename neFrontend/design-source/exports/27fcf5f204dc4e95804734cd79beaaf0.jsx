'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/27fcf5f204dc4e95804734cd79beaaf0';
import './27fcf5f204dc4e95804734cd79beaaf0.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-27fcf5f204dc4e95804734cd79beaaf0 bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen" data-screen-id="27fcf5f204dc4e95804734cd79beaaf0">
    <header className="fixed top-0 w-full z-50 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] pt-safe">
      <div className="h-16 px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <button aria-label="Go back" className="w-11 h-11 flex items-center justify-center rounded-full text-on-surface hover:bg-surface-container-high transition-colors" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"arrow_back"}
            </span>
          </button>
          <h1 className="font-headline-sm text-headline-sm text-on-surface tracking-tight">
            {"Profile Settings"}
          </h1>
        </div>
        <div className="flex items-center gap-space-sm">
          <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
        </div>
      </div>
    </header>
    <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface px-margin">
      <div className="flex flex-col w-full pb-8">
        <div className="fixed top-20 left-1/2 -translate-x-1/2 z-50 transition-all duration-300 opacity-0 pointer-events-none -translate-y-2 flex items-center gap-space-sm px-space-md py-space-sm bg-primary text-on-primary rounded-xl shadow-md" id="saveToast">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            {"check_circle"}
          </span>
          <span className="font-label-md text-label-md">
            {"Profile updated successfully"}
          </span>
        </div>
        <div className="flex flex-col gap-space-md pt-space-xs pb-space-sm">
          <div>
            <p className="font-body-sm text-body-sm text-on-surface-variant">
              {"Manage profile, preferences & account settings"}
            </p>
          </div>
          <div className="flex items-center gap-space-xs overflow-x-auto no-scrollbar -mx-margin px-margin py-space-xs">
            <button className="category-chip px-space-md py-space-xs rounded-full bg-primary text-on-primary font-label-sm text-label-sm whitespace-nowrap transition-colors flex items-center gap-1.5 shadow-sm" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
              {"\n        Profile\n      "}
            </button>
            <button className="category-chip px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Learning\n      "}
            </button>
            <button className="category-chip px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Voice & Accessibility\n      "}
            </button>
            <button className="category-chip px-space-md py-space-xs rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm whitespace-nowrap transition-colors" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Account\n      "}
            </button>
          </div>
        </div>
        <div className="flex flex-col gap-space-lg mt-space-sm">
          <section className="flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm" id="profile-section">
            <div className="flex items-start justify-between pb-space-md mb-space-md bg-surface-container-low -mx-space-md -mt-space-md p-space-md rounded-t-xl">
              <div className="flex flex-col">
                <div className="flex items-center gap-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                    {"person"}
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Your profile"}
                  </h2>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                  {"Keep your learning background up to date."}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-primary-container text-on-primary flex items-center justify-center font-label-md text-label-md">
                {"\n          AR\n        "}
              </div>
            </div>
            <form className="flex flex-col gap-space-md" id="profileForm" onSubmit={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="fullName">
                  {"What should we call you?"}
                </label>
                <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-sm outline-none focus:bg-surface-container transition-all" id="fullName" type="text" defaultValue="Alex Rivera" />
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="userAge">
                  {"Age "}
                  <span className="text-on-surface-variant font-normal">
                    {"(Optional)"}
                  </span>
                </label>
                <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-sm outline-none focus:bg-surface-container transition-all" id="userAge" type="number" defaultValue="21" />
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface">
                  {"Education level "}
                  <span className="text-on-surface-variant font-normal">
                    {"(Optional)"}
                  </span>
                </label>
                <div className="grid grid-cols-2 gap-space-xs mt-0.5">
                  <button className="edu-pill flex items-center justify-center py-2.5 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm transition-colors" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              High School\n            "}
                  </button>
                  <button className="edu-pill flex items-center justify-center py-2.5 px-space-sm rounded-lg bg-primary text-on-primary font-body-sm text-body-sm transition-colors shadow-sm" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Undergraduate\n            "}
                  </button>
                  <button className="edu-pill flex items-center justify-center py-2.5 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Graduate / Ph.D.\n            "}
                  </button>
                  <button className="edu-pill flex items-center justify-center py-2.5 px-space-sm rounded-lg bg-surface-container-low text-on-surface font-body-sm text-body-sm transition-colors" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Self-Learner\n            "}
                  </button>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="fieldOfStudy">
                  {"Course or field of study "}
                  <span className="text-on-surface-variant font-normal">
                    {"(Optional)"}
                  </span>
                </label>
                <input className="w-full bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md py-space-sm outline-none focus:bg-surface-container transition-all" id="fieldOfStudy" type="text" defaultValue="Computer Science & Cognitive Systems" />
              </div>
              <div className="flex flex-col gap-space-sm pt-space-xs">
                <button className="w-full h-11 flex items-center justify-center rounded-xl bg-primary text-on-primary font-label-md text-label-md transition-opacity active:opacity-90" type="submit">
                  {"\n            Save changes\n          "}
                </button>
                <button className="w-full h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md hover:bg-surface-container transition-colors" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n            Cancel\n          "}
                </button>
              </div>
            </form>
          </section>
          <section className="flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm" id="learning-section">
            <div className="flex flex-col pb-space-md mb-space-md bg-surface-container-low -mx-space-md -mt-space-md p-space-md rounded-t-xl">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                  {"psychology_alt"}
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  {"Learning preferences"}
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {"Set your defaults across conversations."}
              </p>
            </div>
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="interfaceLang">
                  {"Interface language"}
                </label>
                <div className="relative">
                  <select className="w-full h-11 appearance-none bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md pr-10 outline-none" id="interfaceLang">
                    <option selected="">
                      {"English (UK/US)"}
                    </option>
                    <option>
                      {"Deutsch"}
                    </option>
                    <option>
                      {"Français"}
                    </option>
                    <option>
                      {"Español"}
                    </option>
                    <option>
                      {"日本語"}
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface" htmlFor="explanationLang">
                  {"Explanation language"}
                </label>
                <div className="relative">
                  <select className="w-full h-11 appearance-none bg-surface-container-low text-on-surface font-body-md text-body-md rounded-lg px-space-md pr-10 outline-none" id="explanationLang">
                    <option selected="">
                      {"Follow my messages (Recommended)"}
                    </option>
                    <option>
                      {"Always English"}
                    </option>
                    <option>
                      {"Simplified Native"}
                    </option>
                  </select>
                  <span className="material-symbols-outlined absolute right-3 top-1/2 -translate-y-1/2 text-on-surface-variant pointer-events-none text-[20px]" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface">
                  {"Explanation detail"}
                </label>
                <div className="grid grid-cols-3 p-1 rounded-xl bg-surface-container-low">
                  <button className="detail-segment py-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant text-center transition-all" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Concise\n            "}
                  </button>
                  <button className="detail-segment py-2 rounded-lg font-label-sm text-label-sm bg-surface-container-lowest text-on-surface font-semibold shadow-sm text-center transition-all" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Balanced\n            "}
                  </button>
                  <button className="detail-segment py-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant text-center transition-all" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Detailed\n            "}
                  </button>
                </div>
              </div>
              <div className="flex items-start gap-space-sm p-space-sm rounded-lg bg-surface-container-low text-on-surface-variant">
                <span className="material-symbols-outlined text-[18px] text-on-surface mt-0.5" aria-hidden="true">
                  {"info"}
                </span>
                <p className="font-body-sm text-body-sm leading-relaxed">
                  {"SOLVE uses goal context in each chat session. Existing study paths and saved plans are not altered."}
                </p>
              </div>
            </div>
          </section>
          <section className="flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm" id="voice-section">
            <div className="flex flex-col pb-space-md mb-space-md bg-surface-container-low -mx-space-md -mt-space-md p-space-md rounded-t-xl">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                  {"record_voice_over"}
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  {"Voice & accessibility"}
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {"Fine-tune audio pace and visual comforts."}
              </p>
            </div>
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface">
                  {"Playback speed"}
                </label>
                <div className="grid grid-cols-4 gap-space-xs">
                  <button className="speed-btn h-11 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              0.75×\n            "}
                  </button>
                  <button className="speed-btn h-11 flex items-center justify-center rounded-lg bg-primary text-on-primary font-label-sm text-label-sm shadow-sm" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              1×\n            "}
                  </button>
                  <button className="speed-btn h-11 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              1.25×\n            "}
                  </button>
                  <button className="speed-btn h-11 flex items-center justify-center rounded-lg bg-surface-container-low text-on-surface font-label-sm text-label-sm" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              1.5×\n            "}
                  </button>
                </div>
              </div>
              <div className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low">
                <div className="flex items-center gap-space-sm pr-space-xs">
                  <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                    {"mic"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface leading-tight">
                    {"Microphone requested when recording."}
                  </span>
                </div>
                <button className="shrink-0 px-space-sm py-1.5 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm hover:bg-surface-container-high transition-colors" id="micTestBtn" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n            Test mic\n          "}
                </button>
              </div>
              <div className="flex flex-col gap-space-xs">
                <label className="font-label-md text-label-md text-on-surface">
                  {"Motion"}
                </label>
                <div className="flex flex-col gap-space-xs">
                  <label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {"Follow device settings"}
                    </span>
                    <input defaultChecked className="w-4 h-4 accent-primary" name="motionPreference" type="radio" defaultValue="device" />
                  </label>
                  <label className="flex items-center justify-between p-space-sm rounded-lg bg-surface-container-low cursor-pointer">
                    <span className="font-body-sm text-body-sm text-on-surface">
                      {"Reduce motion"}
                    </span>
                    <input className="w-4 h-4 accent-primary" name="motionPreference" type="radio" defaultValue="reduced" />
                  </label>
                </div>
              </div>
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between">
                  <label className="font-label-md text-label-md text-on-surface">
                    {"Reading text size"}
                  </label>
                  <span className="font-label-sm text-label-sm text-on-surface-variant" id="readingSizeLabel">
                    {"Standard"}
                  </span>
                </div>
                <div className="grid grid-cols-2 p-1 rounded-xl bg-surface-container-low">
                  <button className="text-size-btn py-2 rounded-lg font-label-sm text-label-sm bg-surface-container-lowest text-on-surface font-semibold shadow-sm text-center" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Standard\n            "}
                  </button>
                  <button className="text-size-btn py-2 rounded-lg font-label-sm text-label-sm text-on-surface-variant text-center" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n              Large\n            "}
                  </button>
                </div>
                <div className="mt-space-xs p-space-md rounded-lg bg-surface-container-low flex items-center justify-center text-center">
                  <p className="font-body-sm text-body-sm text-on-surface italic transition-all duration-200" id="previewText">
                    {"\n              “Learning becomes easier when each step is clear.”\n            "}
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="flex flex-col bg-surface-container-lowest rounded-xl p-space-md shadow-sm" id="account-section">
            <div className="flex flex-col pb-space-md mb-space-md bg-surface-container-low -mx-space-md -mt-space-md p-space-md rounded-t-xl">
              <div className="flex items-center gap-space-xs">
                <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                  {"account_circle"}
                </span>
                <h2 className="font-headline-sm text-headline-sm text-on-surface">
                  {"Account"}
                </h2>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                {"Authentication & active session"}
              </p>
            </div>
            <div className="flex flex-col gap-space-md">
              <div className="flex flex-col gap-space-xs">
                <div className="flex items-center justify-between py-2 border-b-0">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Email"}
                  </span>
                  <span className="font-label-md text-label-md text-on-surface">
                    {"alex.rivera@example.edu"}
                  </span>
                </div>
                <div className="flex items-center justify-between py-2 border-b-0">
                  <span className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Method"}
                  </span>
                  <div className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[16px] text-on-surface" aria-hidden="true">
                      {"token"}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {"Google Account"}
                    </span>
                  </div>
                </div>
              </div>
              <button className="w-full h-11 flex items-center justify-center gap-space-xs rounded-xl bg-surface-container-low text-error font-label-md text-label-md hover:bg-error-container hover:text-on-error-container transition-colors" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"logout"}
                </span>
                {"\n          Sign out\n        "}
              </button>
            </div>
          </section>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/80 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold">
      <div className="flex justify-around items-center h-16 px-gutter">
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="mentor" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"psychology"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Mentor"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="plan" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"event_note"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Plan"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"insights"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Graph"}
          </span>
        </a>
        <a className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs text-on-surface-variant hover:text-on-surface transition-colors" data-path="status" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"donut_large"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Status"}
          </span>
        </a>
        <a aria-current="page" className="flex flex-col items-center justify-center min-w-[44px] min-h-[44px] gap-space-xs transition-colors text-primary font-semibold" data-path="profile-settings" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"tune"}
          </span>
          <span className="font-label-sm text-label-sm">
            {"Settings"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
