import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {WORKSPACE_KEY} from '../components/stitch/state.mjs';

const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({headless:true,channel:'chrome'});
const context=await browser.newContext({serviceWorkers:'block'});
const profile={name:'Learner',motion:'device',interface_language:'English',explanation_language:'English'};
const old={id:'old-thread',title:'Old conversation',mode:'chat',updated:1,messages:[{role:'user',text:'An earlier question'},{role:'assistant',text:'An earlier answer',status:'complete'}]};
const fresh={id:'fresh-thread',title:'New conversation',mode:'chat',updated:2,messages:[]};
await context.addInitScript(({key})=>{
 if(sessionStorage.getItem('home-test-seeded'))return;
 const state={mode:'chat',chat:{drafts:{},views:{'backend-owner':'home-test','/chat:396c207cdae5432bbb358c2f89ac047f':'view-chat-active'},sessions:[{id:'old-thread',title:'Old conversation',messages:[]}],activeId:'old-thread',resources:[],evidence:[],cards:[],plan:[]},study:{}};
 sessionStorage.setItem(key,JSON.stringify(state));sessionStorage.setItem('home-test-seeded','true');
},{key:WORKSPACE_KEY});
await context.route('**/api/**',async route=>{
 const request=route.request(),path=new URL(request.url()).pathname;
 let json=[];
 if(path==='/api/health')json={ok:true};
 if(path==='/api/me')json={id:'home-test',profile};
 if(path==='/api/capabilities')json={};
 if(path==='/api/conversations')json=request.method()==='POST'?fresh:{items:[old,fresh]};
 if(path==='/api/conversations/old-thread')json=old;
 if(path==='/api/conversations/fresh-thread')json=fresh;
 if(path==='/api/conversations/fresh-thread/messages'){
  const {text,operation_id}=request.postDataJSON();
  fresh.messages=[{id:'q1',role:'user',text,operation_id,status:'complete'},{id:'a1',role:'assistant',text:'Gravity attracts objects.',operation_id,status:'complete'}];
  return route.fulfill({contentType:'text/event-stream',body:[{type:'delta',text:'Gravity attracts objects.',message_id:'a1'},{type:'done',message_id:'a1'}].map(event=>'data: '+JSON.stringify(event)+'\n\n').join('')});
 }
 await route.fulfill({json});
});
const page=await context.newPage();
const errors=[];page.on('pageerror',error=>errors.push(error.message));
try{
 for(let visit=0;visit<2;visit++){
  await page.goto('http://127.0.0.1:3002/chat',{waitUntil:'domcontentloaded',timeout:120000});
  await page.locator('.stitch-screen[data-backend-ready=true]:visible').waitFor();
  await page.getByRole('heading',{name:'What can I help you with?',exact:true}).waitFor();
  const headingClass = await page.getByRole('heading',{name:'What can I help you with?',exact:true}).getAttribute('class');
  assert.match(headingClass, /watermelon-hero-heading/);
  assert.equal(await page.locator('.watermelon-hero-subtitle').count(), 1);
  assert.equal(await page.locator('#view-chat-active:visible').count(),0);
  assert.equal(await page.locator('#pill-home,#pill-active,#pill-preview').count(),0);
  assert.equal(await page.getByText('Recursion in Computer Science',{exact:true}).count(),0);
 }
 await page.locator('#prompt-input-home:visible').fill('Explain gravity');
 await page.locator('#btn-send-home:visible').click();
 await page.waitForURL('**/conversation',{timeout:60000});
 await page.getByText('Gravity attracts objects.',{exact:true}).waitFor();
 await page.goto('http://127.0.0.1:3002/chat',{waitUntil:'domcontentloaded'});
 await page.getByRole('heading',{name:'What can I help you with?',exact:true}).waitFor();
 assert.equal(await page.locator('#view-chat-active:visible').count(),0);
 assert.deepEqual(errors,[]);
 console.log('PASS: chat home stays on image 40 with saved state, reloads, and return visits; real messaging still works.');
}finally{await browser.close();}
