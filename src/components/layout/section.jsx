import { cn } from "@/lib/utils";
import { Container } from "./container";

/**
 * Standard semantic section wrapper.
 * Enforces single-line desktop headings with no preamble paragraph (per project design directives).
 */
export function Section({ id, title, subtitle, className, children, ...props }) {
  return (
    <section
      id={id}
      className={cn("py-12 sm:py-16 border-t border-zinc-200/60 dark:border-zinc-800/60", className)}
      {...props}
    >
      <Container>
        {title && (
          <div className="mb-8">
            <h2 className="text-2xl font-bold tracking-tight text-zinc-900 dark:text-zinc-50 md:whitespace-nowrap">
              {title}
            </h2>
            {/* Note: In adherence to project guidelines, no intro paragraph is placed directly beneath <h2>. Content is organized in components. */}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
