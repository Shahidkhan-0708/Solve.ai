import {spawn} from 'node:child_process';
import {existsSync} from 'node:fs';
import {createRequire} from 'node:module';
const require=createRequire(import.meta.url);const args=process.argv.slice(2);
// Managed preview supplies Vite-style flags; map them to the Next.js CLI.
const managed=args.includes('--strictPort');
const normalized=args.filter(arg=>arg!=='--strictPort').map(arg=>arg==='--host'?'--hostname':arg);
const command=managed&&existsSync('.next/BUILD_ID')?'start':'dev';
if(!normalized.includes('--port')&&!normalized.includes('-p'))normalized.push('--port','3002');
const child=spawn(process.execPath,['--max-old-space-size=4096',require.resolve('next/dist/bin/next'),command,...(command==='dev'?['--turbo']:[]),...normalized],{stdio:'inherit'});
for(const signal of ['SIGINT','SIGTERM'])process.on(signal,()=>child.kill(signal));
child.on('exit',code=>process.exit(code??1));
