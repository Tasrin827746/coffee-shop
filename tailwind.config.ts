import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        coffee: "#4B2E2E",
        mocha: "#755C48",
        cream: "#F5E1C8",
        espresso: "#2D1B0D",
        olive: "#A3A847",
        rust: "#D97B5A",
      },
    },
  },
  plugins: [],
} satisfies Config;
