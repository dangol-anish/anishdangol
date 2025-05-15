import { ArrowUpRight } from "lucide-react";
import Image from "next/image";

export const projects = [
  {
    key: "road-sense",
    title: "Road Sense: Alternative Route Finder",
    description:
      "Smart navigation app for safer, obstacle-free alternative routes.",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: true,
    repo: "https://github.com/dangol-anish/RS-alternate-route-finder",
    // live: "https://sphere.example.com",
  },
  {
    key: "chronicle",
    title: "Chronicle",
    description: "An all-in-one app to elevate your productivity",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: false,
    repo: "https://github.com/dangol-anish/chronicle",
    live: "https://chronicle-kappa.vercel.app/",
  },
  {
    key: "linkleap",
    title: "LinkLeap",
    description: "CRM system for efficient insights, and organization.",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: true,
    repo: "https://github.com/dangol-anish/linkleap",
    live: "https://linkleap-client.vercel.app/",
  },
  {
    key: "freelancing-platform-nepal",
    title: "Freelancing Platform for Nepal",
    description:
      "Localized platform connecting freelancers with clients in Nepal.",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: true,
    repo: "https://github.com/dangol-anish/freelancing-website",
    // live: "https://freelancing-website.example.com",
  },
  {
    key: "resume-expert",
    title: "Resume Expert",
    description:
      "AI-powered resume builder with tailored suggestions and formatting.",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: true,
    repo: "https://github.com/dangol-anish/resume-expert",
    // live: "https://resume-expert-omega.vercel.app/",
  },
  {
    key: "mis-ecommerce",
    title: "MIS E-Commerce WebApp",
    description:
      "Next.js e-commerce platform with robust backend and dynamic frontend.",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: true,
    repo: "https://github.com/dangol-anish/mis_e-commerce_webapp",
    // live: "https://mis-ecommerce.example.com",
  },
  {
    key: "nasa-apod-viewer",
    title: "NASA Astronomy Picture Viewer",
    description: "Next.js app displaying NASA’s Astronomy Picture of the Day.",
    icon: (
      <Image
        src="/assets/link.svg"
        alt="Link"
        width={16}
        height={16}
        className="dark:invert"
      />
    ),
    active: true,
    repo: "https://github.com/dangol-anish/nextjs-assignment",
    live: "https://nasa-astronomy-highlight.vercel.app/",
  },
];
