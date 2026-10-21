"use client";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Search } from "lucide-react";
import { navItems } from "@/data/site";
import { projects } from "@/data/projects";

export function CommandPalette() { const [open,setOpen]=useState(false); const [query,setQuery]=useState(""); const router=useRouter();
  useEffect(()=>{const onKey=(e:KeyboardEvent)=>{if((e.metaKey||e.ctrlKey)&&e.key.toLowerCase()==="k"){e.preventDefault();setOpen(v=>!v)}if(e.key==="Escape")setOpen(false)};addEventListener("keydown",onKey);return()=>removeEventListener("keydown",onKey)},[]);
  if(!open)return null; const items=[...[...["Home","/"] as const,...navItems].map(([label,href])=>({label,href,type:"Page"})),{label:"Capital One — SLA Sentry",href:"/work/capital-one",type:"Experience"},...projects.filter(p=>(!p.needsInfo||p.publishDraft)&&p.slug!=="word-on-the-blog").map(p=>({label:p.title,href:`/work/${p.slug}`,type:"Project"}))].filter(i=>i.label.toLowerCase().includes(query.toLowerCase()));
  const go=(href:string)=>{setOpen(false);setQuery("");router.push(href)};
  return <div className="palette-backdrop" onMouseDown={()=>setOpen(false)}><div className="palette" role="dialog" aria-modal="true" aria-label="Quick navigation" onMouseDown={e=>e.stopPropagation()}><label><Search size={18}/><input autoFocus placeholder="Go anywhere…" value={query} onChange={e=>setQuery(e.target.value)}/><span>ESC</span></label><div className="palette-results">{items.map(i=><button key={`${i.type}-${i.href}`} onClick={()=>go(i.href)}><span>{i.label}</span><small>{i.type}</small></button>)}{!items.length&&<p className="muted">No results found.</p>}</div></div></div>
}
