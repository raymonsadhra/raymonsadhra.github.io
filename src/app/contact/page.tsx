import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { PageIntro } from "@/components/PageIntro";

export const metadata = { title: "Contact" };

export default function Contact() {
  return <>
    <PageIntro eyebrow="Contact" title="Contact now lives on About." copy="Personal context and configured contact links are kept together in one concise place." />
    <section className="shell page-section legacy-contact"><Link className="button" href="/about#contact">Go to About contact <ArrowRight size={16}/></Link></section>
  </>;
}
