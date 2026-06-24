"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check } from "lucide-react";
import { APP_STORE_URL } from "@/lib/utils";
import { EASE, rise, blurIn, viewportOnce, staggerContainer, staggerItem } from "@/lib/motion";

const plans = {
  yearly: {
    price: "$29.99",
    period: "/ year",
    sub: "Just $2.50 a month. Less than one coffee.",
    tag: "Best value",
  },
  weekly: {
    price: "$4.99",
    period: "/ week",
    sub: "Try the full reset, cancel anytime.",
    tag: null as string | null,
  },
};

const included = [
  "The full 14-day OS-level block",
  "30-minute daily budget after the reset",
  "Echo, your late-night companion",
  "Dumb Phone Mode + schedules",
  "Built-in books and focus sessions",
  "100% private, nothing leaves your device",
];

export function PricingSection() {
  const [billing, setBilling] = useState<"yearly" | "weekly">("yearly");
  const plan = plans[billing];

  return (
    <section className="relative py-24 md:py-32 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-1)] overflow-hidden">
      <div
        aria-hidden
        className="absolute inset-x-0 top-0 h-[420px] bg-[radial-gradient(ellipse_at_top,_rgba(52,211,153,0.07),_transparent_60%)] pointer-events-none"
      />
      <div className="container-app relative">
        <motion.div
          variants={rise}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          className="max-w-2xl mx-auto text-center"
        >
          <p className="eyebrow mb-4">Pricing</p>
          <h2 className="font-display text-[40px] md:text-[60px] font-semibold tracking-[-0.04em] text-white leading-[1.04]">
            One price. Less than a coffee a month.
          </h2>
          <motion.p
            variants={blurIn}
            className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed"
          >
            Staying the same costs 1,800+ hours a year. The app costs less than
            you spent scrolling this morning.
          </motion.p>
        </motion.div>

        {/* Billing toggle */}
        <div className="mt-10 flex justify-center">
          <div className="inline-flex p-1 rounded-full glass">
            {(["yearly", "weekly"] as const).map((key) => (
              <button
                key={key}
                onClick={() => setBilling(key)}
                className={`relative px-5 py-2 rounded-full text-[14px] font-medium transition-colors ${
                  billing === key
                    ? "text-black"
                    : "text-[color:var(--color-ink-3)] hover:text-white"
                }`}
              >
                {billing === key && (
                  <motion.span
                    layoutId="billing-pill"
                    transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    className="absolute inset-0 bg-white rounded-full"
                  />
                )}
                <span className="relative capitalize">{key}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Plan card */}
        <motion.div
          initial={{ opacity: 0, y: 24, scale: 0.97 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 0.8, ease: EASE }}
          className="mt-10 max-w-md mx-auto surface-elevated p-8 md:p-10"
        >
          <div className="flex items-center justify-between">
            <span className="eyebrow">LOCK IN Premium</span>
            {plan.tag && (
              <span className="px-2.5 py-1 rounded-full bg-[color:var(--color-signal)]/15 text-[color:var(--color-signal)] text-[12px] font-medium">
                {plan.tag}
              </span>
            )}
          </div>

          <div className="mt-6 flex items-end gap-2">
            <AnimatePresence mode="popLayout">
              <motion.span
                key={plan.price}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.3, ease: EASE }}
                className="font-display text-[56px] font-semibold tracking-[-0.04em] text-white leading-none"
              >
                {plan.price}
              </motion.span>
            </AnimatePresence>
            <span className="text-[16px] text-[color:var(--color-ink-4)] mb-2">
              {plan.period}
            </span>
          </div>
          <p className="mt-2 text-[14px] text-[color:var(--color-ink-3)]">{plan.sub}</p>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg w-full mt-7"
          >
            Start your detox
          </a>

          <motion.ul
            variants={staggerContainer(0.06, 0.1)}
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            className="mt-8 space-y-3.5"
          >
            {included.map((item) => (
              <motion.li
                key={item}
                variants={staggerItem}
                className="flex items-start gap-3 text-[15px] text-[color:var(--color-ink-2)]"
              >
                <span className="mt-0.5 w-5 h-5 rounded-full bg-[color:var(--color-signal)]/15 flex items-center justify-center shrink-0">
                  <Check className="w-3 h-3 text-[color:var(--color-signal)]" strokeWidth={3} />
                </span>
                {item}
              </motion.li>
            ))}
          </motion.ul>

          <p className="mt-7 text-center text-[12px] text-[color:var(--color-ink-5)]">
            iPhone, iPad &amp; Mac. Cancel anytime in the App Store.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
