import { test, expect, type Page } from '@playwright/test';
import { mkdir } from 'node:fs/promises';

async function openLesson(page: Page) {
  await page.goto('/');
  await page.getByRole('button', { name: 'Try the guided demo' }).click();
  await page.getByRole('button', { name: "I don't know yet", exact: true }).click();
  await expect(page.getByRole('region', { name: 'Step-by-step visual explanation' })).toBeVisible();
}

test('Manim clips play, pause at the end, replay, navigate and reset between concepts', async ({ page }) => {
  const errors: string[] = [];
  page.on('pageerror', error => errors.push(error.message));
  await openLesson(page);
  const lesson = page.getByRole('region', { name: 'Step-by-step visual explanation' });
  await expect(lesson.getByRole('button', { name: 'Back', exact: true })).toBeDisabled();
  const video = lesson.locator('video');
  await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.readyState)).toBeGreaterThanOrEqual(2);
  expect(await video.evaluate((v: HTMLVideoElement) => v.videoWidth)).toBe(1200);
  expect(await video.evaluate((v: HTMLVideoElement) => v.paused)).toBe(true);
  await lesson.getByRole('button', { name: 'Play step', exact: true }).click();
  await expect.poll(() => video.evaluate((v: HTMLVideoElement) => v.ended)).toBe(true);
  await expect(lesson.getByText('STEP 1 OF 3')).toBeVisible();
  await lesson.getByRole('button', { name: 'Replay step', exact: true }).click();
  await expect(lesson.getByRole('button', { name: 'Pause step', exact: true })).toBeVisible();
  await lesson.getByRole('button', { name: 'Pause step', exact: true }).click();
  expect(await video.evaluate((v: HTMLVideoElement) => v.paused)).toBe(true);
  await lesson.getByRole('button', { name: 'Next step', exact: true }).click();
  await expect(lesson.getByText('STEP 2 OF 3')).toBeVisible();
  await lesson.getByRole('button', { name: 'Back', exact: true }).click();
  await expect(lesson.getByText('STEP 1 OF 3')).toBeVisible();
  await lesson.getByLabel('Still diagrams').check();
  await expect(lesson.locator('video')).toHaveCount(0);
  await expect(lesson.locator('img')).toBeVisible();
  await mkdir('tmp/ui', { recursive: true });
  await lesson.screenshot({ path: 'tmp/ui/manim-desktop.png' });
  await page.setViewportSize({ width: 390, height: 844 });
  await lesson.screenshot({ path: 'tmp/ui/manim-mobile.png' });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await lesson.getByRole('button', { name: 'Next step', exact: true }).click();
  await lesson.getByRole('button', { name: 'Next step', exact: true }).click();
  await lesson.getByRole('button', { name: 'Try it yourself', exact: true }).click();
  await expect(page.locator('#answer')).toBeFocused();

  // Move through repair and practice, then check that the new concept starts at step one.
  for (const value of ['1', '1']) {
    await page.locator('#answer').fill(value);
    await page.getByRole('button', { name: 'Check my understanding' }).click();
    await expect(page.getByRole('status').filter({ hasText: 'Checking your reasoning' })).toHaveCount(0);
  }
  await expect(page.getByRole('heading', { name: 'Make the problem smaller' })).toBeVisible();
  await page.getByRole('button', { name: "I don't know yet", exact: true }).click();
  await expect(lesson.getByText('STEP 1 OF 3')).toBeVisible();
  await expect(lesson.locator('video')).toHaveAttribute('src', /concept-1-step-0/);
  expect(errors).toEqual([]);
});

test('reduced motion defaults to diagrams and missing clips retain the lesson', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await openLesson(page);
  const lesson = page.getByRole('region', { name: 'Step-by-step visual explanation' });
  await expect(lesson.getByLabel('Still diagrams')).toBeChecked();
  await expect(lesson.locator('video')).toHaveCount(0);
  await page.route('**/lessons/**/*.mp4', route => route.abort());
  await lesson.getByLabel('Still diagrams').uncheck();
  await expect(lesson.getByText(/Video unavailable/)).toBeVisible();
  await expect(lesson.getByText('Check whether n is 0 or 1.')).toBeVisible();
  await lesson.getByRole('button', { name: 'Next step', exact: true }).click();
  await expect(lesson.getByText('STEP 2 OF 3')).toBeVisible();
});

test('interactive trace checks changed inputs and resets with keyboard control', async ({ page }) => {
  await openLesson(page);
  const exercise = page.getByRole('region', { name: 'Interactive recursion exercise' });
  for (const [n, result, recursiveCalls] of [[0, 1, 0], [4, 24, 3], [7, 5040, 6]]) {
    await exercise.getByLabel('Starting input').selectOption(String(n));
    await exercise.getByRole('spinbutton').fill(String(result));
    await exercise.getByRole('button', { name: 'Check prediction and reveal trace' }).click();
    await expect(exercise.getByRole('status')).toHaveText('Your prediction matches.');
    const next = exercise.getByRole('button', { name: 'Next trace step' });
    while (await next.isEnabled()) await next.click();
    await expect(exercise.getByText(`factorial(${n}) = ${result} · ${recursiveCalls} recursive calls after the initial call.`, { exact: true })).toBeVisible();
    await expect(exercise.getByRole('list', { name: 'Call sequence' }).getByRole('listitem')).toHaveCount(recursiveCalls + 1);
    await exercise.getByRole('button', { name: 'Reset prediction' }).click();
  }
  await exercise.getByLabel('Starting input').focus();
  await page.keyboard.press('ArrowUp');
  await expect(exercise.getByLabel('Starting input')).toHaveValue('6');
  await expect(exercise.getByRole('spinbutton')).toHaveValue('');
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await exercise.screenshot({ path: 'tmp/ui/interactive-recursion-mobile.png' });
});

test('worked help persists and assisted success leads to another independent task', async ({ page }) => {
  await page.goto('/');
  await page.getByRole('button', { name: 'Try the guided demo' }).click();
  await page.locator('#answer').fill('1');
  await page.getByRole('button', { name: 'Check my understanding' }).click();
  await expect(page.getByText('MAKE IT YOURS', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The idea, simply' })).toHaveCount(0);
  await page.getByRole('button', { name: 'Show a worked example' }).click();
  await expect(page.getByRole('heading', { name: 'The idea, simply' })).toBeVisible();
  await page.reload();
  await expect(page.getByRole('heading', { name: 'The idea, simply' })).toBeVisible();
  await page.locator('#answer').fill('1');
  await page.getByRole('button', { name: 'Check my understanding' }).click();
  await expect(page.getByText('Worked/source help was used. A fresh independent application is still needed.')).toBeVisible();
  await expect(page.getByText('MAKE IT YOURS', { exact: true })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'The idea, simply' })).toHaveCount(0);
  const sid = await page.evaluate(() => localStorage.getItem('solve-session'));
  const state = await (await page.request.get('/api/sessions/' + sid)).json();
  expect(state.progress[0].status).toBe('introduced');
  expect(state.progress[0].successes).toBe(0);
  expect(state.task.assisted).toBe(false);
  await page.getByText('Your answer and reasoning checks').click();
  await expect(page.locator('.answer-evidence')).toContainText('1');
  await expect(page.getByRole('region', { name: 'Today’s task queue' })).toBeVisible();
});