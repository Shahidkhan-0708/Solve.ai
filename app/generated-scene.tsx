'use client';

import { useEffect, useId, useRef, useState } from 'react';
import { ArrowRight, Pause, Play, RotateCcw } from 'lucide-react';
import type { VisualScene } from './api';
import './generated-scene.css';

export default function GeneratedScene({ scene, still }: { scene: VisualScene; still: boolean }) {
  const canvas = useRef<HTMLDivElement>(null);
  const animations = useRef<Animation[]>([]);
  const [status, setStatus] = useState<'ready' | 'playing' | 'paused' | 'done'>('ready');
  const marker = useId().replaceAll(':', '');
  useEffect(() => () => animations.current.forEach(animation => animation.cancel()), []);

  function play() {
    if (status === 'playing') {
      animations.current.forEach(animation => animation.pause());
      setStatus('paused');
      return;
    }
    if (status === 'paused') {
      animations.current.forEach(animation => animation.play());
      setStatus('playing');
      return;
    }
    animations.current.forEach(animation => animation.cancel());
    const elements = Array.from(canvas.current?.querySelectorAll('.scene-node, .scene-relationship') ?? []);
    if (!elements.length || typeof elements[0].animate !== 'function') return;
    animations.current = elements.map((element, index) => element.animate(
      [{ opacity: 0.25, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
      { duration: 700, delay: index * 400, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'both' }
    ));
    animations.current.at(-1)!.onfinish = () => setStatus('done');
    setStatus('playing');
  }

  const rows = Math.ceil(scene.nodes.length / 2);
  const position = (id: string) => {
    const index = scene.nodes.findIndex(node => node.id === id);
    return { x: index % 2 * 50 + 25, y: (Math.floor(index / 2) + 0.5) * 100 / rows };
  };

  return <>
    <div className="generated-scene" ref={canvas}>
      <div className="scene-heading"><span>WORKED EXAMPLE</span><h4>{scene.title}</h4></div>
      <div className="scene-diagram">
        <svg className="scene-connectors" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <defs><marker id={marker} viewBox="0 0 10 10" refX="5" refY="5" markerWidth="5" markerHeight="5" orient="auto"><path d="M 0 0 L 10 5 L 0 10 z" fill="currentColor" /></marker></defs>
          {scene.links.map((link, index) => {
            const from = position(link.source), to = position(link.target);
            return <path key={index} d={`M ${from.x} ${from.y} L ${(from.x + to.x) / 2} ${(from.y + to.y) / 2} L ${to.x} ${to.y}`}
              fill="none" stroke="currentColor" strokeWidth="1.5" vectorEffect="non-scaling-stroke" markerMid={`url(#${marker})`} />;
          })}
        </svg>
        <ol className="scene-nodes" aria-label="Diagram objects">
          {scene.nodes.map((node, index) => <li key={node.id} className={'scene-node' + (node.id === scene.focus ? ' focused' : '')}>
            <span className="scene-node-number">{String(index + 1).padStart(2, '0')}{node.id === scene.focus && <span>FOCUS</span>}</span>
            <strong>{node.label}</strong><p>{node.detail}</p>
          </li>)}
        </ol>
      </div>
      {!!scene.links.length && <ul className="scene-relationships" aria-label="Diagram relationships">{scene.links.map((link, index) =>
        <li className="scene-relationship" key={index}><span>{scene.nodes.find(node => node.id === link.source)?.label}</span><ArrowRight size={15} aria-hidden="true" /><span>{scene.nodes.find(node => node.id === link.target)?.label}</span><small>{link.label}</small></li>
      )}</ul>}
      <div className="scene-takeaway"><span>WHY THIS WORKS</span><p>{scene.takeaway}</p></div>
    </div>
    <div className="animation-playback">
      {!still && <button type="button" className="text-button" onClick={play}>
        {status === 'playing' ? <Pause size={16} /> : status === 'done' ? <RotateCcw size={16} /> : <Play size={16} />}
        {status === 'playing' ? 'Pause step' : status === 'paused' ? 'Resume step' : status === 'done' ? 'Replay step' : 'Play step'}
      </button>}
    </div>
  </>;
}
