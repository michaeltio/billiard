// /tailwind.config.ts (Buat file ini secara manual)

import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        customblue: "#253872",
        custompink: "#ff66b4",
        customwhite: "#f5f6f3",
      },
    },
  },
  plugins: [],
};
export default config;
