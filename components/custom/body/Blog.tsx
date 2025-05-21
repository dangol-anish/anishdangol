import { getCategorisedArticle } from "@/lib/articles";
import SectionList from "./SectionList";

type Article = {
  id: string;
  title: string;
  date: string;
};

export default function BlogPosts() {
  const categorised = getCategorisedArticle();

  const articles: Article[] = Object.values(categorised).flat();

  articles.sort((a, b) => {
    const dateA = new Date(String(a.date)).getTime() || 0;
    const dateB = new Date(String(b.date)).getTime() || 0;
    return dateB - dateA;
  });

  const blogItems = articles.map((article) => ({
    title: article.title,
    description: article.date,
    live: `/blog/${article.id}`,
  }));

  return (
    <SectionList
      title="Blog Posts"
      items={blogItems}
      link="/blog"
      linkText="See all posts"
    />
  );
}
