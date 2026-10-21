import { Mail } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";
import { links } from "@/data/links";
import { analyticsEvents } from "@/data/analytics";

export const metadata = { title: "Contact" };

export default function Contact() {
  return <>
    <PageIntro eyebrow="Contact" title="Let’s start a conversation." copy="Use your preferred email application to get in touch directly." />
    <section className="shell page-section legacy-contact"><a className="button" href={`mailto:${links.email}`} data-umami-event={analyticsEvents.emailClick}>Compose an email <Mail size={16}/></a></section>
  </>;
}
