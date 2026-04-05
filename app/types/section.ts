import { ReactNode } from "react";

export interface SectionItem {
  title: string;
  description: string;
  icon?: ReactNode;
  live?: string;
  repo?: string;
  tags?: string[];
}

export interface SectionListProps {
  title: string;
  items: SectionItem[];
  link?: string;
  linkText?: string;
  description?: string;
  limit?: number;
  heading?: "h1" | "h2";
  className?: string;
}
