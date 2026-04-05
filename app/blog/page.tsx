import PageContainer from "@/components/custom/PageContainer";
import ArticleList from "@/components/custom/body/ArticleList";
import { formatArticleDate, getCategorisedArticle } from "@/lib/articles";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog | Anish Dangol",
  description: "Learn more about Anish Dangol.",
};

export default async function Blog() {
  const categorised = await getCategorisedArticle();
  const articles = Object.values(categorised).flat();

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
    <main className="relative">
      <PageContainer className="pt-24 pb-16">
        <ArticleList
          title="Blog posts"
          description="Thoughts, ideas, and insights on what I’m learning, building, and exploring"
          items={blogItems}
          heading="h1"
          className="py-0"
        />
      </PageContainer>
    </main>
  );
}
