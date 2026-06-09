"use client";

import { motion } from "framer-motion";
import { BrainCircuit, Clock, Flame, Volume2, Zap } from "lucide-react";

const outcomes = [
  {
    icon: Volume2,
    title: "Less noise",
    body:
      "No comparison feeds, no doom headlines, no manufactured outrage. The background anxiety you've stopped noticing finally switches off.",
  },
  {
    icon: Flame,
    title: "Real motivation",
    body:
      "As your dopamine baseline recovers, drive comes back on its own. Goals you've been avoiding start feeling doable — then exciting.",
  },
  {
    icon: Clock,
    title: "Hours back, every day",
    body:
      "5+ hours a day stop disappearing into feeds and start going toward what you actually said you wanted. That compounds fast.",
  },
  {
    icon: BrainCircuit,
    title: "A brain that thinks again",
    body:
      "Boredom returns — and with it, deep focus, ideas, and actual rest. Higher cognitive capacity, not a mind that flinches every 9 seconds.",
  },
  {
    icon: Zap,
    title: "Less need for stimulation",
    body:
      "When the reward system resets, the pull toward every quick hit weakens — endless scrolling, gambling-style mechanics, all of it.",
  },
];

export function OutcomesSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--color-line)]">
      <div className="container-app">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="max-w-3xl"
        >
          <p className="eyebrow mb-4">What you get back</p>
          <h2 className="font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
            Fourteen days in, you&apos;re a different operator.
          </h2>
          <p className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-2xl">
            This isn&apos;t about using your phone less. It&apos;s about getting back the
            motivation, time, and mental capacity the feed has been quietly taking from you.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {outcomes.map((o, i) => (
            <motion.div
              key={o.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="surface p-8"
            >
              <div className="w-10 h-10 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-3)] flex items-center justify-center mb-5">
                <o.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-[19px] font-semibold text-white tracking-tight">
                {o.title}
              </h3>
              <p className="mt-3 text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
                {o.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
