import { cn } from "@/lib/utils";

/**
 * Modern Neumorphic Tactile Badge component.
 * Embossed or debossed tactile tags with crisp readability.
 */
export function Badge({
  variant = "slate",
  className,
  children,
  ...props
}) {
  const variants = {
    // Slate / Neutral Embossed
    slate:
      "bg-[#EEF2F6] text-[#334155] border border-white/90 shadow-neu-sm",
    // Indigo Primary Inset
    indigo:
      "bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 shadow-neu-inset-sm font-semibold",
    primary:
      "bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 shadow-neu-inset-sm font-semibold",
    // Warm / Amber / Coral Inset
    warm:
      "bg-[#F97316]/10 text-[#EA580C] border border-[#F97316]/25 shadow-neu-inset-sm font-semibold",
    tangerine:
      "bg-[#F97316]/10 text-[#EA580C] border border-[#F97316]/25 shadow-neu-inset-sm font-semibold",
    // Emerald / WhatsApp Inset
    whatsapp:
      "bg-[#10B981]/10 text-[#059669] border border-[#10B981]/25 shadow-neu-inset-sm font-semibold",
    // Sunken / Inset Neutral
    inset:
      "bg-[#E8EEF5] text-[#475569] border border-[#CBD5E1]/40 shadow-neu-inset-sm",
    // Legacy support for ivory / lavender
    ivory:
      "bg-[#EEF2F6] text-[#334155] border border-white/90 shadow-neu-sm",
    lavender:
      "bg-[#4F46E5]/10 text-[#4F46E5] border border-[#4F46E5]/20 shadow-neu-inset-sm font-semibold",
    midnight:
      "bg-[#0F172A] text-white border border-[#1E293B] shadow-neu-sm",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-xl px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant] || variants.slate,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
