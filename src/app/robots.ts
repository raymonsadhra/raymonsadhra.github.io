import type { MetadataRoute } from "next";
import { siteUrl } from "@/data/siteEnvironment";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/life/editor/"] },
    sitemap: `${siteUrl}/sitemap.xml`,
  };
}
