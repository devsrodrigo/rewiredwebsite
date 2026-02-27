import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Eye, ShieldOff, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Rewired helps you break social media addiction: 14 days of complete app blocking, then controlled daily access on your terms.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Setup",
    duration: "Day 1",
    icon: Eye,
    description: "Connect Screen Time, pick the apps you want blocked, and see your real usage.",
    color: "from-blue-500 to-cyan-500",
    steps: [
      "Connect your Screen Time to Rewired",
      "See your real usage numbers",
      "Select the apps you want blocked",
      "Set your goals and start the detox",
    ],
    insight:
      "Most people underestimate their daily screen time by 50%. The real number is usually a wake-up call.",
  },
  {
    phase: "Phase 2",
    title: "14-Day Detox",
    duration: "Days 1-14",
    icon: ShieldOff,
    description: "Complete blocking. No access to your selected apps for 14 full days.",
    color: "from-purple-500 to-pink-500",
    steps: [
      "Selected apps are fully blocked at the OS level",
      "AI Coach Echo helps you through cravings",
      "Dopamine receptors begin recalibrating",
      "Urges peak around day 3-5, then get weaker",
    ],
    insight:
      "The urge to check your phone peaks at about 10 minutes. If you ride it out, it fades. By day 10, most people notice a real difference.",
  },
  {
    phase: "Phase 3",
    title: "Controlled Access",
    duration: "Day 15+",
    icon: RefreshCw,
    description: "Set a daily time budget and use your apps on your terms.",
    color: "from-orange-500 to-red-500",
    steps: [
      "Choose a daily limit: 15, 30, or 60 minutes",
      "Budget is distributed across your apps",
      "Automatic blocking when your time is up",
      "Track your usage patterns over time",
    ],
    insight:
      "The goal is controlled use, not zero use. You decide how much time to spend and when.",
  },
  {
    phase: "Phase 4",
    title: "New Normal",
    duration: "Day 30+",
    icon: CheckCircle,
    description: "Your phone is a tool again. You pick it up when you choose to, not out of habit.",
    color: "from-green-500 to-emerald-500",
    steps: [
      "New habits are established",
      "Phone use is intentional, not compulsive",
      "More time for the things that actually matter",
      "Ongoing tracking to stay on course",
    ],
    insight:
      "The goal is not zero phone use. It is intentional use. You are in control.",
  },
];

export default function HowItWorksPage() {
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
            badge="The Process"
            title="Your 14-Day Detox, Step by Step"
            subtitle="One setup, 14 days of complete blocking, then controlled access. Based on neuroscience and cognitive behavioral therapy."
          />
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-background-secondary relative">
        {/* Vertical Line */}
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-border to-transparent hidden lg:block" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-16 lg:space-y-24">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative lg:grid lg:grid-cols-2 lg:gap-16 ${
                  index % 2 === 1 ? "lg:direction-rtl" : ""
                }`}
              >
                {/* Timeline Dot */}
                <div className="hidden lg:block absolute left-1/2 top-8 -translate-x-1/2 z-10">
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center shadow-lg`}>
                    <phase.icon className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Content */}
                <div
                  className={`${index % 2 === 1 ? "lg:col-start-1 lg:text-right" : "lg:col-start-2"}`}
                >
                  <div className="bg-background rounded-2xl border border-border p-8 hover:border-primary/50 transition-all duration-300">
                    {/* Mobile Icon */}
                    <div className={`lg:hidden w-14 h-14 rounded-2xl bg-gradient-to-br ${phase.color} flex items-center justify-center mb-6`}>
                      <phase.icon className="w-7 h-7 text-white" />
                    </div>

                    {/* Phase Badge */}
                    <div className="flex items-center gap-3 mb-4">
                      <span className="px-3 py-1 rounded-full gradient-bg text-white text-sm font-medium">
                        {phase.phase}
                      </span>
                      <span className="text-foreground-muted text-sm">
                        {phase.duration}
                      </span>
                    </div>

                    {/* Title & Description */}
                    <h3 className="text-2xl font-bold text-foreground mb-3">
                      {phase.title}
                    </h3>
                    <p className="text-foreground-muted mb-6">
                      {phase.description}
                    </p>

                    {/* Steps */}
                    <ul className="space-y-3 mb-6">
                      {phase.steps.map((step, stepIndex) => (
                        <li
                          key={stepIndex}
                          className={`flex items-start gap-3 ${
                            index % 2 === 1 ? "lg:flex-row-reverse lg:text-right" : ""
                          }`}
                        >
                          <span className="w-6 h-6 rounded-full bg-primary/10 text-primary flex items-center justify-center text-sm flex-shrink-0 mt-0.5">
                            {stepIndex + 1}
                          </span>
                          <span className="text-foreground">{step}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Insight */}
                    <div className={`p-4 rounded-xl bg-primary/5 border border-primary/20 ${
                      index % 2 === 1 ? "lg:text-right" : ""
                    }`}>
                      <p className="text-sm text-foreground-muted italic">
                        💡 {phase.insight}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Empty column for alternating layout */}
                <div className={`hidden lg:block ${index % 2 === 1 ? "lg:col-start-2" : "lg:col-start-1"}`} />
              </div>
            ))}
          </div>

          {/* After 21 Days */}
          <div className="mt-24 text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-6">
              <CheckCircle className="w-4 h-4" />
              After 14 Days
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              You&apos;re in Control
            </h3>
            <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
              The compulsive pull is gone. You use your phone when you choose to, 
              not when the algorithm pulls you in. Set a daily time budget and 
              keep your usage intentional from here on out.
            </p>
            <div className="flex items-center justify-center gap-4 text-foreground-muted">
              <ArrowRight className="w-5 h-5 text-accent" />
              <span>Continue with controlled daily access or adjust your limits anytime</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
