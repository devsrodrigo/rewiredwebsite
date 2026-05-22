"use client";

import { motion } from "framer-motion";

const stats = [
  {
    value: "5h 24m",
    label: "Average daily time on social apps for 18–24 year olds.",
  },
  {
    value: "96×",
    label: "Times the average person unlocks their phone each day.",
  },
  {
    value: "23 min",
    label: "Of focus lost every time a notification pulls you away.",
  },
];

export function ProblemSection() {
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
          <p className="eyebrow mb-4">The problem</p>
          <h2 className="font-display text-[40px] sm:text-[56px] md:text-[72px] font-semibold text-white tracking-[-0.04em] leading-[1.04]">
            Your phone wasn&apos;t built for you. <span className="text-[color:var(--color-ink-3)]">It was built to keep you.</span>
          </h2>
          <p className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-2xl">
            Every feed is engineered by entire teams of behavioral scientists. Variable rewards,
            infinite scroll, intermittent notifications — all designed to outpace willpower.
            You don&apos;t have a discipline problem. You have a hardware problem.
          </p>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-3xl overflow-hidden">
          {stats.map((s, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="bg-black p-10 md:p-12"
            >
              <div className="font-display text-[56px] md:text-[72px] font-semibold tracking-[-0.04em] text-white leading-none">
                {s.value}
              </div>
              <p className="mt-5 text-[15px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[28ch]">
                {s.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
