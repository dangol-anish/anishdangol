"use client";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";
import Main from "@/components/custom/Main";

export default function Home() {
  const searchParams = useSearchParams();

  useEffect(() => {
    const scrollTo = searchParams.get("scrollTo");

    if (scrollTo === "contact") {
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: "smooth" });
        }
      }, 100); // Small delay to ensure DOM is ready
    }
  }, [searchParams]);

  return (
    <>
      <Main />
    </>
  );
}
