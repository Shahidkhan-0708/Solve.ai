import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
const {chromium}=createRequire(import.meta.url)('playwright');
const browser=await chromium.launch({headless:true,executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE});
const context=await browser.newContext({viewport:{width:1280,height:850},serviceWorkers:'block'});
const page=await context.newPage();page.setDefaultTimeout(20000);page.setDefaultNavigationTimeout(60000);const errors=[];page.on('pageerror',error=>errors.push(error.message));
let release,gate,fail=false;
await context.route('**/api/me',async route=>{await gate;if(fail)return route.fulfill({status:503,json:{detail:'Connection temporarily unavailable.'}});return route.continue();});
try{
 for(const path of ['/chat','/conversation','/assessment','/approach','/lesson','/practice','/plan','/target','/knowledge-graph','/history','/settings','/study','/study/new','/study/assessment','/study/lesson']){
  gate=new Promise(resolve=>{release=resolve;});
  await page.goto('http://127.0.0.1:3002'+path,{waitUntil:'domcontentloaded'});
  const pending=page.locator('.stitch-screen[data-backend-ready="false"]');await pending.waitFor({state:'attached'});
  assert.equal(await pending.evaluate(el=>getComputedStyle(el).visibility),'hidden',path+' exposed its reference screen');
  assert.equal(await page.locator('.workspace-loading').isVisible(),true,path+' has no loading state');
  release();
  await page.locator('.stitch-screen[data-backend-ready="true"]').waitFor();
  assert.equal(await page.locator('.workspace-loading').isVisible(),false,path+' kept its loader');
  assert.equal(await page.locator('main:visible').count(),1,path+' has overlapping main pages');assert.equal(await page.locator('.stitch-screen').count(),1,path+' mounts duplicate page trees');
  console.log('PASS '+path);
 }
 await page.setViewportSize({width:390,height:844});
 gate=new Promise(resolve=>{release=resolve;});
 await page.goto('http://127.0.0.1:3002/chat',{waitUntil:'domcontentloaded'});
 const pending=page.locator('.stitch-screen[data-backend-ready="false"]');await pending.waitFor({state:'attached'});
 assert.equal(await pending.evaluate(el=>getComputedStyle(el).visibility),'hidden');release();
 await page.locator('.stitch-screen[data-backend-ready="true"]').waitFor();
 assert.equal(await page.locator('main:visible').count(),1);
 fail=true;gate=Promise.resolve();
 await page.goto('http://127.0.0.1:3002/plan',{waitUntil:'domcontentloaded'});
 await page.getByRole('heading',{name:'Your workspace could not open'}).waitFor();
 assert.equal(await page.getByRole('button',{name:'Try again',exact:true}).isVisible(),true);
 assert.equal(await page.locator('main:visible').count(),1);
 assert.equal(await page.locator('.workspace-loading').isVisible(),false);
 fail=false;await page.getByRole('button',{name:'Try again',exact:true}).click();
 await page.locator('.stitch-screen[data-backend-ready="true"]').waitFor();
 assert.deepEqual(errors,[]);
 console.log('PASS: 15 routes, mobile paint, initialization failure and retry; no sample-page flash or overlapping main pages.');
}catch(error){console.error(error);throw error;}finally{release?.();await browser.close();}
