import { cn } from "@/lib/utils";
import { Container } from "./container";

/**
 * Editorial Section wrapper.
 * Strictly adheres to project design directives:
 * - Single-line desktop H2 headings with strong visual hierarchy.
 * - No preamble fluff paragraphs placed directly under headings.
 * - Warm Ivory background with subtle border dividing sections.
 */
export function Section({
  id,
  badge,
  title,
  description,
  className,
  containerClassName,
  children,
  ...props
}) {
  return (
    <section
      id={id}
      className={cn("py-16 sm:py-24 border-t border-[#E3DFD6]/75 relative", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {title && (
          <div className="mb-12 sm:mb-16 max-w-2xl">
            {badge && (
              <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F26A3D] mb-2">
                {badge}
              </span>
            )}
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#172C46] leading-tight">
              {title}
            </h2>
            {description && (
              <p className="mt-3 text-base sm:text-lg text-[#626A73] leading-relaxed">
                {description}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
