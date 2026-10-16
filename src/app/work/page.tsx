import { Suspense } from "react";
import { PageIntro } from "@/components/PageIntro";
import { WorkGallery } from "@/components/WorkGallery";
export const metadata={title:"Work"};
export default function Work(){return <><PageIntro eyebrow="01 · Work" title="Built worlds, documented." copy="Systems, tools, research, and products—each one shaped by a different kind of constraint." aside="Filter by domain or open any project for the full technical story."/><section className="shell page-section"><Suspense><WorkGallery/></Suspense></section></>}
