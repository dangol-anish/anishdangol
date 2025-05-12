import { blogItems } from "@/app/constants/blogItems";
import SectionList from "./SectionList";

export default function BlogPosts() {
  return (
    <SectionList
      title="Blog Posts"
      items={blogItems}
      link="/blog"
      linkText="See all posts"
    />
  );
}
