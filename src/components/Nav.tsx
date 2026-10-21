"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/site";

export function Nav() {
  const path = usePathname();
  return <header className="nav-shell"><nav className="nav shell" aria-label="Primary">
    <Link href="/" className="mark chip-mark" aria-label="Raymon Sadhra, home"><span>RS</span></Link>
    <div className="nav-links chip-nav">{navItems.map(([label,href])=>{const active=href==="/"?path==="/":path===href||path.startsWith(`${href}/`);return <Link key={`${label}-${href}`} href={href} className={active?"active":""}><i aria-hidden="true"/>{label}</Link>})}</div>
  </nav></header>;
}
