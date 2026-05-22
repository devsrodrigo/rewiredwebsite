"use client";

import { APP_STORE_URL } from "@/lib/utils";

export default function DownloadClient() {
  return (
    <div className="flex flex-col sm:flex-row gap-3">
      <a
        href={APP_STORE_URL}
        target="_blank"
        rel="noopener noreferrer"
        className="btn btn-primary btn-lg"
      >
        Download on the App Store
      </a>
      <a href="/how-it-works" className="btn btn-secondary btn-lg">
        See how it works
      </a>
    </div>
  );
}
