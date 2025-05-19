import ContentList from "@/components/custom/ContentList";
import { projects } from "../constants/projectItems";

const Projects = () => {
  return (
    <ContentList
      title="Projects"
      items={projects}
      link="/projects"
      linkText="See all projects"
    />
  );
};

export default Projects;
