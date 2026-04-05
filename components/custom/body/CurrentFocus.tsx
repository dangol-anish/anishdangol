import { HiArrowUpRight } from "react-icons/hi2";

const focusItems = [
  {
    id: 1,
    title: "Multimodal Video Synchronization",
    role: "Research and Development",
    dateRange: "March 2026 – Present",
    description:
      "I'm working on an automated system that aligns narration audio with sequential visual assets using speech recognition and multimodal AI, producing time-accurate mappings for scalable video generation.",
    skills: [],
  },
];

export default function CurrentFocus() {
  return (
    <section className="py-8 pt-10 sm:pt-12">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Current focus
          </h2>
          <p className="text-sm text-muted-foreground">
            What I&apos;m building and researching right now.
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8 relative">
        {focusItems.map((item) => (
          <div key={item.id} className="relative">
            {/* Content */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground tracking-wide">
                {item.dateRange}
              </p>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <a
                    href="#"
                    className="text-base font-semibold text-zinc-900 dark:text-zinc-50 hover:text-muted-foreground transition-colors inline-flex items-center gap-1.5 group"
                  >
                    {item.title}
                    <HiArrowUpRight className="h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                  </a>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>

              <p className="text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed">
                {item.description}
              </p>

              {item.skills.length > 0 && (
                <div className="flex flex-wrap gap-2 pt-2">
                  {item.skills.map((skill) => (
                    <span
                      key={skill}
                      className="inline-block px-2 py-1 text-xs rounded-md border border-border bg-background/50 text-muted-foreground"
                    >
                      {skill}
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
