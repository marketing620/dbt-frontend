"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export default function BootstrapCleanup() {
  const pathname = usePathname();

  useEffect(() => {
    // Whenever the route changes (e.g. clicking a Next.js Link while a Bootstrap modal/offcanvas is open)
    // Vanilla Bootstrap does not clean up its DOM injections because the React component unmounts instantly.
    // This forcibly cleans up any stuck backdrops and body locks globally.
    
    // 1. Remove stuck backdrops
    const backdrops = document.querySelectorAll(
      ".modal-backdrop, .offcanvas-backdrop"
    );
    backdrops.forEach((backdrop) => backdrop.remove());

    // 2. Remove body classes that prevent scrolling and clicking
    document.body.classList.remove("modal-open", "offcanvas-open", "dropdown-open");
    
    // 3. Reset any inline inline styles injected by Bootstrap
    document.body.style.overflow = "";
    document.body.style.paddingRight = "";
    
  }, [pathname]);

  return null;
}
