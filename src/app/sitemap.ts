import type { MetadataRoute } from "next";
import { projects } from "@/data/projects";
import { lifeEntries } from "@/data/life";
import { siteUrl } from "@/data/siteEnvironment";
export const dynamic = "force-static";
export default function sitemap():MetadataRoute.Sitemap{const paths=["","/work","/experience","/research","/about","/life","/contact",...projects.filter(p=>(!p.needsInfo||p.publishDraft)&&p.slug!=="word-on-the-blog").map(p=>`/work/${p.slug}`),...lifeEntries.filter(e=>!e.placeholder).map(e=>`/life/${e.slug}`)];return paths.map(url=>({url:`${siteUrl}${url}`,lastModified:new Date()}))}
