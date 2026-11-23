import { cn } from "@/lib/utils";

/**
 * Editorial Container.
 * Sets max width and responsive padding per docs/DESIGN.MD §4 (Desktop 5-7vw, mobile 20px).
 */
export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn(
        "mx-auto w-[90vw] max-w-none px-6 sm:px-10 lg:px-16",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
