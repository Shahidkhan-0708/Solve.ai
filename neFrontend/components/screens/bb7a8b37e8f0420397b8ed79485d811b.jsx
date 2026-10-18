'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './bb7a8b37e8f0420397b8ed79485d811b.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, 'bb7a8b37e8f0420397b8ed79485d811b');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-bb7a8b37e8f0420397b8ed79485d811b bg-surface font-body-md text-on-surface antialiased" data-screen-id="bb7a8b37e8f0420397b8ed79485d811b">
    <aside className="fixed left-0 top-0 h-screen w-72 bg-surface-container-low shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-50 flex flex-col justify-between select-none">
      <div className="flex flex-col flex-1 min-h-0">
        <div className="h-16 px-space-lg flex items-center justify-between">
          <div className="flex items-center gap-space-sm">
            <div className="w-7 h-7 rounded-lg bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"school"}
              </span>
            </div>
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tight text-on-surface"><BrandLogo className="stitch-wordmark" /></span>
          </div>
          <span className="font-label-sm text-label-sm px-2 py-0.5 rounded-full bg-surface-container-high text-on-surface-variant font-medium">
            {"v2.4"}
          </span>
        </div>
        <div className="px-space-md py-space-xs">
          <div className="relative flex items-center w-full">
            <span className="material-symbols-outlined absolute left-3 text-on-surface-variant text-[18px]" aria-hidden="true">
              {"search"}
            </span>
            <input className="w-full bg-surface-container-lowest rounded-lg pl-9 pr-space-md py-2 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant outline-none" placeholder="Search sessions, topics..." type="text" />
          </div>
        </div>
        <div className="flex-1 overflow-y-auto px-space-md py-space-sm flex flex-col gap-space-lg">
          <div className="flex flex-col gap-space-xs">
            <span className="px-3 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
              {"Destinations"}
            </span>
            <nav className="flex flex-col gap-1" data-active-classes="bg-primary text-on-primary font-medium rounded-lg">
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="target-status" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"flag"}
                </span>
                {"Target Status"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="learning-strategy" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"alt_route"}
                </span>
                {"My Plan & Strategy"}
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="knowledge-graph" href="#">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"hub"}
                </span>
                {"Knowledge Graph"}
              </a>
            </nav>
          </div>
          <div className="flex flex-col gap-space-xs">
            <div className="flex items-center justify-between px-3">
              <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                {"Recent Sessions"}
              </span>
              <span className="material-symbols-outlined text-[16px] text-on-surface-variant cursor-pointer hover:text-on-surface" aria-hidden="true">
                {"add"}
              </span>
            </div>
            <nav className="flex flex-col gap-1" data-active-classes="bg-surface-container-high text-on-surface font-medium rounded-lg">
              <a className="flex items-center justify-between px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="chat-session" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"chat_bubble"}
                  </span>
                  <span className="truncate">
                    {"Calculus III Vector Fields"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"2h"}
                </span>
              </a>
              <a aria-current="page" className="flex items-center justify-between px-3 py-2 transition-all bg-surface-container-high text-on-surface font-medium rounded-lg" data-path="study-workspace" href="#">
                <div className="flex items-center gap-space-sm truncate">
                  <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                    {"menu_book"}
                  </span>
                  <span className="truncate">
                    {"Quantum Mechanics Module"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-on-surface-variant">
                  {"1d"}
                </span>
              </a>
              <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="session-history" href="#">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"history"}
                </span>
                <span className="truncate">
                  {"All Past Sessions"}
                </span>
              </a>
            </nav>
          </div>
        </div>
      </div>
      <div className="p-space-md bg-surface-container-low flex flex-col gap-1">
        <nav className="flex flex-col gap-1" data-active-classes="bg-surface-container-high text-on-surface font-medium rounded-lg">
          <a className="flex items-center gap-space-sm px-3 py-2 rounded-lg text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-all font-body-sm text-body-sm" data-path="settings" href="#">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"tune"}
            </span>
            {"Workspace Settings"}
          </a>
        </nav>
        <div className="pt-space-xs mt-space-xs flex items-center justify-between px-2">
          <div className="flex items-center gap-space-sm">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"person"}
              </span>
            </div>
            <div className="flex flex-col">
              <span className="font-label-md text-label-md font-medium text-on-surface leading-none">
                {"Alex Rivera"}
              </span>
              <span className="font-label-sm text-label-sm text-on-surface-variant leading-none mt-1">
                {"Mentor AI Active"}
              </span>
            </div>
          </div>
          <span className="material-symbols-outlined text-[18px] text-on-surface-variant cursor-pointer hover:text-on-surface" aria-hidden="true">
            {"more_vert"}
          </span>
        </div>
      </div>
    </aside>
    <div className="pl-72">
      <header className="fixed top-0 left-72 right-0 h-16 bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-space-lg">
        <div className="flex items-center">
          <nav className="p-1 bg-surface-container-high rounded-xl flex items-center gap-1" data-active-classes="bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-medium">
            <a className="flex items-center gap-2 px-space-md py-1.5 rounded-lg text-on-surface-variant hover:text-on-surface transition-all font-label-md text-label-md" data-path="chat-session" href="#">
              <span className="w-2 h-2 rounded-full bg-secondary"></span>
              {"Chat Mode"}
            </a>
            <a aria-current="page" className="flex items-center gap-2 px-space-md py-1.5 rounded-lg transition-all bg-surface-container-lowest text-on-surface shadow-[0_1px_3px_rgba(0,0,0,0.04)] font-medium" data-path="study-workspace" href="#">
              <span className="w-2 h-2 rounded-full bg-primary"></span>
              {"Study Mode"}
              <span className="ml-1 font-label-sm text-label-sm px-1.5 py-0.2 rounded-full bg-secondary-container text-on-secondary-fixed font-medium">
                {"Live"}
              </span>
            </a>
          </nav>
        </div>
        <div className="flex items-center gap-space-md">
          <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-surface-container text-on-surface font-label-sm text-label-sm">
            <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
              {"timer"}
            </span>
            <span>
              {"Goal: 45m left"}
            </span>
          </div>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"notifications"}
            </span>
          </button>
          <button className="w-8 h-8 rounded-lg flex items-center justify-center text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"help_outline"}
            </span>
          </button>
        </div>
      </header>
      <main className="relative pt-16 bg-surface w-full min-h-screen">
        <div className="flex flex-col w-full">
          <div className="w-full max-w-7xl mx-auto px-gutter-desktop py-space-xl flex flex-col gap-space-xl">
            <section className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
              <div className="flex flex-wrap items-center justify-between gap-space-sm">
                <div className="flex items-center gap-space-sm flex-wrap">
                  <span className="font-code text-code uppercase tracking-wider text-on-surface-variant bg-surface-container px-2.5 py-1 rounded-md">
                    {"\n            STUDY WORKSPACE // CONTINUING GOAL\n          "}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {"·"}
                  </span>
                  <div className="flex items-center gap-1.5 font-label-md text-label-md text-on-surface font-semibold">
                    <span className="w-2 h-2 rounded-full bg-primary"></span>
                    {"\n            Python Foundations\n          "}
                  </div>
                  <span className="font-label-sm text-label-sm bg-surface-container-high px-2 py-0.5 rounded-full text-on-surface-variant">
                    {"\n            3-Month Target Window\n          "}
                  </span>
                </div>
                <div className="flex items-center gap-2 bg-surface-container-low px-3 py-1 rounded-lg">
                  <span className="material-symbols-outlined text-secondary text-[16px]" aria-hidden="true">
                    {"lock_reset"}
                  </span>
                  <span className="font-label-sm text-label-sm text-on-surface-variant">
                    {"Scope Isolated: Study Engine"}
                  </span>
                </div>
              </div>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-space-md pt-space-xs">
                <div>
                  <h1 className="font-headline-md text-headline-md text-on-surface">
                    {"Milestone 2: Functional Programming & Iterators"}
                  </h1>
                  <a className="inline-flex items-center gap-1.5 font-label-md text-label-md text-secondary hover:text-on-surface transition-colors mt-1" href="#" id="view-roadmap-link">
                    <span>
                      {"View 12-Week Roadmap · Week 4 of 12"}
                    </span>
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"arrow_forward"}
                    </span>
                  </a>
                </div>
                <div className="flex flex-wrap items-center gap-2">
                  <div className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-lg text-on-surface font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                      {"schedule"}
                    </span>
                    <span>
                      {"Commitment: ~6h / week"}
                    </span>
                  </div>
                  <div className="flex items-center gap-1.5 bg-surface-container px-3 py-1.5 rounded-lg text-on-surface font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                      {"bookmark"}
                    </span>
                    <span>
                      {"CS50P + RealPython"}
                    </span>
                  </div>
                  <button className="bg-surface-container-high hover:bg-surface-container-highest transition-colors px-3 py-1.5 rounded-lg font-label-sm text-label-sm text-on-surface flex items-center gap-1" type="button">
                    <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                      {"tune"}
                    </span>
                    <span>
                      {"Schedule revision"}
                    </span>
                  </button>
                </div>
              </div>
              <div className="flex flex-wrap items-center gap-1 pt-space-xs bg-surface-container-low p-1.5 rounded-lg">
                <button className="view-tab-btn px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-all bg-surface-container-lowest text-on-surface shadow-sm font-medium" id="tab-study" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Continuing Study Session (14)\n        "}
                </button>
                <button className="view-tab-btn px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-all text-on-surface-variant hover:text-on-surface" id="tab-graph" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Ontology: Knowledge Graph\n        "}
                </button>
                <button className="view-tab-btn px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-all text-on-surface-variant hover:text-on-surface" id="tab-status" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Study Target Status (2/6 Done)\n        "}
                </button>
                <button className="view-tab-btn px-3 py-1.5 rounded-md font-label-sm text-label-sm transition-all text-on-surface-variant hover:text-on-surface" id="tab-isolation" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                  {"\n          Isolation Sandbox\n        "}
                </button>
              </div>
            </section>
            <div className="flex flex-col gap-space-xl" id="view-study-panel">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col md:flex-row md:items-center justify-between gap-space-md">
                <div className="flex items-center gap-space-md">
                  <div className="w-10 h-10 rounded-lg bg-primary text-on-primary flex items-center justify-center font-code text-body-md font-medium">
                    {"\n            14\n          "}
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                        {"Module 2.3"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant">
                        {"•"}
                      </span>
                      <span className="font-label-sm text-label-sm text-on-surface-variant font-code">
                        {"Est. 40 min"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Generator Functions & Memory Yielding"}
                    </h2>
                  </div>
                </div>
                <div className="flex items-center gap-space-lg">
                  <div className="flex flex-col items-end">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Milestone Mastery"}
                    </span>
                    <span className="font-code text-label-md text-on-surface font-semibold">
                      {"68% Solidified"}
                    </span>
                  </div>
                  <div className="w-28 bg-surface-container h-2 rounded-full overflow-hidden">
                    <div className="bg-primary h-full rounded-full" style={{"width":"68%"}}></div>
                  </div>
                </div>
              </div>
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-space-lg">
                <div className="lg:col-span-8 flex flex-col gap-space-lg">
                  <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"01 // Architectural Concept"}
                      </span>
                      <span className="material-symbols-outlined text-secondary text-[18px]" aria-hidden="true">
                        {"memory"}
                      </span>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {"How Generators Prevent RAM Exhaustion"}
                    </h3>
                    <p className="font-body-md text-body-md text-on-surface-variant">
                      {"\n              In standard Python functions, evaluating a collection using "}
                      <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                        {"return [x for x in data]"}
                      </code>
                      {" allocates the entire dataset in contiguous memory before execution continues. When parsing multi-gigabyte log streams or infinite mathematical series, this causes abrupt memory overhead spikes ("}
                      <span className="font-code text-code text-error">
                        {"OOM"}
                      </span>
                      {" crashes).\n            "}
                    </p>
                    <div className="bg-surface-container-low p-space-md rounded-lg flex items-start gap-space-sm">
                      <span className="material-symbols-outlined text-on-surface text-[20px] mt-0.5" aria-hidden="true">
                        {"lightbulb"}
                      </span>
                      <div className="flex flex-col gap-1">
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"Mentor Insight: The Pause-and-Resume Protocol"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"\n                  A function containing "}
                          <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                            {"yield"}
                          </code>
                          {" compiles to a generator object implementing the iterator protocol ("}
                          <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                            {"__iter__()"}
                          </code>
                          {" and "}
                          <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                            {"__next__()"}
                          </code>
                          {"). Internal frame state is retained in heap memory without materializing the downstream collection.\n                "}
                        </span>
                      </div>
                    </div>
                  </article>
                  <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"02 // Code Synthesis"}
                      </span>
                      <div className="flex items-center gap-2">
                        <span className="font-label-sm text-label-sm text-on-surface-variant">
                          {"Comparison"}
                        </span>
                        <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                          {"code"}
                        </span>
                      </div>
                    </div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Yielding from Nested Iterables: "}
                      <code className="font-code text-code text-on-surface bg-surface-container px-1.5 py-0.5 rounded">
                        {"yield from"}
                      </code>
                    </h3>
                    <div className="rounded-lg bg-surface-container-low p-space-md flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between text-on-surface-variant font-code text-code pb-space-xs">
                        <span>
                          {"generator_pipeline.py"}
                        </span>
                        <span>
                          {"Python 3.12"}
                        </span>
                      </div>
                      <pre className="font-code text-code text-on-surface overflow-x-auto leading-relaxed">
                        <code>
                          <span className="text-secondary font-medium">
                            {"def"}
                          </span>
                          <span className="text-on-surface font-semibold">
                            {"read_batches"}
                          </span>
                          {"(sensor_streams):\n    "}
                          <span className="text-secondary italic">
                            {"# Delegates to subgenerators directly, forwarding exceptions and return values"}
                          </span>
                          <span className="text-secondary font-medium">
                            {"for"}
                          </span>
                          {" stream "}
                          <span className="text-secondary font-medium">
                            {"in"}
                          </span>
                          {" sensor_streams:\n        "}
                          <span className="text-primary font-bold">
                            {"yield from"}
                          </span>
                          {" parse_stream(stream)\n\n"}
                          <span className="text-secondary italic">
                            {"# Memory profile: Exactly 1 record in heap space at any discrete instant"}
                          </span>
                          {"\npipeline = read_batches(["}
                          <span className="text-secondary">
                            {"\"stream_a.bin\""}
                          </span>
                          {", "}
                          <span className="text-secondary">
                            {"\"stream_b.bin\""}
                          </span>
                          {"])\nrecord = next(pipeline)"}
                        </code>
                      </pre>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-space-md pt-space-xs">
                      <div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm uppercase font-semibold text-secondary">
                          {"Traditional return"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Allocates all N results prior to caller resumption. High GC pressure."}
                        </span>
                      </div>
                      <div className="bg-surface-container p-space-sm rounded-lg flex flex-col gap-1">
                        <span className="font-label-sm text-label-sm uppercase font-semibold text-primary">
                          {"yield / yield from"}
                        </span>
                        <span className="font-body-sm text-body-sm text-on-surface-variant">
                          {"Evaluates strictly on-demand. Infinite stream safety and constant memory space."}
                        </span>
                      </div>
                    </div>
                  </article>
                  <article className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"03 // Verification Checkpoint"}
                      </span>
                      <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded font-code text-on-surface">
                        {"Exercise 14.1"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-xs">
                      <h3 className="font-headline-sm text-headline-sm text-on-surface">
                        {"Implement a Fibonacci Stream using Generator Yield"}
                      </h3>
                      <p className="font-body-md text-body-md text-on-surface-variant">
                        {"\n                Write a generator function "}
                        <code className="font-code text-code bg-surface-container px-1 py-0.5 rounded text-on-surface">
                          {"fibonacci_stream()"}
                        </code>
                        {" that yields subsequent numbers ad infinitum without causing heap bloat.\n              "}
                      </p>
                    </div>
                    <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col gap-space-sm">
                      <textarea className="w-full bg-surface-container-lowest rounded-lg p-space-sm font-code text-code text-on-surface outline-none resize-none placeholder:text-on-surface-variant" id="code-exercise-input" placeholder="def fibonacci_stream():\n    a, b = 0, 1\n    while True:\n        yield a\n        a, b = b, a + b" rows="4"></textarea>
                      <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-xs">
                        <div className="flex items-center gap-2">
                          <button className="bg-primary hover:bg-neutral-800 text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg transition-colors flex items-center gap-1.5 font-medium" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                              {"play_arrow"}
                            </span>
                            <span>
                              {"Submit & Test Stream"}
                            </span>
                          </button>
                          <button className="bg-surface-container hover:bg-surface-container-high text-on-surface font-label-md text-label-md px-3 py-2 rounded-lg transition-colors" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                            {"\n                    Hint\n                  "}
                          </button>
                        </div>
                        <span className="font-label-sm text-label-sm text-secondary font-code" id="exercise-feedback">
                          {"Awaiting submission test run"}
                        </span>
                      </div>
                    </div>
                    <div className="flex flex-wrap items-center justify-between gap-space-sm pt-space-sm">
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">
                          {"verified"}
                        </span>
                        <span className="font-label-md text-label-md text-on-surface">
                          {"2 of 3 session concepts verified"}
                        </span>
                      </div>
                      <div className="flex items-center gap-2">
                        <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md px-3.5 py-2 rounded-lg transition-colors" type="button">
                          {"\n                  Ask Question on this Milestone\n                "}
                        </button>
                        <button className="bg-primary text-on-primary font-label-md text-label-md px-4 py-2 rounded-lg hover:bg-neutral-800 transition-colors" type="button">
                          {"\n                  Complete Session 14\n                "}
                        </button>
                      </div>
                    </div>
                  </article>
                </div>
                <div className="lg:col-span-4 flex flex-col gap-space-lg">
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                    <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                      {"State Machine Anatomy"}
                    </span>
                    <div className="bg-surface-container-low rounded-lg p-space-md flex flex-col items-center justify-center">
                      <svg className="w-full h-auto text-on-surface" viewBox="0 0 280 140">
                        <rect fill="#eeeeee" height="32" rx="6" width="70" x="10" y="20"></rect>
                        <text fill="#1a1c1c" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" x="45" y="40">
                          {"CREATED"}
                        </text>
                        <path d="M 80 36 L 105 36" markerEnd="url(#arrow)" stroke="#747878" strokeWidth="1.5"></path>
                        <text fill="#5e5e5e" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" x="92" y="30">
                          {"next()"}
                        </text>
                        <rect fill="#1c1b1b" height="40" rx="6" width="80" x="110" y="16"></rect>
                        <text fill="#ffffff" fontFamily="Inter" fontSize="8.5" fontWeight="600" textAnchor="middle" x="150" y="34">
                          {"SUSPENDED"}
                        </text>
                        <text fill="#c8c6c5" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" x="150" y="47">
                          {"at yield line"}
                        </text>
                        <path d="M 170 56 C 170 85 130 85 130 56" fill="none" stroke="#1c1b1b" strokeWidth="1.5"></path>
                        <text fill="#1c1b1b" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" x="150" y="80">
                          {"next() / yield"}
                        </text>
                        <path d="M 190 36 L 215 36" stroke="#747878" strokeWidth="1.5"></path>
                        <text fill="#5e5e5e" fontFamily="JetBrains Mono" fontSize="7" textAnchor="middle" x="202" y="30">
                          {"return"}
                        </text>
                        <rect fill="#e8e8e8" height="32" rx="6" width="55" x="220" y="20"></rect>
                        <text fill="#444748" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" x="247" y="40">
                          {"CLOSED"}
                        </text>
                      </svg>
                      <span className="font-code text-code text-on-surface-variant text-center mt-2">
                        {"Evaluation loop execution lifecycle"}
                      </span>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-md">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"Curriculum Progress"}
                      </span>
                      <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface">
                        {"Week 4 / 12"}
                      </span>
                    </div>
                    <div className="flex flex-col gap-space-sm">
                      <div className="flex items-center justify-between font-label-md text-label-md">
                        <span className="text-on-surface font-medium">
                          {"1. Core Primitives & Scope"}
                        </span>
                        <span className="material-symbols-outlined text-[16px] text-primary" aria-hidden="true">
                          {"check_circle"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md bg-surface-container-low p-2 rounded-lg">
                        <span className="text-on-surface font-semibold">
                          {"2. Functional & Generators"}
                        </span>
                        <span className="font-code text-code bg-primary text-on-primary px-1.5 py-0.5 rounded">
                          {"Active"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant opacity-80">
                        <span>
                          {"3. OOP & Custom Dunder Methods"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Locked"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant opacity-80">
                        <span>
                          {"4. Metaclasses & Decorators"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Locked"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant opacity-80">
                        <span>
                          {"5. Concurrency & AsyncIO"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Locked"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between font-label-md text-label-md text-on-surface-variant opacity-80">
                        <span>
                          {"6. Production Packaging & CLI"}
                        </span>
                        <span className="font-label-sm text-label-sm text-secondary">
                          {"Locked"}
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">
                        {"Spaced Revision"}
                      </span>
                      <span className="w-2 h-2 rounded-full bg-secondary"></span>
                    </div>
                    <p className="font-body-sm text-body-sm text-on-surface-variant">
                      {"3 recall flashpoints scheduled for next warm-up session:"}
                    </p>
                    <div className="flex flex-col gap-1.5 pt-1">
                      <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface p-1.5 bg-surface-container-low rounded">
                        <span>
                          {"LEGB Scope Hierarchy"}
                        </span>
                        <span className="font-code text-code text-secondary font-medium">
                          {"Due Today"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface p-1.5 bg-surface-container-low rounded">
                        <span>
                          {"Mutable Default Arguments"}
                        </span>
                        <span className="font-code text-code text-secondary">
                          {"In 2d"}
                        </span>
                      </div>
                      <div className="flex items-center justify-between text-body-sm font-body-sm text-on-surface p-1.5 bg-surface-container-low rounded">
                        <span>
                          {"Tuple Unpacking Traps"}
                        </span>
                        <span className="font-code text-code text-secondary">
                          {"In 4d"}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sticky bottom-4 z-30 w-full">
                <div className="bg-surface-container-lowest/95 backdrop-blur-md rounded-xl p-space-sm shadow-md flex flex-col gap-space-xs">
                  <div className="flex items-center gap-space-sm px-2 pt-1 text-on-surface-variant font-label-sm text-label-sm">
                    <span className="material-symbols-outlined text-[16px] text-secondary" aria-hidden="true">
                      {"psychology"}
                    </span>
                    <span>
                      {"SOLVE Mentor Study Channel · Milestone 2 Context Attached"}
                    </span>
                  </div>
                  <div className="flex items-end gap-2 bg-surface-container-low rounded-lg p-2">
                    <textarea className="w-full bg-transparent border-0 outline-none font-body-md text-body-md text-on-surface placeholder:text-on-surface-variant resize-none" placeholder="Ask about this milestone or continue code exercise..." rows="2"></textarea>
                    <div className="flex items-center gap-1">
                      <button className="w-9 h-9 rounded-lg hover:bg-surface-container text-on-surface-variant flex items-center justify-center transition-colors" type="button">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {"attach_file"}
                        </span>
                      </button>
                      <button className="w-9 h-9 rounded-lg bg-primary hover:bg-neutral-800 text-on-primary flex items-center justify-center transition-colors" type="button">
                        <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                          {"arrow_upward"}
                        </span>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-col gap-space-lg" id="view-graph-panel">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex flex-wrap items-center justify-between gap-space-sm">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-code text-code uppercase tracking-wider text-secondary">
                        {"Domain Knowledge Graph"}
                      </span>
                      <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-medium">
                        {"Study · Python foundations"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                      {"Foundations Concept Ontology & Prerequisite Lattice"}
                    </h2>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="w-2.5 h-2.5 rounded-full bg-primary"></span>
                      {" Mastered\n            "}
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="w-2.5 h-2.5 rounded-full bg-secondary"></span>
                      {" Current In-Progress\n            "}
                    </span>
                    <span className="flex items-center gap-1 font-label-sm text-label-sm text-on-surface-variant">
                      <span className="w-2.5 h-2.5 rounded-full bg-surface-container-highest"></span>
                      {" Unlocked Prerequisite\n            "}
                    </span>
                  </div>
                </div>
                <div className="w-full bg-surface-container-low rounded-xl p-space-lg overflow-x-auto">
                  <svg className="w-full min-w-[760px] h-auto" viewBox="0 0 920 260">
                    <defs>
                      <marker id="edge" markerHeight="6" markerWidth="6" orient="auto" refX="5" refY="3">
                        <path d="M0,0 L0,6 L6,3 z" fill="#747878"></path>
                      </marker>
                    </defs>
                    <path d="M 120 70 L 220 70" markerEnd="url(#edge)" stroke="#747878" strokeWidth="1.5"></path>
                    <path d="M 330 70 L 430 70" markerEnd="url(#edge)" stroke="#747878" strokeWidth="1.5"></path>
                    <path d="M 540 70 L 640 70" markerEnd="url(#edge)" stroke="#747878" strokeWidth="1.5"></path>
                    <path d="M 750 70 L 830 70" markerEnd="url(#edge)" stroke="#c4c7c7" strokeDasharray="4 4" strokeWidth="1.5"></path>
                    <path d="M 485 100 L 485 160" markerEnd="url(#edge)" stroke="#747878" strokeWidth="1.5"></path>
                    <path d="M 695 100 L 695 160" markerEnd="url(#edge)" stroke="#747878" strokeWidth="1.5"></path>
                    <g transform="translate(20, 40)">
                      <rect fill="#1c1b1b" height="60" rx="8" width="100"></rect>
                      <text fill="#ffffff" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="50" y="28">
                        {"Variables"}
                      </text>
                      <text fill="#c8c6c5" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="50" y="44">
                        {"Types & Binds"}
                      </text>
                    </g>
                    <g transform="translate(220, 40)">
                      <rect fill="#1c1b1b" height="60" rx="8" width="110"></rect>
                      <text fill="#ffffff" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="55" y="28">
                        {"Control Flow"}
                      </text>
                      <text fill="#c8c6c5" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="55" y="44">
                        {"Branching Loops"}
                      </text>
                    </g>
                    <g transform="translate(430, 40)">
                      <rect fill="#1c1b1b" height="60" rx="8" width="110"></rect>
                      <text fill="#ffffff" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="55" y="28">
                        {"Functions"}
                      </text>
                      <text fill="#c8c6c5" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="55" y="44">
                        {"Closures & Scope"}
                      </text>
                    </g>
                    <g transform="translate(640, 40)">
                      <rect fill="#5e5e5e" height="60" rx="8" width="110"></rect>
                      <text fill="#ffffff" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="55" y="28">
                        {"Iterators"}
                      </text>
                      <text fill="#ffffff" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="55" y="44">
                        {"__next__() protocol"}
                      </text>
                    </g>
                    <g transform="translate(640, 160)">
                      <rect fill="#ffffff" height="60" rx="8" width="110"></rect>
                      <rect fill="none" height="60" rx="8" stroke="#1c1b1b" strokeWidth="2" width="110"></rect>
                      <text fill="#1c1b1b" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="55" y="28">
                        {"Generators"}
                      </text>
                      <text fill="#5e5e5e" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="55" y="44">
                        {"Yield streams"}
                      </text>
                    </g>
                    <g transform="translate(430, 160)">
                      <rect fill="#e8e8e8" height="60" rx="8" width="110"></rect>
                      <text fill="#747878" fontFamily="Inter" fontSize="11" fontWeight="600" textAnchor="middle" x="55" y="28">
                        {"Memory Limits"}
                      </text>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="55" y="44">
                        {"tracemalloc sys"}
                      </text>
                    </g>
                    <g transform="translate(830, 40)">
                      <rect fill="#eeeeee" height="60" rx="8" stroke="#c4c7c7" strokeDasharray="2 2" width="80"></rect>
                      <text fill="#747878" fontFamily="Inter" fontSize="10" fontWeight="500" textAnchor="middle" x="40" y="28">
                        {"AsyncIO"}
                      </text>
                      <text fill="#747878" fontFamily="JetBrains Mono" fontSize="8" textAnchor="middle" x="40" y="44">
                        {"Future"}
                      </text>
                    </g>
                  </svg>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-space-md pt-space-xs">
                  <div className="p-space-md bg-surface-container-low rounded-lg">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface">
                      {"Prerequisite Chain"}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {"Variables → Control Flow → First Class Functions → Iterators"}
                    </p>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface">
                      {"Immediate Focus"}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {"Generator state machines and low-footprint stream pipelines."}
                    </p>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg">
                    <span className="font-label-sm text-label-sm uppercase font-semibold text-on-surface">
                      {"Downstream Unlock"}
                    </span>
                    <p className="font-body-sm text-body-sm text-on-surface-variant mt-1">
                      {"Async generators and coroutines under Python 3.12 syntax."}
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-col gap-space-lg" id="view-status-panel">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center justify-between">
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="font-code text-code uppercase tracking-wider text-secondary">
                        {"Cumulative Analytics"}
                      </span>
                      <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-on-surface font-medium">
                        {"Study · 3-Month Goal"}
                      </span>
                    </div>
                    <h2 className="font-headline-sm text-headline-sm text-on-surface mt-1">
                      {"Long-term Python Goal Progress Matrix"}
                    </h2>
                  </div>
                  <button className="bg-surface-container-high hover:bg-surface-container-highest text-on-surface font-label-md text-label-md px-3 py-1.5 rounded-lg transition-colors" type="button">
                    {"\n            Export Report\n          "}
                  </button>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-space-md">
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Milestones Finished"}
                    </span>
                    <span className="font-headline-md text-headline-md font-semibold text-on-surface">
                      {"2 / 6"}
                    </span>
                    <span className="font-code text-code text-secondary">
                      {"33.3% Target Completion"}
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Sessions Completed"}
                    </span>
                    <span className="font-headline-md text-headline-md font-semibold text-on-surface">
                      {"14"}
                    </span>
                    <span className="font-code text-code text-secondary">
                      {"19.2 Hours Study Time"}
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Spaced Recall Items"}
                    </span>
                    <span className="font-headline-md text-headline-md font-semibold text-on-surface">
                      {"3 Due"}
                    </span>
                    <span className="font-code text-code text-secondary">
                      {"92% Long-Term Retention"}
                    </span>
                  </div>
                  <div className="p-space-md bg-surface-container-low rounded-lg flex flex-col gap-1">
                    <span className="font-label-sm text-label-sm text-on-surface-variant">
                      {"Untested Areas"}
                    </span>
                    <span className="font-headline-md text-headline-md font-semibold text-on-surface">
                      {"4 Domains"}
                    </span>
                    <span className="font-code text-code text-on-surface-variant">
                      {"Clear Empty State"}
                    </span>
                  </div>
                </div>
                <div className="bg-surface-container-low p-space-lg rounded-xl flex flex-col gap-space-sm">
                  <div className="flex items-center gap-2">
                    <span className="material-symbols-outlined text-secondary text-[20px]" aria-hidden="true">
                      {"hourglass_empty"}
                    </span>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">
                      {"Untested Learning Areas (Upcoming Milestones)"}
                    </h3>
                  </div>
                  <p className="font-body-sm text-body-sm text-on-surface-variant">
                    {"\n            These sectors contain no diagnostic telemetry yet. Evaluation runs begin automatically upon completing Milestone 2.\n          "}
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-space-sm pt-space-xs">
                    <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
                      <div>
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"OOP & Metaclass Overrides"}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"No test attempts logged yet"}
                        </p>
                      </div>
                      <span className="font-code text-code text-on-surface-variant px-2 py-1 bg-surface-container rounded">
                        {"Pending"}
                      </span>
                    </div>
                    <div className="bg-surface-container-lowest p-space-md rounded-lg flex items-center justify-between">
                      <div>
                        <span className="font-label-md text-label-md font-medium text-on-surface">
                          {"AsyncIO Task Cancellation & Loops"}
                        </span>
                        <p className="font-body-sm text-body-sm text-on-surface-variant">
                          {"No test attempts logged yet"}
                        </p>
                      </div>
                      <span className="font-code text-code text-on-surface-variant px-2 py-1 bg-surface-container rounded">
                        {"Pending"}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="hidden flex-col gap-space-lg" id="view-isolation-panel">
              <div className="bg-surface-container-lowest rounded-xl p-space-lg shadow-sm flex flex-col gap-space-md">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary text-[22px]" aria-hidden="true">
                    {"security"}
                  </span>
                  <h2 className="font-headline-sm text-headline-sm text-on-surface">
                    {"Mode Separation & Memory Isolation Model"}
                  </h2>
                </div>
                <p className="font-body-md text-body-md text-on-surface-variant">
                  {"\n          SOLVE maintains rigorous state separation between ephemeral quick queries and structured long-term study trajectories.\n        "}
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-space-lg pt-space-xs">
                  <div className="bg-surface-container-low rounded-xl p-space-md flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Chat Workspace Mode"}
                      </span>
                      <span className="font-label-sm text-label-sm bg-surface-container px-2 py-0.5 rounded text-secondary">
                        {"Quick Query Scope"}
                      </span>
                    </div>
                    <ul className="font-body-sm text-body-sm text-on-surface-variant flex flex-col gap-2">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5" aria-hidden="true">
                          {"remove"}
                        </span>
                        <span>
                          {"Stateless or conversational single-session focus."}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5" aria-hidden="true">
                          {"remove"}
                        </span>
                        <span>
                          {"Immediate answer synthesis, no prerequisite graph updating."}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-secondary mt-0.5" aria-hidden="true">
                          {"remove"}
                        </span>
                        <span>
                          {"Isolated history stream; never pollutes curriculum milestones."}
                        </span>
                      </li>
                    </ul>
                  </div>
                  <div className="bg-surface-container-lowest rounded-xl p-space-md border border-on-surface/10 shadow-sm flex flex-col gap-space-sm">
                    <div className="flex items-center justify-between">
                      <span className="font-label-md text-label-md font-semibold text-on-surface">
                        {"Study Workspace Mode (Active)"}
                      </span>
                      <span className="font-label-sm text-label-sm bg-primary text-on-primary px-2 py-0.5 rounded font-medium">
                        {"Trajectory Scope"}
                      </span>
                    </div>
                    <ul className="font-body-sm text-body-sm text-on-surface flex flex-col gap-2">
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-primary mt-0.5" aria-hidden="true">
                          {"check"}
                        </span>
                        <span>
                          {"Bound strictly to 3-Month goal targets and syllabus milestones."}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-primary mt-0.5" aria-hidden="true">
                          {"check"}
                        </span>
                        <span>
                          {"Continuous spaced repetition schedule & knowledge lattice state."}
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="material-symbols-outlined text-[16px] text-primary mt-0.5" aria-hidden="true">
                          {"check"}
                        </span>
                        <span>
                          {"Target status logs retention decay and untested concept boundaries."}
                        </span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>;
}
