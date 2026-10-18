import {test} from 'node:test';
import assert from 'node:assert/strict';
import {translateInterface} from '../lib/interface-language.mjs';

test('changing interface languages preserves actions and restores English without a provider call',async()=>{
 const previous={fetch:globalThis.fetch,document:globalThis.document,NodeFilter:globalThis.NodeFilter};
 const text={textContent:'Send message',isConnected:true,parentElement:{closest:()=>null}};
 const element={dataset:{},closest:()=>null,matches:()=>true,cloneNode:()=>({textContent:text.textContent,querySelectorAll:()=>[]})};
 const root={querySelectorAll:()=>[element]};let calls=0;
 try{
  globalThis.NodeFilter={SHOW_TEXT:4};
  globalThis.document={createTreeWalker:()=>{let visited=false;return{currentNode:text,nextNode(){if(visited)return false;visited=true;return true;}};}};
  globalThis.fetch=async()=>Response.json({labels:[++calls===1?'Senden':'Envoyer']});
  const signal=new AbortController().signal;
  await translateInterface(root,'Deutsch',signal);assert.equal(text.textContent,'Senden');assert.equal(element.dataset.originalLabel,'Send message');
  await translateInterface(root,'Français',signal);assert.equal(text.textContent,'Envoyer');assert.equal(element.dataset.originalLabel,'Send message');
  await translateInterface(root,'English',signal);assert.equal(text.textContent,'Send message');assert.equal(calls,2);
 }finally{Object.assign(globalThis,previous);}
});
