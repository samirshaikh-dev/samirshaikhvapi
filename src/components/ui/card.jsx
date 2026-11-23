import { cn } from "@/lib/utils";

/**
 * Modern Neumorphic Card component.
 * Supports:
 * - raised (default): soft dual-shadow tactile plate
 * - inset: sunken recessed surface
 * - convex: subtly domed light-reflecting surface
 * - flat: minimal shadow plate
 */
export function Card({
  as: Tag = "div",
  variant = "raised",
  hover = true,
  className,
  children,
  ...props
}) {
  const variantStyles = {
    raised:
      "bg-[#EEF2F6] border border-white/80 shadow-neu-card",
    inset:
      "bg-[#E8EEF5] border border-[#CBD5E1]/45 shadow-neu-inset",
    convex:
      "neu-convex border border-white/85 shadow-neu-card",
    flat:
      "bg-[#EEF2F6] border border-white/70 shadow-neu-sm",
  };

  const hoverStyles =
    hover && variant === "raised"
      ? "hover:shadow-neu-lg hover:border-white hover:-translate-y-1 transition-all duration-300"
      : "";

  return (
    <Tag
      className={cn(
        "rounded-3xl p-6 sm:p-8 transition-all duration-300",
        variantStyles[variant] || variantStyles.raised,
        hoverStyles,
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
