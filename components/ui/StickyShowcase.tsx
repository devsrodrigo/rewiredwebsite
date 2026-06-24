"use client";

import { useState } from "react";
import Image, { type StaticImageData } from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { EASE } from "@/lib/motion";

export type ShowcaseStep = {
  eyebrow: string;
  title: string;
  body: string;
  image: StaticImageData;
  alt?: string;
};

export function StickyShowcase({
  steps,
  phoneSide = "right",
}: {
  steps: ShowcaseStep[];
  phoneSide?: "left" | "right";
}) {
  const [active, setActive] = useState(0);

  const Phone = (
    <div className="hidden lg:flex lg:col-span-5 justify-center">
      <div className="lg:sticky lg:top-28">
        <div className="iphone-frame" style={{ width: 290 }}>
          <div className="iphone-screen">
            <div className="iphone-notch" />
            <AnimatePresence mode="popLayout">
              <motion.div
                key={active}
                initial={{ opacity: 0, scale: 1.04 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.98 }}
                transition={{ duration: 0.5, ease: EASE }}
                className="absolute inset-0"
              >
                <Image
                  src={steps[active].image}
                  alt={steps[active].alt ?? steps[active].title}
                  fill
                  sizes="290px"
                  className="object-cover"
                />
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        {/* Progress rail */}
        <div className="mt-7 flex justify-center gap-2">
          {steps.map((_, i) => (
            <span
              key={i}
              className={`h-1 rounded-full transition-all duration-300 ${
                i === active
                  ? "w-7 bg-white"
                  : "w-2 bg-[color:var(--color-line-2)]"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="grid lg:grid-cols-12 gap-12 lg:gap-16">
      {phoneSide === "left" && Phone}

      <div className="lg:col-span-7">
        {steps.map((s, i) => (
          <motion.div
            key={s.title}
            onViewportEnter={() => setActive(i)}
            viewport={{ margin: "-45% 0px -45% 0px" }}
            className="min-h-[58vh] lg:min-h-[70vh] flex flex-col justify-center"
          >
            {/* Inline phone for mobile only */}
            <div className="lg:hidden mb-8 flex justify-center">
              <div className="iphone-frame" style={{ width: 250 }}>
                <div className="iphone-screen">
                  <div className="iphone-notch" />
                  <Image
                    src={s.image}
                    alt={s.alt ?? s.title}
                    fill
                    sizes="250px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: EASE }}
            >
              <div className="text-[12px] tracking-[0.14em] uppercase text-[color:var(--color-ink-4)] mb-4">
                {s.eyebrow}
              </div>
              <h3 className="font-display text-[34px] md:text-[50px] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
                {s.title}
              </h3>
              <p className="mt-5 text-[17px] md:text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[54ch]">
                {s.body}
              </p>
            </motion.div>
          </motion.div>
        ))}
      </div>

      {phoneSide === "right" && Phone}
    </div>
  );
}
