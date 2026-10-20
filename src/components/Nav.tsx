"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import { navItems } from "@/data/site";
import { hasLink, links } from "@/data/links";
import { withBasePath } from "@/data/siteEnvironment";
import { ThemeToggle } from "./ThemeProvider";
import { IntroChip } from "./IntroChip";

export function Nav() {
  const path = usePathname(); const [open,setOpen] = useState(false); const [section,setSection]=useState("home");
  useEffect(()=>{if(path!=="/")return;const ids=["home","work","contact"];const update=()=>{const current=ids.map(id=>document.getElementById(id)).filter(Boolean).filter(node=>(node as HTMLElement).getBoundingClientRect().top<160).at(-1) as HTMLElement|undefined;setSection(current?.id??"home")};update();addEventListener("scroll",update,{passive:true});return()=>removeEventListener("scroll",update)},[path]);
  return <header className="nav-shell"><nav className="nav shell" aria-label="Primary">
    <IntroChip/><Link href="/" className="mark chip-mark" aria-label="Raymon Sadhra, home"><span>RS</span></Link>
    <div className={`nav-links chip-nav ${open ? "open" : ""}`}>{navItems.map(([label,href])=>{const anchor=href.split("#")[1];const active=(href==="/"&&path==="/"&&section==="home")||(anchor&&path==="/"&&section===anchor)||(href!=="/"&&!anchor&&path===href);return <Link key={`${label}-${href}`} href={href} className={active?"active":""} onClick={()=>setOpen(false)}><i aria-hidden="true"/>{label}</Link>})}{hasLink(links.resume)&&<a className="resume-link" href={withBasePath(links.resume)} onClick={()=>setOpen(false)}>Résumé</a>}</div>
    <div className="nav-actions"><button className="kbd-hint" onClick={()=>document.dispatchEvent(new KeyboardEvent("keydown",{key:"k",metaKey:true}))} aria-label="Open command menu">⌘K</button><ThemeToggle/><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div>
  </nav></header>;
}
