"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Eye, ShieldOff, RefreshCw, CheckCircle } from "lucide-react";

const steps = [
  {
    number: "01",
    icon: ShieldOff,
    title: "Choose & Lock",
    description:
      "Select the apps you want blocked. Rewired locks them at the OS level via Apple's Screen Time. Hard lock. No workarounds. No exceptions.",
    color: "from-blue-500 to-cyan-500",
  },
  {
    number: "02",
    icon: RefreshCw,
    title: "14-Day Detox",
    description:
      "Go dark. The dopamine receptors start resetting within 10 days. You stop negotiating with yourself at 11pm. The circuit doesn't get fed.",
    color: "from-purple-500 to-pink-500",
  },
  {
    number: "03",
    icon: Eye,
    title: "Controlled Access",
    description:
      "After detox: a daily time budget — 15, 30, or 60 minutes — distributed across your apps. Controlled access on your terms. Not elimination. Dominance.",
    color: "from-orange-500 to-red-500",
  },
  {
    number: "04",
    icon: CheckCircle,
    title: "New Baseline",
    description:
      "By day 45, you sit down to work and you work. Your phone is a tool again. The ambitious version of you has room to exist.",
    color: "from-green-500 to-emerald-500",
  },
];

export function HowItWorksSection() {
  return (
    <section className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="The Process"
          title="Four Steps to a Different Brain"
          subtitle="One decision, made once, enforced by hardware. No willpower required — that's the whole point."
        />

        <div className="mt-16 space-y-8 md:space-y-0 md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-8">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative"
            >
              {/* Connector Line (Desktop) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-12 left-[calc(50%+2rem)] w-[calc(100%-4rem)] h-px">
                  <div className="w-full h-full bg-gradient-to-r from-border via-primary/30 to-border" />
                </div>
              )}

              {/* Card */}
              <div className="relative p-6 rounded-2xl bg-background border border-border hover:border-primary/50 transition-all duration-300">
                {/* Step Number */}
                <div className="absolute -top-3 -left-3 w-10 h-10 rounded-xl gradient-bg flex items-center justify-center text-white font-bold text-sm shadow-lg">
                  {step.number}
                </div>

                {/* Icon */}
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${step.color} flex items-center justify-center mb-4 mx-auto`}
                >
                  <step.icon className="w-8 h-8 text-white" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-semibold text-foreground text-center mb-3">
                  {step.title}
                </h3>
                <p className="text-foreground-muted text-center leading-relaxed text-sm">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
