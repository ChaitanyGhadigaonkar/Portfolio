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
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    extend: {
      colors: {
        accent: "rgb(3, 112, 221)",
        head: "#04263e",
        light: "#575757",
      },
      spacing: {
        "hero-content-sm": "calc(100vh - 25px)",
        "hero-content-md": "calc(80vh)",
      },
    },
  },
  plugins: [],
};
export default config;
