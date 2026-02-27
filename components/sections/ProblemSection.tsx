"use client";

import { motion } from "framer-motion";
import { StatCounter } from "@/components/ui/StatCounter";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AlertTriangle, Clock, TrendingDown } from "lucide-react";

const stats = [
  {
    value: 23,
    suffix: " min",
    label: "of focus lost every time a notification pulls you away",
    icon: Clock,
  },
  {
    value: 96,
    suffix: "×",
    label: "a day the average person unlocks their phone",
    icon: TrendingDown,
  },
  {
    value: 70,
    suffix: "%",
    label: "of young adults know they're addicted but can't stop",
    icon: AlertTriangle,
  },
];

export function ProblemSection() {
  return (
    <section className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background Effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-warning/5 to-transparent" />
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Problem"
          title="Your Phone Is Designed to Waste Your Time"
          subtitle="Social media apps spend billions to keep you scrolling. Here's what that costs you every day."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {stats.map((stat, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-background border border-border text-center"
            >
              <div className="w-12 h-12 rounded-xl bg-warning/10 flex items-center justify-center mx-auto mb-6">
                <stat.icon className="w-6 h-6 text-warning" />
              </div>
              <StatCounter
                value={stat.value}
                suffix={stat.suffix}
                label={stat.label}
              />
            </motion.div>
          ))}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 max-w-2xl mx-auto text-center"
        >
          <p className="text-lg text-foreground-muted leading-relaxed">
            You already know the things you want to do instead. Read, exercise, build something, sleep better.{" "}
            <span className="text-foreground font-medium">
              The problem isn&apos;t motivation. It&apos;s that your phone is faster than your willpower.
            </span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
