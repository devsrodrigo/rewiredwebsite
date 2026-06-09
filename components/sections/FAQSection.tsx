"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What exactly does LOCK IN do?",
    answer:
      "You pick the apps that eat your time. LOCK IN blocks them completely for 14 days using Apple's Screen Time framework, enforced at the operating system level, so there's no 'Ignore' button. During those 14 days, the app fills the gap: a live countdown of your dopamine reset, an 'I'm Bored' menu, free books, focus sessions, and Echo, a chat that talks you through the hard moments. After day 14, you get a 30-minute daily budget you distribute across your apps however you want.",
  },
  {
    question: "iPhone Screen Time already does this. Why pay for an app?",
    answer:
      "It doesn't, and you already know it doesn't. That's why you're here. Screen Time limits come with an 'Ignore Limit' button, and even when you hold the line on one app, you just binge another or switch to Netflix. LOCK IN has no ignore button and no exceptions for 14 days, and it pairs the block with replacements: reading, focus sessions, and real-world actions that rebuild your reward system instead of leaving a void.",
  },
  {
    question: "Is it worth paying for?",
    answer:
      "Compare the price of the app to the price of staying the same. A full year of LOCK IN costs less than one coffee a month. The average person your age loses 5+ hours a day to feeds: over 1,800 hours a year. If LOCK IN gives you back even a fraction of that toward your actual goals, it's the cheapest trade you'll ever make.",
  },
  {
    question: "I create content. I can't just disappear for 14 days.",
    answer:
      "Fourteen days off the feed is a competitive advantage, not a setback. You get two weeks of uninterrupted time to plan, film, and edit. You come back with a backlog of higher-quality work than you could have produced while consuming all day. Creators in our beta came back posting better, not less.",
  },
  {
    question: "Can I quit early if it's too hard?",
    answer:
      "Not from inside the app. That's the entire point, and it's what separates LOCK IN from every blocker you've already ignored. The only true escape hatch is deleting the app, which we make deliberately inconvenient to do impulsively. The urge to quit peaks around day 2-3 and fades. The countdown shows you exactly where you are; almost nobody throws away day 10 of 14.",
  },
  {
    question: "Does this actually work, or is it another productivity gimmick?",
    answer:
      "The mechanism is simple and boring: remove the highest-stimulation input, and within days your brain's reward sensitivity starts recalibrating. Beta users reported real changes, including a commitment to staying off social media after the detox ended. No willpower hacks, no streaks to game. Just a door that stays closed long enough for your brain to adjust.",
  },
];

// FAQPage structured data for rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.question,
    acceptedAnswer: { "@type": "Answer", text: f.answer },
  })),
};

export function FAQSection() {
  return (
    <section className="py-24 md:py-32 border-t border-[color:var(--color-line)] bg-[color:var(--color-bg-1)]">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <div className="container-app">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-4"
          >
            <p className="eyebrow mb-4">Before you decide</p>
            <h2 className="font-display text-[36px] md:text-[48px] font-semibold tracking-[-0.04em] text-white leading-[1.05]">
              The questions you&apos;re actually asking.
            </h2>
            <p className="mt-5 text-[16px] text-[color:var(--color-ink-3)] leading-relaxed">
              Straight answers. If yours isn&apos;t here,{" "}
              <Link href="/support" className="text-white underline underline-offset-4 decoration-[color:var(--color-line-2)] hover:decoration-white transition-colors">
                the full FAQ
              </Link>{" "}
              covers everything else.
            </p>
            <div className="mt-8 space-y-2.5 text-[14px]">
              <p className="eyebrow !text-[11px] mb-3">Go deeper</p>
              {[
                { href: "/blog/screen-time-vs-rewired", label: "Why Screen Time limits keep failing you" },
                { href: "/blog/are-app-blockers-worth-it", label: "Are app blockers worth paying for?" },
                { href: "/blog/what-happens-when-you-stop-scrolling", label: "Your brain off the feed, day by day" },
                { href: "/blog/dopamine-detox-for-content-creators", label: "The creator's guide to a 14-day detox" },
              ].map((l) => (
                <Link
                  key={l.href}
                  href={l.href}
                  className="block text-[color:var(--color-ink-3)] hover:text-white transition-colors"
                >
                  {l.label} →
                </Link>
              ))}
            </div>
          </motion.div>

          <div className="lg:col-span-8 space-y-3">
            {faqs.map((faq, i) => (
              <motion.details
                key={faq.question}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.5, delay: i * 0.04, ease: [0.16, 1, 0.3, 1] }}
                className="group surface overflow-hidden"
              >
                <summary className="flex items-center justify-between p-6 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="text-[16px] font-medium text-white pr-4">
                    {faq.question}
                  </span>
                  <ChevronDown className="w-4 h-4 shrink-0 text-[color:var(--color-ink-3)] group-open:rotate-180 transition-transform" />
                </summary>
                <div className="px-6 pb-6 pt-0">
                  <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </motion.details>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
