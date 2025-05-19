"use client";

import React, { Suspense } from "react";
import ScrollToSection from "@/components/custom/body/ScrollToSection";

export default function ScrollToSectionWrapper() {
  return (
    <Suspense fallback={null}>
      <ScrollToSection />
    </Suspense>
  );
}
