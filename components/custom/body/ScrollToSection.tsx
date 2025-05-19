"use client";

import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function ScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");

    if (scrollTo) {
      const target = document.getElementById(scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });

          // Remove scrollTo from the URL after scrolling
          const url = new URL(window.location.href);
          url.searchParams.delete("scrollTo");
          window.history.replaceState({}, "", url.pathname + url.search);
        }, 100); // small delay to ensure DOM is ready
      }
    }
  }, [searchParams]);

  return null;
}
