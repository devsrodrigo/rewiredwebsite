import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "Rewired Terms of Service - Rules and guidelines for using our app and services.",
};

export default function TermsPage() {
  return (
    <div className="pt-20">
      <section className="py-20 bg-background">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold text-foreground mb-4">Terms of Service</h1>
          <p className="text-foreground-muted mb-8">Last updated: February 4, 2026</p>

          <div className="prose prose-lg prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">1. Agreement to Terms</h2>
              <p className="text-foreground-muted leading-relaxed">
                By accessing or using Rewired (the &quot;Service&quot;), you agree to be bound by these Terms of Service (&quot;Terms&quot;). If you do not agree to these Terms, please do not use the Service.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">2. Eligibility</h2>
              <p className="text-foreground-muted leading-relaxed">
                You must be at least 13 years old to use Rewired. If you are between 13 and 18 years old, you must have permission from a parent or legal guardian to use the Service.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                By using the Service, you represent and warrant that you meet these eligibility requirements.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">3. Description of Service</h2>
              <p className="text-foreground-muted leading-relaxed">
                Rewired is a mobile application designed to help users manage their relationship with social media and digital devices. The Service includes:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Screen Time tracking and management</li>
                <li>App blocking features</li>
                <li>Habit replacement suggestions</li>
                <li>Progress tracking and analytics</li>
                <li>Educational content about digital wellness</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">4. Important Disclaimers</h2>
              
              <h3 className="text-xl font-semibold text-foreground mb-3">4.1 Not Medical Advice</h3>
              <p className="text-foreground-muted leading-relaxed">
                Rewired is not a medical device and does not provide medical advice, diagnosis, or treatment. The Service is designed as a self-help tool and should not be used as a substitute for professional medical advice, psychological counseling, or treatment.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.2 Not Therapy</h3>
              <p className="text-foreground-muted leading-relaxed">
                While Rewired incorporates techniques inspired by Cognitive Behavioral Therapy (CBT), using the app does not constitute therapy or establish a therapist-client relationship. If you are experiencing mental health issues, please seek help from a qualified mental health professional.
              </p>

              <h3 className="text-xl font-semibold text-foreground mb-3 mt-6">4.3 When to Seek Professional Help</h3>
              <p className="text-foreground-muted leading-relaxed">
                You should seek professional help if:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Your phone or social media use is causing significant distress or impairment</li>
                <li>You experience symptoms of depression, anxiety, or other mental health conditions</li>
                <li>You have thoughts of self-harm or suicide</li>
                <li>Your digital habits are affecting your physical health, relationships, or work</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">5. User Accounts</h2>
              <p className="text-foreground-muted leading-relaxed">
                If you create an account, you are responsible for:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Maintaining the confidentiality of your account credentials</li>
                <li>All activities that occur under your account</li>
                <li>Notifying us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">6. Acceptable Use</h2>
              <p className="text-foreground-muted leading-relaxed">
                You agree not to:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Use the Service for any illegal purpose</li>
                <li>Attempt to bypass or circumvent any security features</li>
                <li>Reverse engineer, decompile, or disassemble the app</li>
                <li>Use the Service to harm, harass, or deceive others</li>
                <li>Share your account credentials with others</li>
                <li>Use automated systems to access the Service</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">7. Intellectual Property</h2>
              <p className="text-foreground-muted leading-relaxed">
                The Service and its original content, features, and functionality are owned by Rewired and are protected by international copyright, trademark, patent, trade secret, and other intellectual property laws.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">8. Subscriptions and Payments</h2>
              <p className="text-foreground-muted leading-relaxed">
                Some features of the Service may require a paid subscription. By subscribing:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>You agree to pay all fees associated with your subscription</li>
                <li>Subscriptions automatically renew unless cancelled before the renewal date</li>
                <li>Refunds are handled according to the policies of the applicable app store (Apple App Store)</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">9. Limitation of Liability</h2>
              <p className="text-foreground-muted leading-relaxed">
                To the maximum extent permitted by law, Rewired shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including but not limited to loss of profits, data, or use, arising out of or in connection with the Service.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                Our total liability for any claim arising from the Service shall not exceed the amount you paid to us in the 12 months preceding the claim.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">10. Warranty Disclaimer</h2>
              <p className="text-foreground-muted leading-relaxed">
                The Service is provided &quot;as is&quot; and &quot;as available&quot; without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability, fitness for a particular purpose, and non-infringement.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">11. Termination</h2>
              <p className="text-foreground-muted leading-relaxed">
                We may terminate or suspend your access to the Service immediately, without prior notice, for any reason, including breach of these Terms.
              </p>
              <p className="text-foreground-muted leading-relaxed">
                You may terminate your use of the Service at any time by uninstalling the app and, if applicable, cancelling your subscription.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">12. Changes to Terms</h2>
              <p className="text-foreground-muted leading-relaxed">
                We reserve the right to modify these Terms at any time. We will provide notice of significant changes through the app or via email. Your continued use of the Service after changes constitutes acceptance of the modified Terms.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">13. Governing Law</h2>
              <p className="text-foreground-muted leading-relaxed">
                These Terms shall be governed by and construed in accordance with the laws of the United States, without regard to its conflict of law provisions.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-foreground mb-4">14. Contact Us</h2>
              <p className="text-foreground-muted leading-relaxed">
                If you have questions about these Terms, please contact us:
              </p>
              <ul className="list-disc pl-6 text-foreground-muted space-y-2">
                <li>Email: legal@getrewired.org</li>
                <li>Website: getrewired.org/support</li>
              </ul>
            </section>
          </div>
        </div>
      </section>
    </div>
  );
}
