import { forwardRef, type InputHTMLAttributes } from "react";
import { cn } from "@/lib/utils";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className, label, error, id, required, ...props }, ref) => {
    const inputId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={inputId}
            className="mb-2 block font-body text-sm font-medium text-text-secondary"
          >
            {label}
            {required && <span className="ml-1 text-accent-secondary">*</span>}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={cn(
            "w-full rounded-sm border border-border-default bg-bg-secondary px-4 py-3.5 font-body text-base text-text-primary placeholder:text-text-muted transition-all duration-200",
            "focus:border-border-accent focus:outline-none focus:ring-2 focus:ring-accent-primary-dim",
            error && "border-accent-secondary",
            className
          )}
          {...props}
        />
        {error && (
          <p className="mt-1.5 text-sm text-accent-secondary">{error}</p>
        )}
      </div>
    );
  }
);

Input.displayName = "Input";
