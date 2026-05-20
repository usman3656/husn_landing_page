import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://husn.io"),
  title: "Husn — The alignment layer for program teams",
  description:
    "Husn watches Jira, Slack, and your docs for the changes your sync meetings keep discovering too late — and tells the right people 30 minutes before the meeting starts.",
  openGraph: {
    title: "Husn — The alignment layer for program teams",
    description:
      "Cross-source drift detection, acknowledgement graphs, and pre-sync briefs for TPMs, EPMs, and PMO leaders.",
    url: "https://husn.io",
    siteName: "Husn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husn — The alignment layer for program teams",
    description:
      "Cross-source drift detection, acknowledgement graphs, and pre-sync briefs for program teams.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${mono.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-50 focus:bg-ink focus:text-paper focus:px-3 focus:py-2 focus:rounded focus:shadow-lift"
        >
          Skip to content
        </a>
        {children}
        <CookieBanner />
        <Analytics />
      </body>
    </html>
  );
}
