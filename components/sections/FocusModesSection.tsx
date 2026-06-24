"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { floatingCards } from "@/lib/assets";
import { EASE, viewportOnce, rise, blurIn, staggerContainer } from "@/lib/motion";

// Even arc: same size for every card, gentle alternating tilt + lift.
const cards = [
  { src: floatingCards.timer15, label: "15 minutes", rot: -7, y: 16 },
  { src: floatingCards.timer25, label: "25 minutes", rot: -2.5, y: -6 },
  { src: floatingCards.timer45, label: "45 minutes", rot: 2.5, y: -6 },
  { src: floatingCards.timer60, label: "60 minutes", rot: 7, y: 16 },
];

const cardVariant = {
  hidden: { opacity: 0, scale: 0.86 },
  show: { opacity: 1, scale: 1, transition: { duration: 0.7, ease: EASE } },
};

export function FocusModesSection() {
  return (
    <section className="relative py-24 md:py-36 border-t border-white/5 bg-[#050506] overflow-hidden">
      <div className="bloom bloom-teal w-[620px] h-[620px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 opacity-30" />

      <div className="container-app relative">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="eyebrow mb-4">Dumb Phone Mode</p>
          <h2 className="font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.045em] text-white leading-[0.98]">
            A focus session for every moment.
          </h2>
          <motion.p
            variants={blurIn}
            className="mt-6 text-[18px] text-white/60 leading-relaxed max-w-lg mx-auto"
          >
            Tap a length. The whole phone goes quiet until it ends.
          </motion.p>
        </motion.div>

        {/* Clean, equal-size card row */}
        <motion.div
          variants={staggerContainer(0.1)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 flex flex-wrap items-center justify-center gap-5 md:gap-7"
        >
          {cards.map((c) => (
            <motion.div
              key={c.label}
              variants={cardVariant}
              whileHover={{ rotate: 0, y: c.y - 14, scale: 1.06 }}
              style={{ rotate: c.rot, y: c.y }}
              className="cursor-pointer"
            >
              <Image
                src={c.src}
                alt={`${c.label} focus session`}
                quality={95}
                sizes="(max-width: 768px) 140px, 200px"
                className="w-[140px] md:w-[200px] h-auto drop-shadow-[0_18px_36px_rgba(0,0,0,0.55)]"
              />
            </motion.div>
          ))}
        </motion.div>

        {/* Routine cards */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-16 md:mt-20 flex flex-col items-center gap-5"
        >
          <p className="text-[14px] text-white/45">
            Or set it once and let it run on schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {[
              { src: floatingCards.morning, alt: "Morning routine, 9 AM to 6 PM" },
              { src: floatingCards.night, alt: "Night routine, 8 PM to 6 AM" },
            ].map((r) => (
              <Image
                key={r.alt}
                src={r.src}
                alt={r.alt}
                quality={95}
                sizes="300px"
                className="w-[260px] md:w-[300px] h-auto drop-shadow-[0_18px_36px_rgba(0,0,0,0.5)]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
