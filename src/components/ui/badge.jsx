import { cn } from "@/lib/utils";

/**
 * Warm Luxury Badge component.
 * Uses Soft Lavender (#E9E5F5), Warm Ivory (#F6F2E9), or subtle borders per docs/DESIGN.MD.
 */
export function Badge({ variant = "lavender", className, children, ...props }) {
  const variants = {
    lavender: "bg-[#E9E5F5] text-[#172C46] border border-[#d6cee8]",
    ivory: "bg-[#EEEAE1] text-[#172C46] border border-[#E3DFD6]",
    tangerine: "bg-[#F26A3D]/10 text-[#F26A3D] border border-[#F26A3D]/25 font-semibold",
    midnight: "bg-[#172C46] text-white border border-[#172C46]",
  };

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-xs font-medium tracking-wide",
        variants[variant] || variants.lavender,
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
