import { Metadata } from "next";
import Link from "next/link";
import { SectionHeading } from "@/components/ui";
import { Shield, Eye, Database, Trash2, Server, Lock } from "lucide-react";

export const metadata: Metadata = {
  title: "Privacy",
  description:
    "Your data. Your device. Period. How LOCK IN protects your information.",
};

const promises = [
  {
    icon: Database,
    title: "On-device, by default",
    body: "Your screen time and usage stay on your iPhone. We never see them.",
  },
  {
    icon: Server,
    title: "No required cloud",
    body: "Core features work offline. Optional cloud is end-to-end encrypted.",
  },
  {
    icon: Eye,
    title: "No tracking",
    body: "No pixels, no fingerprinting, no following you around the web.",
  },
  {
    icon: Shield,
    title: "No selling, ever",
    body: "We don't sell data to advertisers or brokers. It's in our terms.",
  },
];

const dataDetails = [
  {
    label: "What we don't collect",
    sign: "—",
    items: [
      "Specific Screen Time content or app usage",
      "Messages, photos, or files",
      "Contacts or address book",
      "Keystrokes or screen recordings",
      "Precise location",
      "Browsing history",
    ],
  },
  {
    label: "What we may collect",
    sign: "+",
    items: [
      "Email if you sign up for the newsletter",
      "Device model and OS version for bug fixes",
      "Opt-in crash reports",
      "Opt-in anonymous usage stats",
      "Feedback you choose to send",
    ],
  },
];

export default function PrivacyPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app max-w-3xl">
          <div className="w-12 h-12 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-2)] flex items-center justify-center mb-7">
            <Lock className="w-5 h-5 text-white" strokeWidth={1.75} />
          </div>
          <h1 className="font-display text-[44px] md:text-[64px] font-semibold tracking-[-0.045em] text-white leading-[1.04]">
            Your data. Your device.
          </h1>
          <p className="mt-6 text-[18px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[55ch]">
            We built LOCK IN for people escaping apps that exploit their data. We are not going to
            turn around and do the same thing.
          </p>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-20 md:py-28 bg-[color:var(--color-bg-1)]">
        <div className="container-app">
          <SectionHeading eyebrow="The promise" title="Not buzzwords. Operating principles." align="left" />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-14">
            {promises.map((p) => (
              <div key={p.title} className="surface p-7">
                <div className="w-10 h-10 rounded-xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-3)] flex items-center justify-center mb-5">
                  <p.icon className="w-5 h-5 text-white" strokeWidth={1.75} />
                </div>
                <h3 className="text-[18px] font-semibold text-white tracking-tight mb-2">{p.title}</h3>
                <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-20 md:py-28">
        <div className="container-app max-w-4xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {dataDetails.map((d) => (
              <div key={d.label}>
                <h2 className="font-display text-[22px] font-semibold tracking-tight text-white mb-6">
                  {d.label}
                </h2>
                <ul className="space-y-3">
                  {d.items.map((item) => (
                    <li key={item} className="flex items-start gap-3 text-[15px] text-[color:var(--color-ink-2)]">
                      <span className="w-5 h-5 rounded-full border border-[color:var(--color-line-2)] flex items-center justify-center flex-shrink-0 mt-0.5 text-[12px] text-[color:var(--color-ink-3)]">
                        {d.sign}
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-20 md:py-28 bg-[color:var(--color-bg-1)]">
        <div className="container-app max-w-4xl">
          <SectionHeading eyebrow="Your rights" title="What you can do." align="left" />
          <div className="mt-12 space-y-4">
            <div className="surface p-6 flex items-start gap-4">
              <Database className="w-5 h-5 text-white mt-1" />
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-1">Export</h3>
                <p className="text-[14px] text-[color:var(--color-ink-3)] leading-relaxed">
                  Export everything from inside the app at any time.
                </p>
              </div>
            </div>
            <div className="surface p-6 flex items-start gap-4">
              <Trash2 className="w-5 h-5 text-white mt-1" />
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-1">Delete</h3>
                <p className="text-[14px] text-[color:var(--color-ink-3)] leading-relaxed">
                  Wipe data from inside the app, or just uninstall it.
                </p>
              </div>
            </div>
            <div className="surface p-6 flex items-start gap-4">
              <Shield className="w-5 h-5 text-white mt-1" />
              <div>
                <h3 className="text-[17px] font-semibold text-white mb-1">Opt out</h3>
                <p className="text-[14px] text-[color:var(--color-ink-3)] leading-relaxed">
                  All optional analytics can be disabled in settings.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-16">
        <div className="container-app max-w-3xl text-center">
          <h2 className="font-display text-[24px] md:text-[32px] font-semibold tracking-tight text-white mb-3">
            The legal version
          </h2>
          <p className="text-[15px] text-[color:var(--color-ink-3)] mb-6">
            For the full policy with all the legalese, read the official document.
          </p>
          <Link href="/privacy-policy" className="btn btn-secondary">
            Read full privacy policy
          </Link>
        </div>
      </section>
    </div>
  );
}
