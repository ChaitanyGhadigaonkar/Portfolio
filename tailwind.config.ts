import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "475px",
    },
    extend: {
      colors: {
        accent: "rgb(3, 112, 221)",
        head: "#04263e",
        light: "#575757",
      },
    },
  },
  plugins: [],
};
export default config;
