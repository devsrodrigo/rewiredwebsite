import { Metadata } from "next";
import { Apple, Bell, Gift, Users, Sparkles, ArrowRight } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import { WaitlistForm } from "@/components/email/WaitlistForm";

export const metadata: Metadata = {
  title: "Join the Waitlist",
  description:
    "Be the first to break free. Join the Rewired waitlist for early access to the app that helps you overcome social media addiction.",
};

const benefits = [
  {
    icon: Gift,
    title: "Early Access",
    description: "Be first to download when we launch",
  },
  {
    icon: Sparkles,
    title: "Free Premium Features",
    description: "Waitlist members get premium features free for 3 months",
  },
  {
    icon: Bell,
    title: "Launch Notification",
    description: "We'll email you the moment Rewired is available",
  },
  {
    icon: Users,
    title: "Shape the Product",
    description: "Opportunity to join our beta program and give feedback",
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
            Launching Spring 2026
          </span>

          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
            Be First to <span className="gradient-text">Break Free</span>
          </h1>

          <p className="text-xl text-foreground-muted mb-12 max-w-2xl mx-auto">
            Join 10,000+ people on the waitlist for Rewired. Get early access, 
            premium features free for 3 months, and be part of the movement.
          </p>

          {/* Waitlist Form */}
          <div className="max-w-md mx-auto mb-16">
            <WaitlistForm variant="large" />
          </div>

          {/* App Store Placeholder */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <div className="flex items-center gap-3 px-6 py-4 rounded-2xl bg-background-secondary border border-border">
              <Apple className="w-10 h-10 text-foreground" />
              <div className="text-left">
                <p className="text-xs text-foreground-muted">Coming Soon on</p>
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
            title="Why Join the Waitlist?"
            subtitle="Exclusive benefits for early supporters"
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

      {/* Social Sharing */}
      <section className="py-20 bg-background">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
            Know Someone Who Needs This?
          </h2>
          <p className="text-foreground-muted mb-8">
            Share Rewired with a friend who&apos;s struggling with social media addiction.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1DA1F2] text-white font-medium hover:opacity-90 transition-opacity">
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
              Share on Twitter
            </button>
            <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background-secondary border border-border text-foreground font-medium hover:bg-border transition-colors">
              <ArrowRight className="w-5 h-5" />
              Copy Link
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
