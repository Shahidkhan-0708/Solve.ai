"""One-time faithful JSX conversion of the supplied trusted Stitch HTML."""
from html.parser import HTMLParser
from pathlib import Path
import re,json
ROOT=Path(__file__).resolve().parents[1]
class Node:
 def __init__(self,tag,attrs=(),parent=None): self.tag=tag;self.attrs=dict(attrs);self.children=[];self.parent=parent
 def find(self,p):
  if p(self): return self
  for c in self.children:
   if isinstance(c,Node):
    r=c.find(p)
    if r:return r
 def walk(self):
  yield self
  for c in self.children:
   if isinstance(c,Node):yield from c.walk()
class Parser(HTMLParser):
 def __init__(self):super().__init__();self.root=Node('root');self.current=self.root
 def handle_starttag(self,t,a):
  n=Node(t,a,self.current);self.current.children.append(n)
  if t not in ['img','input','meta','link','br','hr']:self.current=n
 def handle_startendtag(self,t,a):self.handle_starttag(t,a)
 def handle_endtag(self,t):
  while self.current.tag not in [t,'root']:self.current=self.current.parent
  if self.current.tag==t:self.current=self.current.parent
 def handle_data(self,d):self.current.children.append(d)
p=Parser();source=(ROOT/'design-source/code.html').read_text();p.feed(source);body=p.root.find(lambda n:n.tag=='body')
def byid(i):return body.find(lambda n:n.attrs.get('id')==i)
def raw(code):return ('raw',code)
def add(n,**attrs):n.attrs.update(attrs)
# Attributes beginning @ become JSX expressions; raw child tuples become JSX.
for n in body.walk():
 if n.tag=='script':n.children=[];n.tag='omit'
 if n.tag=='span' and 'material-symbols-outlined' in n.attrs.get('class',''):add(n,**{'aria-hidden':'true'})
 n.attrs.pop('onclick',None)
 if n.tag=='img':
  n.attrs['src']='/assets/profile.png'
  if n.parent and n.parent.parent and n.parent.parent.attrs.get('class','').startswith('h-14'):
   n.attrs.update(src='/assets/solve-logo.png',alt='SOLVE brand',class_='h-7 w-auto object-contain');n.attrs['class']=n.attrs.pop('class_')
aside=body.find(lambda n:n.tag=='aside');aside.attrs['class']+=' solve-sidebar';add(aside,**{'@data-open':'sidebarOpen','aria-label':'Primary navigation'})
wrapper=body.find(lambda n:n.attrs.get('class')=='pl-64');wrapper.attrs['class']+=' solve-layout';add(wrapper,**{'@data-collapsed':'collapsed'})
header=body.find(lambda n:n.tag=='header');header.attrs['class']+=' solve-header'
collapse=body.find(lambda n:n.attrs.get('aria-label')=='Collapse sidebar');add(collapse,**{'@onClick':'toggleSidebar','@aria-expanded':'!collapsed'})
new=body.find(lambda n:n.tag=='button' and 'New session' in ''.join(c for c in n.children if isinstance(c,str)))
# New-session text is not a direct child; locate via icon.
if new is None:new=body.find(lambda n:n.tag=='span' and n.children==['edit_square']).parent.parent
add(new,**{'@onClick':'newSession'})
search=body.find(lambda n:n.tag=='input');add(search,**{'aria-label':'Search chats','@value':'search','@onChange':'(event) => setSearch(event.target.value)'})
paths={'learning-workspace':'/','study-workspace':'/study','study-plan':'/plan','knowledge-graph':'/knowledge-graph','target-status':'/target','settings':'/settings'}
for n in body.walk():
 if n.tag=='a' and 'data-path' in n.attrs:
  n.tag='Link';n.attrs['href']=paths[n.attrs['data-path']];n.attrs.pop('aria-current',None)
  add(n,**{'@onClick':'() => setSidebarOpen(false)','@aria-current':f'pathname === {json.dumps(n.attrs["href"])} ? "page" : undefined'})
  base=n.attrs.get('class','')
  if 'bg-primary-container' in base:base=base.replace(' bg-primary-container text-on-primary-container font-label-md',' font-label-md text-label-md text-on-surface-variant hover:bg-surface-container-high hover:text-on-surface')
  if n.attrs['href']=='/' and 'Chat' in n.children:base=base.replace(' bg-surface-container-lowest text-on-surface shadow-sm',' text-label-md text-on-surface-variant hover:text-on-surface')
  add(n,**{'@className':json.dumps(base)+f' + (pathname === {json.dumps(n.attrs["href"])} ? " '+('bg-surface-container-lowest text-on-surface shadow-sm' if n.attrs['data-path'] in ['study-workspace','learning-workspace'] and n.parent.tag=='nav' and 'flex items-center'==n.parent.attrs.get('class') else 'bg-primary-container text-on-primary-container')+'" : "")'})
  n.attrs.pop('class',None)
