import { cn } from "@/lib/utils";
import type { ComponentPropsWithoutRef, ReactNode } from "react";

export default function PageContainer({
  children,
  className,
  ...props
}: ComponentPropsWithoutRef<"div"> & { children: ReactNode }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-5xl px-4 sm:px-6 lg:px-8", className)}
      {...props}
    >
      {children}
    </div>
  );
}
