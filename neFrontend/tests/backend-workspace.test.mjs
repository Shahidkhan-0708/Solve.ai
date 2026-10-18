import assert from 'node:assert/strict';
import {test} from 'node:test';
import {backendWorkspace} from '../components/stitch/backend.mjs';

async function fixture(search=''){
 const keys=['window','document','location','localStorage','sessionStorage','fetch'];
 const previous=new Map(keys.map(key=>[key,Object.getOwnPropertyDescriptor(globalThis,key)]));
 const values=new Map(),storage={getItem:key=>values.get(key)||null,setItem:(key,value)=>values.set(key,value)};
 const state={id:'session',workspace:'chat',revision:1,goal:'Learn circuits',sources:[],course:null,task:null};
 const calls=[],notices=[];
 const chat={id:'chat',title:'Saved circuit question',mode:'chat',revision:1,session_id:null,messages:[{id:'answer',role:'assistant',text:'A saved answer.',status:'complete'}]};
 Object.assign(globalThis,{window:{dispatchEvent:event=>{notices.push(event.detail);return true;}},document:{documentElement:{dataset:{}}},location:{pathname:'/conversation',search},localStorage:storage,sessionStorage:storage});
 let failDelete;
 globalThis.fetch=async(url,options={})=>{
  const method=options.method||'GET';calls.push({url,method,headers:options.headers});
  if(url==='/api/health')return Response.json({ok:true});
  if(url==='/api/me')return Response.json({id:'owner',profile:{name:'Learner',age:null,course:'',education:'',detail:'balanced',playback_speed:1,motion:'device',text_size:'standard',interface_language:'English',explanation_language:'English'}});
  if(url==='/api/capabilities')return Response.json({ai:false});
  if(url.startsWith('/api/conversations?'))return Response.json({items:[]});
  if(url==='/api/conversations/chat'){if(method==='PATCH'){Object.assign(chat,JSON.parse(options.body));chat.revision++;}return Response.json(chat);}
  if(url==='/api/conversations/chat/attachments')return Response.json([]);
  if(url.startsWith('/api/sessions?'))return Response.json([]);
  if(url==='/api/sessions'&&method==='POST')return Response.json(state);
  if(url==='/api/sessions/session'&&method==='PATCH'){Object.assign(state,JSON.parse(options.body));state.revision++;return Response.json(state);}
  if(url==='/api/sessions/session?read_only=true')return Response.json(state);
  if(url==='/api/sessions/session/sources/url'){state.sources.push({id:'source',title:'Circuit notes',passages:[{text:'A series circuit has a single path.'}]});state.revision++;return Response.json(state);}
  if(url==='/api/sessions/session/sources/search'){state.sources.push({id:'scraped_source',title:'Eigenvalues Tutorial',url:'https://example.edu/eigen',passages:[{text:'Eigenvectors scale with lambda.'}]});state.revision++;return Response.json({...state,scraped_sources:[{title:'Eigenvalues Tutorial',url:'https://example.edu/eigen'}]});}
  if(method==='DELETE'&&url.startsWith('/api/sessions/session/sources/')){const id=url.split('/').at(-1);if(id===failDelete)return Response.json({detail:'The session changed. Reload before retrying.'},{status:409});state.sources=state.sources.filter(source=>source.id!==id);state.revision++;return Response.json(state);}
  throw Error('Unexpected API call: '+method+' '+url);
 };
 const workspace={views:{'new-journey':'true'},drafts:{},sessions:[],activeId:null,resources:[],evidence:[],cards:[],plan:[],goal:null};
 const controls=[{disabled:false,dataset:{}},{disabled:true,dataset:{}}];
 const root={dataset:{},setAttribute(){},querySelectorAll:()=>controls,querySelector:()=>null};
 const bridge=backendWorkspace({root,workspace:()=>workspace,mode:()=> 'chat',persist(){},render(){}});
 await bridge.ready;
 return {bridge,workspace,state,calls,notices,controls,setFailDelete:id=>{failDelete=id;},close(){bridge.dispose();for(const [key,value] of previous){if(value)Object.defineProperty(globalThis,key,value);else delete globalThis[key];}}};
}

