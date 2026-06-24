"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { floatingCards } from "@/lib/assets";
import { EASE, viewportOnce, rise, blurIn } from "@/lib/motion";

// Fanned cluster config: each card gets its own resting tilt, offset and
// float timing so no two move alike (the JOMO principle).
const fan = [
  { src: floatingCards.timer15, label: "15 minutes", rot: -10, x: -250, y: 28, dur: 6.5, delay: 0 },
  { src: floatingCards.timer25, label: "25 minutes", rot: -3, x: -86, y: -6, dur: 7.5, delay: 0.4 },
  { src: floatingCards.timer45, label: "45 minutes", rot: 4, x: 86, y: 4, dur: 7, delay: 0.2 },
  { src: floatingCards.timer60, label: "60 minutes", rot: 11, x: 250, y: 30, dur: 8, delay: 0.6 },
];

export function FocusModesSection() {
  return (
    <section className="relative py-24 md:py-36 border-t border-white/5 bg-[#050506] overflow-hidden">
      <div className="bloom bloom-teal w-[620px] h-[620px] left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 opacity-40" />

      <div className="container-app relative">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-3xl mx-auto text-center"
        >
          <p className="eyebrow mb-4">Dumb Phone Mode</p>
          <h2 className="font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
            A focus session for every moment.
          </h2>
          <motion.p
            variants={blurIn}
            className="mt-6 text-[18px] text-white/60 leading-relaxed max-w-lg mx-auto"
          >
            Tap a length. The whole phone goes quiet until it ends.
          </motion.p>
        </motion.div>

        {/* Desktop: fanned cluster */}
        <div className="relative mt-20 mb-4 hidden md:block h-[360px]">
          <div className="absolute left-1/2 top-0 -translate-x-1/2">
            {fan.map((c, i) => (
              <motion.div
                key={c.label}
                initial={{ opacity: 0, y: 60, rotate: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, y: c.y, rotate: c.rot, scale: 1 }}
                viewport={viewportOnce}
                transition={{ duration: 0.9, delay: i * 0.1, ease: EASE }}
                whileHover={{ rotate: 0, y: c.y - 18, scale: 1.05, zIndex: 20 }}
                style={{ left: c.x - 115 }}
                className="absolute top-0 cursor-pointer"
              >
                <div className="animate-float-soft" style={{ animationDuration: `${c.dur}s`, animationDelay: `${c.delay}s` }}>
                  <Image
                    src={c.src}
                    alt={`${c.label} focus session`}
                    width={230}
                    height={230}
                    className="w-[230px] h-auto drop-shadow-[0_30px_60px_rgba(0,0,0,0.6)]"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Mobile: horizontal scroll */}
        <div className="md:hidden mt-14 -mx-6 px-6 overflow-x-auto">
          <div className="flex gap-4 w-max pb-4">
            {fan.map((c) => (
              <Image
                key={c.label}
                src={c.src}
                alt={`${c.label} focus session`}
                width={180}
                height={180}
                className="w-[160px] h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.6)]"
              />
            ))}
          </div>
        </div>

        {/* Routine cards row */}
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="mt-12 md:mt-16 flex flex-col items-center gap-5"
        >
          <p className="text-[14px] text-[color:var(--color-ink-4)]">
            Or set it once and let it run on schedule.
          </p>
          <div className="flex flex-wrap justify-center gap-5">
            {[floatingCards.morning, floatingCards.night].map((src, i) => (
              <Image
                key={i}
                src={src}
                alt={i === 0 ? "Morning routine, 9 AM to 6 PM" : "Night routine, 8 PM to 6 AM"}
                width={300}
                height={150}
                className="w-[280px] h-auto drop-shadow-[0_24px_48px_rgba(0,0,0,0.55)]"
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
