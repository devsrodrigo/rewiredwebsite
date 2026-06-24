"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { APP_STORE_URL } from "@/lib/utils";
import { screenshots } from "@/lib/assets";
import { EASE, viewportOnce } from "@/lib/motion";

export function CTASection() {
  return (
    <section className="aurora relative overflow-hidden py-28 md:py-40 border-t border-white/5">
      <div className="container-app relative">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.9, ease: EASE }}
          className="max-w-4xl mx-auto text-center flex flex-col items-center"
        >
          <Image
            src={screenshots.echoMascot}
            alt=""
            width={160}
            height={320}
            className="w-[130px] h-auto mb-6 animate-float-soft drop-shadow-[0_24px_50px_rgba(0,0,0,0.55)]"
            style={{ animationDuration: "6s" }}
          />
          <h2 className="font-display text-[48px] sm:text-[72px] lg:text-[92px] font-semibold tracking-[-0.05em] leading-[0.94] text-white">
            Stop scrolling.
            <br />
            <span className="text-grad">Start living.</span>
          </h2>
          <p className="mt-6 text-[18px] md:text-[20px] text-white/65 max-w-[42ch]">
            The next 14 days happen either way. Spend them building the life you
            keep thinking about.
          </p>
          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg mt-9"
          >
            Download on the App Store
          </a>
          <p className="mt-5 text-[13px] text-white/40">
            iPhone, iPad &amp; Mac · $29.99/year or $4.99/week
          </p>
        </motion.div>
      </div>
    </section>
  );
}
