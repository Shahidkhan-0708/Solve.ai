// This exact function is embedded into the generated worker and unit tested.
export function requestPolicy(request, origin, publicPaths, assets) {
 const url=new URL(request.url);
 if(request.method!=='GET'||url.origin!==origin||url.search||request.headers.has('authorization')||request.headers.has('cookie')||request.headers.has('rsc')||request.headers.has('next-router-state-tree'))return 'network';
 if(url.pathname.startsWith('/api/')||url.pathname==='/api')return 'network';
 if(request.mode==='navigate'&&publicPaths.includes(url.pathname))return 'navigation';
 if(assets.includes(url.pathname))return 'asset';
 return 'network';
}
