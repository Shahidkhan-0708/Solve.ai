import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createRequire } from 'node:module';
import { simplifyChrome } from '../components/stitch/controller.mjs';
const { chromium } = createRequire(import.meta.url)('playwright');

test('workspace mode labels preserve controls and their original actions', async () => {
 const browser = await chromium.launch({headless:true, ...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE ? {executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE} : {})});
 try {
  const page = await browser.newPage();
  await page.setContent('<style>[data-ui-chrome="hidden"]{display:none!important}</style><div id="root"><header><span>SOLVE v2.4</span><a href="/chat">Chat</a><a href="/study">Study</a></header><main><div><span>Workspace State Simulator</span><div><button>1. Unanswered</button><button>2. Correct</button></div></div><div><span>Current — Settings</span><span>Authoritative Specification</span></div><div><span>Active Session // Fast Ingestion Mode</span></div><span>Tokens: 14.8k / 32k</span><textarea aria-label="Question"></textarea><button>Send query</button><button><span class="material-symbols-outlined">add</span> + New chat</button><button>Add Context</button><button>Check answer</button><button>Reduce motion</button></main></div>');
  await page.evaluate(simplifyChrome, await page.$('#root'));
  assert.equal(await page.getByText('Workspace State Simulator').isVisible(),false);
  assert.equal(await page.getByText('Authoritative Specification').isVisible(),false);
  for(const name of ['Send query','Add Context','Check answer','Reduce motion'])assert.equal(await page.getByRole('button',{name,exact:true}).isVisible(),true);
  assert.equal(await page.getByRole('link',{name:'Long term',exact:true}).isVisible(),true);
  assert.equal(await page.getByLabel('Question').isVisible(),true);
  assert.equal(await page.getByRole('link',{name:'Instant',exact:true}).getAttribute('data-original-label'),'Chat');
  assert.equal(await page.getByRole('button',{name:'add New chat',exact:true}).count(),1);
 } finally { await browser.close(); }
});


test('all exported preview toolbar labels stay off live screens',async()=>{
 const browser=await chromium.launch({headless:true,...(process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE?{executablePath:process.env.PLAYWRIGHT_CHROMIUM_EXECUTABLE}:{})});
 try{
  const page=await browser.newPage();
  await page.setContent('<style>[data-ui-chrome="hidden"]{display:none!important}</style><div id="root"><main>'+['Interactive State Simulator','Interactive View States:','WORKFLOW STATE','DEMO STATES:'].map(label=>'<div><span>'+label+'</span><button>Preview one</button><button>Preview two</button></div>').join('')+'<button>Start learning</button></main></div>');
  await page.evaluate(simplifyChrome,await page.$('#root'));
  for(const label of ['Interactive State Simulator','Interactive View States:','WORKFLOW STATE','DEMO STATES:'])assert.equal(await page.getByText(label,{exact:true}).isVisible(),false,label);
  assert.equal(await page.getByRole('button',{name:'Start learning',exact:true}).isVisible(),true);
 }finally{await browser.close();}
});
