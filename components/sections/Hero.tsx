"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Star } from "lucide-react";
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
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: EASE }}
              className="inline-flex items-center gap-2 px-3.5 py-1.5 grad-border text-[12.5px] text-white/80 mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[var(--c-teal)] animate-pulse" />
              Now on the App Store
            </motion.div>

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

            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.25 }}
              className="mt-6 text-[18px] md:text-[20px] text-white/65 max-w-[44ch] mx-auto lg:mx-0"
            >
              Block the apps that own you for 14 days. No bypass. Then 30 minutes
              a day, on your terms.
            </motion.p>

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
                className="btn btn-primary btn-lg"
              >
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
            <div className="relative animate-tilt-float">
              <div className="iphone-frame glow-phone" style={{ width: 320 }}>
                <div className="iphone-screen">
                  <div className="iphone-notch" />
                  <Image
                    src={screenshots.countdownGif}
                    alt="LOCK IN home: the 14-day detox countdown"
                    fill
                    sizes="340px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
            </div>

            {/* Echo mascot peeking from behind the phone */}
            <motion.div
              initial={{ opacity: 0, x: 30, y: 20 }}
              animate={{ opacity: 1, x: 0, y: 0 }}
              transition={{ duration: 0.9, delay: 0.7, ease: EASE }}
              className="absolute -right-2 sm:right-4 bottom-0 w-[120px] sm:w-[150px] animate-float-soft pointer-events-none"
              style={{ animationDuration: "6s" }}
            >
              <Image
                src={screenshots.echoMascot}
                alt=""
                sizes="150px"
                className="w-full h-auto drop-shadow-[0_20px_40px_rgba(0,0,0,0.5)]"
              />
            </motion.div>
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
