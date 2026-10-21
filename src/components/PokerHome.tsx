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
] as const;

export function PokerHome() {
  return <div className="minimal-home" id="home">
    <div className="shell profile-work-layout">
      <aside className="profile-sidebar" aria-labelledby="profile-name">
        <AnimatedPortraitChip portrait={media.profile.portrait} objectPosition={media.profile.portraitPosition} />
        <p className="profile-eyebrow">Software engineer · San Francisco, CA</p>
        <h1 id="profile-name">Raymon Sadhra</h1>
        <h2>Software Engineer &amp; Computer Science Graduate Student</h2>
        <div className="profile-education"><span>M.S. CS — UCSD</span><span>B.S. CS — UCSC</span></div>
        <p className="profile-intro">I&apos;m a software engineer and M.S. Computer Science student at UC San Diego. I enjoy building backend systems, developing applied AI applications, and working with large datasets to turn complex problems into reliable, long-lasting software.</p>
        <div className="profile-links">
          {profileLinks.map(({ label, value, icon: Icon }) => hasLink(value) && <a key={label} href={withBasePath(value)}><Icon size={15} />{label}</a>)}
          {hasLink(links.resume) && <a href={withBasePath(links.resume)}><FileText size={15} />Résumé</a>}
          {hasLink(links.email)&&<a href={`mailto:${links.email}`}><Mail size={15} />Contact</a>}
        </div>
      </aside>

      <section className="selected-work" id="work" aria-labelledby="selected-work-title">
        <header className="selected-work-heading">
          <div><p>Portfolio · V15</p><h2 id="selected-work-title">Selected Work</h2></div>
          <span>{String(visibleSelectedWork.length).padStart(2, "0")} studies</span>
        </header>
        <div className="selected-work-list">
          {visibleSelectedWork.map((item, index) => <Link className="selected-work-row" href={item.href.startsWith("/work/") ? `${item.href}?from=home` : item.href} key={item.title}>
            <div className="work-marker"><PokerChip label={getWorkMarker(item.title, item.marker)} tone={index % 3 === 0 ? "burgundy" : index % 3 === 1 ? "forest" : "gold"} size="sm" /></div>
            <div className="work-copy">
              {item.recognition&&<p className="work-recognition">{item.recognition}</p>}<p className="work-type">{item.context}</p><h3>{item.title}</h3><span>{item.description}</span>
            </div>
            <ArrowUpRight className="work-arrow" size={19} aria-hidden="true" />
          </Link>)}
        </div>
        <Link className="work-archive-link" href="/work">View more work <ArrowRight size={16} /></Link>
      </section>
    </div>

  </div>;
}
