import { test, expect } from '@playwright/test';

test('microphone is opt-in, stops on navigation, and denial leaves typing usable', async ({ page }) => {
  await page.addInitScript(() => {
    const state = { calls: 0, stream: null as MediaStream | null, deny: false, pending: false, resolve: null as (() => void) | null };
    Object.assign(window, { testMic: state });
    Object.defineProperty(navigator.mediaDevices, 'getUserMedia', { value: async () => {
      state.calls++;
      if (state.deny) throw new DOMException('Denied', 'NotAllowedError');
      if (state.pending) await new Promise<void>(resolve => { state.resolve = resolve; });
      const audio = new AudioContext();
      state.stream = audio.createMediaStreamDestination().stream;
      return state.stream;
    } });
  });
  await page.goto('/study/demo');
  await expect(page.getByRole('button', { name: 'Listen', exact: true })).toBeEnabled();
  expect(await page.evaluate(() => (window as any).testMic.calls)).toBe(0);
  await page.getByRole('button', { name: 'Listen', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Stop listening' })).toHaveAttribute('aria-pressed', 'true');
  await expect(page.getByText('Listening for visual feedback. Audio is not saved or transcribed.')).toBeVisible();
  await page.setViewportSize({ width: 390, height: 844 });
  expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth)).toBe(true);
  await page.screenshot({ path: 'tmp/ui/chat-microphone-mobile.png', fullPage: true });
  await page.getByRole('button', { name: 'Stop listening' }).click();
  expect(await page.evaluate(() => (window as any).testMic.stream.getTracks()[0].readyState)).toBe('ended');
  await page.getByRole('button', { name: 'Listen', exact: true }).click();
  await page.getByRole('button', { name: 'Study plan', exact: true }).click();
  await expect(page).toHaveURL(/\/study\/plan$/);
  await expect.poll(() => page.evaluate(() => (window as any).testMic.stream.getTracks()[0].readyState)).toBe('ended');
  await page.getByRole('button', { name: 'Continue learning', exact: true }).click();
  await page.evaluate(() => { (window as any).testMic.deny = true; });
  await page.getByRole('button', { name: 'Listen', exact: true }).click();
  await expect(page.getByText('Microphone access denied. You can still type your answer.')).toBeVisible();
  await page.locator('#answer').fill('1');
  await expect(page.getByRole('button', { name: 'Check my understanding' })).toBeEnabled();
  await page.evaluate(() => { (window as any).testMic.deny = false; (window as any).testMic.pending = true; });
  await page.getByRole('button', { name: 'Listen', exact: true }).click();
  await expect(page.getByRole('button', { name: 'Connecting microphone…' })).toBeDisabled();
  await page.getByRole('button', { name: 'Study plan', exact: true }).click();
  await expect(page).toHaveURL(/\/study\/plan$/);
  await page.evaluate(() => { (window as any).testMic.resolve(); });
  await expect.poll(() => page.evaluate(() => (window as any).testMic.stream.getTracks()[0].readyState)).toBe('ended');
});

test('solving orb appears during an answer check and clears with feedback', async ({ page }) => {
  await page.goto('/study/demo');
  await expect(page.locator('#answer')).toBeVisible();
  let release!: () => void;
  const gate = new Promise<void>(resolve => { release = resolve; });
  await page.route('**/attempt', async route => { await gate; await route.continue(); });
  await page.locator('#answer').fill('1');
  await page.getByRole('button', { name: 'Check my understanding' }).click();
  const status = page.getByRole('status').filter({ hasText: 'Checking your reasoning' });
  try {
    await expect(status.locator('canvas')).toBeVisible();
    await expect(page.locator('#answer')).toBeDisabled();
  } finally { release(); }
  await expect(status).toHaveCount(0);
  await expect(page.getByText('Correct answer.', { exact: true })).toBeVisible();
});
