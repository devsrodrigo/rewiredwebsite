"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Clock, ArrowUpRight } from "lucide-react";
import { EASE } from "@/lib/motion";

export type BlogPost = {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  readTime: string;
  date: string;
};

export function BlogGrid({
  posts,
  categories,
}: {
  posts: BlogPost[];
  categories: string[];
}) {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? posts : posts.filter((p) => p.category === active);

  return (
    <>
      <section className="border-t border-[color:var(--color-line)] sticky top-[76px] z-30 bg-black/80 backdrop-blur-xl">
        <div className="container-app py-4">
          <div className="flex items-center gap-2 overflow-x-auto -mx-2 px-2">
            {categories.map((c) => (
              <button
                key={c}
                onClick={() => setActive(c)}
                className={`px-3.5 py-1.5 rounded-full text-[13px] whitespace-nowrap transition-colors ${
                  active === c
                    ? "bg-white text-black"
                    : "border border-[color:var(--color-line)] text-[color:var(--color-ink-3)] hover:text-white hover:border-[color:var(--color-line-2)]"
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="container-app">
          <motion.div
            layout
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((p) => (
                <motion.div
                  key={p.slug}
                  layout
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.96 }}
                  transition={{ duration: 0.4, ease: EASE }}
                >
                  <Link href={`/blog/${p.slug}`} className="group">
                    <article className="surface p-7 h-full transition-colors hover:border-[color:var(--color-line-2)] flex flex-col">
                      <div className="flex items-center justify-between mb-5">
                        <span className="text-[11px] text-[color:var(--color-ink-4)] uppercase tracking-[0.14em]">
                          {p.category}
                        </span>
                        <ArrowUpRight className="w-4 h-4 text-[color:var(--color-ink-4)] opacity-0 group-hover:opacity-100 transition-opacity" />
                      </div>
                      <h3 className="font-display text-[22px] font-semibold tracking-tight text-white leading-snug mb-3">
                        {p.title}
                      </h3>
                      <p className="text-[14px] text-[color:var(--color-ink-3)] leading-relaxed line-clamp-2">
                        {p.excerpt}
                      </p>
                      <div className="mt-6 flex items-center gap-3 text-[12px] text-[color:var(--color-ink-4)]">
                        <span className="flex items-center gap-1.5">
                          <Calendar className="w-3 h-3" />
                          {new Date(p.date).toLocaleDateString("en-US", {
                            month: "short",
                            day: "numeric",
                          })}
                        </span>
                        <span className="w-1 h-1 rounded-full bg-[color:var(--color-ink-5)]" />
                        <span className="flex items-center gap-1.5">
                          <Clock className="w-3 h-3" />
                          {p.readTime}
                        </span>
                      </div>
                    </article>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>
    </>
  );
}
