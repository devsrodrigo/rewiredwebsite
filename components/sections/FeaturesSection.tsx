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
      "Apple Screen Time integration. Your apps are locked at the hardware level. No loopholes, no overrides, no 'just this once.'",
  },
  {
    icon: Brain,
    title: "AI Coach Echo",
    description:
      "Available when cravings hit, including late at night when willpower is gone. Echo helps you get through the tough moments.",
  },
  {
    icon: Sparkles,
    title: "14-Day Complete Detox",
    description:
      "Full blocking for 14 days straight. No access to your selected apps. Your dopamine system starts resetting within the first week.",
  },
  {
    icon: BarChart3,
    title: "Daily Time Budget",
    description:
      "After your detox: 15, 30, or 60 minutes per day. Distributed across your apps. Controlled access, not elimination.",
  },
  {
    icon: Zap,
    title: "No Exception Windows",
    description:
      "No 'just this once.' No bypass. No override. The habit only breaks when you stop feeding it.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "Everything stays on your device. No cloud sync, no tracking, no ads. Your data never leaves your phone.",
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
          title="Built for When Willpower Fails"
          subtitle="Willpower runs out. Hardware doesn't. Rewired takes the decision away."
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
