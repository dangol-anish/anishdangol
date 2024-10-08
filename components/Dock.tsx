import React from "react";
import { FloatingDock } from "@/components/ui/floating-dock";
import { IconTerminal2 } from "@tabler/icons-react"; // Example icon
import { skillset } from "@/data";

export function Dock() {
  return (
    <div className="flex flex-col items-center justify-center w-full space-y-8 p-4">
      {skillset.map((category) => (
        <div
          key={category.heading}
          className="w-full max-w-[95%] sm:max-w-[80%] lg:max-w-[70%] mx-auto"
        >
          <h2 className="text-lg sm:text-xl lg:text-2xl font-bold mb-4 text-center">
            {category.heading}
          </h2>
          <div className="flex flex-wrap items-center justify-center">
            <FloatingDock
              items={category.list.map((item) => ({
                title: item.name,
                icon: item.icon,
                href: item.href || "#", // Ensure the link is correctly applied
              }))}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
