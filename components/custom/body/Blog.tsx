import { getCategorisedArticle } from "@/lib/articles";
import SectionList from "./SectionList";

type Article = {
  id: string;
  title: string;
  date: string; // expecting format "YYYY-MM-DD"
  // other props if needed
};

export default function BlogPosts() {
  const categorised = getCategorisedArticle();

  // Flatten all articles into one array
  const articles: Article[] = Object.values(categorised).flat();

  // Sort articles by date descending (newest first), safely handling dates
  articles.sort((a, b) => {
    const dateA = new Date(String(a.date)).getTime() || 0;
    const dateB = new Date(String(b.date)).getTime() || 0;
    return dateB - dateA;
  });

  // Map articles to blogItems for SectionList
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
