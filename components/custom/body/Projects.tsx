import SectionList from "./SectionList";
import { projects } from "@/app/constants/projectItems";

export default function Projects() {
  return (
    <SectionList
      title="Projects"
      items={projects}
      link="/projects"
      linkText="See all projects"
    />
  );
}
