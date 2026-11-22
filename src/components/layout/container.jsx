import { cn } from "@/lib/utils";

/**
 * Editorial Container.
 * Sets max width and responsive padding per docs/DESIGN.MD §4 (Desktop 5-7vw, mobile 20px).
 */
export function Container({ className, children, ...props }) {
  return (
    <div
      className={cn("mx-auto w-full max-w-6xl px-5 sm:px-8 lg:px-12", className)}
      {...props}
    >
      {children}
    </div>
  );
}
