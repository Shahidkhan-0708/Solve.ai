import {dialog,notice,navigate} from './state.mjs';

function node(tag,text='',className='') {
 const element=document.createElement(tag);element.textContent=text;element.className=className;return element;
}
function button(label,action) {
 const element=node('button',label);element.type='button';element.addEventListener('click',action);return element;
}
function field(form,label,type='text',value='') {
 const wrap=node('label',label),input=node(type==='textarea'?'textarea':'input');
 if(type!=='textarea')input.type=type;input.value=value;input.required=true;wrap.append(input);form.append(wrap);return input;
}
function section(host,title,id) {
 const element=node('section','','stitch-connected-section');if(id)element.id=id;element.append(node('h2',title));host.append(element);return element;
}
function download(path) {
 const link=node('a','Download');link.href='/api'+path;link.download='';return link;
}
function submit(form,label,action,remote) {
 const control=node('button',label);control.type='submit';form.append(control);
 form.addEventListener('submit',event=>{event.preventDefault();void remote.run(async()=>{control.disabled=true;try{return await action();}finally{control.disabled=false;}});});
}

export function renderAnimation(host,job,preferences={}) {
 if(!host)return;
 host.querySelector('[data-generated-animation]')?.remove();
 const panel=node('section','','stitch-connected');panel.dataset.generatedAnimation='true';panel.setAttribute('aria-label','Generated animation');
 panel.addEventListener('click',event=>event.stopPropagation());panel.addEventListener('keydown',event=>event.stopPropagation());
 let index=0,still=preferences.reducedMotion||matchMedia('(prefers-reduced-motion: reduce)').matches;
 function draw(){
  panel.replaceChildren();const step=job.steps[index];panel.append(node('h3',step.title||job.title||'Worked explanation'),node('p',`Step ${index+1} of ${job.steps.length}`));
  const visual=node(still?'img':'video');visual.src=still?step.still:step.video;
  if(still)visual.alt=step.explanation;else{visual.controls=true;visual.poster=step.still;visual.preload='metadata';visual.setAttribute('aria-label',step.title||'Animated worked step');visual.addEventListener('error',()=>{still=true;draw();},{once:true});}
  panel.append(visual,node('p',step.explanation));
  const controls=node('div','','stitch-connected-actions');const back=button('Previous step',()=>{index--;draw();});back.disabled=index===0;
  const next=button('Next step',()=>{index++;draw();});next.disabled=index===job.steps.length-1;
  controls.append(back,next,button(still?'Use animation':'Use still diagrams',()=>{still=!still;draw();}));panel.append(controls);
  if(step.references?.length){const details=node('details');details.append(node('summary','Supporting source passages'));for(const ref of step.references)details.append(node('blockquote',ref.quote));panel.append(details);}
 }
 if(job.steps.length){draw();host.append(panel);}else notice('This animation has no rendered steps. Retry generation.');
}

export function renderVisual(host,scene){
 if(!host)return;host.querySelector('[data-response-visual]')?.remove();const panel=node('section','','stitch-connected');panel.dataset.responseVisual='true';panel.setAttribute('aria-label','Response diagram');panel.append(node('h3',scene.title));
 const grid=node('div','','stitch-connected-grid');for(const item of scene.nodes){const card=node('article','','stitch-connected-card');card.append(node('strong',item.label),node('p',item.detail));if(item.id===scene.focus)card.dataset.focus='true';grid.append(card);}panel.append(grid);
 const labels=new Map(scene.nodes.map(item=>[item.id,item.label]));for(const link of scene.links)panel.append(node('p',`${labels.get(link.source)} → ${labels.get(link.target)}${link.label?' · '+link.label:''}`));panel.append(node('p',scene.takeaway));host.append(panel);
}


