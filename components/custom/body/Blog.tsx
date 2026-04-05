import { formatArticleDate, getCategorisedArticle } from "@/lib/articles";
import type { ArticleItem } from "@/app/types/article";
import ArticleList from "./ArticleList";

export default function BlogPosts() {
  const categorised = getCategorisedArticle();

  const articles: ArticleItem[] = Object.values(categorised).flat();

  articles.sort((a, b) => {
    const dateA = new Date(String(a.date)).getTime() || 0;
    const dateB = new Date(String(b.date)).getTime() || 0;
    return dateB - dateA;
  });

  const blogItems = articles.map((article) => {
    const tags = Array.from(
      new Set([article.category, ...(article.tags ?? [])].filter(Boolean)),
    );

    return {
      title: article.title,
      href: `/blog/${article.id}`,
      date: formatArticleDate(article.date),
      description: article.description,
      tags,
    };
  });

  return (
    <ArticleList
      title="Blog posts"
      description="Thoughts, ideas, and insights on what I’m learning, building, and exploring"
      items={blogItems}
      link="/blog"
      linkText="See all posts"
      limit={3}
    />
  );
}
