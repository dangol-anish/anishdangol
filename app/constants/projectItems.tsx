import Image from "next/image";

export const projects = [
  {
    key: "data-wire",
    title: "Datawire",
    description: "A Visual Data Pipeline Builder",
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
    repo: "https://github.com/dangol-anish/Datawire",
    live: "https://datawire-cyan.vercel.app/",
    tags: [
      "TypeScript",
      "Next.js",
      "Supabase",
      "Tailwind CSS",
      "Papaparse",
      "Zustand",
    ],
  },
  {
    key: "notifiq",
    title: "Notifiq",
    description: "AI-Assisted Workspace Planning And Summaries",
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
    repo: "https://github.com/dangol-anish/notifiq",
    live: "https://notifiq-two.vercel.app/",
    tags: [
      "Next.js",
      "NeonDB",
      "Socket.IO",
      "Upstash Redis",
      "Vercel Cron",
      "UploadThing",
    ],
  },
  {
    key: "road-sense",
    title: "Road Sense: Alternative Route Finder",
    description:
      "Smart Navigation App For Safer, Obstacle-Free Alternative Routes",
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
    live: "https://road-sense-arf.vercel.app/",
    tags: [
      "TypeScript",
      "React Native",
      "Python",
      "OSMnx",
      "NetworkX",
      "PostgreSQL",
    ],
  },
  {
    key: "align-cv",
    title: "AlignCV",
    description:
      "A modern web app that helps you analyze resumes, match jobs, and create cover letters effortlessly using AI.",
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
    repo: "https://github.com/dangol-anish/AlignCV",
    live: "https://align-cv.vercel.app",
    tags: [
      "Next.js",
      "React",
      "Tailwind CSS",
      "Express",
      "Supabase",
      "Google Generative AI",
    ],
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
    tags: ["Next.js", "React", "Tailwind CSS", "Supabase", "TipTap", "D3.js"],
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
    tags: ["Express", "React", "Vite", "PostgreSQL", "JWT", "Chart.js"],
  },
  {
    key: "Estate Gateway",
    title: "Estate Gateway",
    description: "An real estate platform with advance listing features.",
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
    repo: "https://github.com/dangol-anish/real-estate",
    live: "https://real-estate-b49q.onrender.com",
    tags: ["Express", "MongoDB", "React", "Vite", "Redux Toolkit", "Firebase"],
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
    tags: ["Next.js", "React", "Tailwind CSS", "NASA APOD API"],
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
    tags: ["PHP", "MySQL", "Bootstrap", "jQuery", "REST API"],
  },
];
