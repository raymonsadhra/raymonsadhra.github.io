import { PageIntro } from "@/components/PageIntro";
import { JournalEditor } from "@/components/JournalEditor";
export const metadata={title:"Journal Draft Studio",robots:{index:false,follow:false}};
export default function Editor(){return <><PageIntro eyebrow="Private local tool" title="Journal draft studio." copy="Edit captions here, save a browser-only draft, then export clean JSON for the site." aside="This does not write to the deployed filesystem and does not upload anything."/><section className="shell page-section"><JournalEditor/></section></>}
