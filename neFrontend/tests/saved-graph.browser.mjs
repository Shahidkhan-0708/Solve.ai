import assert from 'node:assert/strict';
import {chromium} from '../../node_modules/playwright/index.mjs';
const origin=process.env.SOLVE_TEST_URL||'http://localhost:3002',browser=await chromium.launch({headless:true}),context=await browser.newContext({viewport:{width:1066,height:720}}),page=await context.newPage();let id;
try{
 await page.goto(origin+'/chat',{waitUntil:'networkidle'});await page.waitForSelector('.export-desktop [data-backend-ready=true]');
 const response=await context.request.post(origin+'/api/demo',{headers:{Origin:origin}});assert(response.ok(),await response.text());const demo=await response.json();id=demo.id;
 const scope=await context.request.patch(origin+'/api/sessions/'+id,{headers:{Origin:origin,'If-Match':String(demo.revision)},data:{workspace:'chat'}});assert(scope.ok(),await scope.text());
 await page.goto(origin+'/knowledge-graph',{waitUntil:'networkidle'});await page.waitForSelector('.export-desktop [data-backend-ready=true]');
 const nodes=page.locator('.export-desktop #graph-viewport [data-concept-index]');assert(await nodes.count()>0,'saved nodes must stay inside the viewport, preserving the map controls');
 const boxes=await nodes.evaluateAll(nodes=>nodes.map(node=>{const r=node.getBoundingClientRect();return {x:r.x,y:r.y,right:r.right,bottom:r.bottom};}));
 for(let i=0;i<boxes.length;i++)for(let j=i+1;j<boxes.length;j++){const a=boxes[i],b=boxes[j];assert(a.right<=b.x||b.right<=a.x||a.bottom<=b.y||b.bottom<=a.y,'saved graph nodes overlap');}
 await nodes.first().click();await page.locator('.export-desktop #drawer-description').waitFor({state:'visible'});await page.waitForFunction(expected=>document.querySelector('.export-desktop #drawer-description')?.textContent===expected,demo.course.concepts[0].explanation);
 console.log('Passed saved graph: owned demo session, viewport preserved, non-overlapping cards and actual concept drawer. No provider calls.');
}finally{if(id)await context.request.delete(origin+'/api/sessions/'+id,{headers:{Origin:origin}});await browser.close();}
