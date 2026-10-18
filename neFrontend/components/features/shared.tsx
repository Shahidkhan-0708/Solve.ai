import type{ReactNode}from'react';
export function FeaturePage({title,description,children,action}:{title:string;description:string;children:ReactNode;action?:ReactNode}){return <section className="feature-page"><div className="feature-heading"><div><span className="local-badge">LOCAL DEMO · ON THIS DEVICE</span><h1>{title}</h1><p>{description}</p></div>{action}</div>{children}</section>;}
export function Icon({name}:{name:string}){return <span className="material-symbols-outlined" aria-hidden="true">{name}</span>;}
export function Empty({title,children}:{title:string;children:ReactNode}){return <div className="feature-empty"><Icon name="school"/><h2>{title}</h2><div>{children}</div></div>;}
