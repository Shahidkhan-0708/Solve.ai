'use client';
import { useEffect, useRef, type ReactNode } from 'react';
export default function Modal({ title, close, children }: {title:string;close:()=>void;children:ReactNode}) {
 const ref=useRef<HTMLDivElement>(null);
 useEffect(()=>{
  const previous=document.activeElement as HTMLElement|null;
  const bodyOverflow=document.body.style.overflow; document.body.style.overflow='hidden';
  ref.current?.querySelector<HTMLElement>('input,button,select,a')?.focus();
  function key(event:KeyboardEvent) {
   if(event.key==='Escape'){event.preventDefault();close();}
   if(event.key!=='Tab')return;
   const nodes=[...(ref.current?.querySelectorAll<HTMLElement>('button:not(:disabled),input,select,a[href],[tabindex="0"]')||[])];
   const first=nodes[0],last=nodes[nodes.length-1];
   if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}
   else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}
  }
  document.addEventListener('keydown',key);
  return()=>{document.removeEventListener('keydown',key);document.body.style.overflow=bodyOverflow;previous?.focus();};
 },[close]);
 return <div className="modal-veil" onMouseDown={event=>{if(event.target===event.currentTarget)close();}}><div className="solve-modal" role="dialog" aria-modal="true" aria-labelledby="dialog-title" ref={ref}><div className="modal-heading"><h2 id="dialog-title">{title}</h2><button type="button" aria-label="Close dialog" onClick={close}><span className="material-symbols-outlined" aria-hidden="true">close</span></button></div>{children}</div></div>;
}
