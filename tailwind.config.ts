import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./website/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Single-page site palette (website/): warm greige page, layered
        // greige cards, black ink, one lime accent.
        greige: "#E4E5DD",
        card: "#DBDCCD",
        card2: "#CBCCB8",
        card3: "#EDEEE4",
        olive: "#26271B",
        lime: "#CAFE14",
        muted: "#5A5A5A",

        // Legacy palette still used by /privacy, /terms and the cookie banner.
        paper: {
          DEFAULT: "#FBFAF7",
          dim: "#F4F1EA",
          deep: "#E8E3D6",
        },
        ink: {
          DEFAULT: "#000000",
          soft: "#1A2230",
          line: "#22293A",
          muted: "#4A5260",
          dim: "#6B7280",
          subtle: "#9CA3AF",
        },
        accent: {
          DEFAULT: "#2563EB",
          soft: "#DBEAFE",
          deep: "#1D4ED8",
          ring: "#93C5FD",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        display: ["var(--font-serif)", "Georgia", "serif"],
        mono: ["ui-monospace", "SFMono-Regular", "monospace"],
      },
      letterSpacing: {
        display: "-0.04em",
        tightish: "-0.02em",
      },
      maxWidth: {
        page: "78rem",
        prose: "44rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(11,14,20,0.04), 0 8px 24px -12px rgba(11,14,20,0.10)",
        lift: "0 1px 0 rgba(11,14,20,0.04), 0 18px 40px -18px rgba(11,14,20,0.22)",
        card: "0 1px 0 rgba(11,14,20,0.04), 0 1px 2px rgba(11,14,20,0.03), 0 8px 28px -16px rgba(11,14,20,0.10)",
      },
    },
  },
  plugins: [],
};

export default config;