recent=body.find(lambda n:'overflow-y-auto' in n.attrs.get('class',''));recent.children[-1]=raw('{renderHistory()}')
add(body.find(lambda n:n.attrs.get('aria-label')=='Workspace actions'),**{'@onClick':'() => setDialog("actions")'})
main=body.find(lambda n:n.tag=='main');main.attrs['id']='main-content'
# Route content replaces the exported workspace only on unprovided routes.
workspace=main.children[0]
main.children=[raw('{pathname === "/" ? ('),workspace,raw(') : children}')]
center=body.find(lambda n:'max-w-[720px]' in n.attrs.get('class',''));center.attrs['class']+=' workspace-center'
headline=byid('main-headline');headline.children=[raw('{headline}')]
sub=byid('main-subtext');sub.children=[raw('{subtext}')]
# Chat transcript is escaped React content. Existing initial screen is unchanged.
index=center.children.index(sub);center.children.insert(index+1,raw('{messages.length > 0 && <Transcript messages={messages} />}'))
pop=byid('attachment-popover');pop.attrs['class']=pop.attrs['class'].replace('hidden ','');add(pop,**{'@hidden':'!attachmentOpen','role':'menu','aria-label':'Resources and inputs','@onKeyDown':'handleMenuKeyDown'})
buttons=[n for n in pop.walk() if n.tag=='button']
for n,handler in zip(buttons,['() => fileInput.current?.click()','() => { setAttachmentOpen(false); setDialog("link"); }','() => { setAttachmentOpen(false); setDialog("curriculum"); }']):add(n,**{'@onClick':handler,'role':'menuitem','@tabIndex':'attachmentOpen ? 0 : -1'})
tray=byid('attachments-tray');tray.attrs['class']=tray.attrs['class'].replace('hidden ','flex ');add(tray,**{'@hidden':'attachments.length === 0'});tray.children=[raw('{renderAttachments()}')]
input=byid('prompt-input');add(input,**{'aria-label':'Describe your goal or ask a question','@ref':'promptInput','@value':'prompt','@onChange':'(event) => setPrompt(event.target.value)','@onKeyDown':'handlePromptKeyDown','@maxLength':'10000'})
add(byid('attach-button'),**{'@onClick':'() => setAttachmentOpen(!attachmentOpen)','@aria-expanded':'attachmentOpen','aria-haspopup':'menu','aria-controls':'attachment-popover','@ref':'attachButton'})
mic=byid('mic-button');add(mic,**{'@onClick':'() => setDialog("microphone")'})
send=byid('send-button');add(send,**{'@disabled':'!prompt.trim()','@onClick':'sendMessage','@className':'"w-9 h-9 rounded-full flex items-center justify-center transition-all duration-200 " + (prompt.trim() ? "cursor-pointer bg-primary text-on-primary shadow-sm hover:bg-primary/90 active:scale-95" : "cursor-not-allowed bg-surface-container text-secondary")'});send.attrs.pop('class',None);send.attrs.pop('disabled',None)
for n in center.walk():
 if n.tag=='button' and 'group inline-flex' in n.attrs.get('class',''):
  label=''.join(c.strip() for c in n.children if isinstance(c,str))
  values={'Prepare for an exam':'Help me prepare for an exam in ','Understand a topic':'Explain the core principles of ','Learn a new skill':'Design a structured curriculum to learn '}
  add(n,**{'@onClick':f'() => fillPrompt({json.dumps(values[label])})'})
 if n.tag=='div' and 'cursor-pointer group' in n.attrs.get('class',''):
  name=n.find(lambda n:n.tag=='h2').children[0];add(n,**{'role':'button','@tabIndex':'0','@onClick':f'() => setDialog({json.dumps(name)})','@onKeyDown':f'(event) => {{ if (event.key === "Enter" || event.key === " ") {{ event.preventDefault(); setDialog({json.dumps(name)}); }} }}'})
for n in body.walk():
 if n.attrs.get('id','').startswith('btn-state-'):
  state=n.attrs['id'][10:];add(n,**{'@onClick':f'() => applyState({json.dumps(state)})','@aria-pressed':f'demoState === {json.dumps(state)}','@className':f'"px-2.5 py-1 rounded-full font-label-sm text-[12px] transition-all whitespace-nowrap " + (demoState === {json.dumps(state)} ? "bg-primary text-on-primary shadow-sm" : "text-on-surface-variant hover:text-on-surface")'});n.attrs.pop('class',None)
# Native hidden must win over utility display declarations.
void={'img','input','meta','link','br','hr'}
def render(n,level=0):
 if isinstance(n,tuple):return n[1]
 if isinstance(n,str):return n
 if n.tag=='omit':return ''
 a=[]
 for k,v in n.attrs.items():
  if k.startswith('@'):a.append(k[1:]+'={'+v+'}')
  else:
   k={'class':'className','for':'htmlFor','tabindex':'tabIndex'}.get(k,k)
   if v is None:a.append(k)
   else:a.append(k+'='+json.dumps(v,ensure_ascii=False))
 opening='<'+n.tag+(' '+' '.join(a) if a else '')
 if n.tag in void:return opening+' />'
 return opening+'>'+''.join(render(c,level+1) for c in n.children)+'</'+n.tag+'>'
jsx=''.join(render(c) for c in body.children)
(ROOT/'components/exported-template.tsx.txt').write_text(jsx)
# Extract full exported theme rather than restyling from the prose guidelines.
config=re.search(r'tailwind.config=(.*?)</script>',source).group(1)
(ROOT/'scripts/exported-theme.txt').write_text(config)
print('Converted exported DOM to JSX template.')
