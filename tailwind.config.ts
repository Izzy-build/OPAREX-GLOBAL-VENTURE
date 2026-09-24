import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        lilac: {
          DEFAULT: "#8E76B2",
          light: "#B7A4D4",
          pale: "#EFE9F6",
          dark: "#7A6299",
        },
        cream: "#FAF7F3",
        stone: "#E7E1D8",
        charcoal: "#211E1B",
        ink: {
          DEFAULT: "#2B2723",
          soft: "#5C564E",
        },
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
      },
      keyframes: {
        rise: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        rise: "rise 0.8s ease forwards",
      },
    },
  },
  plugins: [],
};

export default config;
