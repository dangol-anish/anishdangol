import ContentList from "@/components/custom/ContentList";
import React from "react";
import { blogItems } from "../constants/blogItems";

const Blog = () => {
  return (
    <ContentList
      title="Projects"
      items={blogItems}
      link="/blog"
      linkText="See all projects"
    />
  );
};

export default Blog;
