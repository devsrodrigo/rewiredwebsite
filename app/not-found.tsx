"use client";

import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <div className="container-app max-w-md text-center py-24">
        <div className="font-display text-[120px] md:text-[160px] font-semibold tracking-[-0.05em] text-white leading-none">
          404
        </div>
        <h1 className="font-display text-[24px] font-semibold tracking-tight text-white mt-4 mb-3">
          Page not found.
        </h1>
        <p className="text-[15px] text-[color:var(--color-ink-3)] mb-10 leading-relaxed">
          You scrolled too far. Don&apos;t worry — happens to all of us.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <Link href="/" className="btn btn-primary">
            <Home className="w-4 h-4" />
            Home
          </Link>
          <button onClick={() => window.history.back()} className="btn btn-ghost">
            <ArrowLeft className="w-4 h-4" />
            Back
          </button>
        </div>
      </div>
    </div>
  );
}
