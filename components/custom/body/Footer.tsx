"use client";
import { EbGaramond } from "@/app/config/fontConfig";
import { footerItems } from "@/app/constants/footeritems";
import Link from "next/link";
import React, { useState } from "react";

const Footer = () => {
  const [copied, setCopied] = useState(false);
  const email = "dangol.anish001@gmail.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 1000); // reset message after 2s
    } catch (err) {
      console.error("Failed to copy!", err);
    }
  };

  return (
    <footer className="flex flex-col gap-6 m-6">
      <p className="dark:text-zinc-100 font-semibold" id="contact">
        Let's connect
      </p>
      <p className={`${EbGaramond.className} text-lg`}>
        If you want to get in touch with me about something or just to say hi,
        reach out on social media or send me an email.
      </p>
      <div className="flex flex-col  gap-3 flex-wrap">
        <div className="flex gap-3 flex-wrap">
          {footerItems.map(({ label, path, icon: Icon }) => (
            <Link
              key={label}
              href={path}
              target="_blank"
              rel="noopener noreferrer"
              className="flex space-x-2 transition"
            >
              <Icon className="w-7 h-7 transition-colors hover:text-zinc-500 dark:hover:text-zinc-100" />
            </Link>
          ))}
        </div>

        <button
          onClick={handleCopy}
          className="text-sm flex justify-between items-start cursor-pointer hover:text-zinc-600 dark:hover:text-zinc-100 transition"
        >
          {email}
          <span
            className={`text-sm dark:text-zinc-100 transition-opacity duration-300 ${
              copied ? "opacity-100" : "opacity-0"
            }`}
          >
            Email copied!
          </span>
        </button>
      </div>
    </footer>
  );
};

export default Footer;
