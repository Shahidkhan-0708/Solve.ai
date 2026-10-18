import type { Metadata, Viewport } from 'next';
import SolveApp from '../components/solve-app';
import './globals.css';
export const metadata:Metadata={title:'SOLVE — Learning Workspace',description:'SOLVE AI Mentor · Cognitive Workspace. Frontend demonstration.',manifest:'/manifest.webmanifest',icons:{icon:'/icons/icon-192.png',apple:'/icons/apple-touch-icon.png'},appleWebApp:{capable:true,title:'SOLVE',statusBarStyle:'default'}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#ffffff'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body className="bg-surface-container-lowest font-body-md text-body-md text-on-surface antialiased"><SolveApp>{children}</SolveApp></body></html>;}