test('website study sources are deleted through the session API with the current revision',async()=>{
 const f=await fixture();try{
  await f.bridge.link('https://example.com/notes');
  assert.equal(f.workspace.resources[0].type,'source');
  await f.bridge.removeResource(f.workspace.resources[0]);
  const deletion=f.calls.find(call=>call.method==='DELETE');
  assert.equal(deletion.url,'/api/sessions/session/sources/source');
  assert.equal(deletion.headers['If-Match'],'"3"');
  assert.equal(f.workspace.resources.length,0);
  assert.equal(f.bridge.capabilities.ai,false);
 }finally{f.close();}
});

test('clear resources preserves items the server did not delete',async()=>{
 const f=await fixture();try{
  await f.bridge.intake('Learn circuits');
  f.state.sources=[{id:'a'},{id:'b'}];f.bridge.learning.sources=structuredClone(f.state.sources);
  f.workspace.resources=[{id:'a'},{id:'b'}];f.setFailDelete('b');
  await f.bridge.clearResources();
  assert.deepEqual(f.workspace.resources.map(item=>item.id),['b']);
  assert.match(f.notices.at(-1),/session changed/);
 }finally{f.close();}
});

test('opening learning history cannot switch the active workspace implicitly',async()=>{
 const f=await fixture();try{
  f.state.workspace='study';
  await assert.rejects(f.bridge.openSession('session'),/other workspace/);
  assert.equal(f.workspace.views['backend-session'],undefined);
 }finally{f.close();}
});

test('adding a website binds its saved source to the existing conversation before the next turn',async()=>{
 const f=await fixture();try{
  f.workspace.activeId='chat';f.workspace.sessions=[{id:'chat',messages:[]}];
  await f.bridge.link('https://example.com/notes');
  const conversation=await f.bridge.conversation();
  assert.equal(conversation.id,'chat');assert.equal(conversation.session_id,'session');
  assert.equal(f.workspace.views['attach-learning'],undefined);
  assert.ok(f.calls.some(call=>call.url==='/api/conversations/chat'&&call.method==='PATCH'));
 }finally{f.close();}
});

test('pending actions disable available controls and retain permanently disabled controls',async()=>{
 const f=await fixture();try{
  let finish;const wait=new Promise(resolve=>{finish=resolve;});
  const pending=f.bridge.run(()=>wait);
  assert.equal(f.controls[0].disabled,true);
  assert.equal(f.controls[1].disabled,true);
  finish();await pending;
  assert.equal(f.controls[0].disabled,false);
  assert.equal(f.controls[1].disabled,true);
  await f.bridge.run(()=>{throw Error('Provider unavailable');});
  assert.equal(f.controls[0].disabled,false);
  assert.match(f.notices.at(-1),/Provider unavailable/);
 }finally{f.close();}
});

test('recent conversation URLs reopen the selected saved messages',async()=>{
 const f=await fixture('?thread=chat&mode=chat');try{
  assert.equal(f.workspace.activeId,'chat');
  assert.equal(f.workspace.sessions[0].messages[0].text,'A saved answer.');
  assert.equal(f.workspace.goal,'Saved circuit question');
  assert.equal(f.workspace.views['backend-session'],undefined);
 }finally{f.close();}
});

test('searchSources calls the session search scraping endpoint and adds sources to workspace',async()=>{
 const f=await fixture();try{
  await f.bridge.searchSources('eigenvalues');
  const searchCall=f.calls.find(call=>call.url==='/api/sessions/session/sources/search');
  assert.ok(searchCall);
  assert.equal(f.workspace.resources.length,1);
  assert.equal(f.workspace.resources[0].name,'Eigenvalues Tutorial');
  assert.match(f.notices.at(-1),/Scraped 1 online study sources using BeautifulSoup/);
 }finally{f.close();}
});

