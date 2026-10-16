import type { Metadata } from "next";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { CommandPalette } from "@/components/CommandPalette";

export const metadata: Metadata = {
  title: { default: "Raymon Sadhra | Software Engineer", template: "%s | Raymon Sadhra" },
  description: "Software engineer building backend systems, AI/ML applications, developer tooling, and research-driven products.",
  metadataBase: new URL("https://raymon-sadhra-built-worlds.buzzysong256.chatgpt.site"),
  openGraph: {
    title: "Raymon Sadhra | Software Engineer",
    description: "Backend systems, AI/ML applications, developer tooling, and research-driven engineering.",
    type: "website",
    siteName: "Raymon Sadhra — Built Worlds",
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: "Raymon Sadhra — Software Engineer" }],
  },
  twitter: { card: "summary_large_image", title: "Raymon Sadhra | Software Engineer", description: "Backend systems, AI/ML, developer tooling, and research-driven engineering.", images: ["/opengraph-image"] },
};

export default function RootLayout({children}:{children:React.ReactNode}) { return <html lang="en" suppressHydrationWarning><body><ThemeProvider><a className="skip-link" href="#main">Skip to content</a><Nav/><main id="main">{children}</main><Footer/><CommandPalette/></ThemeProvider></body></html> }
