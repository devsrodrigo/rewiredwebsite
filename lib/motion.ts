// LOCK IN:Motion vocabulary
// A deliberate set of *distinct* reveal variants so no two sections move alike.
// Every variant shares the same signature easing (a soft, Apple-grade ease-out)
// but animates a different property, giving each element its own character.
// Import a variant + use `whileInView` with `viewportOnce` for scroll reveals.

import type { Variants, Transition } from "framer-motion";

// Signature ease: decelerate hard, settle softly.
export const EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];
export const EASE_OUT: [number, number, number, number] = [0.22, 1, 0.36, 1];

export const viewportOnce = { once: true, margin: "-90px" } as const;

const base = (duration: number, delay = 0): Transition => ({
  duration,
  delay,
  ease: EASE,
});

// 1) RISE:vertical lift + fade. The workhorse for headlines.
export const rise: Variants = {
  hidden: { opacity: 0, y: 22 },
  show: { opacity: 1, y: 0, transition: base(0.8) },
};

// 2) BLUR-IN:focus pull. For supporting copy and quiet detail.
export const blurIn: Variants = {
  hidden: { opacity: 0, filter: "blur(12px)", y: 8 },
  show: {
    opacity: 1,
    filter: "blur(0px)",
    y: 0,
    transition: base(0.9),
  },
};

// 3) SCALE-IN:material settle. For phones, cards, media.
export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94, y: 14 },
  show: { opacity: 1, scale: 1, y: 0, transition: base(0.9) },
};

// 4) SLIDE-LEFT / SLIDE-RIGHT:directional entrance for two-column rows.
export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -36 },
  show: { opacity: 1, x: 0, transition: base(0.85) },
};
export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 36 },
  show: { opacity: 1, x: 0, transition: base(0.85) },
};

// 5) SETTLE:a small overshoot, like something landing. For badges/pills.
export const settle: Variants = {
  hidden: { opacity: 0, y: -10, scale: 0.96 },
  show: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", stiffness: 420, damping: 26, mass: 0.7 },
  },
};

// 6) UNFOLD:clip + rise, reads like a card opening. For feature tiles.
export const unfold: Variants = {
  hidden: { opacity: 0, y: 28, clipPath: "inset(8% 0% 0% 0% round 24px)" },
  show: {
    opacity: 1,
    y: 0,
    clipPath: "inset(0% 0% 0% 0% round 24px)",
    transition: base(0.9),
  },
};

// 7) STAGGER:container that releases children one by one.
export const staggerContainer = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  show: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

// Default child for stagger containers (small, crisp rise).
export const staggerItem: Variants = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: base(0.6) },
};

// 8) Convenience prop bundles for one-off `motion.x` elements.
export const reveal = (delay = 0) => ({
  initial: { opacity: 0, y: 18 },
  whileInView: { opacity: 1, y: 0 },
  viewport: viewportOnce,
  transition: base(0.7, delay),
});

export const revealScale = (delay = 0) => ({
  initial: { opacity: 0, scale: 0.96, y: 12 },
  whileInView: { opacity: 1, scale: 1, y: 0 },
  viewport: viewportOnce,
  transition: base(0.8, delay),
});
