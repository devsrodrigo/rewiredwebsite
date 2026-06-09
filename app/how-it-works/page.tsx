import { Metadata } from "next";
import Image from "next/image";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { screenshots } from "@/lib/assets";

export const metadata: Metadata = {
  title: "How it works",
  description:
    "The full LOCK IN protocol: pick your apps, disappear for fourteen days, then return on your terms.",
};

const phases = [
  {
    phase: "Phase 01",
    duration: "Day 0: Setup",
    title: "Choose the apps that own your evenings.",
    body:
      "Connect Screen Time. Pick your apps. LOCK IN binds them at the OS level. There is no toggle to turn this off mid-detox. You knew that going in.",
    image: screenshots.pickHoldsYouBack,
    isPhone: false,
    insight:
      "Most people underestimate their daily screen time by 50%. The real number is usually a wake-up call.",
  },
  {
    phase: "Phase 02",
    duration: "Days 1 to 3: Acute withdrawal",
    title: "Your brain notices.",
    body:
      "Restlessness, phantom buzzes, the urge to check things that aren't there. This is your dopamine system asking for its old habit. Echo and the I'm Bored menu route you somewhere useful instead.",
    image: screenshots.countdownLater,
    isPhone: true,
    insight:
      "The pull peaks around minute ten and fades. By day five most people stop reaching for the phone in elevators.",
  },
  {
    phase: "Phase 03",
    duration: "Days 4 to 13: Reset",
    title: "The world gets quieter.",
    body:
      "Time stretches. Boredom comes back, which is a feature, not a bug. You finish a book. You go for a walk without filming it.",
    image: screenshots.earnedToday,
    isPhone: true,
    insight:
      "Earn dopamine the hard way. Logged effortful actions stack up, rebuilding a non-screen reward baseline.",
  },
  {
    phase: "Phase 04",
    duration: "Day 14+: Re-entry",
    title: "You get 30 minutes a day.",
    body:
      "After the 14 days, you get a 30-minute daily budget shared across all blocked apps. Distribute your time however you want. You stay in control.",
    image: screenshots.focusBlocked,
    isPhone: true,
    insight:
      "The goal is not zero phone use. It is intentional use. You are in control.",
  },
];

export default function HowItWorksPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="The protocol"
            title="A fourteen-day reset, built like a piece of hardware."
            subtitle="One decision up front, four phases your brain actually goes through, one new baseline at the end."
            align="left"
          />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)]">
        <div className="container-app py-24 md:py-32 space-y-28 md:space-y-40">
          {phases.map((p, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={i}
                className="grid lg:grid-cols-12 gap-12 lg:gap-20 items-center"
              >
                <div
                  className={`lg:col-span-5 flex justify-center ${
                    reversed ? "lg:order-2 lg:justify-end" : "lg:justify-start"
                  }`}
                >
                  {p.isPhone ? (
                    <div className="iphone-frame" style={{ width: 280 }}>
                      <div className="iphone-screen">
                        <div className="iphone-notch" />
                        <Image
                          src={p.image}
                          alt={p.title}
                          fill
                          sizes="280px"
                          className="object-cover"
                        />
                      </div>
                    </div>
                  ) : (
                    <div
                      className="relative rounded-2xl overflow-hidden border border-[color:var(--color-line)]"
                      style={{ width: 280, height: 600 }}
                    >
                      <Image
                        src={p.image}
                        alt={p.title}
                        fill
                        sizes="280px"
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>
                <div className={`lg:col-span-7 ${reversed ? "lg:order-1" : ""}`}>
                  <div className="text-[12px] tracking-[0.14em] uppercase text-[color:var(--color-ink-4)] mb-3">
                    {p.phase} · <span className="text-[color:var(--color-ink-3)]">{p.duration}</span>
                  </div>
                  <h3 className="font-display text-[36px] md:text-[52px] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
                    {p.title}
                  </h3>
                  <p className="mt-5 text-[17px] md:text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[56ch]">
                    {p.body}
                  </p>
                  <div className="mt-8 surface p-6 max-w-[56ch]">
                    <p className="text-[14px] text-[color:var(--color-ink-3)] leading-relaxed">
                      <span className="text-white">Note · </span>
                      {p.insight}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      <CTASection />
    </div>
  );
}
