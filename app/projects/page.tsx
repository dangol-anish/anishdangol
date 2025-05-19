import ContentList from "@/components/custom/ContentList";
import { projects } from "../constants/projectItems";

const Projects = () => {
  return <ContentList title="Projects" items={projects} />;
};

export default Projects;
