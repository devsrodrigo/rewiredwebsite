"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { APP_STORE_URL } from "@/lib/utils";
import { screenshots } from "@/lib/assets";

export function Hero() {
  return (
    <section className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden grain">
      {/* Quiet backdrop — a faint dot grid, no glowing orbs */}
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-60 pointer-events-none"
      />
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[640px] bg-[radial-gradient(ellipse_at_top,_rgba(255,255,255,0.06),_transparent_60%)] pointer-events-none"
      />

      <div className="container-app relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Copy */}
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[color:var(--color-line-2)] bg-[color:var(--color-bg-2)] text-[12px] text-[color:var(--color-ink-2)] mb-7"
            >
              <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-signal)]" />
              Now available on the App Store
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 18 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.05, ease: [0.16, 1, 0.3, 1] }}
              className="font-display text-[44px] sm:text-[64px] lg:text-[88px] font-semibold text-white tracking-[-0.045em] leading-[1.02]"
            >
              Stop scrolling.
              <br />
              <span className="text-[color:var(--color-ink-3)]">Start living.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
              className="mt-8 text-[18px] md:text-[20px] leading-relaxed text-[color:var(--color-ink-3)] max-w-[58ch]"
            >
              LOCK IN blocks your most addictive apps completely for 14 days —
              enforced by Apple Screen Time, with no bypass and no &ldquo;just five more
              minutes.&rdquo; Your dopamine system resets. When it ends,
              <span className="text-white"> you get a 30-minute daily budget</span> you
              control. You decide. Not the algorithm.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
              className="mt-10 flex flex-col sm:flex-row gap-3"
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

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.5 }}
              className="mt-10 flex items-center gap-6 text-[13px] text-[color:var(--color-ink-4)]"
            >
              <span className="flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M12 .587l3.668 7.431L24 9.748l-6 5.847L19.336 24 12 20.013 4.664 24 6 15.595 0 9.748l8.332-1.73z" />
                </svg>
                Featured by early users
              </span>
              <span className="hidden sm:flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-ink-5)]" />
                Built for iPhone
              </span>
              <span className="hidden md:flex items-center gap-2">
                <span className="w-1 h-1 rounded-full bg-[color:var(--color-ink-5)]" />
                Private by default
              </span>
            </motion.div>
          </div>

          {/* Real product visual — the countdown GIF in an iPhone bezel */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="relative">
              <div
                className="iphone-frame"
                style={{ width: 300 }}
              >
                <div className="iphone-screen">
                  <div className="iphone-notch" />
                  <Image
                    src={screenshots.countdownGif}
                    alt="LOCK IN detox countdown: 14 days remaining"
                    fill
                    sizes="320px"
                    className="object-cover"
                    priority
                    unoptimized
                  />
                </div>
              </div>
              {/* Floating captions — kept inboard so they never clip on the viewport edge */}
              <div className="absolute -left-8 top-12 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--color-bg-2)]/95 backdrop-blur border border-[color:var(--color-line-2)] text-[12px] text-[color:var(--color-ink-2)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-warn)]" />
                Acute withdrawal
              </div>
              <div className="absolute -left-10 bottom-20 hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full bg-[color:var(--color-bg-2)]/95 backdrop-blur border border-[color:var(--color-line-2)] text-[12px] text-[color:var(--color-ink-2)] shadow-[0_8px_30px_rgba(0,0,0,0.5)] whitespace-nowrap">
                <span className="w-1.5 h-1.5 rounded-full bg-[color:var(--color-signal)]" />
                Day 13 of 14
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
