"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Star } from "lucide-react";
import { APP_STORE_URL } from "@/lib/utils";
import { screenshots } from "@/lib/assets";
import { EASE, settle, blurIn } from "@/lib/motion";

export function Hero() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 overflow-hidden grain">
      {/* Quiet backdrop: faint dot grid + a soft top glow */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-50 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[680px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.07),_transparent_62%)] pointer-events-none"
      />

      <div className="container-app relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-10 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              variants={settle}
              initial="hidden"
              animate="show"
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-[color:var(--color-ink-2)] mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-signal)] animate-pulse" />
              Now on the App Store · iPhone, iPad &amp; Mac
            </motion.div>

            <h1 className="font-display text-[44px] sm:text-[66px] lg:text-[92px] font-semibold tracking-[-0.045em] leading-[0.98]">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: EASE }}
                className="block text-[color:var(--color-ink-3)] font-medium"
              >
                The fast way to
              </motion.span>
              <motion.span
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.85, delay: 0.08, ease: EASE }}
                className="block text-white"
              >
                stop scrolling.
              </motion.span>
            </h1>

            <motion.p
              variants={blurIn}
              initial="hidden"
              animate="show"
              transition={{ delay: 0.18 }}
              className="mt-7 text-[18px] md:text-[20px] leading-relaxed text-[color:var(--color-ink-3)] max-w-[56ch]"
            >
              LOCK IN blocks your most addictive apps completely for 14 days,
              enforced by Apple Screen Time, with no bypass and no
              &ldquo;just five more minutes.&rdquo; Your dopamine system resets.
              When it ends,
              <span className="text-white"> you get a 30-minute daily budget</span>{" "}
              you control. You decide. Not the algorithm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: EASE }}
              className="mt-9 flex flex-col sm:flex-row gap-3"
            >
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Download on the App Store
              </a>
              <Link href="/how-it-works" className="btn btn-secondary btn-lg group">
                See how it works
                <ArrowRight className="w-4 h-4 ml-0.5 transition-transform group-hover:translate-x-0.5" />
              </Link>
            </motion.div>

            {/* Accolade row */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.9, delay: 0.5 }}
              className="mt-10 flex flex-wrap items-center gap-x-7 gap-y-3 text-[13px] text-[color:var(--color-ink-3)]"
            >
              <span className="flex items-center gap-2">
                <span className="flex items-center gap-0.5 text-[color:var(--color-signal)]">
                  {[0, 1, 2, 3, 4].map((i) => (
                    <Star key={i} className="w-3.5 h-3.5 fill-current" strokeWidth={0} />
                  ))}
                </span>
                <span className="text-[color:var(--color-ink-2)]">
                  Loved by early users
                </span>
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-ink-5)]" />
                100% on-device &amp; private
              </span>
              <span className="hidden md:flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-ink-5)]" />
                No bypass, no loopholes
              </span>
            </motion.div>
          </div>

          {/* Real product visual: the home countdown in an iPhone bezel */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: EASE }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative animate-float-soft">
              <div className="iphone-frame" style={{ width: 300 }}>
                <div className="iphone-screen">
                  <div className="iphone-notch" />
                  <Image
                    src={screenshots.countdownGif}
                    alt="LOCK IN home screen: the 14-day detox countdown ticking down"
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>

              {/* Floating captions, kept inboard so they never clip */}
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.7, ease: EASE }}
                className="absolute -left-6 top-16 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-[color:var(--color-ink-2)] whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-warn)]" />
                Acute withdrawal
              </motion.div>
              <motion.div
                initial={{ opacity: 0, x: 24 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.7, delay: 0.85, ease: EASE }}
                className="absolute -left-10 bottom-24 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full glass text-[12px] text-[color:var(--color-ink-2)] whitespace-nowrap"
              >
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-signal)]" />
                Day 13 of 14
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
