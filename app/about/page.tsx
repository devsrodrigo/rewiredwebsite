import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { CTASection } from "@/components/sections";
import { Heart, Target, Users, Shield, Eye, Lightbulb } from "lucide-react";

export const metadata: Metadata = {
  title: "About",
  description:
    "Built by people who were stuck on their phones and could not stop. LOCK IN is the tool we wished existed.",
};

const values = [
  { icon: Shield, title: "Private by default", body: "On-device. No selling, no third parties." },
  { icon: Lightbulb, title: "Evidence first", body: "Every feature ties back to research we can cite." },
  { icon: Heart, title: "No moralizing", body: "Addiction is not a character flaw. We won't treat it like one." },
  { icon: Target, title: "Sustainable change", body: "Hard locks short-term so that ordinary life works long-term." },
  { icon: Eye, title: "Transparent", body: "We explain what works, what doesn't, and how we make money." },
  { icon: Users, title: "Built with users", body: "Every screen has been used by someone who actually needed it." },
];

const timeline = [
  {
    year: "2024",
    title: "The breaking point",
    body:
      "We tried Screen Time, grayscale, deleting apps. Nothing held. We were not the problem — the tools were.",
  },
  {
    year: "2025",
    title: "Research and development",
    body:
      "Read the literature. Talked to clinicians. Built the protocol around what the science already knew.",
  },
  {
    year: "2026",
    title: "Public launch",
    body:
      "LOCK IN on the App Store. Goal: help a million people get the next two weeks of their life back.",
  },
];

export default function AboutPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Our story"
            title="We built it because we needed it."
            subtitle="A small team of people who spent five hours a day in feeds they could not put down."
            align="left"
          />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-24 md:py-32 bg-[color:var(--color-bg-1)]">
        <div className="container-app max-w-3xl">
          <div className="surface p-8 md:p-12 space-y-6 text-[17px] leading-relaxed text-[color:var(--color-ink-3)]">
            <p>
              It started with a number: <span className="text-white">six hours a day.</span> That was
              the average screen time across the small group that became this team. We hated it. We
              also could not stop.
            </p>
            <p>
              We tried the usual things. Timer apps that we bypassed in twenty seconds. Grayscale
              that lasted a day. Deleting Instagram and reinstalling it before dinner. None of it
              survived a Friday night.
            </p>
            <p>
              The problem was not motivation. The problem was that we were fighting billion-dollar
              algorithms with notes-app affirmations. So we built a different kind of tool: one that
              moves the decision out of the moment, locks the apps at the OS level, and treats the
              fourteen days afterwards as the actual product.
            </p>
            <p>
              LOCK IN is what we wished existed. We hope it works for you the way it has for us.
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-24 md:py-32">
        <div className="container-app">
          <SectionHeading eyebrow="Principles" title="What we won't compromise on." align="left" />
          <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            {values.map((v) => (
              <div key={v.title} className="surface p-7">
                <div className="w-10 h-10 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-3)] flex items-center justify-center mb-5">
                  <v.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-[18px] font-semibold text-white tracking-tight mb-2">{v.title}</h3>
                <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-24 md:py-32 bg-[color:var(--color-bg-1)]">
        <div className="container-app max-w-4xl">
          <SectionHeading eyebrow="Timeline" title="From frustration to product." align="left" />
          <div className="mt-16 space-y-6">
            {timeline.map((t) => (
              <div
                key={t.year}
                className="grid grid-cols-12 gap-6 border-t border-[color:var(--color-line)] pt-8"
              >
                <div className="col-span-3 md:col-span-2 font-mono text-[13px] tracking-widest text-[color:var(--color-ink-4)]">
                  {t.year}
                </div>
                <div className="col-span-9 md:col-span-10">
                  <h3 className="text-[20px] font-semibold text-white mb-2 tracking-tight">{t.title}</h3>
                  <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">{t.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
    </div>
  );
}
