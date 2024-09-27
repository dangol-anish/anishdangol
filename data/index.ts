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
    description: `Hey there! I’m Anish Dangol, a full-stack web developer based in the vibrant city of Kathmandu, Nepal. With a passion for crafting web applications that genuinely make a difference, I focus on building solutions that are not only functional but also intuitive and user-friendly. My expertise lies in developing seamless digital experiences that merge creativity with technology, ensuring users can easily navigate and interact with the features they need.
      
      Currently, my primary focus is to create applications that offer a wide range of functionalities while maintaining simplicity and ease of use. I believe that technology should empower users, not overwhelm them. By focusing on clean design and efficient code, I strive to deliver apps that solve real-world problems and enhance productivity, whether through habit tracking, task management, or other practical tools. When I’m not busy writing code or experimenting with new technologies, I enjoy immersing myself in nature, whether it’s exploring the stunning landscapes around Nepal or traveling to new places. I find that spending time outdoors helps fuel my creativity and keeps me grounded. I’m also an avid reader, always looking to learn something new, and I enjoy expressing my creativity through art whenever I need to unwind.

      `,

    className: "md:col-span-2 md:row-span-2 col-span-3 row-span-2",
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
    list: [
      {
        emoji: "🥾",
        name: "Hiking",
      },
      {
        emoji: "🏀",
        name: "Basketball",
      },
      {
        emoji: "🎨",
        name: "Artwork",
      },
      {
        emoji: "🍕",
        name: "Exploring new cuisines",
      },
    ],
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
    name: "Github",
    img: "/git.svg",
    alt: "git",
    href: "https://github.com/dangol-anish",
  },
  {
    id: 2,
    name: "LinkedIn",
    img: "/link.svg",
    alt: "link",
    href: "https://www.linkedin.com/in/dangol-anish/",
  },
  {
    id: 3,
    name: "Instagram",
    img: "/insta.svg",
    alt: "insta",
    href: "https://www.instagram.com/anishdngl/",
  },
  {
    id: 4,
    name: "X",
    img: "/twit.svg",
    alt: "x",
    href: "https://x.com/dg_anish",
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
