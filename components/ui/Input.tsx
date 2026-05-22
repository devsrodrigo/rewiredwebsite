"use client";

import { forwardRef, InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ className = "", label, error, id, ...props }, ref) => {
    return (
      <div className="w-full">
        {label && (
          <label
            htmlFor={id}
            className="block text-[13px] font-medium text-white mb-2"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={id}
          className={`
            w-full h-12 px-4
            bg-[color:var(--color-bg-2)]
            border border-[color:var(--color-line)]
            rounded-xl
            text-[15px] text-white
            placeholder:text-[color:var(--color-ink-4)]
            focus:outline-none focus:border-white
            transition-colors
            ${error ? "border-[color:var(--color-danger)]" : ""}
            ${className}
          `}
          {...props}
        />
        {error && <p className="mt-2 text-[13px] text-[color:var(--color-danger)]">{error}</p>}
      </div>
    );
  }
);

Input.displayName = "Input";
