'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/7c3f0e1c56124424a1f23818d473c829';
import './7c3f0e1c56124424a1f23818d473c829.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-7c3f0e1c56124424a1f23818d473c829 bg-background font-body-md text-on-surface antialiased" data-screen-id="7c3f0e1c56124424a1f23818d473c829">
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
          <a className="flex items-center justify-between p-space-xs rounded-xl transition-colors text-on-surface-variant" data-path="profile-and-settings" href="#">
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
            <a className="text-on-surface-variant hover:text-on-surface font-label-md text-label-md py-1 transition-colors" data-path="profile-and-settings" href="#">
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
          <div className="sticky top-0 z-30 w-full bg-surface-container-lowest/95 backdrop-blur-md px-space-xl py-space-sm shadow-sm transition-all duration-200">
            <div className="max-w-[1440px] mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
              <div className="flex items-center gap-space-sm min-w-0">
                <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                <span className="font-code text-code text-on-surface font-medium uppercase tracking-wider">
                  {"SOLVE Unified Prototype Engine"}
                </span>
                <span className="text-secondary font-code text-code hidden sm:inline">
                  {"•"}
                </span>
                <span className="font-label-sm text-label-sm text-secondary truncate">
                  {"Active Blueprint: Multimodal Socratic Workspace"}
                </span>
              </div>
              <div className="flex items-center gap-1 overflow-x-auto p-1 bg-surface-container-low rounded-xl w-full md:w-auto" id="journey-tab-nav">
                <button className="journey-tab active px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface bg-surface-container-lowest shadow-sm flex items-center gap-1.5 transition-all" data-target="j1" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"login"}
                  </span>
                  <span>
                    {"1. Onboarding"}
                  </span>
                </button>
                <button className="journey-tab px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1.5 transition-all" data-target="j2" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"chat"}
                  </span>
                  <span>
                    {"2. Simple Chat"}
                  </span>
                </button>
                <button className="journey-tab px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1.5 transition-all" data-target="j3" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"speed"}
                  </span>
                  <span>
                    {"3. Exam Prep"}
                  </span>
                </button>
                <button className="journey-tab px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1.5 transition-all" data-target="j4" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"calendar_month"}
                  </span>
                  <span>
                    {"4. Long-Term"}
                  </span>
                </button>
                <button className="journey-tab px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1.5 transition-all" data-target="j5" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"search_check"}
                  </span>
                  <span>
                    {"5. Resume"}
                  </span>
                </button>
                <button className="journey-tab px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1.5 transition-all" data-target="j6" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"hub"}
                  </span>
                  <span>
                    {"6. Plans & Graph"}
                  </span>
                </button>
                <button className="journey-tab px-space-sm py-1.5 rounded-lg font-label-sm text-label-sm text-secondary hover:text-on-surface flex items-center gap-1.5 transition-all" data-target="j7" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"settings"}
                  </span>
                  <span>
                    {"7. Settings"}
                  </span>
                </button>
              </div>
              <div className="hidden xl:flex items-center gap-2">
                <button className="px-space-sm py-1 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm flex items-center gap-1 transition-colors" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"terminal"}
                  </span>
                  <span>
                    {"Evidence Contracts"}
                  </span>
                </button>
              </div>
            </div>
          </div>
          <div className="w-full max-w-[1440px] mx-auto px-space-md md:px-space-xl py-space-lg flex flex-col gap-space-2xl">
            <section className="journey-view flex flex-col gap-space-xl transition-opacity duration-300" id="journey-1">
              <div className="flex items-center justify-between">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                      {"JOURNEY 01"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"Entryway Architecture"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Zero-Noise Initiation"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"Experience the friction-free transition from OAuth credential verification to pedagogical capability indexing without intrusive popups."}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="px-space-sm py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-secondary">
                    {"State: Authenticated (Mock Google)"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-4 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
                  <div className="flex flex-col gap-space-md">
                    <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"psychology"}
                      </span>
                    </div>
                    <div>
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        {"Gateway Identity"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"Federated Google Authentication"}
                      </h3>
                    </div>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"\n              Direct OpenID Connect handoff with zero ad-tech telemetry. Learning graph telemetry is encrypted at rest using user client keys.\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-xs">
                    <div className="p-space-sm bg-surface-container-low rounded-lg flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <div className="w-7 h-7 rounded-full bg-surface-container-highest flex items-center justify-center font-code text-code">
                          {"AR"}
                        </div>
                        <div className="flex flex-col">
                          <span className="font-label-sm text-label-sm text-on-surface font-medium leading-none">
                            {"alex.rivera@cs.stanford.edu"}
                          </span>
                          <span className="font-code text-code text-secondary text-[11px]">
                            {"Sub: auth0|65f29a038d"}
                          </span>
                        </div>
                      </div>
                      <span className="material-symbols-outlined text-primary text-[18px]" aria-hidden="true">
                        {"verified"}
                      </span>
                    </div>
                    <div className="flex items-center justify-between pt-2">
                      <span className="font-code text-code text-secondary text-[11px]">
                        {"Tokens: Valid (3599s TTL)"}
                      </span>
                      <span className="font-label-sm text-label-sm text-primary font-medium">
                        {"Session Live"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-8 bg-surface-container-lowest p-space-xl rounded-xl shadow-sm flex flex-col justify-between gap-space-lg">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        {"Diagnostic Intake"}
                      </span>
                      <span className="font-code text-code px-2 py-0.5 rounded bg-surface-container text-on-surface">
                        {"Step 2 of 3"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"Cognitive Calibration & Scaffolding Setup"}
                    </h3>
                    <p className="font-body-md text-body-md text-secondary">
                      {"\n              SOLVE continuously infers baseline comfort levels across formal rigor, code proficiency, and conceptual models. Select an intake anchor to test adaptation.\n            "}
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-space-sm pt-space-xs">
                      <div className="p-space-md rounded-xl bg-surface-container-low hover:bg-surface-container transition-all cursor-pointer flex flex-col gap-2">
                        <div className="flex items-center justify-between">
                          <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                            {"code_blocks"}
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-primary flex items-center justify-center">
                            <span className="material-symbols-outlined text-on-primary text-[10px]" aria-hidden="true">
                              {"check"}
                            </span>
                          </span>
                        </div>
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Systems Hacker"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Deep memory models, low-level pointers, rigorous asymptotic proofs."}
                        </span>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span className="material-symbols-outlined text-[20px] text-secondary" aria-hidden="true">
                            {"function"}
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest"></span>
                        </div>
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Pure Abstract"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Category theory, proofs by induction, discrete structures and invariants."}
                        </span>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2 opacity-75 hover:opacity-100 transition-opacity cursor-pointer">
                        <div className="flex items-center justify-between">
                          <span className="material-symbols-outlined text-[20px] text-secondary" aria-hidden="true">
                            {"terminal"}
                          </span>
                          <span className="w-3.5 h-3.5 rounded-full bg-surface-container-highest"></span>
                        </div>
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Applied Engineer"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Empirical debugging, Python idiomatic pipelines, real-world microservices."}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-md bg-surface-container-low -mx-space-xl -mb-space-xl p-space-md rounded-b-xl">
                    <span className="font-body-sm text-body-sm text-secondary">
                      {"Primary pedagogical mode sets heuristic weights for automatic hints."}
                    </span>
                    <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center gap-1.5 hover:bg-neutral-800 transition-colors" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"Complete Onboarding & Enter Chat"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="journey-view hidden flex flex-col gap-space-xl transition-opacity duration-300" id="journey-2">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                      {"JOURNEY 02"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"Pure Inquiry / Socratic Freedom"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Ordinary Conversational Inquiry"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"\n            No exams, no forced milestones, zero artificial pressure. Focus strictly on mental clarity, visual call stack breakdown, and organic follow-ups.\n          "}
                  </p>
                </div>
                <div className="flex items-center gap-space-xs">
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-secondary font-label-sm text-label-sm flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
                    {"\n            Mode: Stress-Free Synthesis\n          "}
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest rounded-2xl shadow-sm p-space-lg md:p-space-xl flex flex-col gap-space-xl">
                <div className="flex flex-col gap-space-sm max-w-3xl ml-auto w-full md:w-3/4">
                  <div className="flex items-center justify-end gap-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Alex Rivera"}
                    </span>
                    <span className="font-code text-code text-secondary text-[11px]">
                      {"10:42 AM"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-2xl rounded-tr-sm bg-surface-container-high text-on-surface font-body-lg text-body-lg">
                    {"\n            Can you explain recursion with a clear mental model and a simple example?\n          "}
                  </div>
                </div>
                <div className="flex flex-col gap-space-md max-w-4xl mr-auto w-full">
                  <div className="flex items-center gap-space-sm">
                    <div className="w-6 h-6 rounded-md bg-primary text-on-primary flex items-center justify-center font-label-sm font-semibold">
                      {"S"}
                    </div>
                    <span className="font-label-md text-label-md text-on-surface font-semibold">
                      {"SOLVE"}
                    </span>
                    <span className="font-code text-code text-secondary text-[11px]">
                      {"Socratic Model v4.2"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-space-md text-on-surface font-body-lg text-body-lg leading-relaxed pl-space-md">
                    <p>
                      {"\n              Think of recursion not as a loop, but as "}
                      <strong className="font-medium text-on-surface">
                        {"delegating a smaller version of the exact same job to a fresh assistant"}
                      </strong>
                      {" until the job is so simple that anyone can solve it instantly without thinking.\n            "}
                    </p>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                        {"The Mental Contract"}
                      </span>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-space-md">
                        <div className="flex flex-col gap-1">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"1. The Base Case (The Stop Sign)"}
                          </span>
                          <p className="font-body-sm text-body-sm text-secondary">
                            {"The simplest possible input where the answer is trivial. Without this, assistants spawn infinitely until your computer crashes (Stack Overflow)."}
                          </p>
                        </div>
                        <div className="flex flex-col gap-1">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"2. The Recursive Step (Self-Delegation)"}
                          </span>
                          <p className="font-body-sm text-body-sm text-secondary">
                            {"Transforming the problem by peeling one layer off and passing the remainder down. Every call brings you one step closer to the Base Case."}
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-xl bg-surface-container overflow-hidden shadow-sm">
                      <div className="px-space-md py-space-xs bg-surface-container-high flex items-center justify-between">
                        <span className="font-code text-code text-secondary">
                          {"python • countdown_sum.py"}
                        </span>
                        <button className="font-code text-code text-secondary hover:text-on-surface flex items-center gap-1" type="button">
                          <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                            {"content_copy"}
                          </span>
                          <span>
                            {"Copy"}
                          </span>
                        </button>
                      </div>
                      <pre className="p-space-md font-code text-code text-on-surface overflow-x-auto">
                        <code>
                          {"def sum_to_n(n: int) -> int:\n    # 1. Base Case: smallest legal input\n    if n <= 1:\n        return n\n    \n    # 2. Recursive Step: n + answer for (n - 1)\n    return n + sum_to_n(n - 1)\n\n# Example call:\n# sum_to_n(3) => 3 + sum_to_n(2) => 2 + sum_to_n(1) => 1"}
                        </code>
                      </pre>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                          {"Call Stack Unwinding (sum_to_n(3))"}
                        </span>
                        <span className="font-code text-code text-secondary">
                          {"Frames: 3 stacked, then resolved backwards"}
                        </span>
                      </div>
                      <div className="w-full py-4 flex flex-col items-center">
                        <svg className="w-full max-w-2xl h-auto" viewBox="0 0 680 180" xmlns="http://www.w3.org/2000/svg">
                          <g className="transition-transform hover:-translate-y-0.5">
                            <rect fill="#e2e2e2" height="42" rx="8" width="160" x="40" y="20"></rect>
                            <text fill="#1a1c1c" fontFamily="JetBrains Mono" fontSize="12" fontWeight="600" textAnchor="middle" x="120" y="46">
                              {"sum_to_n(3)"}
                            </text>
                            <text fill="#5e5e5e" fontFamily="Inter" fontSize="10" textAnchor="middle" x="120" y="76">
                              {"Waits for sum_to_n(2)"}
                            </text>
                          </g>
                          <path d="M 205 41 L 245 41" stroke="#747878" strokeDasharray="3 3" strokeWidth="1.5"></path>
                          <polygon fill="#747878" points="245,41 237,37 237,45"></polygon>
                          <g className="transition-transform hover:-translate-y-0.5">
                            <rect fill="#e2e2e2" height="42" rx="8" width="160" x="250" y="20"></rect>
                            <text fill="#1a1c1c" fontFamily="JetBrains Mono" fontSize="12" fontWeight="600" textAnchor="middle" x="330" y="46">
                              {"sum_to_n(2)"}
                            </text>
                            <text fill="#5e5e5e" fontFamily="Inter" fontSize="10" textAnchor="middle" x="330" y="76">
                              {"Waits for sum_to_n(1)"}
                            </text>
                          </g>
                          <path d="M 415 41 L 455 41" stroke="#747878" strokeDasharray="3 3" strokeWidth="1.5"></path>
                          <polygon fill="#747878" points="455,41 447,37 447,45"></polygon>
                          <g className="transition-transform hover:-translate-y-0.5">
                            <rect fill="#1c1b1b" height="50" rx="8" width="180" x="460" y="16"></rect>
                            <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="12" fontWeight="600" textAnchor="middle" x="550" y="42">
                              {"BASE HIT: sum_to_n(1)"}
                            </text>
                            <text fill="#c8c6c5" fontFamily="Inter" fontSize="10" textAnchor="middle" x="550" y="58">
                              {"Returns 1 immediately"}
                            </text>
                          </g>
                          <path d="M 550 72 C 550 140, 330 140, 330 72" fill="none" stroke="#1c1b1b" strokeWidth="2"></path>
                          <polygon fill="#1c1b1b" points="330,72 326,82 334,82"></polygon>
                          <rect fill="#ffffff" height="20" rx="4" width="100" x="390" y="125"></rect>
                          <text fill="#1a1c1c" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" textAnchor="middle" x="440" y="139">
                            {"Returns 1+2=3"}
                          </text>
                          <path d="M 330 72 C 330 160, 120 160, 120 72" fill="none" stroke="#1c1b1b" strokeWidth="2"></path>
                          <polygon fill="#1c1b1b" points="120,72 116,82 124,82"></polygon>
                          <rect fill="#ffffff" height="20" rx="4" width="100" x="180" y="150"></rect>
                          <text fill="#1a1c1c" fontFamily="JetBrains Mono" fontSize="11" fontWeight="600" textAnchor="middle" x="230" y="164">
                            {"Returns 3+3=6"}
                          </text>
                        </svg>
                      </div>
                    </div>
                    <p className="text-secondary font-body-md text-body-md">
                      {"\n              Notice how the call stack acts like plates at a buffet: the first plate put down is the last plate taken off (LIFO: Last In, First Out).\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-xs pt-space-sm pl-space-md">
                    <span className="font-label-sm text-label-sm text-secondary">
                      {"Explore deeper at your own pace:"}
                    </span>
                    <div className="flex flex-wrap gap-space-xs">
                      <button className="px-space-sm py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                        {"\n                Can you show recursion on a linked list?\n              "}
                      </button>
                      <button className="px-space-sm py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                        {"\n                When should I avoid recursion in production?\n              "}
                      </button>
                      <button className="px-space-sm py-1.5 rounded-full bg-surface-container-low hover:bg-surface-container text-on-surface font-label-sm text-label-sm transition-colors" type="button">
                        {"\n                What does Tail Call Optimization (TCO) do?\n              "}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="mt-space-md p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between gap-space-md">
                  <input className="bg-transparent border-0 outline-none flex-1 font-body-md text-body-md text-on-surface px-space-xs placeholder:text-secondary" placeholder="Ask anything about recursion or request another analogy..." type="text" />
                  <div className="flex items-center gap-space-xs">
                    <button className="w-8 h-8 rounded-lg flex items-center justify-center text-secondary hover:text-on-surface hover:bg-surface-container" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                    <button className="w-8 h-8 rounded-lg bg-primary text-on-primary flex items-center justify-center hover:bg-neutral-800" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_upward"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="journey-view hidden flex flex-col gap-space-xl transition-opacity duration-300" id="journey-3">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-primary text-on-primary font-code text-code">
                      {"JOURNEY 03"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"High-Stakes Structured Prep"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Stanford CS106B Midterm Sprint"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"\n            Goal-directed 80/20 methodology: Diagnostic Assessment → 7-step Plan → Guided Interactive Workspace → Socratic Teach-Back.\n          "}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1 rounded-full bg-surface-container-highest text-on-surface font-code text-code">
                    {"T-Minus 8 Days"}
                  </span>
                  <span className="px-3 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm font-medium">
                    {"Target: Grade A (94%)"}
                  </span>
                </div>
              </div>
              <div className="w-full bg-surface-container-lowest p-space-md rounded-xl shadow-sm overflow-x-auto">
                <div className="flex items-center min-w-[760px] justify-between relative">
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-[11px]">
                      {"1"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        {"Diagnostic"}
                      </span>
                      <span className="font-code text-[10px] text-secondary">
                        {"Complete (74%)"}
                      </span>
                    </div>
                    <div className="h-0.5 bg-primary flex-1 mx-2"></div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-[11px]">
                      {"2"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        {"80/20 Slice"}
                      </span>
                      <span className="font-code text-[10px] text-secondary">
                        {"Pointers & Trees"}
                      </span>
                    </div>
                    <div className="h-0.5 bg-primary flex-1 mx-2"></div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-primary text-on-primary flex items-center justify-center font-code text-[11px]">
                      {"3"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                        {"Active Session"}
                      </span>
                      <span className="font-code text-[10px] text-primary">
                        {"In Progress"}
                      </span>
                    </div>
                    <div className="h-0.5 bg-surface-container-highest flex-1 mx-2"></div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-code text-[11px]">
                      {"4"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Timed Practice"}
                      </span>
                      <span className="font-code text-[10px] text-secondary">
                        {"Queue (3)"}
                      </span>
                    </div>
                    <div className="h-0.5 bg-surface-container-highest flex-1 mx-2"></div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-code text-[11px]">
                      {"5"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Teach-Back"}
                      </span>
                      <span className="font-code text-[10px] text-secondary">
                        {"Socratic Oral"}
                      </span>
                    </div>
                    <div className="h-0.5 bg-surface-container-highest flex-1 mx-2"></div>
                  </div>
                  <div className="flex items-center gap-2 flex-1">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-code text-[11px]">
                      {"6"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Mock Exam"}
                      </span>
                      <span className="font-code text-[10px] text-secondary">
                        {"CS106B '23"}
                      </span>
                    </div>
                    <div className="h-0.5 bg-surface-container-highest flex-1 mx-2"></div>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="w-6 h-6 rounded-full bg-surface-container-highest text-secondary flex items-center justify-center font-code text-[11px]">
                      {"7"}
                    </div>
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Target Met"}
                      </span>
                      <span className="font-code text-[10px] text-secondary">
                        {"Grade A"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-6 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between pb-space-xs">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                          {"psychology_alt"}
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {"Active Teach-Back Check"}
                        </span>
                      </div>
                      <span className="font-code text-code text-secondary">
                        {"CS106B Q4 Simulation"}
                      </span>
                    </div>
                    <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-primary font-semibold">
                        {"Prompt 3 of 5 • Binary Search Tree Invariants"}
                      </span>
                      <p className="font-body-md text-body-md text-on-surface">
                        {"\n                \"Assume a student swaps the left and right pointers in node deletion when replacing with the in-order successor. Explain in one sentence what happens to the BST search complexity if this corrupt node is queried later.\"\n              "}
                      </p>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Your Voice or Typed Explanation:"}
                      </span>
                      <textarea className="w-full p-space-sm rounded-xl bg-surface-container-low border-0 outline-none font-body-md text-body-md text-on-surface" placeholder="Type your answer to demonstrate conceptual understanding without rote recall..." rows="3"></textarea>
                    </div>
                    <div className="p-space-sm rounded-lg bg-surface-container flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                          {"mic"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Or record voice answer (60s Socratic Teach-back)"}
                        </span>
                      </div>
                      <button className="px-space-sm py-1 rounded-md bg-surface-container-lowest text-on-surface font-label-sm text-label-sm shadow-sm" type="button">
                        {"Record"}
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-sm">
                    <span className="font-code text-code text-secondary">
                      {"Confidence Weight: 84%"}
                    </span>
                    <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-neutral-800 transition-colors" type="button">
                      {"\n              Submit Socratic Verification\n            "}
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-6 flex flex-col gap-space-md">
                  <div className="bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"80/20 Yield Matrix"}
                      </h3>
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Updated 12m ago"}
                      </span>
                    </div>
                    <div className="grid grid-cols-2 gap-space-sm">
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                        <span className="font-code text-code text-secondary">
                          {"CRITICAL VULNERABILITY"}
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {"Pointer Memory Leaks"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"38% exam weight. Current mastery: 61%. Target: 90%."}
                        </span>
                        <div className="w-full bg-surface-container h-1.5 rounded-full mt-2">
                          <div className="bg-primary h-1.5 rounded-full" style={{"width":"61%"}}></div>
                        </div>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low flex flex-col gap-1">
                        <span className="font-code text-code text-secondary">
                          {"SECURED HIGH-YIELD"}
                        </span>
                        <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                          {"Backtracking Permutations"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"25% exam weight. Current mastery: 94%. Target: 85%."}
                        </span>
                        <div className="w-full bg-surface-container h-1.5 rounded-full mt-2">
                          <div className="bg-primary h-1.5 rounded-full" style={{"width":"94%"}}></div>
                        </div>
                      </div>
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-low flex items-center justify-between">
                      <div className="flex items-center gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                          {"data_check"}
                        </span>
                        <span className="font-label-md text-label-md text-on-surface">
                          {"Target Status Verification"}
                        </span>
                      </div>
                      <button className="font-label-sm text-label-sm text-primary font-medium flex items-center gap-0.5 hover:underline" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                        <span>
                          {"Inspect Target Drawer"}
                        </span>
                        <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                          {"chevron_right"}
                        </span>
                      </button>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest p-space-md rounded-xl shadow-sm flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <div className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"quiz"}
                        </span>
                      </div>
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Next Targeted Problem: freeTree()"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Post-order deallocation to avoid dangling references"}
                        </span>
                      </div>
                    </div>
                    <button className="px-space-sm py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm" type="button">
                      {"Launch Editor"}
                    </button>
                  </div>
                </div>
              </div>
            </section>
            <section className="journey-view hidden flex flex-col gap-space-xl transition-opacity duration-300" id="journey-4">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                      {"JOURNEY 04"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"Macro Longitudinal Trajectory"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"3-Month Python Systems Mastery"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"\n            Capability indexing, resource allocation (6 hrs/wk), milestone roadmapping, and progressive practice intensity over 90 days.\n          "}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm">
                  <span className="font-code text-code text-secondary">
                    {"Week 5 of 12"}
                  </span>
                  <span className="px-2.5 py-1 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
                    {"On Track (42% Complete)"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-4 gap-space-md">
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="font-code text-code text-secondary">
                    {"TIME BUDGET"}
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"6.5 hrs / 6.0 planned"}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {"Optimal retention threshold met"}
                  </span>
                </div>
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="font-code text-code text-secondary">
                    {"CURRENT BLOCK"}
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"AsyncIO & Coroutines"}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {"Event loops, tasks, generators"}
                  </span>
                </div>
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="font-code text-code text-secondary">
                    {"VERIFIED EVIDENCE"}
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"19 Artifacts"}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {"14 code challenges, 5 oral audits"}
                  </span>
                </div>
                <div className="p-space-md bg-surface-container-lowest rounded-xl shadow-sm flex flex-col gap-1">
                  <span className="font-code text-code text-secondary">
                    {"PROJECTED CAPSTONE"}
                  </span>
                  <span className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"May 18, 2025"}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {"Distributed Redis clone in Python"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-8 bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex flex-col">
                      <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                        {"Effort vs. Retention Telemetry"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"12-Week Cognitive Consistency"}
                      </h3>
                    </div>
                    <div className="flex items-center gap-space-sm font-code text-code text-secondary">
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                        {" Practice Hours"}
                      </span>
                      <span className="flex items-center gap-1">
                        <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                        {" Target Base"}
                      </span>
                    </div>
                  </div>
                  <div className="w-full pt-4">
                    <svg className="w-full h-auto" viewBox="0 0 700 220" xmlns="http://www.w3.org/2000/svg">
                      <line stroke="#eeeeee" strokeWidth="1" x1="40" x2="680" y1="30" y2="30"></line>
                      <line stroke="#eeeeee" strokeWidth="1" x1="40" x2="680" y1="80" y2="80"></line>
                      <line stroke="#eeeeee" strokeWidth="1" x1="40" x2="680" y1="130" y2="130"></line>
                      <line stroke="#c4c7c7" strokeWidth="1" x1="40" x2="680" y1="180" y2="180"></line>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="30" y="34">
                        {"8h"}
                      </text>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="30" y="84">
                        {"6h"}
                      </text>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="30" y="134">
                        {"3h"}
                      </text>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="end" x="30" y="184">
                        {"0h"}
                      </text>
                      <rect fill="#e2e2e2" height="80" rx="4" width="30" x="60" y="100"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="75" y="200">
                        {"W1"}
                      </text>
                      <rect fill="#e2e2e2" height="110" rx="4" width="30" x="110" y="70"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="125" y="200">
                        {"W2"}
                      </text>
                      <rect fill="#e2e2e2" height="95" rx="4" width="30" x="160" y="85"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="175" y="200">
                        {"W3"}
                      </text>
                      <rect fill="#e2e2e2" height="115" rx="4" width="30" x="210" y="65"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="225" y="200">
                        {"W4"}
                      </text>
                      <rect fill="#1c1b1b" height="125" rx="4" width="30" x="260" y="55"></rect>
                      <text fill="#1a1c1c" fontFamily="JetBrains Mono" fontSize="10" fontWeight="600" textAnchor="middle" x="275" y="200">
                        {"W5*"}
                      </text>
                      <rect fill="#f3f3f3" height="100" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="310" y="80"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="325" y="200">
                        {"W6"}
                      </text>
                      <rect fill="#f3f3f3" height="100" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="360" y="80"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="375" y="200">
                        {"W7"}
                      </text>
                      <rect fill="#f3f3f3" height="110" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="410" y="70"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="425" y="200">
                        {"W8"}
                      </text>
                      <rect fill="#f3f3f3" height="120" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="460" y="60"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="475" y="200">
                        {"W9"}
                      </text>
                      <rect fill="#f3f3f3" height="120" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="510" y="60"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="525" y="200">
                        {"W10"}
                      </text>
                      <rect fill="#f3f3f3" height="130" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="560" y="50"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="575" y="200">
                        {"W11"}
                      </text>
                      <rect fill="#f3f3f3" height="135" rx="4" stroke="#e2e2e2" strokeDasharray="2 2" width="30" x="610" y="45"></rect>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="625" y="200">
                        {"W12"}
                      </text>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between pt-space-xs">
                    <span className="font-body-sm text-body-sm text-secondary">
                      {"Retention decay factor computed via spaced repetition schedule."}
                    </span>
                    <button className="font-label-sm text-label-sm text-primary font-medium hover:underline flex items-center gap-1" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                      <span>
                        {"View full Knowledge Graph link"}
                      </span>
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"arrow_forward"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-md">
                  <div className="flex flex-col gap-space-md">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"Long-Term Milestones"}
                    </h3>
                    <div className="flex flex-col gap-space-md">
                      <div className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" aria-hidden="true">
                          {"check_circle"}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"Milestone 1: OOP & Memory"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            {"Dunder methods, descriptors, reference counts."}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm">
                        <span className="material-symbols-outlined text-primary text-[20px] mt-0.5" aria-hidden="true">
                          {"radio_button_checked"}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"Milestone 2: Concurrency & Async"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            {"Event loops, threading vs multiprocessing, GIL limits."}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm opacity-50">
                        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                          {"radio_button_unchecked"}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Milestone 3: C-Extensions & Cython"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            {"Binding C libraries, NumPy buffer protocol internals."}
                          </span>
                        </div>
                      </div>
                      <div className="flex items-start gap-space-sm opacity-50">
                        <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                          {"radio_button_unchecked"}
                        </span>
                        <div className="flex flex-col">
                          <span className="font-label-md text-label-md font-medium text-on-surface">
                            {"Milestone 4: Capstone Distributed DB"}
                          </span>
                          <span className="font-body-sm text-body-sm text-secondary">
                            {"Raft consensus protocol implemented in pure Python."}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <button className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" type="button">
                    {"\n            Adjust 90-Day Pacing\n          "}
                  </button>
                </div>
              </div>
            </section>
            <section className="journey-view hidden flex flex-col gap-space-xl transition-opacity duration-300" id="journey-5">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                      {"JOURNEY 05"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"Context Continuity Engine"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Find, Resume & Recover State"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"\n            Pick up precisely where you left off. Search across conversational turns, syntax artifacts, unfinished diagnostics, and conceptual links.\n          "}
                  </p>
                </div>
                <div>
                  <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md flex items-center gap-2 hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"search"}
                    </span>
                    <span>
                      {"Open Command Palette (Cmd + K)"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="p-space-lg rounded-2xl bg-surface-container-high flex flex-col md:flex-row items-start md:items-center justify-between gap-space-md shadow-sm">
                <div className="flex items-start gap-space-md">
                  <div className="w-10 h-10 rounded-xl bg-primary text-on-primary flex items-center justify-center font-headline-sm">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"pending_actions"}
                    </span>
                  </div>
                  <div className="flex flex-col">
                    <div className="flex items-center gap-2">
                      <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                        {"ABRUPTLY EXITED"}
                      </span>
                      <span className="font-label-sm text-label-sm text-secondary">
                        {"Saved yesterday at 11:14 PM"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"Unfinished Practice: Invert Binary Tree & Stack Balance"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary">
                      {"Step 4 of 6 completed. 2 test cases still failing in unit runner."}
                    </p>
                  </div>
                </div>
                <div className="flex items-center gap-space-sm w-full md:w-auto">
                  <button className="flex-1 md:flex-initial px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-highest text-on-surface font-label-md text-label-md transition-colors" type="button">
                    {"Dismiss"}
                  </button>
                  <button className="flex-1 md:flex-initial px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-neutral-800 transition-colors" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"Resume Workspace"}
                  </button>
                </div>
              </div>
              <div className="bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                      {"manage_search"}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"Omni-Search Dialog Preview"}
                    </h3>
                  </div>
                  <span className="font-code text-code text-secondary">
                    {"Matches: 4 indexed concepts, 2 code files"}
                  </span>
                </div>
                <div className="p-space-xs rounded-xl bg-surface-container-low flex items-center gap-space-sm px-space-md">
                  <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
                    {"search"}
                  </span>
                  <input className="bg-transparent border-0 outline-none flex-1 font-body-md text-body-md text-on-surface" type="text" defaultValue="recursion" />
                  <span className="font-code text-code text-secondary px-2 py-0.5 rounded bg-surface-container">
                    {"ESC to clear"}
                  </span>
                </div>
                <div className="flex flex-col gap-space-xs pt-space-xs">
                  <div className="p-space-md rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-between">
                    <div className="flex items-start gap-space-md">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                        {"chat_bubble"}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"Explain "}
                            <mark className="bg-surface-container-highest text-on-surface px-1 rounded">
                              {"recursion"}
                            </mark>
                            {" with a clear mental model"}
                          </span>
                          <span className="font-code text-code text-secondary">
                            {"Journey 2 Chat"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"\"...base case vs recursive step analogy with call stack unwinding...\""}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-between">
                    <div className="flex items-start gap-space-md">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                        {"hub"}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"Knowledge Node: Tail-Call "}
                            <mark className="bg-surface-container-highest text-on-surface px-1 rounded">
                              {"Recursion"}
                            </mark>
                            {" & Accumulators"}
                          </span>
                          <span className="font-code text-code text-secondary">
                            {"Graph Node #412"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Mastery: 89% • Linked to: Dynamic Programming, Tree Traversal"}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                  <div className="p-space-md rounded-xl hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-between">
                    <div className="flex items-start gap-space-md">
                      <span className="material-symbols-outlined text-secondary text-[20px] mt-0.5" aria-hidden="true">
                        {"code"}
                      </span>
                      <div className="flex flex-col">
                        <div className="flex items-center gap-2">
                          <span className="font-label-md text-label-md font-semibold text-on-surface">
                            {"countdown_sum.py"}
                          </span>
                          <span className="font-code text-code text-secondary">
                            {"Code Artifact"}
                          </span>
                        </div>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"def sum_to_n(n: int) -> int: if n <= 1: return n..."}
                        </span>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </div>
                </div>
              </div>
            </section>
            <section className="journey-view hidden flex flex-col gap-space-xl transition-opacity duration-300" id="journey-6">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                      {"JOURNEY 06"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"Knowledge Graph & Evidence Audit"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Strategy, Graph & Target Status"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"\n            Inspect the real-time knowledge graph, evaluate concept connection weights, and open drawer reviews on verifiable evidence contracts.\n          "}
                  </p>
                </div>
                <div className="flex items-center gap-space-sm">
                  <button className="px-space-md py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center gap-1.5 transition-colors" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"dock_to_right"}
                    </span>
                    <span>
                      {"Toggle Target Drawer"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg items-start">
                <div className="lg:col-span-8 bg-surface-container-lowest p-space-lg rounded-2xl shadow-sm flex flex-col gap-space-md">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">
                        {"hub"}
                      </span>
                      <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"Active Knowledge Topology"}
                      </span>
                    </div>
                    <span className="font-code text-code text-secondary">
                      {"Click any node to inspect contracts"}
                    </span>
                  </div>
                  <div className="w-full bg-surface-container-low rounded-xl p-space-md flex items-center justify-center">
                    <svg className="w-full h-auto" viewBox="0 0 720 380" xmlns="http://www.w3.org/2000/svg">
                      <line stroke="#c4c7c7" strokeWidth="2" x1="160" x2="360" y1="190" y2="100"></line>
                      <line stroke="#c4c7c7" strokeWidth="2" x1="160" x2="360" y1="190" y2="280"></line>
                      <line stroke="#1c1b1b" strokeWidth="2.5" x1="360" x2="560" y1="100" y2="190"></line>
                      <line stroke="#c4c7c7" strokeWidth="2" x1="360" x2="560" y1="280" y2="190"></line>
                      <line stroke="#e2e2e2" strokeDasharray="4 4" strokeWidth="1.5" x1="360" x2="360" y1="100" y2="280"></line>
                      <g className="cursor-pointer transition-transform hover:scale-105" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                        <circle cx="160" cy="190" fill="#ffffff" r="38" stroke="#1c1b1b" strokeWidth="2"></circle>
                        <text fill="#1a1c1c" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="160" y="186">
                          {"Recursion"}
                        </text>
                        <text fill="#5e5e5e" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="160" y="202">
                          {"95% Mastery"}
                        </text>
                      </g>
                      <g className="cursor-pointer transition-transform hover:scale-105" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                        <circle cx="360" cy="100" fill="#1c1b1b" r="42"></circle>
                        <text fill="#ffffff" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="360" y="96">
                          {"Trees & BST"}
                        </text>
                        <text fill="#c8c6c5" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="360" y="112">
                          {"88% (Focus)"}
                        </text>
                      </g>
                      <g className="cursor-pointer transition-transform hover:scale-105" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                        <circle cx="360" cy="280" fill="#ffffff" r="40" stroke="#747878" strokeWidth="2"></circle>
                        <text fill="#1a1c1c" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="360" y="276">
                          {"Pointers"}
                        </text>
                        <text fill="#ba1a1a" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="360" y="292">
                          {"61% Critical"}
                        </text>
                      </g>
                      <g className="cursor-pointer transition-transform hover:scale-105" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                        <circle cx="560" cy="190" fill="#ffffff" r="44" stroke="#c4c7c7" strokeWidth="2"></circle>
                        <text fill="#1a1c1c" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="560" y="186">
                          {"Dyn Program"}
                        </text>
                        <text fill="#747878" fontFamily="JetBrains Mono" fontSize="10" textAnchor="middle" x="560" y="202">
                          {"45% Locked"}
                        </text>
                      </g>
                    </svg>
                  </div>
                  <div className="flex items-center justify-between text-secondary font-code text-code">
                    <span>
                      {"4 Connected Clusters"}
                    </span>
                    <span>
                      {"Graph Version: 2025.04.1"}
                    </span>
                  </div>
                </div>
                <div className="lg:col-span-4 bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-md" id="graph-node-inspector">
                  <div className="flex items-center justify-between pb-space-xs">
                    <span className="font-code text-code text-secondary uppercase tracking-wider">
                      {"Concept Dossier"}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-surface-container-high text-on-surface font-code text-code" id="node-mastery-badge">
                      {"88% Mastery"}
                    </span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold" id="node-title">
                      {"Binary Trees & Heaps"}
                    </h3>
                    <p className="font-body-sm text-body-sm text-secondary" id="node-desc">
                      {"\n              Hierarchical data structures requiring recursive invariant enforcement. Successor extraction and in-order balancing.\n            "}
                    </p>
                  </div>
                  <div className="flex flex-col gap-space-sm pt-space-xs">
                    <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider font-semibold">
                      {"Verifiable Evidence Contracts"}
                    </span>
                    <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                          {"Unit Contract #812"}
                        </span>
                        <span className="font-code text-[11px] text-primary">
                          {"PASSED (5/5)"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary">
                        {"Implemented post-order recursive tree cleanup without memory leaks in Valgrind."}
                      </p>
                    </div>
                    <div className="p-space-sm rounded-xl bg-surface-container-low flex flex-col gap-1">
                      <div className="flex items-center justify-between">
                        <span className="font-label-sm text-label-sm font-semibold text-on-surface">
                          {"Socratic Teach-Back"}
                        </span>
                        <span className="font-code text-[11px] text-primary">
                          {"VERIFIED"}
                        </span>
                      </div>
                      <p className="font-body-sm text-body-sm text-secondary">
                        {"Audited audio recording: correctly articulated O(log N) average vs O(N) degenerated tree search."}
                      </p>
                    </div>
                  </div>
                  <button className="w-full mt-space-sm py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-neutral-800 transition-colors" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                    {"\n            Start Targeted Drill on this Concept\n          "}
                  </button>
                </div>
              </div>
            </section>
            <section className="journey-view hidden flex flex-col gap-space-xl transition-opacity duration-300" id="journey-7">
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-space-sm">
                <div className="flex flex-col gap-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                      {"JOURNEY 07"}
                    </span>
                    <span className="text-secondary font-label-sm text-label-sm">
                      {"Account & System Configuration"}
                    </span>
                  </div>
                  <h2 className="font-headline-lg text-headline-lg text-on-surface tracking-tight">
                    {"Preferences & Autonomous Mentorship Settings"}
                  </h2>
                  <p className="font-body-md text-body-md text-secondary max-w-2xl">
                    {"\n            Configure Socratic pushback intensity, voice synthesis parameters, Google identity management, and persistent vault encryption.\n          "}
                  </p>
                </div>
                <div>
                  <button className="px-space-md py-2 rounded-xl bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md flex items-center gap-2 transition-colors" type="button">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"logout"}
                    </span>
                    <span>
                      {"Sign Out Session"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-6 bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col gap-space-lg">
                  <div className="flex items-center gap-space-sm">
                    <span className="material-symbols-outlined text-[22px] text-primary" aria-hidden="true">
                      {"tune"}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"Socratic AI Behavior"}
                    </h3>
                  </div>
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Direct Answer Resistance"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Force guided hints before revealing final code implementations."}
                        </span>
                      </div>
                      <input defaultChecked className="w-5 h-5 accent-primary rounded cursor-pointer" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Mathematical Rigor Threshold"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Demand big-O asymptotic proofs alongside pseudocode."}
                        </span>
                      </div>
                      <input defaultChecked className="w-5 h-5 accent-primary rounded cursor-pointer" type="checkbox" />
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex flex-col">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Audio / Voice Feedback Rate"}
                        </span>
                        <span className="font-body-sm text-body-sm text-secondary">
                          {"Low-latency spoken Socratic follow-up audio playback."}
                        </span>
                      </div>
                      <span className="font-code text-code px-2 py-1 rounded bg-surface-container text-on-surface">
                        {"1.15x Pace"}
                      </span>
                    </div>
                  </div>
                </div>
                <div className="lg:col-span-6 bg-surface-container-lowest p-space-xl rounded-2xl shadow-sm flex flex-col justify-between gap-space-lg">
                  <div className="flex flex-col gap-space-md">
                    <div className="flex items-center gap-space-sm">
                      <span className="material-symbols-outlined text-[22px] text-primary" aria-hidden="true">
                        {"shield_person"}
                      </span>
                      <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                        {"Connected Services & Privacy"}
                      </h3>
                    </div>
                    <div className="flex flex-col gap-space-sm">
                      <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <div className="w-8 h-8 rounded-full bg-surface-container-highest flex items-center justify-center font-code text-code">
                            {"G"}
                          </div>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-medium text-on-surface">
                              {"Google Account Sync"}
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              {"alex.rivera@cs.stanford.edu"}
                            </span>
                          </div>
                        </div>
                        <span className="font-code text-code text-primary">
                          {"Connected"}
                        </span>
                      </div>
                      <div className="p-space-md rounded-xl bg-surface-container-low flex items-center justify-between">
                        <div className="flex items-center gap-space-sm">
                          <span className="material-symbols-outlined text-secondary text-[22px]" aria-hidden="true">
                            {"lock"}
                          </span>
                          <div className="flex flex-col">
                            <span className="font-label-md text-label-md font-medium text-on-surface">
                              {"Local Client-Side Vault"}
                            </span>
                            <span className="font-body-sm text-body-sm text-secondary">
                              {"AES-256 GCM encrypted at rest"}
                            </span>
                          </div>
                        </div>
                        <button className="px-space-sm py-1 rounded-md bg-surface-container text-on-surface font-label-sm text-label-sm" type="button">
                          {"Export Vault"}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="flex items-center justify-between pt-space-md">
                    <span className="font-code text-code text-secondary">
                      {"Client ID: 9402-Stanford-Auth"}
                    </span>
                    <button className="px-space-md py-2 rounded-xl bg-primary text-on-primary font-label-md text-label-md hover:bg-neutral-800 transition-colors" type="button">
                      {"\n              Save Preference State\n            "}
                    </button>
                  </div>
                </div>
              </div>
            </section>
          </div>
          <aside className="w-full bg-surface-container-high px-space-md md:px-space-xl py-space-md mt-space-2xl transition-all" id="annotations-dock">
            <div className="max-w-[1440px] mx-auto flex flex-col gap-space-md">
              <div className="flex items-center justify-between cursor-pointer" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                <div className="flex items-center gap-space-sm">
                  <span className="material-symbols-outlined text-primary text-[20px]" aria-hidden="true">
                    {"architecture"}
                  </span>
                  <span className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {"Interaction & Prototype Engineering Annotations"}
                  </span>
                  <span className="px-2 py-0.5 rounded bg-surface-container text-secondary font-code text-code">
                    {"HUD Inspector"}
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-label-sm text-secondary" id="dock-toggle-label">
                    {"Click to Collapse"}
                  </span>
                  <span className="material-symbols-outlined text-secondary text-[20px]" id="dock-toggle-icon" aria-hidden="true">
                    {"expand_more"}
                  </span>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs" id="annotations-content">
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"sync_alt"}
                    </span>
                    <span className="font-label-md text-label-md font-semibold">
                      {"External Handoff Boundaries"}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    <strong>
                      {"Prototype Simulation:"}
                    </strong>
                    {" Google Auth federated popups, Whisper voice transcription socket, and LLM streaming tokens are mocked locally.\n          "}
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    <strong>
                      {"Production Contract:"}
                    </strong>
                    {" In full build, OAuth handoffs redirect to Google Identity Services with PKCE authorization codes. Voice streams chunked audio via WebSocket to low-latency Whisper/TTS servers.\n          "}
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"rule"}
                    </span>
                    <span className="font-label-md text-label-md font-semibold">
                      {"Strict Mode Separation"}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    <strong>
                      {"Journey 2 (Ordinary Chat)"}
                    </strong>
                    {" enforces complete cognitive freedom: no target deadlines, no grade projections, and no forced milestone popups.\n          "}
                  </p>
                  <p className="font-body-sm text-body-sm text-secondary">
                    <strong>
                      {"Journey 3 (Exam Sprint)"}
                    </strong>
                    {" activates the 80/20 syllabus parser, countdown timer, teach-back oral checks, and high-stakes target tracking.\n          "}
                  </p>
                </div>
                <div className="p-space-md rounded-xl bg-surface-container-lowest shadow-sm flex flex-col gap-2">
                  <div className="flex items-center gap-1.5 text-primary">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"verified"}
                    </span>
                    <span className="font-label-md text-label-md font-semibold">
                      {"Verifiable Evidence Contracts"}
                    </span>
                  </div>
                  <p className="font-body-sm text-body-sm text-secondary">
                    {"\n            Knowledge Graph nodes NEVER increment based on passive chat reading alone. A node changes mastery score only upon satisfying a verifiable unit test, successful code run, or oral Socratic teach-back confirmation.\n          "}
                  </p>
                  <span className="font-code text-code text-secondary text-[11px]">
                    {"Strict Epistemological Grounding"}
                  </span>
                </div>
              </div>
            </div>
          </aside>
          <div className="fixed inset-0 z-50 bg-on-surface/20 backdrop-blur-sm hidden items-start justify-center pt-24 px-4" id="search-modal">
            <div className="w-full max-w-xl bg-surface-container-lowest rounded-2xl shadow-xl p-space-lg flex flex-col gap-space-md">
              <div className="flex items-center justify-between">
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  {"SOLVE Unified Quick Index"}
                </span>
                <button className="w-6 h-6 rounded flex items-center justify-center hover:bg-surface-container text-secondary" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <div className="p-space-xs rounded-xl bg-surface-container-low flex items-center gap-space-sm px-space-md">
                <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
                  {"search"}
                </span>
                <input className="bg-transparent border-0 outline-none flex-1 font-body-md text-body-md text-on-surface" id="modal-search-input" placeholder="Jump to journey, concept, code file, or exam..." type="text" />
              </div>
              <div className="flex flex-col gap-1 max-h-72 overflow-y-auto">
                <div className="p-space-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-between" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"chat"}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {"Jump to: Explain Recursion (Journey 2)"}
                    </span>
                  </div>
                  <span className="font-code text-code text-secondary">
                    {"Simple Chat"}
                  </span>
                </div>
                <div className="p-space-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-between" onClick={event => { const result = actions.current[22]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"speed"}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {"Jump to: Stanford Midterm 80/20 Plan"}
                    </span>
                  </div>
                  <span className="font-code text-code text-secondary">
                    {"Exam Prep"}
                  </span>
                </div>
                <div className="p-space-sm rounded-lg hover:bg-surface-container-low transition-colors cursor-pointer flex items-center justify-between" onClick={event => { const result = actions.current[23]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                      {"hub"}
                    </span>
                    <span className="font-label-md text-label-md text-on-surface">
                      {"Jump to: Knowledge Topology & Contracts"}
                    </span>
                  </div>
                  <span className="font-code text-code text-secondary">
                    {"Graph"}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
