import fs from 'node:fs';
import os from 'node:os';
import path from 'node:path';
import { spawnSync } from 'node:child_process';

const root = process.cwd();
const nativeTemp = fs.realpathSync(os.tmpdir());
// OneDrive cloud entries can appear as links to Node's directory scanner.
// Run identical test copies in native temp; keep configuration and test sources in the repo.
const scratch = fs.mkdtempSync(path.join(nativeTemp, 'solve-e2e-'));
const playwrightImport = JSON.stringify(path.join(root, 'node_modules', '@playwright', 'test', 'index.js').replaceAll('\\', '/'));
let config = fs.readFileSync(path.join(root, 'playwright.config.ts'), 'utf8')
  .replace("'@playwright/test'", playwrightImport)
  .replace("testDir: './tests/browser'", "testDir: '.'")
  .replace("reporter: 'list',", "reporter: 'list', outputDir: " + JSON.stringify(path.join(root, 'test-results').replaceAll('\\', '/')) + ',');
fs.writeFileSync(path.join(scratch, 'playwright.config.ts'), config);
for (const file of fs.readdirSync(path.join(root, 'tests', 'browser'))) {
  if (!file.endsWith('.spec.ts')) continue;
  const test = fs.readFileSync(path.join(root, 'tests', 'browser', file), 'utf8').replace("'@playwright/test'", playwrightImport);
  fs.writeFileSync(path.join(scratch, file), test);
}
const result = spawnSync(process.execPath, [path.join(root, 'node_modules', 'playwright', 'cli.js'), 'test', '--config', path.join(scratch, 'playwright.config.ts'), ...process.argv.slice(2)], { cwd: root, stdio: 'inherit' });
const resolved = fs.realpathSync(scratch);
if (resolved.startsWith(nativeTemp + path.sep) && path.basename(resolved).startsWith('solve-e2e-')) fs.rmSync(resolved, { recursive: true });
if (result.error) console.error(result.error.message);
process.exit(result.status ?? 1);