function renderTargetStatus(host,remote,mode) {
 host.classList.add('target-workspace');
 const learning=remote.learning,course=learning?.course;
 const heading=node('div','','target-heading');heading.append(node('h1','Target status'),node('p','Your progress, and what to work on next.'));host.append(heading);
 const saved=remote.sessions.filter(session=>session.concepts>0);
 if(saved.length>1||(!course&&saved.length)){
  const label=node('label','Learning plan','target-plan-picker'),select=node('select');select.setAttribute('aria-label','Learning plan');
  if(!course){const option=node('option','Choose a saved plan');option.value='';option.disabled=true;option.selected=true;select.append(option);}
  for(const session of saved){const option=node('option',session.title||session.goal);option.value=session.id;option.selected=session.id===learning?.id;select.append(option);}
  select.addEventListener('change',()=>remote.run(async()=>{select.disabled=true;try{await remote.openSession(select.value);}finally{select.disabled=false;}}));label.append(select);host.append(label);
 }
 if(!course){
  const empty=node('section','','target-empty'),icon=node('span','flag','material-symbols-outlined');icon.setAttribute('aria-hidden','true');
  empty.append(icon,node('h2','Your progress starts here'),node('p','Add your study material and answer a few questions to see what you understand.'));
  const start=button('Create a learning plan',()=>navigate(mode()==='study'?'/study/new':'/assessment'));start.className='target-primary';empty.append(start);host.append(empty);return;
 }
 const now=Date.now()/1000;
 const status=index=>{const item=learning.progress[index];if(item.needs_repair)return ['practice','Needs practice'];if(item.review_at&&item.review_at<=now)return ['review','Review due'];if(['demonstrated','rechecked'].includes(item.status))return ['understood','Understood'];if(item.status==='introduced')return ['progress','In progress'];return ['new','Not started'];};
 const understood=learning.progress.filter(item=>['demonstrated','rechecked'].includes(item.status)&&!item.needs_repair).length;
 const overview=node('section','','target-overview');overview.setAttribute('aria-label','Learning progress');
 overview.append(node('p',learning.demo?'Reviewed lesson':'Current target','target-kicker'),node('h2',learning.goal||course.title));
 if(learning.target)overview.append(node('p',learning.target,'target-outcome'));
 const count=node('p','','target-progress-count');count.append(node('strong',String(understood)),node('span','of '+course.concepts.length+' topics understood'));overview.append(count);
 const bar=node('progress');bar.max=course.concepts.length;bar.value=understood;bar.setAttribute('aria-label',understood+' of '+course.concepts.length+' topics understood');overview.append(bar);
 overview.append(node('p','Based on your independent answers.','target-progress-note'));
 const facts=node('dl','','target-facts');for(const [label,value] of [['Saved attempts',learning.attempt_count],['Study time left',learning.remaining_minutes+' min']]){const item=node('div');item.append(node('dt',label),node('dd',String(value)));facts.append(item);}overview.append(facts);host.append(overview);
 const current=learning.task?.concept??learning.ranked_topics?.[0]?.concept;
 const allUnderstood=understood===course.concepts.length&&!learning.progress.some(item=>item.needs_repair||(item.review_at&&item.review_at<=now));
 const exhausted=learning.remaining_minutes<=0,resting=allUnderstood&&!learning.task;
 const next=node('section','','target-next');next.append(node('p','Next step','target-kicker'));
 next.append(node('h2',exhausted?'Set more study time':resting?"You’re up to date":course.concepts[current]?.title||'Continue your learning'));
 const guidance=exhausted?'Update your time budget to continue your saved question.':resting?'Your completed topics are saved. Return for your next recall check.':learning.task?.phase==='repair'?'Revisit this topic, then try another question.':learning.task?.phase==='review'?'Recall this topic without looking at your notes.':'Pick up where you left off with your next question.';
 next.append(node('p',guidance));
 const nextAction=button(exhausted?'Update study time':resting?'View learning plan':'Continue learning',()=>navigate(exhausted||resting?'/plan':mode()==='study'?'/study/lesson':'/lesson'));nextAction.className='target-primary';next.append(nextAction);host.append(next);
 const topics=node('section','','target-topics'),top=node('div','','target-section-heading');top.append(node('h2','Your topics'));
 const plan=node('a','View plan');plan.href='/plan';top.append(plan);topics.append(top);
 const list=node('ol');for(const [index,concept] of course.concepts.entries()){
  const [kind,label]=status(index),row=node('li'),number=node('span',kind==='understood'?'✓':String(index+1),'target-topic-number');number.setAttribute('aria-hidden','true');
  const title=node('span',concept.title,'target-topic-title'),badge=node('span',label,'target-topic-status');badge.dataset.status=kind;row.append(number,title,badge);list.append(row);
 }topics.append(list);host.append(topics);
}

