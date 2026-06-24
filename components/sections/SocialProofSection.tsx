"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { slideInLeft, reveal, viewportOnce } from "@/lib/motion";

/* ------------------------------------------------------------------ *
 * SOCIAL PROOF
 * Real App Store reviews. To add more, drop them into `reviews` below
 * (title, date, name, body) and they will populate the grid + marquee.
 * ------------------------------------------------------------------ */

const reviews = [
  {
    title: "Highly recommend",
    date: "8 May",
    name: "Vivis",
    body:
      "Love it!! I'm constantly motivated to gain dopamine points by reading and exercising and have stopped relying on social media.",
  },
  {
    title: "BEST APP for DOP DETOX!",
    date: "8 May",
    name: "Fernando",
    body:
      "This app helped me reset and regulate my dopamine levels. After multiple tries with other subscriptions, this was the one that gave me the best results. It's your time to LOCK IN! Fully recommend!",
  },
];

function Stars() {
  return (
    <span className="flex items-center gap-0.5 text-[color:var(--color-signal)]">
      {[0, 1, 2, 3, 4].map((i) => (
        <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
      ))}
    </span>
  );
}

function ReviewCard({
  title,
  date,
  name,
  body,
}: {
  title: string;
  date: string;
  name: string;
  body: string;
}) {
  return (
    <figure className="surface p-7 flex flex-col gap-3">
      <figcaption className="text-[18px] font-semibold text-white tracking-tight">
        {title}
      </figcaption>
      <div className="flex items-center gap-2 text-[13px] text-[color:var(--color-ink-4)]">
        <Stars />
        <span>
          {date} · {name}
        </span>
      </div>
      <blockquote className="text-[15.5px] leading-relaxed text-[color:var(--color-ink-2)]">
        {body}
      </blockquote>
    </figure>
  );
}

export function SocialProofSection() {
  return (
    <section className="relative py-24 md:py-36 border-t border-white/5 bg-[#050506] overflow-hidden">
      <div className="bloom bloom-coral w-[500px] h-[420px] right-[-100px] top-10 opacity-35" />
      <div className="container-app relative">
        <motion.div
          variants={slideInLeft}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl text-center mx-auto flex flex-col items-center"
        >
          <span className="flex items-center gap-2 mb-5">
            <span className="flex items-center gap-0.5 text-[var(--c-amber)]">
              <Stars />
            </span>
            <span className="text-[14px] text-white/70">5.0 on the App Store</span>
          </span>
          <h2 className="font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.045em] text-white leading-[0.98]">
            Our users love it.
          </h2>
        </motion.div>

        {/* Featured real reviews */}
        <div className="mt-12 grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {reviews.map((r, i) => (
            <motion.div key={r.title} {...reveal(i * 0.08)}>
              <ReviewCard {...r} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
