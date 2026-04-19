"use client";

import { Button } from "@/components/ui/Button";
import { APP_STORE_URL } from "@/lib/utils";
import { ArrowRight } from "lucide-react";

export default function DownloadClient() {
  return (
    <>
      <div className="max-w-md mx-auto mb-16">
        <Button
          type="button"
          size="lg"
          className="w-full"
          onClick={() =>
            window.open(APP_STORE_URL, "_blank", "noopener,noreferrer")
          }
        >
          Download on the App Store
        </Button>
      </div>

      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-[#1DA1F2] text-white font-medium hover:opacity-90 transition-opacity">
          Share on Twitter
        </button>

        <button className="flex items-center gap-2 px-6 py-3 rounded-xl bg-background-secondary border border-border text-foreground font-medium hover:bg-border transition-colors">
          <ArrowRight className="w-5 h-5" />
          Copy Link
        </button>
      </div>
    </>
  );
}
