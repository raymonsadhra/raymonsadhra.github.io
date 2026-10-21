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
    <Link href="/" className="mark chip-mark" aria-label="Raymon Sadhra, home"><span>RS</span></Link>
    <div className={`nav-links chip-nav ${open ? "open" : ""}`}>{navItems.map(([label,href])=>{const active=href==="/"?path==="/":path===href||path.startsWith(`${href}/`);return <Link key={`${label}-${href}`} href={href} className={active?"active":""} onClick={()=>setOpen(false)}><i aria-hidden="true"/>{label}</Link>})}</div>
    <div className="nav-actions"><button className="kbd-hint" onClick={()=>document.dispatchEvent(new KeyboardEvent("keydown",{key:"k",metaKey:true}))} aria-label="Open command menu">⌘K</button><ThemeToggle/><button className="menu" onClick={()=>setOpen(!open)} aria-label="Toggle navigation">{open?<X/>:<Menu/>}</button></div>
  </nav></header>;
}
