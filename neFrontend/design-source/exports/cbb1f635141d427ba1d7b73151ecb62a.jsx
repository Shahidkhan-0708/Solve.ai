'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/cbb1f635141d427ba1d7b73151ecb62a';
import './cbb1f635141d427ba1d7b73151ecb62a.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-cbb1f635141d427ba1d7b73151ecb62a bg-surface font-body-md text-on-surface antialiased" data-screen-id="cbb1f635141d427ba1d7b73151ecb62a">
    <aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-14 px-space-md flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-6 h-6 rounded bg-primary text-on-primary flex items-center justify-center font-headline-sm text-headline-sm font-bold tracking-tight">
              {"S"}
            </div>
            <span className="font-headline-sm text-headline-sm tracking-tight text-on-surface uppercase font-semibold">
              {"Solve"}
            </span>
          </div>
          <button aria-label="Collapse sidebar" className="text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors rounded p-1 flex items-center justify-center" type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"dock_to_right"}
            </span>
          </button>
        </div>
        <div className="px-space-md py-space-xs">
          <button className="w-full flex items-center justify-center gap-space-sm bg-primary text-on-primary hover:bg-primary-container hover:text-on-primary px-space-md py-2.5 rounded-xl font-label-md text-label-md transition-all shadow-[0_1px_3px_rgba(0,0,0,0.04)]" type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"add"}
            </span>
            <span>
              {"New Session"}
            </span>
          </button>
        </div>
        <div className="px-space-md pt-space-sm pb-space-xs">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-2.5 text-[16px] text-outline pointer-events-none" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full pl-8 pr-3 py-1.5 bg-surface-container-lowest text-on-surface placeholder:text-outline font-body-sm text-body-sm rounded-lg focus:outline-none transition-all" placeholder="Search chats..." type="text" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-space-md space-y-space-md py-space-xs">
          <div className="space-y-1">
            <div className="px-2 py-1 font-label-sm text-label-sm uppercase tracking-wider text-outline">
              {"Destinations"}
            </div>
            <nav className="space-y-0.5 flex flex-col" data-active-classes="bg-primary-container text-on-primary rounded-lg font-label-md">
              <a aria-current="page" className="flex items-center gap-2.5 px-2.5 py-1.5 transition-all bg-primary-container text-on-primary rounded-lg font-label-md" data-path="learning-workspace" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"school"}
                </span>
                <span>
                  {"Learning Workspace"}
                </span>
              </a>
              <a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="strategy-planner" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"route"}
                </span>
                <span>
                  {"My Plan / Strategy"}
                </span>
              </a>
              <a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="knowledge-graph" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"hub"}
                </span>
                <span>
                  {"Knowledge Graph"}
                </span>
              </a>
              <a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all" data-path="target-status" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"track_changes"}
                </span>
                <span>
                  {"Target Status"}
                </span>
              </a>
            </nav>
          </div>
          <div className="space-y-1">
            <div className="px-2 py-1 font-label-sm text-label-sm uppercase tracking-wider text-outline">
              {"Recent Sessions"}
            </div>
            <nav className="space-y-0.5 flex flex-col" data-active-classes="bg-surface-container text-on-surface rounded-lg font-label-md">
              <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all truncate" data-path="data-structures-preparation" href="#">
                <span className="material-symbols-outlined text-[16px] flex-shrink-0" aria-hidden="true">
                  {"forum"}
                </span>
                <span className="truncate">
                  {"Data Structures mid preparation"}
                </span>
              </a>
              <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all truncate" data-path="transformer-mechanics" href="#">
                <span className="material-symbols-outlined text-[16px] flex-shrink-0" aria-hidden="true">
                  {"forum"}
                </span>
                <span className="truncate">
                  {"Transformer Attention Mechanics"}
                </span>
              </a>
              <a className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg font-body-sm text-body-sm text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-all truncate" data-path="vector-fields" href="#">
                <span className="material-symbols-outlined text-[16px] flex-shrink-0" aria-hidden="true">
                  {"forum"}
                </span>
                <span className="truncate">
                  {"Calculus III: Vector Fields"}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-low flex flex-col gap-1">
        <a className="flex items-center gap-2.5 px-2.5 py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" data-path="settings-preferences" href="#">
          <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
            {"settings"}
          </span>
          <span>
            {"Settings & Preferences"}
          </span>
        </a>
        <div className="flex items-center justify-between px-2 pt-space-xs">
          <div className="flex items-center gap-2.5 min-w-0">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover flex-shrink-0" src="/assets/7e17bca1d79158ba.png" />
            <div className="flex flex-col min-w-0">
              <span className="font-label-md text-label-md text-on-surface truncate leading-tight font-medium">
                {"Alex Mercer"}
              </span>
              <span className="font-label-sm text-label-sm text-outline truncate leading-tight">
                {"Pro Scholar"}
              </span>
            </div>
          </div>
          <button aria-label="Account menu" className="text-outline hover:text-on-surface p-1 rounded transition-colors" type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"more_vert"}
            </span>
          </button>
        </div>
      </div>
    </aside>
    <div className="pl-64 flex flex-col min-h-screen">
      <header className="fixed top-0 left-64 right-0 h-14 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 px-space-lg flex items-center justify-between">
        <div className="flex items-center gap-space-lg">
          <nav className="flex items-center bg-surface-container p-0.5 rounded-lg font-label-md text-label-md" data-active-classes="bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)]">
            <a aria-current="page" className="px-3 py-1 rounded transition-all bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)]" data-path="learning-workspace" href="#">
              {"Chat"}
            </a>
            <a className="px-3 py-1 rounded text-on-surface-variant hover:text-on-surface transition-all" data-path="study-curriculum" href="#">
              {"Study"}
            </a>
          </nav>
          <div className="hidden sm:flex items-center gap-2 px-2.5 py-1 rounded-full bg-surface-container-low">
            <span className="w-1.5 h-1.5 rounded-full bg-on-surface animate-pulse"></span>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {"SOLVE-Engine v4.2 • Latency 14ms"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-md">
          <button aria-label="Mentor shortcuts" className="text-on-surface-variant hover:text-on-surface p-1.5 rounded-lg hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"keyboard_command_key"}
            </span>
          </button>
          <button aria-label="Session history" className="text-on-surface-variant hover:text-on-surface p-1.5 rounded-lg hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"history"}
            </span>
          </button>
          <div className="flex items-center gap-space-sm pl-space-xs">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover" src="/assets/7e17bca1d79158ba.png" />
          </div>
        </div>
      </header>
      <main className="w-full pt-14 flex-1 bg-surface">
        <div className="flex flex-col w-full pb-36">
          <section className="sticky top-14 z-30 w-full bg-surface/90 backdrop-blur-md px-space-md md:px-space-xl py-3 shadow-sm transition-all">
            <div className="max-w-[780px] mx-auto flex flex-col sm:flex-row sm:items-center justify-between gap-3">
              <div className="min-w-0">
                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center justify-center w-5 h-5 rounded-full bg-surface-container text-on-surface-variant font-label-sm text-label-sm font-semibold">
                    {"03"}
                  </span>
                  <h1 className="font-headline-sm text-headline-sm text-on-surface font-semibold tracking-tight truncate">
                    {"Linked lists"}
                  </h1>
                  <span className="bg-surface-container-high text-on-surface-variant px-2 py-0.5 rounded-full font-label-sm text-label-sm">
                    {"Active Unit"}
                  </span>
                </div>
                <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5 flex items-center gap-1.5">
                  <span>
                    {"Part of your Data Structures plan"}
                  </span>
                  <span className="w-1 h-1 rounded-full bg-outline"></span>
                  <span>
                    {"Suggested session: 40 min"}
                  </span>
                </p>
              </div>
              <div className="flex items-center gap-2 self-start sm:self-auto flex-shrink-0">
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all shadow-sm" id="btn-open-sources" type="button">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden="true">
                    {"folder_open"}
                  </span>
                  <span>
                    {"View sources"}
                  </span>
                  <span className="px-1.5 py-0.2 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant">
                    {"2"}
                  </span>
                </button>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container-lowest text-on-surface hover:bg-surface-container font-label-md text-label-md transition-all shadow-sm" id="btn-open-plan" type="button">
                  <span className="material-symbols-outlined text-[16px] text-on-surface-variant" aria-hidden="true">
                    {"view_timeline"}
                  </span>
                  <span>
                    {"View plan"}
                  </span>
                </button>
              </div>
            </div>
          </section>
          <main className="w-full max-w-[780px] mx-auto px-space-md sm:px-space-lg pt-space-lg flex flex-col gap-space-xl">
            <div className="flex flex-col items-end w-full animate-fade-in">
              <div className="flex items-center gap-2 mb-1.5 pr-1">
                <span className="font-label-sm text-label-sm text-outline">
                  {"You"}
                </span>
                <span className="w-1 h-1 rounded-full bg-outline"></span>
                <time className="font-label-sm text-label-sm text-outline">
                  {"10:14 AM"}
                </time>
              </div>
              <div className="max-w-[85%] sm:max-w-[75%] rounded-2xl rounded-tr-sm bg-surface-container-high px-4 py-3 shadow-sm">
                <p className="font-body-md text-body-md text-on-surface leading-relaxed">
                  {"\n          Explain linked lists simply. I get confused about the links.\n        "}
                </p>
              </div>
            </div>
            <article className="flex flex-col gap-space-lg bg-surface-container-lowest rounded-2xl p-space-lg sm:p-space-xl shadow-sm transition-all">
              <header className="flex flex-wrap items-center justify-between gap-3 pb-3">
                <div className="flex items-center gap-3">
                  <div className="relative w-9 h-9 rounded-xl bg-primary text-on-primary flex items-center justify-center shadow-sm">
                    <span className="material-symbols-outlined text-[20px]" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                      {"psychology"}
                    </span>
                    <span className="absolute -bottom-1 -right-1 w-3 h-3 rounded-full bg-surface-container-lowest flex items-center justify-center">
                      <span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                    </span>
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"SOLVE AI Mentor"}
                      </span>
                      <span className="px-2 py-0.5 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface-variant font-mono">
                        {"v4.2"}
                      </span>
                    </div>
                    <div className="flex items-center gap-2 text-outline font-label-sm text-label-sm">
                      <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                        {"schedule"}
                      </span>
                      <span>
                        {"Thinking time: 1.2s"}
                      </span>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-surface-container text-on-surface hover:bg-surface-container-high font-label-md text-label-md transition-colors" id="toggle-audio-btn" type="button">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"volume_up"}
                  </span>
                  <span id="audio-btn-label">
                    {"Listen"}
                  </span>
                </button>
              </header>
              <section className="hidden flex-col gap-2 p-3.5 rounded-xl bg-surface-container-low transition-all shadow-inner" id="voice-player">
                <div className="flex items-center justify-between gap-2">
                  <div className="flex items-center gap-2.5 min-w-0">
                    <button className="w-8 h-8 rounded-full bg-primary text-on-primary flex items-center justify-center hover:bg-primary-container transition-transform active:scale-95 flex-shrink-0" id="audio-play-toggle" type="button">
                      <span className="material-symbols-outlined text-[18px]" id="audio-play-icon" aria-hidden="true">
                        {"pause"}
                      </span>
                    </button>
                    <div className="min-w-0">
                      <p className="font-label-md text-label-md text-on-surface font-medium truncate">
                        {"Synthesized Conceptual Summary"}
                      </p>
                      <p className="font-body-sm text-body-sm text-on-surface-variant truncate">
                        {"Singly linked list core concept · AI Voice 02"}
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <button className="px-2 py-1 rounded bg-surface-container-lowest font-mono font-label-sm text-label-sm text-on-surface hover:bg-surface-container" id="audio-speed-btn" type="button">
                      {"1.0x"}
                    </button>
                    <button className="p-1 rounded text-outline hover:text-on-surface hover:bg-surface-container" id="audio-close-btn" type="button">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"close"}
                      </span>
                    </button>
                  </div>
                </div>
                <div className="flex items-center gap-3 pt-1">
                  <span className="font-mono font-label-sm text-label-sm text-outline min-w-[34px]" id="audio-elapsed">
                    {"0:42"}
                  </span>
                  <div className="flex-1 flex items-center gap-0.5 h-6 cursor-pointer bg-surface-container rounded px-1.5" id="audio-waveform">
                    <span className="w-1 bg-primary h-2 rounded-full"></span>
                    <span className="w-1 bg-primary h-3.5 rounded-full"></span>
                    <span className="w-1 bg-primary h-5 rounded-full"></span>
                    <span className="w-1 bg-primary h-3 rounded-full"></span>
                    <span className="w-1 bg-primary h-4.5 rounded-full"></span>
                    <span className="w-1 bg-primary h-6 rounded-full animate-pulse"></span>
                    <span className="w-1 bg-primary h-3 rounded-full animate-pulse"></span>
                    <span className="w-1 bg-primary h-5 rounded-full"></span>
                    <span className="w-1 bg-primary h-4 rounded-full"></span>
                    <span className="w-1 bg-primary h-2.5 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-4 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-5 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-3 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-2 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-4.5 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-2 rounded-full"></span>
                    <span className="w-1 bg-surface-variant h-3.5 rounded-full"></span>
                  </div>
                  <span className="font-mono font-label-sm text-label-sm text-outline min-w-[34px]">
                    {"1:38"}
                  </span>
                </div>
              </section>
              <section className="space-y-2">
                <h2 className="font-headline-md text-headline-md text-on-surface font-semibold tracking-tight">
                  {"Think of it as a chain of nodes."}
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant leading-relaxed">
                  {"\n          A linked list stores items in distinct units called "}
                  <strong className="text-on-surface font-semibold">
                    {"nodes"}
                  </strong>
                  {". Each node contains two things: its actual "}
                  <span className="bg-surface-container px-1.5 py-0.5 rounded text-on-surface font-medium font-mono text-body-sm">
                    {"value"}
                  </span>
                  {" and a "}
                  <span className="bg-surface-container px-1.5 py-0.5 rounded text-on-surface font-medium font-mono text-body-sm">
                    {"reference (link)"}
                  </span>
                  {" pointing directly to the memory address of the next node. The entire sequence is accessed starting strictly at the "}
                  <strong className="text-on-surface font-semibold">
                    {"head"}
                  </strong>
                  {" pointer.\n        "}
                </p>
              </section>
              <aside className="relative overflow-hidden rounded-xl bg-surface-container-low p-space-md sm:p-space-lg flex gap-3.5 shadow-sm">
                <div className="w-8 h-8 rounded-lg bg-surface-container text-on-surface flex items-center justify-center flex-shrink-0">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"lightbulb"}
                  </span>
                </div>
                <div className="space-y-1 min-w-0">
                  <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-outline">
                    {"Analogy"}
                  </span>
                  <p className="font-body-md text-body-md text-on-surface leading-normal">
                    {"\n            Imagine a treasure hunt: each clue gives you something useful and tells you where to find the next clue. A linked-list node works in a similar way—it never needs to know the entire map, just where to jump next.\n          "}
                  </p>
                </div>
              </aside>
              <section className="flex flex-col gap-3 rounded-xl bg-surface-bright p-space-md sm:p-space-lg shadow-sm">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-outline text-[18px]" aria-hidden="true">
                      {"schema"}
                    </span>
                    <span className="font-label-md text-label-md font-semibold text-on-surface">
                      {"Singly Linked List Memory Architecture"}
                    </span>
                  </div>
                  <button className="flex items-center gap-1 px-2.5 py-1 rounded bg-surface-container hover:bg-surface-container-high text-on-surface font-label-sm text-label-sm transition-colors" id="btn-expand-diagram" type="button">
                    <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                      {"open_in_full"}
                    </span>
                    <span>
                      {"Expand diagram"}
                    </span>
                  </button>
                </div>
                <div className="w-full overflow-x-auto py-4 px-2 scrollbar-none bg-surface-container-lowest rounded-lg">
                  <div className="min-w-[620px] flex items-center justify-start gap-2 select-none py-2">
                    <div className="flex flex-col items-center">
                      <span className="font-mono font-label-sm text-label-sm text-outline mb-1 font-semibold uppercase tracking-wider">
                        {"head"}
                      </span>
                      <div className="w-14 h-11 rounded-lg bg-surface-container text-on-surface font-mono font-label-sm text-label-sm flex items-center justify-center shadow-sm">
                        {"\n                0x1A4\n              "}
                      </div>
                    </div>
                    <div className="flex items-center px-1 text-on-surface">
                      <svg className="w-7 h-4 text-on-surface" fill="none" viewBox="0 0 28 16">
                        <path d="M0 8H24M24 8L17 1M24 8L17 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="group relative flex flex-col items-center">
                      <span className="font-mono font-label-sm text-label-sm text-outline mb-1 font-medium">
                        {"Node 1 (0x1A4)"}
                      </span>
                      <div className="flex rounded-lg overflow-hidden bg-surface-container-lowest shadow-md">
                        <div className="w-16 h-12 flex flex-col items-center justify-center bg-surface-container-low px-2">
                          <span className="font-label-sm text-[10px] uppercase text-outline">
                            {"val"}
                          </span>
                          <span className="font-mono font-label-md text-label-md font-bold text-on-surface">
                            {"10"}
                          </span>
                        </div>
                        <div className="w-14 h-12 flex flex-col items-center justify-center bg-surface-container px-2">
                          <span className="font-label-sm text-[10px] uppercase text-outline">
                            {"next"}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-primary mt-0.5"></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-1 text-on-surface">
                      <svg className="w-7 h-4 text-on-surface" fill="none" viewBox="0 0 28 16">
                        <path d="M0 8H24M24 8L17 1M24 8L17 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-mono font-label-sm text-label-sm text-outline mb-1 font-medium">
                        {"Node 2 (0x2F8)"}
                      </span>
                      <div className="flex rounded-lg overflow-hidden bg-surface-container-lowest shadow-md">
                        <div className="w-16 h-12 flex flex-col items-center justify-center bg-surface-container-low px-2">
                          <span className="font-label-sm text-[10px] uppercase text-outline">
                            {"val"}
                          </span>
                          <span className="font-mono font-label-md text-label-md font-bold text-on-surface">
                            {"20"}
                          </span>
                        </div>
                        <div className="w-14 h-12 flex flex-col items-center justify-center bg-surface-container px-2">
                          <span className="font-label-sm text-[10px] uppercase text-outline">
                            {"next"}
                          </span>
                          <span className="w-2.5 h-2.5 rounded-full bg-primary mt-0.5"></span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-1 text-on-surface">
                      <svg className="w-7 h-4 text-on-surface" fill="none" viewBox="0 0 28 16">
                        <path d="M0 8H24M24 8L17 1M24 8L17 15" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                      </svg>
                    </div>
                    <div className="flex flex-col items-center">
                      <span className="font-mono font-label-sm text-label-sm text-outline mb-1 font-medium">
                        {"Node 3 (0x3C1)"}
                      </span>
                      <div className="flex rounded-lg overflow-hidden bg-surface-container-lowest shadow-md">
                        <div className="w-16 h-12 flex flex-col items-center justify-center bg-surface-container-low px-2">
                          <span className="font-label-sm text-[10px] uppercase text-outline">
                            {"val"}
                          </span>
                          <span className="font-mono font-label-md text-label-md font-bold text-on-surface">
                            {"30"}
                          </span>
                        </div>
                        <div className="w-14 h-12 flex flex-col items-center justify-center bg-surface-container px-2">
                          <span className="font-label-sm text-[10px] uppercase text-outline">
                            {"next"}
                          </span>
                          <span className="font-mono font-label-sm text-label-sm text-outline font-semibold">
                            {"null"}
                          </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center px-1 text-outline">
                      <svg className="w-6 h-4 text-outline" fill="none" viewBox="0 0 24 16">
                        <path d="M0 8H20M20 8L14 2M20 8L14 14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
                      </svg>
                    </div>
                    <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-mono text-outline font-bold text-sm" title="Ground null pointer">
                      {"\n              ∅\n            "}
                    </div>
                  </div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between text-outline text-body-sm font-body-sm pt-1 gap-2">
                  <p className="flex items-center gap-1.5">
                    <span className="material-symbols-outlined text-[15px] text-on-surface-variant" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                    <span>
                      {"Follow the "}
                      <span className="font-mono text-on-surface font-medium">
                        {"Next"}
                      </span>
                      {" reference to move sequentially from one node to another."}
                    </span>
                  </p>
                  <span className="font-mono font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface self-start sm:self-auto">
                    {"O(n) traversal"}
                  </span>
                </div>
              </section>
              <section className="flex flex-col gap-4 rounded-xl bg-surface-container-low p-space-md sm:p-space-lg shadow-sm">
                <div className="flex items-center justify-between flex-wrap gap-2">
                  <div>
                    <span className="font-label-sm text-label-sm font-semibold uppercase tracking-wider text-outline">
                      {"Worked Example"}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                      {"Adding a node at the beginning (Prepending)"}
                    </h3>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container px-2.5 py-1 rounded-full font-label-sm text-label-sm">
                    <span className="text-on-surface font-medium">
                      {"Step"}
                    </span>
                    <span className="font-bold text-on-surface" id="step-number">
                      {"1"}
                    </span>
                    <span className="text-outline">
                      {"of 3"}
                    </span>
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-surface-container-lowest flex flex-col gap-3 min-h-[148px] justify-center transition-all">
                  <div className="space-y-1" id="step-text-container">
                    <p className="font-body-md text-body-md font-semibold text-on-surface" id="step-title">
                      {"Step 1: Create a new node containing 5."}
                    </p>
                    <p className="font-body-sm text-body-sm text-on-surface-variant leading-relaxed" id="step-desc">
                      {"\n              We allocate memory for the new node. Its value is set to 5, and its next pointer initially points to null (detached from the list).\n            "}
                    </p>
                  </div>
                  <div className="overflow-x-auto py-2" id="step-graphic"></div>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pt-1">
                  <button className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-all self-start" id="btn-ask-step" type="button">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"add_circle"}
                    </span>
                    <span>
                      {"+ Ask about this step"}
                    </span>
                  </button>
                  <div className="flex items-center gap-2 self-end sm:self-auto">
                    <button className="px-3 py-1.5 rounded-lg bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md disabled:opacity-40 transition-colors" disabled id="btn-prev-step" type="button">
                      {"\n              Previous Step\n            "}
                    </button>
                    <button className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors shadow-sm" id="btn-next-step" type="button">
                      {"\n              Next Step →\n            "}
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex flex-wrap items-center gap-2 pt-1">
                <button className="px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5" id="pill-explain-simple" type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"sentiment_satisfied"}
                  </span>
                  <span>
                    {"Explain more simply"}
                  </span>
                </button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5" id="pill-show-example" type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"auto_stories"}
                  </span>
                  <span>
                    {"Show another example"}
                  </span>
                </button>
                <button className="px-3 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1.5" id="pill-listen-inline" type="button">
                  <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                    {"headphones"}
                  </span>
                  <span>
                    {"Listen ♫"}
                  </span>
                </button>
                <div className="relative inline-block text-left">
                  <button className="px-2.5 py-1.5 rounded-full bg-surface-container hover:bg-surface-container-high text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all flex items-center gap-1" id="btn-more-actions" type="button">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"more_horiz"}
                    </span>
                  </button>
                  <div className="hidden absolute left-0 bottom-full mb-2 w-48 rounded-xl bg-surface-container-lowest p-1 shadow-lg z-20" id="more-actions-menu">
                    <button className="w-full text-left px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"format_align_left"}
                      </span>
                      <span>
                        {"Explain in more detail"}
                      </span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"bookmark_add"}
                      </span>
                      <span>
                        {"Add to study cards"}
                      </span>
                    </button>
                    <button className="w-full text-left px-3 py-2 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors flex items-center gap-2" type="button">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"code"}
                      </span>
                      <span>
                        {"View in C++ / Python"}
                      </span>
                    </button>
                  </div>
                </div>
              </section>
              <section className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-xl bg-surface-container-low mt-2">
                <div>
                  <h4 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {"Ready to try it?"}
                  </h4>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Check your understanding with a short 2-minute diagnostic question."}
                  </p>
                </div>
                <div className="flex items-center gap-2.5 flex-shrink-0">
                  <button className="px-3.5 py-2 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md transition-colors" id="btn-still-question" type="button">
                    {"\n            I still have a question\n          "}
                  </button>
                  <button className="px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md font-medium transition-all shadow-sm" id="btn-practice-question" type="button">
                    {"\n            Try a practice question →\n          "}
                  </button>
                </div>
              </section>
              <footer className="flex items-center justify-between pt-2">
                <div className="flex items-center gap-1">
                  <span className="font-label-sm text-label-sm text-outline mr-1.5">
                    {"Feedback:"}
                  </span>
                  <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors" id="btn-feedback-thumbup" title="Mark helpful" type="button" aria-label="Mark helpful">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"thumb_up"}
                    </span>
                    <span className="hidden sm:inline">
                      {"Helpful"}
                    </span>
                  </button>
                  <div className="relative inline-block">
                    <button className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors" id="btn-feedback-thumbdown" title="Not helpful" type="button" aria-label="Not helpful">
                      <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                        {"thumb_down"}
                      </span>
                      <span className="hidden sm:inline">
                        {"Not helpful"}
                      </span>
                    </button>
                    <div className="hidden absolute left-0 bottom-full mb-2 w-52 rounded-xl bg-surface-container-lowest p-1 shadow-lg z-20" id="unhelpful-menu">
                      <p className="px-3 py-1 font-label-sm text-label-sm text-outline font-semibold">
                        {"Reason:"}
                      </p>
                      <button className="feedback-reason w-full text-left px-3 py-1.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" type="button">
                        {"Too complicated"}
                      </button>
                      <button className="feedback-reason w-full text-left px-3 py-1.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" type="button">
                        {"Too brief"}
                      </button>
                      <button className="feedback-reason w-full text-left px-3 py-1.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" type="button">
                        {"Doesn't answer"}
                      </button>
                      <button className="feedback-reason w-full text-left px-3 py-1.5 rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container transition-colors" type="button">
                        {"Incorrect information"}
                      </button>
                    </div>
                  </div>
                </div>
                <button className="flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container font-label-sm text-label-sm transition-colors" id="btn-copy-response" title="Copy response to clipboard" type="button" aria-label="Copy response to clipboard">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"content_copy"}
                  </span>
                  <span id="copy-label">
                    {"Copy"}
                  </span>
                </button>
              </footer>
            </article>
          </main>
          <section className="fixed bottom-12 left-64 right-0 z-40 px-4 pointer-events-none">
            <div className="max-w-[780px] mx-auto pointer-events-auto">
              <div className="rounded-2xl bg-surface-container-lowest p-2 shadow-xl flex flex-col gap-1.5">
                <div className="hidden items-center self-start gap-1.5 px-2.5 py-1 rounded-full bg-surface-container font-label-sm text-label-sm text-on-surface" id="composer-context-chip">
                  <span className="material-symbols-outlined text-[14px] text-outline" aria-hidden="true">
                    {"link"}
                  </span>
                  <span className="font-medium" id="context-chip-label">
                    {"Context: Adding node at head (Step 1)"}
                  </span>
                  <button className="text-outline hover:text-on-surface rounded-full p-0.5" id="btn-remove-context" type="button">
                    <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                      {"close"}
                    </span>
                  </button>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 rounded-xl text-outline hover:text-on-surface hover:bg-surface-container transition-colors" title="Attach file or reference" type="button" aria-label="Attach file or reference">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"add"}
                    </span>
                  </button>
                  <input className="flex-1 bg-transparent py-2.5 text-on-surface placeholder:text-outline font-body-md text-body-md focus:outline-none" id="mentor-composer-input" placeholder="Ask about this topic or step..." type="text" />
                  <div className="flex items-center gap-1">
                    <button className="p-2 rounded-xl text-outline hover:text-on-surface hover:bg-surface-container transition-colors" id="btn-mic-input" title="Voice input" type="button" aria-label="Voice input">
                      <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                        {"mic"}
                      </span>
                    </button>
                    <button className="w-9 h-9 rounded-full bg-primary text-on-primary hover:bg-primary-container flex items-center justify-center transition-transform active:scale-95 shadow-sm" id="btn-send-message" title="Send message" type="button" aria-label="Send message">
                      <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                        {"arrow_upward"}
                      </span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </section>
          <aside className="fixed bottom-0 left-64 right-0 h-11 bg-surface-container-lowest z-50 px-4 flex items-center justify-between shadow-[0_-1px_4px_rgba(0,0,0,0.04)] select-none">
            <div className="flex items-center gap-2 overflow-x-auto scrollbar-none py-1">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-outline px-1 font-semibold flex-shrink-0">
                {"Demo States:"}
              </span>
              <button className="state-pill px-2.5 py-1 rounded-full bg-primary text-on-primary font-label-sm text-label-sm transition-all" data-state="default" type="button">
                {"Default Teaching"}
              </button>
              <button className="state-pill px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" data-state="diagram-modal" type="button">
                {"Diagram Expanded"}
              </button>
              <button className="state-pill px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" data-state="step-3" type="button">
                {"Step 3 (Final Sequence)"}
              </button>
              <button className="state-pill px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" data-state="audio-active" type="button">
                {"Audio Player Active"}
              </button>
              <button className="state-pill px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" data-state="sources-drawer" type="button">
                {"View Sources Drawer"}
              </button>
              <button className="state-pill px-2.5 py-1 rounded-full bg-surface-container text-on-surface-variant hover:text-on-surface font-label-sm text-label-sm transition-all" data-state="plan-overlay" type="button">
                {"View Plan Outline"}
              </button>
            </div>
            <div className="hidden md:flex items-center gap-1 text-outline font-label-sm text-label-sm flex-shrink-0 pl-2">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              <span>
                {"Live Model Ready"}
              </span>
            </div>
          </aside>
          <dialog className="hidden fixed inset-0 z-50 w-full h-full bg-primary/20 backdrop-blur-sm p-4 items-center justify-center m-0 max-w-none max-h-none" id="diagram-modal">
            <div className="relative w-full max-w-4xl bg-surface-container-lowest rounded-2xl shadow-2xl p-6 flex flex-col gap-4 max-h-[921px] overflow-y-auto">
              <div className="flex items-center justify-between pb-3">
                <div>
                  <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold">
                    {"High-Resolution Structural Diagram"}
                  </h3>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"Singly Linked List: Head pointer, node payloads, and contiguous memory independence"}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm" id="btn-zoom-in" title="Zoom in" type="button" aria-label="Zoom in">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"zoom_in"}
                    </span>
                  </button>
                  <button className="p-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm" id="btn-zoom-out" title="Zoom out" type="button" aria-label="Zoom out">
                    <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                      {"zoom_out"}
                    </span>
                  </button>
                  <button className="px-2.5 py-1.5 rounded-lg bg-surface-container text-on-surface hover:bg-surface-container-high font-label-sm text-label-sm" id="btn-zoom-reset" type="button">
                    {"Fit"}
                  </button>
                  <button className="p-1.5 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container ml-2" id="btn-close-diagram-modal" type="button">
                    <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                      {"close"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="w-full bg-surface-container-low rounded-xl p-8 flex items-center justify-center overflow-x-auto min-h-[280px] transition-transform" id="modal-diagram-canvas">
                <div className="flex items-center gap-4 select-none scale-110 transform origin-center">
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-label-sm text-label-sm text-outline mb-1 font-bold">
                      {"HEAD"}
                    </span>
                    <div className="w-20 h-14 rounded-xl bg-surface-container-lowest text-on-surface font-mono font-label-md text-label-md flex flex-col items-center justify-center shadow-md">
                      <span className="text-[10px] text-outline uppercase font-semibold">
                        {"Address"}
                      </span>
                      <span className="font-bold">
                        {"0x1A4"}
                      </span>
                    </div>
                  </div>
                  <svg className="w-10 h-5 text-on-surface" fill="none" viewBox="0 0 40 20">
                    <path d="M0 10H36M36 10L26 2M36 10L26 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-label-sm text-label-sm text-outline mb-1">
                      {"Heap: 0x1A4"}
                    </span>
                    <div className="flex rounded-xl overflow-hidden bg-surface-container-lowest shadow-lg">
                      <div className="w-20 h-16 flex flex-col items-center justify-center bg-surface-container-lowest p-2">
                        <span className="font-label-sm text-[11px] uppercase text-outline">
                          {"val: int"}
                        </span>
                        <span className="font-mono text-headline-sm font-bold text-on-surface">
                          {"10"}
                        </span>
                      </div>
                      <div className="w-16 h-16 flex flex-col items-center justify-center bg-surface-container p-2">
                        <span className="font-label-sm text-[10px] uppercase text-outline">
                          {"next*"}
                        </span>
                        <span className="w-3 h-3 rounded-full bg-primary mt-1"></span>
                      </div>
                    </div>
                  </div>
                  <svg className="w-10 h-5 text-on-surface" fill="none" viewBox="0 0 40 20">
                    <path d="M0 10H36M36 10L26 2M36 10L26 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-label-sm text-label-sm text-outline mb-1">
                      {"Heap: 0x2F8"}
                    </span>
                    <div className="flex rounded-xl overflow-hidden bg-surface-container-lowest shadow-lg">
                      <div className="w-20 h-16 flex flex-col items-center justify-center bg-surface-container-lowest p-2">
                        <span className="font-label-sm text-[11px] uppercase text-outline">
                          {"val: int"}
                        </span>
                        <span className="font-mono text-headline-sm font-bold text-on-surface">
                          {"20"}
                        </span>
                      </div>
                      <div className="w-16 h-16 flex flex-col items-center justify-center bg-surface-container p-2">
                        <span className="font-label-sm text-[10px] uppercase text-outline">
                          {"next*"}
                        </span>
                        <span className="w-3 h-3 rounded-full bg-primary mt-1"></span>
                      </div>
                    </div>
                  </div>
                  <svg className="w-10 h-5 text-on-surface" fill="none" viewBox="0 0 40 20">
                    <path d="M0 10H36M36 10L26 2M36 10L26 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5"></path>
                  </svg>
                  <div className="flex flex-col items-center">
                    <span className="font-mono font-label-sm text-label-sm text-outline mb-1">
                      {"Heap: 0x3C1"}
                    </span>
                    <div className="flex rounded-xl overflow-hidden bg-surface-container-lowest shadow-lg">
                      <div className="w-20 h-16 flex flex-col items-center justify-center bg-surface-container-lowest p-2">
                        <span className="font-label-sm text-[11px] uppercase text-outline">
                          {"val: int"}
                        </span>
                        <span className="font-mono text-headline-sm font-bold text-on-surface">
                          {"30"}
                        </span>
                      </div>
                      <div className="w-16 h-16 flex flex-col items-center justify-center bg-surface-container p-2">
                        <span className="font-label-sm text-[10px] uppercase text-outline">
                          {"next*"}
                        </span>
                        <span className="font-mono font-label-sm text-label-sm text-outline font-bold">
                          {"null"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <svg className="w-8 h-5 text-outline" fill="none" viewBox="0 0 32 20">
                    <path d="M0 10H28M28 10L20 2M28 10L20 18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
                  </svg>
                  <div className="w-12 h-12 rounded-full bg-surface-container-high flex items-center justify-center font-mono font-bold text-lg text-outline">
                    {"\n            ∅\n          "}
                  </div>
                </div>
              </div>
              <div className="rounded-xl bg-surface-container-low p-4 space-y-2">
                <h4 className="font-label-md text-label-md font-semibold text-on-surface">
                  {"Accessible Structural Breakdown"}
                </h4>
                <ul className="font-body-sm text-body-sm text-on-surface-variant space-y-1 list-disc list-inside">
                  <li>
                    <strong>
                      {"Memory non-contiguity:"}
                    </strong>
                    {" Unlike an Array, nodes "}
                    <code className="font-mono text-on-surface">
                      {"0x1A4"}
                    </code>
                    {", "}
                    <code className="font-mono text-on-surface">
                      {"0x2F8"}
                    </code>
                    {", and "}
                    <code className="font-mono text-on-surface">
                      {"0x3C1"}
                    </code>
                    {" are scattered arbitrarily across system RAM."}
                  </li>
                  <li>
                    <strong>
                      {"Pointer overhead:"}
                    </strong>
                    {" Each item stores an auxiliary 64-bit reference address pointing to its successor."}
                  </li>
                  <li>
                    <strong>
                      {"Boundary termination:"}
                    </strong>
                    {" Node 3 evaluates its successor link to null ("}
                    <code className="font-mono">
                      {"nullptr"}
                    </code>
                    {" or "}
                    <code className="font-mono">
                      {"None"}
                    </code>
                    {"), terminating iteration."}
                  </li>
                </ul>
              </div>
              <div className="flex justify-end gap-2 pt-2">
                <button className="px-4 py-2 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md" id="btn-modal-close-footer" type="button">
                  {"Close view"}
                </button>
              </div>
            </div>
          </dialog>
          <aside className="hidden fixed top-14 right-0 bottom-0 w-80 sm:w-96 bg-surface-container-lowest z-40 p-5 shadow-2xl flex-col justify-between overflow-y-auto" id="sources-drawer">
            <div className="space-y-5">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                    {"folder"}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"Session Sources"}
                  </h3>
                </div>
                <button className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container" id="btn-close-sources" type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"\n        These documents are actively indexed by SOLVE AI Mentor to ground this tutoring session:\n      "}
              </p>
              <div className="space-y-3">
                <div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-2 group cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-error flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"picture_as_pdf"}
                        </span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-label-md text-label-md font-semibold text-on-surface truncate group-hover:underline">
                          {"DSA question bank.pdf"}
                        </p>
                        <p className="font-label-sm text-label-sm text-outline">
                          {"Midterm Practice · 4.2 MB"}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-on-surface text-[18px]" aria-hidden="true">
                      {"launch"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-2 rounded text-outline font-code text-[11px] leading-tight">
                    {"\n            Cited in: \"Prepend Node Algorithm (p. 42, question 4B)\"\n          "}
                  </div>
                </div>
                <div className="p-3.5 rounded-xl bg-surface-container-low hover:bg-surface-container transition-all flex flex-col gap-2 group cursor-pointer">
                  <div className="flex items-start justify-between gap-2">
                    <div className="flex items-center gap-2.5 min-w-0">
                      <span className="w-8 h-8 rounded-lg bg-surface-container flex items-center justify-center text-on-surface-variant flex-shrink-0">
                        <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                          {"image"}
                        </span>
                      </span>
                      <div className="min-w-0">
                        <p className="font-label-md text-label-md font-semibold text-on-surface truncate group-hover:underline">
                          {"Unit 2 notes.jpg"}
                        </p>
                        <p className="font-label-sm text-label-sm text-outline">
                          {"Handwritten lecture diagram · 1.8 MB"}
                        </p>
                      </div>
                    </div>
                    <span className="material-symbols-outlined text-outline group-hover:text-on-surface text-[18px]" aria-hidden="true">
                      {"launch"}
                    </span>
                  </div>
                  <div className="bg-surface-container-lowest p-2 rounded text-outline font-code text-[11px] leading-tight">
                    {"\n            Cited in: \"Pointer manipulation order & memory leaks\"\n          "}
                  </div>
                </div>
              </div>
              <button className="w-full py-2.5 rounded-xl bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md flex items-center justify-center gap-2 transition-colors" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"upload_file"}
                </span>
                <span>
                  {"Upload additional study source"}
                </span>
              </button>
            </div>
            <div className="pt-6 font-label-sm text-label-sm text-outline">
              {"\n      Active context size: 14.8k tokens / 128k limit\n    "}
            </div>
          </aside>
          <aside className="hidden fixed top-14 right-0 bottom-0 w-80 sm:w-96 bg-surface-container-lowest z-40 p-5 shadow-2xl flex-col justify-between overflow-y-auto" id="plan-drawer">
            <div className="space-y-4">
              <div className="flex items-center justify-between pb-3">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[20px] text-on-surface" aria-hidden="true">
                    {"route"}
                  </span>
                  <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                    {"Study Sequence"}
                  </h3>
                </div>
                <button className="p-1 rounded-lg text-outline hover:text-on-surface hover:bg-surface-container" id="btn-close-plan" type="button">
                  <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                    {"close"}
                  </span>
                </button>
              </div>
              <p className="font-body-sm text-body-sm text-on-surface-variant">
                {"\n        Target: "}
                <strong className="text-on-surface">
                  {"Data Structures mid preparation"}
                </strong>
              </p>
              <div className="space-y-2 relative">
                <div className="absolute left-4 top-4 bottom-4 w-0.5 bg-surface-container -z-0"></div>
                <div className="relative z-10 flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 text-[14px]">
                    {"✓"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      {"1. Arrays & Dynamic Vectors"}
                    </p>
                    <p className="font-label-sm text-label-sm text-outline">
                      {"Completed · Score 92%"}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start gap-3 p-2.5 rounded-xl bg-surface-container-low">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary flex items-center justify-center flex-shrink-0 text-[14px]">
                    {"✓"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md font-semibold text-on-surface">
                      {"2. Big-O Complexity Foundations"}
                    </p>
                    <p className="font-label-sm text-label-sm text-outline">
                      {"Completed · Score 88%"}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start gap-3 p-3 rounded-xl bg-surface-container-high shadow-sm">
                  <span className="w-7 h-7 rounded-full bg-primary text-on-primary font-bold flex items-center justify-center flex-shrink-0 text-label-sm">
                    {"3"}
                  </span>
                  <div className="min-w-0">
                    <div className="flex items-center gap-1.5">
                      <p className="font-label-md text-label-md font-bold text-on-surface">
                        {"Linked Lists"}
                      </p>
                      <span className="px-1.5 py-0.2 rounded-full bg-primary text-on-primary font-label-sm text-[10px]">
                        {"CURRENT"}
                      </span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-0.5">
                      {"Singly, Doubly & Circular pointer manipulation"}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start gap-3 p-2.5 rounded-xl opacity-75">
                  <span className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant font-medium flex items-center justify-center flex-shrink-0 text-label-sm">
                    {"4"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md font-medium text-on-surface">
                      {"Stacks & Queues"}
                    </p>
                    <p className="font-label-sm text-label-sm text-outline">
                      {"Upcoming · Estimated 35 min"}
                    </p>
                  </div>
                </div>
                <div className="relative z-10 flex items-start gap-3 p-2.5 rounded-xl opacity-60">
                  <span className="w-7 h-7 rounded-full bg-surface-container text-on-surface-variant font-medium flex items-center justify-center flex-shrink-0 text-label-sm">
                    {"5"}
                  </span>
                  <div className="min-w-0">
                    <p className="font-label-md text-label-md font-medium text-on-surface">
                      {"Binary Search Trees"}
                    </p>
                    <p className="font-label-sm text-label-sm text-outline">
                      {"Upcoming · Estimated 50 min"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pt-4">
              <button className="w-full py-2.5 rounded-xl bg-primary text-on-primary hover:bg-primary-container font-label-md text-label-md transition-colors" type="button">
                {"\n        Open Full Strategy Canvas\n      "}
              </button>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>;
}
