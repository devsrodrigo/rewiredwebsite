"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Users, ShieldCheck, HeartHandshake } from "lucide-react";

const trustItems = [
  {
    icon: Users,
    value: "10,000+",
    label: "on the waitlist",
  },
  {
    icon: ShieldCheck,
    value: "Privacy-first",
    label: "no ads, no data selling",
  },
  {
    icon: HeartHandshake,
    value: "Built by students",
    label: "who broke free themselves",
  },
];

export function SocialProofSection() {
  return (
    <section className="py-20 md:py-32 bg-background-secondary relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Join Us"
          title="The People Who Already Decided"
          subtitle="Two paths. One decision. Thousands of people chose the harder one — and got their time back."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16">
          {trustItems.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-8 rounded-2xl bg-background border border-border text-center group hover:border-primary/50 transition-all duration-300"
            >
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative">
                <div className="w-14 h-14 rounded-2xl gradient-bg flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-3xl font-bold text-foreground mb-1">
                  {item.value}
                </div>
                <div className="text-foreground-muted">{item.label}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-16 p-8 rounded-2xl bg-gradient-to-br from-primary/10 to-primary-end/10 border border-primary/20 text-center"
        >
          <p className="text-xl text-foreground italic mb-4">
            &ldquo;I deleted TikTok three times. It came back three times. Rewired was the first thing that actually held. I have 2 hours a day back and I don&apos;t know what I was doing before.&rdquo;
          </p>
          <p className="text-foreground-muted">— Early Beta User</p>
        </motion.div>
      </div>
    </section>
  );
}
