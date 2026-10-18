'use client';

import {useEffect} from 'react';
import {useRouter} from 'next/navigation';
import BrandLogo from '../brand-logo';
import {profile} from './state.mjs';

export default function WelcomeTransition(){
 const router=useRouter();
 useEffect(()=>{
  const reduced=profile().reducedMotion||window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  router.prefetch('/chat');
  const timer=window.setTimeout(()=>router.replace('/chat'),reduced?200:2000);
  return()=>window.clearTimeout(timer);
 },[router]);
 return <main id="main-content" className="welcome-transition" aria-label="Opening your workspace">
  <div className="welcome-transition-brand" role="status">
   <BrandLogo className="welcome-transition-logo"/>
   <p>Let’s make learning simpler.</p>
  </div>
 </main>;
}
