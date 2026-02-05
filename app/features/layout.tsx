import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Features",
  description:
    "Discover all the features that make Rewired the most effective app for breaking social media addiction. Screen Time integration, CBT techniques, habit replacement, and more.",
};

export default function FeaturesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
