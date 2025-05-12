import { Card, CardContent } from "@/components/ui/card";
import Link from "next/link";
import { ReactNode } from "react";

interface SectionItem {
  title: string;
  description: string;
  icon?: ReactNode;
}

interface SectionListProps {
  title: string;
  items: SectionItem[];
  link?: string;
  linkText?: string;
}

export default function SectionList({
  title,
  items,
  link,
  linkText = "See all",
}: SectionListProps) {
  return (
    <section className="relative overflow-visible py-6">
      <div className="flex justify-between items-center my-6 px-6">
        <p className="text-md dark:text-zinc-100 font-semibold">{title}</p>
        {link && (
          <Link href={link} className="text-sm dark:text-zinc-100">
            {linkText}
          </Link>
        )}
      </div>

      <div className="space-y-2">
        {items.map((item, i) => (
          <Card
            key={i}
            className="relative cursor-pointer rounded-none border-0 border-b border-zinc-800 shadow-none dark:bg-[var(--background)] transition-all duration-200 ease-in-out hover:scale-[1.02] rounded-tr-xl rounded-tl-xl hover:bg-zinc-300/50 dark:hover:bg-zinc-700/40 z-10"
          >
            <CardContent className="flex items-center justify-between text-zinc-700 dark:text-zinc-400">
              <div>
                <h3 className="font-semibold dark:text-zinc-100">
                  {item.title}
                </h3>
                <p className="text-sm">{item.description}</p>
              </div>
              {item.icon && <div>{item.icon}</div>}
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  );
}
