import Image from "next/image";
import { Button } from "@/components/ui/button";
import { footerItems } from "@/app/constants/footeritems";
import { ArrowUpRight } from "lucide-react";

const EMAIL = "anishdangol.work@gmail.com";

export default function Hero() {
  return (
    <header className="pt-10 pb-6">
      <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-center">
        <div className="space-y-5">
          {/* <div className="inline-flex items-center gap-2 rounded-full border bg-background/60 px-3 py-1 text-xs text-muted-foreground">
            <span className="size-1.5 rounded-full bg-foreground/70" />
            Building minimal, high-quality web products
          </div> */}

          <div className="space-y-2">
            <h1 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50 sm:text-4xl">
              Anish Dangol
            </h1>
            <p className="text-md text-muted-foreground ">
              Software developer focused on clean UI, performance, and
              accessible experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <Button
              asChild
              className="group h-10 px-4 transition-all duration-200 hover:pr-7 hover:-translate-y-0.5 hover:shadow-sm active:translate-y-0"
            >
              <a
                href={`mailto:${EMAIL}`}
                aria-label="Email Anish"
                className="relative inline-flex items-center justify-center"
              >
                Let&apos;s talk
                <ArrowUpRight className="absolute mr-1 right-1 ml-1 h-4 w-4 opacity-0 transition-all duration-200 group-hover:opacity-100 group-focus-visible:opacity-100" />
              </a>
            </Button>
            {/* <Button asChild variant="outline" className="h-10 px-4">
              <Link href="/projects">View projects</Link>
            </Button> */}
            {/* <Button asChild variant="ghost" className="h-10 px-3">
              <Link href="/projects">View Projects</Link>
            </Button> */}
          </div>

          <div className="flex items-center gap-3 ">
            {footerItems
              .filter((i) => i.label === "GitHub" || i.label === "LinkedIn")
              .map(({ label, path, icon: Icon }) => (
                <a
                  key={label}
                  href={path}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-md border bg-background/50 px-2 py-2 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
          </div>
        </div>

        <div className="flex md:justify-end">
          <div className="relative overflow-hidden rounded-3xl p-2 ">
            <Image
              src="/assets/personal/me.webp"
              width={220}
              height={220}
              alt="Anish Dangol"
              className="aspect-square w-[180px] rounded-2xl object-cover sm:w-[220px]"
              priority
              quality={85}
              placeholder="blur"
              blurDataURL="/assets/personal/me-blur.webp"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
