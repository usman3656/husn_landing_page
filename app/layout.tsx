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
  title: "Husn: The operational intelligence layer for project teams",
  description:
    "Husn reads continuously across Slack, Jira, Google, and Confluence, maps your work into a structured graph, and writes a sourced briefing every morning. Drift surfaces before the meeting, not during it.",
  openGraph: {
    title: "Husn: The operational intelligence layer for project teams",
    description:
      "An always-on drift intelligence layer for cross-functional teams. Maps your work across every tool, surfaces conflicts before the meeting, and writes a sourced briefing every morning.",
    url: "https://husn.io",
    siteName: "Husn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husn: The operational intelligence layer for project teams",
    description:
      "The drift intelligence layer for teams whose work lives in too many tools. Reads, maps, and briefs daily.",
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
