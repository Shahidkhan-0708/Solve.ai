'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { ArrowRight } from 'lucide-react';

export default function Home() {
  const router = useRouter();
  return <main className="welcome-page">
    <div className="welcome-content">
      <span className="logo-image welcome-logo"><Image src="/solve-logo.png" alt="Solve" width={1254} height={1254} priority /></span>
      <h1>What do you want to learn?</h1>
      <button className="primary" onClick={() => router.push('/study/goal')}>Start a learning journey<ArrowRight size={18} /></button>
      <div className="welcome-links"><Link href="/study/sessions">Continue a saved session</Link><button className="text-button" onClick={() => router.push('/study/demo')}>Try the guided demo</button></div>
    </div>
  </main>;
}
