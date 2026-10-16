"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { ThemeToggle } from "./ThemeProvider";

export function Nav() {
  const path = usePathname(); const [open,setOpen] = useState(false); const [section,setSection]=useState("projects");
  useEffect(()=>{if(path!=="/")return;const ids=["projects","experience","research","about","life","contact"];const update=()=>{const current=ids.map(id=>document.getElementById(id)).filter(Boolean).filter(node=>(node as HTMLElement).getBoundingClientRect().top<160).at(-1) as HTMLElement|undefined;setSection(current?.id??"projects")};update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[path]);
  return <header className="nav-shell"><nav className="nav shell" aria-label="Primary">
    <Link href="/#projects" className="mark" aria-label="Raymon Sadhra, home"><span>raymon.</span><i/></Link>
    <div className={`nav-links ${open ? "open" : ""}`}>{navItems.map(([label,href],index)=>{const anchor=href.split("#")[1];const active=path==="/"&&section===anchor&&index>0;return <Link key={`${label}-${href}`} href={href} className={active?"active":""} onClick={()=>setOpen(false)}>{label}</Link>})}</div>
    <div className="nav-actions"><button className="kbd-hint" onClick={()=>document.dispatchEvent(new KeyboardEvent("keydown",{key:"k",metaKey:true}))} aria-label="Open command menu">⌘K</button><ThemeToggle/><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div>
  </nav></header>;
}
