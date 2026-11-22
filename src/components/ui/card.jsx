import { cn } from "@/lib/utils";

/**
 * Warm Luxury Card component.
 * Follows docs/DESIGN.MD (Pure White surfaces #FFFFFF, #E3DFD6 borders, soft spatial depth)
 * and AVOID.md (no excessive card nesting, intentional visual structure).
 */
export function Card({ as: Tag = "div", className, children, hover = true, ...props }) {
  return (
    <Tag
      className={cn(
        "rounded-2xl border border-[#E3DFD6] bg-white p-6 sm:p-8 shadow-card transition-all duration-300",
        hover && "hover:border-[#c9c4b7] hover:shadow-soft",
        className
      )}
      {...props}
    >
      {children}
    </Tag>
  );
}
