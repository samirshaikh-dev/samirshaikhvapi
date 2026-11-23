import { cn } from "@/lib/utils";

/**
 * Modern Neumorphic Tactile Button component.
 * Features realistic physical lighting, soft dual-direction shadows,
 * tactile hover elevation, and an inset/sunken active click state.
 */
export function Button({
  as: Tag = "button",
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer select-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4F46E5] focus-visible:ring-offset-2 focus-visible:ring-offset-[#EEF2F6] disabled:pointer-events-none disabled:opacity-40 disabled:shadow-none";

  const variants = {
    // Primary: Electric Indigo Neumorphic Gradient with tactile glow
    primary:
      "bg-gradient-to-br from-[#4F46E5] to-[#4338CA] text-white font-semibold shadow-neu-primary hover:from-[#5B52EE] hover:to-[#4F46E5] hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-inset-sm rounded-2xl",

    // Secondary: Soft Neumorphic Raised Plate with tactile inset on press
    secondary:
      "bg-[#EEF2F6] text-[#0F172A] font-semibold border border-white/85 shadow-neu hover:shadow-neu-lg hover:border-white hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-pressed rounded-2xl",

    // WhatsApp / Success: Emerald Neumorphic Gradient
    whatsapp:
      "bg-gradient-to-br from-[#10B981] to-[#059669] text-white font-semibold shadow-neu-whatsapp hover:from-[#34D399] hover:to-[#10B981] hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-inset-sm rounded-2xl",

    // Warm Accent: Sunset Amber / Coral Neumorphic Gradient
    warm:
      "bg-gradient-to-br from-[#F97316] to-[#EA580C] text-white font-semibold shadow-neu-warm hover:from-[#FB923C] hover:to-[#F97316] hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-inset-sm rounded-2xl",

    // Inset / Sunken Button
    inset:
      "bg-[#E5EBF2] text-[#0F172A] font-medium shadow-neu-inset border border-[#CBD5E1]/40 hover:shadow-neu-inset-lg active:shadow-neu rounded-2xl",

    // Outline Plate
    outline:
      "border border-[#CBD5E1] bg-[#EEF2F6]/60 text-[#0F172A] shadow-neu-sm hover:shadow-neu hover:bg-[#EEF2F6] hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-pressed rounded-2xl",

    // Ghost
    ghost:
      "text-[#0F172A] hover:bg-[#E8EEF5] hover:shadow-neu-sm active:shadow-neu-pressed rounded-2xl",

    // Midnight / Dark Accent Plate
    midnight:
      "bg-gradient-to-br from-[#1E293B] to-[#0F172A] text-white font-semibold shadow-neu hover:-translate-y-0.5 active:translate-y-0 active:shadow-neu-inset-sm rounded-2xl",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs tracking-wide",
    md: "h-11 px-6 text-sm tracking-wide",
    lg: "h-13 px-8 text-base tracking-wide font-semibold",
  };

  return (
    <Tag
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </Tag>
  );
}
