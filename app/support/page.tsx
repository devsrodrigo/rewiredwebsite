import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Help with LOCK IN: answers to common questions and how to reach the team.",
};

const faqCategories = [
  {
    title: "What LOCK IN is",
    faqs: [
      {
        question: "What does LOCK IN actually do?",
        answer:
          "You select the apps that consume your time. LOCK IN blocks them completely for 14 days using Apple's Screen Time framework — enforced at the operating system level, with no 'Ignore Limit' button. While the apps are gone, LOCK IN fills the gap with replacements: a live countdown of your reset, free books, focus sessions, an 'I'm Bored' menu, and Echo, a chat companion for the hard moments. After day 14, you get a 30-minute daily budget you distribute across your apps however you want.",
      },
      {
        question: "Who is LOCK IN for?",
        answer:
          "People — mostly 16 to 25 — who have real goals and know their screen time is the thing standing between them and those goals. If you've deleted TikTok and reinstalled it within a week, set Screen Time limits and tapped Ignore every time, or felt your motivation drain after an hour of scrolling, this was built for you.",
      },
      {
        question: "What is a dopamine detox, in plain terms?",
        answer:
          "Your brain adapts to constant high-stimulation input by becoming less sensitive to reward — which is why normal life starts feeling flat and goals feel impossible to start. A dopamine detox removes the highest-stimulation source (your feeds) for long enough that this sensitivity recovers. You can't literally 'flush' dopamine, and anyone who says so is selling pseudoscience. What you can do is stop the over-stimulation long enough for your baseline to recalibrate. That recalibration is what the 14 days are for.",
      },
      {
        question: "Does a dopamine detox actually work?",
        answer:
          "The honest answer: abstinence from a compulsive behavior, sustained long enough, reliably weakens the compulsion — that part is well-established behavioral science. What doesn't work is the willpower version, where you 'decide' to scroll less and quit by day 3. LOCK IN exists precisely because the mechanism works but self-enforcement doesn't. The OS holds the line so the recalibration actually gets its 14 days.",
      },
      {
        question: "Why 14 days and not 7 or 30?",
        answer:
          "The hardest withdrawal symptoms — restlessness, phantom checks, the elevator reach — peak in the first 3 days and largely fade by day 5 to 7. The week after that is where the new baseline settles in: boredom returns, focus stretches, and the urge stops being a fight. Seven days ends the experiment right when it starts paying off. Thirty days scares people off before they start. Fourteen is the shortest window that produces a change you can feel.",
      },
    ],
  },
  {
    title: "Objections, honestly answered",
    faqs: [
      {
        question: "iPhone Screen Time is free and already does this. Why pay?",
        answer:
          "Screen Time limits ship with an 'Ignore Limit' button — and you've already proven to yourself you'll press it. It's also app-by-app: block Instagram and you'll watch Netflix instead. LOCK IN is different on both counts: the 14-day block has no override, and the system replaces the habit instead of just restricting it — books, focus sessions, and logged real-world actions that rebuild your reward baseline while the apps are gone.",
      },
      {
        question: "Is it worth paying for?",
        answer:
          "Weigh the price of the app against the price of staying the same. A full year of LOCK IN costs less than one coffee a month. Five hours a day on social apps is over 1,800 hours a year — the equivalent of a full-time job's worth of your life, spent on other people's content. If LOCK IN converts even a small share of that into your own goals, it pays for itself in the first week.",
      },
      {
        question: "I create content for a living. I can't disappear for 14 days.",
        answer:
          "You can — and it's usually the most productive two weeks of a creator's year. The detox blocks consumption, and 14 days is enough time to plan, film, and edit a backlog with a level of focus you can't reach while pulling the feed all day. Beta creators came back with better ideas and finished, higher-quality videos ready to post. Your audience doesn't leave in two weeks. Your burnout might.",
      },
      {
        question: "What if I genuinely need a blocked app for work or school?",
        answer:
          "Then don't block it. You choose exactly which apps go into the detox during setup — LOCK IN never touches calls, texts, email, maps, banking, or anything you didn't select. The block applies only to the apps you chose. Pick the ones that own your evenings, keep the ones that run your life.",
      },
      {
        question: "Can I quit early if it gets too hard?",
        answer:
          "Not from inside the app. There is no pause, no skip, no emergency unlock — because every blocker with an escape hatch becomes the escape hatch. The one true exit is deleting LOCK IN entirely, which removes all blocks; it's deliberately inconvenient enough that you won't do it on impulse at 11pm. The urge to quit peaks around day 2-3 and fades fast. The countdown exists so you can see exactly how much you'd be throwing away.",
      },
      {
        question: "What happens if I relapse after the detox?",
        answer:
          "You run it again — without shame. A relapse doesn't erase the recalibration, and the second detox is consistently easier than the first because your brain has already been there. The 30-minute daily budget after the detox exists exactly to prevent the all-or-nothing spiral: you're never one slip away from 'ruined,' you're one day away from back on track.",
      },
    ],
  },
  {
    title: "The 14 days, in practice",
    faqs: [
      {
        question: "How does the block technically work?",
        answer:
          "LOCK IN uses Apple's Screen Time (FamilyControls and ManagedSettings) framework — the same enforcement layer Apple uses for parental controls. When you start the detox, the selected apps are shielded at the OS level: tap one and the system itself refuses to open it. This is not a notification, an overlay, or an honor system. The app cannot open.",
      },
      {
        question: "What do the detox phases mean?",
        answer:
          "Days 1-3 are Acute Withdrawal: restlessness, phantom buzzes, reflexive reaching for your phone. This is your reward system asking for its habit — uncomfortable, and exactly on schedule. Days 4-13 are the Reset: the pull fades, boredom returns (a feature, not a bug), focus stretches. Day 14 onward is Re-entry: apps come back inside a 30-minute daily budget, on your terms. The countdown shows you which phase you're in so the discomfort reads as progress, not failure.",
      },
      {
        question: "What are effortful actions and why log them?",
        answer:
          "Workouts, walks, reading, cold showers, real conversations — actions where the reward comes after the effort, not before. Logging them does two things: it rebuilds a reward baseline that doesn't depend on a screen, and it gives the restless energy of withdrawal somewhere productive to go. This is the 'replace' half of the system. Blocking alone leaves a void; the void is why most detoxes fail.",
      },
      {
        question: "What is Echo?",
        answer:
          "A chat companion inside the app, built for the 11pm moment when willpower runs out and you'd normally cave. It's trained around what actually helps mid-craving: naming the urge, riding it out, and redirecting to something on your list. It's not therapy and doesn't pretend to be — it's a tool for the ten hardest minutes of any given day.",
      },
      {
        question: "What is Dumb Phone Mode?",
        answer:
          "On-demand focus sessions — 15, 25, 45, or 60 minutes — that quiet the entire device, not just social apps. Use it for deep work, studying, or sleep wind-down. It works alongside the detox and keeps working after it, when you want your phone to act like a tool instead of a slot machine.",
      },
      {
        question: "What exactly happens after day 14?",
        answer:
          "The total block lifts and is replaced by a 30-minute shared daily budget across your blocked apps. You allocate it: 20 minutes for Instagram and 10 for YouTube, all 30 on one app, or none at all. The point was never zero phone use forever — it's that after a real reset, 30 intentional minutes feels like enough, and you're the one deciding where they go. Not the algorithm.",
      },
      {
        question: "Will I lose messages, accounts, or followers during the detox?",
        answer:
          "No. Blocking an app doesn't log you out, delete anything, or touch your account. Your DMs, followers, and content are all exactly where you left them on day 14. The only thing you lose is two weeks of other people's content — which was the point.",
      },
    ],
  },
  {
    title: "Practical details",
    faqs: [
      {
        question: "What do I need to run LOCK IN?",
        answer:
          "An iPhone on iOS 17 or later, with Screen Time enabled — the app walks you through granting the permission during onboarding. That permission is what lets LOCK IN enforce blocks at the system level; without it, no blocker on iOS can do more than send you notifications.",
      },
      {
        question: "Is LOCK IN available on Android?",
        answer:
          "Not yet. LOCK IN is iPhone-only today, with Google Play planned for later in 2026. The iOS version came first because Apple's Screen Time framework allows true OS-level enforcement, and we refused to ship the honor-system version.",
      },
      {
        question: "Is my data private?",
        answer:
          "Yes, structurally — not as a promise. Everything is processed on your device. Apple's Screen Time API is designed so that even LOCK IN never sees which apps you use or what you do in them; the system shares only aggregate, on-device data. There are no ads, no third-party trackers, and nothing to sell. Delete the app and the data goes with it.",
      },
      {
        question: "How do I cancel or get a refund?",
        answer:
          "Subscriptions are managed by Apple: Settings → your name → Subscriptions → LOCK IN → Cancel. Canceling keeps access until the end of the paid period. Refunds also go through Apple at reportaproblem.apple.com — they handle all App Store billing. If something went wrong on our side, email us first and we'll make it right.",
      },
    ],
  },
];

// FAQPage structured data — all questions, for rich results
const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqCategories.flatMap((c) =>
    c.faqs.map((f) => ({
      "@type": "Question",
      name: f.question,
      acceptedAnswer: { "@type": "Answer", text: f.answer },
    }))
  ),
};

export default function SupportPage() {
  return (
    <div className="pt-28">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
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
          <div className="mb-16 p-7 rounded-2xl border border-red-900/60 bg-red-950/30">
            <p className="text-[13px] font-semibold uppercase tracking-widest text-red-400 mb-3">
              Emergency? Need to unblock apps?
            </p>
            <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
              <strong className="text-white">Only use this as a last resort.</strong> If you need to unblock your apps urgently, deleting LOCK IN from your device will remove all active blocks. We strongly recommend against this — the block exists for a reason — but the option is yours if absolutely necessary.
            </p>
          </div>
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
