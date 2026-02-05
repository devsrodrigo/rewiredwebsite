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
    default: "Rewired - Break Free From Social Media Addiction",
    template: "%s | Rewired",
  },
  description:
    "Rewire your dopamine system. Replace mindless scrolling with meaningful habits. Built for Gen Z who's ready to change. Using CBT-inspired techniques and Apple's Screen Time API.",
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
  authors: [{ name: "Rewired" }],
  creator: "Rewired",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://getrewired.org",
    siteName: "Rewired",
    title: "Rewired - Break Free From Social Media Addiction",
    description:
      "Rewire your dopamine system. Replace mindless scrolling with meaningful habits. Built for Gen Z who's ready to change.",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Rewired - Break Free From Social Media Addiction",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Rewired - Break Free From Social Media Addiction",
    description:
      "Rewire your dopamine system. Replace mindless scrolling with meaningful habits.",
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
      { url: "/logo-icon.png", type: "image/png" },
      { url: "/favicon.png", type: "image/png" },
    ],
    apple: "/logo-icon.png",
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
