"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import { screenshots } from "@/lib/assets";
import { EASE, viewportOnce } from "@/lib/motion";

type Scene = {
  eyebrow: string;
  title: string;
  line: string;
  image: StaticImageData;
  bloom: string;
  glow: string;
  alt: string;
};

const scenes: Scene[] = [
  {
    eyebrow: "The reset",
    title: "Lock it. No way back in.",
    line: "Pick your apps and your length: 7, 14, or 21 days. They vanish, enforced at the OS level. No ignore button. There's a reset for everyone.",
    image: screenshots.detoxDays,
    bloom: "bloom-violet",
    glow: "glow-phone",
    alt: "Choosing the detox length",
  },
  {
    eyebrow: "Re-entry",
    title: "Your minutes. You choose.",
    line: "After the reset, pick a daily budget: 15, 30, 45, or 60 minutes across your apps. Then it locks back down on its own. Change it anytime.",
    image: screenshots.minutesSetup,
    bloom: "bloom-cyan",
    glow: "glow-cyan",
    alt: "Choosing the daily minutes budget",
  },
  {
    eyebrow: "The receipt",
    title: "Watch your brain come back.",
    line: "Your reward system, day by day. Static on day one. Signal by day fourteen.",
    image: screenshots.profileWiring,
    bloom: "bloom-teal",
    glow: "glow-teal",
    alt: "Profile with Brain Wiring chart",
  },
];

export function ProductScenes() {
  return (
    <section className="relative bg-[#050506] overflow-hidden">
      {scenes.map((s, i) => {
        const reversed = i % 2 === 1;
        return (
          <div
            key={s.title}
            className="relative border-t border-white/5 py-24 md:py-36"
          >
            <div
              className={`bloom ${s.bloom} w-[480px] h-[480px] ${
                reversed ? "left-[-120px]" : "right-[-120px]"
              } top-1/2 -translate-y-1/2`}
            />
            <div className="container-app relative">
              <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.92, y: 30 }}
                  whileInView={{ opacity: 1, scale: 1, y: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.9, ease: EASE }}
                  className={`lg:col-span-5 flex justify-center ${
                    reversed ? "lg:order-2" : ""
                  }`}
                >
                  <div className={`iphone-frame ${s.glow} animate-float-soft`} style={{ width: 290 }}>
                    <div className="iphone-screen">
                      <div className="iphone-notch" />
                      <Image
                        src={s.image}
                        alt={s.alt}
                        fill
                        sizes="290px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: reversed ? -40 : 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ duration: 0.8, ease: EASE }}
                  className={`lg:col-span-7 text-center lg:text-left ${
                    reversed ? "lg:order-1" : ""
                  }`}
                >
                  <p className="eyebrow mb-4">{s.eyebrow}</p>
                  <h2 className="font-display text-[40px] md:text-[68px] font-semibold tracking-[-0.045em] text-white leading-[0.98]">
                    {s.title}
                  </h2>
                  <p className="mt-6 text-[18px] md:text-[20px] text-white/60 leading-relaxed max-w-[44ch] mx-auto lg:mx-0">
                    {s.line}
                  </p>
                </motion.div>
              </div>
            </div>
          </div>
        );
      })}
    </section>
  );
}
