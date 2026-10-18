'use client';

import { useEffect, useState } from 'react';
import { Loader2, RotateCcw, Sparkles } from 'lucide-react';
import { api, type Concept } from './api';
import AnimatedLesson from './animated-lesson';

type AnimationJob = {
  status: 'idle' | 'queued' | 'planning' | 'checking' | 'rendering' | 'ready' | 'failed';
  title?: string; error?: string;
  steps: { title: string; explanation: string; video: string; still: string }[];
};
const messages = { idle: 'Preparing your visual explanation', queued: 'Your visual explanation is queued', planning: 'Breaking the idea into small steps', checking: 'Checking the reasoning against your material', rendering: 'Bringing the parts to life', ready: 'Your visual explanation is ready', failed: 'The visual needs another try' };

export default function GeneratedLesson({ sid, index, concept }: { sid: string; index: number; concept: Concept }) {
  const [job, setJob] = useState<AnimationJob>({ status: 'idle', steps: [] });
  const [retry, setRetry] = useState(0);
  useEffect(() => {
    let active = true;
    let timer: ReturnType<typeof setTimeout> | undefined;
    const endpoint = `/sessions/${sid}/animations/${index}`;
    setJob({ status: 'idle', steps: [] });
    async function receive(start = false) {
      try {
        const next = await api<AnimationJob>(endpoint, start ? 'POST' : 'GET');
        if (!active) return;
        setJob(next);
        if (next.status !== 'ready' && next.status !== 'failed') timer = setTimeout(() => void receive(), 2000);
      } catch (error) {
        if (active) setJob({ status: 'failed', steps: [], error: error instanceof Error ? error.message : 'Please retry the animation.' });
      }
    }
    void receive(true);
    return () => { active = false; clearTimeout(timer); };
  }, [sid, index, retry]);

  return <section className="generated-lesson" aria-label="Generated visual lesson">
    {job.status === 'ready' ? <>
      <div className="generated-lesson-label"><Sparkles size={16} /><span>A visual walkthrough of your material</span></div>
      <AnimatedLesson key={'rendered-' + index} concept={index} demo={false} renderedClips={job.steps}
        steps={job.steps.map(step => step.explanation)} titles={job.steps.map(step => step.title)} />
    </> : <>
      <div className="animation-preparation" role="status" aria-live="polite">
        {job.status === 'failed' ? <RotateCcw size={20} /> : <Loader2 size={20} className="spin" />}
        <div><strong>{messages[job.status]}</strong><p>{job.status === 'failed' ? job.error : 'You can read the worked steps below while the visual is prepared. Your progress is saved.'}</p></div>
        {job.status === 'failed' && <button className="secondary" type="button" onClick={() => setRetry(retry + 1)}>Retry animation</button>}
      </div>
      {job.status === 'failed' ? <AnimatedLesson concept={index} steps={concept.steps} scenes={concept.scenes} demo={false} /> :
        <details className="animation-text-preview"><summary>Read the worked steps</summary><ol>{concept.steps.map((step, i) => <li key={i}>{step}</li>)}</ol></details>}
    </>}
  </section>;
}
