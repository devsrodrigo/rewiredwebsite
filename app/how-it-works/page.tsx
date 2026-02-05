import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Eye, ShieldOff, RefreshCw, CheckCircle, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "How It Works",
  description:
    "Learn how Rewired helps you break free from social media addiction in 4 simple phases: Track, Interrupt, Replace, and Rewire.",
};

const phases = [
  {
    phase: "Phase 1",
    title: "Awareness",
    duration: "Days 1-3",
    icon: Eye,
    description: "See the truth about your usage and understand your triggers.",
    color: "from-blue-500 to-cyan-500",
    steps: [
      "Connect your Screen Time to Rewired",
      "See your real usage (prepare to be surprised)",
      "Identify your triggers and vulnerable moments",
      "Set your intention and goals",
    ],
    insight:
      "Most people underestimate their screen time by 50%. Seeing the real numbers is the wake-up call you need.",
  },
  {
    phase: "Phase 2",
    title: "Interruption",
    duration: "Days 4-10",
    icon: ShieldOff,
    description: "Break the automatic habit loop with smart interventions.",
    color: "from-purple-500 to-pink-500",
    steps: [
      "Smart blocking activates during vulnerable times",
      "CBT-based interventions when you try to scroll",
      "Build awareness of urges without acting on them",
      "Start practicing replacement habits",
    ],
    insight:
      "The urge to check your phone peaks at about 10 minutes. If you can ride it out, it fades.",
  },
  {
    phase: "Phase 3",
    title: "Replacement",
    duration: "Days 11-17",
    icon: RefreshCw,
    description: "Build new neural pathways with healthier dopamine sources.",
    color: "from-orange-500 to-red-500",
    steps: [
      "Healthier habits start to feel more natural",
      "Dopamine system begins recalibrating",
      "Less automatic reaching for your phone",
      "Real-world engagement increases",
    ],
    insight:
      "Your brain is literally rewiring itself. The neural pathways for scrolling are weakening while new ones grow stronger.",
  },
  {
    phase: "Phase 4",
    title: "Rewired",
    duration: "Days 18-21+",
    icon: CheckCircle,
    description: "Establish lasting change and maintain your new relationship with technology.",
    color: "from-green-500 to-emerald-500",
    steps: [
      "New neural pathways are established",
      "Phone becomes a tool, not a crutch",
      "Sustainable relationship with technology",
      "Freedom to choose, not compulsion to scroll",
    ],
    insight:
      "The goal isn't zero phone use—it's intentional use. You're in control now.",
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
            title="Your Journey to Freedom"
            subtitle="A proven 21-day program to break free from social media addiction. Based on neuroscience and cognitive behavioral therapy."
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
              After 21 Days
            </div>
            <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
              You&apos;re Rewired
            </h3>
            <p className="text-foreground-muted max-w-2xl mx-auto mb-8">
              The compulsion is gone. You can use your phone when you choose to, 
              not when the algorithm tells you to. This isn&apos;t the end—it&apos;s the 
              beginning of a healthier relationship with technology.
            </p>
            <div className="flex items-center justify-center gap-4 text-foreground-muted">
              <ArrowRight className="w-5 h-5 text-accent" />
              <span>Continue with maintenance mode or explore advanced programs</span>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
