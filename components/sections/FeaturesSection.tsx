"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { FeatureCard } from "@/components/ui/FeatureCard";
import {
  Shield,
  Brain,
  Sparkles,
  BarChart3,
  Zap,
  Lock,
} from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Screen Time Integration",
    description:
      "Leverages Apple's official Screen Time API for objective tracking and true blocking. No workarounds possible.",
  },
  {
    icon: Brain,
    title: "CBT-Inspired Interventions",
    description:
      "Evidence-based cognitive behavioral techniques adapted specifically for digital addiction and phone dependency.",
  },
  {
    icon: Sparkles,
    title: "Habit Replacement Library",
    description:
      "A curated collection of healthier alternatives—from quick activities to long-term habit builders.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights",
    description:
      "Understand your patterns with detailed analytics. See your triggers, track your progress, celebrate wins.",
  },
  {
    icon: Zap,
    title: "No Willpower Required",
    description:
      "Designed to work even when motivation fails. External systems that protect you from your weakest moments.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "All data stays on your device. No cloud sync, no tracking, no ads. Your journey is yours alone.",
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-primary-end/5 rounded-full blur-3xl -translate-y-1/2" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Features"
          title="Everything You Need to Break Free"
          subtitle="A comprehensive toolkit designed specifically for overcoming social media addiction."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-16">
          {features.map((feature, index) => (
            <FeatureCard key={index} {...feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
