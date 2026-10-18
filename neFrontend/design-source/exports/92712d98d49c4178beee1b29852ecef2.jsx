'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/92712d98d49c4178beee1b29852ecef2';
import './92712d98d49c4178beee1b29852ecef2.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-92712d98d49c4178beee1b29852ecef2 bg-background font-body-md text-on-surface antialiased" data-screen-id="92712d98d49c4178beee1b29852ecef2">
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between p-space-md">
      <div className="flex flex-col gap-space-md">
        <div className="flex items-center justify-between px-space-xs py-space-xs">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 bg-primary text-on-primary rounded-lg flex items-center justify-center font-headline-sm text-headline-sm font-semibold tracking-tight">
              {"S"}
            </div>
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface font-semibold">
              {"SOLVE"}
            </span>
          </div>
          <span className="font-code text-code text-secondary uppercase px-space-xs py-0.5 bg-surface-container rounded">
            {"v2.4"}
          </span>
        </div>
        <div className="p-1 bg-surface-container rounded-lg flex items-center gap-1">
          <button className="flex-1 flex items-center justify-center gap-space-xs py-1.5 rounded bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-label-sm text-label-sm transition-all" type="button">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              {"chat_bubble"}
            </span>
            <span>
              {"Chat"}
            </span>
          </button>
          <button className="flex-1 flex items-center justify-center gap-space-xs py-1.5 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" type="button">
            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
              {"menu_book"}
            </span>
            <span>
              {"Study"}
            </span>
          </button>
        </div>
        <div className="flex flex-col gap-space-xs">
          <span className="font-label-sm text-label-sm text-secondary px-space-xs uppercase tracking-wider">
            {"Workspace"}
          </span>
          <nav className="flex flex-col gap-0.5" data-active-classes="bg-surface-container-high text-on-surface font-medium">
            <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="active-session" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"play_circle"}
              </span>
              <span>
                {"Active Session"}
              </span>
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="my-plan-and-strategy" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"route"}
              </span>
              <span>
                {"My Plan & Strategy"}
              </span>
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="target-status" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"track_changes"}
              </span>
              <span>
                {"Target Status"}
              </span>
            </a>
            <a className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors font-label-md text-label-md" data-path="knowledge-graph" href="#">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"hub"}
              </span>
              <span>
                {"Knowledge Graph"}
              </span>
            </a>
          </nav>
        </div>
        <div className="flex flex-col gap-space-xs pt-space-xs">
          <div className="flex items-center justify-between px-space-xs">
            <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
              {"Recent History"}
            </span>
            <span className="material-symbols-outlined text-[16px] text-secondary cursor-pointer hover:text-on-surface" aria-hidden="true">
              {"history"}
            </span>
          </div>
          <div className="flex flex-col gap-0.5">
            <a className="px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface truncate font-body-sm text-body-sm transition-colors" data-path="linear-algebra-tensors" href="#">
              {"Linear Algebra: Tensor Operations"}
            </a>
            <a className="px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface truncate font-body-sm text-body-sm transition-colors" data-path="attention-mechanisms" href="#">
              {"Attention Mechanisms in Transformers"}
            </a>
            <a className="px-space-sm py-1.5 rounded text-on-surface-variant hover:bg-surface-container hover:text-on-surface truncate font-body-sm text-body-sm transition-colors" data-path="gradient-descent-optimizers" href="#">
              {"Gradient Descent & Optimizers"}
            </a>
          </div>
        </div>
      </div>
      <div className="pt-space-md">
        <nav className="flex flex-col gap-1" data-active-classes="bg-surface-container-high text-on-surface font-medium">
          <a aria-current="page" className="flex items-center justify-between p-space-xs rounded-xl transition-colors bg-surface-container-high text-on-surface font-medium" data-path="profile-and-settings" href="#">
            <div className="flex items-center gap-space-sm">
              <div className="w-9 h-9 rounded-full bg-surface-container-highest text-on-surface flex items-center justify-center font-label-md text-label-md font-semibold">
                {"AR"}
              </div>
              <div className="flex flex-col">
                <span className="font-label-md text-label-md text-on-surface font-medium leading-none">
                  {"Alex Rivera"}
                </span>
                <span className="font-body-sm text-body-sm text-secondary leading-tight mt-0.5">
                  {"Mastery Member"}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
              {"settings"}
            </span>
          </a>
        </nav>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-xl">
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-space-xs text-secondary font-label-sm text-label-sm">
            <span className="hover:text-on-surface transition-colors cursor-pointer">
              {"Preferences"}
            </span>
            <span>
              {"/"}
            </span>
            <span className="text-on-surface font-medium">
              {"Settings & Profile"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-lg">
          <nav className="flex items-center gap-space-lg" data-active-classes="text-on-surface font-medium border-b-2 border-primary">
            <a aria-current="page" className="py-1 transition-colors text-on-surface font-medium border-b-2 border-primary" data-path="profile-and-settings" href="#">
              {"General"}
            </a>
            <a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1 transition-colors" data-path="learning-models" href="#">
              {"AI Mentorship"}
            </a>
            <a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1 transition-colors" data-path="knowledge-vault" href="#">
              {"Data & Vault"}
            </a>
            <a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1 transition-colors" data-path="subscription-plan" href="#">
              {"Billing"}
            </a>
          </nav>
          <div className="flex items-center gap-space-sm pl-space-md">
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"search"}
              </span>
            </button>
            <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"notifications"}
              </span>
            </button>
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
          </div>
        </div>
      </header>
      <main className="relative pt-16 w-full min-h-screen bg-background">
        <div className="flex flex-col w-full">
          <div className="sticky top-0 z-30 w-full bg-surface-container-low px-space-xl py-space-sm flex flex-wrap items-center justify-between gap-space-md shadow-sm">
            <div className="flex items-center gap-space-sm">
              <span className="font-code text-code text-secondary uppercase tracking-wider">
                {"Preview State:"}
              </span>
              <div className="flex items-center gap-1 bg-surface-container rounded-lg p-0.5">
                <button className="px-space-sm py-1 rounded text-on-surface bg-surface-container-lowest shadow-sm font-label-sm text-label-sm transition-all" id="demo-tab-profile" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"1. Profile (Active)"}
                </button>
                <button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" id="demo-tab-learning" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"2. Learning Prefs"}
                </button>
                <button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" id="demo-tab-voice" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"3. Voice & Access"}
                </button>
                <button className="px-space-sm py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" id="demo-tab-account" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"4. Account"}
                </button>
              </div>
            </div>
            <div className="flex items-center gap-space-sm">
              <button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"warning"}
                </span>
                <span>
                  {"5. Unsaved Modal"}
                </span>
              </button>
              <button className="px-space-sm py-1 rounded bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-sm text-label-sm transition-colors flex items-center gap-1" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"check_circle"}
                </span>
                <span>
                  {"6. Saved Toast"}
                </span>
              </button>
            </div>
          </div>
          <div className="w-full max-w-7xl mx-auto px-space-xl py-space-xl flex flex-col gap-space-2xl">
            <div className="flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <a className="inline-flex items-center gap-space-xs px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" href="#">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"arrow_back"}
                  </span>
                  <span>
                    {"Back to workspace "}
                    <span className="text-secondary">
                      {"(Chat · Data Structures mid prep)"}
                    </span>
                  </span>
                </a>
                <div className="flex items-center gap-space-md">
                  <img alt="SOLVE System Identity" className="h-6 w-auto object-contain opacity-80" src="/assets/6f1e54a03f1a3377.png" />
                  <span className="font-code text-code text-secondary bg-surface-container-high px-2 py-0.5 rounded">
                    {"ID: AR-9082"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col gap-1 pt-space-xs">
                <h1 className="font-headline-lg text-headline-lg text-on-surface font-semibold tracking-tight">
                  {"Settings"}
                </h1>
                <p className="font-body-md text-body-md text-secondary">
                  {"Manage your profile, learning preferences, and accessibility defaults across SOLVE."}
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-xl items-start">
              <aside className="lg:col-span-3 flex flex-col gap-space-md sticky top-20 bg-surface-container-lowest p-space-md rounded-xl shadow-sm">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary px-2">
                  {"Settings Menu"}
                </span>
                <nav className="flex flex-col gap-1" id="settings-nav">
                  <button className="nav-item w-full flex items-center justify-between px-space-sm py-2 rounded-lg bg-primary text-on-primary font-label-md text-label-md transition-all text-left" data-nav="profile" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"person"}
                      </span>
                      <span>
                        {"Profile"}
                      </span>
                    </span>
                    <span className="material-symbols-outlined text-[16px] opacity-70" aria-hidden="true">
                      {"chevron_right"}
                    </span>
                  </button>
                  <button className="nav-item w-full flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-all text-left" data-nav="learning" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"psychology"}
                      </span>
                      <span>
                        {"Learning preferences"}
                      </span>
                    </span>
                  </button>
                  <button className="nav-item w-full flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-all text-left" data-nav="voice" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"record_voice_over"}
                      </span>
                      <span>
                        {"Voice & accessibility"}
                      </span>
                    </span>
                  </button>
                  <button className="nav-item w-full flex items-center justify-between px-space-sm py-2 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface font-label-md text-label-md transition-all text-left" data-nav="account" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"badge"}
                      </span>
                      <span>
                        {"Account"}
                      </span>
                    </span>
                  </button>
                </nav>
                <div className="h-[1px] bg-surface-container-high my-space-xs"></div>
                <button className="flex items-center gap-space-sm px-space-sm py-2 rounded-lg text-secondary hover:text-error hover:bg-surface-container transition-colors font-label-md text-label-md text-left" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"logout"}
                  </span>
                  <span>
                    {"Sign out"}
                  </span>
                </button>
                <div className="mt-space-md p-space-sm bg-surface-container-low rounded-lg flex flex-col gap-1">
                  <span className="font-code text-code text-secondary">
                    {"ACTIVE PROTOCOL"}
                  </span>
                  <p className="font-body-sm text-body-sm text-on-surface">
                    {"Precision Monochrome v2.4"}
                  </p>
                  <span className="font-label-sm text-label-sm text-secondary">
                    {"Isolated per session"}
                  </span>
                </div>
              </aside>
              <main className="lg:col-span-9 flex flex-col gap-space-xl max-w-[720px] w-full">
                <section className="settings-section flex flex-col gap-space-lg bg-surface-container-lowest p-space-xl rounded-xl shadow-sm" id="section-profile">
                  <div className="flex items-start justify-between pb-space-sm border-b-0">
                    <div className="flex flex-col gap-0.5">
                      <div className="flex items-center gap-space-xs">
                        <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                          {"Your profile"}
                        </h2>
                        <span className="px-2 py-0.5 rounded-full bg-surface-container text-secondary font-code text-code">
                          {"CORE"}
                        </span>
                      </div>
                      <p className="font-body-md text-body-md text-secondary">
                        {"Keep your learning background up to date."}
                      </p>
                    </div>
                    <div className="w-12 h-12 rounded-full bg-surface-container flex items-center justify-center font-headline-sm text-headline-sm font-semibold text-on-surface">
                      {"\n              AR\n            "}
                    </div>
                  </div>
                  <form className="flex flex-col gap-space-lg" id="profile-form" onSubmit={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                    <div className="flex flex-col gap-space-xs">
                      <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="preferred-name">
                        {"What should we call you?"}
                      </label>
                      <input className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none transition-all" id="preferred-name" onInput={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="text" defaultValue="Alex Rivera" />
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"Used by your AI mentor during dialogues and contextual coaching."}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="age-input">
                          {"Age"}
                        </label>
                        <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          {"Optional"}
                        </span>
                      </div>
                      <div className="relative w-36">
                        <input className="w-full px-space-md py-2 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none transition-all" id="age-input" max="120" min="12" onInput={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="number" defaultValue="21" />
                      </div>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"Helps calibrate contextual analogies and career pacing."}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-medium">
                          {"Education level"}
                        </label>
                        <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          {"Optional"}
                        </span>
                      </div>
                      <div className="flex flex-wrap gap-2 pt-1" id="education-pills">
                        <button className="edu-pill px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"School"}
                        </button>
                        <button className="edu-pill px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Diploma"}
                        </button>
                        <button className="edu-pill active px-space-md py-1.5 rounded-full bg-primary text-on-primary font-label-sm text-label-sm transition-all shadow-sm" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Undergraduate (Selected)"}
                        </button>
                        <button className="edu-pill px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Postgraduate"}
                        </button>
                        <button className="edu-pill px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Other"}
                        </button>
                        <button className="edu-pill px-space-md py-1.5 rounded-full bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Prefer not to say"}
                        </button>
                      </div>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <div className="flex items-center justify-between">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="course-input">
                          {"Course or field of study"}
                        </label>
                        <span className="font-label-sm text-label-sm text-secondary bg-surface-container px-2 py-0.5 rounded-full">
                          {"Optional"}
                        </span>
                      </div>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"You can enter a subject you’re learning independently."}
                      </span>
                      <input className="w-full px-space-md py-2.5 rounded-lg bg-surface-container-low text-on-surface font-body-md text-body-md focus:bg-surface-container-lowest focus:ring-1 focus:ring-primary outline-none transition-all" id="course-input" onInput={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="text" defaultValue="Computer Science & Cognitive Systems" />
                    </div>
                    <div className="pt-space-md flex flex-wrap items-center justify-between gap-space-md bg-surface-container-low p-space-md rounded-xl">
                      <div className="flex items-center gap-space-sm">
                        <button className="px-space-lg py-2.5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-primary-container hover:text-on-primary transition-all shadow-sm flex items-center gap-2" id="save-profile-btn" type="submit">
                          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                            {"save"}
                          </span>
                          <span>
                            {"Save changes"}
                          </span>
                        </button>
                        <button className="px-space-md py-2.5 rounded-xl bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"\n                  Cancel\n                "}
                        </button>
                      </div>
                      <div className="flex items-center gap-1.5 text-secondary font-label-sm text-label-sm" id="profile-status-message">
                        <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                          {"check_circle"}
                        </span>
                        <span>
                          {"Profile updated"}
                        </span>
                      </div>
                    </div>
                  </form>
                </section>
                <section className="settings-section flex flex-col gap-space-lg bg-surface-container-lowest p-space-xl rounded-xl shadow-sm" id="section-learning">
                  <div className="flex flex-col gap-0.5 pb-space-sm">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                      {"Learning preferences"}
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      {"Set your defaults. You can ask SOLVE for something different in any conversation."}
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                      {"Language Settings"}
                    </span>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                      <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="interface-lang">
                          {"Interface language"}
                        </label>
                        <p className="font-body-sm text-body-sm text-secondary min-h-[36px]">
                          {"The language used for menus, buttons, and navigation controls."}
                        </p>
                        <div className="relative mt-space-xs">
                          <select className="w-full appearance-none px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer" id="interface-lang">
                            <option selected="">
                              {"English (UK/US)"}
                            </option>
                            <option>
                              {"Français"}
                            </option>
                            <option>
                              {"Deutsch"}
                            </option>
                            <option>
                              {"Español"}
                            </option>
                            <option>
                              {"日本語"}
                            </option>
                          </select>
                          <span className="material-symbols-outlined pointer-events-none absolute right-3 top-2.5 text-[18px] text-secondary" aria-hidden="true">
                            {"expand_more"}
                          </span>
                        </div>
                      </div>
                      <div className="flex flex-col gap-space-xs p-space-md rounded-xl bg-surface-container-low">
                        <label className="font-label-md text-label-md text-on-surface font-medium" htmlFor="explanation-lang">
                          {"Explanation language"}
                        </label>
                        <p className="font-body-sm text-body-sm text-secondary min-h-[36px]">
                          {"The language SOLVE uses when teaching or answering."}
                        </p>
                        <div className="relative mt-space-xs">
                          <select className="w-full appearance-none px-space-md py-2 rounded-lg bg-surface-container text-on-surface font-body-sm text-body-sm focus:outline-none cursor-pointer" id="explanation-lang">
                            <option selected="">
                              {"Follow my messages (Recommended)"}
                            </option>
                            <option>
                              {"English"}
                            </option>
                            <option>
                              {"Simplified Technical English"}
                            </option>
                            <option>
                              {"Dual Bilingual Notation"}
                            </option>
                          </select>
                          <span className="material-symbols-outlined pointer-events-none absolute right-3 top-2.5 text-[18px] text-secondary" aria-hidden="true">
                            {"expand_more"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-space-xs px-space-sm text-secondary">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"info"}
                      </span>
                      <span className="font-body-sm text-body-sm">
                        {"Changing explanation language applies to future responses. Previous messages are preserved."}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <div className="flex flex-col">
                      <label className="font-label-md text-label-md text-on-surface font-medium">
                        {"Default explanation detail"}
                      </label>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"You can ask for more or less detail at any time during active sessions."}
                      </span>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-space-sm pt-1" id="detail-cards">
                      <button className="detail-card text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-sm" onClick={event => { const result = actions.current[22]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"Concise"}
                          </span>
                          <span className="radio-indicator w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center"></span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          {"Direct derivations and formulas. Skips analogies and peripheral theorems."}
                        </p>
                      </button>
                      <button className="detail-card active text-left p-space-md rounded-xl bg-primary text-on-primary transition-all flex flex-col justify-between gap-space-sm shadow-sm" onClick={event => { const result = actions.current[23]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-label-md text-label-md font-semibold text-on-primary">
                            {"Balanced (Default)"}
                          </span>
                          <span className="radio-indicator w-4 h-4 rounded-full bg-surface-container-lowest flex items-center justify-center">
                            <span className="w-2 h-2 rounded-full bg-primary"></span>
                          </span>
                        </div>
                        <p className="font-body-sm text-body-sm text-primary-fixed">
                          {"Step-by-step reasoning with structural intuitions and concise code snippets."}
                        </p>
                      </button>
                      <button className="detail-card text-left p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col justify-between gap-space-sm" onClick={event => { const result = actions.current[24]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <div className="flex items-center justify-between w-full">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"Detailed"}
                          </span>
                          <span className="radio-indicator w-4 h-4 rounded-full bg-surface-container-highest flex items-center justify-center"></span>
                        </div>
                        <p className="font-body-sm text-body-sm text-secondary">
                          {"Deep foundational proofs, counterexamples, edge cases, and visual diagrams."}
                        </p>
                      </button>
                    </div>
                  </div>
                  <div className="p-space-md rounded-xl bg-surface-container-low flex items-start gap-space-sm">
                    <span className="material-symbols-outlined text-[20px] text-secondary mt-0.5" aria-hidden="true">
                      {"lightbulb"}
                    </span>
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        {"Personalisation note"}
                      </span>
                      <p className="font-body-sm text-body-sm text-secondary">
                        {"SOLVE also uses the goal and context you share in each conversation. These preferences establish baseline defaults and do not replace task-specific questions."}
                      </p>
                    </div>
                  </div>
                </section>
                <section className="settings-section flex flex-col gap-space-lg bg-surface-container-lowest p-space-xl rounded-xl shadow-sm" id="section-voice">
                  <div className="flex items-start justify-between pb-space-sm">
                    <div className="flex flex-col gap-0.5">
                      <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                        {"Voice and accessibility"}
                      </h2>
                      <p className="font-body-md text-body-md text-secondary">
                        {"Configure audio explanations and visual comfort."}
                      </p>
                    </div>
                    <div className="flex items-center gap-1.5 px-space-sm py-1 rounded bg-surface-container text-secondary font-code text-code">
                      <span>
                        {"Saved"}
                      </span>
                      <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                        {"check"}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex flex-col gap-0.5">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Listening"}
                      </span>
                      <p className="font-body-sm text-body-sm text-secondary">
                        {"Voice playback starts when you choose Listen. Autoplay is turned off by default."}
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        {"Playback speed"}
                      </span>
                      <div className="flex items-center gap-2 pt-1">
                        <button className="speed-pill px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[25]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"0.75×"}
                        </button>
                        <button className="speed-pill active px-4 py-1.5 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[26]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"1× (Default)"}
                        </button>
                        <button className="speed-pill px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[27]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"1.25×"}
                        </button>
                        <button className="speed-pill px-4 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-all" onClick={event => { const result = actions.current[28]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"1.5×"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-xs p-space-md bg-surface-container-low rounded-xl">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md">
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Microphone"}
                        </span>
                        <p className="font-body-sm text-body-sm text-secondary">
                          {"Microphone access is requested when you start recording voice formulas or questions."}
                        </p>
                      </div>
                      <button className="px-space-md py-2 rounded-lg bg-surface-container-highest hover:bg-surface-container text-on-surface font-label-sm text-label-sm font-medium transition-colors whitespace-nowrap flex items-center justify-center gap-2" id="mic-test-btn" onClick={event => { const result = actions.current[29]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                          {"mic"}
                        </span>
                        <span id="mic-test-label">
                          {"Test microphone"}
                        </span>
                      </button>
                    </div>
                    <div className="flex items-center gap-1.5 text-secondary pt-space-xs font-body-sm text-body-sm">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"lock"}
                      </span>
                      <span>
                        {"Microphone access is managed in your browser's site permissions."}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      {"Motion"}
                    </span>
                    <div className="flex flex-col gap-2">
                      <label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                        <input defaultChecked className="mt-1 accent-primary" name="motion-setting" type="radio" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Follow device settings (Default)"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            {"Respects operating system reduce-motion flags automatically."}
                          </span>
                        </div>
                      </label>
                      <label className="flex items-start gap-space-sm p-space-md rounded-xl bg-surface-container-low cursor-pointer hover:bg-surface-container transition-colors">
                        <input className="mt-1 accent-primary" name="motion-setting" type="radio" />
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Reduce motion"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            {"Simplifies transitions and removes nonessential animation."}
                          </span>
                        </div>
                      </label>
                    </div>
                  </div>
                  <div className="flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-semibold text-on-surface">
                          {"Reading text size"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Scales markdown mathematical breakdowns and chat content."}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 bg-surface-container p-1 rounded-lg">
                        <button className="px-space-md py-1 rounded bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm transition-all" id="btn-scale-standard" onClick={event => { const result = actions.current[30]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Standard (Default)"}
                        </button>
                        <button className="px-space-md py-1 rounded text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" id="btn-scale-large" onClick={event => { const result = actions.current[31]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                          {"Large"}
                        </button>
                      </div>
                    </div>
                    <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-2 transition-all" id="reading-preview-card">
                      <span className="font-code text-code text-secondary uppercase">
                        {"Typography Output Preview"}
                      </span>
                      <p className="font-body-md text-body-md text-on-surface leading-relaxed" id="preview-text-sample">
                        {"\n                Preview: Learning becomes easier when each step is clear. Complex problems reduce to a sequence of verifiable, intuitive assertions.\n              "}
                      </p>
                      <div className="flex items-center gap-space-sm pt-1">
                        <span className="font-code text-code text-secondary">
                          {"O(log n) tree traversal verified"}
                        </span>
                      </div>
                    </div>
                  </div>
                </section>
                <section className="settings-section flex flex-col gap-space-lg bg-surface-container-lowest p-space-xl rounded-xl shadow-sm" id="section-account">
                  <div className="flex flex-col gap-0.5 pb-space-sm">
                    <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                      {"Account"}
                    </h2>
                    <p className="font-body-md text-body-md text-secondary">
                      {"Your sign-in identity and partition boundaries."}
                    </p>
                  </div>
                  <div className="p-space-lg rounded-xl bg-surface-container-low flex flex-col gap-space-md">
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-sm pb-space-sm">
                      <div className="flex flex-col">
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                          {"Primary Email"}
                        </span>
                        <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                          {"alex.rivera@example.edu"}
                        </span>
                      </div>
                      <div className="inline-flex items-center gap-space-xs px-space-md py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm self-start sm:self-auto">
                        <span className="font-semibold">
                          {"G"}
                        </span>
                        <span>
                          {"Google Account"}
                        </span>
                      </div>
                    </div>
                    <div className="p-space-md rounded-lg bg-surface-container-lowest flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-[18px] text-secondary mt-0.5" aria-hidden="true">
                        {"shield"}
                      </span>
                      <div className="flex flex-col gap-0.5">
                        <span className="font-label-sm text-label-sm font-medium text-on-surface">
                          {"Account scope isolation"}
                        </span>
                        <p className="font-body-sm text-body-sm text-secondary">
                          {"\n                  Profile and preferences belong to this account and apply across Chat and Study. Your conversation histories, plans, graphs, and statistics remain isolated to this verified institution identity.\n                "}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-space-md pt-space-xs">
                    <div className="flex flex-col">
                      <span className="font-label-md text-label-md font-medium text-on-surface">
                        {"Session termination"}
                      </span>
                      <span className="font-body-sm text-body-sm text-secondary">
                        {"Terminates this web session and removes offline cache keys."}
                      </span>
                    </div>
                    <button className="px-space-lg py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md font-medium transition-colors whitespace-nowrap self-start sm:self-auto" onClick={event => { const result = actions.current[32]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      {"\n              Sign out\n            "}
                    </button>
                  </div>
                </section>
              </main>
            </div>
          </div>
          <div className="fixed inset-0 z-50 flex items-center justify-center p-space-md bg-primary/20 backdrop-blur-sm hidden" id="unsaved-modal">
            <div className="w-full max-w-md bg-surface-container-lowest p-space-xl rounded-2xl shadow-xl flex flex-col gap-space-lg animate-in fade-in zoom-in-95 duration-150">
              <div className="flex items-start gap-space-md">
                <div className="w-10 h-10 rounded-full bg-surface-container-high flex items-center justify-center text-on-surface flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"help_outline"}
                  </span>
                </div>
                <div className="flex flex-col gap-1">
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface tracking-tight">
                    {"Leave without saving?"}
                  </h3>
                  <p className="font-body-md text-body-md text-secondary">
                    {"Your recent profile edits haven’t been saved to your workspace profile."}
                  </p>
                </div>
              </div>
              <div className="flex items-center justify-end gap-space-sm pt-space-xs">
                <button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" onClick={event => { const result = actions.current[33]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Keep editing\n        "}
                </button>
                <button className="px-space-lg py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-medium transition-colors shadow-sm" onClick={event => { const result = actions.current[34]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Discard changes\n        "}
                </button>
              </div>
            </div>
          </div>
          <div className="fixed bottom-6 right-6 z-50 flex items-center gap-space-sm px-space-md py-3 rounded-xl bg-primary text-on-primary shadow-xl opacity-0 translate-y-3 transition-all duration-200 pointer-events-none" id="toast-feedback">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"check_circle"}
            </span>
            <span className="font-label-md text-label-md">
              {"Profile & preferences updated successfully"}
            </span>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
