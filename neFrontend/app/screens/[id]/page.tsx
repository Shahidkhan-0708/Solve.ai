import {notFound} from 'next/navigation';
import {SingleScreen} from '../../../components/stitch/responsive-screen';
import type {ScreenId} from '../../../components/stitch/registry';
import inventory from '../../../docs/upload-inventory.json';
const ids=inventory.map(x=>x.id);
export const dynamicParams=false;
export function generateStaticParams(){return ids.map(id=>({id}));}
export default async function Page({params}:{params:Promise<{id:string}>}){const {id}=await params;if(!ids.includes(id))notFound();return <SingleScreen id={id as ScreenId}/>;}
