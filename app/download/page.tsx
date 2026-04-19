import { Metadata } from "next";
import { Apple, Bell, Gift, Users, Sparkles } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import DownloadClient from "./DownloadClient";

export const metadata: Metadata = {
  title: "Download LOCK IN",
  description:
    "Download LOCK IN now on the App Store to stop social media and reset your phone habits.",
};

const benefits = [
  {
    icon: Gift,
    title: "Free core access",
    description: "Use LOCK IN for free with essential app blocking and progress tracking.",
  },
  {
    icon: Sparkles,
    title: "Premium tools",
    description: "Unlock smart routines, deeper insights, and advanced controls with premium.",
  },
  {
    icon: Bell,
    title: "Launch-ready",
    description: "LOCK IN is live today on the App Store for immediate download.",
  },
  {
    icon: Users,
    title: "Trusted by users",
    description: "Join thousands of people who are reclaiming time and attention.",
  },
];

export default function DownloadPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-background relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-end/20 rounded-full blur-3xl animate-float-delayed" />
        </div>

        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 border border-accent/20 text-accent text-sm font-medium mb-8">
            <Sparkles className="w-4 h-4" />
            Available Now
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Download LOCK IN on the <span className="gradient-text">App Store</span>
          </h1>

          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
            LOCK IN is available now on iOS. Start your 14-day detox, block distraction apps, and reclaim your focus today.
          </p>

          <DownloadClient />

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-background-secondary border border-border">
              <Apple className="w-10 h-10 text-foreground" />
              <div className="text-left">
                <p className="text-xs text-foreground-muted">Available Now on</p>
                <p className="font-semibold text-foreground text-lg">App Store</p>
              </div>
            </div>
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-background-secondary border border-border opacity-50">
              <svg className="w-10 h-10 text-foreground" viewBox="0 0 24 24" fill="currentColor">
                <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z"/>
              </svg>
              <div className="text-left">
                <p className="text-xs text-foreground-muted">Later in 2026</p>
                <p className="font-semibold text-foreground text-lg">Google Play</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 bg-background-secondary">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            title="Why LOCK IN?"
            subtitle="A smarter way to reset your phone habits."
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {benefits.map((benefit, index) => (
              <div
                key={index}
                className="p-6 rounded-2xl bg-background border border-border text-center"
              >
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {benefit.title}
                </h3>
                <p className="text-foreground-muted text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

    </div>
  );
}
