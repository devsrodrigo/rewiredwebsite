"use client";

import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
  className?: string;
  elevated?: boolean;
  /** @deprecated kept for back-compat with older usages */
  hover?: boolean;
  /** @deprecated kept for back-compat with older usages */
  gradient?: boolean;
}

export function Card({ children, className = "", elevated = false }: CardProps) {
  return (
    <div className={`${elevated ? "surface-elevated" : "surface"} p-7 ${className}`}>{children}</div>
  );
}
