import PageContainer from "@/components/custom/PageContainer";
import SectionList from "@/components/custom/body/SectionList";
import { projects } from "../constants/projectItems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anish Dangol",
  description: "Learn more about Anish Dangol.",
};

const Projects = () => {
  return (
    <main className="relative">
      <PageContainer className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <SectionList
          title="Projects"
          items={projects}
          description="Selected work across ideas and execution"
          limit={projects.length}
          heading="h1"
          className="py-0"
        />
      </PageContainer>
    </main>
  );
};

export default Projects;
