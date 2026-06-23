import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./data/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: "#effff4",
          100: "#d8fadd",
          300: "#7bea95",
          600: "#06c755",
          700: "#05a847",
          800: "#047a3a",
          950: "#06452a"
        },
        sun: {
          100: "#fff9d7",
          300: "#ffe55c",
          500: "#ffc400"
        },
        ink: {
          500: "#52616b",
          700: "#27343d",
          900: "#111827"
        },
        skyglass: "#e9fff0",
        clay: "#fff9d7"
      },
      boxShadow: {
        soft: "0 18px 44px rgba(6, 69, 42, 0.10)",
        lift: "0 10px 28px rgba(6, 199, 85, 0.22)"
      },
      backgroundImage: {
        "hero-pattern":
          "radial-gradient(circle at 88% 18%, rgba(255, 229, 92, 0.38), transparent 30%), linear-gradient(135deg, #effff4 0%, #ffffff 46%, #d8fadd 100%)"
      },
      borderRadius: {
        card: "8px"
      }
    }
  },
  plugins: []
};

export default config;
