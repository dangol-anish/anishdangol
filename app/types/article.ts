export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
};

export type Article = {
  id: string;
  title: string;
  date: string;
};

export interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}
