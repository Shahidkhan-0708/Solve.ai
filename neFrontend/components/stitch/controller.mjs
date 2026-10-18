import {formatMessage} from '../../lib/format-message.mjs';
import {backendWorkspace} from './backend.mjs';
import {renderGraph} from './backend-panels.mjs';
import {renderConnectedPanels, renderAnimation} from './connected-panels.mjs';
import {aliases} from './catalog.mjs';
import {loadState,saveState,profile,saveProfile,navigate,notice,dialog,classifyPrompt,safeUrl,evidenceStats,isReducedMotionChoice} from './state.mjs';
const noActions=new Proxy({}, {get:()=>()=>undefined});
export function spaceGraph(viewport){
 const nodes=[...viewport.querySelectorAll(':scope > div.absolute')];
 const columns=new Map();for(const node of nodes){const left=node.offsetLeft;if(!columns.has(left))columns.set(left,[]);columns.get(left).push(node);}
 for(const column of columns.values()){let bottom=0;for(const node of column.sort((a,b)=>a.offsetTop-b.offsetTop)){const top=Math.max(node.offsetTop,bottom+24);node.style.top=top+'px';bottom=top+node.offsetHeight;}}
 const targets=nodes.filter(node=>node.offsetLeft>Math.min(...nodes.map(node=>node.offsetLeft))).sort((a,b)=>a.offsetTop-b.offsetTop);
 [...viewport.querySelectorAll(':scope > svg > path')].forEach((path,index)=>{const node=targets[index];if(node)path.setAttribute('d',path.getAttribute('d').replace(/L\s+[\d.]+\s+[\d.]+$/,`L ${node.offsetLeft} ${node.offsetTop+node.offsetHeight/2}`));});
}
// Exported React trees are static. All behavior is attached within their own root,
// matching the original controller contract without global ID collisions.
export function initialize(root,screenId){
 if(!root)return {actions:noActions,cleanup(){}};
 let detach=()=>{};const media=matchMedia('(max-width: 767px)');
 const variant=root.closest('[data-variant]')?.dataset.variant;
 function activate(){detach();detach=()=>{};const active=variant==='reference'||!variant||(variant==='mobile'===media.matches);if(active)detach=mount(root,screenId);}
 activate();media.addEventListener('change',activate);
 return {actions:noActions,cleanup(){detach();media.removeEventListener('change',activate);}};
}

export function simplifyChrome(root){
 const banner=root.firstElementChild;if(banner&&/^CURRENT\b/i.test(banner.textContent.trim()))banner.dataset.uiChrome='hidden';
 const all=selector=>[...root.querySelectorAll(selector)];
 const hide=element=>{if(element)element.dataset.uiChrome='hidden';};
 const text=element=>{const copy=element.cloneNode(true);copy.querySelectorAll('.material-symbols-outlined,svg').forEach(icon=>icon.remove());return (copy.textContent||'').replace(/\s+/g,' ').trim();};
 for(const label of all('span,p,h2,h3,h4')){
  if(label.querySelector('button,input,textarea,select'))continue;
  if(/^(?:(?:(?:Workspace|Interactive) )?State Simulator|Interactive View States:?|Workflow State|Demo States:?|Preview States?:?|States?:?)$/i.test(text(label))){
   let toolbar=label.parentElement;
   while(toolbar&&toolbar!==root&&!toolbar.querySelector('button'))toolbar=toolbar.parentElement;
   if(toolbar&&toolbar!==root&&!toolbar.matches('main,aside,header')&&!toolbar.querySelector('input,textarea,select'))hide(toolbar);
  }
  if(/^CURRENT\b/i.test(text(label))&&/Authoritative (?:Specification|View)/i.test(label.parentElement.textContent))hide(label.parentElement);
 }
 const statusCopy=/SOLVE v\d+(?:\.\d+)*|Active Session\s*\/\/\s*Fast Ingestion Mode|Instant Synthesizer|Tokens:\s*[0-9][0-9.,kKmM\s/]*$/gi;
 for(const label of all('span,p')){
  const value=text(label);statusCopy.lastIndex=0;
  if(!value||value.replace(statusCopy,'').trim())continue;
  let strip=label;
  while(strip.parentElement&&strip.parentElement!==root&&!strip.parentElement.matches('main,header,aside')&&!strip.parentElement.querySelector('button,a,input,textarea,select')){
   statusCopy.lastIndex=0;
   if(text(strip.parentElement).replace(statusCopy,'').trim())break;
   strip=strip.parentElement;
  }
  hide(strip);
 }
 for(const header of all('header')){
  for(const label of header.querySelectorAll('a,span,p'))if(/^AI Mentorship$/i.test(text(label)))hide(label);
  for(const avatar of header.querySelectorAll('img[alt="Profile"],img[data-missing-asset]'))hide(avatar);
  for(const button of header.querySelectorAll('button')){
   const icon=button.querySelector('.material-symbols-outlined')?.textContent.trim();
   if(!['search','notifications','notifications_none'].includes(icon))continue;
   button.dataset.headerAction=icon==='search'?'search':'notifications';
   button.setAttribute('aria-label',icon==='search'?'Search sessions':'Notifications');
   button.title=button.getAttribute('aria-label');
   if([...button.parentElement.children].every(child=>child.matches('button,img,[data-ui-chrome="hidden"]')))button.parentElement.setAttribute('data-header-actions','true');
  }
 }
 const home=root.querySelector('#view-chat-home');if(home)home.dataset.compactHome='true';
 for(const link of all('aside a[data-path="learning-workspace"],aside a[data-path="chat-session"]'))if(!link.closest('nav')&&!/^(?:New chat|Learning Workspace|Chat|Instant|Active Session)$/i.test(link.dataset.originalLabel||text(link)))hide(link);
 for(const link of all('aside a'))if(/^session-/.test(link.dataset.path||'')||(!link.closest('nav')&&!link.dataset.path&&link.querySelector('.material-symbols-outlined')?.textContent.trim()==='history'))hide(link);
 for(const item of all('aside span,aside p'))if(/^Cognitive Tier \d+$/.test(text(item)))hide(item);
 for(const label of all('aside span,aside p,aside h3'))if(/^(?:Pinned Focus|Recent Threads|Study History|Recent Chats|Recent Sessions|Recent Conversations|Recent History)$/i.test(text(label))){const group=label.parentElement?.parentElement;if(group&&!group.matches('aside')&&!group.querySelector('nav,input,textarea'))hide(group);}
 if(location.pathname==='/conversation'&&!root.classList.contains('learning-workspace')){const main=root.querySelector('main'),input=main?.querySelector('textarea');let composer=input?.parentElement;while(composer&&composer!==main&&!composer.querySelector('button'))composer=composer.parentElement;if(composer)for(let branch=composer;branch.parentElement&&branch!==main;branch=branch.parentElement)for(const sibling of branch.parentElement.children)if(sibling!==branch&&!sibling.matches('script,style,[data-runtime-log]'))hide(sibling);}
 const walker=document.createTreeWalker(root,NodeFilter.SHOW_TEXT);
 for(let node;node=walker.nextNode();){
  if(node.parentElement.closest('script,style,pre,code,.material-symbols-outlined'))continue;
  const value=node.textContent.trim();
  if(/^(Chat|Study)( Mode)?(?: Live)?$/.test(value)){
   const control=node.parentElement.closest('button,a');if(control&&!control.dataset.originalLabel)control.dataset.originalLabel=text(control);
   node.textContent=node.textContent.replace(value,value.startsWith('Chat')?'Instant':'Long term');
  }
  if(/^\+\s*New chat$/i.test(value)&&node.parentElement.closest('button')?.querySelector('.material-symbols-outlined,svg'))node.textContent=node.textContent.replace(/\+\s*/, '');
 }
}

