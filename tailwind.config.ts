import type { Config } from "tailwindcss";

export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/layout/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        center: true,
        padding: ".9375rem",
        screens: {
          sm: "640px",
          md: "768px",
          lg: "1024px",
          xl: "1230px",
        },
      },

      colors: {
        primary: "#307bbf",
        secondary: "f57f21",
        "primary-dark": "#174c8d",
        third: "#4f94d3",
        muted: "#686868",
        headings: "#001221",
        "body-bg": "#fdfeff",
      },
      fontFamily: {
        primary: ["var(--primary)"],
        secondary: ["var(--secondary)"],
      },
    },
  },
  plugins: [],
} satisfies Config;
