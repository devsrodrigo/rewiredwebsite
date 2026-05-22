"use client";

import { motion } from "framer-motion";

interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  align?: "center" | "left";
  className?: string;
  /** @deprecated keep for back-compat */
  badge?: string;
  /** @deprecated keep for back-compat */
  centered?: boolean;
}

export function SectionHeading({
  eyebrow,
  title,
  subtitle,
  align = "center",
  className = "",
  badge,
  centered,
}: SectionHeadingProps) {
  const finalEyebrow = eyebrow ?? badge;
  const finalAlign = centered === false ? "left" : align;

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      className={`${finalAlign === "center" ? "mx-auto text-center" : ""} max-w-3xl ${className}`}
    >
      {finalEyebrow && <p className="eyebrow mb-4">{finalEyebrow}</p>}
      <h2 className="font-display text-[40px] sm:text-[52px] md:text-[64px] font-semibold text-white">
        {title}
      </h2>
      {subtitle && (
        <p className="mt-5 text-[17px] md:text-[19px] text-[color:var(--color-ink-3)] leading-relaxed">
          {subtitle}
        </p>
      )}
    </motion.div>
  );
}
