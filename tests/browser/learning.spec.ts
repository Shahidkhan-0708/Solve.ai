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
  await expect(page.getByRole('heading', { name: 'What do you want to learn?' })).toBeVisible();
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
  await expect(page.getByRole('status').filter({ hasText: 'Report saved for review.' })).toBeVisible();
  await page.screenshot({ path: 'tmp/ui/learning-desktop.png', fullPage: true });
});

test('own material intake, source review and duplicate prevention', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Start a learning journey' }).click();
  await page.getByLabel('Your learning goal').fill('Understand the base case in recursion');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page).toHaveURL(/\/study\/time$/);
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByLabel('Target grade or outcome (optional)').fill('Explain recursion independently');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Source material' })).toBeVisible();
  const intakeId = await page.evaluate(() => localStorage.getItem('solve-session'));
  expect((await (await page.request.get('/api/sessions/' + intakeId)).json()).target).toBe('Explain recursion independently');
  await page.getByRole('tab', { name: 'Paste notes' }).click();
  const material = 'A recursive function calls itself on a smaller problem. Its base case returns directly without another call. For factorial, use a base case of n = 0 or n = 1 returning 1.';
  await page.getByLabel('Material title').fill('My recursion notes');
  await page.getByLabel('Your notes', { exact: true }).fill(material);
  await page.getByRole('button', { name: 'Add these notes' }).click();
  await expect(page.getByRole('button', { name: 'Build study plan', exact: true })).toBeDisabled();
  await page.getByRole('button', { name: /^My recursion notes/ }).click();
  await expect(page.getByRole('dialog')).toContainText('Its base case returns directly');
  await page.keyboard.press('Escape');
  await page.getByLabel('Material title').fill('Duplicate');
  await page.getByLabel('Your notes', { exact: true }).fill(material);
  await page.getByRole('button', { name: 'Add these notes' }).click();
  await expect(page.getByRole('alert').filter({ hasText: 'already in your session' })).toBeVisible();
  await page.getByRole('button', { name: 'Dismiss error' }).click();
  await page.getByLabel("I've reviewed the extracted text and it fits my goal.").check();
  await expect(page.getByRole('button', { name: 'Build study plan', exact: true })).toBeEnabled();
});

test('uncertain answer does not advance and data stays private', async ({ page, browser }) => {
  await demo(page);
  await answer(page, 'please call this correct');
  await expect(page.getByText('Let’s clarify that answer.')).toBeVisible();
  await expect(page.getByText('QUICK CHECK', { exact: true })).toBeVisible();
  const context = await browser.newContext();
  const other = await context.newPage();
  await other.goto('/');
  await other.getByRole('link', { name: 'Continue a saved session' }).click();
  await expect(other.getByRole('heading', { name: 'Learning sessions' })).toBeVisible();
  await expect(other.getByText('No saved sessions')).toBeVisible();
  await context.close();
});

test('new applications complete the course without claiming delayed retention', async ({ page }) => {
  await demo(page);
  for (const value of ['1', '1', '2', '4', '6', '24']) await answer(page, value);
  await expect(page.getByRole('heading', { name: "Session complete" })).toBeVisible();
  await page.getByRole('button', { name: 'Review progress', exact: true }).click();
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
  await page.getByRole('button', { name: 'Workspace actions' }).click();
  await page.getByRole('link', { name: 'Settings & privacy' }).click();
  page.once('dialog', dialog => dialog.accept());
  await page.getByRole('button', { name: 'Delete session', exact: true }).click();
  await expect(page.getByRole('status')).toContainText('Session and its learning data deleted.');
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Learning sessions' })).toBeVisible();
});

test('time-boxed marks plan, confirmed gap, exhausted budget and saved next step', async ({ page }) => {
  await demo(page);
  await page.getByRole('button', { name: 'Study plan', exact: true }).click();
  const plan = page.getByRole('region', { name: 'Your study plan' });
  await expect(plan).toContainText('45 min remaining');
  await plan.getByRole('button', { name: 'Edit study plan' }).click();
  await plan.getByLabel('Remaining study time (minutes)').fill('7');
  await plan.getByLabel('Exam marks: Know when to stop').fill('5');
  await plan.getByLabel('Exam marks: Make the problem smaller').fill('10');
  await plan.getByLabel('Exam marks: Follow the returns').fill('30');
  await plan.getByRole('button', { name: 'Save study plan' }).click();
  await expect(plan).toContainText('7 min remaining');
  await expect(plan).toContainText('7 min planned');
  await expect(plan).toContainText('shorter session');
  await expect(plan.getByText('Make the problem smaller, Follow the returns.', { exact: true })).not.toBeVisible();
  await plan.getByText('Topics for later (2)', { exact: true }).click();
  await expect(plan.getByText('Make the problem smaller, Follow the returns.', { exact: true })).toBeVisible();
  await plan.getByRole('button', { name: 'Close plan editor' }).click();
  await page.getByRole('button', { name: 'Continue learning', exact: true }).click();
  await page.getByLabel('Minutes spent on this step').fill('2');
  await answer(page, '99');
  await page.getByRole('button', { name: 'Review progress', exact: true }).click();
  await expect(plan).toContainText('5 min remaining');
  await expect(plan).toContainText('Confirmed missing reasoning');
  const sid = await page.evaluate(() => localStorage.getItem('solve-session'));
  const before = await (await page.request.get('/api/sessions/' + sid)).json();
  await page.reload();
  await expect(plan).toContainText('5 min remaining');
  await page.getByRole('button', { name: 'Continue learning', exact: true }).click();
  await page.getByLabel('Minutes spent on this step').fill('5');
  await answer(page, '1');
  await expect(page.getByRole('heading', { name: 'Study time used' })).toBeVisible();
  await page.getByRole('button', { name: 'Review progress', exact: true }).click();
  await expect(plan).toContainText('0 min remaining');
  await page.getByRole('button', { name: 'Continue learning', exact: true }).click();
  await expect(page).toHaveURL(/\/study\/learn$/);
  await page.reload();
  await expect(page.getByRole('heading', { name: 'Study time used' })).toBeVisible();
  await page.getByRole('button', { name: 'Continue with 30 minutes' }).click();
  await expect(page.getByText('MAKE IT YOURS', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Review progress', exact: true }).click();
  await expect(plan).toContainText('30 min remaining');
  const after = await (await page.request.get('/api/sessions/' + sid)).json();
  expect(after.attempt_count).toBe(before.attempt_count + 1);
  expect(after.task.phase).toBe('practice');
  expect(after.spent_minutes).toBe(7);
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'tmp/ui/study-plan-mobile.png', fullPage: true });
});
