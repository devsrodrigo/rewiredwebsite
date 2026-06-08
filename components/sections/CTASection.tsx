"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/utils";
import { screenshots } from "@/lib/assets";

export function CTASection() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--color-line)] bg-black relative overflow-hidden grain">
      <div
        aria-hidden
        className="absolute inset-0 dot-grid opacity-40 pointer-events-none"
      />
      <div className="container-app relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-4">The decision</p>
            <h2 className="font-display text-[44px] md:text-[80px] font-semibold tracking-[-0.045em] text-white leading-[1.02]">
              You already decided this matters.
            </h2>
            <p className="mt-6 text-[18px] md:text-[20px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[55ch]">
              The next two weeks are going to happen either way. Either with the apps, or without
              them. Pick once.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row gap-3">
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg"
              >
                Download on the App Store
              </a>
              <a
                href="/how-it-works"
                className="btn btn-secondary btn-lg"
              >
                Read how it works
              </a>
            </div>
            <p className="mt-6 text-[13px] text-[color:var(--color-ink-4)]">
              iPhone only for now. Google Play later in 2026.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div className="iphone-frame" style={{ width: 280 }}>
              <div className="iphone-screen">
                <div className="iphone-notch" />
                <Image
                  src={screenshots.lockoutFull}
                  alt="LOCK IN reminder: you already decided this matters"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
