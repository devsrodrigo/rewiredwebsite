import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Rewired Privacy Policy - How we handle your data and protect your privacy.",
};

export default function PrivacyPolicyPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Privacy Policy</h1>
          <p className="text-foreground-muted mb-8">Last updated: February 4, 2026</p>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Introduction</h2>
              <p className="text-foreground-muted leading-relaxed">
                Rewired (&quot;we,&quot; &quot;our,&quot; or &quot;us&quot;) is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our mobile application and website (collectively, the &quot;Service&quot;).
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Please read this Privacy Policy carefully. By using the Service, you agree to the collection and use of information in accordance with this policy.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Information We Collect</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">2.1 Information Stored on Your Device</h3>
              <p className="text-foreground-muted leading-relaxed">
                The Rewired app processes and stores the following information locally on your device:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Screen Time data accessed through Apple&apos;s Screen Time API</li>
                <li>App usage statistics and blocking schedules</li>
                <li>Personal goals and progress data</li>
                <li>App preferences and settings</li>
              </ul>
              <p className="text-foreground-muted leading-relaxed mt-4">
                This data is stored exclusively on your device and is not transmitted to our servers unless you explicitly opt into cloud sync features.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.2 Information You Provide</h3>
              <p className="text-foreground-muted leading-relaxed">
                We may collect information you voluntarily provide:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Email address when joining our waitlist or creating an account</li>
                <li>Name (optional)</li>
                <li>Feedback and support requests</li>
                <li>Survey responses</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">2.3 Automatically Collected Information</h3>
              <p className="text-foreground-muted leading-relaxed">
                With your consent, we may collect:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Device information (model, operating system version)</li>
                <li>Crash reports and error logs</li>
                <li>Anonymous usage statistics</li>
              </ul>
              <p className="text-foreground-muted leading-relaxed mt-4">
                All automatic collection is opt-in and can be disabled in app settings.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. How We Use Your Information</h2>
              <p className="text-foreground-muted leading-relaxed">
                We use collected information to:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Provide and maintain the Service</li>
                <li>Send you updates about the app launch (waitlist only)</li>
                <li>Respond to your support requests</li>
                <li>Improve the Service based on aggregate, anonymous data</li>
                <li>Detect and prevent technical issues</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Information We Do NOT Collect</h2>
              <p className="text-foreground-muted leading-relaxed">
                We do not collect or have access to:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>The content of your messages, emails, or communications</li>
                <li>Your photos, videos, or files</li>
                <li>Your contacts or address book</li>
                <li>Keystroke logging or screen recording</li>
                <li>Precise location data</li>
                <li>Browsing history or search queries</li>
                <li>Specific app usage details from Screen Time</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. Data Sharing and Disclosure</h2>
              <p className="text-foreground-muted leading-relaxed">
                We do not sell, trade, or rent your personal information. We may share information only in the following circumstances:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li><strong>Service Providers:</strong> With trusted third parties who assist in operating our Service (e.g., email delivery), bound by confidentiality agreements</li>
                <li><strong>Legal Requirements:</strong> When required by law or to protect our rights</li>
                <li><strong>Business Transfers:</strong> In connection with a merger or acquisition, with notice to users</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Data Security</h2>
              <p className="text-foreground-muted leading-relaxed">
                We implement appropriate technical and organizational measures to protect your information:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Local data is encrypted using iOS device encryption</li>
                <li>Any cloud sync uses end-to-end encryption</li>
                <li>We use HTTPS for all data transmission</li>
                <li>Access to user data is strictly limited</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Your Rights</h2>
              <p className="text-foreground-muted leading-relaxed">
                You have the right to:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li><strong>Access:</strong> Request information about data we hold about you</li>
                <li><strong>Export:</strong> Download your data in a portable format</li>
                <li><strong>Delete:</strong> Request deletion of your data</li>
                <li><strong>Opt-out:</strong> Disable optional data collection at any time</li>
                <li><strong>Withdraw Consent:</strong> Revoke previously given consent</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Children&apos;s Privacy</h2>
              <p className="text-foreground-muted leading-relaxed">
                Rewired is intended for users aged 13 and older. We do not knowingly collect personal information from children under 13. If you are a parent or guardian and believe your child has provided us with personal information, please contact us.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. International Data Transfers</h2>
              <p className="text-foreground-muted leading-relaxed">
                Since data is primarily stored on your device, international transfers are minimal. Any cloud services we use comply with applicable data protection regulations including GDPR.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Changes to This Policy</h2>
              <p className="text-foreground-muted leading-relaxed">
                We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the &quot;Last updated&quot; date. Significant changes will be communicated via email or in-app notification.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Contact Us</h2>
              <p className="text-foreground-muted leading-relaxed">
                If you have questions about this Privacy Policy, please contact us:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Email: privacy@getrewired.org</li>
                <li>Website: getrewired.org/support</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
