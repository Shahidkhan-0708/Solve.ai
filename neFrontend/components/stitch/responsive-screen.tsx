'use client';
import {useEffect,useState} from 'react';
import {screens, type ScreenId} from './registry';
import LearningWorkspace from './learning-workspace';
import {pairs} from './catalog.mjs';
export default function ResponsiveScreen({name}:{name:keyof typeof pairs}){
 const [mobile,setMobile]=useState(false);
 useEffect(()=>{const media=matchMedia('(max-width: 767px)');const update=()=>setMobile(media.matches);update();media.addEventListener('change',update);return()=>media.removeEventListener('change',update);},[]);
 if(name==='conversation')return <LearningWorkspace key={name} conversation/>;
 const pair=pairs[name],variant=mobile?'mobile':'desktop';
 const Component=screens[(mobile&&pair[1]?pair[1]:pair[0]) as ScreenId];
 return <div className={'export-'+variant} data-variant={variant}><Component key={name+':'+variant}/></div>;
}
export function SingleScreen({id}:{id:ScreenId}){const Component=screens[id];return <div data-variant="reference"><Component/></div>;}
