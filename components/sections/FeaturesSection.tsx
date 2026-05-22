"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { screenshots } from "@/lib/assets";

const tiles = [
  {
    title: "A real countdown.",
    body:
      "Live ticker for the 14-day reset. Phases — Acute Withdrawal, Reset, Re-entry — so you know exactly what your brain is doing.",
    image: screenshots.countdownLater,
    alt: "Detox countdown ring with phases",
    span: "md:col-span-7 md:row-span-2",
  },
  {
    title: "Echo, in your corner.",
    body:
      "A coach that's there at 11pm when willpower runs out. Trained on what actually helps in the hardest moments.",
    image: screenshots.echoChat,
    alt: "Echo AI companion",
    span: "md:col-span-5",
  },
  {
    title: "Earn dopamine the hard way.",
    body:
      "Workout, walk, read, real conversation. Effortful actions stack up so the reward system stays alive.",
    image: screenshots.earnedToday,
    alt: "Earned Today — effortful actions",
    span: "md:col-span-5",
  },
  {
    title: "Watch your brain rewire.",
    body:
      "A visual of your dopamine baseline. Chaotic on day one. Calmer by day fourteen.",
    image: screenshots.profileBrain,
    alt: "Profile with brain wiring visualization",
    span: "md:col-span-6",
  },
  {
    title: "Dumb-phone mode.",
    body:
      "15, 25, 45, 60 minutes of focus on tap. The whole device gets quieter on your command.",
    image: screenshots.focusBlocked,
    alt: "Focus tab — Dumb Phone Mode",
    span: "md:col-span-6",
  },
  {
    title: "Real books, not feeds.",
    body:
      "Long-form reading built in. Replace the loop with content that doesn't end every nine seconds.",
    image: screenshots.monkMode,
    alt: "The Monk Mode Protocol reading view",
    span: "md:col-span-12",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-1)]">
      <div className="container-app">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">The whole product</p>
          <h2 className="font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
            Every part of it earns its place.
          </h2>
          <p className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-2xl">
            No feature for its own sake. Each one exists because the science said you need it
            and the field tests proved you used it.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 md:grid-cols-12 gap-5">
          {tiles.map((t, i) => (
            <motion.article
              key={t.title}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.7, delay: i * 0.05, ease: [0.16, 1, 0.3, 1] }}
              className={`surface overflow-hidden flex flex-col ${t.span}`}
            >
              <div className="p-8 md:p-10">
                <h3 className="font-display text-[26px] md:text-[34px] font-semibold tracking-[-0.03em] text-white leading-[1.1]">
                  {t.title}
                </h3>
                <p className="mt-3 text-[15px] md:text-[16px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[42ch]">
                  {t.body}
                </p>
              </div>
              <div className="relative mt-auto px-8 pb-10 md:px-10 md:pb-12 flex justify-center">
                <div className="iphone-frame" style={{ width: 240 }}>
                  <div className="iphone-screen">
                    <div className="iphone-notch" />
                    <Image
                      src={t.image}
                      alt={t.alt}
                      fill
                      sizes="240px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
