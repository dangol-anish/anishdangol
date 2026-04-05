import fs from "fs";
import matter from "gray-matter";
import moment from "moment";
import path from "path";
import { remark } from "remark";
import gfm from "remark-gfm";
import html from "remark-html";
import type { ArticleItem } from "@/app/types/article";
import remarkRehype from "remark-rehype";
import rehypeSlug from "rehype-slug";
import rehypeStringify from "rehype-stringify";
import rehypeHeadingOffset from "./rehype-heading-offset";

const articleDirectory = path.join(process.cwd(), "articles");

const parseArticleDate = (raw: string) => {
  const trimmed = String(raw ?? "").trim();
  const known = moment(trimmed, ["YYYY-MM-DD", "DD-MM-YYYY"], true);
  return known.isValid() ? known : moment(trimmed);
};

export const formatArticleDate = (raw: string, format = "MMMM D, YYYY") => {
  const parsed = parseArticleDate(raw);
  return parsed.isValid() ? parsed.format(format) : String(raw ?? "");
};

const normaliseTags = (value: unknown): string[] => {
  if (Array.isArray(value)) return value.map(String).map((t) => t.trim()).filter(Boolean);
  if (typeof value === "string")
    return value
      .split(",")
      .map((t) => t.trim())
      .filter(Boolean);
  return [];
};

const extractExcerpt = (markdown: string, maxLen = 180) => {
  const lines = String(markdown ?? "")
    .split("\n")
    .map((l) => l.trim());

  const paragraphs: string[] = [];
  let current: string[] = [];

  for (const line of lines) {
    if (!line) {
      if (current.length) {
        paragraphs.push(current.join(" "));
        current = [];
      }
      continue;
    }

    if (
      line.startsWith("#") ||
      line.startsWith(">") ||
      line.startsWith("---") ||
      line.startsWith("**Author:") ||
      line.startsWith("**Date:")
    ) {
      continue;
    }

    current.push(line);
  }

  if (current.length) paragraphs.push(current.join(" "));

  const first = paragraphs.find(Boolean) ?? "";
  const plain = first
    .replace(/\[([^\]]+)\]\([^)]+\)/g, "$1")
    .replace(/[`*_>#]/g, "")
    .replace(/\s+/g, " ")
    .trim();

  if (!plain) return "";
  if (plain.length <= maxLen) return plain;
  return `${plain.slice(0, maxLen).trimEnd()}…`;
};

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
    const tags = normaliseTags(
      (matterResult.data as Record<string, unknown>)?.tags,
    );
    const description =
      String(
        (matterResult.data as Record<string, unknown>)?.description ??
          (matterResult.data as Record<string, unknown>)?.excerpt ??
          (matterResult.data as Record<string, unknown>)?.summary ??
          "",
      ).trim() || extractExcerpt(matterResult.content);

    return {
      id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      category: matterResult.data.category,
      tags: tags.length ? tags : undefined,
      description: description || undefined,
    };
  });

  return allArticlesData.sort((a, b) => {
    const dateOne = parseArticleDate(a.date);
    const dateTwo = parseArticleDate(b.date);
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
    .use(remarkRehype) // convert to HTML AST
    .use(rehypeSlug) // add slug ids to headings
    .use(rehypeStringify) // serialize HTML AST to string
    .use(rehypeHeadingOffset)
    .process(matterResult.content);

  const contentHtml = processedContent.toString();

  return {
    id,
    contentHtml,
    title: matterResult.data.title,
    category: matterResult.data.category,
    date: formatArticleDate(matterResult.data.date, "MMMM Do YYYY"),
  };
};
