import { FaAngleRight, FaLocationArrow } from "react-icons/fa";
import MagicButton from "./ui/MagicButton";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import { FloatingDock } from "./ui/floating-dock";
import { socialMedia } from "@/data";
import { BackgroundBeams } from "./ui/background-beams";

function HeroSection() {
  return (
    <div>
      {/* <div
        className="h-screen w-full dark:bg-stone-950 bg-white dark:bg-grid-white/[0.03] bg-grid-stone-950/[0.2]
       absolute top-0 left-0 flex items-center justify-center"
      >
        <div
          className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-stone-950
         bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"
        />
      </div> */}
      <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-5 z-50">
          <div className="bg-violet-300 h-44 w-44 border rounded-full mt-36"></div>
          <TextGenerateEffect
            words="Hey there! I am Anish Dangol"
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
          />
          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl text-stone-300">
            A fullstack web developer, based in Nepal.
          </p>
          <MagicButton
            title="Show my projects"
            icon={<FaAngleRight />}
            position="right"
          />
          <div className="my-10">
            <FloatingDock
              items={socialMedia.map((item) => ({
                title: item.name,
                icon: item.icon,
                href: item.href,
              }))}
            />
          </div>
        </div>
        <BackgroundBeams />
      </div>

      {/* <div className="flex justify-center relative  z-10">
        <div className="max-w-[89vw] md:max-w-2xl lg:max-w-[60vw] flex flex-col items-center justify-center gap-5">
          <div className="bg-violet-300 h-44 w-44 border rounded-full"></div>
          <TextGenerateEffect
            words="Hey there! I am Anish Dangol"
            className="text-center text-[40px] md:text-4xl lg:text-5xl"
          />
          <p className="text-center md:tracking-wider text-sm md:text-lg lg:text-2xl text-stone-300">
            A fullstack web developer, based in Nepal.
          </p>
          <MagicButton
            title="Show my projects"
            icon={<FaAngleRight />}
            position="right"
          />
          <div className="my-10">
            <FloatingDock
              items={socialMedia.map((item) => ({
                title: item.name,
                icon: item.icon,
                href: item.href,
              }))}
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default HeroSection;
