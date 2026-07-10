import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ['"Cormorant Garamond"', "Times New Roman", "serif"],
      },
      colors: {
        ivory: "#f4efe6",
        gold: {
          DEFAULT: "#c9a869",
          light: "#e3cd9d",
          dark: "#a8874f",
        },
      },
    },
  },
  plugins: [],
};

export default config;
