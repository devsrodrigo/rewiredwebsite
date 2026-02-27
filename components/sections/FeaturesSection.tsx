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
    title: "OS-Level Hard Block",
    description:
      "Apple Screen Time integration. Your apps are locked at the hardware level. No loopholes, no overrides, no 'just this once.' The phone says no.",
  },
  {
    icon: Brain,
    title: "AI Coach Echo",
    description:
      "Available when cravings hit — which is at night, not during office hours. Echo is trained for the moments willpower doesn't show up.",
  },
  {
    icon: Sparkles,
    title: "Your 90-Day Roadmap",
    description:
      "Built from your profile, your usage patterns, your actual symptoms. Not a generic plan. A protocol designed around you.",
  },
  {
    icon: BarChart3,
    title: "Daily Time Budget",
    description:
      "After your detox: 15, 30, or 60 minutes per day. Distributed across your apps. Controlled access — not elimination. You choose when.",
  },
  {
    icon: Zap,
    title: "No Exception Windows",
    description:
      "There is no 'just this once.' No bypass. No override. The neural pathway doesn't get fed, so the neural pathway gets weaker.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Everything stays on your device. No cloud sync, no tracking, no ads. Your detox is nobody's business but yours.",
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
          title="Built to Work When You're Weak"
          subtitle="Willpower is a resource. Hardware isn't. Rewired removes the decisions you can't win."
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
