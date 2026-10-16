"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { navItems } from "@/data/site";
import { ThemeToggle } from "./ThemeProvider";

export function Nav() {
  const path = usePathname(); const [open,setOpen] = useState(false);
  return <header className="nav-shell"><nav className="nav shell" aria-label="Primary">
    <Link href="/" className="mark" aria-label="Raymon Sadhra, home"><span>raymon.</span><i/></Link>
    <div className={`nav-links ${open ? "open" : ""}`}>{navItems.map(([label,href])=><Link key={href} href={href} className={path === href ? "active" : ""} onClick={()=>setOpen(false)}>{label}</Link>)}</div>
    <div className="nav-actions"><button className="kbd-hint" onClick={()=>document.dispatchEvent(new KeyboardEvent("keydown",{key:"k",metaKey:true}))} aria-label="Open command menu">⌘K</button><ThemeToggle/><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div>
  </nav></header>;
}
