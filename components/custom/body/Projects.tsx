import { projects } from "@/app/constants/projectItems";
import SectionList from "./SectionList";

export default function Projects() {
  return (
    <SectionList
      title="Projects"
      items={projects}
      link="/projects"
      linkText="See all projects"
      description="Selected work across ideas and execution"
    />
  );
}
