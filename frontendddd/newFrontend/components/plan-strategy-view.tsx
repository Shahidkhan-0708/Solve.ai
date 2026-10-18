'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface Step {
  id: string;
  stepNum: string;
  title: string;
  category: string;
  mode: string;
  duration: string;
  marksYield: string;
  status: 'completed' | 'active' | 'upcoming';
  description: string;
  prerequisites: string[];
}

const initialSteps: Step[] = [
  {
    id: 'step-1',
    stepNum: '01',
    title: 'Linked Lists (Singly & Doubly)',
    category: 'Basics',
    mode: 'Q&A Practice',
    duration: '45 mins',
    marksYield: '15 marks',
    status: 'completed',
    description: 'Learn how linked lists work, how to add or delete nodes, and how to detect loops.',
    prerequisites: ['Pointers', 'Memory basics'],
  },
  {
    id: 'step-2',
    stepNum: '02',
    title: 'Binary Search Trees & AVL Trees',
    category: 'Trees',
    mode: 'Practice Problems',
    duration: '60 mins',
    marksYield: '25 marks',
    status: 'active',
    description: 'Learn how to search, insert, and balance trees using left and right rotations.',
    prerequisites: ['Linked Lists', 'Recursion'],
  },
  {
    id: 'step-3',
    stepNum: '03',
    title: 'Graphs: Breadth-First & Depth-First Search',
    category: 'Graphs',
    mode: 'Step-by-step Guide',
    duration: '50 mins',
    marksYield: '20 marks',
    status: 'upcoming',
    description: 'Learn how to visit all items in a graph and check for loops.',
    prerequisites: ['Stacks & Queues', 'Trees'],
  },
  {
    id: 'step-4',
    stepNum: '04',
    title: 'Dynamic Programming Basics',
    category: 'Problem Solving',
    mode: 'Worked Examples',
    duration: '45 mins',
    marksYield: '15 marks',
    status: 'upcoming',
    description: 'Learn how to split large problems into smaller parts and save previous answers to save time.',
    prerequisites: ['Recursion'],
  },
];

