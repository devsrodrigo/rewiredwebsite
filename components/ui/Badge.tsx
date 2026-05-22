interface BadgeProps {
  children: React.ReactNode;
  variant?: "default" | "primary" | "success" | "warning";
  className?: string;
}

const variants = {
  default: "text-[color:var(--color-ink-3)] border-[color:var(--color-line-2)] bg-transparent",
  primary: "text-white border-[color:var(--color-line-2)] bg-[color:var(--color-bg-2)]",
  success: "text-[color:var(--color-signal)] border-[color:var(--color-signal)]/30 bg-[color:var(--color-signal)]/10",
  warning: "text-[color:var(--color-warn)] border-[color:var(--color-warn)]/30 bg-[color:var(--color-warn)]/10",
};

export function Badge({
  children,
  variant = "default",
  className = "",
}: BadgeProps) {
  return (
    <span
      className={`inline-flex items-center px-3 py-1 text-[12px] font-medium tracking-tight rounded-full border ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
}
