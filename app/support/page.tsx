import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with LOCK IN — answers to common questions and how to reach the team.",
};

const faqCategories = [
  {
    title: "Getting started",
    faqs: [
      {
        question: "When is LOCK IN available?",
        answer:
          "LOCK IN is live now on the App Store for iOS. Download it today and start your first 14-day reset.",
      },
      {
        question: "Is LOCK IN free?",
        answer:
          "Yes — the core block, the 14-day reset, Echo, and effortful actions are free. Premium unlocks advanced schedules, deeper analytics, and the full reading library.",
      },
      {
        question: "What iOS version do I need?",
        answer:
          "iOS 16 or later. Newer is better, since Apple keeps improving the Screen Time API.",
      },
      {
        question: "Do I need Screen Time enabled?",
        answer:
          "Yes. LOCK IN uses Apple Screen Time to enforce blocks. The app walks you through enabling it during onboarding.",
      },
    ],
  },
  {
    title: "Using LOCK IN",
    faqs: [
      {
        question: "How does the block work?",
        answer:
          "We use the Screen Time API to refuse to open the app at the OS level. There is no 'one more minute' button. That is the point.",
      },
      {
        question: "Can I override a block in an emergency?",
        answer:
          "No mid-detox bypass. You can set trusted contacts for genuine emergencies, or schedule planned unlock windows in advance.",
      },
      {
        question: "What are effortful actions?",
        answer:
          "Logged real-world wins — workouts, walks, reading, cold showers, real conversations. They rebuild a non-screen reward baseline.",
      },
      {
        question: "How does the 14-day reset work?",
        answer:
          "Full block for 14 days. After that, you set a daily time budget for the apps that return.",
      },
    ],
  },
  {
    title: "Privacy",
    faqs: [
      {
        question: "Is my data private?",
        answer:
          "Yes. Everything is processed on your device. We don't see your usage data.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "Locally. Optional backups are encrypted. If you delete the app, the data goes with it.",
      },
      {
        question: "Can you see what apps I use?",
        answer:
          "No. The Screen Time API gives us aggregate data on-device, not app-specific content.",
      },
    ],
  },
];

export default function SupportPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app">
          <SectionHeading
            eyebrow="Support"
            title="Help, when you need it."
            subtitle="Common questions first. Direct contact below that."
            align="left"
          />
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-20 md:py-28 bg-[color:var(--color-bg-1)]">
        <div className="container-app max-w-4xl">
          <div className="space-y-16">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h2 className="font-display text-[24px] md:text-[32px] font-semibold tracking-[-0.03em] text-white mb-6">
                  {category.title}
                </h2>
                <div className="space-y-3">
                  {category.faqs.map((faq) => (
                    <details
                      key={faq.question}
                      className="group surface overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="text-[16px] font-medium text-white pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-4 h-4 text-[color:var(--color-ink-3)] group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-20 md:py-28">
        <div className="container-app max-w-4xl">
          <SectionHeading
            eyebrow="Talk to us"
            title="Still need a person?"
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-12">
            <a
              href="mailto:info@getrewired.org"
              className="surface p-7 group hover:border-[color:var(--color-line-2)] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-3)] flex items-center justify-center mb-5">
                <Mail className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-[18px] font-semibold text-white tracking-tight mb-2">Email</h3>
              <p className="text-[15px] text-[color:var(--color-ink-3)] mb-3">
                Within 24 hours on business days.
              </p>
              <span className="text-[14px] text-white">info@getrewired.org</span>
            </a>

            <a
              href="https://instagram.com/getrewiredapp"
              target="_blank"
              rel="noopener noreferrer"
              className="surface p-7 group hover:border-[color:var(--color-line-2)] transition-colors"
            >
              <div className="w-10 h-10 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-3)] flex items-center justify-center mb-5">
                <MessageCircle className="w-5 h-5 text-white" strokeWidth={1.75} />
              </div>
              <h3 className="text-[18px] font-semibold text-white tracking-tight mb-2">Instagram</h3>
              <p className="text-[15px] text-[color:var(--color-ink-3)] mb-3">
                DMs for quick stuff.
              </p>
              <span className="text-[14px] text-white">@getrewiredapp</span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
