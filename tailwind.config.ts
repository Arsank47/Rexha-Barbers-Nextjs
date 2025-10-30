import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ef4444",
        primaryDark: "#b91c1c",
        charcoal: "#0b0b0f",
        slate: "#1f1b1d"
      },
      fontFamily: {
        heading: ["var(--font-bebas)", "sans-serif"],
        body: ["var(--font-inter)", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 4px rgba(239, 68, 68, 0.25)"
      }
    }
  },
  plugins: []
};

export default config;
