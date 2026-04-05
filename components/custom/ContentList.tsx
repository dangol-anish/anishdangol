"use client";

import { ContentListProps } from "@/app/types/content";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ArrowUpRight, Github } from "lucide-react";
import Link from "next/link";
import PageContainer from "./PageContainer";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

export default function ContentList({ title, items }: ContentListProps) {
  return (
    <section className="relative">
      <PageContainer className="pt-24 pb-16">
        <div className="flex items-end justify-between gap-4">
          <div className="space-y-1">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
              {title}
            </h1>
          </div>
        </div>

        <motion.div
          className="mt-6 grid gap-3"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {items.map((item, index) => {
            const live = item.live;
            const isExternal =
              typeof live === "string" && /^https?:\/\//.test(live);

            return (
              <motion.div
                key={`${item.title ?? "item"}-${index}`}
                variants={itemVariants}
              >
                <Card className="group gap-3 border bg-card/40 py-4 shadow-sm transition-colors hover:bg-card/70">
                  <CardContent className="flex items-start justify-between gap-4">
                    <div className="min-w-0">
                      <p className="truncate text-base font-medium text-zinc-900 dark:text-zinc-50">
                        {item.title}
                      </p>
                      <p className="mt-0.5 line-clamp-2 text-sm text-muted-foreground">
                        {item.description}
                      </p>
                    </div>

                    <div className="flex shrink-0 items-center gap-2">
                      {live && (
                        <Link
                          href={live}
                          target={isExternal ? "_blank" : undefined}
                          rel={isExternal ? "noopener noreferrer" : undefined}
                          aria-label="Open link"
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
                          aria-label="View repository"
                          className="inline-flex items-center gap-1 rounded-md border bg-background/50 px-2 py-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                          Repo
                        </Link>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>
      </PageContainer>
    </section>
  );
}
