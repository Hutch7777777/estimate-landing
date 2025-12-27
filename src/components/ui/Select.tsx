import { forwardRef, type SelectHTMLAttributes } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

interface SelectOption {
  value: string;
  label: string;
}

interface SelectProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  error?: string;
  options: SelectOption[];
  placeholder?: string;
}

export const Select = forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, label, error, id, required, options, placeholder, ...props }, ref) => {
    const selectId = id || props.name;

    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={selectId}
            className="mb-2 block font-body text-sm font-medium text-text-secondary"
          >
            {label}
            {required && <span className="ml-1 text-accent-secondary">*</span>}
          </label>
        )}
        <div className="relative">
          <select
            ref={ref}
            id={selectId}
            className={cn(
              "w-full appearance-none rounded-sm border border-border-default bg-bg-secondary px-4 py-3.5 pr-10 font-body text-base text-text-primary transition-all duration-200",
              "focus:border-border-accent focus:outline-none focus:ring-2 focus:ring-accent-primary-dim",
              error && "border-accent-secondary",
              !props.value && "text-text-muted",
              className
            )}
            {...props}
          >
            {placeholder && (
              <option value="" disabled>
                {placeholder}
              </option>
            )}
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-5 w-5 -translate-y-1/2 text-text-muted" />
        </div>
        {error && (
          <p className="mt-1.5 text-sm text-accent-secondary">{error}</p>
        )}
      </div>
    );
  }
);

Select.displayName = "Select";
