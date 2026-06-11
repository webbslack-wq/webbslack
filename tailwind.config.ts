import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "#F3F5F8",
        surface: "#FFFFFF",
        ink: "#0F1B2D",
        muted: "#5A6B82",
        line: "#DCE2EA",
        cobalt: "#2742F5",
        cobaltDark: "#1B2FB8",
        copper: "#C2702E",
        inkDeep: "#0A1220",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      maxWidth: { wrap: "1180px" },
      boxShadow: {
        card: "0 1px 2px rgba(15,27,45,.05), 0 8px 24px rgba(15,27,45,.06)",
        cardHover: "0 2px 4px rgba(15,27,45,.06), 0 16px 40px rgba(15,27,45,.12)",
      },
      animation: {
        fadeUp: "fadeUp .6s ease both",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(14px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
