import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { links, hasLink } from "@/data/links";

export function Footer() { return <footer className="footer"><div className="shell">
  <p className="eyebrow">The next world</p><h2>Have something<br/><em>interesting</em> in mind?</h2>
  <div className="footer-row"><div>{hasLink(links.email)?<a className="button" href={`mailto:${links.email}`}>Start a conversation <ArrowUpRight size={16}/></a>:<Link className="button" href="/contact">Contact details <ArrowUpRight size={16}/></Link>}</div><div className="footer-links">{hasLink(links.github)&&<a href={links.github}>GitHub</a>}{hasLink(links.linkedin)&&<a href={links.linkedin}>LinkedIn</a>}{hasLink(links.resume)&&<a href={links.resume}>Résumé</a>}</div></div>
  <div className="footer-bottom"><span>Raymon Sadhra · California</span><span>Designed & built with curiosity · 2026</span></div>
  </div></footer> }
