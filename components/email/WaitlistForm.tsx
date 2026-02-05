"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight, Check, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Input } from "@/components/ui/Input";

interface WaitlistFormProps {
  variant?: "default" | "inline" | "large";
  className?: string;
}

export function WaitlistForm({ variant = "default", className = "" }: WaitlistFormProps) {
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus("error");
      setErrorMessage("Please enter a valid email address");
      return;
    }

    setStatus("loading");
    
    // Simulate API call - replace with actual email service integration
    try {
      await new Promise((resolve) => setTimeout(resolve, 1500));
      setStatus("success");
      setEmail("");
    } catch {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  if (status === "success") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className={`flex items-center gap-3 p-4 rounded-2xl bg-accent/10 border border-accent/20 ${className}`}
      >
        <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
          <Check className="w-5 h-5 text-white" />
        </div>
        <div>
          <p className="font-semibold text-foreground">You&apos;re on the list!</p>
          <p className="text-sm text-foreground-muted">We&apos;ll notify you when Rewired launches.</p>
        </div>
      </motion.div>
    );
  }

  if (variant === "inline") {
    return (
      <form onSubmit={handleSubmit} className={`flex flex-col sm:flex-row gap-3 ${className}`}>
        <Input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (status === "error") setStatus("idle");
          }}
          error={status === "error" ? errorMessage : undefined}
          className="flex-1"
        />
        <Button type="submit" isLoading={status === "loading"} className="sm:w-auto">
          {status === "loading" ? "Joining..." : "Join Waitlist"}
          {status !== "loading" && <ArrowRight className="w-4 h-4" />}
        </Button>
      </form>
    );
  }

  if (variant === "large") {
    return (
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className={`w-full max-w-md mx-auto ${className}`}
      >
        <div className="flex flex-col gap-4">
          <Input
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (status === "error") setStatus("idle");
            }}
            error={status === "error" ? errorMessage : undefined}
            className="text-lg py-4"
          />
          <Button type="submit" size="lg" isLoading={status === "loading"} className="w-full">
            {status === "loading" ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Joining...
              </>
            ) : (
              <>
                Join the Waitlist
                <ArrowRight className="w-5 h-5" />
              </>
            )}
          </Button>
          <p className="text-xs text-foreground-muted text-center">
            No spam, ever. Unsubscribe anytime. We respect your privacy.
          </p>
        </div>
      </motion.form>
    );
  }

  return (
    <form onSubmit={handleSubmit} className={`flex flex-col gap-3 ${className}`}>
      <Input
        type="email"
        placeholder="Enter your email"
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
          if (status === "error") setStatus("idle");
        }}
        error={status === "error" ? errorMessage : undefined}
      />
      <Button type="submit" isLoading={status === "loading"}>
        {status === "loading" ? "Joining..." : "Join Waitlist"}
        {status !== "loading" && <ArrowRight className="w-4 h-4" />}
      </Button>
      <p className="text-xs text-foreground-muted text-center">
        No spam. Unsubscribe anytime.
      </p>
    </form>
  );
}
