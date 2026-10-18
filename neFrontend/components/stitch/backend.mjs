import {api,ensureOwner} from '../../lib/api.mjs';
import {notice,dialog,profile,saveProfile} from './state.mjs';
import {translateInterface} from '../../lib/interface-language.mjs';
import {demoId} from '../../lib/demo-id.mjs';
import {renderAnimation,renderVisual} from './connected-panels.mjs';

export function backendWorkspace({root,workspace,mode,persist,render}) {
 const controller=new AbortController();let busy=false,learning=null,account,capabilities={},goals=[],cards=[],reminders=[],sessions=[],recorder,stream,recordingTimer,player,generation;
 root.setAttribute('aria-busy','true');
 root.dataset.backendReady='false';
 const call=(path,options={})=>api(path,{...options,signal:controller.signal});
 const post=(path,body,revision)=>call(path,{method:'POST',body,revision});
 const ready=(async()=>{
  await ensureOwner();[account,capabilities]=await Promise.all([call('/me'),call('/capabilities')]);const p=account.profile;
  saveProfile({...profile(),name:p.name,age:p.age??'',field:p.course,education:p.education,detail:p.detail,audioSpeed:p.playback_speed,reducedMotion:p.motion==='reduced',largeText:p.text_size==='large',interfaceLanguage:p.interface_language,explanationLanguage:p.explanation_language});
  const w=workspace();
  if(w.views['backend-owner']!==account.id){if(w.views['backend-owner']){w.drafts={};w.goal=null;}
   if(!w.views['backend-owner']&&w.sessions.length)try{sessionStorage.setItem('solve-stitch-before-backend-v1',JSON.stringify(w));}catch{}
   w.activeId=null;w.resources=[];w.evidence=[];w.cards=[];w.plan=[];delete w.views['backend-session'];delete w.views['backend-goal'];
  }
  w.views['backend-owner']=account.id;
  const list=await call(`/conversations?mode=${mode()}&status=all&limit=100`);
  w.sessions=list.items.map(s=>({...s,messages:[],updatedAt:s.updated*1000}));
  const requested=new URLSearchParams(location.search).get('thread');
  if(requested){const saved=await call('/conversations/'+encodeURIComponent(requested));if(saved.mode!==mode())throw Error('This conversation belongs to the other workspace.');w.activeId=saved.id;w.goal=saved.title;if(saved.session_id)w.views['backend-session']=saved.session_id;else delete w.views['backend-session'];if(!w.sessions.some(s=>s.id===saved.id))w.sessions.push({...saved,updatedAt:saved.updated*1000});}
  if(!w.sessions.some(s=>s.id===w.activeId))w.activeId=null;
  if(w.activeId)Object.assign(w.sessions.find(s=>s.id===w.activeId),await call('/conversations/'+w.activeId));
  if(!requested&&!w.views['backend-session']&&w.views['new-journey']!=='true'){const sessions=await call(`/sessions?workspace=${mode()}`);if(sessions.length)w.views['backend-session']=sessions[0].id;}
  if(w.views['backend-session'])try{learning=await call(`/sessions/${w.views['backend-session']}?read_only=true`);}catch(error){if(error.status!==404)throw error;delete w.views['backend-session'];}
  if(learning?.course){const evidence=await call(`/sessions/${learning.id}/evidence?limit=100`);w.evidence=evidence.items.map(a=>({concept:learning.course.concepts[a.concept].title,question:a.prompt,answer:a.answer,correct:a.status==='correct',hinted:a.assisted,kind:a.phase==='teach_back'?'teachback':'practice',at:a.at*1000}));w.goal=learning.goal;}
  if(learning?.sources)w.resources=learning.sources.map(s=>({id:s.id,name:s.title,type:'source',content:s.passages.map(p=>p.text).join('\n'),size:0}));
  else if(w.activeId){const resources=await call(`/conversations/${w.activeId}/attachments`);w.resources=resources.map(r=>({id:r.id,name:r.filename,type:'attachment',content:r.text,size:r.bytes||0}));}
  await refreshRecords();
  if(controller.signal.aborted)return;
  root.dataset.backendReady='true';root.setAttribute('aria-busy','false');persist();render();
  if(location.pathname==='/welcome'){
   const original=root.querySelector('#googleSignInBtn');
   if(original&&!root.querySelector('[data-guest-continue]')){const guest=original.cloneNode(false);guest.removeAttribute('id');guest.dataset.guestContinue='true';guest.type='button';guest.textContent='Continue as guest';guest.addEventListener('click',()=>location.assign('/chat'));original.after(guest);}
  }
  translateInterface(root,p.interface_language,controller.signal).catch(error=>{if(!controller.signal.aborted)notice('Interface translation unavailable. English controls remain usable: '+error.message);});
 })();
 ready.catch(error=>{if(!controller.signal.aborted){
  root.setAttribute('aria-busy','false');
  const main=root.querySelector('main');
  if(main){
   const panel=document.createElement('section');panel.className='stitch-connected stitch-load-error';panel.setAttribute('role','alert');
   const heading=document.createElement('h1');heading.textContent='Your workspace could not open';
   const message=document.createElement('p');message.textContent=error.message;
   const retry=document.createElement('button');retry.type='button';retry.textContent='Try again';retry.addEventListener('click',event=>{event.stopPropagation();location.reload();});
   panel.append(heading,message,retry);main.replaceChildren(panel);
  }else notice(error.message);
  root.dataset.backendReady='error';
 }});
 function setBusy(value){
  busy=value;root.dataset.backendBusy=String(value);root.setAttribute('aria-busy',String(value));
  for(const button of root.querySelectorAll?.('[data-connected-records] button,[data-backend-learning] button,#cta-generate-approach')||[]){
   if(value&&!button.disabled){button.dataset.requestDisabled='true';button.disabled=true;}
   else if(!value&&button.dataset.requestDisabled){button.disabled=false;delete button.dataset.requestDisabled;}
  }
 }
 async function run(action){if(busy)return notice('Wait for the current request to finish.');setBusy(true);try{await ready;setBusy(true);return await action();}catch(error){if(!controller.signal.aborted)notice(error.message);}finally{setBusy(false);}}
 async function translate(language){try{await translateInterface(root,language,controller.signal);}catch(error){if(!controller.signal.aborted)notice('Interface translation unavailable. English controls remain usable: '+error.message);}}
 async function conversation(title){
  await ready;const w=workspace();let s=w.sessions.find(s=>s.id===w.activeId);
  if(s){
   try{
    if(learning&&w.views['attach-learning']===learning.id){
     const current=await call('/conversations/'+s.id);
     Object.assign(s,await call('/conversations/'+s.id,{method:'PATCH',revision:current.revision,body:{session_id:learning.id}}));
     delete w.views['attach-learning'];persist();
    }
   }catch(err){
    if(err?.status===404){w.sessions=w.sessions.filter(item=>item.id!==s.id);w.activeId=null;s=null;}
    else throw err;
   }
  }
  if(!s){
   s=await post('/conversations',{mode:mode(),title:title?.slice(0,120)||w.goal?.slice(0,120)||'New conversation',...(learning?{session_id:learning.id}:{})});
   s.messages=[];s.updatedAt=Date.now();w.sessions.unshift(s);w.activeId=s.id;delete w.views['attach-learning'];persist();
  }
  return s;
 }
 async function refreshConversation(){const w=workspace(),s=w.sessions.find(s=>s.id===w.activeId);if(s){Object.assign(s,await call('/conversations/'+s.id));s.updatedAt=s.updated*1000;}persist();render();}
 async function send(text,onDelta,regenerate_id){return run(async()=>{
  if(!text.trim()||text.length>5000)throw Error('Write a message of up to 5,000 characters.');
  root.dispatchEvent(new CustomEvent('solve:progress',{detail:'Generating your explanation'}));
  const s=await conversation(text),operation_id=demoId();
  generation=new AbortController();
  const response=await fetch(`/api/conversations/${s.id}/messages`,{method:'POST',credentials:'same-origin',cache:'no-store',signal:generation.signal,headers:{'Content-Type':'application/json'},body:JSON.stringify({text,operation_id,...(regenerate_id?{regenerate_id}:{})})});
  if(!response.ok){const error=await response.json();throw Error(typeof error.detail==='string'?error.detail:'Message could not be saved.');}
  const answer={role:'assistant',text:'',operation_id,status:'generating'};if(!regenerate_id)s.messages.push({role:'user',text,operation_id});s.messages.push(answer);onDelta?.(s.messages);persist();
  const reader=response.body.getReader(),decoder=new TextDecoder();let buffer='';
  while(true){const {value,done}=await reader.read();buffer+=decoder.decode(value,{stream:!done});let boundary;
   while((boundary=buffer.indexOf('\n\n'))!==-1){const event=buffer.slice(0,boundary);buffer=buffer.slice(boundary+2);for(const line of event.split('\n').filter(x=>x.startsWith('data: '))){const data=JSON.parse(line.slice(6));if(data.type==='delta')answer.text+=data.text;if(data.type==='error'){answer.error=data.message;notice(data.message);}if(data.message_id)answer.id=data.message_id;if(data.type==='done')answer.status='complete';if(data.type==='error')answer.status='error';onDelta?.(s.messages);}}
   if(done)break;
  }
  await refreshConversation();window.dispatchEvent(new Event('solve:history-changed'));
 });}
 async function intake(goal){await ready;if(!learning){learning=await post('/sessions',{goal:goal||workspace().goal||'Study my material',level:'some',minutes:120,target:'',deadline:''});learning=await call(`/sessions/${learning.id}`,{method:'PATCH',revision:learning.revision,body:{workspace:mode()}});workspace().views['backend-session']=learning.id;delete workspace().views['new-journey'];workspace().goal=learning.goal;persist();}return learning;}
 async function updateIntake(details){return run(async()=>{const current=await intake(details.goal);learning=await call(`/sessions/${current.id}/intake`,{method:'PUT',revision:current.revision,body:details});workspace().goal=learning.goal;persist();render();notice('Study details saved.');return learning;});}
 async function refreshLearning(){if(!learning)return;learning=await call(`/sessions/${learning.id}?read_only=true`);if(learning.course){const data=await call(`/sessions/${learning.id}/evidence?limit=100`);workspace().evidence=data.items.map(a=>({concept:learning.course.concepts[a.concept].title,question:a.prompt,answer:a.answer,correct:a.status==='correct',hinted:a.assisted,kind:a.phase==='teach_back'?'teachback':'practice',at:a.at*1000}));}persist();render();}
 async function refreshRecords(){
  const page=location.pathname;
  sessions=await call(`/sessions?workspace=${mode()}`);
  if(mode()==='study'){
   const [active,archived]=await Promise.all([call('/goals'),call('/goals?archived=true')]);goals=[...active,...archived];
   if(!goals.some(goal=>goal.id===workspace().views['backend-goal'])){
    delete workspace().views['backend-goal'];
    const linked=active.find(goal=>goal.session_ids.includes(learning?.id));if(linked)workspace().views['backend-goal']=linked.id;
   }
  }
  if(page==='/practice')cards=await call('/cards');
  if(page==='/settings')reminders=await call('/notifications');
 }
 async function openSession(id){
  const saved=await call(`/sessions/${id}?read_only=true`);if((saved.workspace||'study')!==mode())throw Error('This session belongs to the other workspace.');
  learning=saved;workspace().views['backend-session']=id;delete workspace().views['new-journey'];workspace().activeId=null;workspace().goal=learning.goal;
  workspace().resources=learning.sources.map(source=>({id:source.id,name:source.title,type:'source',content:source.passages.map(p=>p.text).join('\n'),size:0}));
  workspace().evidence=[];await refreshLearning();
 }
 async function openGoal(id){
  const goal=await call('/goals/'+encodeURIComponent(id));workspace().views['backend-goal']=goal.id;workspace().goal=goal.title;
  const linked=[...goal.session_ids].reverse().find(id=>sessions.some(session=>session.id===id));
  if(linked)await openSession(linked);else{learning=null;delete workspace().views['backend-session'];workspace().resources=[];workspace().evidence=[];}
  persist();render();return goal;
 }
 async function demo(){return run(async()=>{let saved=await post('/demo');saved=await call('/sessions/'+saved.id,{method:'PATCH',revision:saved.revision,body:{workspace:mode()}});await refreshRecords();await openSession(saved.id);return saved;});}
 async function files(items){return run(async()=>{for(const file of items){if(!(file instanceof File))throw Error('Select the original file again; metadata cannot be uploaded.');const body=new FormData();body.append('file',file);let resource;
  if(['/assessment','/study/assessment','/study/new'].includes(location.pathname)){const s=await intake();learning=await post(`/sessions/${s.id}/sources/file`,body,s.revision);const source=learning.sources.at(-1);resource={id:source.id,name:source.title,type:'source',content:source.passages.map(p=>p.text).join('\n'),size:file.size};if(workspace().activeId)workspace().views['attach-learning']=learning.id;}
  else{
   let s=await conversation(),saved;
   try{saved=await post(`/conversations/${s.id}/attachments`,body);}
   catch(err){
    if(err?.status===404){
     const w=workspace();w.sessions=w.sessions.filter(item=>item.id!==s.id);w.activeId=null;persist();
     s=await conversation();saved=await post(`/conversations/${s.id}/attachments`,body);
    }else throw err;
   }
   resource={id:saved.id,name:file.name,type:'attachment',content:saved.text,size:file.size};
  }
  workspace().resources.push(resource);persist();render();
  const row=[...root.querySelectorAll('[data-resource-id]')].find(element=>element.dataset.resourceId===resource.id);
  if(row){row.classList.add('stitch-resource-enter');row.addEventListener('animationend',()=>row.classList.remove('stitch-resource-enter'),{once:true});}
 }notice('Material uploaded and extracted. Review it before creating a plan.');});}
 async function link(url){return run(async()=>{const s=await intake();learning=await post(`/sessions/${s.id}/sources/url`,{url},s.revision);const source=learning.sources.at(-1);workspace().resources.push({id:source.id,name:source.title,type:'source',url,content:source.passages.map(p=>p.text).join('\n'),size:0});persist();render();if(workspace().activeId)workspace().views['attach-learning']=learning.id;persist();notice('Source text saved.');});}
 async function searchSources(query=''){return run(async()=>{const s=await intake();notice('Searching the internet & scraping study material with BeautifulSoup...');const q=(query||s.goal||workspace().goal||'').trim();learning=await post(`/sessions/${s.id}/sources/search`,{query:q,limit:3},s.revision);workspace().resources=learning.sources.map(source=>({id:source.id,name:source.title,type:'source',url:source.url,content:source.passages.map(p=>p.text).join('\n'),size:0}));persist();render();if(workspace().activeId)workspace().views['attach-learning']=learning.id;persist();const count=learning.scraped_sources?.length||learning.sources.length;notice(`Scraped ${count} online study sources using BeautifulSoup.`);return learning;});}
 async function plan(){return run(async()=>{let s=await intake();const hours=Object.entries(workspace().drafts).filter(([key])=>key.endsWith(':hours')).at(-1)?.[1];
  if(!s.course){const form=root.querySelector('[data-study-intake]'),values=form?Object.fromEntries(new FormData(form)):{};s=await call(`/sessions/${s.id}/intake`,{method:'PUT',revision:s.revision,body:{goal:values.goal||workspace().goal||s.goal,level:values.level||s.level,minutes:values.minutes?Number(values.minutes):hours?Math.min(600,Math.max(5,Math.round(Number(hours)*60))):s.minutes,target:values.target??s.target??'',deadline:values.deadline??s.deadline??''}});learning=s;}
  if(!s.sources.length)throw Error('Upload material, add a public link, or paste notes before creating a source-backed plan.');notice('Creating your learning approach. Your material is saved.');learning=await post(`/sessions/${s.id}/start`,{confirmed:true},s.revision);workspace().plan=learning.ranked_topics.map(t=>({title:learning.course.concepts[t.concept].title,minutes:t.minutes}));
  if(mode()==='study'&&!workspace().views['backend-goal']){const goal=await post('/goals',{title:workspace().goal||s.goal,weekly_hours:4,months:3,timezone:Intl.DateTimeFormat().resolvedOptions().timeZone,instructions:workspace().drafts.availability||''});workspace().views['backend-goal']=goal.id;await post(`/goals/${goal.id}/sessions`,{session_id:learning.id},goal.revision);}
  persist();render();return learning;});}
 async function grade(answer){return run(async()=>{if(recorder?.state==='recording')throw Error('Stop recording and review the transcript first.');if(!learning?.task)throw Error('Create a source-backed learning plan before submitting an assessment.');const audioId=workspace().views['audio:'+learning.task.id];const body={task_id:learning.task.id,answer,spent_minutes:Number(root.querySelector('[data-backend-minutes]')?.value||0),...(audioId?{audio_id:audioId}:{})},fingerprint=JSON.stringify(body);if(workspace().views['attempt-body']!==fingerprint){workspace().views['attempt-body']=fingerprint;workspace().views['attempt-key']=demoId();persist();}
  learning=await call(`/sessions/${learning.id}/attempt`,{method:'POST',body,revision:learning.revision,operationId:workspace().views['attempt-key']});delete workspace().views['attempt-key'];delete workspace().views['attempt-body'];notice(learning.operation.result.feedback.explanation);await refreshLearning();return learning;});}
 async function explain(kind,language='',question=''){return run(async()=>{if(!learning?.task)throw Error('Open a source-backed learning lesson first.');const result=await post(`/sessions/${learning.id}/explain/${learning.task.concept}`,{kind,language,question},learning.revision);await refreshLearning();dialog({title:'SOLVE explanation',kind:'info',description:result.text});});}
 async function reveal(){if(learning?.task&&!learning.task.assisted)learning=await post(`/sessions/${learning.id}/help`,{task_id:learning.task.id},learning.revision);return learning;}
 async function bookmark(){return run(async()=>{if(!learning?.course)throw Error('Open a source-backed lesson first.');await reveal();const index=learning.task?.concept||0,concept=learning.course.concepts[index];await post('/cards',{front:concept.title,back:concept.explanation,session_id:learning.id,concept:index});notice('Flashcard saved.');});}
 async function feedback(helpful,messageId){return run(async()=>{if(!messageId&&learning?.task)await post(`/sessions/${learning.id}/lesson-feedback`,{helpful,concept:learning.task.concept});else{const s=await conversation(),message=s.messages.filter(m=>m.role==='assistant'&&m.status==='complete'&&(!messageId||m.id===messageId)).at(-1);if(!message)throw Error('Choose a completed response first.');await post(`/conversations/${s.id}/messages/${message.id}/feedback`,{helpful});}notice('Feedback saved.');});}
 async function regenerate(messageId){const s=await conversation(),answer=s.messages.filter(m=>m.role==='assistant'&&(!messageId||m.id===messageId)).at(-1),question=s.messages.find(m=>m.id===answer?.parent_id)||s.messages.find(m=>m.role==='user'&&m.operation_id===answer?.operation_id);if(!question)return notice('Choose a saved response first.');await send(question.text,()=>render(),answer.id);}
 async function speech(messageId){return run(async()=>{const s=workspace().sessions.find(s=>s.id===workspace().activeId),text=(messageId?s?.messages.find(m=>m.id===messageId&&m.role==='assistant'&&m.status==='complete')?.text:learning?.course?.concepts[learning.task?.concept||0]?.explanation||s?.messages.filter(m=>m.role==='assistant'&&m.status==='complete').at(-1)?.text);if(!text)throw Error('Choose a completed response or learning lesson.');await reveal();const result=await post('/media/speech',{text:text.slice(0,6000)});player?.pause();player=new Audio(result.url);player.playbackRate=account.profile.playback_speed;await player.play();});}
 async function visual(){return run(async()=>{const s=await conversation(),message=s.messages.filter(m=>m.role==='assistant'&&m.status==='complete').at(-1);if(!message)throw Error('Choose a completed response before creating its visual.');const scene=await post(`/conversations/${s.id}/visual/${message.id}`);renderVisual(root.querySelector('[data-runtime-log]')||root.querySelector('main'),scene);});}
 async function delivery(value){const saved=await run(async()=>{const s=await conversation(),current=await call('/conversations/'+s.id),saved=await call('/conversations/'+s.id,{method:'PATCH',revision:current.revision,body:{delivery:value}});Object.assign(s,saved);persist();return saved;});if(saved&&value==='visual')await visual();if(saved&&value==='audio')await speech();}
 async function scope(value){return run(async()=>{const s=await conversation(),current=await call('/conversations/'+s.id);Object.assign(s,await call('/conversations/'+s.id,{method:'PATCH',revision:current.revision,body:{scope:value}}));persist();notice(value+' saved.');});}
 async function choices(){return run(async()=>{if(!learning?.task)throw Error('Open a learning question first.');await post(`/sessions/${learning.id}/choices`,undefined,learning.revision);await refreshLearning();});}
 async function advance(){return run(async()=>{if(!learning)throw Error('Open a learning session first.');learning=await post(`/sessions/${learning.id}/advance`,undefined,learning.revision);await refreshLearning();return learning;});}
 async function record(){return run(async()=>{if(recorder?.state==='recording'){recorder.stop();return;}stream=await navigator.mediaDevices.getUserMedia({audio:true});recorder=new MediaRecorder(stream);const chunks=[];recorder.ondataavailable=e=>chunks.push(e.data);recorder.onstop=()=>{clearTimeout(recordingTimer);stream.getTracks().forEach(t=>t.stop());run(async()=>{const form=new FormData();form.append('file',new Blob(chunks,{type:recorder.mimeType}),'recording.webm');if(learning)form.append('session_id',learning.id);const result=await post('/media/transcribe',form);if(learning?.task){workspace().views['audio:'+learning.task.id]=result.id;persist();}const input=root.querySelector('[data-backend-answer],#teach-textarea,#teach-typed-input,textarea');if(input)input.value=result.transcript;notice('Review and edit the transcript before submitting.');});};recorder.start();recordingTimer=setTimeout(()=>{if(recorder.state==='recording')recorder.stop();},119000);notice('Recording. Press the microphone again to stop.');});}
 async function login(){return run(async()=>{const config=await call('/auth/config');if(!config.google_enabled)throw Error(config.reason);const challenge=await post('/auth/challenge');if(!window.google?.accounts?.id)await new Promise((resolve,reject)=>{const script=document.createElement('script');script.src='https://accounts.google.com/gsi/client';script.onload=resolve;script.onerror=()=>reject(Error('Google sign-in could not load.'));document.head.append(script);});window.google.accounts.id.initialize({client_id:config.client_id,nonce:challenge.nonce,callback:result=>run(async()=>{await post('/auth/google',{credential:result.credential,claim_guest:true});location.assign('/onboarding');})});const host=document.createElement('div');root.querySelector('#googleSignInBtn')?.after(host);window.google.accounts.id.renderButton(host,{theme:'outline',size:'large'});});}
 async function logout(){return run(async()=>{const registration=await navigator.serviceWorker?.getRegistration();const subscription=await registration?.pushManager?.getSubscription();if(subscription){const bytes=new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(subscription.endpoint)));await call('/push/subscriptions/'+[...bytes].map(b=>b.toString(16).padStart(2,'0')).join(''),{method:'DELETE'});await subscription.unsubscribe();}await post('/auth/logout');sessionStorage.removeItem('solve-stitch-workspaces-v1');sessionStorage.removeItem('solve-stitch-before-backend-v1');localStorage.removeItem('solve-stitch-profile-v1');location.assign('/welcome');});}
 async function stop(){try{await ready;const s=workspace().sessions.find(s=>s.id===workspace().activeId);if(s)await post(`/conversations/${s.id}/stop`);generation?.abort();player?.pause();await refreshConversation();}catch(error){notice(error.message);}}
 async function search(text=''){return run(async()=>{const data=await call(`/conversations?mode=${mode()}&status=all&limit=100&q=${encodeURIComponent(text)}`);workspace().sessions=data.items.map(s=>({...s,messages:s.matches.map(m=>({role:'user',text:m.excerpt})),updatedAt:s.updated*1000}));persist();render();});}
 async function preference(p){return run(async()=>{const current=await call('/me'),body={...current.profile};delete body.revision;body.motion=p.reducedMotion?'reduced':'device';body.text_size=p.largeText?'large':'standard';body.detail=/concise/i.test(p.detail)?'concise':/detailed/i.test(p.detail)?'detailed':body.detail;const speed=parseFloat(String(p.audioSpeed));if([.75,1,1.25,1.5].includes(speed))body.playback_speed=speed;await call('/me/profile',{method:'PUT',body,revision:current.profile.revision});notice('Preference saved.');});}
 async function deleteResource(resource){if(!resource.id)throw Error('Reload saved resources before removing this item.');if(learning?.sources.some(source=>source.id===resource.id))learning=await call(`/sessions/${learning.id}/sources/${resource.id}`,{method:'DELETE',revision:learning.revision});else await call(`/media/${resource.id}`,{method:'DELETE'});workspace().resources=workspace().resources.filter(item=>item!==resource);persist();}
 async function removeResource(resource){return run(async()=>{await deleteResource(resource);render();});}
 async function clearResources(){return run(async()=>{try{for(const resource of [...workspace().resources])await deleteResource(resource);}finally{render();}});}
 async function adjust(){return run(async()=>{const gid=workspace().views['backend-goal'];if(gid){const goal=await call('/goals/'+gid);await call('/goals/'+gid,{method:'PATCH',revision:goal.revision,body:{title:workspace().goal||goal.title,instructions:workspace().drafts.availability||goal.instructions}});}if(learning?.course){const hours=Object.entries(workspace().drafts).filter(([key])=>key.endsWith(':hours')).at(-1)?.[1];learning=await post(`/sessions/${learning.id}/plan`,{remaining_minutes:hours?Math.min(600,Math.max(0,Math.round(Number(hours)*60))):learning.remaining_minutes},learning.revision);}persist();render();notice('Plan changes saved.');});}
 async function notifications(){return run(async()=>{const items=await call('/notifications');dialog({title:'Your reminders',kind:'info',description:items.length?items.map(item=>item.title+(item.read?' · Read':'')).join('\n'):'No reminders are due. Add a reminder from My Plan.'});});}
 async function notes(text){return run(async()=>{const s=await intake();learning=await post(`/sessions/${s.id}/sources/text`,{title:'Pasted notes',text},s.revision);workspace().resources=learning.sources.map(source=>({id:source.id,name:source.title,type:'source',content:source.passages.map(p=>p.text).join('\n'),size:0}));persist();render();if(workspace().activeId)workspace().views['attach-learning']=learning.id;persist();notice('Notes saved.');});}
 async function findResources(){return run(async()=>{const s=await intake();const q=s.goal||workspace().goal||'';dialog({title:'Search & Scrape Web Study Material (BeautifulSoup)',kind:'text',value:q,submit:async(query)=>{if(!query.trim())return 'Enter an educational topic to search.';await searchSources(query.trim());}});});}
 const responseJobs=new Map();
 async function responseAnimation(messageId,retry=false){
  const cached=responseJobs.get(messageId);
  const host=()=>root.querySelector('[data-message-id="'+messageId+'"] [data-response-animation]');
  const status=text=>{const target=host();if(target){target.replaceChildren();const label=document.createElement('p');label.className='stitch-solving';label.setAttribute('role','status');label.textContent='... solving · '+text;target.append(label);}};
  const show=result=>{const target=host();if(target){target.replaceChildren();renderAnimation(target,result,profile());const note=document.createElement('p');note.className='stitch-animation-source';note.textContent='Visualized from this AI explanation.';target.append(note);}};
  if(cached&&!retry){if(typeof cached==='string')status(cached);else show(cached);return;}responseJobs.set(messageId,'Preparing your visual explanation');
  try{
   await ready;const session=workspace().sessions.find(s=>s.id===workspace().activeId);if(!session)return;
   const path='/conversations/'+session.id+'/animations/'+messageId;status('Preparing your visual explanation');let result=await post(path);
   const labels={queued:'Waiting for the animation renderer',planning:'Planning the worked visual steps',checking:'Checking the visual steps against the explanation',rendering:'Rendering the Manim animation'};
   for(let count=0;count<360&&labels[result.status];count++){
    responseJobs.set(messageId,labels[result.status]);status(labels[result.status]);await new Promise(resolve=>{const done=()=>{controller.signal.removeEventListener('abort',abort);resolve();};const timer=setTimeout(done,2000);const abort=()=>{clearTimeout(timer);done();};controller.signal.addEventListener('abort',abort,{once:true});});
    if(controller.signal.aborted)return;result=await call(path);
   }
   if(result.status!=='ready')throw Error(result.error||'The animation is still preparing. Check again shortly.');
   responseJobs.set(messageId,result);show(result);
  }catch(error){responseJobs.delete(messageId);if(controller.signal.aborted)return;const target=host();if(target){target.replaceChildren();const message=document.createElement('p');message.textContent=error.message;const button=document.createElement('button');button.type='button';button.textContent='Retry animation';button.onclick=()=>responseAnimation(messageId,true);target.append(message,button);}}
 }
 async function animation(){return run(async()=>{
  if(!learning?.task)throw Error('Open a learning lesson first.');const index=learning.task.concept;
  if(!learning.task.show_lesson){await reveal();await refreshLearning();}
  if(learning.demo){const response=await fetch('/lessons/recursion-v1/manifest.json',{signal:controller.signal});if(!response.ok)throw Error('The reviewed animation assets are unavailable. Reload the app and retry.');const clips=(await response.json())[index],concept=learning.course.concepts[index];renderAnimation(root.querySelector('[data-backend-learning]'),{title:concept.title,steps:clips.map((clip,i)=>({...clip,explanation:concept.steps[i],title:concept.title}))},profile());return;}
  const path=`/sessions/${learning.id}/animations/${index}`;let result=await post(path);
  for(let count=0;count<360&&['queued','planning','checking','rendering'].includes(result.status);count++){
   notice('Preparing your visual explanation: '+result.status);await new Promise(resolve=>setTimeout(resolve,2000));if(controller.signal.aborted)return;result=await call(path);
  }
  if(result.status==='ready')renderAnimation(root.querySelector('[data-backend-learning]'),result,profile());
  else notice(result.error||'Animation is still preparing. Open it again to check progress.');
 });}
 return {ready,run,translate,call,post,render,refreshRecords,openSession,openGoal,demo,conversation,refreshConversation,send,intake,updateIntake,files,link,searchSources,plan,grade,refreshLearning,explain,reveal,bookmark,feedback,regenerate,speech,visual,delivery,scope,choices,advance,record,login,logout,stop,search,preference,removeResource,clearResources,adjust,notifications,notes,findResources,animation,responseAnimation,get learning(){return learning;},get account(){return account;},get capabilities(){return capabilities;},get goals(){return goals;},get cards(){return cards;},get reminders(){return reminders;},get sessions(){return sessions;},dispose(){controller.abort();generation?.abort();clearTimeout(recordingTimer);if(recorder)recorder.onstop=null;stream?.getTracks().forEach(t=>t.stop());player?.pause();}};
}
