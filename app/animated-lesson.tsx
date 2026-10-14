'use client';

import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Pause, Play, RotateCcw } from 'lucide-react';
import animations from './demo-animation.json';

function StepVisual({ clip, text, still }: { clip: typeof animations[number][number]; text: string; still: boolean }) {
  const video = useRef<HTMLVideoElement>(null);
  const [failed, setFailed] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [played, setPlayed] = useState(false);
  const [playError, setPlayError] = useState(false);

  async function replay() {
    if (!video.current) return;
    video.current.currentTime = 0;
    setPlayError(false);
    try { await video.current.play(); }
    catch { setPlayError(true); }
  }

  return <>
    <div className="animation-canvas">
      {still || failed ? <img src={clip.still} alt={text} width={1200} height={800} /> :
        <video ref={video} src={clip.video} poster={clip.still} controls playsInline preload="metadata"
          aria-label={'Animated worked step: ' + text}
          onPlay={() => { setPlaying(true); setPlayed(true); }} onPause={() => setPlaying(false)}
          onEnded={() => setPlaying(false)} onError={() => setFailed(true)} />}
    </div>
    <div className="animation-playback">
      {still || failed ? <span>{failed ? 'Video unavailable. You can still follow the illustrated steps.' : 'Still diagram · take your time'}</span> : <>
        <button type="button" className="text-button" onClick={playing ? () => video.current?.pause() : replay}>
          {playing ? <Pause size={16} /> : played ? <RotateCcw size={16} /> : <Play size={16} />}
          {playing ? 'Pause step' : played ? 'Replay step' : 'Play step'}
        </button><span>Plays once. You choose when to continue.</span>
      </>}
    </div>
    {playError && <p role="status" className="form-help">Playback could not start. Try the video&apos;s play control.</p>}
  </>;
}

export default function AnimatedLesson({ concept, steps }: { concept: number; steps: string[] }) {
  const [step, setStep] = useState(0);
  const [still, setStill] = useState(false);
  useEffect(() => {
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const update = () => setStill(preference.matches);
    update();
    preference.addEventListener('change', update);
    return () => preference.removeEventListener('change', update);
  }, []);
  const clips = animations[concept];

  // shortcut: these clips cover the reviewed recursion demo only; add scene plans before supporting generated courses.
  if (!clips || clips.length !== steps.length) return <ol>{steps.map((text, i) => <li key={i}>{text}</li>)}</ol>;

  return <section className="animated-lesson" aria-label="Step-by-step visual explanation">
    <div className="animation-heading"><span>LET&apos;S BREAK IT DOWN</span>
      <label className="animation-mode"><input type="checkbox" checked={still} onChange={e => setStill(e.target.checked)} />Still diagrams</label>
    </div>
    <StepVisual key={step + '-' + still} clip={clips[step]} text={steps[step]} still={still} />
    <div className="animation-caption" aria-live="polite" aria-atomic="true">
      <span>STEP {step + 1} OF {steps.length}</span><p>{steps[step]}</p>
    </div>
    <div className="animation-navigation">
      <button type="button" className="secondary" onClick={() => setStep(step - 1)} disabled={step === 0}><ArrowLeft size={16} />Back</button>
      <div className="animation-dots" aria-hidden="true">{steps.map((_, i) => <span key={i} className={i === step ? 'active' : i < step ? 'visited' : ''} />)}</div>
      {step < steps.length - 1 ? <button type="button" className="primary" onClick={() => setStep(step + 1)}>Next step<ArrowRight size={16} /></button> :
        <button type="button" className="primary" onClick={() => document.getElementById('answer')?.focus()}>Try it yourself<ArrowRight size={16} /></button>}
    </div>
  </section>;
}
