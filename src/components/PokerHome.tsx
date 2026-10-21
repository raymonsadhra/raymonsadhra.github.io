import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText, Github, Linkedin, Mail } from "lucide-react";
import { hasLink, links } from "@/data/links";
import { getWorkMarker, visibleSelectedWork } from "@/data/selectedWork";
import { withBasePath } from "@/data/siteEnvironment";
import { media } from "@/data/media";
import { PokerChip } from "./PokerChip";
import { AnimatedPortraitChip } from "./AnimatedPortraitChip";

const profileLinks = [
  { label: "GitHub", value: links.github, icon: Github },
  { label: "LinkedIn", value: links.linkedin, icon: Linkedin },
  { label: "Email", value: links.email ? `mailto:${links.email}` : null, icon: Mail },
] as const;

export function PokerHome() {
  return <div className="minimal-home" id="home">
    <div className="shell profile-work-layout">
      <aside className="profile-sidebar" aria-labelledby="profile-name">
        <AnimatedPortraitChip portrait={media.profile.portrait} objectPosition={media.profile.portraitPosition} />
        <p className="profile-eyebrow">Software engineer · California</p>
        <h1 id="profile-name">Raymon Sadhra</h1>
        <h2>Software Engineer &amp; Computer Science Graduate Student</h2>
        <div className="profile-education"><span>M.S. CS — UCSD</span><span>B.S. CS — UCSC</span></div>
        <p className="profile-intro">I build backend systems, developer tools, and applied AI applications. I enjoy understanding complex problems, designing reliable solutions, and turning ideas into working software.</p>
        <div className="profile-links">
          {profileLinks.map(({ label, value, icon: Icon }) => hasLink(value) && <a key={label} href={withBasePath(value)}><Icon size={15} />{label}</a>)}
          {hasLink(links.resume) && <a href={withBasePath(links.resume)}><FileText size={15} />Résumé</a>}
          <Link href="/about#contact"><Mail size={15} />Contact</Link>
        </div>
      </aside>

      <section className="selected-work" id="work" aria-labelledby="selected-work-title">
        <header className="selected-work-heading">
          <div><p>Portfolio · V11</p><h2 id="selected-work-title">Selected Work</h2></div>
          <span>{String(visibleSelectedWork.length).padStart(2, "0")} studies</span>
        </header>
        <div className="selected-work-list">
          {visibleSelectedWork.map((item, index) => <Link className="selected-work-row" href={item.href} key={item.title}>
            <div className="work-marker"><PokerChip label={getWorkMarker(item.title, item.marker)} tone={index % 3 === 0 ? "burgundy" : index % 3 === 1 ? "forest" : "gold"} size="sm" /></div>
            <div className="work-copy">
              <p>{item.context}</p><h3>{item.title}</h3><span>{item.description}</span>
              <div>{item.tags.map((tag) => <small key={tag}>{tag}</small>)}</div>
            </div>
            <ArrowUpRight className="work-arrow" size={19} aria-hidden="true" />
          </Link>)}
        </div>
        <Link className="work-archive-link" href="/work">View more work <ArrowRight size={16} /></Link>
      </section>
    </div>

  </div>;
}
