export type ArticleItem = {
  id: string;
  title: string;
  date: string;
  category: string;
  tags?: string[];
  description?: string;
};

export type Article = {
  id: string;
  title: string;
  date: string;
};

export interface ArticlePageProps {
  params: Promise<{ slug: string }>;
}
