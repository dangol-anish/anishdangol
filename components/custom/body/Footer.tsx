"use client";

import { footerItems } from "@/app/constants/footeritems";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "anishdangol.work@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000);
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <footer className="py-10 sm:py-12" id="contact">
      <div className=" border-0 border-t-1 bg-card/40 ">
        <div className="mt-10 flex flex-col gap-6 sm:mt-12 sm:flex-row sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              Let&apos;s build something clean.
            </p>
            <p className="text-sm text-muted-foreground">
              For opportunities, collaborations, or a quick hello — email me or
              reach out on socials.
            </p>
          </div>

          <div className="flex flex-col gap-3">
            <Button asChild className="h-10">
              <a href={`mailto:${email}`}>Email me</a>
            </Button>

            <button
              onClick={handleCopy}
              className="inline-flex items-center justify-between gap-3 rounded-lg border bg-background/50 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Copy email"
            >
              <span className="font-mono text-xs">{email}</span>
              <span
                className={`text-xs transition-opacity ${
                  copied ? "opacity-100" : "opacity-0"
                }`}
              >
                Copied
              </span>
            </button>

            <div className="flex flex-wrap gap-2">
              {footerItems.map(({ label, path, icon: Icon }) => (
                <Link
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-lg border bg-background/50 px-3 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                  aria-label={label}
                >
                  <Icon className="h-4 w-4" />
                  {label}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
