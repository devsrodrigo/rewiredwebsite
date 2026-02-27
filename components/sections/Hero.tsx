"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/Button";
import { WaitlistForm } from "@/components/email/WaitlistForm";

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Animated Background */}
      <div className="absolute inset-0 bg-background">
        {/* Gradient Orbs */}
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-primary-end/20 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-primary/10 to-primary-end/10 rounded-full blur-3xl" />
        
        {/* Grid Pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(to right, currentColor 1px, transparent 1px),
              linear-gradient(to bottom, currentColor 1px, transparent 1px)`,
            backgroundSize: '60px 60px'
          }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-medium mb-8">
              <Sparkles className="w-4 h-4" />
              App launching Spring 2026
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-[1.1]"
          >
            You Already Know{" "}
            <span className="gradient-text">Something Is Wrong</span>
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg md:text-xl text-foreground-muted mb-10 max-w-2xl mx-auto leading-relaxed"
          >
            Not in a vague &ldquo;I should probably scroll less&rdquo; way. In the way where your hand moves to your phone before a single thought forms.{" "}
            <span className="text-foreground font-medium">Rewired removes the decision entirely.</span>
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12"
          >
            <WaitlistForm variant="inline" className="w-full max-w-md" />
          </motion.div>

          {/* Secondary CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Link href="/how-it-works">
              <Button variant="ghost" className="group">
                See How It Works
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </motion.div>

          {/* App Mockup Preview */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="mt-16 relative"
          >
            <div className="relative mx-auto w-full max-w-xs">
              {/* Phone Frame */}
              <div className="relative bg-background-secondary rounded-[3rem] p-3 shadow-2xl border border-border">
                {/* Notch */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-7 bg-background rounded-b-2xl z-10" />
                
                {/* Screen */}
                <div className="relative bg-background rounded-[2.25rem] overflow-hidden aspect-[9/19.5]">
                  {/* App UI Preview */}
                  <div className="absolute inset-0 p-6 flex flex-col">
                    {/* Status Bar */}
                    <div className="flex justify-between items-center text-xs text-foreground-muted mb-6 pt-4">
                      <span>9:41</span>
                      <div className="flex gap-1">
                        <div className="w-4 h-2 bg-foreground-muted rounded-sm" />
                        <div className="w-4 h-2 bg-foreground-muted rounded-sm" />
                        <div className="w-6 h-2 bg-accent rounded-sm" />
                      </div>
                    </div>
                    
                    {/* App Content */}
                    <div className="text-center mb-6">
                      <p className="text-foreground-muted text-sm mb-1">Today&apos;s Screen Time</p>
                      <p className="text-4xl font-bold gradient-text">2h 14m</p>
                      <p className="text-accent text-sm mt-1">↓ 43% from yesterday</p>
                    </div>
                    
                    {/* Progress Ring */}
                    <div className="flex justify-center mb-6">
                      <div className="relative w-32 h-32">
                        <svg className="w-full h-full -rotate-90" viewBox="0 0 100 100">
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="8"
                            className="text-border"
                          />
                          <circle
                            cx="50"
                            cy="50"
                            r="45"
                            fill="none"
                            stroke="url(#gradient)"
                            strokeWidth="8"
                            strokeLinecap="round"
                            strokeDasharray="283"
                            strokeDashoffset="85"
                          />
                          <defs>
                            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
                              <stop offset="0%" stopColor="#6366F1" />
                              <stop offset="100%" stopColor="#8B5CF6" />
                            </linearGradient>
                          </defs>
                        </svg>
                        <div className="absolute inset-0 flex items-center justify-center">
                          <span className="text-2xl font-bold text-foreground">70%</span>
                        </div>
                      </div>
                    </div>
                    
                    {/* Blocked Apps */}
                    <div className="space-y-2 flex-1">
                      <p className="text-xs text-foreground-muted mb-2">Currently Blocked</p>
                      <div className="flex gap-2">
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-pink-500 to-red-500" />
                        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-500 to-blue-600" />
                        <div className="w-10 h-10 rounded-xl bg-black" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Glow Effect */}
              <div className="absolute inset-0 rounded-[3rem] bg-gradient-to-br from-primary/20 to-primary-end/20 blur-3xl -z-10 scale-110" />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-6 h-10 rounded-full border-2 border-foreground-muted flex items-start justify-center p-2"
        >
          <motion.div className="w-1.5 h-1.5 rounded-full bg-foreground-muted" />
        </motion.div>
      </motion.div>
    </section>
  );
}
