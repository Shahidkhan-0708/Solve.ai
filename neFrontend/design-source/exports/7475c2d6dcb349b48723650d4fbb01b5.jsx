'use client';
import { useEffect, useRef } from 'react';
import { initialize } from '../../../lib/screens/7475c2d6dcb349b48723650d4fbb01b5';
import './7475c2d6dcb349b48723650d4fbb01b5.css';
export default function Screen() {
  const root = useRef(null);
  const actions = useRef({});
  useEffect(() => {
    const controller = initialize(root.current);
    actions.current = controller.actions;
    root.current.dataset.ready = 'true';
    return controller.cleanup;
  }, []);
  return <div ref={root} className="stitch-screen stitch-screen-7475c2d6dcb349b48723650d4fbb01b5 bg-surface font-body-md text-on-surface antialiased flex flex-col min-h-screen selection:bg-surface-container-highest" data-screen-id="7475c2d6dcb349b48723650d4fbb01b5">
    <header className="fixed top-0 w-full z-50 pt-safe bg-surface/80 backdrop-blur-xl shadow-[0_1px_8px_rgba(0,0,0,0.04)]">
      <div className="h-16 px-gutter flex items-center justify-between">
        <div className="flex items-center gap-space-xs">
          <button aria-label="Menu" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
              {"menu"}
            </span>
          </button>
          <div className="flex items-center gap-space-xs pl-space-xs">
            <span className="font-headline-sm text-headline-sm font-semibold tracking-tighter text-primary uppercase">
              {"SOLVE"}
            </span>
            <span className="text-on-surface-variant/40 font-code text-body-sm font-light select-none">
              {"/"}
            </span>
            <span className="font-label-md text-label-md text-on-surface-variant font-medium tracking-tight truncate max-w-[110px]">
              {"My Plan / Strategy"}
            </span>
          </div>
        </div>
        <div className="flex items-center gap-space-xs">
          <button aria-label="Edit Plan" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"edit"}
            </span>
          </button>
          <button aria-label="Toggle Audio" className="w-11 h-11 flex items-center justify-center rounded-lg text-on-surface-variant hover:text-on-surface hover:bg-surface-container transition-colors" type="button">
            <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
              {"volume_up"}
            </span>
          </button>
          <div className="pl-space-xs flex items-center">
            <img alt="Profile" className="w-8 h-8 rounded-full object-cover ring-1 ring-surface-container-highest" src="/assets/7e17bca1d79158ba.png" />
          </div>
        </div>
      </div>
    </header>
    <main className="flex flex-col relative w-full pt-16 pb-24 bg-surface min-h-screen">
      <div className="flex flex-col w-full px-margin pb-space-xl">
        <div className="w-full overflow-x-auto no-scrollbar py-space-sm mb-space-md">
          <div className="inline-flex items-center gap-space-xs p-1 bg-surface-container rounded-full text-on-surface-variant font-label-sm text-label-sm">
            <button className="px-3 py-1.5 rounded-full bg-primary text-on-primary font-medium transition-all shadow-sm" id="btn-state-list" onClick={event => { const result = actions.current[0]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        List View\n      "}
            </button>
            <button className="px-3 py-1.5 rounded-full hover:text-on-surface transition-all" id="btn-state-map" onClick={event => { const result = actions.current[1]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Map + Sheet\n      "}
            </button>
            <button className="px-3 py-1.5 rounded-full hover:text-on-surface transition-all" id="btn-state-scope" onClick={event => { const result = actions.current[2]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Scope: Python\n      "}
            </button>
            <button className="px-3 py-1.5 rounded-full hover:text-on-surface transition-all" id="btn-state-empty" onClick={event => { const result = actions.current[3]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              {"\n        Empty State\n      "}
            </button>
          </div>
        </div>
        <div className="flex items-center justify-between mb-space-md">
          <div>
            <span className="font-label-sm text-label-sm uppercase tracking-wider text-secondary">
              {"Cognitive Topology"}
            </span>
            <h1 className="font-headline-lg-mobile text-headline-lg-mobile text-on-surface tracking-tight">
              {"Knowledge Graph"}
            </h1>
          </div>
          <div className="flex items-center gap-space-xs">
            <button aria-label="Search concepts" className="w-11 h-11 flex items-center justify-center rounded-xl bg-surface-container-low text-on-surface hover:bg-surface-container transition-colors" type="button">
              <span className="material-symbols-outlined text-[20px]" aria-hidden="true">
                {"search"}
              </span>
            </button>
            <div className="flex items-center gap-1 px-2.5 py-1 rounded-full bg-surface-container-low text-on-surface-variant font-code text-code">
              <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse"></span>
              <span id="active-nodes-count">
                {"8 nodes"}
              </span>
            </div>
          </div>
        </div>
        <div className="mb-space-md">
          <button className="w-full flex items-center justify-between p-3.5 bg-surface-container-low hover:bg-surface-container rounded-xl text-left transition-colors" id="scope-selector-btn" onClick={event => { const result = actions.current[4]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <div className="flex items-center gap-2.5 min-w-0">
              <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                {"bubble_chart"}
              </span>
              <div className="flex flex-col min-w-0">
                <span className="font-label-sm text-label-sm text-secondary truncate">
                  {"Active Study Scope"}
                </span>
                <span className="font-body-md text-body-md font-medium text-on-surface truncate" id="scope-title-text">
                  {"Chat · Data Structures mid prep"}
                </span>
              </div>
            </div>
            <span className="material-symbols-outlined text-[20px] text-secondary" aria-hidden="true">
              {"arrow_drop_down"}
            </span>
          </button>
        </div>
        <div className="grid grid-cols-2 p-1 bg-surface-container-low rounded-xl mb-space-md">
          <button className="h-10 flex items-center justify-center gap-1.5 rounded-lg font-label-md text-label-md font-medium bg-surface-container-lowest text-on-surface shadow-sm transition-all" id="toggle-list-view" onClick={event => { const result = actions.current[5]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"format_list_bulleted"}
            </span>
            <span>
              {"List View"}
            </span>
          </button>
          <button className="h-10 flex items-center justify-center gap-1.5 rounded-lg font-label-md text-label-md font-medium text-on-surface-variant hover:text-on-surface transition-all" id="toggle-map-view" onClick={event => { const result = actions.current[6]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"hub"}
            </span>
            <span>
              {"Map View"}
            </span>
          </button>
        </div>
        <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-space-sm mb-space-md" id="filter-chips-container">
          <button className="filter-chip h-7 px-3.5 rounded-full font-label-sm text-label-sm whitespace-nowrap bg-primary text-on-primary font-medium transition-all" onClick={event => { const result = actions.current[7]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      All (8)\n    "}
          </button>
          <button className="filter-chip h-7 px-3.5 rounded-full font-label-sm text-label-sm whitespace-nowrap bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all flex items-center gap-1" onClick={event => { const result = actions.current[8]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="w-1.5 h-1.5 rounded-full bg-error"></span>
            <span>
              {"Needs review (1)"}
            </span>
          </button>
          <button className="filter-chip h-7 px-3.5 rounded-full font-label-sm text-label-sm whitespace-nowrap bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all" onClick={event => { const result = actions.current[9]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Practised (3)\n    "}
          </button>
          <button className="filter-chip h-7 px-3.5 rounded-full font-label-sm text-label-sm whitespace-nowrap bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all" onClick={event => { const result = actions.current[10]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Explored (5)\n    "}
          </button>
          <button className="filter-chip h-7 px-3.5 rounded-full font-label-sm text-label-sm whitespace-nowrap bg-surface-container-low text-on-surface-variant hover:text-on-surface transition-all" onClick={event => { const result = actions.current[11]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            {"\n      Planned\n    "}
          </button>
        </div>
        <div className="flex flex-col gap-space-sm" id="view-list">
          <div className="concept-card flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow" data-status="review">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-label-sm text-label-sm text-secondary font-code">
                {"Linked lists · Step 2"}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-error-container text-on-error-container font-medium">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  {"priority_high"}
                </span>
                {"\n          Needs review\n        "}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
              {"Insertion at the beginning"}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              {"\n        Missed head pointer update in teach-back\n      "}
            </p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-2 text-on-surface-variant font-label-sm text-label-sm">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"schedule"}
                </span>
                <span>
                  {"Last tested 2h ago"}
                </span>
              </div>
              <button className="h-9 px-4 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-neutral-800 flex items-center gap-1 transition-all" onClick={event => { const result = actions.current[12]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span>
                  {"Practise"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"arrow_forward"}
                </span>
              </button>
            </div>
          </div>
          <div className="concept-card flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow" data-status="practised">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-label-sm text-label-sm text-secondary font-code">
                {"Linked lists"}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  {"check"}
                </span>
                {"\n          Practised\n        "}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
              {"Head reference"}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              {"\n        Sentinel vs nullable pointer mechanisms consolidated.\n      "}
            </p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1 text-on-surface-variant font-code text-code">
                <span>
                  {"Mastery: 92%"}
                </span>
              </div>
              <button className="h-9 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container flex items-center gap-1 transition-all" onClick={event => { const result = actions.current[13]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span>
                  {"View"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"visibility"}
                </span>
              </button>
            </div>
          </div>
          <div className="concept-card flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow" data-status="practised">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-label-sm text-label-sm text-secondary font-code">
                {"Linked lists"}
              </span>
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container text-on-surface-variant font-medium">
                <span className="material-symbols-outlined text-[13px]" aria-hidden="true">
                  {"check"}
                </span>
                {"\n          Practised\n        "}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
              {"Nodes and references"}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              {"\n        Memory addresses, next pointer assignments, self-referential structures.\n      "}
            </p>
            <div className="flex items-center justify-between pt-2">
              <div className="flex items-center gap-1 text-on-surface-variant font-code text-code">
                <span>
                  {"Mastery: 88%"}
                </span>
              </div>
              <button className="h-9 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container flex items-center gap-1 transition-all" onClick={event => { const result = actions.current[14]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span>
                  {"View"}
                </span>
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"visibility"}
                </span>
              </button>
            </div>
          </div>
          <div className="concept-card flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow" data-status="explored">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-label-sm text-label-sm text-secondary font-code">
                {"Data Structures"}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-low text-secondary font-medium">
                {"\n          Explored\n        "}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
              {"Linked lists (Core Concept)"}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              {"\n        Non-contiguous node chains, dynamic size advantages, traversal overhead.\n      "}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-label-sm text-label-sm text-secondary">
                {"3 sub-topics"}
              </span>
              <button className="h-9 px-3.5 rounded-xl bg-surface-container-low text-on-surface font-label-md text-label-md font-medium hover:bg-surface-container transition-all" onClick={event => { const result = actions.current[15]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                {"\n          Explore tree\n        "}
              </button>
            </div>
          </div>
          <div className="concept-card flex flex-col p-4 rounded-xl bg-surface-container-lowest shadow-sm hover:shadow-md transition-shadow" data-status="planned">
            <div className="flex items-start justify-between gap-2 mb-1.5">
              <span className="font-label-sm text-label-sm text-secondary font-code">
                {"Data Structures"}
              </span>
              <span className="inline-flex items-center px-2 py-0.5 rounded-full font-label-sm text-label-sm bg-surface-container-high text-on-surface-variant font-medium">
                {"\n          Planned\n        "}
              </span>
            </div>
            <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
              {"Stacks & Queues"}
            </h3>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-3">
              {"\n        LIFO and FIFO operational constraints, circular buffers, stack overflow guards.\n      "}
            </p>
            <div className="flex items-center justify-between pt-2">
              <span className="font-label-sm text-label-sm text-secondary">
                {"Unlocks after traversal"}
              </span>
              <button className="h-9 px-3.5 rounded-xl text-secondary font-label-md text-label-md font-medium flex items-center gap-1 cursor-not-allowed opacity-60" type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"lock"}
                </span>
                <span>
                  {"Locked"}
                </span>
              </button>
            </div>
          </div>
        </div>
        <div className="hidden flex-col relative w-full rounded-2xl bg-surface-container-low overflow-hidden" id="view-map">
          <div className="absolute top-3 left-3 right-3 z-10 flex items-center justify-between pointer-events-none">
            <div className="flex items-center gap-1.5 p-1.5 rounded-xl bg-surface/90 backdrop-blur-md pointer-events-auto shadow-sm">
              <button aria-label="Center Graph" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"filter_center_focus"}
                </span>
              </button>
              <button aria-label="Zoom In" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"add"}
                </span>
              </button>
              <button aria-label="Zoom Out" className="w-8 h-8 flex items-center justify-center rounded-lg text-on-surface hover:bg-surface-container" type="button">
                <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                  {"remove"}
                </span>
              </button>
            </div>
            <div className="px-2.5 py-1 rounded-full bg-surface/90 backdrop-blur-md font-code text-code text-secondary pointer-events-auto shadow-sm">
              {"\n        2D Kinematic Grid\n      "}
            </div>
          </div>
          <div className="w-full h-[460px] relative overflow-hidden flex items-center justify-center">
            <svg className="w-full h-full cursor-grab active:cursor-grabbing select-none" fill="none" viewBox="0 0 360 440" xmlns="http://www.w3.org/2000/svg">
              <defs>
                <pattern height="20" id="grid-dots" patternUnits="userSpaceOnUse" width="20">
                  <circle cx="2" cy="2" fill="#dadada" r="1"></circle>
                </pattern>
              </defs>
              <rect fill="url(#grid-dots)" height="100%" width="100%"></rect>
              <path d="M180 80 L100 180" stroke="#747878" strokeDasharray="3 3" strokeWidth="1.5"></path>
              <path d="M180 80 L260 180" stroke="#000000" strokeWidth="1.5"></path>
              <path d="M260 180 L200 290" stroke="#ba1a1a" strokeWidth="2"></path>
              <path d="M260 180 L300 290" stroke="#000000" strokeWidth="1.5"></path>
              <path d="M100 180 L80 290" stroke="#c4c7c7" strokeDasharray="4 4" strokeWidth="1.2"></path>
              <g className="cursor-pointer" transform="translate(180, 80)">
                <circle fill="#1c1b1b" r="22"></circle>
                <circle fill="none" r="27" stroke="#1c1b1b" strokeOpacity="0.15" strokeWidth="4"></circle>
                <text fill="#ffffff" fontFamily="Inter" fontSize="9" fontWeight="600" textAnchor="middle" y="4">
                  {"DATA STR"}
                </text>
              </g>
              <g className="cursor-pointer" transform="translate(100, 180)">
                <circle fill="#e2e2e2" r="18"></circle>
                <text fill="#5e5e5e" fontFamily="Inter" fontSize="8" fontWeight="500" textAnchor="middle" y="3">
                  {"Stacks"}
                </text>
              </g>
              <g className="cursor-pointer" transform="translate(80, 290)">
                <circle fill="#eeeeee" r="15"></circle>
                <text fill="#747878" fontFamily="Inter" fontSize="7" textAnchor="middle" y="3">
                  {"Queues"}
                </text>
              </g>
              <g className="cursor-pointer" transform="translate(260, 180)">
                <circle fill="#000000" r="24"></circle>
                <circle fill="none" r="30" stroke="#000000" strokeOpacity="0.1" strokeWidth="6"></circle>
                <text fill="#ffffff" fontFamily="Inter" fontSize="8.5" fontWeight="600" textAnchor="middle" y="4">
                  {"Linked List"}
                </text>
              </g>
              <g className="cursor-pointer" transform="translate(300, 290)">
                <circle fill="#ffffff" r="17" stroke="#747878" strokeWidth="1.5"></circle>
                <text fill="#1a1c1c" fontFamily="Inter" fontSize="8" fontWeight="500" textAnchor="middle" y="3">
                  {"Nodes"}
                </text>
                <circle cx="11" cy="-11" fill="#1a1c1c" r="5"></circle>
                <text fill="#ffffff" fontSize="6" textAnchor="middle" x="11" y="-9">
                  {"✓"}
                </text>
              </g>
              <g className="cursor-pointer" onClick={event => { const result = actions.current[16]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} transform="translate(200, 290)">
                <circle fill="#ba1a1a" r="22"></circle>
                <circle className="animate-ping" fill="none" r="28" stroke="#ba1a1a" strokeOpacity="0.25" strokeWidth="4"></circle>
                <text fill="#ffffff" fontFamily="Inter" fontSize="8" fontWeight="600" textAnchor="middle" y="-2">
                  {"Insertion"}
                </text>
                <text fill="#ffffff" fontFamily="Inter" fontSize="7" textAnchor="middle" y="8">
                  {"Start"}
                </text>
                <circle cx="14" cy="-14" fill="#ffdad6" r="6"></circle>
                <text fill="#93000a" fontSize="9" fontWeight="bold" textAnchor="middle" x="14" y="-11">
                  {"!"}
                </text>
              </g>
            </svg>
            <div className="absolute bottom-3 left-3 text-secondary font-label-sm text-label-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-error"></span>
              <span>
                {"Tap glowing node to open analysis"}
              </span>
            </div>
          </div>
          <div className="w-full bg-surface-container-lowest rounded-t-2xl shadow-xl p-space-md flex flex-col transition-all" id="graph-bottom-sheet">
            <div className="w-full flex justify-center pb-2 cursor-pointer" onClick={event => { const result = actions.current[17]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }}>
              <span className="w-10 h-1 rounded-full bg-surface-container-highest"></span>
            </div>
            <div className="flex items-center justify-between mb-1">
              <span className="font-code text-code text-error font-medium flex items-center gap-1">
                <span className="material-symbols-outlined text-[15px]" aria-hidden="true">
                  {"error"}
                </span>
                {"\n          Needs review: Missing head update step\n        "}
              </span>
              <button aria-label="Dismiss Sheet" className="w-7 h-7 flex items-center justify-center rounded-full hover:bg-surface-container text-secondary" onClick={event => { const result = actions.current[18]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <span className="material-symbols-outlined text-[16px]" aria-hidden="true">
                  {"close"}
                </span>
              </button>
            </div>
            <h2 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-1">
              {"Insertion at the beginning"}
            </h2>
            <p className="font-body-sm text-body-sm text-on-surface-variant mb-space-md">
              {"\n        During teach-back simulation, new node was allocated but previous head address assignment was omitted before head reassignment.\n      "}
            </p>
            <button className="w-full h-12 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium flex items-center justify-center gap-2 mb-space-sm hover:bg-neutral-800 transition-colors shadow-sm" onClick={event => { const result = actions.current[19]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
              <span>
                {"Practise this concept"}
              </span>
              <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
                {"arrow_forward"}
              </span>
            </button>
            <div className="rounded-xl bg-surface-container-low overflow-hidden">
              <button className="w-full p-3 flex items-center justify-between text-left font-label-md text-label-md text-on-surface font-medium" onClick={event => { const result = actions.current[20]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">
                    {"history_edu"}
                  </span>
                  <span>
                    {"View learning evidence (2 logs)"}
                  </span>
                </div>
                <span className="material-symbols-outlined text-[20px] text-secondary transition-transform" id="accordion-icon" aria-hidden="true">
                  {"expand_more"}
                </span>
              </button>
              <div className="hidden p-3 pt-0 flex flex-col gap-2 font-code text-code text-on-surface-variant" id="accordion-content">
                <div className="p-2.5 rounded-lg bg-surface-container-lowest">
                  <span className="text-error font-medium">
                    {"[14:20 Teach-back]"}
                  </span>
                  {": \"newNode.next = null; head = newNode;\" — lost pointer to existing head list.\n          "}
                </div>
                <div className="p-2.5 rounded-lg bg-surface-container-lowest">
                  <span className="text-secondary font-medium">
                    {"[Hint Provided]"}
                  </span>
                  {": Linked list insertion order invariant: wire target prior to rewiring head.\n          "}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden flex-col items-center justify-center text-center py-space-2xl px-space-md rounded-2xl bg-surface-container-low" id="view-empty">
          <div className="w-16 h-16 rounded-2xl bg-surface-container flex items-center justify-center mb-space-md text-primary">
            <span className="material-symbols-outlined text-[32px]" aria-hidden="true">
              {"grain"}
            </span>
          </div>
          <span className="font-label-sm text-label-sm uppercase tracking-widest text-secondary mb-1">
            {"Pristine Canvas"}
          </span>
          <h3 className="font-headline-sm text-headline-sm text-on-surface font-semibold mb-2">
            {"No concepts recorded yet"}
          </h3>
          <p className="font-body-md text-body-md text-on-surface-variant max-w-[280px] mb-space-lg">
            {"\n      Start a dialogue with your Mentor to construct an adaptive topology of your understanding.\n    "}
          </p>
          <button className="h-11 px-5 rounded-xl bg-primary text-on-primary font-label-md text-label-md font-medium hover:bg-neutral-800 transition-all flex items-center gap-2" onClick={event => { const result = actions.current[21]?.call(event.currentTarget, event); if (result === false) event.preventDefault(); }} type="button">
            <span className="material-symbols-outlined text-[18px]" aria-hidden="true">
              {"chat"}
            </span>
            <span>
              {"Begin Study Session"}
            </span>
          </button>
        </div>
        <div className="fixed bottom-20 left-4 right-4 z-50 transform translate-y-32 opacity-0 pointer-events-none transition-all duration-300" id="toast-modal">
          <div className="p-4 rounded-xl bg-inverse-surface text-inverse-on-surface flex items-center justify-between shadow-xl">
            <div className="flex items-center gap-2.5">
              <span className="material-symbols-outlined text-[20px] text-surface-tint" aria-hidden="true">
                {"terminal"}
              </span>
              <span className="font-label-md text-label-md font-medium" id="toast-text">
                {"Launching sandbox session..."}
              </span>
            </div>
            <span className="material-symbols-outlined text-[18px] text-inverse-on-surface/60" aria-hidden="true">
              {"hourglass_top"}
            </span>
          </div>
        </div>
      </div>
    </main>
    <nav className="fixed bottom-0 w-full z-50 pb-safe bg-surface/85 backdrop-blur-xl shadow-[0_-1px_8px_rgba(0,0,0,0.03)]" data-active-classes="text-primary font-semibold">
      <div className="flex justify-around items-center h-16 px-space-sm">
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="mentor" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"psychology"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Mentor"}
          </span>
        </a>
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="my-plan-strategy" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"assignment"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Plan"}
          </span>
        </a>
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="graph" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"monitoring"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Graph"}
          </span>
        </a>
        <a className="flex-1 flex flex-col items-center justify-center h-12 text-on-surface-variant hover:text-on-surface transition-colors" data-path="status" href="#">
          <span className="material-symbols-outlined text-[22px]" aria-hidden="true">
            {"radio_button_checked"}
          </span>
          <span className="font-label-sm text-label-sm tracking-tight mt-0.5">
            {"Status"}
          </span>
        </a>
      </div>
    </nav>
  </div>;
}
