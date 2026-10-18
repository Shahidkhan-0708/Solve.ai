import type {Metadata,Viewport} from 'next';
import Runtime from '../components/stitch/runtime';
import WorkspaceNavigation from '../components/stitch/workspace-navigation';
import 'katex/dist/katex.min.css';
import './stitch-app.css';
import './connected.css';
export const metadata:Metadata={title:'SOLVE — Learning Workspace',description:'SOLVE Personal AI Mentor. Source-backed learning workspace.',manifest:'/manifest.webmanifest',icons:{icon:'/icons/icon-192.png',apple:'/icons/apple-touch-icon.png'},appleWebApp:{capable:true,title:'SOLVE',statusBarStyle:'default'}};
export const viewport:Viewport={width:'device-width',initialScale:1,themeColor:'#ffffff'};
export default function Layout({children}:{children:React.ReactNode}){return <html lang="en"><body><Runtime/><WorkspaceNavigation>{children}</WorkspaceNavigation></body></html>;}
