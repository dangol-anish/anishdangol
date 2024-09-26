export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "About Me",
    description: "",
    className: "md:col-span-2 md:row-span-2 col-span-3 row-span-2 ",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end text-violet-500",

    spareImg: "",
  },
  {
    id: 2,
    title: "I also make artworks using code on the side",
    description: "",
    className:
      "md:row-span-3 md:col-span-1 col-span-3 row-span-2 md:text-center",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 3,
    title: "Hobbies",
    description: "",
    className: "md:col-span-2 md:row-span-1 col-span-3 row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "3D Solar System Planets to Explore",
    des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
    img: "/p1.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
    link: "/ui.earth.com",
  },
  {
    id: 2,
    title: "Yoom - Video Conferencing App",
    des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
    img: "/p2.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
    link: "/ui.yoom.com",
  },
  {
    id: 3,
    title: "AI Image SaaS - Canva Application",
    des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
    img: "/p3.svg",
    iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
    link: "/ui.aiimg.com",
  },
  {
    id: 4,
    title: "Animated Apple Iphone 3D Website",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
    img: "/p4.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
    link: "/ui.apple.com",
  },
];

export const socialMedia = [
  {
    id: 1,
    img: "/git.svg",
  },
  {
    id: 2,
    img: "/twit.svg",
  },
  {
    id: 3,
    img: "/link.svg",
  },
];

export const skillset = [
  {
    heading: "Languages",
    list: ["HTML", "CSS", "JavaScript", "TypeScript", "C#", "PHP"],
  },
  {
    heading: "Frameworks & Libraries",
    list: [
      "JQuery",
      "React",
      "Next.js",
      "Tailwind CSS",
      "Node.js",
      "Express",
      "shadcn/ui",
      "Aceternity UI",
      "Redux Toolkit",
      "Bootstrap",
      "p5js",
    ],
  },
  {
    heading: "Databases and ORMs",
    list: [
      "PostgreSQL",
      "MongoDB",
      "Supabase",
      "Firebase",
      "Sequelize",
      "Drizzle",
    ],
  },
  {
    heading: "Tools",
    list: ["Git", "GitHub", "Postman", "Vercel", "Jest"],
  },
];
