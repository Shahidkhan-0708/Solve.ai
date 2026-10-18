import { test, expect } from '@playwright/test';

for (const reduced of [false, true]) {
  test(`generated Manim steps and learner controls${reduced ? ' with reduced motion' : ''}`, async ({ page }) => {
    await page.emulateMedia({ reducedMotion: reduced ? 'reduce' : 'no-preference' });
    let polls = 0;
    await page.route('**/api/**', async route => {
      const pathname = new URL(route.request().url()).pathname;
      if (/\/animations\/0$/.test(pathname)) {
        const ready = route.request().method() === 'GET' && ++polls > 1;
        return route.fulfill({ json: ready ? { status: 'ready', title: 'Generated explanation', steps: [
          { title: 'Start with the input', explanation: 'Inspect this input before deciding whether another call is needed.', video: '/lessons/recursion-v1/concept-0-step-0.mp4', still: '/lessons/recursion-v1/concept-0-step-0.png' },
          { title: 'Apply the stopping rule', explanation: 'The base case returns directly, so no smaller call is needed.', video: '/lessons/recursion-v1/concept-0-step-1.mp4', still: '/lessons/recursion-v1/concept-0-step-1.png' },
        ] } : { status: 'planning', steps: [] } });
      }
      const response = await route.fetch();
      const contentType = response.headers()['content-type'] || '';
      if (contentType.includes('application/json')) {
        const body = await response.json();
        if (body && typeof body === 'object' && 'demo' in body && 'task' in body) body.demo = false;
        return route.fulfill({ response, json: body });
      }
      return route.fulfill({ response });
    });
    await page.goto('/');
    await page.getByRole('button', { name: 'Try the guided demo' }).click();
    await page.getByRole('button', { name: 'Show a worked example' }).click();
    await expect(page.getByText('Breaking the idea into small steps', { exact: true })).toBeVisible();
    await page.getByText('Read the worked steps', { exact: true }).click();
    await expect(page.getByText('Check whether n is 0 or 1.', { exact: true })).toBeVisible();
    const lesson = page.getByRole('region', { name: 'Generated visual lesson', exact: true });
    await expect(lesson.getByRole('heading', { name: 'Start with the input' })).toBeVisible();
    if (reduced) {
      await expect(lesson.locator('img')).toBeVisible();
      await expect(lesson.locator('video')).toHaveCount(0);
    } else {
      await expect(lesson.locator('video')).toHaveAttribute('src', /concept-0-step-0.mp4/);
      await lesson.getByRole('button', { name: 'Play step', exact: true }).click();
      await expect.poll(() => lesson.locator('video').evaluate((video: HTMLVideoElement) => video.currentTime)).toBeGreaterThan(0);
    }
    await lesson.getByRole('button', { name: 'Next step', exact: true }).click();
    await expect(lesson.getByRole('heading', { name: 'Apply the stopping rule' })).toBeVisible();
    await lesson.getByRole('button', { name: 'Back', exact: true }).click();
    await expect(lesson.getByRole('heading', { name: 'Start with the input' })).toBeVisible();
  });
}

test('animation failure leaves teaching text available and offers retry', async ({ page }) => {
  let retries = 0;
  await page.route('**/api/**', async route => {
    const pathname = new URL(route.request().url()).pathname;
    if (/\/animations\/0$/.test(pathname)) {
      retries++;
      return route.fulfill({ json: { status: 'failed', steps: [], error: 'Render unavailable. Your lesson is saved.' } });
    }
    const response = await route.fetch();
    if ((response.headers()['content-type'] || '').includes('application/json')) {
      const body = await response.json();
      if (body && typeof body === 'object' && 'demo' in body && 'task' in body) body.demo = false;
      return route.fulfill({ response, json: body });
    }
    return route.fulfill({ response });
  });
  await page.goto('/');
  await page.getByRole('button', { name: 'Try the guided demo' }).click();
  await page.getByRole('button', { name: 'Show a worked example' }).click();
  await expect(page.getByText('Render unavailable. Your lesson is saved.')).toBeVisible();
  await expect(page.getByText('Check whether n is 0 or 1.', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'Retry animation' }).click();
  await expect.poll(() => retries).toBe(2);
});
