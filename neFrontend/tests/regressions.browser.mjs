import {test,before,after} from 'node:test';
import assert from 'node:assert/strict';
import {expect} from '@playwright/test';
import fs from 'node:fs/promises';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const origin=process.env.SOLVE_TEST_URL||'http://127.0.0.1:3001';
const evidence=new URL('../../tmp/qa-fixes/screenshots/',import.meta.url);
let browser;
before(async()=>{await fs.mkdir(evidence,{recursive:true});browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE?{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}:{})});});
after(async()=>{await browser?.close();});
async function api(context,method,path,data,revision,expected=200){let response;try{response=await context.request.fetch(origin+'/api'+path,{method,headers:{Origin:origin,...(revision!==undefined?{'If-Match':'"'+revision+'"'}:{})},...(data!==undefined?{data}:{}),timeout:180000});}catch(error){throw Error(error.message.split('Call log:')[0]);}const value=await response.json();assert.equal(response.status(),expected,JSON.stringify(value));return value;}
async function visit(page,path){await page.goto(origin+path,{waitUntil:'networkidle',timeout:60000});await page.locator('[data-backend-ready=true]:visible').first().waitFor({timeout:30000});}
async function scenario(name,action){const context=await browser.newContext({viewport:{width:1280,height:1024}}),page=await context.newPage();page.setDefaultTimeout(20000);try{await api(context,'GET','/health');await action(page,context);}catch(error){await page.screenshot({path:new URL(name+'-failure.png',evidence).pathname.replace(/^\/([A-Z]:)/,'$1'),fullPage:true}).catch(()=>{});throw error;}finally{await context.close();}}

test('live pages exclude preview controls, fabricated progress and sample history',{timeout:180000},async()=>scenario('live-content',async page=>{
 for(const path of ['/study','/plan','/target','/graph','/practice','/welcome','/onboarding']){
  await visit(page,path);const text=await page.locator('body').innerText();
  assert.doesNotMatch(text,/1 of 6 milestones completed|85% Complete|Bayesian Probability Networks|Quant Finance & Arbitrage|AUTHORITATIVE VIEW|INTERACTIVE STATE SIMULATOR|WORKFLOW STATE|DEMO STATES|Interactive View States/i,path);
 }
}));

test('saved learner identity replaces sample personas immediately and across routes',{timeout:90000},async()=>scenario('identity',async(page,context)=>{
 await visit(page,'/settings');const desktop=page.locator('.export-desktop');await desktop.locator('#preferred-name').fill('QA Saved Learner');
 await desktop.getByRole('button',{name:'Save changes',exact:true}).click();await desktop.locator('aside').getByText('QA Saved Learner',{exact:true}).first().waitFor();
 assert.equal((await api(context,'GET','/me')).profile.name,'QA Saved Learner');
 for(const path of ['/history','/lesson']){await visit(page,path);assert.doesNotMatch(await page.locator('body').innerText(),/Alex Rivera|Alex Mercer|Elena Rostova/);}
}));

test('saved learning resumes from History without a blocking sample modal',{timeout:90000},async()=>scenario('resume',async(page,context)=>{
 let session=await api(context,'POST','/demo');session=await api(context,'PATCH','/sessions/'+session.id,{workspace:'chat'},session.revision);
 await visit(page,'/chat');await visit(page,'/history');
 const desktop=page.locator('.export-desktop');await desktop.locator('[data-connected-records]').getByRole('button',{name:'Resume learning',exact:true}).click();
 await page.waitForURL('**/lesson',{timeout:20000});await page.locator('.export-desktop').getByLabel('Answer the saved learning question',{exact:true}).waitFor();
 assert.equal((await api(context,'GET','/sessions/'+session.id+'?read_only=true')).id,session.id);
}));

test('reminder actions restore enabled controls and preserve follow-on feedback',{timeout:90000},async()=>scenario('reminders',async(page,context)=>{
 await api(context,'POST','/notifications',{title:'QA due reminder',due:new Date(Date.now()-5000).toISOString(),url:'/study'});
 await visit(page,'/settings');const desktop=page.locator('.export-desktop');await desktop.getByRole('button',{name:'Mark reminder read',exact:true}).click();
 await expect.poll(async()=>{const data=await api(context,'GET','/notifications');return data.length===1&&data[0].read;}).toBe(true);
 await desktop.getByRole('button',{name:'Delete reminder',exact:true}).click();
 await expect.poll(async()=>(await api(context,'GET','/notifications')).length).toBe(0);
 await desktop.getByRole('button',{name:'Enable device reminders',exact:true}).click();await page.getByText(/Device reminders are not configured/).waitFor();
}));

test('source generation finishes its browser handoff and shows assessed requirements',{timeout:240000},async t=>scenario('generation',async(page,context)=>{
 const health=await api(context,'GET','/health');if(!health.ai_configured){t.skip('Live generation requires a configured provider.');return;}
 await visit(page,'/assessment');const desktop=page.locator('.export-desktop');
 await desktop.getByLabel('Learning goal',{exact:true}).fill('QA understand the stopping rule in recursion');await desktop.getByRole('button',{name:'Save study details',exact:true}).click();await page.getByText('Study details saved.',{exact:true}).waitFor();
 await desktop.getByRole('button',{name:'Browse files',exact:true}).click();await page.getByRole('dialog').locator('input[type=file]').setInputFiles({name:'qa-notes.txt',mimeType:'text/plain',buffer:Buffer.from('A recursive function calls itself on a smaller problem. Its base case returns directly without another call. For factorial, zero returns one. Otherwise factorial of n equals n times factorial of n minus one. The smaller input eventually reaches zero and stops recursion.')});
 const uploaded=page.waitForResponse(r=>r.url().endsWith('/sources/file')&&r.request().method()==='POST');await page.getByRole('dialog').getByRole('button',{name:'Add resources',exact:true}).click();assert.equal((await uploaded).status(),200);
 await desktop.locator('[data-local-resources]').getByText('Review extracted text',{exact:true}).click();
 const navigated=page.waitForURL('**/approach',{timeout:180000});await desktop.locator('#cta-generate-approach').click();await navigated;await page.locator('.export-desktop').getByRole('heading',{name:'Your source-backed study sequence',exact:true}).waitFor();
 const sessions=await api(context,'GET','/sessions?workspace=chat');const state=await api(context,'GET','/sessions/'+sessions[0].id+'?read_only=true');assert.ok(state.course);assert.match(state.task.prompt,/Include in your answer:/);assert.equal(state.task._answer,undefined);assert.equal(state.task._criteria,undefined);
 await page.locator('.export-desktop').getByRole('button',{name:'Start learning',exact:true}).click();await page.waitForURL('**/lesson');await page.locator('.export-desktop [data-backend-learning]').getByText(/Include in your answer:/).waitFor();
}));

test('guest sign-out removes access to previous private work',{timeout:90000},async()=>scenario('logout',async(page,context)=>{
 const session=await api(context,'POST','/sessions',{goal:'QA guest privacy record'});await visit(page,'/settings');await page.locator('.export-desktop').getByRole('button',{name:'Sign out',exact:true}).last().click();await page.waitForURL('**/welcome');
 await api(context,'GET','/sessions/'+session.id,undefined,undefined,404);assert.equal((await api(context,'GET','/me')).profile.name,'');
}));

test('mobile live routes fit a narrow viewport',{timeout:120000},async()=>scenario('mobile',async page=>{
 await page.setViewportSize({width:390,height:844});for(const path of ['/study','/practice','/history','/settings']){await visit(page,path);assert.equal(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),true,path);}
}));
