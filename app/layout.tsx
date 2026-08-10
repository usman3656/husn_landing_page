import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Bricolage_Grotesque } from "next/font/google";
import "./globals.css";
import { CookieBanner } from "@/components/cookie-banner";
import { Analytics } from "@/components/analytics";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

// Display face for headings — characterful grotesque, used on h1/h2 only.
const display = Bricolage_Grotesque({
  subsets: ["latin"],
  variable: "--font-display",
  display: "swap",
  weight: ["500", "600", "700", "800"],
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
  weight: ["400", "500"],
});

// Google Search Console HTML-tag verification. Set NEXT_PUBLIC_GSC_VERIFICATION
// to the token Google gives you (the content value of the meta tag).
const GSC_VERIFICATION = process.env.NEXT_PUBLIC_GSC_VERIFICATION;

export const metadata: Metadata = {
  metadataBase: new URL("https://husn.io"),
  title: "Husn: Referral records into EHR-ready context",
  description:
    "Husn reads fragmented referral records, including scanned letters, external records, faxes, and emails, extracts what matters, matches it to the right patient, and prepares structured context for clinician review.",
  alternates: {
    types: { "application/rss+xml": "https://husn.io/feed.xml" },
  },
  ...(GSC_VERIFICATION
    ? { verification: { google: GSC_VERIFICATION } }
    : {}),
  openGraph: {
    title: "Husn: Referral records into EHR-ready context",
    description:
      "A working MVP that reads, extracts, and structures referral information for clinician review, built from 40+ clinician interviews across the US and UK.",
    url: "https://husn.io",
    siteName: "Husn",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Husn: Referral records into EHR-ready context",
    description:
      "Husn reads fragmented referral records and prepares structured context for clinician review.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${display.variable} ${mono.variable}`}>
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
