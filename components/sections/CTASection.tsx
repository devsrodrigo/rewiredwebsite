"use client";

import { motion } from "framer-motion";
import { ArrowRight, Apple } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { APP_STORE_URL } from "@/lib/utils";

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
            One Setup. 14 Days.{" "}
            <span className="gradient-text">Done.</span>
          </h2>
          <p className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto">
            Stop thinking about cutting back.{" "}
            <span className="text-foreground font-medium">Lock the apps, do the detox, and get on with your life.</span>
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <Button
            type="button"
            size="lg"
            variant="primary"
            className="w-full sm:w-auto"
            onClick={() => window.open(APP_STORE_URL, "_blank", "noopener,noreferrer")}
          >
            Download Now
          </Button>
        </motion.div>

        {/* App Store Badge Placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <div className="flex items-center gap-3 px-6 py-3 rounded-xl bg-background-secondary border border-border">
            <Apple className="w-8 h-8" />
            <div className="text-left">
              <p className="text-xs text-foreground-muted">Available Now on</p>
              <p className="font-semibold text-foreground">App Store</p>
            </div>
          </div>
          <p className="text-foreground-muted text-sm">Download now</p>
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
