import Link from "next/link";
import { HiArrowUpRight } from "react-icons/hi2";
import { cn } from "@/lib/utils";
import { ArrowUpRight } from "lucide-react";

export type ArticleListItem = {
  title: string;
  href: string;
  date: string;
  description?: string;
  tags?: string[];
};

export type ArticleListProps = {
  title: string;
  description?: string;
  items: ArticleListItem[];
  link?: string;
  linkText?: string;
  limit?: number;
  heading?: "h1" | "h2";
  className?: string;
};

export default function ArticleList({
  title,
  description,
  items,
  link,
  linkText = "See all",
  limit,
  heading = "h2",
  className,
}: ArticleListProps) {
  const Heading = heading === "h1" ? "h1" : "h2";
  const displayItems = typeof limit === "number" ? items.slice(0, limit) : items;

  return (
    <section className={cn("py-8 pt-10 sm:pt-12", className)}>
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="space-y-1">
          <Heading className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            {title}
          </Heading>
          {description && (
            <p className="text-sm text-muted-foreground">{description}</p>
          )}
        </div>
        {link && (
          <Link
            href={link}
            className="text-sm text-muted-foreground hover:text-foreground transition-colors"
          >
            {linkText}
          </Link>
        )}
      </div>

      <div className="mt-8 space-y-8 relative">
        {displayItems.map((item, index) => (
          <div key={`${item.href}-${index}`} className="relative">
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground tracking-wide">
                {item.date}
              </p>

              <div className="flex items-start justify-between gap-2">
                <div className="min-w-0">
                  <Link
                    href={item.href}
                    className="text-base font-semibold text-zinc-900 dark:text-zinc-50 hover:text-muted-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {item.title}
                    <HiArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </Link>
                </div>

                <div className="flex shrink-0 items-center gap-2">
                  <Link
                    href={item.href}
                    target={/^https?:\/\//.test(item.href) ? "_blank" : undefined}
                    rel={
                      /^https?:\/\//.test(item.href)
                        ? "noopener noreferrer"
                        : undefined
                    }
                    aria-label="Open post"
                    className="inline-flex items-center gap-1 rounded-md border bg-background/50 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                  >
                    <ArrowUpRight className="h-3.5 w-3.5" />
                    Open
                  </Link>
                </div>
              </div>

              {item.description && (
                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>
              )}

              {item.tags && item.tags.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-block px-2 py-1 text-xs rounded-md border border-border bg-background/50 text-muted-foreground"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
