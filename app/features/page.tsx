"use client";

import { SectionHeading, FeatureCard } from "@/components/ui";
import { CTASection } from "@/components/sections";
import Image from "next/image";
import { screenshots } from "@/lib/assets";
import {
  Shield,
  Brain,
  Sparkles,
  BarChart3,
  Clock,
  Lock,
  Smartphone,
  Target,
  RefreshCw,
  Bell,
  Calendar,
  BookOpen,
} from "lucide-react";

const detailedFeatures = [
  {
    icon: Shield,
    title: "OS-level hard block",
    description:
      "Built on Apple's Screen Time API. The system itself refuses to open the app — not a filter, not an honor system.",
  },
  {
    icon: Brain,
    title: "Echo, your coach",
    description:
      "An always-on companion grounded in CBT. Trained to help with cravings, urges, and 11 pm relapse moments.",
  },
  {
    icon: Sparkles,
    title: "14-day reset",
    description:
      "A continuous block long enough for dopamine receptors to recalibrate. Phased countdown shows where you are.",
  },
  {
    icon: BookOpen,
    title: "Built-in reading",
    description:
      "Long-form articles and a course like The Monk Mode Protocol — content that doesn't end every nine seconds.",
  },
  {
    icon: Clock,
    title: "Dumb-phone mode",
    description:
      "Tap 15, 25, 45, or 60 minutes and the device goes quiet. Schedule it daily.",
  },
  {
    icon: BarChart3,
    title: "Brain wiring view",
    description:
      "A daily visualization of your reward system. Chaotic on day one, calmer by the end.",
  },
  {
    icon: Lock,
    title: "Private by default",
    description:
      "Everything stays on your device. No cloud sync, no ads, no third-party trackers.",
  },
  {
    icon: Target,
    title: "Effortful actions",
    description:
      "Walk, workout, journal, cold shower, real conversation. Earn dopamine the hard way.",
  },
  {
    icon: RefreshCw,
    title: "Time budgets",
    description:
      "After detox: 15, 30, or 60 minutes a day. Distributed across the apps you allow.",
  },
  {
    icon: Bell,
    title: "Smart nudges",
    description:
      "A handful of notifications that actually help. Silence by default for everything else.",
  },
  {
    icon: Smartphone,
    title: "Per-app controls",
    description:
      "Block TikTok entirely. Allow 10 minutes of close friends. Different rules per surface.",
  },
  {
    icon: Calendar,
    title: "Flexible schedules",
    description:
      "Different rules for weekdays and weekends. Tune without losing progress.",
  },
];

const screensTour = [
  {
    eyebrow: "01 / Detox countdown",
    title: "A clock you can't argue with.",
    body:
      "Every second of the 14-day reset is visible. Phases — Acute Withdrawal, Reset, Re-entry — name what your brain is actually going through.",
    image: screenshots.countdownAcute,
  },
  {
    eyebrow: "02 / Focus",
    title: "Block six apps with two taps.",
    body:
      "Pick what to lock. Schedule focus blocks. Tap into Dumb Phone Mode when you need a quiet hour.",
    image: screenshots.focusBlocked,
  },
  {
    eyebrow: "03 / Echo",
    title: "Someone to talk to instead.",
    body:
      "A coach designed for the late-night moments when the app is closed but the urge isn't. Real CBT, not feel-good fluff.",
    image: screenshots.echoChat,
  },
  {
    eyebrow: "04 / Profile",
    title: "See your brain rewire.",
    body:
      "The Brain Wiring view is the receipt. Day one looks like static. Day fourteen looks like signal.",
    image: screenshots.profileBrain,
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Features"
            title="Everything you need. Nothing you don't."
            subtitle="LOCK IN is six well-built features, not a hundred shallow ones. Each one earned its place by being used."
            align="left"
          />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)]">
        <div className="container-app py-24 md:py-32 space-y-28 md:space-y-36">
          {screensTour.map((s, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
                className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    reversed ? "lg:order-2 lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  <div className="iphone-frame" style={{ width: 280 }}>
                    <div className="iphone-screen">
                      <div className="iphone-notch" />
                      <Image
                        src={s.image}
                        alt={s.title}
                        fill
                        sizes="280px"
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
                <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
                  <div className="text-[12px] tracking-[0.14em] uppercase text-[color:var(--color-ink-4)] mb-4">
                    {s.eyebrow}
                  </div>
                  <h3 className="font-display text-[36px] md:text-[52px] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
                    {s.title}
                  </h3>
                  <p className="mt-5 text-[17px] md:text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[56ch]">
                    {s.body}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-24 md:py-32 bg-[color:var(--color-bg-1)]">
        <div className="container-app">
          <SectionHeading
            eyebrow="The full set"
            title="Every feature, in one view."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mt-16">
            {detailedFeatures.map((f, i) => (
              <FeatureCard key={f.title} {...f} index={i} />
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
