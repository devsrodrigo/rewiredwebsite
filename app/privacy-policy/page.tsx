import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "LOCK IN Privacy Policy: how we handle your data.",
};

const sections = [
  {
    h: "1. Introduction",
    body: [
      "LOCK IN (“we,” “our,” or “us”) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the “Service”).",
      "By using the Service, you agree to the collection and use of information in accordance with this policy.",
    ],
  },
  {
    h: "2. Information we collect",
    body: [
      "2.1 Information stored on your device. The LOCK IN app processes and stores the following information locally on your device:",
    ],
    list: [
      "Screen Time data accessed through Apple's Screen Time API",
      "App usage statistics and blocking schedules",
      "Personal goals and progress data",
      "App preferences and settings",
    ],
    after:
      "This data is stored exclusively on your device and is not transmitted to our servers unless you explicitly opt into cloud sync features.",
  },
  {
    h: "3. How we use it",
    list: [
      "Provide and maintain the Service",
      "Send product updates and important account information",
      "Respond to support requests",
      "Improve the Service based on aggregate, anonymous data",
      "Detect and prevent technical issues",
    ],
  },
  {
    h: "4. What we do not collect",
    list: [
      "The content of your messages, emails, or communications",
      "Photos, videos, or files",
      "Contacts or address book",
      "Keystrokes or screen recordings",
      "Precise location data",
      "Browsing history or search queries",
      "Specific app usage details from Screen Time",
    ],
  },
  {
    h: "5. Sharing and disclosure",
    body: [
      "We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:",
    ],
    list: [
      "Service providers bound by confidentiality (e.g., email delivery)",
      "Where required by law or to protect our rights",
      "In connection with a merger or acquisition, with notice to users",
    ],
  },
  {
    h: "6. Third-party processors",
    body: [
      "We engage third-party providers to support certain aspects of the Service. One such provider is Superwall (Superwall, Inc.), which assists with paywall and subscription management. Superwall acts as a Data Processor on our behalf under a Data Processing Agreement. They do not sell your personal information.",
    ],
  },
  {
    h: "7. Security",
    list: [
      "Local data is encrypted using iOS device encryption",
      "Any cloud sync uses end-to-end encryption",
      "HTTPS for all data transmission",
      "Access to user data is strictly limited",
    ],
  },
  {
    h: "8. Your rights",
    list: [
      "Access information we hold about you",
      "Export your data in a portable format",
      "Delete your data on request",
      "Opt out of optional data collection",
      "Withdraw previously given consent",
    ],
  },
  {
    h: "9. Children's privacy",
    body: [
      "LOCK IN is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.",
    ],
  },
  {
    h: "10. Changes",
    body: [
      "We may update this Privacy Policy from time to time. Significant changes will be communicated via email or in-app notification.",
    ],
  },
  {
    h: "11. Contact",
    body: ["Email: privacy@getrewired.org", "Website: getrewired.org/support"],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-28">
      <section className="py-16 md:py-24">
        <div className="container-app max-w-3xl">
          <p className="eyebrow mb-4">Legal</p>
          <h1 className="font-display text-[44px] md:text-[60px] font-semibold tracking-[-0.045em] text-white leading-[1.04]">
            Privacy policy
          </h1>
          <p className="mt-5 text-[14px] text-[color:var(--color-ink-4)]">Last updated: February 4, 2026</p>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-16 md:py-20">
        <div className="container-app max-w-3xl">
          <div className="space-y-12">
            {sections.map((s) => (
              <section key={s.h}>
                <h2 className="font-display text-[24px] md:text-[28px] font-semibold tracking-tight text-white mb-4">
                  {s.h}
                </h2>
                <div className="space-y-4 text-[16px] text-[color:var(--color-ink-3)] leading-[1.75]">
                  {s.body?.map((p, i) => <p key={i}>{p}</p>)}
                  {s.list && (
                    <ul className="list-disc pl-5 space-y-2">
                      {s.list.map((it, i) => (
                        <li key={i}>{it}</li>
                      ))}
                    </ul>
                  )}
                  {s.after && <p>{s.after}</p>}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
