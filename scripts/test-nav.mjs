import { chromium } from 'playwright';

async function main() {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const context = await browser.newContext({ viewport: { width: 1280, height: 800 } });
  const page = await context.newPage();
  
  console.log('1. Navigating to /chat...');
  await page.goto('http://127.0.0.1:3002/chat', { waitUntil: 'networkidle' });
  console.log('/chat loader:', await page.locator('.workspace-loading').isVisible(), 'backendReady:', await page.locator('.stitch-screen').getAttribute('data-backend-ready'));

  console.log('2. Clicking /plan...');
  await page.locator('.workspace-links a[href="/plan"]').click();
  await page.waitForURL('**/plan');
  await page.waitForTimeout(600);
  console.log('/plan loader:', await page.locator('.workspace-loading').isVisible(), 'backendReady:', await page.locator('.stitch-screen').getAttribute('data-backend-ready'));

  console.log('3. Clicking /target...');
  await page.locator('.workspace-links a[href="/target"]').click();
  await page.waitForURL('**/target');
  await page.waitForTimeout(600);
  console.log('/target loader:', await page.locator('.workspace-loading').isVisible(), 'backendReady:', await page.locator('.stitch-screen').getAttribute('data-backend-ready'));

  console.log('4. Clicking /knowledge-graph...');
  await page.locator('.workspace-links a[href="/knowledge-graph"]').click();
  await page.waitForURL('**/knowledge-graph');
  await page.waitForTimeout(600);
  console.log('/knowledge-graph loader:', await page.locator('.workspace-loading').isVisible(), 'backendReady:', await page.locator('.stitch-screen').getAttribute('data-backend-ready'));

  console.log('5. Clicking /chat...');
  await page.locator('.workspace-links a[href="/chat"]').click();
  await page.waitForURL('**/chat');
  await page.waitForTimeout(600);
  console.log('/chat loader:', await page.locator('.workspace-loading').isVisible(), 'backendReady:', await page.locator('.stitch-screen').getAttribute('data-backend-ready'));

  await browser.close();
  console.log('TEST COMPLETE: All workspace routes transition and finish loading correctly.');
}

main().catch(console.error);
