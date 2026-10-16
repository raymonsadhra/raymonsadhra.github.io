import type { MetadataRoute } from "next";

export const dynamic = "force-static";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: { userAgent: "*", allow: "/", disallow: ["/life/editor/"] },
    sitemap: "https://raymon-sadhra-built-worlds.buzzysong256.chatgpt.site/sitemap.xml",
  };
}
