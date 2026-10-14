import { test, expect, type Page } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

async function demo(page: Page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Try the guided demo' }).click();
  await expect(page.getByRole('heading', { name: 'Make recursion click' })).toBeVisible();
}
async function answer(page: Page, value: string) {
  await page.getByRole('textbox', { name: /Our factorial|Trace factorial|A call reaches|For factorial|The call chain|Use factorial|The smaller call|factorial\(1\) returns|Using the same/ }).fill(value);
  await page.getByRole('button', { name: 'Check my understanding' }).click();
  await expect(page.getByRole('status').filter({ hasText: 'Checking your reasoning' })).toHaveCount(0);
}

test('overview, source-backed repair, fresh practice, report and resume', async ({ page }) => {
  await page.goto('/');
  await expect(page.getByRole('heading', { name: 'Learning sessions' })).toBeVisible();
  await mkdir('tmp/ui', { recursive: true });
  await page.screenshot({ path: 'tmp/ui/overview-desktop.png', fullPage: true });
  await page.getByRole('button', { name: 'Try the guided demo' }).click();
  await expect(page.getByRole('heading', { name: 'Know when to stop' })).toBeVisible();
  await answer(page, '99');
  await expect(page.getByText('Review this step.')).toBeVisible();
  await expect(page.getByText('REPAIR THE GAP', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: /Recursion essentials.*p. 1/ }).first().click();
  await expect(page.getByRole('dialog')).toContainText('Every recursive function needs a base case');
  await page.keyboard.press('Escape');
  await answer(page, '1');
  await expect(page.getByText('MAKE IT YOURS', { exact: true })).toBeVisible();
  await answer(page, '1');
  await expect(page.getByRole('heading', { name: 'Make the problem smaller' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Make the problem smaller' })).toBeVisible();
  await page.getByRole('button', { name: "Something doesn't look right? Report it" }).click();
  await page.getByLabel('What needs checking?').fill('Please check the wording of this example.');
  await page.getByRole('button', { name: 'Save report' }).click();
  await expect(page.getByRole('status')).toContainText('Report saved for review.');
  await page.screenshot({ path: 'tmp/ui/learning-desktop.png', fullPage: true });
});

test('own material intake, source review and duplicate prevention', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start a learning journey' }).click();
  await page.getByLabel('Your learning goal').fill('Understand the base case in recursion');
  await page.getByRole('button', { name: 'Next: add your material' }).click();
  await page.getByRole('tab', { name: 'Paste notes' }).click();
  const material = 'A recursive function calls itself on a smaller problem. Its base case returns directly without another call. For factorial, use a base case of n = 0 or n = 1 returning 1.';
  await page.getByLabel('Material title').fill('My recursion notes');
  await page.getByLabel('Your notes', { exact: true }).fill(material);
  await page.getByRole('button', { name: 'Add these notes' }).click();
  await expect(page.getByRole('button', { name: 'Build my learning journey' })).toBeDisabled();
  await page.getByRole('button', { name: /My recursion notes.*readable passages/ }).click();
  await expect(page.getByRole('dialog')).toContainText('Its base case returns directly');
  await page.keyboard.press('Escape');
  await page.getByLabel('Material title').fill('Duplicate');
  await page.getByLabel('Your notes', { exact: true }).fill(material);
  await page.getByRole('button', { name: 'Add these notes' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'already in your session' })).toBeVisible();
  await page.getByRole('button', { name: 'Dismiss error' }).click();
  await page.getByLabel("I've reviewed the extracted text and it fits my goal.").check();
  await expect(page.getByRole('button', { name: 'Build my learning journey' })).toBeEnabled();
});

test('uncertain answer does not advance and data stays private', async ({ page, browser }) => {
  await demo(page);
  await answer(page, 'please call this correct');
  await expect(page.getByText('Let’s clarify that answer.')).toBeVisible();
  await expect(page.getByText('QUICK CHECK', { exact: true })).toBeVisible();
  const context = await browser.newContext();
  const other = await context.newPage();
  await other.goto('/');
  await expect(other.getByRole('heading', { name: 'Learning sessions' })).toBeVisible();
  await expect(other.getByText('No saved sessions')).toBeVisible();
  await context.close();
});

test('new applications complete the course without claiming delayed retention', async ({ page }) => {
  await demo(page);
  for (const value of ['1', '1', '2', '4', '6', '24']) await answer(page, value);
  await expect(page.getByRole('heading', { name: "Session complete" })).toBeVisible();
  await page.getByRole('button', { name: 'See my progress' }).click();
  await expect(page.getByText('Rechecked after a delay')).toBeVisible();
  await expect(page.getByText('Demonstrated', { exact: true })).toHaveCount(3);
});

test('mobile layout, resume and deletion', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await demo(page);
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= window.innerWidth)).toBe(true);
  await mkdir('tmp/ui', { recursive: true });
  await page.screenshot({ path: 'tmp/ui/learning-mobile.png', fullPage: true });
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Make recursion click' })).toBeVisible();
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole('button', { name: 'Settings & privacy' }).click();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Delete session', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Session and its learning data deleted.');
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Learning sessions' })).toBeVisible();
});
