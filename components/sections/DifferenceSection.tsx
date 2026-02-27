"use client";

import { motion } from "framer-motion";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Shield, Brain, Sparkles } from "lucide-react";

const differences = [
  {
    icon: Shield,
    title: "Hard Lock. No Bypass.",
    description:
      "OS-level blocking through Apple's Screen Time. Not a website filter. Not an honor system. No exception window. No 'just this once.' Your phone says no.",
    gradient: "from-blue-500 to-blue-600",
  },
  {
    icon: Brain,
    title: "14-Day Complete Detox",
    description:
      "Your selected apps go dark for 14 days. Your dopamine receptors start resetting within 10 days. By day 14, the constant pull is noticeably weaker.",
    gradient: "from-purple-500 to-purple-600",
  },
  {
    icon: Sparkles,
    title: "Echo, Your AI Coach",
    description:
      "Available when cravings hit, including at 11pm when willpower is lowest. Trained to help you through the hardest moments.",
    gradient: "from-green-500 to-green-600",
  },
];

export function DifferenceSection() {
  return (
    <section className="py-20 md:py-32 bg-background relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          badge="Why Rewired"
          title="This Isn't a Wellness App"
          subtitle="No journaling prompts. No mindfulness reminders. No 'be present' notifications. Rewired blocks your apps at the hardware level and lets your brain recover."
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
