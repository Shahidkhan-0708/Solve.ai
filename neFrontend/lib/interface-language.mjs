import {api} from './api.mjs';
const originalText=new WeakMap();

export async function translateInterface(root,language,signal){
 const english=language.startsWith('English');
 if(!english&&!['Deutsch','Français','Español','日本語'].includes(language))return;
 const nodes=[];
 for(const element of root.querySelectorAll('button,label,nav a,h1,h2')){
  if(element.closest('[data-backend-learning],[data-local-history],pre,code'))continue;
  if(element.matches('button,a')){
   const copy=element.cloneNode(true);copy.querySelectorAll('.material-symbols-outlined,svg,kbd').forEach(node=>node.remove());
   element.dataset.originalLabel ||= copy.textContent.replace(/\s+/g,' ').trim();
  }
  const walker=document.createTreeWalker(element,NodeFilter.SHOW_TEXT);
  while(walker.nextNode()){
   const node=walker.currentNode,text=node.textContent.trim();
   if(english){if(originalText.has(node))node.textContent=originalText.get(node);continue;}
   if(!originalText.has(node))originalText.set(node,node.textContent);
   if(text&&text.length<=300&&!node.parentElement.closest('.material-symbols-outlined,option')&&!nodes.some(item=>item.node===node))nodes.push({node,text});
  }
 }
 for(let index=0;index<nodes.length;index+=100){
  const batch=nodes.slice(index,index+100),result=await api('/interface/translate',{method:'POST',signal,body:{language,labels:batch.map(item=>item.text)}});
  if(signal.aborted)return;
  batch.forEach((item,position)=>{if(item.node.isConnected&&item.node.textContent.trim()===item.text)item.node.textContent=result.labels[position];});
 }
}
