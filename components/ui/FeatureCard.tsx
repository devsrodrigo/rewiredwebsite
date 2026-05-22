"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  index?: number;
}

export function FeatureCard({
  icon: Icon,
  title,
  description,
  index = 0,
}: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
      className="surface p-7 group transition-colors hover:border-[color:var(--color-line-2)]"
    >
      <div className="w-10 h-10 rounded-xl bg-[color:var(--color-bg-3)] border border-[color:var(--color-line)] flex items-center justify-center mb-6">
        <Icon className="w-5 h-5 text-white" strokeWidth={1.75} />
      </div>
      <h3 className="font-display text-[22px] font-semibold text-white tracking-tight leading-snug mb-2">
        {title}
      </h3>
      <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-3)]">
        {description}
      </p>
    </motion.div>
  );
}
