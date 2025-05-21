"use client";

import { useSearchParams } from "next/navigation";
import { useEffect } from "react";

export default function ScrollToSection() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");

    if (scrollTo) {
      const target = document.getElementById(scrollTo);
      if (target) {
        setTimeout(() => {
          target.scrollIntoView({ behavior: "smooth" });

          const url = new URL(window.location.href);
          url.searchParams.delete("scrollTo");
          window.history.replaceState({}, "", url.pathname + url.search);
        }, 100);
      }
    }
  }, [searchParams]);

  return null;
}
