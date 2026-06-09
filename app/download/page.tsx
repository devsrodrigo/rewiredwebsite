import { Metadata } from "next";
import Image from "next/image";
import { Apple } from "lucide-react";
import { SectionHeading } from "@/components/ui";
import DownloadClient from "./DownloadClient";
import { screenshots } from "@/lib/assets";

export const metadata: Metadata = {
  title: "Download",
  description:
    "LOCK IN is available now on iOS. Start the 14-day detox and reset your phone.",
};

const benefits = [
  {
    title: "Start today.",
    body: "Core blocking, the 14-day reset, Echo, and effortful actions: everything you need to reset.",
  },
  {
    title: "Premium when you want it.",
    body: "Advanced schedules, deeper analytics, and the full reading library.",
  },
  {
    title: "iPhone today.",
    body: "Live on the App Store. Android arrives later in 2026.",
  },
  {
    title: "On-device by default.",
    body: "We don't sync your usage data to the cloud. We don't sell it.",
  },
];

export default function DownloadPage() {
  return (
    <div className="pt-28">
      <section className="py-20 md:py-28 grain">
        <div className="container-app">
          <div className="grid lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow mb-4">Available now</p>
              <h1 className="font-display text-[48px] md:text-[80px] font-semibold tracking-[-0.045em] text-white leading-[1.02]">
                Get LOCK IN on iPhone.
              </h1>
              <p className="mt-6 text-[18px] md:text-[20px] text-[color:var(--color-ink-3)] leading-relaxed max-w-[55ch]">
                One download. Fourteen days to a different relationship with your phone.
              </p>

              <div className="mt-10">
                <DownloadClient />
              </div>

              <div className="mt-10 flex items-center gap-3">
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[color:var(--color-line-2)] bg-[color:var(--color-bg-2)]">
                  <Apple className="w-7 h-7 text-white" />
                  <div className="text-left">
                    <p className="text-[11px] text-[color:var(--color-ink-4)]">Available on</p>
                    <p className="text-[14px] font-semibold text-white">App Store</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 px-5 py-3 rounded-2xl border border-[color:var(--color-line)] bg-[color:var(--color-bg-2)] opacity-50">
                  <svg className="w-7 h-7 text-white" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M3.609 1.814L13.792 12 3.61 22.186a.996.996 0 01-.61-.92V2.734a1 1 0 01.609-.92zm10.89 10.893l2.302 2.302-10.937 6.333 8.635-8.635zm3.199-3.198l2.807 1.626a1 1 0 010 1.73l-2.808 1.626L15.206 12l2.492-2.491zM5.864 2.658L16.8 8.99l-2.302 2.302-8.634-8.634z" />
                  </svg>
                  <div className="text-left">
                    <p className="text-[11px] text-[color:var(--color-ink-4)]">Later 2026</p>
                    <p className="text-[14px] font-semibold text-white">Google Play</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 flex justify-center lg:justify-end">
              <div className="iphone-frame" style={{ width: 300 }}>
                <div className="iphone-screen">
                  <div className="iphone-notch" />
                  <Image
                    src={screenshots.countdownGif}
                    alt="LOCK IN detox countdown"
                    fill
                    sizes="300px"
                    className="object-cover"
                    unoptimized
                    priority
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="border-t border-[color:var(--color-line)] py-24 md:py-32 bg-[color:var(--color-bg-1)]">
        <div className="container-app">
          <SectionHeading
            eyebrow="What you get"
            title="What you get. Honest about pricing."
            align="left"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-16">
            {benefits.map((b) => (
              <div key={b.title} className="surface p-8">
                <h3 className="text-[20px] font-semibold text-white tracking-tight mb-2">
                  {b.title}
                </h3>
                <p className="text-[15px] text-[color:var(--color-ink-3)] leading-relaxed">
                  {b.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
