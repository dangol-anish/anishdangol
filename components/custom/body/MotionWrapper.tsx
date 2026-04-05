import { ReactNode } from "react";

export default function MotionWrapper({ children }: { children: ReactNode }) {
  const sections = Array.isArray(children) ? children : [children];

  return (
    <div>
      {sections.map((child, i) => (
        <section
          key={i}
          className="relative motion-reduce:animate-none animate-in fade-in-0 slide-in-from-bottom-2 duration-500"
          style={{ animationDelay: `${i * 80}ms` }}
        >
          {child}
        </section>
      ))}
    </div>
  );
}
