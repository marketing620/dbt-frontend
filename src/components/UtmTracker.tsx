"use client";

import { useEffect } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export default function UtmTracker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();

  useEffect(() => {
    // Only track if not an admin route or we don't care. We probably don't want to track admin visits.
    if (pathname?.startsWith("/admin")) return;

    // Check if we've already tracked this session to avoid spamming
    const hasTracked = sessionStorage.getItem("hasTrackedVisit");

    // We can also extract UTM parameters from URL if they exist
    const utm_source = searchParams.get("utm_source");
    const utm_medium = searchParams.get("utm_medium");
    const utm_campaign = searchParams.get("utm_campaign");

    // If there are no UTM parameters, we could check if we stored them previously in localStorage.
    let finalSource = utm_source || localStorage.getItem("utm_source") || "Direct";
    let finalMedium = utm_medium || localStorage.getItem("utm_medium") || "";
    let finalCampaign = utm_campaign || localStorage.getItem("utm_campaign") || "";

    // Save to localStorage so future lead submissions within this browser can be attributed
    if (utm_source) localStorage.setItem("utm_source", utm_source);
    if (utm_medium) localStorage.setItem("utm_medium", utm_medium);
    if (utm_campaign) localStorage.setItem("utm_campaign", utm_campaign);

    if (!hasTracked) {
      sessionStorage.setItem("hasTrackedVisit", "true");

      // Generate a simple session ID
      const sessionId = Math.random().toString(36).substring(2, 15);

      const API_URL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:5000";

      fetch(`${API_URL}/api/analytics/visit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          path: pathname,
          referrer: document.referrer,
          utm_source: finalSource,
          utm_medium: finalMedium,
          utm_campaign: finalCampaign,
          sessionId
        })
      }).catch((e) => console.error("Error tracking visit:", e));
    }

  }, [searchParams, pathname]);

  return null; // This component doesn't render anything
}
