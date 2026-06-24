"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { screenshots } from "@/lib/assets";
import { slideInLeft, slideInRight, viewportOnce, staggerContainer, staggerItem } from "@/lib/motion";

const moments = [
  "It's 1am and you almost reinstalled the app",
  "You're bored and your thumb is already moving",
  "You want to know if any of this is working",
  "You just need to talk it out with someone",
];

export function EchoSection() {
  return (
    <section className="relative py-24 md:py-36 border-t border-white/5 overflow-hidden bg-[#050506]">
      <div className="bloom bloom-cyan w-[460px] h-[460px] right-[6%] top-1/4 -translate-y-1/2" />

      <div className="container-app relative">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Phone + mascot */}
          <motion.div
            variants={slideInLeft}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-5 flex justify-center lg:justify-start relative"
          >
            <div className="iphone-frame" style={{ width: 280 }}>
              <div className="iphone-screen">
                <div className="iphone-notch" />
                <Image
                  src={screenshots.echoScreen}
                  alt="Echo, the LOCK IN companion, ready to chat"
                  fill
                  sizes="280px"
                  className="object-cover"
                />
              </div>
            </div>
            {/* Mascot peeking, with a soft glow behind to seat it on the dark canvas */}
            <div className="absolute -right-6 -bottom-6 hidden sm:block">
              <div className="relative animate-float-soft" style={{ animationDuration: "7s" }}>
                <div
                  aria-hidden
                  className="absolute inset-0 -z-10 blur-2xl bg-[radial-gradient(circle,_rgba(59,130,246,0.35),_transparent_60%)]"
                />
                <Image
                  src={screenshots.echoMascot}
                  alt=""
                  sizes="120px"
                  className="w-[120px] h-auto"
                />
              </div>
            </div>
          </motion.div>

          {/* Copy */}
          <motion.div
            variants={slideInRight}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="lg:col-span-7"
          >
            <p className="eyebrow mb-4">Meet Echo</p>
            <h2 className="font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
              The willpower runs out at 11pm. Echo doesn&apos;t.
            </h2>
            <p className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[56ch]">
              Echo is the companion built into LOCK IN, there for the exact moments
              a blocker can&apos;t help you with. Not a chatbot bolted on. A coach
              trained on what actually gets people through the hardest part of a detox.
            </p>

            <motion.ul
              variants={staggerContainer(0.08, 0.1)}
              className="mt-9 space-y-3"
            >
              {moments.map((m) => (
                <motion.li
                  key={m}
                  variants={staggerItem}
                  className="flex items-start gap-3 text-[16px] text-[color:var(--color-ink-2)]"
                >
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--color-signal)] shrink-0" />
                  {m}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
