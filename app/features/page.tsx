"use client";

import { SectionHeading } from "@/components/ui";
import { FeatureCard } from "@/components/ui";
import { CTASection } from "@/components/sections";
import {
  Shield,
  Brain,
  Sparkles,
  BarChart3,
  Clock,
  Lock,
  Smartphone,
  Target,
  TrendingUp,
  RefreshCw,
  Bell,
  Calendar,
} from "lucide-react";

const detailedFeatures = [
  {
    icon: Shield,
    title: "Screen Time API Integration",
    description:
      "Rewired uses Apple's official Screen Time API for real tracking and true blocking that can't be bypassed. Not self-reporting.",
  },
  {
    icon: Brain,
    title: "CBT-Inspired Interventions",
    description:
      "Evidence-based cognitive behavioral techniques including urge surfing, cognitive restructuring, and trigger identification, built for digital addiction.",
  },
  {
    icon: Sparkles,
    title: "Habit Replacement System",
    description:
      "Don't just quit. Build something better. A library of alternatives to help you develop healthier habits and dopamine sources.",
  },
  {
    icon: Clock,
    title: "14-Day Complete Detox",
    description:
      "Full app blocking for 14 days straight. No access, no exceptions. Your dopamine system starts resetting within the first week.",
  },
  {
    icon: BarChart3,
    title: "Progress Analytics",
    description:
      "See your patterns, celebrate milestones, and understand what triggers your usage. Real data, not guesswork.",
  },
  {
    icon: Lock,
    title: "Privacy First",
    description:
      "All data stays on your device. No cloud sync, no tracking, no ads. Your data never leaves your phone.",
  },
  {
    icon: Target,
    title: "Personalized Goals",
    description:
      "Set targets based on your actual usage and work toward them at your own pace.",
  },
  {
    icon: RefreshCw,
    title: "Post-Detox Time Budgets",
    description:
      "After your 14-day detox, set daily limits of 15, 30, or 60 minutes. Controlled access that keeps you in charge.",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Helpful nudges when you need them, silence when you don't. Notifications that support you, not distract you.",
  },
  {
    icon: Smartphone,
    title: "App-Specific Controls",
    description:
      "Different rules for different apps. Block TikTok completely while allowing limited Instagram for close friends.",
  },
  {
    icon: TrendingUp,
    title: "Progress Sharing",
    description:
      "Optional accountability features to share progress with friends or family, on your terms.",
  },
  {
    icon: Calendar,
    title: "Flexible Scheduling",
    description:
      "Different limits for weekdays vs weekends. Adjust as needed without losing your progress.",
  },
];

const comparisonData = [
  {
    feature: "True app blocking",
    rewired: true,
    others: "Easily bypassed",
    willpower: false,
  },
  {
    feature: "Screen Time API integration",
    rewired: true,
    others: false,
    willpower: false,
  },
  {
    feature: "CBT techniques",
    rewired: true,
    others: false,
    willpower: false,
  },
  {
    feature: "Habit replacement",
    rewired: true,
    others: "Basic suggestions",
    willpower: false,
  },
  {
    feature: "Privacy-first approach",
    rewired: true,
    others: "Often tracks data",
    willpower: true,
  },
  {
    feature: "Personalized programs",
    rewired: true,
    others: "One-size-fits-all",
    willpower: false,
  },
];

export default function FeaturesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-end/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            badge="Features"
            title="Everything You Need to Break the Habit"
            subtitle="OS-level blocking, AI coaching, and post-detox time budgets. Science-backed, privacy-first, and built to actually work."
          />
        </div>
      </section>

      {/* Detailed Features Grid */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {detailedFeatures.map((feature, index) => (
              <FeatureCard key={index} {...feature} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="How Rewired Compares"
            subtitle="See why Rewired is more effective than generic screen time apps or relying on willpower alone."
          />

          <div className="mt-12 overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-left py-4 px-4 text-foreground font-semibold">
                    Feature
                  </th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">
                    Rewired
                  </th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">
                    Generic Apps
                  </th>
                  <th className="text-center py-4 px-4 text-foreground font-semibold">
                    Willpower
                  </th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, index) => (
                  <tr
                    key={index}
                    className="border-b border-border hover:bg-background-secondary transition-colors"
                  >
                    <td className="py-4 px-4 text-foreground">{row.feature}</td>
                    <td className="py-4 px-4 text-center">
                      {row.rewired === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-sm">
                          ✓
                        </span>
                      ) : (
                        <span className="text-foreground-muted">{row.rewired}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.others === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-sm">
                          ✓
                        </span>
                      ) : row.others === false ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-warning/20 text-warning text-sm">
                          ✗
                        </span>
                      ) : (
                        <span className="text-foreground-muted text-sm">{row.others}</span>
                      )}
                    </td>
                    <td className="py-4 px-4 text-center">
                      {row.willpower === true ? (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-accent text-white text-sm">
                          ✓
                        </span>
                      ) : (
                        <span className="inline-flex items-center justify-center w-6 h-6 rounded-full bg-warning/20 text-warning text-sm">
                          ✗
                        </span>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
