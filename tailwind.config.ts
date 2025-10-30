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
        primary: "#c59d5f",
        dark: "#0f172a",
        ash: "#1e293b"
      },
      fontFamily: {
        heading: ["Playfair Display", "serif"],
        body: ["Inter", "sans-serif"]
      },
      boxShadow: {
        glow: "0 0 0 4px rgba(197, 157, 95, 0.15)"
      }
    }
  },
  plugins: []
};

export default config;
