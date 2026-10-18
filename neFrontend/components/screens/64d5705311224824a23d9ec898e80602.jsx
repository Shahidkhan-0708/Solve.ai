'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../stitch/controller.mjs';
import BrandLogo from '../brand-logo';
import './64d5705311224824a23d9ec898e80602.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current, '64d5705311224824a23d9ec898e80602');
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-64d5705311224824a23d9ec898e80602 bg-surface font-body-md text-body-md text-on-surface antialiased flex flex-col min-h-screen" data-screen-id="64d5705311224824a23d9ec898e80602">
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-sm">
          <button aria-label="Menu" className="w-11 h-11 flex items-center justify-center rounded-xl text-on-surface hover:bg-surface-container-high transition-colors" type="button">
            <span className="material-symbols-outlined text-[24px]" aria-hidden="true">
              {"menu"}
            </span>
          </button>
          <div className="flex items-center">
            <span className="font-headline-sm text-headline-sm tracking-tight text-primary font-bold"><BrandLogo className="stitch-wordmark" /></span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <button aria-label="Edit" className="w-11 h-11 flex items-center justify-center rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"edit_note"}
            </span>
          </button>
          <button aria-label="Audio mentor" className="w-11 h-11 flex items-center justify-center rounded-xl text-secondary hover:text-on-surface hover:bg-surface-container-high transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"headphones"}
            </span>
          </button>
          <div className="w-11 h-11 flex items-center justify-center pl-1">
            <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center">
              <span className="material-symbols-outlined text-on-primary text-[18px]" aria-hidden="true">
                {"person"}
              </span>
            </div>
          </div>
        </div>
      </div>
    </header>
    <main className="flex-1 flex flex-col relative w-full pt-16 pb-24 bg-surface">
      <div className="flex flex-col w-full px-gutter space-y-space-lg pb-space-2xl">
        <div aria-label="Target contexts" className="flex items-center gap-space-xs overflow-x-auto py-1 no-scrollbar -mx-gutter px-gutter" id="scope-chip-container" role="tablist">
          <button aria-selected="true" className="state-chip shrink-0 h-8 px-3 rounded-full font-label-sm text-label-sm flex items-center gap-1.5 transition-all bg-primary text-on-primary shadow-sm" data-target="view-ds-prep" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} role="tab" type="button">
            <span className="w-1.5 h-1.5 rounded-full bg-surface-container-lowest"></span>
            {"\n      Chat: DS Mid Prep\n    "}
          </button>
          <button aria-selected="false" className="state-chip shrink-0 h-8 px-3 rounded-full font-label-sm text-label-sm flex items-center gap-1.5 transition-all bg-surface-container text-on-surface-variant hover:bg-surface-variant" data-target="view-python-goal" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} role="tab" type="button">
            {"\n      Study: Python 3-Mo\n    "}
          </button>
          <button aria-selected="false" className="state-chip shrink-0 h-8 px-3 rounded-full font-label-sm text-label-sm flex items-center gap-1.5 transition-all bg-surface-container text-on-surface-variant hover:bg-surface-variant" data-target="view-review-sheet" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} role="tab" type="button">
            {"\n      Review Sheet\n    "}
          </button>
          <button aria-selected="false" className="state-chip shrink-0 h-8 px-3 rounded-full font-label-sm text-label-sm flex items-center gap-1.5 transition-all bg-surface-container text-on-surface-variant hover:bg-surface-variant" data-target="view-empty-state" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} role="tab" type="button">
            {"\n      Empty State\n    "}
          </button>
        </div>
        <div className="state-view flex flex-col space-y-space-lg w-full" id="view-ds-prep">
          <div className="flex flex-col space-y-space-xs">
            <div className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span>
                {"Chat · Data Structures mid prep"}
              </span>
              <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                {"arrow_drop_down"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
              {"Target Status"}
            </h1>
            <p className="font-body-md text-body-md text-secondary">
              {"See your progress and decide what to work on next."}
            </p>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-start justify-between gap-space-sm">
              <div className="space-y-1">
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  {"Active Learning Plan"}
                </span>
                <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {"Data Structures mid exam prep"}
                </h2>
              </div>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container text-on-surface">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"flag"}
                </span>
              </span>
            </div>
            <div className="grid grid-cols-3 gap-space-xs p-space-sm rounded-lg bg-surface-container-low text-on-surface">
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Target"}
                </span>
                <span className="font-label-md text-label-md font-semibold text-primary">
                  {"Pass"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Deadline"}
                </span>
                <span className="font-label-md text-label-md font-semibold text-primary">
                  {"Tomorrow, 10 AM"}
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Budget"}
                </span>
                <span className="font-label-md text-label-md font-semibold text-primary">
                  {"4h planned"}
                </span>
              </div>
            </div>
            <div className="flex items-center gap-space-sm pt-space-xs">
              <button className="flex-1 h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium hover:bg-surface-variant transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"tune"}
                </span>
                {"\n          Edit target\n        "}
              </button>
              <button className="flex-1 h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium hover:bg-surface-variant transition-colors flex items-center justify-center gap-1.5 active:scale-[0.98]" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"calendar_today"}
                </span>
                {"\n          View plan\n        "}
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md relative overflow-hidden">
            <div className="flex flex-col space-y-1">
              <div className="inline-flex items-center gap-1.5 self-start px-2 py-0.5 rounded-full bg-surface-container-highest text-on-surface font-label-sm text-label-sm font-semibold tracking-wide">
                <span className="material-symbols-outlined text-[14px]" aria-hidden="true">
                  {"bolt"}
                </span>
                {"\n          RECOMMENDED NEXT STEP\n        "}
              </div>
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface pt-1">
                {"Review updating head"}
              </h3>
              <p className="font-body-md text-body-md text-on-surface-variant">
                {"\n          Teach-back included the new link, but missed updating head to the new node.\n        "}
              </p>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low font-code text-code text-secondary flex items-center gap-2">
              <span className="material-symbols-outlined text-[16px] text-on-surface" aria-hidden="true">
                {"info"}
              </span>
              <span>
                {"Node insertion at index 0 • Edge case"}
              </span>
            </div>
            <div className="flex flex-col sm:flex-row gap-space-xs pt-1">
              <button className="w-full h-11 px-space-md rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]" type="button">
                <span>
                  {"Practise this step"}
                </span>
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"arrow_forward"}
                </span>
              </button>
              <button className="w-full h-11 px-space-md rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-variant transition-colors flex items-center justify-center active:scale-[0.98]" type="button">
                {"\n          Open explanation\n        "}
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {"Preparation Progress"}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  {"1 of 6 learning activities completed"}
                </p>
              </div>
              <div className="w-10 h-10 rounded-full bg-surface-container flex items-center justify-center font-label-md text-label-md font-semibold text-primary">
                {"\n          17%\n        "}
              </div>
            </div>
            <div className="w-full h-2 bg-surface-container rounded-full overflow-hidden flex">
              <div className="h-full bg-primary" style={{"width":"16.66%"}}></div>
              <div className="h-full bg-secondary" style={{"width":"16.66%"}}></div>
            </div>
            <ul className="divide-y-0 space-y-space-xs font-body-sm text-body-sm">
              <li className="h-11 px-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface">
                <div className="flex items-center gap-2.5">
                  <span className="material-symbols-outlined text-[20px] text-primary" style={{"fontVariationSettings":"\"FILL\" 1"}} aria-hidden="true">
                    {"check_circle"}
                  </span>
                  <span className="font-medium">
                    {"Quick starting check"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-secondary">
                  {"Completed"}
                </span>
              </li>
              <li className="h-11 px-space-sm rounded-lg bg-surface-container-high flex items-center justify-between text-on-surface font-semibold">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-primary mx-1"></span>
                  <span>
                    {"Linked lists"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-primary uppercase tracking-wider">
                  {"In progress"}
                </span>
              </li>
              <li className="h-11 px-space-sm rounded-lg bg-surface-container-low/60 flex items-center justify-between text-secondary">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant mx-1"></span>
                  <span>
                    {"Stacks & queues"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm">
                  {"Not started"}
                </span>
              </li>
              <li className="h-11 px-space-sm rounded-lg bg-surface-container-low/60 flex items-center justify-between text-secondary">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant mx-1"></span>
                  <span>
                    {"Trees & traversals"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm">
                  {"Not started"}
                </span>
              </li>
              <li className="h-11 px-space-sm rounded-lg bg-surface-container-low/60 flex items-center justify-between text-secondary">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant mx-1"></span>
                  <span>
                    {"Mixed practice"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm">
                  {"Not started"}
                </span>
              </li>
              <li className="h-11 px-space-sm rounded-lg bg-surface-container-low/60 flex items-center justify-between text-secondary">
                <div className="flex items-center gap-2.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-surface-variant mx-1"></span>
                  <span>
                    {"Final review"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm">
                  {"Not started"}
                </span>
              </li>
            </ul>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm text-secondary uppercase tracking-wider">
                  {"Current Module Focus"}
                </span>
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {"Practice Evidence · Linked lists"}
                </h3>
              </div>
              <span className="material-symbols-outlined text-[20px] text-secondary" aria-hidden="true">
                {"fact_check"}
              </span>
            </div>
            <div className="space-y-space-xs">
              <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">
                    {"analytics"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    {"3 attempted"}
                  </span>
                </div>
                <div className="flex items-center gap-2 font-label-sm text-label-sm text-secondary">
                  <span className="text-on-surface font-medium">
                    {"2 first-try correct"}
                  </span>
                  <span>
                    {"•"}
                  </span>
                  <span>
                    {"1 with support"}
                  </span>
                </div>
              </div>
              <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    {"record_voice_over"}
                  </span>
                  <span className="font-body-sm text-body-sm text-on-surface">
                    {"Teach-back"}
                  </span>
                </div>
                <span className="font-label-sm text-label-sm text-primary font-medium">
                  {"1 missing step identified"}
                </span>
              </div>
            </div>
            <button className="w-full h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium hover:bg-surface-variant transition-colors flex items-center justify-center gap-2 active:scale-[0.98]" type="button">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"history"}
              </span>
              {"\n        Review attempts\n      "}
            </button>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {"Topics Needing Attention"}
              </h3>
              <span className="font-label-sm text-label-sm text-secondary">
                {"1 flagged"}
              </span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between gap-space-sm">
              <div className="flex items-start gap-2.5">
                <span className="material-symbols-outlined text-[20px] text-primary mt-0.5" aria-hidden="true">
                  {"priority_high"}
                </span>
                <div className="flex flex-col">
                  <span className="font-label-md text-label-md font-semibold text-on-surface">
                    {"Updating head"}
                  </span>
                  <span className="font-body-sm text-body-sm text-secondary">
                    {"Missing in teach-back step 3"}
                  </span>
                </div>
              </div>
              <button className="h-9 px-3 rounded-lg bg-primary text-on-primary font-label-sm text-label-sm font-medium hover:bg-primary/90 flex items-center gap-1 active:scale-[0.95] shrink-0" type="button">
                <span>
                  {"Practise"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"chevron_right"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="state-view hidden flex-col space-y-space-lg w-full" id="view-python-goal">
          <div className="flex flex-col space-y-space-xs">
            <div className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span>
                {"Study · Long-term plan"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
              {"Target Status"}
            </h1>
            <p className="font-body-md text-body-md text-secondary">
              {"Track longitudinal accuracy and milestone targets."}
            </p>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-start justify-between">
              <div>
                <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
                  {"Active Curriculum"}
                </span>
                <h2 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {"Python foundations (3-Month goal)"}
                </h2>
              </div>
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-surface-container text-on-surface">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"terminal"}
                </span>
              </span>
            </div>
            <div className="p-space-sm rounded-lg bg-surface-container-low flex items-center justify-between text-on-surface">
              <span className="font-body-md text-body-md">
                {"1 of 6 milestones completed"}
              </span>
              <span className="font-label-sm text-label-sm font-semibold text-secondary">
                {"16.6% Target"}
              </span>
            </div>
            <div className="grid grid-cols-6 gap-1.5 h-2">
              <div className="bg-primary rounded-full"></div>
              <div className="bg-surface-variant rounded-full"></div>
              <div className="bg-surface-variant rounded-full"></div>
              <div className="bg-surface-variant rounded-full"></div>
              <div className="bg-surface-variant rounded-full"></div>
              <div className="bg-surface-variant rounded-full"></div>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-md">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                  {"First-attempt accuracy over time"}
                </h3>
                <p className="font-body-sm text-body-sm text-secondary">
                  {"Sessions 1–3 telemetry"}
                </p>
              </div>
              <button className="h-9 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1.5 hover:bg-surface-variant" id="toggle-data-mode" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[16px]" id="toggle-icon" aria-hidden="true">
                  {"table_chart"}
                </span>
                <span id="toggle-text">
                  {"Table view"}
                </span>
              </button>
            </div>
            <div className="space-y-space-sm" id="chart-container">
              <div className="h-40 w-full bg-surface-container-low rounded-lg p-space-sm flex flex-col justify-between relative">
                <div className="w-full flex justify-between items-center text-secondary font-label-sm text-label-sm opacity-60">
                  <span>
                    {"100%"}
                  </span>
                  <div className="w-[82%] h-px bg-surface-variant"></div>
                </div>
                <div className="w-full flex justify-between items-center text-secondary font-label-sm text-label-sm opacity-60">
                  <span>
                    {"50%"}
                  </span>
                  <div className="w-[82%] h-px bg-surface-variant"></div>
                </div>
                <div className="w-full flex justify-between items-center text-secondary font-label-sm text-label-sm opacity-60">
                  <span>
                    {"0%"}
                  </span>
                  <div className="w-[82%] h-px bg-surface-variant"></div>
                </div>
                <svg className="absolute inset-0 w-full h-full px-12 py-6 overflow-visible" preserveAspectRatio="none" viewBox="0 0 300 100">
                  <polyline className="text-primary" fill="none" points="30,60 150,53 270,40" stroke="currentColor" strokeWidth="2.5"></polyline>
                  <circle className="fill-surface-container-lowest stroke-primary" cx="30" cy="60" r="4.5" strokeWidth="2.5"></circle>
                  <circle className="fill-surface-container-lowest stroke-primary" cx="150" cy="53" r="4.5" strokeWidth="2.5"></circle>
                  <circle className="fill-surface-container-lowest stroke-primary" cx="270" cy="40" r="4.5" strokeWidth="2.5"></circle>
                </svg>
              </div>
              <div className="grid grid-cols-3 text-center gap-space-xs">
                <div className="p-2 rounded bg-surface-container-low">
                  <span className="block font-label-sm text-label-sm text-secondary">
                    {"Session 1"}
                  </span>
                  <span className="block font-label-md text-label-md font-bold text-on-surface">
                    {"60%"}
                  </span>
                  <span className="block font-code text-code text-secondary text-[11px]">
                    {"(3/5)"}
                  </span>
                </div>
                <div className="p-2 rounded bg-surface-container-low">
                  <span className="block font-label-sm text-label-sm text-secondary">
                    {"Session 2"}
                  </span>
                  <span className="block font-label-md text-label-md font-bold text-on-surface">
                    {"67%"}
                  </span>
                  <span className="block font-code text-code text-secondary text-[11px]">
                    {"(4/6)"}
                  </span>
                </div>
                <div className="p-2 rounded bg-surface-container-low">
                  <span className="block font-label-sm text-label-sm text-secondary">
                    {"Session 3"}
                  </span>
                  <span className="block font-label-md text-label-md font-bold text-on-surface">
                    {"80%"}
                  </span>
                  <span className="block font-code text-code text-secondary text-[11px]">
                    {"(4/5)"}
                  </span>
                </div>
              </div>
            </div>
            <div className="hidden overflow-hidden rounded-lg bg-surface-container-low" id="table-container">
              <table className="w-full text-left font-body-sm text-body-sm">
                <caption className="sr-only">
                  {"First-attempt accuracy performance across consecutive sessions"}
                </caption>
                <thead className="bg-surface-container text-on-surface font-label-sm text-label-sm">
                  <tr>
                    <th className="py-2.5 px-3" scope="col">
                      {"Session"}
                    </th>
                    <th className="py-2.5 px-3" scope="col">
                      {"Correct / Total"}
                    </th>
                    <th className="py-2.5 px-3 text-right" scope="col">
                      {"Accuracy"}
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y-0 text-on-surface">
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <th className="py-2.5 px-3 font-medium" scope="row">
                      {"Session 1"}
                    </th>
                    <td className="py-2.5 px-3 font-code text-code text-secondary">
                      {"3 of 5 items"}
                    </td>
                    <td className="py-2.5 px-3 text-right font-semibold">
                      {"60%"}
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <th className="py-2.5 px-3 font-medium" scope="row">
                      {"Session 2"}
                    </th>
                    <td className="py-2.5 px-3 font-code text-code text-secondary">
                      {"4 of 6 items"}
                    </td>
                    <td className="py-2.5 px-3 text-right font-semibold">
                      {"67%"}
                    </td>
                  </tr>
                  <tr className="hover:bg-surface-container-high transition-colors">
                    <th className="py-2.5 px-3 font-medium" scope="row">
                      {"Session 3"}
                    </th>
                    <td className="py-2.5 px-3 font-code text-code text-secondary">
                      {"4 of 5 items"}
                    </td>
                    <td className="py-2.5 px-3 text-right font-semibold">
                      {"80%"}
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="state-view hidden flex-col space-y-space-lg w-full" id="view-review-sheet">
          <div className="flex flex-col space-y-space-xs">
            <div className="inline-flex items-center gap-1 self-start px-2 py-0.5 rounded-md bg-surface-container-low text-on-surface-variant font-label-sm text-label-sm">
              <span>
                {"Curated · Synthesis summary"}
              </span>
            </div>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface font-semibold tracking-tight">
              {"Review Sheet"}
            </h1>
            <p className="font-body-md text-body-md text-secondary">
              {"Core algorithmic rules and common traps."}
            </p>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {"Singly Linked List Mutations"}
              </h3>
              <span className="font-code text-code text-secondary">
                {"O(1) prepends"}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              {"\n        Always update the pointer of the new node prior to overwriting the head reference:\n      "}
            </p>
            <div className="p-space-sm rounded-lg bg-surface-container-low font-code text-code text-on-surface">
              <code>
                {"new_node.next = self.head"}
                <br />
                {"self.head = new_node"}
              </code>
            </div>
            <div className="flex justify-end pt-1">
              <button className="h-9 px-3 rounded-lg bg-surface-container text-on-surface font-label-sm text-label-sm flex items-center gap-1 hover:bg-surface-variant" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"bookmark_border"}
                </span>
                {"\n          Saved to notes\n        "}
              </button>
            </div>
          </div>
          <div className="rounded-xl bg-surface-container-lowest p-space-md shadow-sm space-y-space-sm">
            <div className="flex items-center justify-between">
              <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
                {"Stack Invariant Rule"}
              </h3>
              <span className="font-code text-code text-secondary">
                {"LIFO"}
              </span>
            </div>
            <p className="font-body-sm text-body-sm text-secondary">
              {"\n        Valid parenthesization checks must fail immediately upon attempting to pop from an empty collection.\n      "}
            </p>
          </div>
        </div>
        <div className="state-view hidden flex-col items-center justify-center text-center p-space-xl space-y-space-md rounded-2xl bg-surface-container-lowest shadow-sm my-space-md" id="view-empty-state">
          <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center text-primary">
            <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
              {"self_improvement"}
            </span>
          </div>
          <div className="space-y-space-xs max-w-xs">
            <h3 className="font-headline-sm text-headline-sm font-semibold text-on-surface">
              {"A blank canvas for your thoughts"}
            </h3>
            <p className="font-body-md text-body-md text-secondary">
              {"\n        You don't have an active learning objective running right now. Initiate a session or ask your mentor to construct a syllabus.\n      "}
            </p>
          </div>
          <div className="pt-2 flex flex-col w-full max-w-xs gap-space-xs">
            <button className="w-full h-11 px-space-md rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-primary/90 transition-colors flex items-center justify-center gap-2 active:scale-[0.98]" type="button">
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"add_circle"}
              </span>
              {"\n        Set a new target\n      "}
            </button>
            <button className="w-full h-11 px-space-md rounded-xl bg-surface-container text-on-surface font-label-md text-label-md font-medium hover:bg-surface-variant transition-colors flex items-center justify-center active:scale-[0.98]" type="button">
              {"\n        Ask Mentor for ideas\n      "}
            </button>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.04)]" data-active-classes="text-primary font-semibold">
      <div className="h-16 px-gutter flex items-center justify-around">
        <a className="flex-1 h-11 flex flex-col items-center justify-center gap-0.5 text-secondary hover:text-on-surface transition-colors" data-path="mentor" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"psychology"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight">
            {"Mentor"}
          </span>
        </a>
        <a className="flex-1 h-11 flex flex-col items-center justify-center gap-0.5 text-secondary hover:text-on-surface transition-colors" data-path="plan" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"calendar_today"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight">
            {"Plan"}
          </span>
        </a>
        <a className="flex-1 h-11 flex flex-col items-center justify-center gap-0.5 text-secondary hover:text-on-surface transition-colors" data-path="graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"hub"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight">
            {"Graph"}
          </span>
        </a>
        <a aria-current="page" className="flex-1 h-11 flex flex-col items-center justify-center gap-0.5 transition-colors text-primary font-semibold" data-path="status" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"donut_large"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight">
            {"Status"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
