import { ArticlePageProps } from "@/app/types/article";
import { getArticleData, getAllArticleSlugs } from "@/lib/articles";
import { Metadata } from "next";
import PageContainer from "@/components/custom/PageContainer";

export const dynamicParams = true;

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
    <section className="relative">
      <PageContainer className="pt-16 pb-14 sm:pt-24 sm:pb-16">
        <header className="mb-8 space-y-2">
          <p className="text-sm text-muted-foreground">
            {articleData.date.toString()}
          </p>
          <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
            {articleData.title}
          </h1>
        </header>

        <article
          className="article"
          dangerouslySetInnerHTML={{ __html: articleData.contentHtml }}
        />
      </PageContainer>
    </section>
  );
}
