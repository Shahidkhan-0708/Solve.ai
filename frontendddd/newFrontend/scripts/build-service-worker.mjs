import { readFile, writeFile, readdir, mkdir } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { requestPolicy } from './sw-policy.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const publicRoot=path.join(root,'public');
const routes={'/':'index','/study':'study','/plan':'plan','/knowledge-graph':'knowledge-graph','/target':'target','/settings':'settings'};
const prerender=JSON.parse(await readFile(path.join(root,'.next/prerender-manifest.json'),'utf8'));
await mkdir(path.join(publicRoot,'offline'),{recursive:true});
const mapping={};
for(const[route,file] of Object.entries(routes)) {
 if(!prerender.routes[route]||prerender.routes[route].initialRevalidateSeconds!==false)throw Error(`Offline shell ${route} must remain a build-time public static page.`);
 const html=await readFile(path.join(root,'.next/server/app',file+'.html'),'utf8');
 await writeFile(path.join(publicRoot,'offline',file+'.html'),html);
 mapping[route]='/offline/'+file+'.html';
}
const manifest=await readFile(path.join(root,'.next/server/app/manifest.webmanifest.body'));
await writeFile(path.join(publicRoot,'offline/manifest.webmanifest'),manifest);
async function walk(dir) {const entries=await readdir(dir,{withFileTypes:true});const output=[];for(const entry of entries){const abs=path.join(dir,entry.name);if(entry.isDirectory())output.push(...await walk(abs));else output.push(abs);}return output;}
const assets=['/manifest.webmanifest'];
for(const folder of ['assets','fonts','icons','offline'])for(const file of await walk(path.join(publicRoot,folder)))assets.push('/'+path.relative(publicRoot,file).split(path.sep).join('/'));
for(const file of await walk(path.join(root,'.next/static')))assets.push('/_next/static/'+path.relative(path.join(root,'.next/static'),file).split(path.sep).join('/'));
const digest=createHash('sha256');
for(const url of assets){digest.update(url);digest.update(await readFile(url==='/manifest.webmanifest'?path.join(publicRoot,'offline/manifest.webmanifest'):url.startsWith('/_next/static/')?path.join(root,'.next/static',url.slice('/_next/static/'.length)):path.join(publicRoot,url.slice(1))));}
const version=digest.digest('hex').slice(0,16);
const worker=`/* Generated from a production build. Never cache network HTML, RSC, API or user responses. */
const CACHE='solve-static-${version}';
const ASSETS=${JSON.stringify(assets)};
const PUBLIC_PAGES=${JSON.stringify(mapping)};
const requestPolicy=${requestPolicy.toString()};
self.addEventListener('install',event=>{event.waitUntil((async()=>{
 const cache=await caches.open(CACHE);
 try {for(const url of ASSETS){const response=await fetch(new Request(url,{credentials:'omit',cache:'reload'}));
  if(!response.ok||response.type==='opaque'||/private|no-store/i.test(response.headers.get('cache-control')||''))throw Error('Unsafe precache response '+url);
  await cache.put(url,response);
 }}catch(error){await caches.delete(CACHE);throw error;}
 if(!self.registration.active)await self.skipWaiting();
})());});
self.addEventListener('activate',event=>{event.waitUntil((async()=>{for(const key of await caches.keys())if(key.startsWith('solve-static-')&&key!==CACHE)await caches.delete(key);await self.clients.claim();})());});
self.addEventListener('message',event=>{if(event.data?.type==='ACTIVATE_UPDATE')self.skipWaiting();});
self.addEventListener('fetch',event=>{
 const kind=requestPolicy(event.request,self.location.origin,Object.keys(PUBLIC_PAGES),ASSETS);
 if(kind==='network')return;
 if(kind==='navigation')event.respondWith((async()=>{try{return await fetch(event.request);}catch{const cache=await caches.open(CACHE);return await cache.match(PUBLIC_PAGES[new URL(event.request.url).pathname])||Response.error();}})());
 else event.respondWith((async()=>{const cache=await caches.open(CACHE);return await cache.match(new URL(event.request.url).pathname)||fetch(event.request);})());
});
`;
await writeFile(path.join(publicRoot,'sw.js'),worker);
await writeFile(path.join(root,'docs/precache-manifest.json'),JSON.stringify({version,publicPages:mapping,assets},null,2)+'\n');
console.log(`Generated PWA worker ${version}: ${assets.length} public build assets; no runtime response caching.`);
