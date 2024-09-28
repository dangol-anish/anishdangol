export const navItems = [
  { name: "About", link: "#about-section" },
  { name: "Projects", link: "#projects-section" },
  { name: "Skillset", link: "#skillset-section" },
  { name: "Contact", link: "#contact-section" },
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
    des: "A user-friendly real estate app that connects buyers and sellers with intuitive listings and advanced search features.",
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
    icon: "/git.svg",
    alt: "git",
    href: "https://github.com/dangol-anish",
  },
  {
    id: 2,
    name: "LinkedIn",
    icon: "/link.svg",
    alt: "link",
    href: "https://www.linkedin.com/in/dangol-anish/",
  },
  {
    id: 3,
    name: "Instagram",
    icon: "/insta.svg",
    alt: "insta",
    href: "https://www.instagram.com/anishdngl/",
  },
  {
    id: 4,
    name: "X",
    icon: "/twit.svg",
    alt: "x",
    href: "https://x.com/dg_anish",
  },
];

export const skillset = [
  {
    heading: "Languages",
    list: [
      {
        name: "HTML",
        href: "https://developer.mozilla.org/en-US/docs/Web/HTML",
        icon: "/html.svg",
      },
      {
        name: "CSS",
        href: "https://developer.mozilla.org/en-US/docs/Web/CSS",
        icon: "/css.svg",
      },
      {
        name: "JavaScript",
        href: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
        icon: "/js.svg",
      },
      {
        name: "TypeScript",
        href: "https://www.typescriptlang.org/",
        icon: "/ts.svg",
      },
      {
        name: "C#",
        href: "https://learn.microsoft.com/en-us/dotnet/csharp/",
        icon: "/csharp.svg",
      },
      {
        name: "PHP",
        href: "https://www.php.net/",
        icon: "/php.svg",
      },
    ],
  },
  {
    heading: "Frameworks & Libraries",
    list: [
      {
        name: "React",
        href: "https://reactjs.org/",
        icon: "/re.svg",
      },
      {
        name: "Next.js",
        href: "https://nextjs.org/",
        icon: "/next.svg",
      },
      {
        name: "Tailwind CSS",
        href: "https://tailwindcss.com/",
        icon: "/tail.svg",
      },
      {
        name: "Node.js",
        href: "https://nodejs.org/en/",
        icon: "/node.svg",
      },
      {
        name: "Express",
        href: "https://expressjs.com/",
        icon: "/ex.svg",
      },
      {
        name: "shadcn/ui",
        href: "https://shadcn.dev/",
        icon: "/shadcn.svg",
      },
      {
        name: "Aceternity UI",
        href: "https://aceternity.dev/",
        icon: "/ace.svg",
      },
      {
        name: "Redux Toolkit",
        href: "https://redux-toolkit.js.org/",
        icon: "/rtk.svg",
      },
      {
        name: "Bootstrap",
        href: "https://getbootstrap.com/",
        icon: "/bs.svg",
      },
      {
        name: "p5js",
        href: "https://p5js.org/",
        icon: "/p5js.svg",
      },
    ],
  },
  {
    heading: "Databases and ORMs",
    list: [
      {
        name: "MySQL",
        href: "https://www.mysql.org/",
        icon: "/mysql.svg",
      },
      {
        name: "PostgreSQL",
        href: "https://www.postgresql.org/",
        icon: "/pg.svg",
      },
      {
        name: "MongoDB",
        href: "https://www.mongodb.com/",
        icon: "/mongo.svg",
      },
      {
        name: "Supabase",
        href: "https://supabase.com/",
        icon: "/supa.svg",
      },
      {
        name: "Firebase",
        href: "https://firebase.google.com/",
        icon: "/fbase.svg",
      },
      {
        name: "Sequelize",
        href: "https://sequelize.org/",
        icon: "/seq.svg",
      },
    ],
  },
  {
    heading: "Tools",
    list: [
      {
        name: "Git",
        href: "https://git-scm.com/",
        icon: "/git1.svg",
      },
      {
        name: "GitHub",
        href: "https://github.com/",
        icon: "/gh1.svg",
      },
      {
        name: "Postman",
        href: "https://www.postman.com/",
        icon: "/postman.svg",
      },
      {
        name: "Vercel",
        href: "https://vercel.com/",
        icon: "/vercel.svg",
      },
      {
        name: "Jest",
        href: "https://jestjs.io/",
        icon: "/jest.svg",
      },
    ],
  },
];
