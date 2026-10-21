import Script from "next/script";
import { getUmamiWebsiteId, isUmamiAnalyticsEnabled } from "@/data/analytics";

const TRACKED_DOMAIN = "raymonsadhra.github.io";

export function UmamiAnalytics() {
  const websiteId = getUmamiWebsiteId();

  if (!isUmamiAnalyticsEnabled() || !websiteId) return null;

  return <Script
    id="umami-analytics"
    src="https://cloud.umami.is/script.js"
    strategy="afterInteractive"
    data-website-id={websiteId}
    data-domains={TRACKED_DOMAIN}
    data-do-not-track="true"
    data-exclude-search="true"
    data-exclude-hash="true"
  />;
}
