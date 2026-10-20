import { PageIntro } from "@/components/PageIntro";
import { LightboxGallery } from "@/components/LightboxGallery";
export const metadata={title:"Photos & Notes"};
export default function Life(){return <><div className="life-page"><PageIntro eyebrow="Personal" title="Photos and notes." copy="A small collection of real photographs and memories, shared selectively."/><section className="shell page-section"><LightboxGallery/></section></div></>}
