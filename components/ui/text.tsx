import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const textVariants = cva("", {
  variants: {
    variant: {
      default: "text-foreground",
      muted: "text-white/70",
      gradient:
        "bg-gradient-to-r from-[#84fad5] via-[#e9c6ff] to-[#f8ed84] bg-clip-text text-transparent",
    },

    size: {
      sm: "text-sm",
      base: "text-base",
      lg: " text-lg sm:text-sm",
      xl: "text-2xl sm:text-3xl",
    },
    weight: {
      normal: "font-normal",
      medium: "font-medium",
      bold: "font-bold",
    },
    font:{
      caveat:"font-[family-name:var(--font-title)]",
      poppins:"font-[family-name:var(--font-poppins)]",
        grotesk: "font-[family-name:var(--font-display)]",
    }
  },
  defaultVariants: {
    variant: "default",
    size: "base",
    weight: "normal",
    font: "poppins",
  },
});

type TextProps = React.HTMLAttributes<HTMLElement> &
  VariantProps<typeof textVariants> & {
    as?: "span" | "p" | "h1" | "h2" | "h3";
  };
export function Text({
  as: Tag = "p",
  variant,
  size,
  weight,
  font,
  className,
  ...props
}: TextProps) {
  return (
    <Tag
      className={cn(textVariants({ variant, size, weight,font, }), className)}
      {...props}
    />
  );
}
