import { SectionListProps } from "@/app/types/section";
import { cn } from "@/lib/utils";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";

export default function SectionList({
  title,
  items,
  link,
  linkText = "See all",
  description,
  limit = 3,
  heading = "h2",
  className,
}: SectionListProps) {
  const Heading = heading === "h1" ? "h1" : "h2";
  const displayItems = items.slice(0, limit);

  return (
    <section className={cn("relative py-8 sm:py-10", className)}>
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

      <div className="mt-8 space-y-6">
        {displayItems.map((item, index) => {
          const live = item.live;
          const isExternal =
            typeof live === "string" && /^https?:\/\//.test(live);

          return (
            <div key={`${item.title ?? "item"}-${index}`}>
              <div className="">
                <div className="flex items-start justify-between gap-2">
                  <p className="text-base font-medium text-zinc-900 dark:text-zinc-50">
                    {item.title}
                  </p>
                  <div className="flex shrink-0 items-center gap-1.5 my-1">
                    {live && (
                      <Link
                        href={live}
                        target={isExternal ? "_blank" : undefined}
                        rel={isExternal ? "noopener noreferrer" : undefined}
                        className="inline-flex items-center gap-1 rounded-md border bg-background/50 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <ArrowUpRight className="h-3.5 w-3.5" />
                        {isExternal ? "Live" : "Open"}
                      </Link>
                    )}
                    {item.repo && (
                      <Link
                        href={item.repo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 rounded-md border bg-background/50 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="h-3.5 w-3.5" />
                        Repo
                      </Link>
                    )}
                  </div>
                </div>

                <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                  {item.description}
                </p>

                {item.tags && item.tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 pt-1">
                    {item.tags.map((tag) => (
                      <span
                        key={tag}
                        className="inline-block px-2 py-1 text-xs rounded-md border border-border bg-background/50 text-muted-foreground my-3"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              {/* 
              {index < displayItems.length - 1 && (
                <div className="mt-6 border-t border-border" />
              )} */}
            </div>
          );
        })}
      </div>
    </section>
  );
}
