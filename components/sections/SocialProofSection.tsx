"use client";

import { motion } from "framer-motion";

const quotes = [
  {
    quote:
      "I deleted TikTok three times. It always came back within a week. LOCK IN was the first thing that actually held.",
    name: "Maya",
    detail: "Junior, NYU",
  },
  {
    quote:
      "By day 10 I wasn't reaching for my phone in the elevator anymore. I didn't realize I did that.",
    name: "Marcus",
    detail: "Software engineer",
  },
  {
    quote:
      "The countdown ring is what kept me in. I could see I was halfway through. I wasn't going to lose that.",
    name: "Sara",
    detail: "Senior, UT Austin",
  },
];

const metrics = [
  { value: "14", label: "Days of full block" },
  { value: "30", label: "Minutes a day after, on your terms" },
  { value: "0", label: "Bypass loopholes" },
  { value: "100%", label: "On-device & private" },
];

export function SocialProofSection() {
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
          <p className="eyebrow mb-4">Already working</p>
          <h2 className="font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
            People who tried everything else found their way back here.
          </h2>
          <p className="mt-6 text-[17px] text-[color:var(--color-ink-3)] leading-relaxed max-w-2xl">
            Beta users reported real changes and a commitment to staying off social media
            after the detox ended. Not vibes. Changed behavior.
          </p>
        </motion.div>

        <div className="mt-16 grid md:grid-cols-3 gap-6">
          {quotes.map((q, i) => (
            <motion.figure
              key={i}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: i * 0.06, ease: [0.16, 1, 0.3, 1] }}
              className="surface p-8 flex flex-col gap-6"
            >
              <blockquote className="text-[18px] leading-relaxed text-white">
                &ldquo;{q.quote}&rdquo;
              </blockquote>
              <figcaption className="flex flex-col">
                <span className="text-[14px] text-white">{q.name}</span>
                <span className="text-[13px] text-[color:var(--color-ink-4)]">{q.detail}</span>
              </figcaption>
            </motion.figure>
          ))}
        </div>

        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden">
          {metrics.map((m) => (
            <div key={m.label} className="bg-black p-8 text-center">
              <div className="font-display text-[40px] md:text-[52px] font-semibold tracking-[-0.04em] text-white leading-none">
                {m.value}
              </div>
              <div className="mt-2 text-[13px] text-[color:var(--color-ink-3)]">{m.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
