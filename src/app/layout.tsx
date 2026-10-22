import type { Metadata } from "next";
import "./globals.css";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { UmamiAnalytics } from "@/components/UmamiAnalytics";
import { siteUrl } from "@/data/siteEnvironment";
import { PortfolioKeyboardNavigation } from "@/components/PortfolioKeyboardNavigation";

export const metadata: Metadata = {
  title: { default: "Raymon Sadhra | Software Engineer", template: "%s | Raymon Sadhra" },
  description: "Software engineer building backend systems, AI/ML applications, developer tooling, and research-driven products.",
  metadataBase: new URL(new URL(siteUrl).origin),
  openGraph: {
    title: "Raymon Sadhra | Software Engineer",
    description: "Backend systems, AI/ML applications, developer tooling, and research-driven engineering.",
    type: "website",
    siteName: "Raymon Sadhra — Software Engineer",
    images: [{ url: `${siteUrl}/opengraph-image`, width: 1200, height: 630, alt: "Raymon Sadhra — Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Raymon Sadhra | Software Engineer", description: "Backend systems, AI/ML, developer tooling, and research-driven engineering.", images: [`${siteUrl}/opengraph-image`] },
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" data-scroll-behavior="smooth"><body><PortfolioKeyboardNavigation><a className="skip-link" href="#main">Skip to content</a><Nav/><main id="main">{children}</main><Footer/><UmamiAnalytics/></PortfolioKeyboardNavigation></body></html> }