export function renderConnectedPanels({root,remote,mode,workspace,persist}) {
 if(root.dataset.backendReady!=='true')return;
 const page=location.pathname;
 root.querySelector('[data-connected-records]')?.remove();
 const supported=['/lesson','/study/lesson','/exam','/approach','/assessment','/study/assessment','/study','/plan','/practice','/settings','/history','/knowledge-graph','/graph','/target','/status'];
 if(!supported.includes(page))return;
 const host=node('section','','stitch-connected');host.dataset.connectedRecords='true';host.setAttribute('aria-label','Your saved workspace');
 host.addEventListener('click',event=>event.stopPropagation());host.addEventListener('keydown',event=>event.stopPropagation());host.addEventListener('submit',event=>event.stopPropagation());
 root.querySelector('main')?.prepend(host);
 if(['/target','/status'].includes(page)){renderTargetStatus(host,remote,mode);return;}
 const pageHeadings={'/study':['Long-term study','Build a steady learning habit around your goals and current material.'],'/target':['Target status','Track assessed understanding and see what still needs practice.'],'/status':['Target status','Track assessed understanding and see what still needs practice.'],'/practice':['Practice & teach-back','Review your flashcards and explain concepts in your own words.'],'/history':['Session history','Find and resume your saved learning sessions.'],'/knowledge-graph':['Knowledge graph','Explore the connections and prerequisites in your learning material.'],'/graph':['Knowledge graph','Explore the connections and prerequisites in your learning material.']};
 if(pageHeadings[page]){const [title,description]=pageHeadings[page],heading=node('div','','workspace-page-heading');heading.append(node('h1',title),node('p',description));host.append(heading);}
 if(page==='/study'&&remote.learning?.course){const current=section(host,'Continue your learning');current.append(node('h3',remote.learning.course.title),button('Resume learning',()=>navigate('/study/lesson')));}
 if(page==='/plan'){
  host.classList.add('plan-workspace');
  const heading=node('div','','plan-heading');heading.append(node('p','YOUR LEARNING DIRECTION','plan-eyebrow'),node('h1','My plan & strategy'),node('p','Set your goals, shape your roadmap, and keep your next step in focus.'));
  const next=button(remote.learning?.course?'Continue learning':'Create a learning plan',()=>navigate(remote.learning?.course?(mode()==='study'?'/study/lesson':'/lesson'):(mode()==='study'?'/study/new':'/assessment')));next.className='plan-primary';heading.append(next);host.append(heading);
  const overview=node('div','','plan-overview');overview.setAttribute('aria-label','Planning overview');
  for(const [label,value] of [['Saved goals',remote.goals.filter(goal=>!goal.archived).length],['Learning sessions',remote.sessions.length],['Milestones completed',remote.goals.reduce((total,goal)=>total+goal.milestones.filter(item=>item.completed).length,0)]]){const card=node('div');card.append(node('strong',String(value)),node('span',label));overview.append(card);}host.append(overview);
 }
 if(['/graph','/knowledge-graph'].includes(page)&&!remote.learning?.course){const empty=section(host,page.includes('graph')?'Your knowledge graph':'Your learning progress');empty.append(node('p','Create a learning plan from your material to see assessed progress here.'),button('Add learning material',()=>navigate(mode()==='study'?'/study/new':'/assessment')));}
 if(page==='/plan'&&mode()==='chat'&&!remote.learning?.course){section(host,'Your learning plan').append(node('p','Add your material to create a saved learning sequence.'),button('Create a plan',()=>navigate('/assessment')));}
 async function refresh(){await remote.refreshRecords();persist();remote.render();}
 const action=(label,task)=>button(label,()=>remote.run(task));
 if(['/assessment','/study/assessment'].includes(page)&&!remote.learning?.course){
  const details=section(host,'Your study details'),form=node('form');form.dataset.studyIntake='true';
  const current=remote.learning,goal=field(form,'Learning goal','text',current?.goal||workspace().goal||''),minutes=field(form,'Session study minutes','number',String(current?.minutes||120));goal.name='goal';goal.minLength=3;goal.maxLength=500;minutes.name='minutes';minutes.min='5';minutes.max='600';
  const levelLabel=node('label','Starting level'),level=node('select');level.name='level';level.setAttribute('aria-label','Starting level');for(const [value,label] of [['starting','Starting from scratch'],['some','Some prior knowledge'],['confident','Confident']]){const option=node('option',label);option.value=value;option.selected=value===(current?.level||'some');level.append(option);}levelLabel.append(level);form.append(levelLabel);
  const target=field(form,'Target outcome (optional)','text',current?.target||''),deadline=field(form,'Study deadline (optional)','date',current?.deadline||'');target.name='target';target.required=false;target.maxLength=120;deadline.name='deadline';deadline.required=false;
  const save=node('button','Save study details');save.type='submit';form.append(save);form.addEventListener('submit',event=>{event.preventDefault();remote.updateIntake({goal:goal.value,minutes:Number(minutes.value),level:level.value,target:target.value,deadline:deadline.value});});details.append(form);
 }
 if(!remote.learning?.course&&['/study','/lesson','/study/lesson','/exam','/approach'].includes(page)){const intro=section(host,'Try a reviewed lesson');intro.append(node('p','Preview a complete learning flow with practice questions and step-by-step explanations.'),button('Open reviewed recursion lesson',async()=>{const saved=await remote.demo();if(saved)navigate(mode()==='study'?'/study/lesson':'/lesson');}));}
 if(['/study','/plan'].includes(page)&&mode()==='study'){
  const goals=section(host,'Your saved learning goals');
  const create=node('details');create.append(node('summary','Create a learning goal'));const form=node('form');
  const title=field(form,'Goal title'),hours=field(form,'Study hours per week','number','4'),months=field(form,'Duration in months','number','3');title.maxLength=500;title.minLength=3;hours.min='.5';hours.max='100';hours.step='.5';months.min='1';months.max='12';
  submit(form,'Save learning goal',async()=>{const goal=await remote.post('/goals',{title:title.value,weekly_hours:Number(hours.value),months:Number(months.value),timezone:Intl.DateTimeFormat().resolvedOptions().timeZone});await remote.refreshRecords();await remote.openGoal(goal.id);notice('Learning goal saved.');},remote);create.append(form);goals.append(create);
  if(!remote.goals.length)goals.append(node('p','No saved goals yet. Create a goal to build a roadmap.'));
  for(const goal of remote.goals){
   const card=node('article','','stitch-connected-card');card.append(node('h3',goal.title),node('p',`${goal.weekly_hours} hours/week · ${goal.archived?'Archived':goal.months+' months'} · ${goal.milestones.filter(m=>m.completed).length}/${goal.milestones.length} milestones checked off`));
   card.append(action('Open goal',()=>remote.openGoal(goal.id)),action(goal.archived?'Restore goal':'Archive goal',async()=>{await remote.call('/goals/'+goal.id,{method:'PATCH',revision:goal.revision,body:{archived:!goal.archived}});await refresh();}),download('/goals/'+goal.id+'/export'));
   if(workspace().views['backend-goal']===goal.id){
    card.append(action('Generate roadmap',async()=>{await remote.post(`/goals/${goal.id}/plan`,undefined,goal.revision);await refresh();}),action('Edit goal title',async()=>{dialog({title:'Edit learning goal',kind:'text',value:goal.title,submit:value=>remote.run(async()=>{await remote.call('/goals/'+goal.id,{method:'PATCH',revision:goal.revision,body:{title:value}});await refresh();})});}));
    const allocation=node('form'),weekly=field(allocation,'Weekly study hours','number',String(goal.weekly_hours));weekly.min='.5';weekly.max='100';weekly.step='.5';submit(allocation,'Save weekly hours',async()=>{await remote.call('/goals/'+goal.id,{method:'PATCH',revision:goal.revision,body:{weekly_hours:Number(weekly.value)}});await refresh();},remote);card.append(allocation);
    if(remote.learning&&!goal.session_ids.includes(remote.learning.id))card.append(action('Link current learning session',async()=>{await remote.post(`/goals/${goal.id}/sessions`,{session_id:remote.learning.id},goal.revision);await refresh();}));
    const list=node('ol');for(const milestone of goal.milestones){const item=node('li',`Week ${milestone.week}: ${milestone.title} · ${milestone.hours} hours. ${milestone.rationale}`);if(milestone.completed)item.append(node('strong',' Checked off by you'));else item.append(action('Mark milestone complete',async()=>{await remote.post(`/goals/${goal.id}/milestones/${milestone.id}`,undefined,goal.revision);await refresh();}));list.append(item);}card.append(list,node('p','Milestone check-offs record your planning progress; demonstrated understanding comes from assessed learning attempts.'));
    card.append(button('Delete learning goal',()=>dialog({title:'Delete learning goal?',description:'The goal and roadmap will be removed. Linked learning sessions are kept.',kind:'confirm',submit:()=>remote.run(async()=>{await remote.call('/goals/'+goal.id,{method:'DELETE'});delete workspace().views['backend-goal'];await refresh();})})));
   }goals.append(card);
  }
 }
 if(['/plan','/history'].includes(page)){
  const saved=section(host,'Your saved learning sessions');
  for(const session of remote.sessions){const row=node('article','','stitch-connected-card');row.append(node('h3',session.title||session.goal),action('Resume learning',async()=>{await remote.openSession(session.id);navigate(mode()==='study'?'/study/lesson':'/lesson');}),download('/sessions/'+session.id+'/export'));saved.append(row);}
  if(!remote.sessions.length)saved.append(node('p','No active learning sessions in this workspace.'));
  if(page==='/history'){
   const form=node('form'),query=field(form,'Search saved learning attempts');query.required=false;const archived=node('label','Include archived sessions'),checkbox=node('input');checkbox.type='checkbox';archived.append(checkbox);form.append(archived);const results=node('div');
   submit(form,'Search learning history',async()=>{const data=await remote.call(`/study-history?workspace=${mode()}&q=${encodeURIComponent(query.value)}&archived=${checkbox.checked}&limit=100`);results.replaceChildren();
    for(const item of data.items){const row=node('article','','stitch-connected-card');row.append(node('h3',item.title),node('p',item.matches.map(m=>m.excerpt).join('\n')),action(item.archived?'Restore session':'Archive session',async()=>{await remote.call('/sessions/'+item.id,{method:'PATCH',revision:item.revision,body:{archived:!item.archived}});await refresh();}),action(item.pinned?'Unpin session':'Pin session',async()=>{await remote.call('/sessions/'+item.id,{method:'PATCH',revision:item.revision,body:{pinned:!item.pinned}});await refresh();}),download('/sessions/'+item.id+'/export?format=latex'),button('Delete learning session',()=>dialog({title:'Delete learning session?',kind:'confirm',submit:()=>remote.run(async()=>{await remote.call('/sessions/'+item.id,{method:'DELETE'});if(workspace().views['backend-session']===item.id)delete workspace().views['backend-session'];await refresh();})})));results.append(row);}
    if(!data.items.length)results.append(node('p','No matching learning sessions.'));return data;
   },remote);saved.append(form,results);
  }
 }
 if(page==='/practice'){
  const cards=section(host,'Your saved flashcards');const create=node('details');create.append(node('summary','Create a flashcard'));const form=node('form'),front=field(form,'Flashcard question','textarea'),back=field(form,'Flashcard answer','textarea');front.minLength=3;front.maxLength=1000;back.maxLength=6000;
  submit(form,'Save flashcard',async()=>{await remote.post('/cards',{front:front.value,back:back.value});await refresh();notice('Flashcard saved.');},remote);create.append(form);cards.append(create);
  for(const card of remote.cards){const item=node('article','','stitch-connected-card');item.append(node('h3',card.front));const details=node('details');details.append(node('summary','Reveal saved answer'),node('p',card.back));item.append(details);
   if(card.progress.review_at)item.append(node('p','Next review: '+new Date(card.progress.review_at*1000).toLocaleString()));
   const form=node('form'),answer=field(form,'Your flashcard answer','textarea');answer.maxLength=5000;const recall=node('label','Recall effort'),select=node('select');for(const value of ['hard','good','easy']){const option=node('option',value);option.value=value;option.selected=value==='good';select.append(option);}recall.append(select);form.append(recall);
   submit(form,'Check flashcard answer',async()=>{const saved=await remote.post(`/cards/${card.id}/review`,{answer:answer.value,recall:select.value},card.revision);await refresh();notice(saved.reviews.at(-1).feedback.explanation);},remote);item.append(form,button('Delete flashcard',()=>dialog({title:'Delete flashcard?',kind:'confirm',submit:()=>remote.run(async()=>{await remote.call('/cards/'+card.id,{method:'DELETE'});await refresh();})})));cards.append(item);
  }if(!remote.cards.length)cards.append(node('p','No saved flashcards yet. Save a lesson or create your own card.'));
 }
 if(['/plan','/approach'].includes(page)&&remote.learning?.course){
  const learning=remote.learning,topics=section(host,['/plan','/approach'].includes(page)?'Your source-backed study sequence':'Your source-backed concepts');
  for(const [index,concept] of learning.course.concepts.entries()){const item=node('details');item.append(node('summary',concept.title+' · '+learning.progress[index].status),node('p','Prerequisites: '+(concept.prerequisites.map(i=>learning.course.concepts[i].title).join(', ')||'None')));
   if(learning.task?.concept===index&&learning.task.show_lesson)item.append(node('p',concept.explanation));
   const entry=learning.ranked_topics.find(t=>t.concept===index);if(entry)item.append(node('p',`${entry.minutes} estimated minutes · ${entry.reason}`),action('Study this concept next',async()=>{await remote.post(`/sessions/${learning.id}/plan`,{preferred_concept:index},learning.revision);await remote.refreshLearning();}));topics.append(item);
  }
  const form=node('form'),minutes=field(form,'Remaining study minutes','number',String(learning.remaining_minutes));minutes.min='0';minutes.max='600';
  const marks=learning.course.concepts.map((concept,index)=>{const input=field(form,'Exam marks for '+concept.title+' (optional)','number',learning.topic_marks[index]??'');input.required=false;input.min='0';input.max='1000';return input;});
  submit(form,'Update study budget',async()=>{await remote.post(`/sessions/${learning.id}/plan`,{remaining_minutes:Number(minutes.value),topic_marks:marks.map(input=>input.value===''?null:Number(input.value))},learning.revision);await remote.refreshLearning();},remote);topics.append(form);if(page==='/approach')topics.append(button('Start learning',()=>navigate(mode()==='study'?'/study/lesson':'/lesson')));
 }
 if(page==='/settings'){
  const status=section(host,'Connected services');status.append(node('p',`AI ${remote.capabilities.ai?'enabled':'not configured'} · Speech ${remote.capabilities.speech?'enabled':'not configured'} · Google sign-in ${remote.capabilities.google_sign_in?'enabled':'not configured'}`));
  const reminders=section(host,'Your reminders','saved-reminders'),form=node('form'),title=field(form,'Reminder title'),due=field(form,'Reminder date and time','datetime-local');title.minLength=3;title.maxLength=160;
  submit(form,'Save reminder',async()=>{const date=new Date(due.value);if(!Number.isFinite(date.getTime())||date<=new Date())throw Error('Choose a future reminder time.');await remote.post('/notifications',{title:title.value,due:date.toISOString(),url:mode()==='study'?'/study':'/chat'});notice('Reminder saved for '+date.toLocaleString()+'.');form.reset();return true;},remote);reminders.append(form);
  for(const reminder of remote.reminders){const row=node('article','','stitch-connected-card');row.append(node('h3',reminder.title),node('p',reminder.read?'Read':'Unread'),action('Mark reminder read',async()=>{await remote.post(`/notifications/${reminder.id}/read`);await refresh();}),action('Delete reminder',async()=>{await remote.call('/notifications/'+reminder.id,{method:'DELETE'});await refresh();}));reminders.append(row);}
  if(!remote.reminders.length)reminders.append(node('p','No reminders are due. Future reminders appear when their scheduled time arrives.'));
  reminders.append(action('Enable device reminders',()=>setPush(remote,true)),action('Disable device reminders',()=>setPush(remote,false)));
 }
}

