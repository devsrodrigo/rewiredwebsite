"use client";

import Link from "next/link";
import { Button } from "@/components/ui";
import { Home, ArrowLeft } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="max-w-md mx-auto px-4 text-center">
        {/* 404 Number */}
        <div className="text-9xl font-bold gradient-text mb-4">404</div>

        {/* Message */}
        <h1 className="text-2xl font-bold text-foreground mb-4">
          Page Not Found
        </h1>
        <p className="text-foreground-muted mb-8">
          Looks like you scrolled too far. Don&apos;t worry, we&apos;ve all been there.
          Let&apos;s get you back on track.
        </p>

        {/* Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link href="/">
            <Button>
              <Home className="w-4 h-4" />
              Go Home
            </Button>
          </Link>
          <button
            onClick={() => window.history.back()}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full text-foreground-muted hover:text-foreground transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Go Back
          </button>
        </div>
      </div>
    </div>
  );
}
