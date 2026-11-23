import { cn } from "@/lib/utils";
import { Container } from "./container";

/**
 * Editorial Section wrapper with Neumorphic subtle separation.
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
      className={cn("py-16 sm:py-24 border-t border-white/70 relative", className)}
      {...props}
    >
      <Container className={containerClassName}>
        {title && (
          <div className="mb-12 sm:mb-16 max-w-2xl">
            {(badge || index) && (
              <div className="flex items-center gap-3 mb-3">
                {index && (
                  <span className="text-xs font-bold tabular-nums text-[#64748B] tracking-widest px-2.5 py-1 rounded-lg bg-[#E8EEF5] shadow-neu-inset-sm border border-[#CBD5E1]/40">
                    {index}
                    {total ? ` / ${total}` : ""}
                  </span>
                )}
                {badge && (
                  <span className="inline-block text-xs font-bold uppercase tracking-wider text-[#4F46E5]">
                    {badge}
                  </span>
                )}
              </div>
            )}
            <h2 className="type-section text-[#0F172A]">
              {title}
            </h2>
            {description && (
              <p className="mt-4 type-lede text-[#475569]">
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
