'use client';
import {useEffect,useRef} from 'react';
import {initialize} from './controller.mjs';
import {BorderBeam} from 'border-beam';

export default function LearningWorkspace({conversation=false}:{conversation?:boolean}){
 const root=useRef<HTMLDivElement>(null);
 useEffect(()=>{const controller=initialize(root.current,conversation?'a9ec4bde1ec847bc9ece85948b0b01dc':'396c207cdae5432bbb358c2f89ac047f');if(root.current)root.current.dataset.ready='true';return controller.cleanup;},[conversation]);
 return <div ref={root} className="stitch-screen learning-workspace" data-conversation={conversation}>
  <header className="learning-toolbar">
   <div className="learning-breadcrumb">Workspace<span aria-hidden="true">/</span><strong>{conversation?'Conversation':'New session'}</strong></div>
   <nav className="learning-modes" aria-label="Learning mode"><a data-path="learning-workspace" href="/chat" aria-current="page">Chat</a><a data-path="study-workspace" href="/study">Study</a></nav>
   <div><button type="button" aria-label="Search sessions"><span className="material-symbols-outlined" aria-hidden="true">search</span></button><button type="button" aria-label="Notifications"><span className="material-symbols-outlined" aria-hidden="true">notifications</span></button></div>
  </header>
  <main id="main-content" className="learning-main">
   <section id="view-chat-home" className="learning-intro" hidden={conversation}>
    <p className="learning-eyebrow">Learning workspace</p><h1>Make sense of it.</h1><p>A question, a difficult concept, a page of notes. Start where you are.</p>
   </section>
   {!conversation&&<section className="home-sections" aria-label="Your workspace sections">
    <a href="/plan"><span className="material-symbols-outlined" aria-hidden="true">route</span><strong>My Plan & Strategy</strong><span>Shape your learning roadmap</span></a>
    <a href="/target"><span className="material-symbols-outlined" aria-hidden="true">flag</span><strong>Target Status</strong><span>Track your understanding</span></a>
    <a href="/knowledge-graph"><span className="material-symbols-outlined" aria-hidden="true">hub</span><strong>Knowledge Graph</strong><span>Connect the concepts</span></a>
   </section>}
   <div className="learning-columns">
    <section className="learning-question" aria-label="Question and explanation">
     <section id="view-chat-active" hidden={!conversation} aria-label="Your conversation"/>
     <BorderBeam size="md" colorVariant="ocean" borderRadius={16}>
      <div className="learning-composer">
       <label htmlFor="prompt-input-home">{conversation?'Ask a follow-up':'What are you working through?'}</label>
       <textarea id="prompt-input-home" rows={conversation?3:6} maxLength={5000} placeholder={conversation?'Ask about a step, challenge the explanation, or try an example…':'e.g. Why does recursion need a base case?'} aria-label={conversation?'Follow-up question':'Your question'}/>
       <div className="learning-composer-actions"><button type="button" aria-label="Microphone voice input" title="Dictate your question"><span className="material-symbols-outlined" aria-hidden="true">mic</span>Dictate</button><button id="btn-send-home" type="button" aria-label="Send message" disabled>Send it<span className="material-symbols-outlined" aria-hidden="true">arrow_upward</span></button></div>
      </div>
     </BorderBeam>
     <p className="learning-input-hint">Enter to send<span aria-hidden="true"> · </span>Shift + Enter for a new line</p>
    </section>
    <aside className="learning-material" aria-label="Study resources">
     <div className="learning-material-heading"><span className="material-symbols-outlined" aria-hidden="true">library_books</span><h2>Your material</h2></div>
     <p>Add the context you want SOLVE to use.</p>
     <div className="learning-material-actions"><button type="button" aria-label="Add resources"><span className="material-symbols-outlined" aria-hidden="true">upload_file</span>Upload files<span aria-hidden="true">↗</span></button><button type="button"><span className="material-symbols-outlined" aria-hidden="true">link</span>Add a link<span aria-hidden="true">↗</span></button><button type="button"><span className="material-symbols-outlined" aria-hidden="true">notes</span>Paste notes<span aria-hidden="true">↗</span></button></div>
     <div id="resource-list-container"><p className="learning-empty-resources">No material added yet.<br/>You can still start with a question.</p></div>
     <p className="learning-material-caption">PDF, documents, images and code.<br/>Review extracted text before using it.</p>
    </aside>
   </div>
  </main>
 </div>;
}
