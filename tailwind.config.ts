import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        bg: "#F4F4F4",
        ink: "#000000",
        muted: "#555555",
        hover: "#111111",
      },
      maxWidth: {
        grid: "1400px",
      },
      spacing: {
        section: "220px",
      },
      letterSpacing: {
        tightest: "-0.04em",
        tight: "-0.02em",
      },
      fontSize: {
        "hero": ["clamp(90px,10vw,160px)", { lineHeight: "0.92", letterSpacing: "-0.04em" }],
        "section-title": ["clamp(60px,7vw,110px)", { lineHeight: "0.93", letterSpacing: "-0.03em" }],
        "see-all": ["clamp(50px,6vw,100px)", { lineHeight: "1", letterSpacing: "-0.03em" }],
        "subtitle": ["clamp(16px,1.4vw,22px)", { lineHeight: "1.4" }],
        "body-sm": ["clamp(13px,1vw,16px)", { lineHeight: "1.6" }],
      },
    },
  },
  plugins: [],
};

export default config;
