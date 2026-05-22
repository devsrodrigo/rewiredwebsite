"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { screenshots } from "@/lib/assets";

export function DifferenceSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-1)]">
      <div className="container-app">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Phone showing the lockout overlay */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-start"
          >
            <div className="iphone-frame" style={{ width: 300 }}>
              <div className="iphone-screen">
                <div className="iphone-notch" />
                <Image
                  src={screenshots.lockoutFull}
                  alt="LOCK IN lockout: You already decided this matters"
                  fill
                  sizes="320px"
                  className="object-cover"
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-4">Why LOCK IN works</p>
            <h2 className="font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
              It doesn&apos;t ask. It refuses.
            </h2>
            <p className="mt-6 text-[18px] md:text-[19px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[58ch]">
              Other apps nudge, remind, or politely ask. LOCK IN closes the door at the operating system.
              When you reach for the app, the system says no — and gives you back the decision you
              already made.
            </p>

            <div className="mt-10 grid sm:grid-cols-2 gap-px bg-[color:var(--color-line)] border border-[color:var(--color-line)] rounded-2xl overflow-hidden">
              <div className="bg-black p-7">
                <p className="text-[13px] text-[color:var(--color-ink-4)] mb-2 tracking-tight">Other apps</p>
                <ul className="space-y-2 text-[15px] text-[color:var(--color-ink-3)]">
                  <li>Easily bypassed timers</li>
                  <li>Honor-system reminders</li>
                  <li>&ldquo;Just this once&rdquo; loopholes</li>
                </ul>
              </div>
              <div className="bg-black p-7">
                <p className="text-[13px] text-[color:var(--color-signal)] mb-2 tracking-tight">LOCK IN</p>
                <ul className="space-y-2 text-[15px] text-white">
                  <li>OS-level Screen Time enforcement</li>
                  <li>No exception windows</li>
                  <li>A 14-day reset that actually holds</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
