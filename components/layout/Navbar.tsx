"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { APP_STORE_URL } from "@/lib/utils";

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
    const handleScroll = () => setIsScrolled(window.scrollY > 8);
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          isScrolled
            ? "bg-black/70 backdrop-blur-xl border-b border-[color:var(--color-line)]"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <div className="container-app">
          <div className="flex items-center justify-between h-16 md:h-[68px]">
            <Link href="/" className="flex items-center gap-2.5 group" aria-label="LOCK IN home">
              <Image
                src="/logo.png"
                alt=""
                width={28}
                height={28}
                className="w-7 h-7 rounded-md"
              />
              <span className="text-[15px] font-semibold tracking-tight text-white">
                LOCK IN
              </span>
            </Link>

            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-[14px] text-[color:var(--color-ink-3)] hover:text-white transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Link
                href="/download"
                className="text-[14px] text-[color:var(--color-ink-3)] hover:text-white transition-colors"
              >
                Download
              </Link>
              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary btn-sm"
              >
                Get the app
              </a>
            </div>

            <button
              onClick={() => setIsMobileMenuOpen((v) => !v)}
              className="md:hidden p-2 text-white"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 z-40 bg-black md:hidden pt-20"
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
