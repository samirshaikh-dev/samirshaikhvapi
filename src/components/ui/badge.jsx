import { cn } from "@/lib/utils";

export function Badge({ className, children, ...props }) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-md bg-zinc-100 px-2 py-0.5 text-xs font-medium text-zinc-800 dark:bg-zinc-800 dark:text-zinc-200",
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
