import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        toss: {
          blue: "#3182F6",
          navy: "#191F28",
          gray: {
            50: "#F9FAFB",
            100: "#F2F4F6",
            200: "#E5E8EB",
            300: "#D1D6DB",
            400: "#B0B8C1",
            500: "#8B95A1",
            600: "#6B7684",
            700: "#4E5968",
            800: "#333D4B",
            900: "#191F28",
          },
        },
      },
      fontFamily: {
        pretendard: ["Pretendard Variable", "Pretendard", "-apple-system", "system-ui", "sans-serif"],
      },
      transitionTimingFunction: {
        toss: "cubic-bezier(0.25, 0.1, 0.25, 1)",
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.25, 0.1, 0.25, 1) both",
      },
    },
  },
  plugins: [],
};

export default config;
