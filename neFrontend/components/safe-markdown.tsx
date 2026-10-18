import { Fragment } from 'react';
// Supported subset: fenced code, headings, inline code, bold, and safe HTTP(S) links.
// User text always becomes React text nodes; HTML is never interpreted.
function inline(text: string) {
  return text.split(/(`[^`]+`|\*\*[^*]+\*\*|\[[^\]]+\]\(https?:\/\/[^\s)]+\))/g).map((part,index) => {
    if (part.startsWith('`') && part.endsWith('`')) return <code key={index}>{part.slice(1,-1)}</code>;
    if (part.startsWith('**') && part.endsWith('**')) return <strong key={index}>{part.slice(2,-2)}</strong>;
    const link = part.match(/^\[([^\]]+)\]\((https?:\/\/[^\s)]+)\)$/);
    if (link) return <a key={index} href={link[2]} target="_blank" rel="noopener noreferrer">{link[1]}</a>;
    return <Fragment key={index}>{part}</Fragment>;
  });
}
export default function SafeMarkdown({ text }: { text:string }) {
  return <>{text.split(/(```[\s\S]*?```)/g).map((part,index) => part.startsWith('```') ? <pre key={index}><code>{part.slice(3,-3).replace(/^\w*\n/,'')}</code></pre> : <Fragment key={index}>{part.split('\n').map((line,row) => /^#{1,3} /.test(line) ? <p key={row}><strong>{inline(line.replace(/^#{1,3} /,''))}</strong></p> : <p key={row}>{inline(line)}</p>)}</Fragment>)}</>;
}
