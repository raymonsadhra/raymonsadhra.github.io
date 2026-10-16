import { PageIntro } from "@/components/PageIntro";
import { LightboxGallery } from "@/components/LightboxGallery";
export const metadata={title:"Beyond Code"};
export default function Life(){return <><div className="life-page"><PageIntro eyebrow="05 · Beyond code" title="The life around the work." copy="A future photo journal for places, people, passing obsessions, and the small moments worth keeping."/><section className="shell page-section"><LightboxGallery/></section></div></>}
