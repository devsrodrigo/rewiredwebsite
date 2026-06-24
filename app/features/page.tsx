"use client";

import { SectionHeading, FeatureCard, StickyShowcase } from "@/components/ui";
import type { ShowcaseStep } from "@/components/ui";
import { CTASection } from "@/components/sections";
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
      "Built on Apple's Screen Time API. The system itself refuses to open the app, not a filter and not an honor system.",
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
      "Long-form articles and a course like The Monk Mode Protocol, content that doesn't end every nine seconds.",
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
      "After detox, you get a 30-minute daily budget shared across all blocked apps. Distribute it however you want.",
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
      "Block certain apps entirely. The shared 30-minute pool applies to apps you partially allow. Different rules per surface.",
  },
  {
    icon: Calendar,
    title: "Flexible schedules",
    description:
      "Different rules for weekdays and weekends. Tune without losing progress.",
  },
];

const screensTour: ShowcaseStep[] = [
  {
    eyebrow: "01 / Detox countdown",
    title: "A clock you can't argue with.",
    body:
      "Every second of the 14-day reset is visible. Phases (Acute Withdrawal, Reset, Re-entry) name what your brain is actually going through.",
    image: screenshots.homeCountdown,
    alt: "Home screen with the 14-day countdown ring",
  },
  {
    eyebrow: "02 / Time budget",
    title: "Thirty minutes, on your terms.",
    body:
      "After the reset you get a 30-minute daily budget shared across your blocked apps. Spend it where it matters, then everything locks back down on its own.",
    image: screenshots.todaysUnlocks,
    alt: "Today's Unlocks, distributing a daily minute budget",
  },
  {
    eyebrow: "03 / Echo",
    title: "Someone to talk to instead.",
    body:
      "A companion designed for the late-night moments when the app is closed but the urge isn't. Grounded in CBT, not feel-good fluff.",
    image: screenshots.echoScreen,
    alt: "Echo companion chat screen",
  },
  {
    eyebrow: "04 / Read",
    title: "Long-form, not feeds.",
    body:
      "Books and courses like The Monk Mode Protocol are built in. Replace the loop with content that doesn't end every nine seconds.",
    image: screenshots.bookReader,
    alt: "The Monk Mode Protocol reading view",
  },
  {
    eyebrow: "05 / Profile",
    title: "See your brain rewire.",
    body:
      "The Brain Wiring view is the receipt. Day one looks like static. Day fourteen looks like signal.",
    image: screenshots.profileWiring,
    alt: "Profile with the Brain Wiring visualization",
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
        <div className="container-app py-20 md:py-28">
          <StickyShowcase steps={screensTour} phoneSide="right" />
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
