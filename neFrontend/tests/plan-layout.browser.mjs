import {chromium} from '../../node_modules/playwright/index.mjs';
import assert from 'node:assert/strict';
const browser=await chromium.launch({headless:true});
try{
 const page=await browser.newPage();const errors=[];page.on('pageerror',error=>errors.push(error.message));
 for(const width of [1352,1066,390]){
  await page.setViewportSize({width,height:844});
  for(const path of ['/plan','/chat','/study']){
   await page.goto('http://localhost:3002'+path,{waitUntil:'networkidle'});
   const root=page.locator('.stitch-screen[data-backend-ready=true]:visible');await root.waitFor();
   const header=root.locator('header').first();
   const instant=header.getByRole('link',{name:'Instant',exact:true}).or(header.getByRole('button',{name:'Instant',exact:true}));
   const long=header.getByRole('link',{name:'Long term',exact:true}).or(header.getByRole('button',{name:'Long term',exact:true}));
   if(await instant.count()&&await long.count()){
   const a=await instant.boundingBox(),b=await long.boundingBox(),h=await header.boundingBox();
   assert(a&&b&&h,`${path} mode controls visible at ${width}`);
   assert(Math.abs((Math.min(a.x,b.x)+Math.max(a.x+a.width,b.x+b.width))/2-(h.x+h.width/2))<3,`${path} centered at ${width}`);
   }
   assert.equal(await header.evaluate(el=>getComputedStyle(el).borderBottomWidth),'0px');
   assert(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth),`${path} overflow at ${width}`);
   if(path==='/plan'){
    await root.getByRole('heading',{name:'My plan & strategy',exact:true}).waitFor();
    assert(await root.locator('.plan-overview>div').count()===3);
    assert(await root.locator('.plan-workspace>.stitch-connected-section').count()>=2);
    if(await root.getByText('Create a learning goal',{exact:true}).count()){await root.getByText('Create a learning goal',{exact:true}).click();await root.getByLabel('Goal title',{exact:true}).waitFor({state:'visible'});assert((await root.getByLabel('Goal title',{exact:true}).boundingBox()).height>=44);}
    await page.screenshot({path:`../tmp/plan-polished-${width}.png`,fullPage:true});
   }
  }
 }
 await page.setViewportSize({width:1352,height:844});
 await page.goto('http://localhost:3002/chat',{waitUntil:'networkidle'});
 assert.equal(await page.locator('.home-sections a').count(),3);
 assert.equal(await page.locator('.workspace-sidebar .workspace-links a').count(),3);
 for(const [label,path,title] of [['My Plan & Strategy','/plan','My plan & strategy'],['Target Status','/target','Target status'],['Knowledge Graph','/knowledge-graph','Knowledge graph']]){
  await page.locator('.workspace-sidebar nav').getByRole('link',{name:label,exact:true}).click();
  await page.waitForURL('**'+path);const screen=page.locator('.stitch-screen[data-backend-ready=true]:visible');await screen.waitFor();
  assert.equal(await screen.getAttribute('data-live-page'),path);
  await screen.getByRole('heading',{name:title,exact:true}).waitFor();
  assert.equal(await screen.locator('[data-backend-learning]').count(),0,'No shared lesson covering section');
 }
 assert.deepEqual(errors,[]);console.log('Passed: centered modes, no header divider, plan sections and goal form, no horizontal overflow at 1352/1066/390px.');
}finally{await browser.close();}
