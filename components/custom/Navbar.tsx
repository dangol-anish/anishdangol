import React from "react";
import { ModeToggle } from "./Theme";
import Image from "next/image";
import { navItems } from "@/app/constants/navItems";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 py-5 bg-gradient-to-b backdrop-blur-sm  from-zinc-100 via-zinc-100 via-35% to-zinc-100/5 dark:from-zinc-900 dark:via-zinc-900 dark:via-35% dark:to-zinc-900/5">
      <div className="mx-auto max-w-screen-sm px-6 flex items-center justify-between">
        {/* Logo */}
        <div
          className="rounded-full p-1 
          bg-[#19191b] dark:bg-white 
          border-white dark:border-[#19191b] relative"
        >
          <Image
            src="/assets/owl-dark.svg"
            alt="Logo"
            width={25}
            height={25}
            className="invert dark:no-invert"
          />
        </div>

        {/* Navbar Links */}
        <div
          className="flex items-center
        "
        >
          {navItems.map((item) => (
            <Link
              key={item.label}
              href={item.path}
              className="text-md transition-colors px-2 py-2 hover:bg-gray-200 hover:text-zinc-600 dark:hover:bg-zinc-800 dark:hover:text-white rounded-lg
"
            >
              {item.label}
            </Link>
          ))}
          <ModeToggle />
        </div>

        {/* Mode Toggle */}
      </div>
    </nav>
  );
};

export default Navbar;
