import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#f6f5f2",
        foreground: "#13151a",
        muted: "#5c6470",
        line: "rgba(19, 21, 26, 0.08)",
        surface: "rgba(255, 255, 255, 0.72)",
        accent: {
          DEFAULT: "#3558a8",
          soft: "#e9eefb",
          strong: "#213c7b",
        },
      },
      boxShadow: {
        soft: "0 18px 45px rgba(16, 24, 40, 0.08)",
        card: "0 10px 30px rgba(16, 24, 40, 0.06)",
      },
      fontFamily: {
        sans: ["var(--font-manrope)", "sans-serif"],
        display: ["var(--font-jakarta)", "sans-serif"],
      },
      backgroundImage: {
        "fine-grid":
          "linear-gradient(rgba(19, 21, 26, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(19, 21, 26, 0.05) 1px, transparent 1px)",
      },
    },
  },
  plugins: [],
};

export default config;
