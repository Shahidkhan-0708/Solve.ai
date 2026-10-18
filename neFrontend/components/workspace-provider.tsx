'use client';
import {createContext,useContext,useEffect,useState,useCallback,type ReactNode} from 'react';
import {EMPTY_WORKSPACE,type Workspace} from '../lib/workspace';
const KEY='solve-local-workspace-v1';
const Context=createContext<{data:Workspace;update:(fn:(previous:Workspace)=>Workspace)=>void;ready:boolean;storageError:boolean}|null>(null);
function readWorkspace(raw:string|null):Workspace {
 try {
 const parsed=JSON.parse(raw||'null');if(!parsed||typeof parsed!=='object')return EMPTY_WORKSPACE;
 const goalIds=new Set<string>();const goals=Array.isArray(parsed.goals)?parsed.goals.filter((g:Workspace['goals'][number])=>g&&typeof g.id==='string'&&typeof g.title==='string'&&Number.isFinite(g.weeks)&&Array.isArray(g.tasks)&&g.tasks.every(t=>t&&typeof t.id==='string'&&typeof t.title==='string'&&typeof t.done==='boolean')).slice(0,100):[];
 goals.forEach((g:Workspace['goals'][number])=>goalIds.add(g.id));
 const concepts=Array.isArray(parsed.concepts)?parsed.concepts.filter((c:Workspace['concepts'][number])=>c&&typeof c.id==='string'&&typeof c.label==='string'&&['new','learning','mastered'].includes(c.status)).slice(0,100):[];
 const ids=new Set(concepts.map((c:Workspace['concepts'][number])=>c.id));
 const resources=Array.isArray(parsed.resources)?parsed.resources.filter((r:Workspace['resources'][number])=>r&&goalIds.has(r.goalId)&&typeof r.id==='string'&&typeof r.name==='string'&&typeof r.content==='string'&&['text','link','file'].includes(r.type)).slice(0,100):[];
 const cards=Array.isArray(parsed.cards)?parsed.cards.filter((c:Workspace['cards'][number])=>c&&goalIds.has(c.goalId)&&typeof c.id==='string'&&typeof c.question==='string'&&typeof c.answer==='string'&&Number.isFinite(c.due)&&Number.isFinite(c.reviews)).slice(0,300):[];
 const studySessions=Array.isArray(parsed.studySessions)?parsed.studySessions.filter((s:Workspace['studySessions'][number])=>s&&typeof s.id==='string'&&typeof s.title==='string'&&goalIds.has(s.goalId)&&Number.isFinite(s.updatedAt)&&Array.isArray(s.messages)&&s.messages.every(m=>m&&['user','assistant'].includes(m.role)&&typeof m.text==='string')).slice(0,100):[];
 return {...EMPTY_WORKSPACE,goals,concepts,resources,cards,studySessions,connections:Array.isArray(parsed.connections)?parsed.connections.filter((l:Workspace['connections'][number])=>l&&typeof l.id==='string'&&ids.has(l.from)&&ids.has(l.to)&&l.from!==l.to):[],activeGoalId:goalIds.has(parsed.activeGoalId)?parsed.activeGoalId:goals[0]?.id||'',studyActiveId:studySessions.some((s:Workspace['studySessions'][number])=>s.id===parsed.studyActiveId)?parsed.studyActiveId:'',prefs:{reducedMotion:parsed.prefs?.reducedMotion===true,rememberChats:parsed.prefs?.rememberChats===true,displayName:typeof parsed.prefs?.displayName==='string'?parsed.prefs.displayName.slice(0,80):'Student',email:typeof parsed.prefs?.email==='string'?parsed.prefs.email.slice(0,200):''}};
 }catch{return EMPTY_WORKSPACE;}
}
export function WorkspaceProvider({children}:{children:ReactNode}) {
 const[data,setData]=useState<Workspace>(EMPTY_WORKSPACE);const[ready,setReady]=useState(false);const[storageError,setStorageError]=useState(false);
 useEffect(()=>{try{setData(readWorkspace(localStorage.getItem(KEY)));}catch{setStorageError(true);}setReady(true);},[]);
 useEffect(()=>{if(!ready)return;try{localStorage.setItem(KEY,JSON.stringify(data));setStorageError(false);}catch{setStorageError(true);}},[data,ready]);
 useEffect(()=>{document.body.dataset.reducedMotion=String(data.prefs.reducedMotion);},[data.prefs.reducedMotion]);
 const update=useCallback((fn:(previous:Workspace)=>Workspace)=>setData(fn),[]);
 return <Context.Provider value={{data,update,ready,storageError}}>{children}{storageError&&<div role="status" className="storage-status">Device storage is unavailable or full. New changes remain in this open page.</div>}</Context.Provider>;
}
export function useWorkspace(){const value=useContext(Context);if(!value)throw new Error('WorkspaceProvider is required');return value;}
