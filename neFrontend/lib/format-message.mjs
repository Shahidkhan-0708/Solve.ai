import MarkdownIt from 'markdown-it';
import katex from 'katex';

const markdown=new MarkdownIt({html:false,linkify:false,breaks:false}).disable('image');
markdown.inline.ruler.before('escape','math',(state,silent)=>{
 const start=state.pos,source=state.src;
 const open=source.startsWith('$$',start)?'$$':source.startsWith('\\[',start)?'\\[':source.startsWith('\\(',start)?'\\(':source[start]==='$'?'$':null;
 if(!open)return false;
 const close=open==='\\['?'\\]':open==='\\('?'\\)':open;
 let end=source.indexOf(close,start+open.length);
 while(end>=0&&source[end-1]==='\\')end=source.indexOf(close,end+close.length);
 if(end<0||end>=state.posMax)return false;
 const content=source.slice(start+open.length,end).trim();if(!content)return false;
 if(!silent){const token=state.push('math','',0);token.content=content;token.meta={display:open==='$$'||open==='\\['};}
 state.pos=end+close.length;return true;
});
markdown.renderer.rules.math=(tokens,index)=>katex.renderToString(tokens[index].content,{displayMode:tokens[index].meta.display,throwOnError:false,trust:false,strict:'ignore',maxExpand:200,maxSize:20});
export function formatMessage(text){return markdown.render(text);}
