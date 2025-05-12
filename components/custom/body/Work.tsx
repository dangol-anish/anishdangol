import { work } from "@/app/constants/workItems";
import SectionList from "./SectionList";
import { projects } from "@/app/constants/projectItems";

export default function Work() {
  return (
    <SectionList
      title="Work"
      items={work}
      link="/work"
      linkText="See all work"
    />
  );
}
