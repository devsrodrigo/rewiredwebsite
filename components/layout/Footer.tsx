import Link from "next/link";
import Image from "next/image";
import { Instagram, Video } from "lucide-react";

const footerLinks = {
  product: [
    { href: "/features", label: "Features" },
    { href: "/how-it-works", label: "How it works" },
    { href: "/download", label: "Download" },
    { href: "/science", label: "Science" },
  ],
  company: [
    { href: "/about", label: "About" },
    { href: "/blog", label: "Journal" },
    { href: "/support", label: "Support" },
  ],
  legal: [
    { href: "/privacy-policy", label: "Privacy policy" },
    { href: "/privacy", label: "Privacy" },
    { href: "/terms", label: "Terms" },
  ],
};

const socialLinks = [
  { href: "https://instagram.com/getrewiredapp", icon: Instagram, label: "Instagram" },
  { href: "https://tiktok.com/@getrewired", icon: Video, label: "TikTok" },
];

export function Footer() {
  return (
    <footer className="border-t border-[color:var(--color-line)] bg-black">
      <div className="container-app py-16 md:py-24">
        <div className="grid grid-cols-2 md:grid-cols-12 gap-10">
          <div className="col-span-2 md:col-span-5">
            <Link href="/" className="flex items-center gap-2.5 mb-6">
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
            <p className="text-[15px] leading-relaxed text-[color:var(--color-ink-3)] max-w-sm">
              The detox app for people who already tried screen time, deleting apps, and
              promising themselves &ldquo;just five more minutes.&rdquo;
            </p>
            <div className="flex gap-2 mt-8">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-[color:var(--color-line)] text-[color:var(--color-ink-3)] hover:text-white hover:border-[color:var(--color-line-2)] transition-colors flex items-center justify-center"
                  aria-label={s.label}
                >
                  <s.icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[color:var(--color-ink-2)] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-2">
            <h3 className="eyebrow mb-5">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[color:var(--color-ink-2)] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <h3 className="eyebrow mb-5">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-[color:var(--color-ink-2)] hover:text-white transition-colors"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-[color:var(--color-line)] flex flex-col md:flex-row md:items-center justify-between gap-3">
          <p className="text-[13px] text-[color:var(--color-ink-4)]">
            © {new Date().getFullYear()} LOCK IN. All rights reserved.
          </p>
          <p className="text-[13px] text-[color:var(--color-ink-4)]">
            Designed and built for people who&apos;d rather live their life.
          </p>
        </div>
      </div>
    </footer>
  );
}
