import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Brain, Zap, RefreshCw, Shield, BookOpen, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "The Science",
  description:
    "Understand the neuroscience of digital addiction and how Rewired uses evidence-based CBT techniques to help you break free.",
};

const scienceSections = [
  {
    icon: Brain,
    title: "How Social Media Hijacks Your Brain",
    content: [
      {
        subtitle: "The Dopamine Connection",
        text: "Every like, comment, and notification triggers a dopamine release in your brain's reward center. This is the same neurotransmitter involved in all addictions—from gambling to drugs. Social media has effectively turned your phone into a slot machine in your pocket.",
      },
      {
        subtitle: "Variable Reward Schedules",
        text: "Tech companies use 'variable reward schedules'—the same psychological principle that makes slot machines addictive. You never know when you'll get that satisfying notification, so you keep checking. This unpredictability is precisely what makes the behavior so hard to stop.",
      },
      {
        subtitle: "Infinite Scroll & Auto-Play",
        text: "Features like infinite scroll and auto-play remove natural stopping points. In the past, you'd finish a TV episode or reach the end of a newspaper. Now, there's always more content, engineered to keep you engaged just a little longer.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Why Willpower Isn't Enough",
    content: [
      {
        subtitle: "Ego Depletion",
        text: "Willpower is a finite resource that depletes throughout the day. By evening—when most social media binging happens—your self-control reserves are at their lowest. Relying on willpower alone is setting yourself up for failure.",
      },
      {
        subtitle: "Decision Fatigue",
        text: "Every time you resist the urge to check your phone, you're making a decision. After hundreds of these micro-decisions, your brain is exhausted. Eventually, it takes the path of least resistance: scrolling.",
      },
      {
        subtitle: "The Case for External Systems",
        text: "Research shows that external constraints (like app blockers) are more effective than internal motivation alone. By removing the decision from the equation, you preserve mental energy for things that matter.",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "The Rewiring Process",
    content: [
      {
        subtitle: "Neuroplasticity",
        text: "Your brain is not fixed—it's constantly changing based on your behaviors. The neural pathways you use most become stronger, while unused pathways weaken. This is neuroplasticity, and it's the scientific basis for habit change.",
      },
      {
        subtitle: "Breaking the Habit Loop",
        text: "Every habit has three parts: cue, routine, reward. Social media has hijacked this loop. By identifying your cues and replacing the routine with healthier alternatives, you can redirect the pathway to a better reward.",
      },
      {
        subtitle: "The 21-Day Reality",
        text: "The '21 days to form a habit' idea is a myth—research suggests it takes 66 days on average. However, the first 21 days are critical for building momentum. Our program is designed to get you past the hardest part.",
      },
    ],
  },
  {
    icon: Shield,
    title: "CBT for Digital Addiction",
    content: [
      {
        subtitle: "What is CBT?",
        text: "Cognitive Behavioral Therapy (CBT) is one of the most researched and effective forms of psychological treatment. It focuses on identifying and changing negative thought patterns and behaviors. We've adapted these principles specifically for phone addiction.",
      },
      {
        subtitle: "Techniques We Use",
        text: "Urge surfing (riding out cravings without acting on them), cognitive restructuring (challenging the 'just 5 more minutes' lie), and trigger identification (knowing your weak points) are core CBT techniques built into Rewired.",
      },
      {
        subtitle: "Evidence-Based Approach",
        text: "CBT has been proven effective for treating behavioral addictions including gambling and internet addiction. Studies show significant improvements in self-control and reduced compulsive behaviors after CBT interventions.",
      },
    ],
  },
];

const research = [
  {
    quote: "Variable ratio reinforcement schedules produce high, steady rates of responding and are resistant to extinction.",
    source: "B.F. Skinner's research on operant conditioning",
    relevance: "This is exactly how social media notifications work",
  },
  {
    quote: "Smartphone addiction shares neurobiological mechanisms with substance use disorders.",
    source: "Journal of Behavioral Addictions, 2019",
    relevance: "Digital addiction is real and measurable",
  },
  {
    quote: "Exerting self-control may consume self-control strength, reducing the amount of strength available for subsequent self-control efforts.",
    source: "Baumeister et al., Ego Depletion Theory",
    relevance: "Why willpower alone fails",
  },
];

export default function SciencePage() {
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
            badge="The Science"
            title="The Neuroscience of Digital Addiction"
            subtitle="Understanding why you can't stop scrolling is the first step to breaking free. Here's what's happening in your brain—and how we fix it."
          />
        </div>
      </section>

      {/* Main Content Sections */}
      <section className="py-20 md:py-32 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {scienceSections.map((section, index) => (
              <div key={index} className="relative">
                {/* Section Header */}
                <div className="flex items-start gap-4 mb-8">
                  <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center flex-shrink-0">
                    <section.icon className="w-7 h-7 text-white" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-bold text-foreground pt-2">
                    {section.title}
                  </h2>
                </div>

                {/* Content Blocks */}
                <div className="space-y-8 pl-0 md:pl-18">
                  {section.content.map((block, blockIndex) => (
                    <div
                      key={blockIndex}
                      className="bg-background rounded-2xl border border-border p-6 hover:border-primary/50 transition-all duration-300"
                    >
                      <h3 className="text-lg font-semibold text-foreground mb-3">
                        {block.subtitle}
                      </h3>
                      <p className="text-foreground-muted leading-relaxed">
                        {block.text}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Research Citations */}
      <section className="py-20 md:py-32 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-6 h-6 text-primary" />
            <h2 className="text-2xl font-bold text-foreground">
              Research & Evidence
            </h2>
          </div>

          <div className="space-y-6">
            {research.map((item, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background-secondary border border-border"
              >
                <blockquote className="text-lg text-foreground italic mb-4">
                  &ldquo;{item.quote}&rdquo;
                </blockquote>
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <cite className="text-foreground-muted text-sm not-italic">
                    — {item.source}
                  </cite>
                  <span className="text-primary text-sm font-medium">
                    {item.relevance}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20">
            <div className="flex items-start gap-4">
              <FlaskConical className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
              <div>
                <h3 className="font-semibold text-foreground mb-2">
                  Our Commitment to Science
                </h3>
                <p className="text-foreground-muted text-sm leading-relaxed">
                  Rewired is built on peer-reviewed research and evidence-based practices. 
                  We continuously update our methods based on the latest findings in 
                  behavioral psychology, neuroscience, and digital wellness research. 
                  This isn&apos;t self-help pseudoscience—it&apos;s real science, applied thoughtfully.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
