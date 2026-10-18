import { test, expect } from '@playwright/test';

test('mobile workspace keeps study navigation reachable without horizontal overflow', async ({ page }) => {
  await page.route('**/api/health', route => route.fulfill({ json: { ai_configured: false, search_configured: false } }));
  await page.route('**/api/sessions', route => route.fulfill({ json: [] }));
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/study/sessions', { waitUntil: 'domcontentloaded' });
  await expect(page.getByRole('banner').getByRole('img', { name: 'Solve', exact: true })).toHaveCount(0);
  await expect(page.getByRole('link', { name: 'Home', exact: true })).toBeVisible();
  // The development toolbar overlaps the first tab; it is absent in production.
  await page.addStyleTag({ content: 'nextjs-portal { display: none; }' });
  await expect(page.getByRole('heading', { name: 'Learning sessions' })).toBeVisible();
  for (const width of [320, 390, 760]) {
    await page.setViewportSize({ width, height: 844 });
    await page.getByRole('button', { name: 'Workspace actions' }).click();
    await expect(page.getByRole('link', { name: 'Saved sessions', exact: true })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Settings & privacy' })).toBeVisible();
    expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
    await page.keyboard.press('Escape');
    await expect(page.getByRole('button', { name: 'Workspace actions' })).toBeFocused();
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.screenshot({ path: process.cwd() + '/test-results/mobile-workspace.png', fullPage: true });
  await page.getByRole('button', { name: 'Start a learning journey' }).click();
  await expect(page.getByRole('heading', { name: 'What do you want to study?' })).toBeVisible();
  await page.getByLabel('Your learning goal').fill('Understand recursion');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'How much time do you have?' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await page.getByRole('button', { name: 'Workspace actions' }).click();
  await page.getByRole('link', { name: 'Settings & privacy' }).click();
  await expect(page).toHaveURL(/\/study\/settings$/);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole('button', { name: 'Workspace actions' }).click();
  await expect(page.getByRole('link', { name: 'Saved sessions', exact: true })).toBeVisible();
  await page.goto('/', { waitUntil: 'domcontentloaded' });
  await page.setViewportSize({ width: 390, height: 844 });
  await expect(page.getByRole('heading', { name: 'What do you want to learn?' })).toBeVisible();
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
});
