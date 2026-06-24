"use client";

import type { ReactNode } from "react";
import { motion, type Variants } from "framer-motion";
import * as M from "@/lib/motion";

type VariantName = "rise" | "blurIn" | "scaleIn" | "slideInLeft" | "slideInRight" | "unfold";

const variants: Record<VariantName, Variants> = {
  rise: M.rise,
  blurIn: M.blurIn,
  scaleIn: M.scaleIn,
  slideInLeft: M.slideInLeft,
  slideInRight: M.slideInRight,
  unfold: M.unfold,
};

export function Reveal({
  children,
  variant = "rise",
  delay = 0,
  className,
}: {
  children: ReactNode;
  variant?: VariantName;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      variants={variants[variant]}
      initial="hidden"
      whileInView="show"
      viewport={M.viewportOnce}
      transition={{ delay }}
      className={className}
    >
      {children}
    </motion.div>
  );
}
