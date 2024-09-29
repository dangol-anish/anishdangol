import ContactSection from "@/components/ContactSection";
import FooterSection from "@/components/FooterSection";
import GridSection from "@/components/GridSection";
import HeroSection from "@/components/HeroSection";
import { ProjectSection } from "@/components/ProjectSection";
import SkillSection from "@/components/SkillSection";
import { BackgroundBeams } from "@/components/ui/background-beams";
import { FloatingNav } from "@/components/ui/FloatingNav";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <main className="relative bg-stone-950 flex justify-center items-center flex-col overflow-hidden w-full ">
        <div className=" w-full">
          <FloatingNav />

          <HeroSection />
          <GridSection />
          <ProjectSection />
          <SkillSection />
          <ContactSection />
          <FooterSection />
        </div>
      </main>
    </>
  );
}
