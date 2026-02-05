"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Brain, Sparkles } from "lucide-react";

const differences = [
  {
    icon: Shield,
    title: "Real Blocking",
    description:
      "Uses Apple's Screen Time API. No workarounds. No 'one more minute.' When it's blocked, it's blocked.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "Science-Based",
    description:
      "CBT techniques used by actual therapists. Not just a timer with motivational quotes.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Sparkles,
    title: "Habit Replacement",
    description:
      "We don't just block apps. We help you build better dopamine sources with healthier alternatives.",
    gradient: "from-green-500 to-green-600",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Rewired"
          title="How We're Different"
          subtitle="Other apps give you a timer and hope for the best. We actually help you break the addiction."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {differences.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -8 }}
              className="group relative"
            >
              {/* Card */}
              <div className="relative h-full p-8 rounded-2xl bg-background-secondary border border-border group-hover:border-primary/50 transition-all duration-300">
                {/* Glow Effect */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-primary-end/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative">
                  {/* Icon */}
                  <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${item.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <item.icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-semibold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-foreground-muted leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
