'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect, useRef, useState, type ReactNode } from 'react';
import BrandLogo from '../brand-logo';
import {api,ensureOwner} from '../../lib/api.mjs';
import {loadState} from './state.mjs';

const destinations = [
  { href: '/chat', label: 'Learning Workspace', icon: 'chat_bubble_outline' },
  { href: '/plan', label: 'My Plan & Strategy', icon: 'route' },
  { href: '/target', label: 'Target Status', icon: 'flag' },
  { href: '/knowledge-graph', label: 'Knowledge Graph', icon: 'hub' },
];

export default function WorkspaceNavigation({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);
  const drawer = useRef<HTMLDialogElement>(null);
  const [recent,setRecent]=useState<{id:string;title:string;mode:string}[]>([]);
  useEffect(()=>{
    let active=true;
    const refresh=async()=>{try{await ensureOwner();const mode=pathname.startsWith('/study')?'study':['/','/chat'].includes(pathname)?'chat':new URLSearchParams(location.search).get('mode')||loadState().mode;const data=await api('/conversations?mode='+mode+'&limit=6');if(active)setRecent(data.items);}catch{if(active)setRecent([]);}};
    void refresh();window.addEventListener('solve:history-changed',refresh);
    return()=>{active=false;window.removeEventListener('solve:history-changed',refresh);};
  },[pathname]);
  if (pathname.startsWith('/screens') || pathname.startsWith('/welcome') || pathname === '/onboarding') return children;
  const active = pathname === '/' || pathname === '/conversation' ? '/chat'
    : pathname.startsWith('/study') ? '/study'
    : pathname === '/graph' ? '/knowledge-graph'
    : pathname === '/status' ? '/target' : pathname;
  function navigation() {
    return <>
      <Link href="/chat" className="workspace-brand" aria-label="Solve home" onClick={() => drawer.current?.close()}><BrandLogo /></Link>
      <button className="workspace-new" type="button" onClick={() => { window.dispatchEvent(new Event('solve:new-session')); drawer.current?.close(); }}><span aria-hidden="true">+</span>New session</button>
      <Link href="/history" className="workspace-search" onClick={() => drawer.current?.close()}><span className="material-symbols-outlined" aria-hidden="true">search</span>Search sessions</Link>
      <p className="workspace-section-label">Your workspace</p><nav className="workspace-links" aria-label="Workspace navigation">{destinations.map(item => <Link key={item.href} href={item.href} aria-current={active === item.href ? 'page' : undefined} onClick={() => drawer.current?.close()}><span className="material-symbols-outlined" aria-hidden="true">{item.icon}</span>{item.label}</Link>)}</nav>
      <section className="workspace-recent" aria-label="Recent conversations"><h2>Recent conversations</h2>{recent.length?recent.map(item=><a key={item.id} href={"/conversation?thread="+item.id+"&mode="+item.mode} title={item.title} onClick={()=>drawer.current?.close()}>{item.title}</a>):<p>Your saved conversations will appear here.</p>}</section>
    </>;
  }
  return <div className="workspace-layout" data-sidebar-collapsed={collapsed}>
    <aside className="workspace-sidebar" aria-label="Workspace sidebar"><button className="workspace-collapse" type="button" aria-label="Collapse sidebar" onClick={() => setCollapsed(true)}>‹</button>{navigation()}</aside>
    <button className="workspace-reopen" type="button" aria-label="Open sidebar" onClick={() => setCollapsed(false)}>›</button>
    <button className="workspace-mobile-menu" type="button" aria-label="Open navigation" onClick={() => drawer.current?.showModal()}><span className="material-symbols-outlined" aria-hidden="true">menu</span></button>
    <dialog ref={drawer} className="workspace-drawer" aria-label="Workspace navigation"><button className="workspace-drawer-close" type="button" aria-label="Close navigation" onClick={() => drawer.current?.close()}>×</button>{navigation()}</dialog>
    <div className="workspace-loading" role="status"><span className="workspace-loading-dot" aria-hidden="true"/><span>Opening your workspace…</span><noscript>Enable JavaScript to open your saved workspace.</noscript></div>
    {children}
  </div>;
}
