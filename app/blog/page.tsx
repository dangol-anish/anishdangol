import ContentList from "@/components/custom/ContentList";
import { getCategorisedArticle } from "@/lib/articles";

export default function Blog() {
  const categorised = getCategorisedArticle();
  const articles = Object.values(categorised).flat();

  const blogItems = articles.map((article) => ({
    title: article.title,
    description: `${article.category} | ${article.date}`,
    live: `/blog/${article.id}`,
  }));

  return <ContentList title="Articles" items={blogItems} />;
}
