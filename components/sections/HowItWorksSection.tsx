"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { screenshots } from "@/lib/assets";

const steps = [
  {
    no: "01",
    title: "Pick what holds you back.",
    body:
      "Choose the apps that own your evenings. LOCK IN binds them at the OS level through Apple Screen Time.",
    image: screenshots.pickHoldsYouBack,
    alt: "Pick what holds you back: select blocked apps",
    isPhone: false,
  },
  {
    no: "02",
    title: "Disappear for 14 days.",
    body:
      "Full block, no bypass. A live countdown shows where you are in withdrawal. Echo and the I'm Bored menu carry you through.",
    image: screenshots.countdownLater,
    alt: "Detox countdown: Day 13 of Acute Withdrawal",
    isPhone: true,
  },
  {
    no: "03",
    title: "Earn your way back.",
    body:
      "Log workouts, walks, reading, and real conversations to rebuild a non-screen reward system.",
    image: screenshots.earnedToday,
    alt: "Earned Today panel of effortful actions",
    isPhone: true,
  },
  {
    no: "04",
    title: "Return on your terms.",
    body:
      "After the detox, you get a 30-minute daily budget shared across all blocked apps. You decide where every minute goes. Enough to stay connected — not enough to fall back in.",
    image: screenshots.focusBlocked,
    alt: "Focus tab with blocked apps and Dumb Phone Mode",
    isPhone: true,
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--color-line)]">
      <div className="container-app">
        <div className="max-w-3xl">
          <p className="eyebrow mb-4">How it works</p>
          <h2 className="font-display text-[40px] md:text-[64px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
            One setup. Fourteen days. A different person.
          </h2>
          <p className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-2xl">
            Based on the neuroscience of dopamine recovery and the practical realities of an
            iPhone you already carry everywhere.
          </p>
        </div>

        <div className="mt-20 space-y-28 md:space-y-36">
          {steps.map((step, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={step.no}
                className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <motion.div
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-5 flex ${
                    reversed ? "lg:order-2 lg:justify-end" : "lg:justify-start"
                  } justify-center`}
                >
                  {step.isPhone ? (
                    <div className="iphone-frame" style={{ width: 280 }}>
                      <div className="iphone-screen">
                        <div className="iphone-notch" />
                        <Image
                          src={step.image}
                          alt={step.alt}
                          fill
                          sizes="280px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="relative rounded-2xl overflow-hidden border border-[color:var(--color-line)]"
                      style={{ width: 280, height: 600 }}
                    >
                      <Image
                        src={step.image}
                        alt={step.alt}
                        fill
                        sizes="280px"
                        className="object-contain"
                      />
                    </div>
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-100px" }}
                  transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
                  className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}
                >
                  <div className="text-[13px] tracking-[0.14em] text-[color:var(--color-ink-4)] mb-4 font-mono">
                    STEP {step.no}
                  </div>
                  <h3 className="font-display text-[34px] md:text-[48px] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
                    {step.title}
                  </h3>
                  <p className="mt-5 text-[17px] md:text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[55ch]">
                    {step.body}
                  </p>
                </motion.div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
