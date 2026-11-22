import { cn } from "@/lib/utils";
import { Container } from "./container";

/**
 * Editorial Section wrapper.
 * Strictly adheres to project design directives:
 * - Single-line desktop H2 headings with strong visual hierarchy.
 * - No preamble fluff paragraphs placed directly under headings.
 * - Warm Ivory background with subtle border dividing sections.
 *
 * Redesign (Tubik 2026 "raw-structural" + fluid type):
 * - Headline uses clamp()-based .type-section for smooth scaling.
 * - Optional structural index numeral ("01 / 08") as a foreground motif.
 */
export function Section({
  id,
  index,
  total,
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
            {(badge || index) && (
              <div className="flex items-center gap-3 mb-3">
                {index && (
                  <span className="text-xs font-bold tabular-nums text-[#172C46]/35 tracking-widest">
                    {index}
                    {total ? ` / ${total}` : ""}
                  </span>
                )}
                {badge && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#F26A3D]">
                    {badge}
                  </span>
                )}
              </div>
            )}
            <h2 className="type-section text-[#172C46]">
              {title}
            </h2>
            {description && (
              <p className="mt-4 type-lede text-[#626A73]">
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