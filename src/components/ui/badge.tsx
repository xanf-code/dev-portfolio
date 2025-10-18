import * as React from "react";
import { cn } from "@/lib/utils";

export type BadgeProps = React.HTMLAttributes<HTMLDivElement>;

const Badge = React.forwardRef<HTMLDivElement, BadgeProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(
        "inline-flex items-center rounded-md border border-transparent px-3 py-1 text-xs font-mono font-medium transition-colors focus:outline-hidden focus:ring-2 focus:ring-ring focus:ring-offset-2 bg-[#23272f] text-[#7dd3fc] dark:bg-[#1e293b] dark:text-[#38bdf8]",
        className
      )}
      {...props}
    />
  )
);
Badge.displayName = "Badge";

export { Badge };
