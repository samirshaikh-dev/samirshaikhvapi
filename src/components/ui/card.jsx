import { cn } from "@/lib/utils";

/**
 * Compact, intentional card design avoiding bloat and excessive nesting.
 * Follows AVOID.md & compact-card-design rules.
 */
export function Card({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "rounded-xl border border-zinc-200/80 bg-white p-5 shadow-xs transition-all dark:border-zinc-800 dark:bg-zinc-900/60",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
