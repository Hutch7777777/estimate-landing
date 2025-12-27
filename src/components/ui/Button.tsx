import { forwardRef, type ButtonHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "ghost";
  size?: "default" | "sm" | "lg";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "default", children, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(
          // Base styles
          "inline-flex items-center justify-center font-mono font-semibold uppercase tracking-[0.05em] transition-all duration-200 ease-out disabled:pointer-events-none disabled:opacity-50",
          // Variants
          {
            // Primary - cyan filled
            primary:
              "rounded-sm bg-accent-primary text-bg-primary hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,255,136,0.3)]",
            // Secondary - transparent with border
            secondary:
              "rounded-sm border border-border-default bg-transparent text-text-primary hover:border-border-accent hover:text-text-accent",
            // Ghost - no border
            ghost:
              "bg-transparent text-text-secondary hover:text-text-primary",
          }[variant],
          // Sizes
          {
            default: "px-8 py-4 text-sm",
            sm: "px-4 py-2 text-xs",
            lg: "px-10 py-5 text-base",
          }[size],
          className
        )}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
