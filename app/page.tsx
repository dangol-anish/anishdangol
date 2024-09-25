import GridSection from "@/components/GridSection";
import HeroSection from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="relative bg-stone-950 flex justify-center items-center flex-col overflow-hidden mx-auto sm:px-10 px-5">
        <div className="max-w-7xl w-full">
          <FloatingNav
            navItems={[
              {
                name: "Home",
                link: "/",
                icon: <FaHome />,
              },
            ]}
          />
          <HeroSection />
          <GridSection />
          <ProjectSection />
          <SkillSection />
        </div>
      </main>
    </>
  );
}
