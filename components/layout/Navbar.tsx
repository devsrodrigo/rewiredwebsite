"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { APP_STORE_URL } from "@/lib/utils";
import { EASE } from "@/lib/motion";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/how-it-works", label: "How it works" },
  { href: "/science", label: "Science" },
  { href: "/about", label: "About" },
  { href: "/blog", label: "Journal" },
  { href: "/support", label: "FAQ" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.header
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: EASE }}
        className="fixed top-0 left-0 right-0 z-50 flex justify-center px-4 pt-3 md:pt-4"
      >
        <nav
          className={`flex items-center gap-2 rounded-full transition-all duration-300 ${
            isScrolled
              ? "glass pl-4 pr-2 py-2 w-full max-w-3xl"
              : "pl-4 pr-2 py-2 w-full max-w-3xl border border-transparent"
          }`}
          aria-label="Primary"
        >
          <Link
            href="/"
            className="flex items-center gap-2 shrink-0 group"
            aria-label="LOCK IN home"
          >
            <Image
              src="/logo.png"
              alt=""
              width={26}
              height={26}
              className="w-[26px] h-[26px] rounded-[7px] transition-transform group-hover:scale-105"
            />
            <span className="text-[15px] font-semibold tracking-tight text-white">
              LOCK IN
            </span>
          </Link>

          <div className="hidden md:flex items-center gap-1 mx-auto">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full text-[13.5px] text-[color:var(--color-ink-3)] hover:text-white hover:bg-white/[0.06] transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          <a
            href={APP_STORE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex btn btn-primary btn-sm shrink-0 ml-auto md:ml-0"
          >
            Get the app
          </a>

          <button
            onClick={() => setIsMobileMenuOpen((v) => !v)}
            className="md:hidden ml-auto p-2 text-white"
            aria-label="Toggle menu"
            aria-expanded={isMobileMenuOpen}
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black md:hidden pt-24"
          >
            <div className="container-app flex flex-col gap-1 py-6">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.04 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block py-4 text-2xl font-display font-medium text-white"
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <div className="h-px bg-[color:var(--color-line)] my-4" />
              <Link
                href="/download"
                onClick={() => setIsMobileMenuOpen(false)}
                className="block py-4 text-xl font-medium text-[color:var(--color-ink-3)]"
              >
                Download
              </Link>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-lg w-full mt-4"
              >
                Get the app
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
