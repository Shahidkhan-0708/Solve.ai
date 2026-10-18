import type{Workspace}from'./workspace';import{demoId}from'./demo-id.mjs';
export function addGoal(previous:Workspace,title:string,weeks:number,lines:string[]=[]):Workspace {
 const id=demoId();const modules=(lines.length?lines:[`Foundations of ${title}`,`Guided practice: ${title}`,`Build and apply: ${title}`,`Review and active recall: ${title}`]).slice(0,30);
 const tasks=modules.map(title=>({id:demoId(),title,done:false}));
 const root={id:'concept-'+id,label:title,status:'learning' as const,notes:'Learning goal',goalId:id};
 const concepts=tasks.map(task=>({id:'concept-'+task.id,label:task.title,status:'new' as const,notes:'',goalId:id,taskId:task.id}));
 return {...previous,activeGoalId:id,studyActiveId:'',goals:[...previous.goals,{id,title,weeks,tasks,createdAt:Date.now(),notes:''}],concepts:[...previous.concepts,root,...concepts],connections:[...previous.connections,...concepts.map(c=>({id:demoId(),from:root.id,to:c.id}))]};
}
export function toggleTask(previous:Workspace,goalId:string,taskId:string):Workspace {
 const task=previous.goals.find(g=>g.id===goalId)?.tasks.find(t=>t.id===taskId);if(!task)return previous;
 return {...previous,goals:previous.goals.map(g=>g.id===goalId?{...g,tasks:g.tasks.map(t=>t.id===taskId?{...t,done:!t.done}:t)}:g),concepts:previous.concepts.map(c=>c.taskId===taskId?{...c,status:task.done?'learning':'mastered'}:c)};
}
