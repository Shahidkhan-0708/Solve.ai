'use client';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useState, useRef, useEffect, useCallback, type ReactNode, type KeyboardEvent } from 'react';
import Modal from './modal';
import SafeMarkdown from './safe-markdown';
import { demoId } from '../lib/demo-id.mjs';
import { useWorkspace } from './workspace-provider';
import BrandLogo from './brand-logo';
import { relativeTime } from '../lib/learning.mjs';

type Message = {role:'user'|'assistant';text:string};
type Attachment = {id:string;name:string;detail:string};
type Session = {id:string;title:string;messages:Message[];updatedAt:number};
type InstallEvent = Event & {prompt:()=>Promise<void>;userChoice:Promise<{outcome:string}>};
const states=['first-use','returning','text-entered','attachment-open','attachment-added'] as const;
const sampleHistory=['Python learning plan','Understanding integration','COA exam preparation'];
const STORAGE='solve-chat-state-v2';
function Transcript({messages}:{messages:Message[]}) {
 return <div className="transcript" role="log" aria-label="Conversation" aria-live="polite">{messages.map((message,index)=>
<article key={index} className={'message '+message.role}>
<span className="message-role">{message.role==='user'?'You':'SOLVE · Demo response'}</span>
<SafeMarkdown text={message.text}/>
</article>)}</div>;
}
export default function SolveApp({children}:{children:ReactNode}) {
 const pathname=usePathname();const router=useRouter();
 const {data,update,ready:workspaceReady}=useWorkspace();
 const studyMode=['/study','/plan','/knowledge-graph','/target'].includes(pathname);
 const [clock,setClock]=useState(Date.now());
 const reducedMotion=data.prefs.reducedMotion;
 const setReducedMotion=(value:boolean)=>update(p=>({...p,prefs:{...p.prefs,reducedMotion:value}}));
 const [prompt,setPrompt]=useState('');const [search,setSearch]=useState('');
 const [demoState,setDemoState]=useState<string>('first-use');
 const [attachments,setAttachments]=useState<Attachment[]>([]);const [attachmentOpen,setAttachmentOpen]=useState(false);
 const [messages,setMessages]=useState<Message[]>([]);const [sessions,setSessions]=useState<Session[]>([]);const [activeId,setActiveId]=useState<string|null>(null);
 const [sidebarOpen,setSidebarOpen]=useState(false);const [collapsed,setCollapsed]=useState(false);
 const [dialog,setDialog]=useState<string|null>(null);const [link,setLink]=useState('');const [error,setError]=useState('');const [notice,setNotice]=useState('');
 const [online,setOnline]=useState(true);const [installEvent,setInstallEvent]=useState<InstallEvent|null>(null);const [offlineReady,setOfflineReady]=useState(false);const [pwaStatus,setPwaStatus]=useState('Offline setup pending');const [waiting,setWaiting]=useState<ServiceWorker|null>(null);
 const [hydrated,setHydrated]=useState(false);
 const promptInput=useRef<HTMLTextAreaElement>(null);const attachButton=useRef<HTMLButtonElement>(null);const fileInput=useRef<HTMLInputElement>(null);
 const headline=messages.length?'Learning Workspace':demoState==='returning'?'What would you like to work on today?':'What would you like to learn today?';
 const subtext=messages.length?'Demo conversation · AI and authentication are not connected.':demoState==='returning'?'Pick up from where you left off or start exploring a new domain.':'Tell me your goal, ask a question, or add something you’re studying.';
 useEffect(()=>{setSearch('');setAttachmentOpen(false);setDialog(null);},[pathname]);
 const closeDialog=useCallback(()=>{setDialog(null);setError('');setLink('');},[]);
 useEffect(()=>{
  if(!workspaceReady)return;
  try {
   const storage=data.prefs.rememberChats?localStorage:sessionStorage;
   const raw=JSON.parse(storage.getItem(STORAGE)||sessionStorage.getItem(STORAGE)||'null');
   const list=Array.isArray(raw?.sessions)?raw.sessions:JSON.parse(sessionStorage.getItem('solve-demo-sessions-v1')||'[]');
   const restored:Session[]=Array.isArray(list)?list.filter((item:Session)=>item&&typeof item.id==='string'&&typeof item.title==='string'&&Array.isArray(item.messages)&&item.messages.every(m=>m&&['user','assistant'].includes(m.role)&&typeof m.text==='string')).slice(0,50).map((item:Session)=>({...item,updatedAt:Number.isFinite(item.updatedAt)?item.updatedAt:Date.now()})):[];
   setSessions(restored);
   const active=restored.find(item=>item.id===raw?.activeId);if(active){setActiveId(active.id);setMessages(active.messages);}
  }catch {setNotice('Saved Chat history could not be restored.');}
  setHydrated(true);
 },[workspaceReady]);
 useEffect(()=>{if(!hydrated||!workspaceReady)return;try{const payload=JSON.stringify({sessions,activeId});sessionStorage.setItem(STORAGE,payload);if(data.prefs.rememberChats)localStorage.setItem(STORAGE,payload);else localStorage.removeItem(STORAGE);}catch {setNotice('Browser storage is unavailable. Chats remain in this open tab.');}},[sessions,activeId,hydrated,workspaceReady,data.prefs.rememberChats]);
 useEffect(()=>{const timer=setInterval(()=>setClock(Date.now()),60000);return()=>clearInterval(timer);},[]);
 useEffect(()=>{function clear(){setSessions([]);setMessages([]);setActiveId(null);try{sessionStorage.removeItem(STORAGE);sessionStorage.removeItem('solve-demo-sessions-v1');localStorage.removeItem(STORAGE);}catch{}}window.addEventListener('solve:clear-chat',clear);return()=>window.removeEventListener('solve:clear-chat',clear);},[]);
 useEffect(()=>{
  function update(){setOnline(navigator.onLine);}
  function install(event:Event){event.preventDefault();setInstallEvent(event as InstallEvent);}
  function installed(){setInstallEvent(null);setNotice('SOLVE installed successfully.');}
  update();window.addEventListener('online',update);window.addEventListener('offline',update);window.addEventListener('beforeinstallprompt',install);window.addEventListener('appinstalled',installed);
  let mounted=true;
  if(process.env.NODE_ENV!=='production')setPwaStatus('Offline support is available in the production build');
  else if(!window.isSecureContext || !('serviceWorker' in navigator))setPwaStatus('Offline setup requires HTTPS or localhost');
  if('serviceWorker'in navigator&&window.isSecureContext&&process.env.NODE_ENV==='production'){
   navigator.serviceWorker.register('/sw.js',{scope:'/',updateViaCache:'none'}).then(async registration=>{
    await navigator.serviceWorker.ready;if(!mounted)return;setOfflineReady(true);
    if(registration.waiting)setWaiting(registration.waiting);
    registration.addEventListener('updatefound',()=>{const worker=registration.installing;worker?.addEventListener('statechange',()=>{if(worker.state==='installed'&&navigator.serviceWorker.controller&&mounted)setWaiting(worker);});});
   }).catch(()=>{if(mounted)setNotice('Offline setup failed. Retry by reloading while online.');});
  }
  return()=>{mounted=false;window.removeEventListener('online',update);window.removeEventListener('offline',update);window.removeEventListener('beforeinstallprompt',install);window.removeEventListener('appinstalled',installed);};
 },[]);
 useEffect(()=>{
  if(!attachmentOpen)return;
  document.getElementById('attachment-popover')?.querySelector<HTMLButtonElement>('button')?.focus();
  function click(event:PointerEvent){if(!(event.target instanceof Node))return;const menu=document.getElementById('attachment-popover');if(!menu?.contains(event.target)&&!attachButton.current?.contains(event.target))setAttachmentOpen(false);}
  function key(event:globalThis.KeyboardEvent){if(event.key==='Escape'){setAttachmentOpen(false);attachButton.current?.focus();}}
  document.addEventListener('pointerdown',click);document.addEventListener('keydown',key);return()=>{document.removeEventListener('pointerdown',click);document.removeEventListener('keydown',key);};
 },[attachmentOpen]);
 useEffect(()=>{
  const aside=document.querySelector<HTMLElement>('.solve-sidebar');
  const mobile=window.matchMedia('(max-width:767px)').matches;
  if(aside){aside.dataset.collapsed=String(collapsed);aside.inert=mobile?!sidebarOpen:collapsed;}
  if(!sidebarOpen||!mobile)return;
  const previous=document.activeElement as HTMLElement|null;const overflow=document.body.style.overflow;document.body.style.overflow='hidden';aside?.querySelector<HTMLButtonElement>('button')?.focus();
  function key(event:globalThis.KeyboardEvent){
   if(event.key==='Escape'){setSidebarOpen(false);}
   if(event.key==='Tab'){
    const items=[...(aside?.querySelectorAll<HTMLElement>('a[href],button,input')||[])];const first=items[0],last=items[items.length-1];
    if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
   }
  }
  document.addEventListener('keydown',key);return()=>{document.removeEventListener('keydown',key);document.body.style.overflow=overflow;previous?.focus();};
 },[sidebarOpen,collapsed]);
 useEffect(()=>{function resize(){const aside=document.querySelector<HTMLElement>('.solve-sidebar');if(aside)aside.inert=window.matchMedia('(max-width:767px)').matches?!sidebarOpen:collapsed;}window.addEventListener('resize',resize);return()=>window.removeEventListener('resize',resize);},[sidebarOpen,collapsed]);
 const newSession=useCallback(()=>{if(studyMode){update(p=>({...p,studyActiveId:''}));router.push('/study');window.dispatchEvent(new Event('solve:new-study'));setSidebarOpen(false);return;}setMessages([]);setPrompt('');setAttachments([]);setActiveId(null);setDemoState('first-use');setAttachmentOpen(false);setSidebarOpen(false);router.push('/');requestAnimationFrame(()=>promptInput.current?.focus());},[router,studyMode,update]);
 useEffect(()=>{function key(event:globalThis.KeyboardEvent){if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='n'){event.preventDefault();newSession();}}window.addEventListener('keydown',key);return()=>window.removeEventListener('keydown',key);},[newSession]);
 function toggleSidebar(){if(window.matchMedia('(max-width:767px)').matches)setSidebarOpen(!sidebarOpen);else setCollapsed(!collapsed);}
 function fillPrompt(text:string){setPrompt(text);promptInput.current?.focus();}
 function applyState(state:string){
  if(!states.some(s=>s===state))return;
  setDemoState(state);setMessages([]);setActiveId(null);setAttachmentOpen(state==='attachment-open');setAttachments(state==='attachment-added'?[{id:'sample',name:'Unit 2 notes.pdf',detail:'Sample resource · Not analyzed'}]:[]);
  setPrompt(state==='text-entered'?'Help me prepare for my computer architecture exam in two weeks':state==='attachment-added'?'Analyze these lecture slides for key concepts':'');
 }
 function sendMessage(){
  const text=prompt.trim();if(!text)return;
  const resourceText=attachments.length?'\n\nAttached resources: '+attachments.map(a=>a.name).join(', '):'';
  const next:Message[]=[...messages,{role:'user',text:text+resourceText},{role:'assistant',text:'This is a demo response; no AI request was sent. What do you already know about this topic, and which part would you like to understand first?'+(attachments.length?' Your resources were attached locally; their content has not been analyzed.':'')}];
  const id=activeId||demoId();setMessages(next);setActiveId(id);setSessions(previous=>[{id,title:previous.find(s=>s.id===id)?.title||text.slice(0,65),messages:next,updatedAt:Date.now()},...previous.filter(s=>s.id!==id)].slice(0,50));setPrompt('');setAttachments([]);setAttachmentOpen(false);promptInput.current?.focus();
 }
 function handlePromptKeyDown(event:KeyboardEvent<HTMLTextAreaElement>){if(event.key==='Enter'&&!event.shiftKey&&!event.nativeEvent.isComposing){event.preventDefault();sendMessage();}}
 function handleMenuKeyDown(event:KeyboardEvent<HTMLDivElement>){
  const buttons=[...event.currentTarget.querySelectorAll<HTMLButtonElement>('button')];const index=buttons.indexOf(document.activeElement as HTMLButtonElement);
  if(['ArrowDown','ArrowUp','Home','End','Tab'].includes(event.key)){
   if(event.key==='Tab'){setAttachmentOpen(false);return;}
   event.preventDefault();buttons[event.key==='Home'?0:event.key==='End'?buttons.length-1:(index+(event.key==='ArrowDown'?1:-1)+buttons.length)%buttons.length]?.focus();
  }
 }
 function chooseFiles(files:FileList|null){
  if(!files)return;const accepted:Attachment[]=[];let invalid=false;
  for(const file of Array.from(files)){
   if(file.size>25*1024*1024||!(/\.(pdf|docx|jpg|jpeg|png)$/i.test(file.name))){invalid=true;continue;}
   accepted.push({id:demoId(),name:file.name,detail:`${(file.size/1024/1024).toFixed(1)} MB · Attached locally`});
  }
  setAttachments(previous=>[...previous,...accepted].slice(0,10));setAttachmentOpen(false);if(invalid)setNotice('Use PDF, DOCX, JPG or PNG files of 25 MB or less.');else if(attachments.length+accepted.length>10)setNotice('You can attach up to 10 resources per message. Extra files were not added.');if(fileInput.current)fileInput.current.value='';promptInput.current?.focus();
 }
 function renderAttachments(){return attachments.map(attachment=>
<div key={attachment.id} className="inline-flex items-center gap-2 pl-2.5 pr-2 py-1.5 bg-surface-container rounded-lg group/chip transition-all duration-150">
<span className="material-symbols-outlined text-[18px] text-primary" aria-hidden="true">description</span>
<div className="flex flex-col min-w-0">
<span className="font-label-sm text-label-sm text-on-surface font-medium leading-none break-all">{attachment.name}</span>
<span className="font-code text-[10px] text-secondary leading-tight">{attachment.detail}</span>
</div>
<button type="button" aria-label={'Remove attachment '+attachment.name} className="ml-2 w-5 h-5 flex items-center justify-center rounded-full text-secondary hover:text-primary hover:bg-surface-container-highest transition-colors" onClick={()=>setAttachments(previous=>previous.filter(a=>a.id!==attachment.id))}>
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">close</span>
</button>
</div>);}
 function renderHistory(){
  if(studyMode){const list=data.studySessions.filter(session=>session.title.toLowerCase().includes(search.toLowerCase()));return <div className="flex flex-col gap-0.5">{list.length?list.map(session=><button key={session.id} type="button" className="history-row" onClick={()=>{update(p=>({...p,activeGoalId:session.goalId,studyActiveId:session.id}));router.push('/study');setSidebarOpen(false);}}><span>{session.title}</span><small>{relativeTime(session.updatedAt,clock)}</small></button>):<p className="history-empty">{search?'No study sessions found.':'Your Study sessions will appear here.'}</p>}</div>;}
  const list=[...sessions,...(demoState==='returning'?sampleHistory.map((title,index)=>({id:'sample-'+index,title,updatedAt:NaN,messages:[{role:'assistant' as const,text:'This is an example conversation; no real saved transcript was supplied.'}]})):[])].filter(session=>session.title.toLowerCase().includes(search.toLowerCase()));
  if(!list.length)return <div className="px-space-sm py-4 text-center"><span className="font-body-sm text-body-sm text-on-surface-variant">{search?'No conversations found.':'Your conversations will appear here.'}</span></div>;
  return <div className="flex flex-col gap-0.5">{list.map(session=><button type="button" key={session.id} onClick={()=>{setMessages(session.messages);setActiveId(session.id.startsWith('sample-')?null:session.id);setSidebarOpen(false);router.push('/');}} className="history-row"><span>{session.title}</span><small>{relativeTime(session.updatedAt,clock)}</small></button>)}</div>;
 }
 function addLink(event:React.FormEvent){event.preventDefault();if(attachments.length>=10){setError('Remove an attachment first. The limit is 10 resources per message.');return;}try {const url=new URL(link);if(!['http:','https:'].includes(url.protocol))throw Error();setAttachments(previous=>[...previous,{id:demoId(),name:url.hostname,detail:url.href}].slice(0,10));closeDialog();promptInput.current?.focus();}catch {setError('Enter a valid HTTP or HTTPS URL.');}}
 async function install(){if(installEvent){await installEvent.prompt();const choice=await installEvent.userChoice;setInstallEvent(null);setNotice(choice.outcome==='accepted'?'Installation accepted.':'Installation dismissed.');}else setNotice('Use your browser’s Install app option. On iPhone or iPad, choose Share → Add to Home Screen.');}
 function updateApp(){if(!waiting)return;navigator.serviceWorker.addEventListener('controllerchange',()=>location.reload(),{once:true});waiting.postMessage({type:'ACTIVATE_UPDATE'});}
 const dialogTitles:Record<string,string>={actions:'Workspace actions',link:'Add a link',curriculum:'Import past curriculum',microphone:'Voice input',settings:'Settings & Preferences'};
 function renderDialog(){if(!dialog)return null;return <Modal title={dialogTitles[dialog]||dialog} close={closeDialog}>
  {dialog==='link'?<form onSubmit={addLink} noValidate>
<p>Add a study resource. Links remain local and are not fetched or analyzed in this demo.</p>
<label htmlFor="resource-link">Resource URL</label>
<input id="resource-link" type="url" value={link} onChange={event=>{setLink(event.target.value);setError('');}} placeholder="https://example.com/notes" required aria-invalid={Boolean(error)} aria-describedby={error?'link-error':undefined}/>{error&&<p id="link-error" role="alert" className="error-text">{error}</p>}<button className="modal-action primary" type="submit">Add link</button>
</form>:
   dialog==='actions'?<>
<p>Demo workspace · No backend is connected.</p>
<p role="status">{online?'Online':'Offline'} · {offlineReady?'Offline app ready':pwaStatus}</p>
<div className="modal-stack">
<button type="button" className="modal-action primary" onClick={install}>Install SOLVE</button>
<button type="button" className="modal-action" onClick={()=>setDialog('settings')}>Preferences</button>{waiting&&<button type="button" className="modal-action" onClick={updateApp}>Update and reload</button>}</div>
</>:
   dialog==='settings'?<>
<p>Preferences are saved on this device. Visit Settings for your local profile and history options.</p>
<label className="flex items-center gap-2">
<input type="checkbox" checked={reducedMotion} onChange={event=>setReducedMotion(event.target.checked)}/> Reduce motion</label>
<p>Chat history is {data.prefs.rememberChats?'remembered on this device':'kept in this browser tab'}. Study history is separate. File bytes are never uploaded or cached.</p><Link href="/settings" className="modal-action inline-block" onClick={closeDialog}>Open Settings</Link>
<button type="button" className="modal-action" onClick={()=>setDialog('clear-history')}>Clear local chat history</button>
</>:
   dialog==='clear-history'?<>
<p>Clear this tab’s demo conversations?</p>
<button type="button" className="modal-action primary" onClick={()=>{setSessions([]);setMessages([]);setActiveId(null);closeDialog();setNotice('Local chat history cleared.');}}>Clear history</button>
</>:
   dialog==='microphone'?<p>The export supplies a microphone control but no speech integration. Voice recording is unavailable in this demo. You can type your question in the prompt box.</p>:
   dialog==='curriculum'?<>
<p>Import a pasted curriculum in Study → Resources. Each non-empty line becomes an editable plan module.</p><Link href="/study" className="modal-action primary inline-block" onClick={closeDialog}>Open Study resources</Link>
<button className="modal-action primary" type="button" onClick={()=>{closeDialog();fileInput.current?.click();}}>Choose files</button>
</>:
   <>
<p>{dialog==='Socratic Dialogue'?'Guided step-by-step reasoning instead of passive answer regurgitation.':dialog==='Concept Map Linking'?'Connect learning modules and concepts in your local Knowledge Graph.':'Build recall cards and schedule your next review in Study.'}</p>
<p>Local learning features are available in Study and Knowledge Graph. AI tutoring is still a demo.</p>
<button type="button" className="modal-action primary" onClick={()=>{closeDialog();fillPrompt(dialog==='Socratic Dialogue'?'Guide me step-by-step through ':dialog==='Concept Map Linking'?'Help me connect concepts about ':'Help me practice active recall on ');}}>Explore in chat</button><Link href={dialog==='Concept Map Linking'?'/knowledge-graph':'/study'} className="modal-action inline-block" onClick={closeDialog}>Open feature</Link>
</>}
 </Modal>;}
 return <>
 <a className="skip-link" href="#main-content">Skip to workspace</a>
 <input ref={fileInput} type="file" accept=".pdf,.docx,.jpg,.jpeg,.png" multiple hidden onChange={event=>chooseFiles(event.target.files)} aria-label="Choose study resources"/>
 {sidebarOpen&&<button className="drawer-veil" aria-label="Close navigation" type="button" onClick={()=>setSidebarOpen(false)} tabIndex={-1}/>}
 {collapsed&&<button type="button" className="reopen-sidebar" aria-label="Expand sidebar" onClick={()=>setCollapsed(false)}>
<span className="material-symbols-outlined" aria-hidden="true">dock_to_right</span>
</button>}
 {(!online||notice||waiting)&&<div role="status" className="status-toast">{notice||(!online?'Offline · Demo chat is available.':'A new version of SOLVE is available.')} <button type="button" aria-label="Dismiss notification" onClick={()=>setNotice('')} hidden={!notice}>×</button>
</div>}
<aside className="fixed left-0 top-0 h-full w-64 bg-surface-container-low border-r border-outline-variant z-50 flex flex-col justify-between select-none solve-sidebar" data-open={sidebarOpen} aria-label="Primary navigation">
<div className="flex flex-col flex-1 min-h-0">
<div className="h-14 px-space-md flex items-center justify-between border-b border-outline-variant">
<div className="flex items-center gap-space-sm">
<BrandLogo className="sidebar-brand"/>
</div>
<button aria-label="Collapse sidebar" className="text-on-surface-variant hover:text-on-surface flex items-center justify-center p-space-xs rounded transition-colors" type="button" onClick={toggleSidebar} aria-expanded={!collapsed}>
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">dock_to_right</span>
</button>
</div>
<div className="p-space-sm flex flex-col gap-space-sm">
<button className="w-full flex items-center justify-between px-space-md py-space-sm bg-surface-container-lowest border border-outline-variant rounded-lg font-label-md text-label-md text-on-surface hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={newSession}>
<span className="flex items-center gap-space-sm">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">edit_square</span>New session</span>
<span className="font-code text-code text-on-surface-variant">⌘N</span>
</button>
<div className="relative">
<span className="material-symbols-outlined absolute left-2.5 top-1/2 -translate-y-1/2 text-[18px] text-on-surface-variant pointer-events-none" aria-hidden="true">search</span>
<input className="w-full bg-surface-container border border-outline-variant rounded-lg pl-8 pr-space-sm py-1.5 font-body-sm text-body-sm text-on-surface placeholder:text-on-surface-variant focus:outline-none focus:border-primary transition-colors" placeholder={studyMode?"Search Study sessions…":"Search chats..."} type="text" aria-label={studyMode?"Search Study sessions":"Search chats"} value={search} onChange={(event) => setSearch(event.target.value)} />
</div>
</div>
<div className="px-space-sm pt-space-xs">
<nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-label-md">
<Link data-path="learning-workspace" href="/" onClick={() => setSidebarOpen(false)} aria-current={pathname === "/" ? "page" : undefined} className={pathname === "/" ? "flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg transition-colors bg-primary-container text-on-primary-container font-label-md" : "flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg transition-colors font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface"}>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">chat</span>Learning Workspace</Link>
<Link data-path="study-plan" href="/plan" onClick={() => setSidebarOpen(false)} aria-current={pathname === "/plan" ? "page" : undefined} className={"flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" + (pathname === "/plan" ? " bg-primary-container text-on-primary-container" : "")}>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">route</span>My Plan / Strategy</Link>
<Link data-path="knowledge-graph" href="/knowledge-graph" onClick={() => setSidebarOpen(false)} aria-current={pathname === "/knowledge-graph" ? "page" : undefined} className={"flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" + (pathname === "/knowledge-graph" ? " bg-primary-container text-on-primary-container" : "")}>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">hub</span>Knowledge Graph</Link>
<Link data-path="target-status" href="/target" onClick={() => setSidebarOpen(false)} aria-current={pathname === "/target" ? "page" : undefined} className={"flex items-center gap-space-sm px-space-sm py-1.5 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" + (pathname === "/target" ? " bg-primary-container text-on-primary-container" : "")}>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">flag</span>Target Status</Link>
</nav>
</div>
<div className="flex-1 overflow-y-auto px-space-sm pt-space-md min-h-0">
<div className="flex items-center justify-between px-space-sm pb-space-xs text-on-surface-variant font-label-sm text-label-sm uppercase tracking-wider">
<span>{studyMode?"Study sessions":"Recent Conversations"}</span>
</div>{renderHistory()}</div>
</div>
<div className="p-space-sm border-t border-outline-variant">
<nav className="flex flex-col gap-0.5" data-active-classes="bg-primary-container text-on-primary-container font-label-md">
<Link data-path="settings" href="/settings" onClick={() => setSidebarOpen(false)} aria-current={pathname === "/settings" ? "page" : undefined} className={"flex items-center justify-between px-space-sm py-2 rounded-lg font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface transition-colors" + (pathname === "/settings" ? " bg-primary-container text-on-primary-container" : "")}>
<div className="flex items-center gap-space-sm min-w-0">
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">settings</span>
<span className="truncate">Settings & Preferences</span>
</div>
</Link>
</nav>
</div>
</aside>
<div className="pl-64 solve-layout" data-collapsed={collapsed}>
<header className="fixed top-0 left-64 right-0 h-14 bg-surface-container-lowest/90 backdrop-blur-md border-b border-outline-variant z-40 flex items-center justify-between px-space-lg solve-header">
<div className="w-32 flex items-center">
<button type="button" className="mobile-menu" aria-label="Open navigation" aria-expanded={sidebarOpen} onClick={() => setSidebarOpen(true)}>
<span className="material-symbols-outlined" aria-hidden="true">menu</span>
</button>
<BrandLogo className="header-brand"/>
</div>
<div className="flex items-center bg-surface-container p-0.5 rounded-lg border border-outline-variant">
<nav className="flex items-center" data-active-classes="bg-surface-container-lowest text-on-surface shadow-sm">
<Link data-path="learning-workspace" href="/" onClick={() => setSidebarOpen(false)} aria-current={pathname === "/" ? "page" : undefined} className={pathname === "/" ? "px-space-md py-1 rounded-md font-label-md transition-colors bg-surface-container-lowest text-on-surface shadow-sm" : "px-space-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors"}>Chat</Link>
<Link data-path="study-workspace" href="/study" onClick={() => setSidebarOpen(false)} aria-current={studyMode ? "page" : undefined} className={"px-space-md py-1 rounded-md font-label-md text-label-md text-on-surface-variant hover:text-on-surface transition-colors" + (studyMode ? " bg-surface-container-lowest text-on-surface shadow-sm" : "")}>Study</Link>
</nav>
</div>
<div className="w-32 flex items-center justify-end gap-space-sm">
<button aria-label="Workspace actions" className="p-1.5 rounded-lg text-on-surface-variant hover:bg-surface-container hover:text-on-surface transition-colors" type="button" onClick={() => setDialog("actions")}>
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">tune</span>
</button>
<Link href="/settings" className="profile-button" aria-label="Local profile" title={data.prefs.displayName}><span>{data.prefs.displayName.slice(0,1).toUpperCase()}</span></Link>
</div>
</header>
<main className="relative pt-14 w-full bg-surface-container-lowest min-h-screen" id="main-content">{pathname === "/" ? (<div className="flex flex-col w-full relative min-h-[calc(100vh-3.5rem)] justify-between items-center px-4 sm:px-6">

<div className="absolute top-12 left-1/2 -translate-x-1/2 w-[720px] h-[360px] bg-gradient-to-b from-surface-container-high/40 via-surface-container-low/20 to-transparent blur-3xl pointer-events-none -z-10 rounded-full">
</div>

<div className="w-full max-w-[720px] flex flex-col items-center pt-16 sm:pt-20 md:pt-24 pb-8 transition-all duration-300 workspace-center">

<div className="flex items-center gap-2 mb-6">
<span className="inline-block w-1.5 h-1.5 rounded-full bg-primary">
</span>
<span className="font-code text-code text-on-surface-variant uppercase tracking-widest text-[11px]">SOLVE AI MENTOR · COGNITIVE WORKSPACE</span>
</div>

<h1 className="font-headline-lg text-headline-lg text-primary text-center tracking-tight transition-all duration-200 select-none" id="main-headline">{headline}</h1>

<p className="font-body-md text-body-md text-secondary text-center mt-3 mb-10 max-w-[500px]" id="main-subtext">{subtext}</p>{messages.length > 0 && <Transcript messages={messages} />}

<div className="w-full relative group composer-shell">

<div className="absolute left-4 bottom-[64px] z-30 w-64 bg-surface-container-lowest rounded-xl shadow-xl p-1.5 flex-col gap-1 transition-all duration-150 animate-in fade-in slide-in-from-bottom-2" id="attachment-popover" hidden={!attachmentOpen} role="menu" aria-label="Resources and inputs" onKeyDown={handleMenuKeyDown}>
<div className="px-3 py-1.5 font-label-sm text-label-sm uppercase tracking-wider text-on-surface-variant font-medium">Resources & Inputs</div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container text-body-sm font-body-sm transition-colors" type="button" onClick={() => fileInput.current?.click()} role="menuitem" tabIndex={attachmentOpen ? 0 : -1}>
<span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">upload_file</span>
<div className="flex flex-col">
<span className="font-medium">Upload files or photos</span>
<span className="font-code text-[10px] text-secondary">PDF, DOCX, JPG, PNG up to 25MB</span>
</div>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-lg text-left text-on-surface hover:bg-surface-container text-body-sm font-body-sm transition-colors" type="button" onClick={() => { setAttachmentOpen(false); setDialog("link"); }} role="menuitem" tabIndex={attachmentOpen ? 0 : -1}>
<span className="material-symbols-outlined text-[18px] text-secondary" aria-hidden="true">link</span>
<div className="flex flex-col">
<span className="font-medium">Add a link</span>
<span className="font-code text-[10px] text-secondary">Notion, ArXiv paper, web URL</span>
</div>
</button>
<div className="h-px bg-surface-container-high my-1">
</div>
<button className="w-full flex items-center gap-3 px-3 py-1.5 rounded-lg text-left text-on-surface-variant hover:text-on-surface hover:bg-surface-container text-body-sm font-body-sm transition-colors" type="button" onClick={() => { setAttachmentOpen(false); setDialog("curriculum"); }} role="menuitem" tabIndex={attachmentOpen ? 0 : -1}>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">history_edu</span>
<span>Import past curriculum</span>
</button>
</div>

<div className="w-full bg-surface-container-lowest rounded-[20px] shadow-sm hover:shadow-md focus-within:shadow-md transition-all duration-200 flex flex-col p-4 bg-gradient-to-b from-surface-container-lowest to-surface-container-lowest">

<div className="flex flex-wrap gap-2 pb-3 pt-1" id="attachments-tray" hidden={attachments.length === 0}>{renderAttachments()}</div>

<textarea className="w-full bg-transparent resize-none font-body-md text-body-md text-on-surface placeholder:text-secondary focus:outline-none transition-colors leading-relaxed" id="prompt-input" placeholder="Describe your goal or ask a question…" rows={3} aria-label="Describe your goal or ask a question" ref={promptInput} value={prompt} onChange={(event) => setPrompt(event.target.value)} onKeyDown={handlePromptKeyDown} maxLength={10000}>
</textarea>

<div className="flex items-center justify-between pt-3 mt-1">

<div className="flex items-center gap-1">

<button aria-label="Add resources" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-container active:scale-95 transition-all relative" id="attach-button" title="Add resources" type="button" onClick={() => setAttachmentOpen(!attachmentOpen)} aria-expanded={attachmentOpen} aria-haspopup="menu" aria-controls="attachment-popover" ref={attachButton}>
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">add</span>
</button>

<button aria-label="Use microphone" className="w-9 h-9 rounded-full flex items-center justify-center text-secondary hover:text-primary hover:bg-surface-container active:scale-95 transition-all" id="mic-button" title="Use microphone" type="button" onClick={() => setDialog("microphone")}>
<span className="material-symbols-outlined text-[20px]" aria-hidden="true">mic</span>
</button>
<div className="h-4 w-px bg-surface-container-highest mx-1">
</div>
<span className="font-code text-[11px] text-secondary hidden sm:inline-block">Markdown supported</span>
</div>

<div className="flex items-center gap-2">
<span className="font-code text-[11px] text-secondary hidden sm:inline-block mr-1">Press ↵</span>
<button aria-label="Send message" id="send-button" title="Send message" type="button" disabled={!prompt.trim()} onClick={sendMessage} className={"w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 " + (prompt.trim() ? "cursor-pointer bg-primary text-on-primary shadow-sm hover:bg-primary/90 active:scale-95" : "cursor-not-allowed bg-surface-container text-secondary")}>
<span className="material-symbols-outlined text-[18px]" aria-hidden="true">arrow_upward</span>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-wrap items-center justify-center gap-2 mt-5">
<span className="font-label-sm text-label-sm text-secondary mr-1">Suggested prompts:</span>
<button className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" type="button" onClick={() => fillPrompt("Help me prepare for an exam in ")}>
<span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary" aria-hidden="true">school</span>
        Prepare for an exam
      </button>
<button className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" type="button" onClick={() => fillPrompt("Explain the core principles of ")}>
<span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary" aria-hidden="true">lightbulb</span>
        Understand a topic
      </button>
<button className="group inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-surface-container-low hover:bg-surface-container text-secondary hover:text-on-surface font-label-sm text-label-sm transition-all" type="button" onClick={() => fillPrompt("Design a structured curriculum to learn ")}>
<span className="material-symbols-outlined text-[14px] text-secondary group-hover:text-primary" aria-hidden="true">bolt</span>
        Learn a new skill
      </button>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 w-full mt-14">
<div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group" role="button" tabIndex={0} onClick={() => setDialog("Socratic Dialogue")} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setDialog("Socratic Dialogue"); } }}>
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">model_training</span>
<span className="font-code text-[11px] text-secondary">LOCAL DEMO</span>
</div>
<div>
<h2 className="font-label-md text-label-md text-on-surface font-semibold group-hover:underline">Socratic Dialogue</h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">Guided step-by-step reasoning instead of passive answer regurgitation.</p>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group" role="button" tabIndex={0} onClick={() => setDialog("Concept Map Linking")} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setDialog("Concept Map Linking"); } }}>
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">account_tree</span>
<span className="font-code text-[11px] text-secondary">LOCAL GRAPH</span>
</div>
<div>
<h2 className="font-label-md text-label-md text-on-surface font-semibold group-hover:underline">Concept Map Linking</h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">Connect learning modules and concepts in your local Knowledge Graph.</p>
</div>
</div>
<div className="bg-surface-container-low rounded-xl p-4 flex flex-col justify-between hover:bg-surface-container transition-colors cursor-pointer group" role="button" tabIndex={0} onClick={() => setDialog("Spaced Synthesis")} onKeyDown={(event) => { if (event.key === "Enter" || event.key === " ") { event.preventDefault(); setDialog("Spaced Synthesis"); } }}>
<div className="flex items-center justify-between mb-3">
<span className="material-symbols-outlined text-[20px] text-primary" aria-hidden="true">verified</span>
<span className="font-code text-[11px] text-secondary">RECALL</span>
</div>
<div>
<h2 className="font-label-md text-label-md text-on-surface font-semibold group-hover:underline">Spaced Synthesis</h2>
<p className="font-body-sm text-body-sm text-secondary mt-1">Build recall cards and schedule your next review in Study.</p>
</div>
</div>
</div>
</div>

