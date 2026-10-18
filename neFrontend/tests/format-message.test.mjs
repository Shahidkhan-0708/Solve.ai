import {test} from 'node:test';
import assert from 'node:assert/strict';
import {formatMessage} from '../lib/format-message.mjs';

test('student answers render headings, lists, code, and math',()=>{
 const html=formatMessage('### Worked example\n\n**Base case:** $n = 1$\n\n* Return one.\n* Recurse otherwise.\n\n'+String.fromCharCode(96).repeat(3)+'python\nreturn factorial(n - 1)\n'+String.fromCharCode(96).repeat(3));
 assert.match(html,/<h3>Worked example<\/h3>/);assert.match(html,/<strong>Base case:<\/strong>/);assert.match(html,/<ul>/);assert.match(html,/<pre><code/);assert.match(html,/class="katex"/);
});
test('untrusted HTML, scripts, links, and math cannot execute or load resources',()=>{
 const html=formatMessage('<script>alert(1)</script>\n\n<img src=x onerror=alert(1)>\n\n[bad](javascript:alert(1))\n\n$\\includegraphics{https://example.com/track}$');
 assert.doesNotMatch(html,/<script|<img|href="javascript:|<iframe/);assert.match(html,/&lt;script&gt;/);
});
test('incomplete streamed Markdown and math remain readable',()=>{
 for(const text of ['**Working','$$x','\\(n+1','###',''])assert.equal(typeof formatMessage(text),'string');
 assert.match(formatMessage('\\(n+1\\)'),/class="katex"/);
});
