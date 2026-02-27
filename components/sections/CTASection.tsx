"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WaitlistForm } from "@/components/email/WaitlistForm";

export function CTASection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/20 to-primary-end/20 rounded-full blur-3xl" />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
            One Decision.{" "}
            <span className="gradient-text">Made Once. Enforced.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto">
            The ambitious version of you doesn&apos;t need more information. Doesn&apos;t need more motivation.{" "}
            <span className="text-foreground font-medium">You weren&apos;t built for the feed. You were built for the hard thing.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <WaitlistForm variant="large" />
        </motion.div>

        {/* App Store Badge Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-background-secondary border border-border opacity-60">
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <p className="text-xs text-foreground-muted">Coming Soon on</p>
              <p className="font-semibold text-foreground">App Store</p>
            </div>
          </div>
          <p className="text-foreground-muted text-sm">
            Launching Spring 2026
          </p>
        </motion.div>

        {/* Secondary Action */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-8"
        >
          <Link href="/how-it-works">
            <Button variant="ghost" className="group">
              See How It Works
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
