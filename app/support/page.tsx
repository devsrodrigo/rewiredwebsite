import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { MessageCircle, Mail, ChevronDown } from "lucide-react";

export const metadata: Metadata = {
  title: "Support",
  description:
    "Get help with Rewired. FAQs, troubleshooting, and contact information for the Rewired support team.",
};

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "When will Rewired be available?",
        answer:
          "Rewired is launching Spring 2026 on iOS. Join our waitlist to be notified the moment we launch and get early access.",
      },
      {
        question: "Is Rewired free?",
        answer:
          "Rewired will offer a free tier with core features. Premium features will be available through a subscription. Waitlist members get premium free for 3 months.",
      },
      {
        question: "What iOS version do I need?",
        answer:
          "Rewired will require iOS 16 or later to access Screen Time API features. We recommend updating to the latest iOS version for the best experience.",
      },
      {
        question: "Do I need Screen Time enabled?",
        answer:
          "Yes, Rewired integrates with Apple's Screen Time to provide accurate tracking and true app blocking. You'll be guided through setup when you first open the app.",
      },
    ],
  },
  {
    title: "Using Rewired",
    faqs: [
      {
        question: "How does the blocking work?",
        answer:
          "Rewired uses Apple's Screen Time API to create genuine app limits. When an app is blocked, you cannot access it. There's no 'one more minute' button to bypass. This is by design.",
      },
      {
        question: "Can I override blocks in an emergency?",
        answer:
          "For accountability, blocks cannot be easily overridden. However, you can set up trusted contacts who can unlock apps in genuine emergencies, or use our scheduled unlock feature for planned breaks.",
      },
      {
        question: "What are replacement habits?",
        answer:
          "When you try to open a blocked app, Rewired suggests alternative activities based on your preferences: exercise, reading, journaling, calling a friend, etc. These help you build healthier dopamine sources.",
      },
      {
        question: "How do the 14-day programs work?",
        answer:
          "Our 14-day detox completely blocks your selected apps for the full period. After the detox, you transition to controlled daily access with time budgets you set yourself.",
      },
    ],
  },
  {
    title: "Privacy & Security",
    faqs: [
      {
        question: "Is my data private?",
        answer:
          "Yes, absolutely. All your data is processed and stored on your device only. We don't have access to your Screen Time data, browsing history, or usage patterns.",
      },
      {
        question: "Where is my data stored?",
        answer:
          "All data stays on your iPhone. We don't have servers storing your personal information. Any optional cloud sync (like backing up settings) is encrypted end-to-end.",
      },
      {
        question: "Can you see what apps I use?",
        answer:
          "No. Rewired uses Apple's Screen Time API which processes everything on-device. We receive aggregate statistics (like total screen time) but never specific app usage or content.",
      },
      {
        question: "How do I delete my data?",
        answer:
          "You can delete all Rewired data from within the app settings. Since data is stored locally, deleting the app also removes all associated data from your device.",
      },
    ],
  },
  {
    title: "Troubleshooting",
    faqs: [
      {
        question: "Screen Time isn't syncing",
        answer:
          "Make sure Screen Time is enabled in your iPhone Settings. If issues persist, try revoking and re-granting Screen Time access to Rewired in Settings > Privacy > Screen Time.",
      },
      {
        question: "Blocks aren't working",
        answer:
          "Verify that you've granted all necessary permissions during setup. Check that the apps you want to block are correctly selected in Rewired settings.",
      },
      {
        question: "The app is using too much battery",
        answer:
          "Rewired is optimized to use minimal battery by leveraging Apple's native Screen Time. If you notice high battery usage, try reinstalling the app or contact support.",
      },
      {
        question: "I forgot my app PIN",
        answer:
          "For security, PIN recovery requires verification. Use the 'Forgot PIN' option in the app and follow the recovery process, which may involve trusted contacts or waiting period.",
      },
    ],
  },
];

export default function SupportPage() {
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
            badge="Support"
            title="We're Here to Help"
            subtitle="Find answers to common questions or get in touch with our support team."
          />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {faqCategories.map((category, categoryIndex) => (
              <div key={categoryIndex}>
                <h2 className="text-2xl font-bold text-foreground mb-6">
                  {category.title}
                </h2>
                <div className="space-y-4">
                  {category.faqs.map((faq, faqIndex) => (
                    <details
                      key={faqIndex}
                      className="group bg-background rounded-2xl border border-border overflow-hidden"
                    >
                      <summary className="flex items-center justify-between p-6 cursor-pointer list-none">
                        <span className="font-medium text-foreground pr-4">
                          {faq.question}
                        </span>
                        <ChevronDown className="w-5 h-5 text-foreground-muted group-open:rotate-180 transition-transform" />
                      </summary>
                      <div className="px-6 pb-6 pt-0">
                        <p className="text-foreground-muted leading-relaxed">
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

      {/* Contact Section */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Still Need Help?"
            subtitle="Our support team is here for you"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            <a
              href="mailto:info@getrewired.org"
              className="p-6 rounded-2xl bg-background-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <Mail className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Email Support
              </h3>
              <p className="text-foreground-muted mb-4">
                Send us an email and we&apos;ll respond within 24 hours.
              </p>
              <span className="text-primary font-medium">
                info@getrewired.org
              </span>
            </a>

            <a
              href="https://instagram.com/getrewiredapp"
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-2xl bg-background-secondary border border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mb-4 group-hover:scale-105 transition-transform">
                <MessageCircle className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground mb-2">
                Social Media
              </h3>
              <p className="text-foreground-muted mb-4">
                DM us on Instagram for quick questions.
              </p>
              <span className="text-primary font-medium">@getrewiredapp</span>
            </a>
          </div>

          <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/20 text-center">
            <p className="text-foreground-muted">
              <strong className="text-foreground">Response Times:</strong> We
              typically respond to emails within 24 hours on business days.
              Social media DMs may take longer.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
