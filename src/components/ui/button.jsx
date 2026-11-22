import { cn } from "@/lib/utils";

/**
 * Warm Luxury button component.
 * In accordance with docs/DESIGN.MD §5:
 * - Primary: Tangerine background (#F26A3D), Midnight Blue text (#172C46), rounded pill shape.
 * - Secondary: Pure White background with Midnight Blue text and subtle border.
 * - Outline: Transparent with Midnight Blue border & text.
 * - Midnight: Deep Midnight Blue surface with white text.
 */
export function Button({
  variant = "primary",
  size = "md",
  className,
  children,
  ...props
}) {
  const baseStyles =
    "inline-flex items-center justify-center font-medium transition-all duration-200 cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#F26A3D] focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 select-none active:scale-[0.98]";

  const variants = {
    primary:
      "bg-[#F26A3D] text-[#172C46] font-semibold hover:bg-[#e0592e] shadow-sm hover:shadow-md rounded-full",
    secondary:
      "bg-white text-[#172C46] border border-[#E3DFD6] hover:bg-[#F6F2E9] hover:border-[#d5d0c5] shadow-xs rounded-full",
    outline:
      "border border-[#172C46] bg-transparent text-[#172C46] hover:bg-[#172C46] hover:text-white rounded-full",
    midnight:
      "bg-[#172C46] text-white hover:bg-[#112135] shadow-sm rounded-full",
    ghost:
      "text-[#172C46] hover:bg-[#EEEAE1] rounded-full",
    lavender:
      "bg-[#E9E5F5] text-[#172C46] hover:bg-[#ded7ee] border border-[#ded7ee] rounded-full",
  };

  const sizes = {
    sm: "h-9 px-4 text-xs tracking-wide",
    md: "h-11 px-6 text-sm tracking-wide",
    lg: "h-13 px-8 text-base tracking-wide font-medium",
  };

  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
}
