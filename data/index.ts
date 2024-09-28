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
    title: "Chronicle",
    des: "An all-in-one app that helps you track habits, write journals, manage tasks, and boost productivity with a pomodoro timer, all while offering detailed insights and a minimalist design.",
    img: "/chronicle.png",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/radix-ui.svg",
      "/supa.svg",
      "/lucide.svg",
      "/tt.svg",
    ],
    link: "https://chronicle-kappa.vercel.app/",
  },
  // Tiptap,
  {
    id: 2,
    title: "Linkleap",
    des: "A CRM solution designed to simplify customer, company, and user management, offering powerful insights and effortless organization to enhance your business operations.",
    img: "/linkleap.png",
    iconLists: [
      "/re.svg",
      "/tail.svg",
      "/js.svg",
      "/node.svg",

      "/pg.svg",
      "/vercelpg.svg",
      "/chart.svg",
      "/ex.svg",
    ],
    link: "https://linkleap-client.vercel.app/",
  },
  {
    id: 3,
    title: "Portfolio",
    des: "A personalized portfolio website designed to highlight my projects and skillset.",
    img: "/re.svg",
    iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/fm.svg", "/ace.svg"],
    link: "https://www.dangolanish.com.np/",
  },
  // techs used: Next js, Tailwind , Framer Motion, Aceternity
  {
    id: 4,
    title: "EstateGateway",
    des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects.",
    img: "/estategateway.png",
    iconLists: [
      "/re.svg",
      "/rtk.svg",
      "/fbase.svg",
      "/tail.svg",
      "/node.svg",
      "/mongo.svg",
    ],
    link: "https://real-estate-b49q.onrender.com/",
  },
  //  MongoDB, Tailwind,
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
