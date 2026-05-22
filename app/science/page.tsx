import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Brain, Zap, RefreshCw, Shield, BookOpen, FlaskConical } from "lucide-react";

export const metadata: Metadata = {
  title: "The science",
  description:
    "The neuroscience of digital addiction and how LOCK IN's 14-day protocol is built around dopamine recovery and CBT.",
};

const scienceSections = [
  {
    icon: Brain,
    title: "How social media hijacks your brain",
    content: [
      {
        subtitle: "Dopamine is not pleasure.",
        text: "Dopamine is the signal your brain uses to say 'do that again.' It is released in anticipation of reward, not at the moment of pleasure. Social media has wired itself directly into that loop.",
      },
      {
        subtitle: "Variable rewards.",
        text: "Sometimes the feed is great. Sometimes it isn't. That randomness — the same principle behind slot machines — is what makes scrolling so hard to stop.",
      },
      {
        subtitle: "No natural stop.",
        text: "Infinite scroll and autoplay strip out the cues that used to end a session: the bottom of the page, the end of an episode. Without them, attention drifts without a finish line.",
      },
    ],
  },
  {
    icon: Zap,
    title: "Why willpower isn't enough",
    content: [
      {
        subtitle: "Decision fatigue.",
        text: "Every micro-resistance costs energy. By evening — when most scrolling happens — your reserves are gone. Relying on willpower alone is a plan that fails on schedule.",
      },
      {
        subtitle: "External constraints work better.",
        text: "Research consistently shows environmental constraints outperform internal motivation. Lock the cookie jar; don't promise to be strong around cookies.",
      },
      {
        subtitle: "Hardware beats hope.",
        text: "An app you can override is an app you will override. LOCK IN moves the decision out of the moment and into the past tense.",
      },
    ],
  },
  {
    icon: RefreshCw,
    title: "The rewiring window",
    content: [
      {
        subtitle: "Neuroplasticity is real but slow.",
        text: "Pathways you use most get stronger. Pathways you stop using weaken. That's the entire mechanism — and it doesn't happen in a weekend.",
      },
      {
        subtitle: "Why fourteen.",
        text: "Receptor density begins to recalibrate around day ten. By day fourteen, the cue-response loop is meaningfully weaker. The protocol is sized to that biological reality.",
      },
      {
        subtitle: "What you replace it with.",
        text: "Effortful actions — exercise, reading, real conversation — supply dopamine on a slower curve. They rebuild the part of you that finds non-screen things rewarding.",
      },
    ],
  },
  {
    icon: Shield,
    title: "CBT, adapted for the phone",
    content: [
      {
        subtitle: "Urge surfing.",
        text: "Cravings are waves: rising, cresting, falling. Riding them out — without acting — is a learnable skill and the single highest-leverage CBT technique here.",
      },
      {
        subtitle: "Cognitive restructuring.",
        text: "The 'just five more minutes' thought is a story your brain tells. Naming it shrinks it. Echo is built to surface and challenge it in real time.",
      },
      {
        subtitle: "Trigger mapping.",
        text: "Most relapses happen in three or four predictable contexts. Identify them. Plan around them. That is the unglamorous work that actually moves the number.",
      },
    ],
  },
];

const research = [
  {
    quote:
      "Variable ratio reinforcement schedules produce high, steady rates of responding and are resistant to extinction.",
    source: "B. F. Skinner, operant conditioning research",
    relevance: "Exactly the structure of a social feed",
  },
  {
    quote:
      "Smartphone addiction shares neurobiological mechanisms with substance use disorders.",
    source: "Journal of Behavioral Addictions, 2019",
    relevance: "It is not a metaphor",
  },
  {
    quote:
      "Exerting self-control may consume self-control strength, reducing the amount of strength available for subsequent self-control efforts.",
    source: "Baumeister et al., ego depletion",
    relevance: "Why willpower alone fails by evening",
  },
];

export default function SciencePage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="The science"
            title="The mechanism, not the moralizing."
            subtitle="Phone addiction is a real, measurable behavioral pattern. LOCK IN is built around the parts of it that the literature actually agrees on."
            align="left"
          />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-1)] py-24 md:py-32">
        <div className="container-app">
          <div className="space-y-24">
            {scienceSections.map((section, i) => (
              <div key={i} className="grid lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-4">
                  <div className="w-12 h-12 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-3)] flex items-center justify-center mb-5">
                    <section.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                  </div>
                  <h2 className="font-display text-[28px] md:text-[36px] font-semibold tracking-[-0.03em] text-white leading-tight">
                    {section.title}
                  </h2>
                </div>
                <div className="lg:col-span-8 grid gap-5">
                  {section.content.map((block, bi) => (
                    <div key={bi} className="surface p-7">
                      <h3 className="text-[17px] font-semibold text-white tracking-tight mb-2">
                        {block.subtitle}
                      </h3>
                      <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
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

      <section className="border-t border-[color:var(--color-line)] py-24 md:py-32">
        <div className="container-app max-w-4xl">
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-5 h-5 text-white" />
            <h2 className="font-display text-[28px] md:text-[34px] font-semibold tracking-[-0.03em] text-white">
              Sources we lean on.
            </h2>
          </div>
          <div className="space-y-4">
            {research.map((r, i) => (
              <div key={i} className="surface p-7">
                <blockquote className="text-[17px] text-white italic leading-relaxed">
                  &ldquo;{r.quote}&rdquo;
                </blockquote>
                <div className="mt-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2">
                  <cite className="text-[13px] text-[color:var(--color-ink-4)] not-italic">
                    {r.source}
                  </cite>
                  <span className="text-[13px] text-[color:var(--color-ink-3)]">
                    {r.relevance}
                  </span>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-10 surface p-8">
            <div className="flex items-start gap-4">
              <FlaskConical className="w-5 h-5 text-white mt-1" />
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-2">Our commitment to the literature</h3>
                <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
                  LOCK IN's protocol is updated as the evidence changes. We do not market certainty
                  we don't have. If a technique stops outperforming, we cut it.
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
