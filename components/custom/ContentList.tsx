"use client";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { Github } from "lucide-react";
import Link from "next/link";
import { ReactNode } from "react";

interface ContentItem {
  title: string;
  description: string;
  icon?: ReactNode;
  live?: string;
  repo?: string;
}

interface ContentListProps {
  title: string;
  items: ContentItem[];
}

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
    <section className="mx-auto max-w-screen-sm dark:bg-[var(--background)] rounded-lg py-28 relative">
      <div className="flex justify-between items-center my-6 px-6">
        <p className="text-md dark:text-zinc-100 font-semibold text-zinc-900">
          {title}
        </p>
      </div>

      <motion.div
        className="space-y-4 px-6"
        variants={containerVariants}
        initial="hidden"
        animate="show"
      >
        {items.map((item) => (
          <motion.div key={item.title} variants={itemVariants}>
            <Card className="group border-0 border-b border-zinc-300 dark:border-zinc-700 rounded-none dark:bg-zinc-900 rounded-t-xl transition-all duration-300 relative hover:z-10 hover:-mx-4 hover:px-4 hover:bg-zinc-200 dark:hover:bg-zinc-800 my-1 shadow-none">
              <CardContent className="flex items-center justify-between px-0 w-full max-w-[100%]">
                <div className="flex items-start gap-4 w-[90%]">
                  <div className="w-full">
                    <p className="font-medium text-md text-zinc-700 dark:text-zinc-100">
                      {item.title}
                    </p>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 ">
                      {item.description}
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-5">
                  {item.live && (
                    <Link
                      href={item.live}
                      target="_blank"
                      className="text-sm hover:underline flex items-center gap-1"
                    >
                      {item.icon ? (
                        item.icon
                      ) : (
                        <button className="group cursor-pointer not-prose inline-flex items-center gap-1 pl-2 pr-0.5 py-1 rounded-md font-bold bg-inherit  text-current hover:text-black hover:dark:text-white border-zinc-300 dark:border-zinc-700 hover:bg-zinc-200 hover:dark:bg-zinc-800 transition-colors duration-300 ease-in-out">
                          <svg
                            viewBox="0 0 24 24"
                            className="size-5 stroke-[3px] fill-none stroke-current opacity-50 group-hover:opacity-100 transition-opacity duration-300 ease-in-out"
                          >
                            <line
                              x1="5"
                              y1="12"
                              x2="19"
                              y2="12"
                              className="scale-x-0 translate-x-[10px] group-hover:translate-x-0 group-hover:scale-x-100 transition-transform duration-300 ease-in-out"
                            />
                            <polyline
                              points="12 5 19 12 12 19"
                              className="-translate-x-2 group-hover:translate-x-0 transition-transform duration-300 ease-in-out"
                            />
                          </svg>
                        </button>
                      )}
                    </Link>
                  )}
                  {item.repo && (
                    <Link
                      href={item.repo}
                      target="_blank"
                      className="text-sm hover:underline flex items-center gap-1 dark:text-zinc-400 dark:hover:text-zinc-100"
                    >
                      <Github size={16} />
                    </Link>
                  )}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
