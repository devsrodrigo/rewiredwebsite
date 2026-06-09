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
    default: "LOCK IN: Stop scrolling. Start living.",
    template: "%s · LOCK IN",
  },
  description:
    "A 14-day social media detox enforced at the OS level. No bypass, no workarounds. After the reset, a 30-minute daily budget you distribute across your apps. You decide. Not the algorithm.",
  keywords: [
    "social media addiction",
    "digital detox",
    "screen time",
    "dopamine detox",
    "phone addiction",
    "Gen Z",
    "digital wellness",
    "focus app",
  ],
  authors: [{ name: "LOCK IN" }],
  creator: "LOCK IN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getrewired.org",
    siteName: "LOCK IN",
    title: "LOCK IN: Stop scrolling. Start living.",
    description:
      "A 14-day social media detox enforced at the OS level. After the reset, a 30-minute daily budget on your terms.",
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
    title: "LOCK IN: Stop scrolling. Start living.",
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
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${interTight.variable} antialiased`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
