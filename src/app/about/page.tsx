import { FileText, Github, GraduationCap, Linkedin, Mail, Search } from "lucide-react";
import { PhotoPokerChip } from "@/components/PhotoPokerChip";
import { educationPhotoChip, introductionPhotoChips } from "@/data/about";
import { hasLink, links } from "@/data/links";
import { withBasePath } from "@/data/siteEnvironment";
import { analyticsEvents, isUmamiAnalyticsEnabled } from "@/data/analytics";

export const metadata = {
  title: "About Me",
  description: "Raymon Sadhra's background, education, current endeavors, and contact information.",
};

const contactLinks = [
  { label: "Email", href: links.email ? `mailto:${links.email}` : null, icon: Mail, external: false },
  { label: "LinkedIn", href: links.linkedin, icon: Linkedin, external: true },
  { label: "GitHub", href: links.github, icon: Github, external: true },
  { label: "Resume", href: links.resume, icon: FileText, external: true },
] as const;

export default function About() {
  return <article className="about-v18 shell">
    <header className="about-v18-intro">
      <div className="about-v20-intro-copy">
        <p className="eyebrow">About Me</p>
        <h1>A little about me.</h1>
        <div className="about-v18-copy">
          <p>I&apos;m a first-generation college student who started learning to code independently in high school through online courses and YouTube tutorials. What began as curiosity about how software works gradually became an interest in building systems, solving complex problems, and turning ideas into useful applications.</p>
          <p>I earned my B.S. in Computer Science from UC Santa Cruz and am now pursuing my M.S. in Computer Science at UC San Diego. Along the way, I&apos;ve explored software engineering, developer tooling, artificial intelligence, and research through internships and hands-on projects.</p>
          <p>Outside of programming, I enjoy staying active, working out, playing pickleball, cooking, and finding new things to learn. I value consistency, curiosity, and the process of getting a little better at something over time.</p>
        </div>
      </div>
      <div className="about-v20-photo-zigzag" aria-label="Personal photo placeholders">
        {introductionPhotoChips.map((chip, index) => <PhotoPokerChip key={chip.placeholder} {...chip} className={`photo-zigzag-${index + 1}`} />)}
      </div>
    </header>

    <section className="about-v20-details" aria-label="Education and current endeavors">
      <div className="about-v20-education" aria-labelledby="education-title">
        <div className="about-v18-label"><GraduationCap size={18} aria-hidden="true"/><p className="eyebrow">Education</p></div>
        <h2 id="education-title">Education</h2>
        <div className="education-entries">
          <article><span>Expected 2028</span><h3>UC San Diego</h3><p>M.S. Computer Science</p></article>
          <article><span>Graduated 2026</span><h3>UC Santa Cruz</h3><p>B.S. Computer Science</p></article>
        </div>
      </div>
      <div className="about-v20-education-photo">
        <PhotoPokerChip {...educationPhotoChip} size="feature" />
      </div>
      <div className="about-v20-endeavors current-endeavors" aria-labelledby="endeavors-title">
        <div className="about-v18-label"><Search size={18} aria-hidden="true"/><p className="eyebrow">Now</p></div>
        <h2 id="endeavors-title">Current Endeavors</h2>
        <p>Currently exploring research opportunities at the University of California, San Diego.</p>
      </div>
    </section>

    <section className="about-v18-contact" id="contact" aria-labelledby="contact-title">
      <p className="eyebrow">Contact</p>
      <h2 id="contact-title">That&apos;s enough about me for now. Feel free to introduce yourself!</h2>
      <nav aria-label="Contact links">
        {contactLinks.map(({ label, href, icon: Icon, external }) => hasLink(href) && <a key={label} href={withBasePath(href)} target={external ? "_blank" : undefined} rel={external ? "noopener noreferrer" : undefined} aria-label={label === "Resume" ? "Open Raymon Sadhra's resume PDF" : undefined} data-umami-event={label === "Email" ? analyticsEvents.emailClick : label === "LinkedIn" ? analyticsEvents.linkedinClick : label === "GitHub" ? analyticsEvents.githubClick : analyticsEvents.resumeClick}><Icon size={17} aria-hidden="true"/>{label}</a>)}
      </nav>
      {isUmamiAnalyticsEnabled() && <p className="analytics-disclosure">This site uses privacy-friendly, cookie-free analytics to measure aggregate visits and link engagement.</p>}
    </section>
  </article>;
}
