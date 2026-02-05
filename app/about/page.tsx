import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Heart, Target, Users, Shield, Eye, Lightbulb, Zap } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about the story behind Rewired—built by people who've been there. Our mission is to help Gen Z take back control from social media addiction.",
};

const values = [
  {
    icon: Shield,
    title: "Privacy First",
    description:
      "Your data stays on your device. No tracking, no selling, no compromise.",
  },
  {
    icon: Lightbulb,
    title: "Science-Backed",
    description:
      "Every feature is grounded in peer-reviewed research and proven techniques.",
  },
  {
    icon: Heart,
    title: "No Judgment",
    description:
      "Addiction isn't a moral failure. We meet you where you are with compassion.",
  },
  {
    icon: Target,
    title: "Sustainable Change",
    description:
      "Quick fixes don't work. We focus on lasting transformation, not temporary hacks.",
  },
  {
    icon: Eye,
    title: "Transparency",
    description:
      "We're honest about what works, what doesn't, and how we make money.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "Breaking addiction is easier together. We're building a movement, not just an app.",
  },
];

const timeline = [
  {
    year: "2024",
    title: "The Breaking Point",
    description:
      "After years of struggling with social media addiction themselves, our founders decided enough was enough. Existing solutions felt like band-aids—timer apps that were easy to bypass, motivational apps that didn't understand the psychology.",
  },
  {
    year: "2025",
    title: "Research & Development",
    description:
      "Deep dive into neuroscience, CBT techniques, and what actually works for behavioral addiction. Consulted with therapists, psychologists, and former social media employees. Built the foundation of what would become Rewired.",
  },
  {
    year: "2026",
    title: "Launch",
    description:
      "Rewired launches to the public. Our goal: help 1 million young people break free from social media addiction by 2027. This is just the beginning.",
  },
  {
    year: "Future",
    title: "What's Next",
    description:
      "Android support, family plans, school partnerships, and deeper integration with mental health resources. We're building the future of digital wellness.",
  },
];

export default function AboutPage() {
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
            badge="Our Story"
            title="Built By People Who've Been There"
            subtitle="Rewired was created by students who struggled with the same addiction you're facing. We built the tool we wished existed."
          />
        </div>
      </section>

      {/* The Story */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="prose prose-lg prose-invert mx-auto">
            <div className="bg-background rounded-2xl border border-border p-8 md:p-12">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-6">
                Why We Built Rewired
              </h2>
              
              <div className="space-y-6 text-foreground-muted">
                <p className="text-lg leading-relaxed">
                  It started with a simple realization: <span className="text-foreground font-medium">we were spending 6+ hours a day on social media, and we hated it.</span>
                </p>
                
                <p className="leading-relaxed">
                  We tried everything. Screen time limits that we immediately bypassed. 
                  Grayscale mode that lasted a day. Deleting apps only to reinstall them 
                  hours later. We read books about digital minimalism and felt inspired—until 
                  we picked up our phones again.
                </p>
                
                <p className="leading-relaxed">
                  The problem wasn&apos;t willpower. The problem was that we were fighting 
                  billion-dollar algorithms with nothing but good intentions. These apps 
                  were literally engineered by the smartest minds in tech to be as addictive 
                  as possible. We needed better tools.
                </p>
                
                <p className="leading-relaxed">
                  So we built Rewired. Not another timer app. Not another productivity tool. 
                  A genuine intervention based on the same CBT techniques that therapists 
                  use for behavioral addictions, combined with Apple&apos;s Screen Time API 
                  for blocking that actually works.
                </p>
                
                <p className="text-lg leading-relaxed text-foreground">
                  Today, we&apos;re a small team with a big mission: help our generation 
                  break free from social media addiction and reclaim their time, attention, 
                  and mental health.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center mb-16">
            <div className="w-16 h-16 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-6">
              <Zap className="w-8 h-8 text-white" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Our Mission
            </h2>
            <p className="text-xl text-foreground-muted">
              Help Gen Z take back control of their digital lives. Build technology 
              that respects users instead of exploiting them. Prove that dopamine 
              can be rewired. Make digital wellness accessible to everyone.
            </p>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Values"
            subtitle="These principles guide everything we build."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {values.map((value, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {value.title}
                </h3>
                <p className="text-foreground-muted">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Journey"
            subtitle="From frustration to solution."
          />

          <div className="mt-12 relative">
            {/* Vertical line */}
            <div className="absolute left-0 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

            <div className="space-y-12">
              {timeline.map((item, index) => (
                <div
                  key={index}
                  className={`relative flex flex-col md:flex-row gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Year Badge */}
                  <div className="absolute left-0 md:left-1/2 -translate-x-1/2 w-16 h-8 rounded-full gradient-bg flex items-center justify-center text-white text-sm font-bold z-10">
                    {item.year}
                  </div>

                  {/* Content */}
                  <div className={`md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16"}`}>
                    <div className="bg-background-secondary rounded-2xl border border-border p-6">
                      <h3 className="text-xl font-semibold text-foreground mb-2">
                        {item.title}
                      </h3>
                      <p className="text-foreground-muted">{item.description}</p>
                    </div>
                  </div>

                  {/* Empty space for alternating layout */}
                  <div className="hidden md:block md:w-1/2" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
