"use client";

import { navItems } from "@/app/constants/navItems";
import PageContainer from "@/components/custom/PageContainer";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import React from "react";
import { ModeToggle } from "./Theme";
import Image from "next/image";
import { Menu } from "lucide-react";

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
    <nav className="fixed inset-x-0 top-0 z-50 border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <PageContainer
        className="flex h-16 items-center justify-between"
        id="top"
      >
        <Link
          href="/"
          onClick={handleLogoClick}
          aria-label="Go to home"
          className="flex items-center gap-3 rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <Image
            src="/assets/personal/anish_logo.svg"
            alt="Logo"
            width={28}
            height={28}
            priority
          />
        </Link>

        <div className="hidden items-center gap-1 md:flex">
          {navItems.map((item) => {
            const isContact = item.label.toLowerCase() === "contact";
            const isActive =
              !isContact &&
              (pathname === item.path || pathname.startsWith(`${item.path}/`));

            if (isContact) {
              return (
                <Button key={item.label} variant="ghost" asChild>
                  <Link href="/#contact" onClick={handleContactClick}>
                    Contact
                  </Link>
                </Button>
              );
            }

            return (
              <Button
                key={item.label}
                variant="ghost"
                asChild
                className={cn(isActive && "bg-accent text-accent-foreground")}
              >
                <Link href={item.path}>
                  {item.label[0].toUpperCase() + item.label.slice(1)}
                </Link>
              </Button>
            );
          })}
          <ModeToggle />
        </div>

        <div className="flex items-center gap-2 md:hidden">
          <ModeToggle />
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Open menu">
                <Menu className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="min-w-40">
              {navItems.map((item) => {
                const isContact = item.label.toLowerCase() === "contact";

                if (isContact) {
                  return (
                    <DropdownMenuItem key={item.label} asChild>
                      <Link href="/#contact" onClick={handleContactClick}>
                        Contact
                      </Link>
                    </DropdownMenuItem>
                  );
                }

                return (
                  <DropdownMenuItem key={item.label} asChild>
                    <Link href={item.path}>
                      {item.label[0].toUpperCase() + item.label.slice(1)}
                    </Link>
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </PageContainer>
    </nav>
  );
};

export default Navbar;
