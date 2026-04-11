import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "LOCK IN - Stop Social Media",
    template: "%s | LOCK IN",
  },
  description:
    "14-day social media detox with OS-level app blocking. No bypass, no workarounds. Then controlled daily access on your terms. Built for Gen Z.",
  keywords: [
    "social media addiction",
    "digital detox",
    "screen time",
    "dopamine detox",
    "CBT",
    "phone addiction",
    "Gen Z",
    "mental health",
    "digital wellness",
  ],
  authors: [{ name: "LOCK IN" }],
  creator: "LOCK IN",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getrewired.org",
    siteName: "LOCK IN",
    title: "LOCK IN - Stop Social Media",
    description:
      "14-day social media detox with OS-level app blocking. No bypass, no workarounds. Then controlled daily access on your terms.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "LOCK IN - Stop Social Media",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LOCK IN - Stop Social Media",
    description:
      "14-day social media detox with OS-level app blocking. No bypass, no workarounds.",
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
    <html lang="en" className="dark">
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
