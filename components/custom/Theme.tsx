"use client";

import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";
import * as React from "react";

export function ModeToggle() {
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = theme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <Button
      variant="ghost"
      size="icon"
      onClick={toggleTheme}
      className="relative transition-colors duration-300 cursor-pointer hover:bg-gray-200 dark:hover:bg-zinc-800"
    >
      <Sun
        className={`transition-all duration-300 ${
          isDark ? "rotate-90 scale-0" : "rotate-0 scale-120"
        }`}
      />
      <Moon
        className={`absolute transition-all duration-300 ${
          isDark ? "rotate-0 scale-120" : "-rotate-90 scale-0"
        }`}
      />
      <span className="sr-only">Toggle theme</span>
    </Button>
  );
}
