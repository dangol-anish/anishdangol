const workItems = [
  {
    id: 1,
    title: "Inflancer Technology",
    role: "Full-stack Development",
    dateRange: "August 2025 – December 2025",
    description:
      "Contributed to the development of a scalable healthcare management system, working across both frontend and backend to deliver features including patient management, appointment scheduling, billing, and dashboard analytics. Demonstrated the ability to independently build end-to-end solutions by applying best practices in API design, state management, and validation, ensuring performance, usability, and secure data handling in a real-world environment.",
    skills: [
      "TypeScript",
      "Next.js",
      "Emotion CSS",
      "Bun.js",
      "Elysia.js",
      "Drizzle ORM",
      "PostgreSQL",
    ],
  },
  {
    id: 2,
    title: "RoadSense — Alternative Route Finder",
    role: "Research",
    dateRange: "Jan 2025 – February 2026",
    description:
      "Developed an enhanced Bidirectional A* algorithm with a hard exclusion mechanism for real-time, safety-critical urban navigation, validated across 1,600 experimental runs on the road networks of Kathmandu and Lalitpur. The system achieves sub-100ms pathfinding with verifiable obstacle avoidance guarantees, outperforming conventional soft-penalty approaches by providing provable safety margins in dynamic environments.",

    skills: [
      "TypeScript",
      "React Native",
      "Python",
      "OSMnx",
      "NetworkX",
      "PostgreSQL",
    ],
  },
];

export default function Work() {
  return (
    <section className="py-8">
      <div className="flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between sm:gap-4">
        <div className="space-y-1">
          <h2 className="text-2xl font-semibold tracking-tight text-zinc-900 dark:text-zinc-50">
            Work Experience
          </h2>
          <p className="text-sm text-muted-foreground">
            Overview of past roles and current responsibilities
          </p>
        </div>
      </div>

      <div className="mt-8 space-y-8 relative">
        {/* Timeline line */}
        <div className="absolute left-[13px] top-0 bottom-0 w-px bg-border sm:left-[15px]" />

        {workItems.map((item) => (
          <div key={item.id} className="relative pl-10 sm:pl-12">
            {/* Timeline dot */}
            <div className="absolute left-0 top-1.5 flex h-7 w-7 items-center justify-center rounded-full border-2 border-border bg-background sm:h-8 sm:w-8">
              <div className="h-1.5 w-1.5 rounded-full bg-foreground sm:h-2 sm:w-2" />
            </div>

            {/* Content */}
            <div className="space-y-2">
              <p className="text-xs text-muted-foreground tracking-wide">
                {item.dateRange}
              </p>
              <div className="flex items-start justify-between gap-2">
                <div>
                  <p className="text-base font-semibold text-zinc-900 dark:text-zinc-50 hover:text-muted-foreground transition-colors inline-flex items-center gap-1.5 group">
                    {item.title}
                  </p>
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
