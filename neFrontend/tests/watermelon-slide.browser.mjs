import assert from 'node:assert/strict';
import {createRequire} from 'node:module';
import {WORKSPACE_KEY} from '../components/stitch/state.mjs';

const {chromium} = createRequire(import.meta.url)('playwright');
const browser = await chromium.launch({headless: true, channel: 'chrome'});

const profile = {name: 'Learner', motion: 'device', interface_language: 'English', explanation_language: 'English'};
const old = {id: 'old-thread', title: 'Old conversation', mode: 'chat', updated: 1, messages: []};
const fresh = {id: 'fresh-thread', title: 'New conversation', mode: 'chat', updated: 2, messages: []};

async function setupContext(options = {}) {
  const context = await browser.newContext({serviceWorkers: 'block', ...options});
  await context.addInitScript(({key}) => {
    sessionStorage.clear();
    const state = {
      mode: 'chat',
      chat: {
        drafts: {},
        views: {'backend-owner': 'home-test'},
        sessions: [old, fresh],
        activeId: null,
        resources: [],
        evidence: [],
        cards: [],
        plan: []
      },
      study: {}
    };
    sessionStorage.setItem(key, JSON.stringify(state));
  }, {key: WORKSPACE_KEY});

  await context.route('**/api/**', async route => {
    const path = new URL(route.request().url()).pathname;
    let json = {};
    if (path === '/api/health') json = {ok: true};
    if (path === '/api/me') json = {id: 'home-test', profile};
    if (path === '/api/capabilities') json = {};
    if (path === '/api/conversations') json = {items: [old, fresh]};
    await route.fulfill({json});
  });

  return context;
}

try {
  // 1. Standard mode
  const context = await setupContext();
  const page = await context.newPage();

  await page.goto('http://127.0.0.1:3002/chat', {waitUntil: 'domcontentloaded', timeout: 120000});
  await page.locator('.stitch-screen[data-backend-ready=true]:visible').waitFor({timeout: 60000});

  const heading = page.locator('h1.watermelon-hero-heading');
  await heading.waitFor({state: 'visible'});

  const subtitle = page.locator('p.watermelon-hero-subtitle');
  await subtitle.waitFor({state: 'visible'});

  const headingText = await heading.textContent();
  assert.match(headingText, /What can I help you with\?/);

  const subtitleText = await subtitle.textContent();
  assert.match(subtitleText, /Ask a question, explore an idea/);

  const animStyles = await page.evaluate(() => {
    const h = document.querySelector('h1.watermelon-hero-heading');
    const s = document.querySelector('p.watermelon-hero-subtitle');
    const hStyle = window.getComputedStyle(h);
    const sStyle = window.getComputedStyle(s);
    return {
      headingAnimation: hStyle.animationName,
      subtitleAnimation: sStyle.animationName,
    };
  });

  assert.equal(animStyles.headingAnimation, 'watermelon-slide-heading');
  assert.equal(animStyles.subtitleAnimation, 'watermelon-slide-subtitle');
  await context.close();

  // 2. Reduced motion mode
  const reducedContext = await setupContext({reducedMotion: 'reduce'});
  const reducedPage = await reducedContext.newPage();

  await reducedPage.goto('http://127.0.0.1:3002/chat', {waitUntil: 'domcontentloaded'});
  await reducedPage.locator('.stitch-screen[data-backend-ready=true]:visible').waitFor();

  const reducedAnimStyles = await reducedPage.evaluate(() => {
    const h = document.querySelector('h1.watermelon-hero-heading');
    const s = document.querySelector('p.watermelon-hero-subtitle');
    return {
      headingAnimation: window.getComputedStyle(h).animationName,
      subtitleAnimation: window.getComputedStyle(s).animationName,
    };
  });

  assert.equal(reducedAnimStyles.headingAnimation, 'none');
  assert.equal(reducedAnimStyles.subtitleAnimation, 'none');
  await reducedContext.close();

  console.log('PASS: Watermelon hero slide animation verified in both standard and reduced-motion modes.');
} finally {
  await browser.close();
}
