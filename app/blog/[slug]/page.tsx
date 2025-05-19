import Link from "next/link";
import { getArticleData } from "@/lib/articles";

const Article = async ({ params }: { params: { slug: string } }) => {
  const articleData = await getArticleData(params.slug);

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
};

export default Article;
