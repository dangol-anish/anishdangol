import { getArticleData, getAllArticleSlugs } from "@/lib/articles";
import { Metadata } from "next";

export const dynamicParams = true;

interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const slugs = getAllArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: ArticlePageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const articleData = await getArticleData(resolvedParams.slug);
  return {
    title: articleData.title,
  };
}

export default async function Article({ params }: ArticlePageProps) {
  const resolvedParams = await params;
  const articleData = await getArticleData(resolvedParams.slug);

  return (
    <section className="mx-auto max-w-screen-sm dark:bg-[var(--background)] rounded-lg py-28 relative">
      <p className="px-6 text-sm text-zinc-500">
        {articleData.date.toString()}
      </p>
      <article
        className="article px-6"
        dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
      />
    </section>
  );
}
