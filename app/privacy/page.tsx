import { Metadata } from "next";
import { SectionHeading } from "@/components/ui";
import { Shield, Eye, Database, Trash2, Lock, Server } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Your data. Your device. Period. Learn about Rewired's privacy-first approach and how we protect your information.",
};

const promises = [
  {
    icon: Database,
    title: "All Data On-Device",
    description:
      "Your Screen Time data, usage patterns, and personal settings are processed and stored entirely on your iPhone. We never see them.",
  },
  {
    icon: Server,
    title: "No Cloud Sync Required",
    description:
      "Core features work completely offline. Optional cloud features (like device sync) use end-to-end encryption.",
  },
  {
    icon: Eye,
    title: "No Tracking",
    description:
      "We don't use tracking pixels, fingerprinting, or any method to identify or follow you across the web.",
  },
  {
    icon: Shield,
    title: "No Data Selling",
    description:
      "We will never sell your data to advertisers, data brokers, or anyone else. Ever. It's in our terms.",
  },
];

const dataDetails = [
  {
    category: "What We Don't Collect",
    items: [
      "Your Screen Time data or specific app usage",
      "Content from your messages, photos, or files",
      "Your contacts or address book",
      "Keystroke logging or screen recording",
      "Precise location data",
      "Browsing history or search queries",
    ],
  },
  {
    category: "What We May Collect",
    items: [
      "Email address (if you sign up for waitlist/account)",
      "General device info for bug fixes (iOS version, device model)",
      "Crash reports (opt-in only)",
      "Anonymous usage statistics (opt-in only)",
      "Feedback you voluntarily submit",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-end/10 rounded-full blur-3xl" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <div className="w-20 h-20 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-8">
              <Lock className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Your Data. Your Device.{" "}
              <span className="gradient-text">Period.</span>
            </h1>
            <p className="text-xl text-foreground-muted">
              We built Rewired for people escaping apps that exploit their data.
              We&apos;re not going to turn around and do the same thing.
            </p>
          </div>
        </div>
      </section>

      {/* Privacy Promises */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Our Privacy Promise"
            subtitle="These aren't marketing buzzwords. This is how we actually operate."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-12">
            {promises.map((promise, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center mb-4">
                  <promise.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-foreground mb-2">
                  {promise.title}
                </h3>
                <p className="text-foreground-muted">{promise.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Details */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {dataDetails.map((section, index) => (
              <div key={index}>
                <h2 className="text-xl font-bold text-foreground mb-6">
                  {section.category}
                </h2>
                <ul className="space-y-3">
                  {section.items.map((item, itemIndex) => (
                    <li
                      key={itemIndex}
                      className="flex items-start gap-3 text-foreground-muted"
                    >
                      <span
                        className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${
                          index === 0
                            ? "bg-accent/20 text-accent"
                            : "bg-primary/20 text-primary"
                        }`}
                      >
                        {index === 0 ? "✗" : "✓"}
                      </span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Your Rights */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading title="Your Rights" />

          <div className="mt-12 space-y-6">
            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Database className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Data Export
                  </h3>
                  <p className="text-foreground-muted">
                    You can export all your data from the app at any time in a
                    human-readable format.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Trash2 className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Data Deletion
                  </h3>
                  <p className="text-foreground-muted">
                    Delete all your data from within the app. Since it&apos;s
                    stored locally, uninstalling the app also removes everything.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-background border border-border">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Opt-Out Controls
                  </h3>
                  <p className="text-foreground-muted">
                    All optional data collection (analytics, crash reports) can
                    be disabled in settings. Core features work without any data
                    sharing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Legal Link */}
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-foreground mb-4">
            Legal Privacy Policy
          </h2>
          <p className="text-foreground-muted mb-8">
            For the full legal privacy policy with all the detailed legalese,
            see our official Privacy Policy document.
          </p>
          <Link
            href="/privacy-policy"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full gradient-bg text-white font-medium hover:opacity-90 transition-opacity"
          >
            Read Full Privacy Policy
          </Link>
        </div>
      </section>
    </div>
  );
}
