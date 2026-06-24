import type { Metadata } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "LOCK IN: Screen Time & Detox App for iPhone",
    template: "%s · LOCK IN",
  },
  description:
    "LOCK IN is the screen time and social media detox app that actually holds. A 14-day block enforced by Apple Screen Time at the OS level, no bypass, no workarounds. After the reset, a 30-minute daily budget you distribute across your apps. You decide. Not the algorithm.",
  keywords: [
    "lock in app",
    "lock in screen time app",
    "screen time app",
    "detox app",
    "social media detox app",
    "dopamine detox app",
    "app blocker",
    "stop scrolling",
    "social media addiction",
    "digital detox",
    "phone addiction",
    "focus app",
    "digital wellness",
  ],
  authors: [{ name: "LOCK IN" }],
  creator: "LOCK IN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getrewired.org",
    siteName: "LOCK IN",
    title: "LOCK IN: Screen Time & Detox App for iPhone",
    description:
      "The screen time and detox app that actually holds. A 14-day OS-level block, then a 30-minute daily budget on your terms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LOCK IN",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOCK IN: Screen Time & Detox App for iPhone",
    description:
      "A 14-day social media detox enforced at the OS level. After the reset, a 30-minute daily budget on your terms.",
    images: ["/og-image.png"],
    creator: "@getrewired",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  metadataBase: new URL("https://getrewired.org"),
  icons: {
    icon: [
      { url: "/favicon.png?v=3", sizes: "any", type: "image/png" },
      { url: "/logo.png?v=3", type: "image/png" },
    ],
    apple: "/logo.png?v=3",
    shortcut: "/favicon.png?v=3",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Organization",
        "@id": "https://getrewired.org/#org",
        name: "LOCK IN",
        url: "https://getrewired.org",
        logo: "https://getrewired.org/logo.png",
        sameAs: [
          "https://instagram.com/getrewiredapp",
          "https://tiktok.com/@getrewired",
        ],
      },
      {
        "@type": "SoftwareApplication",
        name: "LOCK IN",
        alternateName: "LOCK IN: Stop Social Media",
        operatingSystem: "iOS",
        applicationCategory: "HealthApplication",
        url: "https://getrewired.org",
        downloadUrl:
          "https://apps.apple.com/us/app/lock-in-stop-social-media/id6758021299",
        description:
          "LOCK IN is a screen time and social media detox app. It blocks your most addictive apps for 14 days at the OS level through Apple Screen Time, then gives you a 30-minute daily budget you control.",
        publisher: { "@id": "https://getrewired.org/#org" },
        offers: {
          "@type": "AggregateOffer",
          priceCurrency: "USD",
          lowPrice: "4.99",
          highPrice: "29.99",
          offerCount: "2",
          offers: [
            {
              "@type": "Offer",
              name: "Yearly",
              price: "29.99",
              priceCurrency: "USD",
            },
            {
              "@type": "Offer",
              name: "Weekly",
              price: "4.99",
              priceCurrency: "USD",
            },
          ],
        },
      },
    ],
  };

  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
