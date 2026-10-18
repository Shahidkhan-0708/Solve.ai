import { test, expect } from '@playwright/test';

test('PWA manifest and branded icons support installation', async ({ page, request }) => {
  await page.goto('/');
  const href = await page.locator('link[rel="manifest"]').getAttribute('href');
  expect(href).toBeTruthy();
  const response = await request.get(href!);
  expect(response.ok()).toBe(true);
  const manifest = await response.json();
  expect(manifest).toMatchObject({ name: 'Solve', start_url: '/', scope: '/', display: 'standalone' });
  expect(manifest.icons).toHaveLength(3);
  for (const icon of manifest.icons) {
    const image = await request.get(icon.src);
    expect(image.ok()).toBe(true);
    expect(image.headers()['content-type']).toContain('image/png');
    const bytes = await image.body();
    expect(bytes.subarray(1, 4).toString()).toBe('PNG');
    expect(bytes.readUInt32BE(16) + 'x' + bytes.readUInt32BE(20)).toBe(icon.sizes);
  }
  await expect(page.locator('meta[name="theme-color"]')).toHaveAttribute('content', '#161616');
  await expect(page.locator('meta[name="mobile-web-app-capable"]')).toHaveAttribute('content', 'yes');
  const appleIcon = await request.get('/icons/solve-180.png');
  expect(appleIcon.ok()).toBe(true);
  const cdp = await page.context().newCDPSession(page);
  const result = await cdp.send('Page.getAppManifest');
  expect(result.errors).toEqual([]);
  const { installabilityErrors } = await cdp.send('Page.getInstallabilityErrors');
  // Playwright's isolated context is incognito, where installation is disabled.
  expect(installabilityErrors.filter(error => error.errorId !== 'in-incognito')).toEqual([]);
  await cdp.detach();
});
