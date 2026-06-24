"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star, Apple } from "lucide-react";
import { APP_STORE_URL } from "@/lib/utils";
import { screenshots } from "@/lib/assets";
import { EASE } from "@/lib/motion";

export function Hero() {
  return (
    <section className="aurora relative min-h-[100svh] flex items-center overflow-hidden pt-28 pb-16">
      <div className="container-app relative w-full">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-6 items-center">
          {/* Copy */}
          <div className="lg:col-span-6 text-center lg:text-left">
            <h1 className="font-display font-semibold tracking-[-0.05em] leading-[0.92] text-[15vw] sm:text-[84px] lg:text-[96px]">
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="block text-white"
              >
                The fast way
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
                className="block text-grad"
              >
                to stop scrolling.
              </motion.span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.35, ease: EASE }}
              className="mt-9 flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start"
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg inline-flex items-center gap-2.5"
              >
                <Apple className="w-5 h-5 fill-current" strokeWidth={0} />
                Download on the App Store
              </a>
              <div className="flex items-center gap-2 text-[13px] text-white/70">
                <span className="flex items-center gap-0.5 text-[var(--c-amber)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-4 h-4 fill-current" strokeWidth={0} />
                  ))}
                </span>
                Loved on the App Store
              </div>
            </motion.div>
          </div>

          {/* Floating product */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 40 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1.1, delay: 0.15, ease: EASE }}
            className="lg:col-span-6 flex justify-center relative"
          >
            <div className="relative">
              <Image
                src={screenshots.heroShot}
                alt="LOCK IN home: the 14-day detox countdown"
                sizes="(max-width: 768px) 80vw, 520px"
                className="w-[320px] sm:w-[420px] lg:w-[500px] h-auto drop-shadow-[0_40px_90px_rgba(0,0,0,0.6)]"
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-7 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40 text-[11px] tracking-[0.2em] uppercase">
        Scroll
        <span className="w-px h-8 bg-gradient-to-b from-white/40 to-transparent" />
      </div>
    </section>
  );
}
