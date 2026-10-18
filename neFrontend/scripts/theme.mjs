import fs from 'node:fs';import vm from 'node:vm';
const root=new URL('../',import.meta.url);const extend=vm.runInNewContext('('+fs.readFileSync(new URL('scripts/exported-theme.txt',root),'utf8')+')').theme.extend;
let css='@import "../public/fonts/inter.css";\n@import "../public/fonts/material-symbols.css" layer(base);\n@import "tailwindcss";\n@source "../components";\n@source "./";\n\n:root {\n';
for(const[k,v]of Object.entries(extend.colors))css+=`  --${k}: ${v};\n`;
for(const[k,v]of Object.entries(extend.spacing))css+=`  --${k}: ${v};\n`;
css+='  --sidebar-width: 16rem;\n  --workspace-width: 720px;\n  --composer-radius: 20px;\n}\n@theme inline {\n';
for(const[k]of Object.entries(extend.colors))css+=`  --color-${k}: var(--${k});\n`;
for(const[k]of Object.entries(extend.spacing))css+=`  --spacing-${k}: var(--${k});\n`;
for(const[k,v]of Object.entries(extend.fontFamily))css+=`  --font-${k}: "${v[0]}";\n`;
for(const[k,v]of Object.entries(extend.fontSize)){css+=`  --text-${k}: ${v[0]};\n`;for(const[n,x]of Object.entries(v[1]))css+=`  --text-${k}--${n.replace(/[A-Z]/g,c=>'-'+c.toLowerCase())}: ${x};\n`;}
css+='  --radius-sm: 2px;\n  --radius: 4px;\n  --radius-md: 6px;\n  --radius-lg: 8px;\n  --radius-xl: 12px;\n  --shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05);\n  --shadow-md: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);\n  --shadow-xl: 0 20px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1);\n}\n';
fs.writeFileSync(new URL('app/tokens.css',root),css);
