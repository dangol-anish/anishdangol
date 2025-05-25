import ContentList from "@/components/custom/ContentList";
import { projects } from "../constants/projectItems";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Projects | Anish Dangol",
  description: "Learn more about Anish Dangol.",
};

const Projects = () => {
  return <ContentList title="Projects" items={projects} />;
};

export default Projects;