export default function PlanStrategyView() {
  const [activeTab, setActiveTab] = useState<'steps' | 'topics' | 'settings'>('steps');
  const [steps, setSteps] = useState<Step[]>(initialSteps);
  const [expandedStep, setExpandedStep] = useState<string | null>('step-2');
  const [showEditModal, setShowEditModal] = useState(false);
  const [studyHours, setStudyHours] = useState(4);
  const [guidanceStyle, setGuidanceStyle] = useState<'questions' | 'balanced' | 'direct'>('questions');
  const [questionFrequency, setQuestionFrequency] = useState<'normal' | 'often'>('normal');
  const [examName, setExamName] = useState('Data Structures Midterm');
  const [toast, setToast] = useState<string | null>(null);

  const toggleComplete = (id: string) => {
    setSteps((prev) =>
      prev.map((s) => {
        if (s.id !== id) return s;
        const nextStatus = s.status === 'completed' ? 'active' : 'completed';
        return { ...s, status: nextStatus };
      })
    );
    showNotice('Step updated.');
  };

  const showNotice = (msg: string) => {
    setToast(msg);
    setTimeout(() => setToast(null), 2500);
  };

  const completedCount = steps.filter((s) => s.status === 'completed').length;
  const progressPercent = Math.round((completedCount / steps.length) * 100);

  return (
    <div className="w-full max-w-5xl mx-auto px-4 sm:px-6 py-6 space-y-6">
      {/* Toast Message */}
      {toast && (
        <div className="fixed top-16 right-6 z-50 bg-black text-white px-4 py-2 rounded-lg text-sm shadow-md flex items-center gap-2">
          <span className="material-symbols-outlined text-emerald-400 text-[18px]">check</span>
          <span>{toast}</span>
        </div>
      )}

      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-outline-variant/60">
        <div>
          <div className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">
            Study Plan / Exam Prep
          </div>
          <h1 className="text-2xl font-semibold tracking-tight text-on-surface mt-1">
            My Study Plan
          </h1>
          <p className="text-sm text-on-surface-variant mt-1">
            A simple 4-hour plan to help you prepare for your exam step by step.
          </p>
        </div>

        <div className="flex items-center gap-2 shrink-0">
          <button
            onClick={() => setShowEditModal(true)}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-lg border border-outline-variant hover:bg-surface-container text-sm font-medium transition-colors"
            type="button"
          >
            <span className="material-symbols-outlined text-[18px]">edit</span>
            <span>Edit Plan</span>
          </button>

          <Link
            href="/"
            className="flex items-center gap-1.5 px-4 py-2 rounded-lg bg-primary text-on-primary hover:bg-neutral-800 text-sm font-medium transition-colors shadow-sm"
          >
            <span className="material-symbols-outlined text-[18px]">play_arrow</span>
            <span>Start Studying</span>
          </Link>
        </div>
      </div>

      {/* 3 Simple Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Card 1: Exam Info */}
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/70 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">Exam</span>
            <span className="px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-700 text-xs font-medium border border-emerald-200">
              Active
            </span>
          </div>
          <div className="mt-2">
            <div className="text-lg font-semibold text-on-surface">{examName}</div>
            <p className="text-xs text-on-surface-variant mt-1">Exam in 4 days · {studyHours} hours planned</p>
          </div>
          <div className="mt-3 pt-3 border-t border-outline-variant/40 text-xs text-on-surface-variant flex justify-between">
            <span>Points covered:</span>
            <strong className="text-on-surface font-medium">75 of 100 marks</strong>
          </div>
        </div>

        {/* Card 2: Study Style */}
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/70 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">How You Learn</span>
            <span className="px-2 py-0.5 rounded-full bg-blue-50 text-blue-700 text-xs font-medium border border-blue-200">
              Practice
            </span>
          </div>
          <div className="mt-2">
            <div className="text-lg font-semibold text-on-surface">Ask & Answer</div>
            <p className="text-xs text-on-surface-variant mt-1">
              The tutor asks you questions to help you understand before moving on.
            </p>
          </div>
          <div className="mt-3 pt-3 border-t border-outline-variant/40 text-xs text-on-surface-variant flex justify-between">
            <span>Pacing:</span>
            <strong className="text-on-surface font-medium">Step by step</strong>
          </div>
        </div>

        {/* Card 3: Progress */}
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/70 shadow-xs flex flex-col justify-between">
          <div className="flex items-center justify-between">
            <span className="text-xs uppercase tracking-wider text-on-surface-variant font-medium">Progress</span>
            <span className="text-xs text-on-surface-variant font-medium">{completedCount} of {steps.length} done</span>
          </div>
          <div className="mt-2">
            <div className="text-lg font-semibold text-on-surface">{progressPercent}% Completed</div>
            <div className="w-full bg-surface-container rounded-full h-2 mt-2 overflow-hidden">
              <div
                className="bg-primary h-full rounded-full transition-all duration-300"
                style={{ width: `${progressPercent}%` }}
              />
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-outline-variant/40 text-xs text-on-surface-variant flex justify-between">
            <span>Ready for exam:</span>
            <strong className="text-emerald-700 font-medium">Good shape</strong>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1 p-1 bg-surface-container-low rounded-lg border border-outline-variant/60">
          <button
            onClick={() => setActiveTab('steps')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === 'steps' ? 'bg-surface-container-lowest text-on-surface shadow-xs' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Study Steps
          </button>
          <button
            onClick={() => setActiveTab('topics')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === 'topics' ? 'bg-surface-container-lowest text-on-surface shadow-xs' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            All Topics
          </button>
          <button
            onClick={() => setActiveTab('settings')}
            className={`px-3 py-1.5 rounded-md text-xs font-medium transition-colors ${
              activeTab === 'settings' ? 'bg-surface-container-lowest text-on-surface shadow-xs' : 'text-on-surface-variant hover:text-on-surface'
            }`}
          >
            Settings
          </button>
        </div>

        <span className="text-xs text-on-surface-variant">2 hours left today</span>
      </div>

      {/* Tab 1: Simple Study Steps */}
      {activeTab === 'steps' && (
        <div className="space-y-3">
          <div className="flex items-center justify-between text-xs text-on-surface-variant px-1 font-medium">
            <span>Steps to complete</span>
            <span>Time & marks</span>
          </div>

          <div className="space-y-2.5">
            {steps.map((step) => {
              const isExpanded = expandedStep === step.id;
              const isCompleted = step.status === 'completed';
              const isActive = step.status === 'active';

              return (
                <div
                  key={step.id}
                  className={`rounded-xl border transition-all ${
                    isActive
                      ? 'bg-surface-container-lowest border-primary shadow-xs'
                      : isCompleted
                      ? 'bg-surface-container-low/50 border-outline-variant/50'
                      : 'bg-surface-container-lowest border-outline-variant/60'
                  }`}
                >
                  <div
                    onClick={() => setExpandedStep(isExpanded ? null : step.id)}
                    className="p-4 flex items-center justify-between gap-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          toggleComplete(step.id);
                        }}
                        className={`w-6 h-6 rounded flex items-center justify-center transition-colors ${
                          isCompleted
                            ? 'bg-emerald-600 text-white'
                            : isActive
                            ? 'bg-primary text-white'
                            : 'border border-outline-variant text-on-surface-variant hover:border-primary'
                        }`}
                        title={isCompleted ? 'Mark not done' : 'Mark done'}
                      >
                        {isCompleted ? (
                          <span className="material-symbols-outlined text-[15px]">check</span>
                        ) : (
                          <span className="text-xs font-mono">{step.stepNum}</span>
                        )}
                      </button>

                      <div className="min-w-0">
                        <div className="flex items-center gap-2">
                          <h2
                            className={`text-sm font-medium truncate ${
                              isCompleted ? 'line-through text-on-surface-variant' : 'text-on-surface'
                            }`}
                          >
                            {step.title}
                          </h2>
                          {isActive && (
                            <span className="px-2 py-0.5 rounded bg-primary text-on-primary text-[10px] font-medium shrink-0">
                              Now Studying
                            </span>
                          )}
                        </div>
                        <div className="flex items-center gap-2 text-xs text-on-surface-variant mt-0.5">
                          <span>{step.category}</span>
                          <span>·</span>
                          <span className="text-emerald-700 font-medium">{step.mode}</span>
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-3 shrink-0">
                      <div className="text-right text-xs">
                        <div className="font-medium text-on-surface">{step.duration}</div>
                        <div className="text-on-surface-variant">{step.marksYield}</div>
                      </div>
                      <span className="material-symbols-outlined text-[18px] text-on-surface-variant">
                        {isExpanded ? 'expand_less' : 'expand_more'}
                      </span>
                    </div>
                  </div>

                  {/* Expanded details */}
                  {isExpanded && (
                    <div className="px-4 pb-4 pt-1 border-t border-outline-variant/30 bg-surface-container-low/20 space-y-3">
                      <p className="text-xs text-on-surface leading-normal">{step.description}</p>

                      <div className="flex flex-wrap items-center justify-between gap-2 pt-1">
                        <div className="flex items-center gap-1.5 text-xs text-on-surface-variant">
                          <span className="font-medium text-on-surface">Need to know first:</span>
                          {step.prerequisites.map((p, idx) => (
                            <span key={idx} className="px-2 py-0.5 rounded bg-surface-container text-[11px]">
                              {p}
                            </span>
                          ))}
                        </div>

                        <div className="flex items-center gap-2">
                          <button
                            type="button"
                            onClick={() => toggleComplete(step.id)}
                            className="px-3 py-1 rounded-lg border border-outline-variant text-xs hover:bg-surface-container transition-colors"
                          >
                            {isCompleted ? 'Mark as Not Done' : 'Mark as Done'}
                          </button>
                          <Link
                            href="/"
                            className="px-3 py-1 rounded-lg bg-primary text-on-primary text-xs font-medium hover:bg-neutral-800 transition-colors flex items-center gap-1"
                          >
                            <span>Start Lesson</span>
                            <span className="material-symbols-outlined text-[14px]">arrow_forward</span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* Tab 2: Topics Overview */}
      {activeTab === 'topics' && (
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/70 space-y-4">
          <div>
            <h2 className="text-sm font-semibold text-on-surface">Topics & What to Know</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Review what each topic covers before your exam.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xs text-on-surface">Pointers & Memory</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-emerald-100 text-emerald-800 font-medium">Done</span>
              </div>
              <p className="text-xs text-on-surface-variant">The basics of how computers store items in memory and link them together.</p>
              <div className="text-[11px] text-on-surface-variant">Used in: Linked Lists, Trees</div>
            </div>

            <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xs text-on-surface">Recursion</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-blue-100 text-blue-800 font-medium">In Progress</span>
              </div>
              <p className="text-xs text-on-surface-variant">Functions that solve smaller parts of the same problem.</p>
              <div className="text-[11px] text-on-surface-variant">Used in: Trees, Graphs</div>
            </div>

            <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xs text-on-surface">Graphs</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-100 text-amber-800 font-medium">Next</span>
              </div>
              <p className="text-xs text-on-surface-variant">Collections of items connected by lines and how to visit them.</p>
              <div className="text-[11px] text-on-surface-variant">Used in: Search, Shortest paths</div>
            </div>

            <div className="p-3.5 rounded-lg bg-surface-container-low border border-outline-variant/40 space-y-1">
              <div className="flex items-center justify-between">
                <span className="font-medium text-xs text-on-surface">Dynamic Programming</span>
                <span className="text-[10px] px-2 py-0.5 rounded-full bg-neutral-200 text-neutral-800 font-medium">Later</span>
              </div>
              <p className="text-xs text-on-surface-variant">Saving previous work so you do not do the same math twice.</p>
              <div className="text-[11px] text-on-surface-variant">Used in: Advanced problems</div>
            </div>
          </div>
        </div>
      )}

      {/* Tab 3: Simple Settings */}
      {activeTab === 'settings' && (
        <div className="p-5 rounded-xl bg-surface-container-lowest border border-outline-variant/70 space-y-5">
          <div>
            <h2 className="text-sm font-semibold text-on-surface">Study Settings</h2>
            <p className="text-xs text-on-surface-variant mt-0.5">
              Choose how the AI helps you study.
            </p>
          </div>

          <div className="space-y-4 max-w-lg">
            <div>
              <label className="block text-xs font-medium text-on-surface mb-1.5">How should the tutor answer?</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { id: 'questions', label: 'Ask questions', desc: 'Helps you think it through' },
                  { id: 'balanced', label: 'Balanced', desc: 'Gives hints when stuck' },
                  { id: 'direct', label: 'Direct answers', desc: 'Gives the solution directly' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setGuidanceStyle(item.id as any);
                      showNotice(`Style set to ${item.label}`);
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-colors ${
                      guidanceStyle === item.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-outline-variant/60 bg-surface-container-low hover:bg-surface-container text-on-surface'
                    }`}
                  >
                    <div className="text-xs font-medium">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${guidanceStyle === item.id ? 'text-neutral-200' : 'text-on-surface-variant'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label className="block text-xs font-medium text-on-surface mb-1.5">Practice Questions</label>
              <div className="grid grid-cols-2 gap-2">
                {[
                  { id: 'normal', label: 'Normal check-ins', desc: 'One question every 10 mins' },
                  { id: 'often', label: 'Frequent questions', desc: 'Question after each topic' },
                ].map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => {
                      setQuestionFrequency(item.id as any);
                      showNotice(`Practice questions set to ${item.label}`);
                    }}
                    className={`p-2.5 rounded-lg border text-left transition-colors ${
                      questionFrequency === item.id
                        ? 'border-primary bg-primary text-white'
                        : 'border-outline-variant/60 bg-surface-container-low hover:bg-surface-container text-on-surface'
                    }`}
                  >
                    <div className="text-xs font-medium">{item.label}</div>
                    <div className={`text-[10px] mt-0.5 ${questionFrequency === item.id ? 'text-neutral-200' : 'text-on-surface-variant'}`}>
                      {item.desc}
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Edit Plan Modal */}
      {showEditModal && (
        <div className="fixed inset-0 z-50 bg-black/30 flex items-center justify-center p-4">
          <div className="bg-surface-container-lowest border border-outline-variant rounded-xl shadow-lg max-w-sm w-full p-5 space-y-4">
            <div className="flex items-center justify-between">
              <h2 className="text-sm font-semibold text-on-surface">Edit Study Plan</h2>
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="w-7 h-7 rounded flex items-center justify-center text-on-surface-variant hover:bg-surface-container"
              >
                <span className="material-symbols-outlined text-[18px]">close</span>
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <label className="block text-xs font-medium text-on-surface mb-1">Exam or Topic Name</label>
                <input
                  type="text"
                  value={examName}
                  onChange={(e) => setExamName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-surface-container-low border border-outline-variant text-sm outline-none focus:border-primary"
                />
              </div>

              <div>
                <label className="block text-xs font-medium text-on-surface mb-1">
                  Study time: {studyHours} {studyHours === 1 ? 'hour' : 'hours'}
                </label>
                <input
                  type="range"
                  min="1"
                  max="10"
                  step="1"
                  value={studyHours}
                  onChange={(e) => setStudyHours(Number(e.target.value))}
                  className="w-full accent-primary cursor-pointer"
                />
                <div className="flex justify-between text-[10px] text-on-surface-variant mt-1">
                  <span>1 hour (quick)</span>
                  <span>4 hours (standard)</span>
                  <span>10 hours (deep)</span>
                </div>
              </div>
            </div>

            <div className="flex items-center justify-end gap-2 pt-2">
              <button
                type="button"
                onClick={() => setShowEditModal(false)}
                className="px-3 py-1.5 rounded-lg text-xs hover:bg-surface-container text-on-surface-variant"
              >
                Cancel
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowEditModal(false);
                  showNotice('Study plan updated.');
                }}
                className="px-3.5 py-1.5 rounded-lg bg-primary text-on-primary text-xs font-medium hover:bg-neutral-800 shadow-xs"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
