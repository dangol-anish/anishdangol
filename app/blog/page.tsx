import ContentList from "@/components/custom/ContentList";
import { getCategorisedArticle } from "@/lib/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anish Dangol",
  description: "Learn more about Anish Dangol.",
};

export default async function Blog() {
  const categorised = await getCategorisedArticle();
  const articles = Object.values(categorised).flat();

  const blogItems = articles.map((article) => ({
    title: article.title,
    description: `${article.date}`,
    live: `/blog/${article.id}`,
  }));

  return <ContentList title="Blog Posts" items={blogItems} />;
}
