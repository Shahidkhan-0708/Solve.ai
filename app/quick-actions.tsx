'use client';

import { useId, useRef, useState } from 'react';
import Link from 'next/link';
import { FolderOpen, MoreHorizontal, Settings, X } from 'lucide-react';
import { Liquid } from 'liquid-gooey';

export default function QuickActions({ busy }: { busy: boolean }) {
  const [open, setOpen] = useState(false);
  const toggle = useRef<HTMLButtonElement>(null);
  const id = useId();
  return <div className="quick-actions" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}
    onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); toggle.current?.focus(); } }}>
    <Liquid blur={6} contrast={18} fill="#fff" shadow="0 2px 6px rgba(0,0,0,.08)">
      <div id={id} inert={!open} aria-hidden={!open}>
        <Liquid.Item x={open ? -64 : 0} y={open ? 64 : 0} transition="bouncy" className="quick-action-item">
          <Link href="/study/sessions" className={'round-btn sessions-action' + (open ? '' : ' action-hidden')} onClick={() => setOpen(false)}><FolderOpen size={18} />Saved sessions</Link>
        </Liquid.Item>
        <Liquid.Item x={0} y={open ? 64 : 0} transition="bouncy" delay={40} className="quick-action-item">
          <Link href="/study/settings" aria-label="Settings & privacy" title="Settings & privacy" className={'round-btn' + (open ? '' : ' action-hidden')} onClick={() => setOpen(false)}><Settings size={18} /></Link>
        </Liquid.Item>
      </div>
      <Liquid.Item className="quick-action-toggle">
        <button ref={toggle} className="round-btn" aria-label="Workspace actions" aria-expanded={open} aria-controls={id} disabled={busy} onClick={() => setOpen(!open)}>{open ? <X size={20} /> : <MoreHorizontal size={20} />}</button>
      </Liquid.Item>
    </Liquid>
  </div>;
}
