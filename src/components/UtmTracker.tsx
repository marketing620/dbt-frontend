"use client";

import { useEffect, useRef } from "react";
import { useSearchParams, usePathname } from "next/navigation";

export default function UtmTracker() {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const trackedRef = useRef(false);

  useEffect(() => {
    if (pathname?.startsWith("/admin")) return;
    if (trackedRef.current) return;

    try {
      // Check if we've already tracked this specific page view or session
      const hasTrackedSession = sessionStorage.getItem("hasTrackedSession");

      // Extract UTM parameters
      const utm_source = searchParams.get("utm_source");
      const utm_medium = searchParams.get("utm_medium");
      const utm_campaign = searchParams.get("utm_campaign");

      let finalSource = utm_source || localStorage.getItem("utm_source") || "Direct";
      let finalMedium = utm_medium || localStorage.getItem("utm_medium") || "";
      let finalCampaign = utm_campaign || localStorage.getItem("utm_campaign") || "";

      if (utm_source) localStorage.setItem("utm_source", utm_source);
      if (utm_medium) localStorage.setItem("utm_medium", utm_medium);
      if (utm_campaign) localStorage.setItem("utm_campaign", utm_campaign);

      // Generate or retrieve persistent Session ID
      let sessionId = sessionStorage.getItem("analytics_sessionId");
      if (!sessionId) {
        sessionId = Math.random().toString(36).substring(2, 15);
        sessionStorage.setItem("analytics_sessionId", sessionId);
      }

      if (!hasTrackedSession) {
        sessionStorage.setItem("hasTrackedSession", "true");
        trackedRef.current = true;

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
    } catch (error) {
      console.error("UTM Tracker error:", error);
    }

  }, [searchParams, pathname]);

  return null;
}