<div className="w-full pb-6 pt-4 flex flex-col sm:flex-row items-center justify-between gap-4 mt-auto workspace-footer">

<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-25">
</span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-primary">
</span>
</span>
<span className="font-code text-code text-secondary text-[11px]">LOCAL WORKSPACE · READY</span>
</div>

<div className="flex items-center bg-surface-container-high/70 backdrop-blur-md p-1 rounded-full shadow-sm demo-switcher">
<span className="font-code text-[11px] text-secondary px-3 select-none flex items-center gap-1.5">
<span className="material-symbols-outlined text-[14px]" aria-hidden="true">tune</span>
        Demo States:
      </span>
<div className="flex items-center gap-0.5 overflow-x-auto max-w-full">
<button id="btn-state-first-use" type="button" onClick={() => applyState("first-use")} aria-pressed={demoState === "first-use"} className={"px-2.5 py-1 rounded-full font-label-sm text-[12px] transition-all whitespace-nowrap " + (demoState === "first-use" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface")}>
          First-use
        </button>
<button id="btn-state-returning" type="button" onClick={() => applyState("returning")} aria-pressed={demoState === "returning"} className={"px-2.5 py-1 rounded-full font-label-sm text-[12px] transition-all whitespace-nowrap " + (demoState === "returning" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface")}>
          Returning User
        </button>
<button id="btn-state-text-entered" type="button" onClick={() => applyState("text-entered")} aria-pressed={demoState === "text-entered"} className={"px-2.5 py-1 rounded-full font-label-sm text-[12px] transition-all whitespace-nowrap " + (demoState === "text-entered" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface")}>
          Text Entered
        </button>
<button id="btn-state-attachment-open" type="button" onClick={() => applyState("attachment-open")} aria-pressed={demoState === "attachment-open"} className={"px-2.5 py-1 rounded-full font-label-sm text-[12px] transition-all whitespace-nowrap " + (demoState === "attachment-open" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface")}>
          Attachment Menu
        </button>
<button id="btn-state-attachment-added" type="button" onClick={() => applyState("attachment-added")} aria-pressed={demoState === "attachment-added"} className={"px-2.5 py-1 rounded-full font-label-sm text-[12px] transition-all whitespace-nowrap " + (demoState === "attachment-added" ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface")}>
          Attachment Added
        </button>
</div>
</div>
</div>
</div>) : children}</main>
</div>
{renderDialog()}
</>;
}