function mount(root,screenId){
 const main=root.querySelector('main');if(main){main.id=main.id||'main-content';main.tabIndex=-1;}
 const reference=root.closest('[data-variant]')?.dataset.variant==='reference';
 if(!reference){root.dataset.livePage=location.pathname;simplifyChrome(root);}
 if(!reference&&location.pathname==='/conversation'){const input=root.querySelector('textarea');for(let el=input?.parentElement;el&&el!==main;el=el.parentElement)if(getComputedStyle(el).position==='fixed'){el.dataset.liveComposer='true';break;}}
 if(!reference&&root.closest('.workspace-layout')){
  for(const sidebar of root.querySelectorAll('aside'))if(!sidebar.closest('main')&&sidebar.querySelector('a[data-path]'))sidebar.dataset.workspaceNavigation='true';
  let body=main;while(body&&body.parentElement!==root)body=body.parentElement;
  if(body){body.dataset.workspaceBody='true';if(parseFloat(getComputedStyle(body).paddingLeft)>=160)body.style.paddingLeft='0';}
  const header=root.querySelector('header');if(header&&!main?.contains(header))header.dataset.workspaceHeader='true';
  for(const control of root.querySelectorAll('#drawer-open-btn,#drawer-panel,#drawer-backdrop,#nav-drawer,#nav-backdrop,[aria-label="Open Menu"],[aria-label="Open menu"]'))control.dataset.workspaceNavigation='true';
  for(const nav of root.querySelectorAll('nav,footer'))if(getComputedStyle(nav).position==='fixed'&&parseFloat(getComputedStyle(nav).bottom)===0&&nav.querySelector('a[data-path]'))nav.dataset.workspaceNavigation='true';
 }

 let state=loadState(),mode=state.mode;
 if(!reference&&location.pathname.startsWith('/study'))mode=state.mode='study';else if(!reference&&['/','/chat'].includes(location.pathname))mode=state.mode='chat';
 const requestedMode=new URLSearchParams(location.search).get('mode');if(!reference&&['chat','study'].includes(requestedMode))mode=state.mode=requestedMode;
 const w=()=>state[mode];const q=s=>root.querySelector(s);const all=s=>[...root.querySelectorAll(s)];
 const timers=[];const cleanupFns=[];let selected=null,hinted=false,zoom=1,pan={x:0,y:0},pointer=null,focusOrigin=null,openPanels=[];
 const key=location.pathname+':'+screenId;
 const chatHome=!reference&&['/','/chat'].includes(location.pathname);
 if(chatHome){
  // Chat is a fresh entry point; saved threads open on /conversation.
  w().activeId=null;delete w().views[key];
  q('#view-chat-active')?.replaceChildren();
  show('view-chat-home',true);show('view-chat-active',false);
 }
 const persist=()=>{saveState(state);};
 const delay=(fn,ms)=>{const timer=setTimeout(fn,ms);timers.push(timer);return timer;};
 const visible=el=>el&&el.getClientRects().length&&getComputedStyle(el).visibility!=='hidden';
 function show(el,on=true){if(typeof el==='string')el=q('#'+el);if(!el)return;el.hidden=!on;el.classList.toggle('hidden',!on);if(on){el.style.removeProperty('display');if(getComputedStyle(el).display==='none')el.style.display=el.classList.contains('flex')||el.className.includes('flex-col')?'flex':'block';}}
 function group(ids,target){if(!q('#'+target))return;for(const id of ids)show(id,id===target);w().views[key]=target;persist();}
 function setPressed(el,on){el.setAttribute('aria-pressed',String(on));el.dataset.selected=String(on);el.classList.toggle('stitch-selected',on);}
 function selectSibling(el){for(const n of el.parentElement.querySelectorAll(':scope > button'))setPressed(n,n===el);}
 function go(path){capture();closePanels();navigate(path);}
 function switchMode(next){capture();state.mode=next;persist();go(next==='study'?'/study/new':'/chat');}
 function capture(){if(!reference&&root.dataset.backendReady!=='true')return;for(const el of all('input:not([type=file]):not([type=radio]):not([type=checkbox]),textarea,select'))if(el.id)w().drafts[key+':'+el.id]=el.value;persist();}
 function closePanels(){for(const el of openPanels){show(el,false);el.style.removeProperty('transform');}openPanels=[];document.body.style.overflow='';focusOrigin?.focus();}
 function panel(id,backdrop){let el=q('#'+id);if(!el)return false;focusOrigin=document.activeElement;show(el,true);el.style.transform='translate(0, 0)';el.style.opacity='1';el.style.pointerEvents='auto';el.tabIndex=-1;el.setAttribute('role','dialog');el.setAttribute('aria-modal','true');el.setAttribute('aria-label',el.querySelector('h1,h2,h3')?.textContent.trim()||'Workspace panel');openPanels.push(el);if(backdrop){let b=q('#'+backdrop);if(b){show(b,true);b.style.opacity='1';b.style.pointerEvents='auto';openPanels.push(b);}}document.body.style.overflow='hidden';delay(()=>el.querySelector('input,button,textarea,[tabindex="0"]')?.focus(),0);return true;}
 function drawer(){return panel('drawer-panel','drawer-backdrop')||panel('nav-drawer','nav-backdrop')||panel('scoped-drawer')||panel('mode-drawer')||panel('adjust-sheet','adjust-sheet-backdrop');}
 function switchView(target){let el=q('#'+target);if(!el)return false;const matching=all('[id]').filter(x=>x!==el&&x.parentElement===el.parentElement&&(x.id.startsWith(target.split('-')[0]+'-')||x.classList.contains('state-panel')||x.classList.contains('state-screen')||x.classList.contains('journey-view')));group([...matching.map(x=>x.id),target],target);return true;}
 function preserveDrafts(){if(reference||root.dataset.backendReady!=='true')return;for(const el of all('input,textarea,select'))if(el.id&&w().drafts[key+':'+el.id]!==undefined&&el.type!=='file')el.value=w().drafts[key+':'+el.id];const view=w().views[key];if(!chatHome&&view&&q('#'+view))switchView(view);}
 function label(el){if(el.dataset.originalLabel)return el.dataset.originalLabel;const clone=el.cloneNode(true);clone.querySelectorAll('.material-symbols-outlined,svg,kbd').forEach(x=>x.remove());return (clone.textContent||'').replace(/\s+/g,' ').trim();}
 function composer(){return all('textarea,input[type=text],input:not([type])').find(x=>visible(x)&&!/search|name|age|field|course|filter|rename/i.test(x.id+' '+x.placeholder));}
 function nodeText(tag,text,className){let el=document.createElement(tag);el.textContent=text;if(className)el.className=className;return el;}
 function renderMermaid(container){
  if(typeof window==='undefined')return;
  const blocks=container.querySelectorAll('pre code.language-mermaid, pre code.language-mmd');
  if(!blocks.length)return;
  import(/* webpackIgnore: true */ 'https://cdn.jsdelivr.net/npm/mermaid@10/dist/mermaid.esm.min.mjs').then(m=>{
   m.default.initialize({startOnLoad:false,theme:'neutral',securityLevel:'strict'});
   blocks.forEach(async (code)=>{
    const pre=code.closest('pre');
    if(!pre||pre.dataset.mermaidRendered==='true')return;
    pre.dataset.mermaidRendered='true';
    const diag=document.createElement('div');
    diag.className='stitch-mermaid-chart';
    const id='mermaid-'+Math.random().toString(36).slice(2,10);
    try{
     const {svg}=await m.default.render(id,code.textContent.trim());
     diag.innerHTML=svg;
     pre.replaceWith(diag);
    }catch(e){}
   });
  }).catch(()=>{});
 }
 function makeMessage(log,role,text,message={}){
  const el=nodeText('article','',`stitch-message stitch-message-${role}`);if(message.id)el.dataset.messageId=message.id;
  const body=nodeText('div','','stitch-message-content');if(role==='assistant'){body.innerHTML=formatMessage(text);renderMermaid(body);}else body.textContent=text;
  el.append(nodeText('span',role==='user'?'You':'SOLVE','stitch-message-role'),body);
  if(role==='assistant'&&message.status==='complete'){
   const actions=nodeText('div','','stitch-response-actions');
   for(const [title,action] of [['Listen',()=>remote.speech(message.id)],['Worked visual',()=>remote.responseAnimation(message.id)],['Helpful',()=>remote.feedback(true,message.id)],['Not helpful',()=>remote.feedback(false,message.id)],['Regenerate response',()=>remote.regenerate(message.id)]]){
    const button=nodeText('button',title);button.type='button';button.addEventListener('click',event=>{event.stopPropagation();Promise.resolve(action()).catch(error=>notice(error.message));});actions.append(button);
   }el.append(actions);
   const visual=nodeText('div','','stitch-response-animation');visual.dataset.responseAnimation='true';el.append(visual);
  }log.append(el);
 }
 function log(){let target=q('[data-runtime-log]');if(!target){target=document.createElement('section');target.dataset.runtimeLog='true';target.className='stitch-runtime-log';target.setAttribute('role','log');target.setAttribute('aria-label','Conversation');target.setAttribute('aria-live','polite');let host=q('#view-chat-active')||q('#view-journey-2')||q('main');if(host)host.append(target);}return target;}
 function session(){let item=w().sessions.find(s=>s.id===w().activeId);if(!item){item={id:globalThis.crypto?.randomUUID?.()||`${Date.now()}-${w().sessions.length}`,title:w().goal||'New conversation',messages:[],updatedAt:Date.now(),pinned:false,archived:false};w().sessions.unshift(item);w().sessions=w().sessions.slice(0,100);w().activeId=item.id;}return item;}
 async function send(){
  if(reference)return notice('Reference screen: open Chat to send a real message.');
  if(root.dataset.sending==='true')return;
  const input=composer(),text=input?.value.trim();if(!text)return notice('Enter a question or learning goal first.');
  if(['/study/new','/chat','/'].includes(location.pathname)&&classifyPrompt(text,mode)!=='/conversation')return remote.run(async()=>{w().goal=text;await remote.intake(text);persist();go(mode==='study'?'/study/assessment':'/assessment');});
  root.dataset.sending='true';show('view-chat-home',false);show('view-chat-active',true);const target=log(),pending=nodeText('p','... solving · Generating your explanation','stitch-solving');pending.setAttribute('role','status');target.append(pending);
  const sendControl=q('#send-action-btn,#send-button,#chat-send-btn,#btn-send-home');if(sendControl)sendControl.disabled=true;
  const status=event=>{pending.textContent='... solving · '+event.detail;};root.addEventListener('solve:progress',status);
  let accepted=false;
  try{await remote.send(text,messages=>{if(!accepted){if(input.value.trim()===text)input.value='';accepted=true;}capture();target.replaceChildren();for(const message of messages)makeMessage(target,message.role,message.text||message.error||'',message);if(messages.at(-1)?.status==='generating')target.append(pending);});}
  finally{delete root.dataset.sending;root.removeEventListener('solve:progress',status);pending.remove();if(sendControl)sendControl.disabled=!input.value.trim();}
  if(['/','/chat'].includes(location.pathname)&&w().activeId)go('/conversation');
 }
 function restoreLog(){
  if(chatHome&&root.dataset.sending!=='true'){show('view-chat-home',true);show('view-chat-active',false);return;}
  if(reference||root.dataset.backendReady!=='true'||!['/','/chat','/conversation','/exam','/study/lesson'].includes(location.pathname))return;
  const s=w().sessions.find(x=>x.id===w().activeId);if(!s?.messages.length)return;
  if(location.pathname==='/chat'||location.pathname==='/')switchView('view-chat-active');
  const target=log();for(const message of s.messages)makeMessage(target,message.role,message.text||message.error||'Response interrupted.',message);

 }
 function record(correct,answer,kind='practice',concept='Updating head pointer'){if(!reference)return;const question=kind==='teachback'?'Explain how to prepend a node without losing the list.':'What should the new nodeâ€™s next pointer refer to before updating head?';w().evidence.push({concept,question,answer:String(answer).slice(0,1000),correct:!!correct,hinted,kind,at:Date.now()});persist();}
 async function check(){if(reference)return notice('Reference practice only. Open a learning session to submit an answer.');const answer=q('[data-backend-answer]')?.value?.trim()||q('input[name=backend-choice]:checked')?.value;if(!answer)return notice('Answer the current source-backed question first.');await remote.grade(answer);}
 async function teach(){const input=q('[data-backend-answer],#teach-textarea,#teach-typed-input')||composer();const text=input?.value.trim();if(!text)return notice('Enter your explanation first.');await remote.grade(text);}
 function newSession(){capture();w().activeId=null;w().drafts={};w().goal=null;w().resources=[];w().evidence=[];w().plan=[];delete w().views['backend-session'];delete w().views['backend-goal'];w().views['new-journey']='true';const input=composer();if(input)input.value='';q('[data-runtime-log]')?.remove();show('view-chat-home',true);show('view-chat-active',false);persist();go(mode==='study'?'/study/new':'/chat');}
 async function goalPlan(study=false){if(reference)return;w().goal=composer()?.value.trim()||w().goal||'Study my material';persist();const result=await remote.plan();if(result)go(study?'/study':'/approach');}
 function files(){dialog({title:'Add resources',kind:'files',maxFileMb:25,submit:items=>remote.files(items)});}
 function addLink(){dialog({title:'Add a resource link',kind:'link',submit:url=>{const value=safeUrl(url);if(!value)return 'Enter a valid HTTP or HTTPS URL.';return remote.link(value);}});}
 function renderResources(){
  if(!reference&&root.dataset.backendReady!=='true')return;
  const container=q('#resource-list-container');
  const emptyNote=container?.querySelector('.learning-empty-resources')||q('.learning-empty-resources');
  if(emptyNote)emptyNote.hidden=w().resources.length>0;
  let tray=q('[data-local-resources]');
  if(!tray){
   tray=nodeText('div','','stitch-local-resources');tray.dataset.localResources='true';
   if(container)container.append(tray);
   else{
    const input=composer(),host=input?.closest('[data-chat-composer],.learning-composer');
    if(host){tray.classList.add('stitch-chat-attachments');tray.setAttribute('aria-label','Attached resources');host.prepend(tray);}
    else (q('main'))?.append(tray);
   }
  }
  tray.hidden=!w().resources.length;tray.replaceChildren();
  w().resources.forEach((resource,index)=>{
   const row=nodeText('div','','stitch-resource');row.dataset.resourceId=resource.id||'';
   const icon=nodeText('i','description','material-symbols-outlined stitch-document-icon');icon.setAttribute('aria-hidden','true');
   const info=nodeText('span','','stitch-resource-info'),name=nodeText('strong',resource.name);
   name.title=resource.name;info.append(name,nodeText('small',resource.content?'Ready to use':'Attached'));
   row.append(icon,info);
   const remove=nodeText('button','\u00d7');remove.type='button';remove.setAttribute('aria-label','Remove '+resource.name);
   remove.addEventListener('click',()=>{if(remote)remote.removeResource(resource);else{w().resources.splice(index,1);persist();renderResources();}});
   row.append(remove);
   if(resource.content){const details=document.createElement('details');details.append(nodeText('summary','Review extracted text'),nodeText('p',resource.content));row.append(details);}
   tray.append(row);
  });
 }
 function filtered(input,selector){const query=input.value.trim().toLowerCase();let found=0;for(const n of all(selector)){const ok=(n.dataset.searchText||n.textContent).toLowerCase().includes(query);show(n,ok);if(ok)found++;}let msg=q('[data-filter-status]');if(!msg){msg=nodeText('p','','stitch-filter-status');msg.dataset.filterStatus='true';msg.setAttribute('role','status');input.parentElement.append(msg);}msg.textContent=found?'':query?'No matching items.':'';}
 function search(){capture();if(location.pathname!=='/history')w().views.historyReturn=location.pathname;persist();go('/history');}
 function graphTransform(){const viewport=q('#graph-viewport')||q('#view-map svg')?.parentElement;if(!viewport)return;let canvas=viewport.querySelector('[data-graph-camera]');if(!canvas){canvas=nodeText('div','','stitch-graph-camera');canvas.dataset.graphCamera='true';while(viewport.firstChild)canvas.append(viewport.firstChild);viewport.append(canvas);}canvas.style.transform=`translate(${pan.x}px,${pan.y}px) scale(${zoom})`;for(const span of all('span'))if(/^Scale:/.test(span.textContent))span.textContent='Scale: '+Math.round(zoom*100)+'%';w().views[key+':camera']=JSON.stringify({zoom,pan});persist();}
 function graphNode(el){const concept=remote?.learning?.course?.concepts[Number(el.dataset.conceptIndex)];if(concept){const description=q('#drawer-description');if(description)description.textContent='Loading saved explanation…';remote.run(async()=>{if(remote.learning.task?.concept===Number(el.dataset.conceptIndex))await remote.reveal();if(description)description.textContent=concept.explanation;});}const title=(el.dataset.concept||label(el)).replace(/\b(?:Practised|Explored|Needs review|Planned)\b/g,'').trim();const heading=q('#drawer-title')||q('#graph-bottom-sheet h2');if(heading)heading.textContent=title||'Linked lists';const description=q('#drawer-description');if(description&&!concept)description.textContent='Selected concept from the supplied design graph. Practise this concept to record your own evidence.';show('node-details-drawer',true);show('graph-bottom-sheet',true);all('[data-concept]').forEach(x=>x.setAttribute('aria-pressed',String(x===el)));w().views[key+':selected']=title;persist();}
 function wireGraph(){const viewport=q('#graph-viewport')||q('#view-map');if(!viewport)return;spaceGraph(viewport);for(const n of [...viewport.querySelectorAll('[onclick],.graph-node,[class*="node-card"],button,[class*="cursor-pointer"]')]){if(n.matches('button')&&n.getAttribute('aria-label'))continue;n.dataset.concept=n.dataset.concept||label(n);n.dataset.graphNode='true';n.tabIndex=0;n.setAttribute('role','button');n.setAttribute('aria-label','Inspect concept: '+n.dataset.concept);}let ix=0;all('#graph-viewport svg path,#graph-viewport svg line,#view-map svg path').forEach(el=>{el.dataset.graphEdge='true';el.style.animationDelay=(ix++*-.5)+'s';});
  const down=e=>{if(e.target.closest('[data-concept],button'))return;pointer={x:e.clientX,y:e.clientY,pan:{...pan}};viewport.setPointerCapture?.(e.pointerId);viewport.classList.add('is-panning');};const move=e=>{if(!pointer)return;pan={x:pointer.pan.x+e.clientX-pointer.x,y:pointer.pan.y+e.clientY-pointer.y};graphTransform();};const up=()=>{pointer=null;viewport.classList.remove('is-panning');};viewport.addEventListener('pointerdown',down);viewport.addEventListener('pointermove',move);viewport.addEventListener('pointerup',up);viewport.addEventListener('pointercancel',up);cleanupFns.push(()=>{viewport.removeEventListener('pointerdown',down);viewport.removeEventListener('pointermove',move);viewport.removeEventListener('pointerup',up);viewport.removeEventListener('pointercancel',up);});
  if(!reference&&!w().views[key+':camera'])delay(()=>{const bounds=viewport.getBoundingClientRect();const nodes=[...viewport.querySelectorAll('[data-graph-node]')];if(nodes.length){const maxX=Math.max(...nodes.map(n=>n.getBoundingClientRect().right-bounds.left))+24;const maxY=Math.max(...nodes.map(n=>n.getBoundingClientRect().bottom-bounds.top))+24;zoom=Math.min(1,bounds.width/maxX,bounds.height/maxY);pan={x:Math.max(0,(bounds.width-maxX*zoom)/2),y:Math.max(0,(bounds.height-maxY*zoom)/2)};graphTransform();}},0);
  try{const v=JSON.parse(w().views[key+':camera']||'null');if(v){zoom=Math.max(.4,Math.min(2,Number(v.zoom)||1));pan=v.pan||pan;graphTransform();}}catch{}
 }
 function statusLocal(){if(reference||root.dataset.backendReady!=='true')return;const ledger=evidenceStats(w());const metrics=q('#practice-metrics-grid');if(metrics){const counters=[...metrics.querySelectorAll('.font-display')];const values=[ledger.attempts,ledger.firstTry,w().evidence.filter(e=>e.correct&&e.hinted).length,w().evidence.filter(e=>e.kind==='teachback').length];counters.forEach((el,i)=>{el.textContent=String(values[i]||0);if(i===1&&el.nextElementSibling)el.nextElementSibling.textContent='of '+ledger.attempts;});}root.setAttribute('aria-description','Saved evidence comes from the backend. Exported reference figures are illustrative.');q('[data-backend-stats]')?.remove();const info=nodeText('p',`Saved evidence · ${ledger.attempts} recorded attempts · ${ledger.correct} correct. Exported figures below are example design data.`, 'stitch-demo-note');info.dataset.backendStats='true';if(q('#section-practice-evidence'))q('#section-practice-evidence').prepend(info);else if(location.pathname==='/target')q('main')?.prepend(info);}
 function preferences(){if(!reference&&root.dataset.backendReady!=='true')return;const p=profile();for(const item of all('aside span,aside p,aside div,header span,header p,header div')){if(item.children.length)continue;if(item.dataset.profileName||/^(?:Alex Rivera|Alex Mercer|Elena Rostova)$/.test(item.textContent.trim())){item.dataset.profileName='true';item.textContent=p.name||'Guest';}if(/^(?:Pro Scholar|Cognitive Architect|Cognitive Tier \d+)$/.test(item.textContent.trim()))item.textContent=remote?.account?.authenticated?'Account':'Guest account';}for(const select of all('#interface-lang,#interfaceLang,#explanation-lang,#explanationLang'))if(!select.dataset.liveLanguages){if(/interface/i.test(select.id))select.replaceChildren();for(const language of ['English','Deutsch','Fran\u00e7ais','Espa\u00f1ol','\u65e5\u672c\u8a9e'])if(![...select.options].some(option=>option.value===language))select.add(new Option(language,language));select.dataset.liveLanguages='true';}if(remote?.account)for(const el of all('span,p,div')){if(el.children.length===0&&el.textContent.trim()==='alex.rivera@example.edu')el.textContent=remote.account.email||'Guest account';}for(const [selector,value] of [['#interface-lang,#interfaceLang',p.interfaceLanguage],['#explanation-lang,#explanationLang',p.explanationLanguage]]){const select=q(selector);if(select&&value){let option=[...select.options].find(option=>option.value===value||option.textContent.trim().startsWith(value));if(!option){option=new Option(value,value);select.add(option);}select.value=option.value;}}if(location.pathname==='/onboarding'&&p.education){const trigger=q('#educationTrigger,#educationToggle');const selected=trigger?.dataset.value||p.education;const value=q('#educationSelectedText,#selectedEducation,#educationValue');if(value)value.textContent=selected;if(trigger)trigger.dataset.value=selected;}document.documentElement.dataset.reduceMotion=p.reducedMotion?'true':'false';if(!reference&&/settings|onboarding/.test(location.pathname)){for(const input of all('input[name=motion-setting],input[name=motionPreference]'))input.checked=!!p.reducedMotion===isReducedMotionChoice(input.parentElement.querySelector('span')?.textContent||input.parentElement.textContent);for(const [ids,value] of [['#preferred-name,#fullName',p.name],['#age-input,#userAge,#age',p.age],['#course-input,#fieldOfStudy,#studyField',p.field]])if(value!==undefined){const el=q(ids);if(el)el.value=value;}}}
 async function saveSettings(){if(reference)return;await remote.run(async()=>{const current=await remote.call('/me'),p=profile();const body={...current.profile};delete body.revision;
  body.name=q('#preferred-name,#fullName')?.value.trim()||'';const age=q('#age-input,#userAge,#age')?.value;body.age=age?Number(age):null;body.course=q('#course-input,#fieldOfStudy,#studyField')?.value||'';body.motion=p.reducedMotion?'reduced':'device';body.text_size=p.largeText?'large':'standard';body.detail=/concise/i.test(p.detail)?'concise':/detailed/i.test(p.detail)?'detailed':'balanced';
  body.interface_language=q('#interface-lang,#interfaceLang')?.value||body.interface_language;body.explanation_language=q('#explanation-lang,#explanationLang')?.value||body.explanation_language;
  const speed=parseFloat(String(p.audioSpeed));if([.75,1,1.25,1.5].includes(speed))body.playback_speed=speed;
  const education=q('.edu-pill[aria-pressed=true],#educationSelectedText,#selectedEducation')?.textContent.replace(' (Selected)','').trim()||p.education;if(['School','Diploma','Undergraduate','Postgraduate','Other','Prefer not to say'].includes(education))body.education=education;
  body.onboarding_complete=location.pathname.includes('onboarding')||body.onboarding_complete;const saved=await remote.call('/me/profile',{method:'PUT',body,revision:current.profile.revision});saveProfile({...p,name:saved.name,age:saved.age,field:saved.course,education:saved.education,interfaceLanguage:saved.interface_language,explanationLanguage:saved.explanation_language,detail:saved.detail,audioSpeed:saved.playback_speed,reducedMotion:saved.motion==='reduced',largeText:saved.text_size==='large'});preferences();notice('Profile saved.');await remote.translate(saved.interface_language);if(location.pathname.includes('onboarding'))go('/welcome/transition');
 });}
 function toggleContent(button,ids){const target=ids.map(x=>q('#'+x)).find(Boolean);if(!target)return false;const on=!visible(target);show(target,on);button.setAttribute('aria-expanded',String(on));return true;}
 function historyState(target){const ids=['chat-search-dialog','study-search-dialog','search-empty-dialog','rename-modal-dialog','archived-history-dialog'];let targetId=({'chat-search':'chat-search-dialog','study-search':'study-search-dialog','search-empty':'search-empty-dialog','archived-history':'archived-history-dialog'})[target];if(targetId){show('modal-backdrop',true);group(ids,targetId);panel(targetId);return;}show('modal-backdrop',false);if(target==='sidebar-menu')panel('context-menu');if(target==='message-jump'){show('floating-jump-latest',true);q('#target-matched-message')?.classList.add('stitch-highlight');q('#target-matched-message')?.scrollIntoView({block:'center',behavior:'smooth'});delay(()=>q('#target-matched-message')?.classList.remove('stitch-highlight'),1800);}if(target==='practice-banner')show('practice-banner-container',true);}
 async function manageSession(action,element){
  const isPlan=location.pathname==='/plan',gid=isPlan?w().views['backend-goal']:null,sid=isPlan&&!gid?w().views['backend-session']:null;
  const conversation=w().sessions.find(item=>item.id===w().activeId);
  const path=gid?'/goals/'+gid:sid?'/sessions/'+sid:conversation?'/conversations/'+conversation.id:null;
  if(!path)return notice('Select one of your saved plans or conversations first.');
  const load=()=>remote.call(path+(sid?'?read_only=true':''));
  const apply=async title=>remote.run(async()=>{const current=await load();
   if(action==='delete'){await remote.call(path,{method:'DELETE'});if(gid)delete w().views['backend-goal'];else if(sid)delete w().views['backend-session'];else{w().sessions=w().sessions.filter(item=>item.id!==conversation.id);w().activeId=null;}}
   else if(action==='export'){const response=await fetch('/api'+path+'/export',{credentials:'same-origin',cache:'no-store'});if(!response.ok)throw Error('Export is unavailable.');download(await response.blob(),isPlan?'solve-plan.md':'solve-conversation.md');}
   else{const body=action==='rename'?{title}:action==='pin'?{pinned:!current.pinned}:{archived:action==='archive'};const saved=await remote.call(path,{method:'PATCH',body,revision:current.revision});if(conversation&&!isPlan)Object.assign(conversation,saved);}
   persist();renderHistory();notice('Saved.');
  });
  if(action==='rename')remote.run(async()=>{const current=await load();dialog({title:isPlan?'Rename plan':'Rename conversation',kind:'text',value:current.title||current.goal,submit:title=>{if(!title.trim())return 'Enter a name.';return apply(title.trim().slice(0,120));}});});
  else if(action==='delete')dialog({title:'Delete this saved item?',kind:'confirm',submit:()=>apply()});
  else await apply();
 }
 function download(blob,name){const url=URL.createObjectURL(blob);const a=document.createElement('a');a.href=url;a.download=name;a.click();delay(()=>URL.revokeObjectURL(url),1000);}
 function renderHistory(){if(reference||root.dataset.backendReady!=='true'||!location.pathname.includes('history'))return;let host=q('[data-local-history]');if(!host){host=nodeText('section','','stitch-connected stitch-local-history');host.dataset.localHistory='true';host.setAttribute('aria-label',`${mode} local history`);q('main')?.append(host);}if(!host)return;host.replaceChildren(nodeText('h3',`${mode==='study'?'Long term':'Instant'} · Your saved conversations`));for(const s of [...w().sessions].sort((a,b)=>Number(b.pinned)-Number(a.pinned)||b.updatedAt-a.updatedAt)){const row=nodeText('div','','stitch-history-row');row.dataset.searchText=s.title+' '+(s.messages?.map(m=>m.text).join(' ')||'');const b=nodeText('button',(s.pinned?'📌 ':'')+s.title+(s.archived?' · Archived':''));b.type='button';b.className='stitch-history-title-btn';b.addEventListener('click',()=>{w().activeId=s.id;persist();go(mode==='study'?'/study/lesson':'/conversation');});row.append(b);const hasVid=s.has_video||s.messages?.some(m=>m.animation?.steps?.length);const hasMmd=s.has_mermaid||s.messages?.some(m=>/```(?:mermaid|mmd|diagram)|^(?:graph|flowchart)\s+/m.test(m.text||''));if(hasVid||hasMmd){const badges=nodeText('span','','stitch-history-badges');if(hasVid){const vb=nodeText('span','🎥 Video','stitch-history-badge stitch-badge-video');vb.title='Includes interactive video animation';badges.append(vb);}if(hasMmd){const mb=nodeText('span','📊 Mermaid','stitch-history-badge stitch-badge-mermaid');mb.title='Includes visual Mermaid diagrams';badges.append(mb);}row.append(badges);}for(const action of ['rename','pin',s.archived?'restore':'archive','export','delete']){const btn=nodeText('button',action);btn.type='button';btn.addEventListener('click',()=>{w().activeId=s.id;manageSession(action,btn);});row.append(btn);}host.append(row);}if(!w().sessions.length)host.append(nodeText('p','No saved conversations yet.'));}
 function handleClick(event){const target=event.target.closest('button,a,[role=button],[data-target],[data-state],input[type=radio],label');if(!target||!root.contains(target))return;const id=target.id,text=label(target),aria=target.getAttribute('aria-label')||'',lower=(text+' '+aria).toLowerCase();if(target.closest('[data-local-history],[data-local-resources],[data-backend-plans],[data-backend-learning]'))return;
  if(/^(Text|Visual|Audio)$/.test(text)&&remote){remote.delivery(text.toLowerCase());return;}if(/^(Socratic Mode|Exam Drill)$/.test(text)&&remote){remote.scope(text);return;}
  if(/Stop (?:response|generating|audio)/i.test(text+' '+aria)){remote?.stop();return;}
  if(target.matches('a')){if(/^Chat(?: Mode)?$/.test(text)){event.preventDefault();switchMode('chat');return;}if(/^Study(?: Mode(?: Live)?)?$/.test(text)){event.preventDefault();switchMode('study');return;}const path=target.dataset.path;let route=aliases[path];if(!route){if(/^Chat(?: Mode)?$/.test(text)){event.preventDefault();switchMode('chat');return;}if(/^Study(?: Mode)?$/.test(text)){event.preventDefault();switchMode('study');return;}if(/Back to lesson/i.test(text))route='/lesson';else if(/Back to workspace|Active Session|Learning Workspace/i.test(text))route=mode==='study'?'/study':'/chat';else if(/Plan|Strategy/.test(text))route='/plan';else if(/Graph/.test(text))route='/knowledge-graph';else if(/Target|Status/.test(text))route='/target';else if(/Settings|Profile/.test(text))route='/settings';else if(/History|Past Sessions/.test(text))route='/history';else if(/Continue preparation/.test(text))route='/exam';else if(/Privacy|Terms/.test(text)){event.preventDefault();dialog({title:text,description:'Demo build: the serviceâ€™s approved legal text has not been supplied.',kind:'info'});return;}}
   if(route){event.preventDefault();if(/New chat/i.test(text))newSession();else go(route);return;}
   if(target.getAttribute('href')==='#'){event.preventDefault();if(target.closest('nav'))return;go(mode==='study'?'/study/lesson':'/conversation');return;}}
  if(target.dataset.target&&q('#'+target.dataset.target)){switchView(target.dataset.target);selectSibling(target);return;}
  if(target.dataset.state){historyState(target.dataset.state);selectSibling(target);return;}
  if(target.dataset.nav){const section=q('#section-'+target.dataset.nav);section?.scrollIntoView({block:'start',behavior:'smooth'});selectSibling(target);return;}
  if((target.dataset.value||target.dataset.val)&&!target.matches('#educationTrigger,#educationToggle')){const val=target.dataset.value||target.dataset.val;const span=q('#educationSelectedText,#selectedEducation,#educationValue');if(span)span.textContent=val;const edu=q('#educationTrigger,#educationToggle');if(edu)edu.dataset.value=val;for(const option of all('#educationMenu [role=option],#educationDropdown [role=option]')){const selected=(option.dataset.value||option.dataset.val)===val;option.setAttribute('aria-selected',String(selected));const check=option.querySelector('.check-indicator,.checkmark');if(check)check.style.opacity=selected?'1':'0';}show('educationMenu',false);show('educationDropdown',false);edu?.setAttribute('aria-expanded','false');edu?.focus();return;}
  if(/^(educationTrigger|educationToggle)$/.test(id)){if(!toggleContent(target,['educationMenu','educationDropdown']))notice('Education menu is not present in this export.');return;}
  if(/googleSignInBtn/.test(id)||/Continue with Google/.test(text)){remote?.login();return;}
  if(id==='guestSignInBtn'||target.dataset.guestContinue==='true'||/Continue as guest|Log in as guest|Login as guest/i.test(text)){location.assign('/chat');return;}
  if(['submitButton','submitBtn'].includes(id)){event.preventDefault();saveSettings();return;}
  if(/save-profile-btn/.test(id)||(/^Save changes$/i.test(text)&&location.pathname.includes('settings'))){event.preventDefault();saveSettings();return;}
  if(/stateDefault|stateReset|previewDefault|state-default-btn/.test(id)){if(q('#view-chat-home'))switchView('view-chat-home');closePanels();show('nameError',false);show('error-message',false);return;}
  if(/stateDropdown|previewDropdown/.test(id)){toggleContent(target,['educationMenu','educationDropdown']);return;}
  if(/stateError|previewValidationError/.test(id)){show('nameError',true);show('error-message',true);return;}
  if(/previewSaving|stateSaving|stateLoading|btn-state-loading/.test(id)){notice('Demo: saving / opening workspaceâ€¦');return;}
  if(/previewSaveError|btn-state-error/.test(id)){notice('Demo error state. Your local data is retained.');show('error-state',true);return;}
  if(/Go back|Back to workspace/.test(aria+' '+text)){go(mode==='study'?'/study':'/chat');return;}
  if(/drawer-close|Dismiss Sheet|Close Details|Close Drawer|close-specs|Close motion|^close$|^Cancel$|Keep current plan|Keep editing/i.test(id+' '+text+' '+aria)){closePanels();if(q('#node-details-drawer'))show('node-details-drawer',false);if(q('#graph-bottom-sheet'))show('graph-bottom-sheet',false);if(q('#unsaved-modal'))show('unsaved-modal',false);if(q('#modal-backdrop'))show('modal-backdrop',false);return;}
  if(/drawer-open|drawer-toggle|Open Menu|^Menu$|Open Drawer/.test(id+' '+aria)||/Drawer Open/.test(text)){drawer();return;}
  if(/Collapse sidebar/.test(aria)){const aside=q('aside');if(aside){aside.classList.toggle('stitch-collapsed');let b=q('[data-reopen-sidebar]');if(!b){b=nodeText('button','â˜°','stitch-reopen');b.type='button';b.dataset.reopenSidebar='true';b.setAttribute('aria-label','Open sidebar');b.addEventListener('click',()=>{aside.classList.remove('stitch-collapsed');root.classList.remove('stitch-sidebar-collapsed');b.remove();});root.append(b);}root.classList.toggle('stitch-sidebar-collapsed');}return;}
  if(/New (?:chat|session|conversation)/i.test(text)||aria==='New chat'){newSession();return;}
  if(/Plan a task/.test(text)){go('/assessment');return;}if(/New study goal|Start a study goal|Set a new target/.test(text)){mode=state.mode='study';persist();go('/study/new');return;}
  if(/^(Chat|Chat Mode)$/.test(text)||id==='mode-chat-btn'||id==='switcher-chat'){switchMode('chat');return;}
  if(/^(Study|Study Mode(?: Live)?)$/.test(text)||id==='mode-study-btn'||id==='switcher-study'){switchMode('study');return;}
  if(/Search history|Search concepts|Search chats|Search sessions|Command Palette/.test(aria+' '+text)){if(/concept/i.test(lower)){let input=q('input[placeholder*="concept"]');if(input){input.focus();return;}}search();return;}
  if(/send|Confirm response|Save answer|Generate Study Strategy/i.test(aria)||/^(send-button|send-action-btn|chat-send-btn|btn-send-home|send-goal-btn)$/.test(id)||text==='arrow_upward'){send();return;}
  if(/Prepare for an exam|Help with a question|Explain a concept|Understand a topic|Explore an idea|Learn a new skill/.test(text)){const input=composer();if(input){input.value=/exam/i.test(text)?'Help me prepare for my Data Structures exam in 4 hours.':/skill/i.test(text)?'Help me learn Python over 3 months.':/concept|topic/.test(text)?'Explain recursion.':'Help me understand this question.';input.dispatchEvent(new Event('input',{bubbles:true}));input.focus();}return;}
  if(/Create my (?:learning approach|3-month study plan)|Start Learning|Start learning|Accept Plan|btn-create-plan|cta-generate-approach|action-btn/.test(text+' '+id)){if(/Start|Accept/.test(text))go('/lesson');else goalPlan(mode==='study'||/3-month/.test(text));return;}
  if(/Continue learning|Continue preparation|Continue prep|Continue active|Next:|Start Practice|Start practice|Practise this|Practise arrow|Try a practice|Practise linked/i.test(text)){go(/practice|practise/i.test(text)?'/practice':mode==='study'?'/study/lesson':'/lesson');return;}
  if(/^Next question$/.test(text)&&remote){remote.advance();return;}if(/Proceed to Teach|Proceed$|Next question/.test(text)){if(q('#state-5'))switchView('state-5');else switchView('view-teachback');return;}
  if(/Check answer/.test(text)||id==='check-btn'){check();return;}
  if(/Get feedback|Finalise Teach|Submit teach|Submit answer/.test(text)){teach();return;}
  if(/Try explaining/.test(text)){switchView('state-5');return;}
  if(/Try a similar|Review question/.test(text)){selected=null;switchView(q('#state-1')?'state-1':'view-question');return;}
  if(/Show (?:a )?hint|Hide hint|Not sure/.test(text)){hinted=true;if(q('#state-4'))switchView('state-4');else toggleContent(target,['hint-content']);return;}
  if(/^(?:[ABCD][\)\.]?\s)/.test(text)&&/list|head|node|^A\)|^B\)|^C\)|^D\)/i.test(text)){selected=text;selectSibling(target);if(reference&&q('#quiz-feedback')){const correct=/^B\)/.test(text);record(correct,text,'practice','Linked-list indexed access');q('#quiz-feedback').textContent=correct?'Correct. Indexed access in a linked list traverses nodes: O(n).':'Review the traversal: reaching an indexed node requires following each prior link.';show('quiz-feedback',true);}return;}
  if(target.matches('input[type=radio]')){selected=target.id||target.value;if(location.pathname.includes('settings')){let p=profile();p.reducedMotion=isReducedMotionChoice(target.parentElement.querySelector('span')?.textContent||target.parentElement.textContent);saveProfile(p);remote?.preference(p);}return;}
  if(/Type response|^Type$|mode-type|mod-type/.test(text+' '+id)){group(['container-type','container-speak'],'container-type');show('teach-textarea',true);selectSibling(target);return;}
  if(/Listen|Audio mentor|Toggle Audio/.test(aria+' '+text)){remote?.speech();return;}if(/mic|Voice|Speak response|^Speak$|record/.test(aria+' '+text+' '+id)){remote?.record();return;}
  if(/Browse files|Add resources|Add Context|Attach reference|Attach file|Upload file|btn-upload-file|attach-doc|attach-button/.test(text+' '+aria+' '+id)){const existing=q('input[type=file]');if(existing){existing.click();return;}if(q('#attachment-popover')){toggleContent(target,['attachment-popover']);return;}files();return;}
  if(/Add a link|Add link|^Attach$/.test(text)){const url=q('input[placeholder*="URL"]')?.value;if(url){const value=safeUrl(url);if(!value)return notice('Enter a valid HTTP or HTTPS URL.');remote.link(value);}else addLink();return;}
  if(/Remove resource|Remove attachment/.test(aria)){const card=target.closest('[id*=chip],.resource-card')||target.parentElement;show(card,false);notice('Example attachment removed.');return;}
  if(/Clear all/.test(text)){if(remote)remote.clearResources();else{w().resources=[];persist();renderResources();}return;}
  if(/Paste notes|Import past curriculum|Import curriculum/.test(text)){dialog({title:'Paste your curriculum or notes (at least 60 characters)',kind:'text',value:'',submit:value=>remote?.notes(value)});return;}if(/Web Search Augmentation|Auto-Scrape|Search web|Scrape web|Find online material/i.test(text+' '+aria)){remote?.findResources();return;}if(/Deep Reasoner Mode/.test(text+' '+aria)){remote?.run(async()=>{const session=await remote.conversation();const saved=await remote.call('/conversations/'+session.id,{method:'PATCH',revision:session.revision,body:{deep_reasoning:!session.deep_reasoning}});Object.assign(session,saved);persist();setPressed(target,saved.deep_reasoning);notice(saved.deep_reasoning?'Deep reasoning enabled.':'Standard reasoning enabled.');});return;}if(/Snap past|OCR|extraction preview|Synthesize standard/.test(text+' '+aria)){files();return;}
  if(/Adjust Scope|Preparation Scope|Adjust (?:Plan|Strategy)|Edit target|Edit Plan|Edit details|Adjust pace|Adjust sequence|Edit answer|Modify answer|Edit$/.test(text+' '+aria)){if(panel('target-status-drawer')||panel('drawer-panel','drawer-veil')||panel('adjust-sheet','adjust-sheet-backdrop')||switchView('state-adjust-plan'))return;dialog({title:'Adjust learning plan',kind:'text',value:w().goal||'Data Structures mid preparation',submit:value=>{if(!value.trim())return 'Enter a learning goal.';w().goal=value.trim().slice(0,500);persist();notice('Learning goal updated locally.');}});return;}
  if(/Save & Apply|Apply changes|Save Strategy/.test(text)){capture();remote?.adjust();closePanels();return;}
  if(/View sequence|View full roadmap/.test(text)){if(!switchView(mode==='study'?'state-study-detail':'state-chat-detail')){if(!switchView('view-detail'))go('/plan');}return;}if(/Back to plans/.test(text)){if(!switchView(mode==='study'?'state-study-overview':'state-chat-overview'))switchView('view-overview');return;}if(/View plan|Back to plan|Save to Plan|View 4-Hour/.test(text)){go('/plan');return;}
  if(/^(Python|Java|JavaScript|C\+\+)$/.test(text)){remote?.explain('code',text);return;}if(/Explain simpler|Simpler/.test(text)){remote?.explain('simpler');return;}if(/Another example|Explain this step/.test(text)){remote?.explain('example');return;}if(/More detail|Go deeper/.test(text)){remote?.explain('detailed');return;}if(/Open explanation|Review the example|View reference/.test(text)){go('/lesson');return;}
  if(/Show code snippet|Call Stack|stack-toggle|Stack trace/i.test(text+' '+id)){if(!toggleContent(target,['stack-card-content','stack-card-body','stack-trace-content']))notice('Example: factorial(n) returns 1 when n â‰¤ 1; otherwise it returns n Ã— factorial(n âˆ’ 1).');return;}
  if(/Why stack|Trace Fibonacci|Draw memory/.test(text)){const input=composer();if(input){input.value=text;send();}return;}
  if(id==='btn-state-new'){show('returning-card',false);show('plan-preview',false);return;}if(id==='btn-state-returning'&&q('#returning-card')){show('returning-card',true);show('plan-preview',false);return;}if(id==='btn-state-preview'){show('returning-card',false);show('plan-preview',true);return;}
  if(/btn-state-text-entered|state-text-btn/.test(id)){const input=composer();if(input){input.value='Help me prepare for my Data Structures exam in 4 hours.';input.focus();}return;}if(/btn-state-attachment-open/.test(id)){show('attachment-popover',true);return;}if(/btn-state-attachment-added|state-attach-btn/.test(id)){show('attachments-tray',true);show('sample-file-chip',true);show('attachment-card',true);return;}if(id==='btn-state-first-use'){show('attachments-tray',false);show('attachment-popover',false);const input=composer();if(input)input.value='';return;}
  if(id==='pill-home'){switchView('view-chat-home');selectSibling(target);return;}
  if(id==='pill-active'){switchView('view-chat-active');selectSibling(target);return;}
  if(id==='pill-preview'){switchView('view-mode-comparison');selectSibling(target);return;}
  if(/Enter Chat Workspace/.test(text)){switchView('view-chat-home');return;}
  if(/horizon-sprint-btn|horizon-macro-btn/.test(id)){group(['horizon-sprint-content','horizon-macro-content'],id==='horizon-sprint-btn'?'horizon-sprint-content':'horizon-macro-content');selectSibling(target);return;}
  if(/^j-tab-\d+$/.test(id)){switchView('view-journey-'+id.split('-').pop());selectSibling(target);return;}
  if(/^tab-btn-\d+$/.test(id)&&q('#state-1')){switchView('state-'+id.split('-').pop());selectSibling(target);return;}
  if(/^tab-btn-(question|feedback|teachback|summary)$/.test(id)){switchView('view-'+id.slice(8));selectSibling(target);return;}
  if(/Review saved cards/.test(text)){remote?.run(async()=>{const cards=await remote.call('/cards');dialog({title:'Saved flashcards',kind:'info',description:cards.map(card=>card.front+'\n'+card.back).join('\n\n')||'No saved cards yet.'});});return;}if(/^tab-state-\d+$/.test(id)){switchView('state-'+id.split('-').pop());selectSibling(target);return;}
  if(id==='tab-chat-mode'||id==='tab-study-mode'){state.mode=mode=id==='tab-study-mode'?'study':'chat';persist();if(q('#state-'+mode+'-overview'))switchView('state-'+mode+'-overview');selectSibling(target);remote?.search();return;}
  if(/Study Â· Python Foundations|Scope: Python/.test(text)){mode=state.mode='study';persist();notice('Study scope selected. Chat records remain separate.');if(q('#view-python-goal'))switchView('view-python-goal');return;}
  if(/state-list|toggle-list-view|view-mode-list/.test(id)){group(['map-canvas-container','list-view-container','empty-state-container'],'list-view-container');group(['view-list','view-map','view-empty'],'view-list');selectSibling(target);return;}
  if(/state-map|toggle-map-view|view-mode-map/.test(id)){group(['map-canvas-container','list-view-container','empty-state-container'],'map-canvas-container');group(['view-list','view-map','view-empty'],'view-map');selectSibling(target);return;}
  if(/Zoom In|Zoom Out|Fit to View|Reset Orientation|Center Graph/.test(aria)){if(/Zoom In/.test(aria))zoom=Math.min(2,zoom+.15);else if(/Zoom Out/.test(aria))zoom=Math.max(.4,zoom-.15);else{zoom=1;pan={x:0,y:0};}graphTransform();return;}
  if(target.dataset.concept){graphNode(target);return;}
  if(/Inspect|View visibility|Explore tree|Updating head|Head reference|Nodes and references|Insertion at/.test(text)&&/graph/.test(location.pathname)){graphNode(target);return;}
  if(/Needs review|Practised|Explored|Planned|All concepts|^All \(/.test(text)&&/graph/.test(location.pathname)){const term=text.replace(/\s*\(\d+\)/,'').trim();all('[data-concept]').forEach(n=>show(n,/All/.test(term)||n.textContent.includes(term)));selectSibling(target);return;}
  if(/Export Graph/.test(text)){download(new Blob([JSON.stringify({mode,evidence:w().evidence},null,2)],{type:'application/json'}),'solve-graph-evidence.json');return;}
  if(/Explore Sample Graph/.test(text)){show('empty-state-container',false);show('map-canvas-container',true);notice('Example design graph â€” this does not change your learning evidence.');return;}
  if(/Review attempts/.test(text)){if(panel('attempt-drawer','attempt-drawer-backdrop')){const drawer=q('#attempt-drawer');let list=drawer.querySelector('[data-local-attempts]');if(!list){list=nodeText('section','','stitch-local-history');list.dataset.localAttempts='true';drawer.querySelector('.overflow-y-auto')?.prepend(list);}if(list){list.replaceChildren(nodeText('h3','Your local attempts'));for(const e of w().evidence)list.append(nodeText('p',e.question+'\nYour answer: '+e.answer+'\n'+(e.correct?'Correct':'Needs review')+(e.hinted?' Â· Hint used':'')));if(!w().evidence.length)list.append(nodeText('p','No recorded attempts. The exported transcript below is an example.'));}return;}dialog({title:'Your local attempts',description:w().evidence.length?w().evidence.map(e=>e.question+'\nYour answer: '+e.answer+'\n'+(e.correct?'Correct':'Needs review')).join('\n\n'):'No verified practice attempts yet. Exported statistics are example data.',kind:'info'});return;}
  if(id==='toggle-data-mode'){toggleContent(target,['table-container']);show('chart-container',!visible(q('#table-container')));return;}
  if(/Active \(|Completed \(|Archived \(/.test(text)&&location.pathname==='/plan'){selectSibling(target);if(/Archived/.test(text))switchView('state-empty-archive');else if(/Active/.test(text))switchView(mode==='study'?'state-study-overview':'state-chat-overview');return;}
  if(/Rename conversation|Rename plan|Rename curriculum/.test(text)){manageSession('rename',target);return;}
  if(/Pin|Unpin/.test(text+' '+aria)){manageSession('pin',target);return;}
  if(/Archive plan|Archive conversation|^Archive$/.test(text)){manageSession('archive',target);return;}
  if(/Restore/.test(text)){manageSession('restore',target);return;}
  if(/Export conversation/.test(text)){manageSession('export',target);return;}
  if(/Delete conversation/.test(text)){manageSession('delete',target);return;}
  if(/Manage conversation|more_horiz|Plan actions/.test(aria+' '+text)){if(panel('context-menu'))return;dialog({title:'Conversation actions',kind:'actions',submit:action=>manageSession(action,target)});return;}
  if(/Switch to Study|Search in Study/.test(text)){switchMode('study');return;}
  if(/Resume practice/.test(text)){go('/practice');return;}
  if(/Dismiss banner/.test(aria)){show('practice-banner-container',false);return;}
  if(/Jump to latest/.test(text)){q('[data-runtime-log]')?.lastElementChild?.scrollIntoView({behavior:'smooth'});show('floating-jump-latest',false);return;}
  if(/Reset search|^clear$/.test(text)){const input=all('input').find(visible);if(input){input.value='';input.dispatchEvent(new Event('input',{bubbles:true}));}return;}
  if(/Sign out/.test(text)){remote?.logout();return;}
  if(/Settings|Workspace actions/.test(aria)){go('/settings');return;}
  if(/^(Profile|Learning|Voice & Accessibility|Account)$/.test(text)||/demo-tab-/.test(id)){const name=id.replace('demo-tab-','')||text.split(' ')[0].toLowerCase();const el=q('#section-'+name)||q('#'+name+'-section');el?.scrollIntoView({block:'start',behavior:'smooth'});selectSibling(target);return;}
  if(/School|Diploma|Undergraduate|Postgraduate|Prefer not to say|Self-Learner|Graduate/.test(text)&&location.pathname.includes('settings')){selectSibling(target);saveProfile({...profile(),education:text});return;}
  if(/Concise|Balanced|Detailed|0.75|1.25|1.5|1Ã—|Large|Standard \(/.test(text)&&location.pathname.includes('settings')){selectSibling(target);let p=profile();if(/Large|Standard/.test(text)){p.largeText=/Large/.test(text);document.documentElement.dataset.largeText=String(p.largeText);}else if(/Ã—/.test(text))p.audioSpeed=text;else p.detail=text;saveProfile(p);remote?.preference(p);return;}
  if(/Extract as Flashcard|Bookmark/.test(text)){remote?.bookmark();return;}
  if(/copy|Copy/.test(text)||aria==='Copy response'){const content=target.closest('section,article')?.textContent||q('[data-runtime-log]')?.textContent||'';navigator.clipboard?.writeText(content).then(()=>notice('Copied.')).catch(()=>notice('Clipboard access is unavailable. Select and copy the text.'));return;}
  if(/Share/.test(text)){dialog({title:'Share this screen',description:location.href,kind:'info'});return;}
  if(/Helpful response|Needs improvement/.test(aria)){remote?.feedback(/Helpful/.test(aria));return;}
  if(/Regenerate/.test(aria)){remote?.regenerate().catch(error=>notice(error.message));return;}
  if(target.dataset.hours||target.dataset.preset||/Pass the exam|higher score|Target:|Yes,|No, partial|Not sure/.test(text)){selectSibling(target);w().drafts[key+':'+(target.dataset.hours?'hours':'choice')]=target.dataset.hours||target.dataset.preset||text;persist();return;}
  if(/Save answer/.test(text)){capture();notice('Answer saved locally.');return;}
  if(/Set availability/.test(text)){dialog({title:'Weekly availability',kind:'text',value:w().drafts.availability||'',submit:value=>{if(!value.trim())return 'Enter your available study times.';w().drafts.availability=value;persist();return remote?.adjust();}});return;}
  if(/state-overview|state-detail|state-sheet|state-empty/.test(id)&&q('#view-overview')){if(/sheet/.test(id))panel('adjust-sheet','adjust-sheet-backdrop');else switchView('view-'+id.split('-').pop());return;}
  if(/Empty State/.test(text)){switchView(q('#view-empty')?'view-empty':'empty-state-container');return;}
  if(/^btn-state-\d+$/.test(id)){const number=+id.split('-').pop();if(/graph/.test(location.pathname)||screenId==='850cb09187854f21adffa14f6bda2976'){if(number===5){show('list-view-container',true);show('map-canvas-container',false);}else if(number===6){show('empty-state-container',true);show('map-canvas-container',false);}else notice('Illustrative graph state selected.');}else if(q('#section-goal-summary')){if(number===4)show('practice-empty-state',true);if(number===5)panel('attempt-drawer','attempt-drawer-backdrop');}return;}
  if(/^tab-btn-(chat|study|drawer)/.test(id)){if(/study/.test(id))switchMode('study');else if(/target/.test(id))go('/target');else if(/drawer/.test(id))drawer();else switchMode('chat');return;}
  if(id==='tab-graph-btn'||id==='tab-status-btn'){group(['scope-tab-graph','scope-tab-status'],id==='tab-graph-btn'?'scope-tab-graph':'scope-tab-status');selectSibling(target);return;}
  if(/Start Mentor Discussion|Ask follow-up|Open conversation|Ask Mentor/.test(text)){go(mode==='study'?'/study/lesson':'/conversation');return;}
  if(/Try again/.test(text)&&location.pathname.includes('transition')){go('/chat');return;}
  if(/specs-toggle|btn-specs|Motion Specs/.test(id+' '+text)){panel('specs-drawer')||panel('spec-sheet');return;}
  if(/notifications/i.test(aria+' '+text)){remote?.notifications();return;}if(target.matches('button')&&!target.closest('[data-runtime-log]')){const routes={'Plan':'/plan','Graph':'/knowledge-graph','Status':'/target','Mentor':'/chat'};if(routes[text])go(routes[text]);else if(/notifications|help_outline|Help|Focused/.test(text+' '+aria))notice('Upload source material to create a learning plan. Saved work is scoped to your guest or signed-in account.');}
 }
 function handleInput(event){const input=event.target;const send=q('#send-action-btn,#send-button,#chat-send-btn,#btn-send-home,#send-goal-btn');if(send&&input===composer())send.disabled=root.dataset.sending==='true'||root.dataset.backendBusy==='true'||!input.value.trim();if(!input.matches('input,textarea,select'))return;if(input.id)w().drafts[key+':'+input.id]=input.value;persist();if(/Search|Filter|Find a concept/i.test(input.placeholder)){if(/concept/.test(input.placeholder))filtered(input,'[data-concept]');else if(/plans/.test(input.placeholder))filtered(input,'[id^="card-"]');else if(location.pathname.includes('history')){delay(()=>remote?.search(input.value),250);}else if(/history|chats|sessions/i.test(input.placeholder)){capture();go('/history');}}if(location.pathname.includes('settings')&&input.matches('select'))saveProfile({...profile(),[input.id]:input.value});}
 function handleSubmit(event){event.preventDefault();if(/profile|onboarding/i.test(event.target.id))saveSettings();else send();}
 function handleKey(event){const education=event.target.closest('#educationTrigger,#educationToggle,#educationMenu,#educationDropdown');if(education){const trigger=q('#educationTrigger,#educationToggle'),menu=q('#educationMenu,#educationDropdown'),options=menu?[...menu.querySelectorAll('[role=option]')]:[];if(event.key==='Escape'){event.preventDefault();show(menu,false);trigger?.setAttribute('aria-expanded','false');trigger?.focus();return;}if(['ArrowDown','ArrowUp','Home','End'].includes(event.key)){event.preventDefault();show(menu,true);trigger?.setAttribute('aria-expanded','true');const index=options.indexOf(event.target.closest('[role=option]'));const next=event.key==='Home'?0:event.key==='End'?options.length-1:index<0?(event.key==='ArrowUp'?options.length-1:0):(index+(event.key==='ArrowDown'?1:-1)+options.length)%options.length;options[next]?.focus();return;}}if(event.key==='Escape'){if(location.pathname==='/history'&&w().views.historyReturn){go(w().views.historyReturn);return;}closePanels();show('modal-backdrop',false);show('attachment-popover',false);show('unsaved-modal',false);return;}if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='k'){event.preventDefault();search();return;}if((event.metaKey||event.ctrlKey)&&event.key.toLowerCase()==='n'){event.preventDefault();newSession();return;}if(event.key==='Enter'&&!event.shiftKey&&!event.isComposing&&event.target.matches('textarea,input')&&!/teach|name|Age|course|field|search|age|situation|detail/i.test(event.target.id+' '+event.target.placeholder)){event.preventDefault();send();return;}if(event.target.matches('[data-concept]')&&['ArrowLeft','ArrowRight','ArrowUp','ArrowDown'].includes(event.key)){event.preventDefault();const nodes=all('[data-concept]').filter(visible);const direction=['ArrowLeft','ArrowUp'].includes(event.key)?-1:1;nodes[(nodes.indexOf(event.target)+direction+nodes.length)%nodes.length]?.focus();return;}if(event.target.matches('[data-concept]')&&['Enter',' '].includes(event.key)){event.preventDefault();graphNode(event.target);return;}if(openPanels.length&&event.key==='Tab'){const panelEl=openPanels.find(x=>x.getAttribute('role')==='dialog');const nodes=panelEl?[...panelEl.querySelectorAll('button,input,textarea,select,a[href],[tabindex="0"]')].filter(visible):[];const first=nodes[0],last=nodes[nodes.length-1];if(event.shiftKey&&document.activeElement===first){event.preventDefault();last?.focus();}else if(!event.shiftKey&&document.activeElement===last){event.preventDefault();first?.focus();}}if(['ArrowLeft','ArrowRight'].includes(event.key)&&event.target.matches('button[aria-pressed]')){const siblings=[...event.target.parentElement.querySelectorAll(':scope > button')];let n=(siblings.indexOf(event.target)+(event.key==='ArrowRight'?1:-1)+siblings.length)%siblings.length;siblings[n]?.focus();}}
 function backdrops(event){if(['drawer-backdrop','nav-backdrop','drawer-scrim','drawer-veil','adjust-sheet-backdrop','attempt-drawer-backdrop','modal-backdrop'].includes(event.target.id))closePanels();}
 all('input,textarea,select').forEach((el,i)=>{if(!el.id)el.id='input-'+screenId+'-'+i;});
 for(const input of all('input,textarea,select'))if(!input.getAttribute('aria-label')&&!input.labels?.length)input.setAttribute('aria-label',input.placeholder||input.id||'Learning input');
 for(const a of all('a[data-path]'))if(aliases[a.dataset.path])a.setAttribute('href',aliases[a.dataset.path]);
 const remote=reference?null:backendWorkspace({root,workspace:w,mode:()=>mode,persist,render:()=>{if(!root.isConnected)return;const t=q('[data-runtime-log]');if(t)t.replaceChildren();restoreLog();renderHistory();renderResources();preferences();preserveDrafts();renderLearning();root.dataset.hasCourse=String(Boolean(remote.learning?.course));renderGraph(root,remote.learning);renderConnectedPanels({root,remote,mode:()=>mode,workspace:w,persist});statusLocal();}});
 function renderLearning(){
  if(!['/study/lesson','/lesson','/approach','/exam'].includes(location.pathname))return;
  const learning=remote?.learning;if(!learning?.course){q('[data-backend-learning]')?.remove();return;}
  let host=q('[data-backend-learning]');if(!host){host=nodeText('section','','stitch-connected');host.dataset.backendLearning='true';host.addEventListener('click',event=>event.stopPropagation());host.addEventListener('keydown',event=>event.stopPropagation());q('main')?.prepend(host);}
  host.replaceChildren(nodeText('h2',learning.course.title));
  if(learning.task&&!['/plan','/knowledge-graph','/target'].includes(location.pathname)){
   host.append(nodeText('p',learning.task.prompt));const answer=document.createElement('textarea');answer.id='backend-teach-answer-'+learning.task.id;answer.value=w().drafts[key+':'+answer.id]||'';answer.dataset.backendAnswer='true';answer.setAttribute('aria-label','Answer the saved learning question');answer.maxLength=5000;host.append(answer);
   if(learning.task.choices){const choices=nodeText('fieldset');choices.append(nodeText('legend','Choose an answer'));for(const option of learning.task.choices){const label=nodeText('label'),radio=document.createElement('input');radio.type='radio';radio.name='backend-choice';radio.value=option;label.append(radio,document.createTextNode(option));choices.append(label);}host.append(choices);}
   const minutes=document.createElement('input');minutes.id='backend-minutes-'+learning.task.id;minutes.type='number';minutes.min='0';minutes.max='600';minutes.value=w().drafts[key+':'+minutes.id]||'0';minutes.dataset.backendMinutes='true';minutes.setAttribute('aria-label','Minutes spent on this question');host.append(minutes);
   const submit=nodeText('button','Check saved question');submit.type='button';submit.addEventListener('click',()=>remote.grade(host.querySelector('input[name=backend-choice]:checked')?.value||answer.value));host.append(submit);
   const format=nodeText('button','Use multiple-choice answers');format.type='button';format.addEventListener('click',()=>remote.choices());host.append(format);
   if(!learning.task.show_lesson){const help=nodeText('button','Show a worked example');help.type='button';help.addEventListener('click',()=>remote.run(async()=>{await remote.reveal();await remote.refreshLearning();}));host.append(help);}
   else{const concept=learning.course.concepts[learning.task.concept];host.append(nodeText('h3',concept.title),nodeText('p',concept.explanation));const steps=nodeText('ol');for(const step of concept.steps)steps.append(nodeText('li',step));host.append(steps);const sources=nodeText('details');sources.append(nodeText('summary','Supporting source passages'));for(const reference of concept.references)sources.append(nodeText('blockquote',reference.quote));host.append(sources);}
   const animation=nodeText('button','Generate lesson animation');animation.type='button';animation.addEventListener('click',()=>remote.animation());host.append(animation);
   const question=nodeText('button','Ask about this lesson');question.type='button';question.addEventListener('click',()=>dialog({title:'Ask about your source material',kind:'text',submit:value=>remote.explain('question','',value)}));host.append(question);
  }else if(learning.needs_advance&&!['/plan','/knowledge-graph','/target'].includes(location.pathname)){const button=nodeText('button','Prepare next question');button.type='button';button.addEventListener('click',()=>remote.advance());host.append(button);}
  const report=nodeText('button','Report a lesson issue');report.type='button';report.addEventListener('click',()=>dialog({title:'Report a lesson issue',kind:'text',submit:value=>{if(value.trim().length<3||value.length>1000)return 'Write a note between 3 and 1,000 characters.';return remote.run(async()=>{await remote.post(`/sessions/${learning.id}/report`,{note:value},learning.revision);await remote.refreshLearning();notice('Issue report saved.');});}}));host.append(report,nodeText('p',`${learning.attempt_count} saved attempts | ${learning.remaining_minutes} minutes remaining`));
 }
 if(!reference){window.addEventListener('solve:new-session',newSession);cleanupFns.push(()=>window.removeEventListener('solve:new-session',newSession));}
 root.addEventListener('click',handleClick);root.addEventListener('click',backdrops);root.addEventListener('input',handleInput);root.addEventListener('submit',handleSubmit);root.addEventListener('keydown',handleKey);
 const fileChange=async e=>{if(!reference&&e.target.matches('input[type=file]')){await remote.files([...e.target.files||[]]);e.target.value='';return;}if(!e.target.matches('input[type=file]'))return;const items=[...e.target.files||[]];if(items.length>10)return notice('Add at most 10 files at a time.');for(const f of items){const limit=Number(root.textContent.match(/Max\s*(\d+)\s*MB/i)?.[1]||25);if(f.size>limit*1024*1024){notice(f.name+' exceeds '+limit+' MB.');continue;}if(!/\.(pdf|docx|png|jpe?g|txt|md|py|js|ts|c|cpp)$/i.test(f.name)){notice('Unsupported file type: '+f.name);continue;}w().resources.push({name:f.name,type:f.type||'file',size:f.size,url:''});}persist();renderResources();e.target.value='';};root.addEventListener('change',fileChange);
 preferences();const initialComposer=composer();const sendControl=q('#send-action-btn,#send-button,#chat-send-btn,#btn-send-home,#send-goal-btn');if(sendControl&&initialComposer?.value.trim())sendControl.disabled=false;if(!reference){saveState(state);const account=q('#section-account,#account-section');if(account)account.prepend(nodeText('p','Profile is saved to your account. Google sign-in requires server configuration.','stitch-demo-note'));const p=profile();if(p.name&&root.dataset.backendReady==='true')for(const span of all('aside span'))if(span.textContent.trim()==='Alex Rivera')span.textContent=p.name;if(root.dataset.backendReady==='true'&&w().goal&&location.pathname.startsWith('/study')){for(const h of all('h1'))if(/Python foundations/i.test(h.textContent))h.textContent=w().goal;}}if(!reference&&mode==='study'){if(q('#state-study-overview'))switchView('state-study-overview');if(q('#view-python-goal'))switchView('view-python-goal');if(q('#view-study'))group(['view-chat','view-study'],'view-study');}preserveDrafts();restoreLog();if(w().resources.length&&!reference)renderResources();wireGraph();if(!reference&&location.pathname==='/history')show('modal-backdrop',false);renderHistory();statusLocal();
 if(!reference){const first=root.firstElementChild;if(first&&first.dataset.uiChrome!=='hidden'&&/^CURRENT â€”/.test(first.textContent.trim())){root.dataset.hasSpecBanner='true';const height=first.getBoundingClientRect().height;root.style.setProperty('--spec-banner-height',height+'px');}if(location.pathname==='/welcome/transition'){delay(()=>go('/chat'),profile().reducedMotion?0:3500);}}
 return ()=>{remote?.dispose();capture();timers.forEach(clearTimeout);cleanupFns.forEach(fn=>fn());root.removeEventListener('click',handleClick);root.removeEventListener('click',backdrops);root.removeEventListener('input',handleInput);root.removeEventListener('submit',handleSubmit);root.removeEventListener('keydown',handleKey);root.removeEventListener('change',fileChange);document.body.style.overflow='';};
}
