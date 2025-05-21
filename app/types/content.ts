import { ReactNode } from "react";

export interface ContentItem {
  title: string;
  description: string;
  icon?: ReactNode;
  live?: string;
  repo?: string;
}

export interface ContentListProps {
  title: string;
  items: ContentItem[];
}
