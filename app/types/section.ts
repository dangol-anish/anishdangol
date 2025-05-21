import { ReactNode } from "react";

export interface SectionItem {
  title: string;
  description: string;
  icon?: ReactNode;
  live?: string;
  repo?: string;
}

export interface SectionListProps {
  title: string;
  items: SectionItem[];
  link?: string;
  linkText?: string;
}
