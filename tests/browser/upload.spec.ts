import { test, expect, type Page } from '@playwright/test';

function pdf() {
  const stream = 'BT /F1 12 Tf 50 750 Td (Recursion calls itself with a smaller problem.) Tj 0 -20 Td (A base case stops the calls and returns directly.) Tj ET';
  const objects = [
    '<< /Type /Catalog /Pages 2 0 R >>',
    '<< /Type /Pages /Kids [3 0 R] /Count 1 >>',
    '<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 4 0 R >> >> /Contents 5 0 R >>',
    '<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>',
    `<< /Length ${stream.length} >>\nstream\n${stream}\nendstream`,
  ];
  let content = '%PDF-1.4\n';
  const offsets = [0];
  objects.forEach((object, i) => { offsets.push(content.length); content += `${i + 1} 0 obj\n${object}\nendobj\n`; });
  const xref = content.length;
  content += `xref\n0 6\n0000000000 65535 f \n${offsets.slice(1).map(offset => String(offset).padStart(10, '0') + ' 00000 n \n').join('')}trailer\n<< /Size 6 /Root 1 0 R >>\nstartxref\n${xref}\n%%EOF\n`;
  return Buffer.from(content);
}

async function intake(page: Page) {
  await page.goto('/study/goal');
  await page.getByLabel('Your learning goal').fill('Understand recursion');
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await page.getByRole('button', { name: 'Next', exact: true }).click();
  await expect(page.locator('input[type=file]')).toBeAttached();
}

test.afterEach(async ({ page }) => {
  const id = await page.evaluate(() => localStorage.getItem('solve-session'));
  if (id) await page.request.delete('/api/sessions/' + id, { headers: { Origin: new URL(page.url()).origin } });
});

test('PDF selection shows errors, extracted material, and saved content after reload', async ({ page }) => {
  await intake(page);
  const input = page.locator('input[type=file]');
  await input.setInputFiles({ name: 'broken.pdf', mimeType: 'application/pdf', buffer: Buffer.from('not a PDF') });
  await expect(page.getByRole('alert').filter({ hasText: 'not a valid PDF' })).toBeVisible();
  await input.setInputFiles({ name: 'recursion.pdf', mimeType: 'application/pdf', buffer: pdf() });
  await expect(page.getByRole('status').filter({ hasText: 'recursion.pdf added' })).toBeVisible();
  await page.getByRole('button', { name: /^recursion\.pdf / }).click();
  await expect(page.getByRole('dialog')).toContainText('A base case stops the calls');
  await page.keyboard.press('Escape');
  await page.reload();
  await expect(page.getByRole('button', { name: /^recursion\.pdf / })).toBeVisible();
});

test('dropping a PDF into the upload box adds its material', async ({ page }) => {
  await intake(page);
  const transfer = await page.evaluateHandle(bytes => {
    const data = new DataTransfer();
    data.items.add(new File([new Uint8Array(bytes)], 'dropped.pdf', { type: 'application/pdf' }));
    return data;
  }, Array.from(pdf()));
  await page.locator('.upload-area').dispatchEvent('drop', { dataTransfer: transfer });
  await expect(page.getByRole('button', { name: /^dropped\.pdf / })).toBeVisible();
  const multiple = await page.evaluateHandle(() => {
    const data = new DataTransfer();
    data.items.add(new File(['first'], 'first.pdf'));
    data.items.add(new File(['second'], 'second.pdf'));
    return data;
  });
  await page.locator('.upload-area').dispatchEvent('drop', { dataTransfer: multiple });
  await expect(page.getByRole('alert').filter({ hasText: 'one PDF at a time' })).toBeVisible();
  const unsupported = await page.evaluateHandle(() => {
    const data = new DataTransfer();
    data.items.add(new File(['notes'], 'notes.docx'));
    return data;
  });
  await page.locator('.upload-area').dispatchEvent('drop', { dataTransfer: unsupported });
  await expect(page.getByRole('alert').filter({ hasText: 'Choose a PDF, or use Paste notes' })).toBeVisible();
});
