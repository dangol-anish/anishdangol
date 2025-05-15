"use client";
import React from "react";
import { ModeToggle } from "./Theme";
import Image from "next/image";
import { navItems } from "@/app/constants/navItems";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import Icon from "../ui/Logo";

const Navbar = () => {
  const pathname = usePathname();
  const router = useRouter();

  const handleLogoClick = (e: React.MouseEvent) => {
    if (pathname === "/") {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      router.push("/");
    }
  };

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    if (pathname === "/") {
      const contactSection = document.getElementById("contact");
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      router.push("/?scrollTo=contact");
    }
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b backdrop-blur-sm from-zinc-100 via-zinc-100 via-35% to-zinc-100/5 dark:from-zinc-900 dark:via-zinc-900 dark:via-35% dark:to-zinc-900/5">
      <div
        className="mx-auto max-w-screen-sm px-6 flex items-center justify-between"
        id="top"
      >
        {/* Logo */}
        <Link
          href="/"
          onClick={handleLogoClick}
          className="rounded-full p-1 bg-[#19191b] dark:bg-white border-white dark:border-[#19191b] relative"
        >
          <Icon />
        </Link>

        {/* Navbar Links */}
        <div className="flex items-center">
          {navItems.map((item) => {
            if (item.label.toLowerCase() === "contact") {
              return (
                <Link
                  key={item.label}
                  href="/#contact"
                  onClick={handleContactClick}
                  className="text-md transition-colors px-2 py-2 hover:bg-gray-200 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white rounded-lg tracking-wide"
                >
                  {item.label}
                </Link>
              );
            }

            return (
              <Link
                key={item.label}
                href={item.path}
                className="text-md transition-colors px-2 py-2 hover:bg-gray-200 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white rounded-lg tracking-wide"
              >
                {item.label}
              </Link>
            );
          })}
          <ModeToggle />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
