export default function About() {
  return (
    <section className="py-10">
      <div className="space-y-1">
        <h2 className="text-lg font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
          About
        </h2>
        <p className="text-sm text-muted-foreground">
          A quick snapshot of how I work.
        </p>
      </div>

      <div className="mt-5 rounded-2xl border bg-card/40 p-6 shadow-sm">
        <p className="text-base leading-relaxed text-zinc-700 dark:text-zinc-200">
          I enjoy building products that feel calm, fast, and obvious to use —
          with a strong focus on accessibility, clean typography, and details
          that help users take action.
        </p>

        <div className="mt-4 flex flex-wrap gap-2">
          {[
            "Next.js",
            "React",
            "TypeScript",
            "Tailwind CSS",
            "UI/UX",
            "Framer Motion",
          ].map((label) => (
            <span
              key={label}
              className="rounded-full border bg-background/50 px-3 py-1 text-xs text-muted-foreground"
            >
              {label}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

