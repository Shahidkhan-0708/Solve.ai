import { spawn } from 'node:child_process';
import { existsSync } from 'node:fs';
import path from 'node:path';

const root = process.cwd();
const frontend = path.join(root, 'neFrontend');
const production = process.argv.includes('--production');
const windows = process.platform === 'win32';
const winPython = path.join(root, '.venv', 'Scripts', 'python.exe');
const linuxPython = path.join(root, '.venv', 'bin', 'python');
const linuxEnvironment = existsSync(path.join(root, '.venv', 'bin', 'activate'));
const uvicorn = ['-m', 'uvicorn', 'backend.main:app', '--host', '127.0.0.1', '--port', '8000', '--log-level', 'info'];
let apiCommand;
let apiArgs;
if (process.env.PYTHON_BIN) {
  apiCommand = process.env.PYTHON_BIN; apiArgs = uvicorn;
} else if (windows && existsSync(winPython) && !linuxEnvironment) {
  apiCommand = winPython; apiArgs = uvicorn;
} else if (windows && linuxEnvironment) {
  const wslRoot = '/mnt/' + root[0].toLowerCase() + root.slice(2).replaceAll('\\', '/');
  apiCommand = 'wsl.exe';
  apiArgs = ['-d', 'Ubuntu', '--cd', wslRoot, '--', wslRoot + '/.venv/bin/python', ...uvicorn];
} else {
  apiCommand = existsSync(linuxPython) ? linuxPython : 'python3'; apiArgs = uvicorn;
}
console.log('Solve: frontend http://127.0.0.1:3002 | API http://127.0.0.1:8000');
const children = [
  spawn(apiCommand, apiArgs, { cwd: root, stdio: 'inherit', env: { ...process.env, ALLOWED_ORIGINS: process.env.ALLOWED_ORIGINS || 'http://localhost:3002,http://127.0.0.1:3002' } }),
  spawn(process.execPath, ['--max-old-space-size=4096', 'node_modules/next/dist/bin/next', production ? 'start' : 'dev', ...(!production ? ['--webpack'] : []), '--hostname', '127.0.0.1', '--port', '3002'], { cwd: frontend, stdio: 'inherit' }),
];
let stopping = false;
function stop(code = 0) {
  if (stopping) return;
  stopping = true;
  for (const child of children) child.kill('SIGTERM');
  setTimeout(() => process.exit(code), 600).unref();
}
for (const child of children) {
  child.on('error', error => { console.error(error.message); stop(1); });
  child.on('exit', (code, signal) => stop(code ?? (signal ? 1 : 0)));
}
process.on('SIGINT', () => stop());
process.on('SIGTERM', () => stop());
