import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Light-first palette inspired by composio.dev
        // Page: warm off-white. Sections alternate paper → paper-dim → ink (dark contrast).
        paper: {
          DEFAULT: "#FBFAF7",   // page background — warm off-white
          dim: "#F4F1EA",       // alternating section
          deep: "#E8E3D6",      // panel / muted
        },
        ink: {
          DEFAULT: "#0B0E14",   // primary text / dark sections background
          soft: "#1A2230",      // raised dark surface
          line: "#22293A",      // dark-section borders
          muted: "#4A5260",     // body text on light bg
          dim: "#6B7280",       // secondary text on light
          subtle: "#9CA3AF",    // tertiary
        },
        // Pure blue accent — no purple undertone
        accent: {
          DEFAULT: "#2563EB",
          soft: "#DBEAFE",
          deep: "#1D4ED8",
          ring: "#93C5FD",
        },
        signal: {
          green: "#16A34A",
          yellow: "#CA8A04",
          red: "#DC2626",
        },
        source: {
          jira: "#2563EB",
          slack: "#7C3AED",
          doc: "#525B6B",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["var(--font-sans)", "ui-sans-serif", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
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
        // Sharp depth — soft drop + crisp 1px line
        soft: "0 1px 2px rgba(11,14,20,0.04), 0 8px 24px -12px rgba(11,14,20,0.10)",
        lift: "0 1px 0 rgba(11,14,20,0.04), 0 18px 40px -18px rgba(11,14,20,0.22)",
        card: "0 1px 0 rgba(11,14,20,0.04), 0 1px 2px rgba(11,14,20,0.03), 0 8px 28px -16px rgba(11,14,20,0.10)",
        "btn-dark": "0 1px 0 rgba(255,255,255,0.08) inset, 0 8px 22px -10px rgba(11,14,20,0.55)",
        "btn-accent": "0 1px 0 rgba(255,255,255,0.18) inset, 0 10px 28px -10px rgba(37,99,235,0.55)",
        inset: "inset 0 1px 0 rgba(255,255,255,0.6)",
      },
      backgroundImage: {
        // Dotted background like composio hero — small dots on paper
        "dot-paper":
          "radial-gradient(rgba(11,14,20,0.10) 1px, transparent 1px)",
        "dot-dark":
          "radial-gradient(rgba(255,255,255,0.10) 1px, transparent 1px)",
        // Subtle line grid for sections
        "grid-paper":
          "linear-gradient(rgba(11,14,20,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(11,14,20,0.05) 1px, transparent 1px)",
        "grid-dark":
          "linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px)",
        // Soft warm hero glow — barely there
        "hero-paper":
          "radial-gradient(900px 500px at 15% 0%, rgba(37,99,235,0.06), transparent 60%), radial-gradient(700px 400px at 95% 0%, rgba(255,205,120,0.10), transparent 60%)",
        "accent-gradient":
          "linear-gradient(135deg, #2563EB 0%, #60A5FA 100%)",
      },
      backgroundSize: {
        dots: "22px 22px",
        "dots-lg": "28px 28px",
        grid: "44px 44px",
      },
      keyframes: {
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-in-up": "fade-in-up 0.6s ease-out both",
      },
    },
  },
  plugins: [],
};

export default config;