async function setPush(remote,enabled){
 const config=await remote.call('/push/config');
 if(enabled&&!config.enabled)throw Error('Device reminders are not configured. Saved in-app reminders remain available.');
 if(!('serviceWorker' in navigator)||!('PushManager' in window))throw Error('This browser does not support device reminders.');
 const registration=await navigator.serviceWorker.getRegistration();if(!registration?.active)throw Error('Open the production app over HTTPS or localhost to enable device reminders.');
 let subscription=await registration.pushManager.getSubscription();
 if(enabled){if(!subscription){const bytes=Uint8Array.from(atob(config.public_key.replace(/-/g,'+').replace(/_/g,'/')),c=>c.charCodeAt(0));subscription=await registration.pushManager.subscribe({userVisibleOnly:true,applicationServerKey:bytes});}await remote.post('/push/subscriptions',subscription.toJSON());}
 else if(subscription){const bytes=new Uint8Array(await crypto.subtle.digest('SHA-256',new TextEncoder().encode(subscription.endpoint))),id=[...bytes].map(b=>b.toString(16).padStart(2,'0')).join('');await remote.call('/push/subscriptions/'+id,{method:'DELETE'});await subscription.unsubscribe();}
 const me=await remote.call('/me'),body={...me.profile,notifications:enabled};delete body.revision;await remote.call('/me/profile',{method:'PUT',body,revision:me.profile.revision});notice(enabled?'Device reminders enabled.':'Device reminders disabled.');
}
