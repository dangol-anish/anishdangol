// lib/articles.ts
import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import path from "path";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";

import type { ArticleItem } from "@/app/types/article";

const articleDirectory = path.join(process.cwd(), "articles");

export const getAllArticleSlugs = (): string[] => {
  const fileNames = fs.readdirSync(articleDirectory);
  return fileNames.map((fileName) => fileName.replace(/\.md$/, ""));
};

const getSortedArticles = (): ArticleItem[] => {
  const fileNames = fs.readdirSync(articleDirectory);

  const allArticlesData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(articleDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf-8");

    const matterResult = matter(fileContents);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
    };
  });

  return allArticlesData.sort((a, b) => {
    const format = "DD-MM-YYYY";
    const dateOne = moment(a.date, format);
    const dateTwo = moment(b.date, format);
    if (dateOne.isBefore(dateTwo)) return -1;
    if (dateOne.isAfter(dateTwo)) return 1;
    return 0;
  });
};

export const getCategorisedArticle = (): Record<string, ArticleItem[]> => {
  const sortedArticles = getSortedArticles();
  const categorisedArticles: Record<string, ArticleItem[]> = {};

  sortedArticles.forEach((article) => {
    if (!categorisedArticles[article.category]) {
      categorisedArticles[article.category] = [];
    }
    categorisedArticles[article.category].push(article);
  });

  return categorisedArticles;
};

export const getArticleData = async (id: string) => {
  const fullPath = path.join(articleDirectory, `${id}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf-8");

  const matterResult = matter(fileContents);

  const processedContent = await remark()
    .use(gfm)
    .use(html)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: moment(matterResult.data.date, "DD-MM-YYYY").format("MMMM Do YYYY"),
  };
};
