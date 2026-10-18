const element=(tag,text)=>{const node=document.createElement(tag);node.textContent=text;return node;};

export function graphPositions(heights,width){
 const columns=Math.max(1,Math.min(3,Math.floor((width-32)/220))),cardWidth=Math.min(220,Math.max(140,(width-32-(columns-1)*24)/columns));
 const positions=[];let top=24;
 for(let index=0;index<heights.length;index+=columns){const row=heights.slice(index,index+columns);row.forEach((height,column)=>positions.push({x:16+column*(cardWidth+24),y:top,width:cardWidth,height}));top+=Math.max(...row)+32;}
 return {positions,height:top};
}

export function renderGraph(root,learning){
 if(!['/knowledge-graph','/graph'].includes(location.pathname)||!learning?.course)return;
 const host=root.querySelector('#graph-viewport')||root.querySelector('#view-map')||root.querySelector('#map-canvas-container');if(!host)return;
 const key=learning.id+':'+learning.revision+':'+host.clientWidth;if(host.dataset.backendGraph===key)return;host.dataset.backendGraph=key;
 host.replaceChildren();host.style.position='relative';host.style.minHeight='440px';
 const drawer=root.querySelector('#node-details-drawer');if(drawer){drawer.hidden=true;const title=element('h2','Select a concept');title.id='drawer-title';const description=element('p','');description.id='drawer-description';drawer.replaceChildren(title,description);}
 const list=root.querySelector('#list-view-container');list?.replaceChildren();
 const namespace='http://www.w3.org/2000/svg',svg=document.createElementNS(namespace,'svg');svg.style.position='absolute';svg.style.pointerEvents='none';host.append(svg);
 const width=Math.max(280,host.clientWidth),initial=graphPositions(learning.course.concepts.map(()=>80),width);
 const nodes=learning.course.concepts.map((concept,index)=>{const node=element('button',concept.title+' · '+({new:'Planned',introduced:'Explored',demonstrated:'Practised',rechecked:'Recall checked'})[learning.progress[index].status]);node.type='button';node.dataset.concept=concept.title;node.dataset.conceptIndex=String(index);node.dataset.graphNode='true';node.className='graph-node';Object.assign(node.style,{position:'absolute',width:initial.positions[index].width+'px',minHeight:'80px',padding:'16px',borderRadius:'12px',border:'1px solid var(--outline-variant)',background:'var(--surface-container)',color:'var(--on-surface)',whiteSpace:'normal'});host.append(node);if(list){const copy=node.cloneNode(true);copy.style.position='relative';copy.style.display='block';copy.style.marginBottom='16px';list.append(copy);}return node;});
 const {positions,height}=graphPositions(nodes.map(node=>node.offsetHeight),width);host.style.minHeight=Math.max(440,height)+'px';svg.setAttribute('width',String(width));svg.setAttribute('height',String(height));
 nodes.forEach((node,index)=>Object.assign(node.style,{left:positions[index].x+'px',top:positions[index].y+'px'}));
 learning.course.concepts.forEach((concept,index)=>{for(const prerequisite of concept.prerequisites){if(!positions[prerequisite])continue;const start=positions[prerequisite],end=positions[index],line=document.createElementNS(namespace,'line');line.setAttribute('x1',String(start.x+start.width/2));line.setAttribute('y1',String(start.y+start.height/2));line.setAttribute('x2',String(end.x+end.width/2));line.setAttribute('y2',String(end.y+end.height/2));line.setAttribute('stroke','var(--outline-variant)');svg.append(line);}});
 for(const span of root.querySelectorAll('span')){if(/^CLUSTER:/.test(span.textContent.trim()))span.textContent='CLUSTER: '+learning.goal;if(/^\d+ Concepts$/.test(span.textContent.trim()))span.textContent=nodes.length+' Concepts';if(/^Status:/.test(span.textContent.trim()))span.textContent=learning.attempt_count+' saved attempts';}
}
