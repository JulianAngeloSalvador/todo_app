/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { createThemes } = require("tw-colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      headline: "clamp(1.5rem, 3vw + 1rem, 3rem)",
      title: "clamp(1.75rem, 2.5vw + 1rem, 2rem)",
      subtitle: "clamp(1.1rem, 1.65vw + 1rem, 1.25rem)",
      "main-fs": "clamp(.9rem, 1.05vw + .05rem, 1rem)",
      caption: "clamp(0.75rem, 1.25vw + .5rem, .95rem)",
      sm: "clamp(0.675rem, 1.15vw + .25rem, .825rem)",
      xs: "clamp(0.475rem, 1.15vw + .25rem, .625rem)",
    },
    fontWeight: {
      light: "300",
      DEFAULT: "400",
      semibold: "500",
      bold: "600",
      "extra-bold": "700",
    },
    extend: {
      fontFamily: {
        comfortaa: ["Comfortaa", ...defaultTheme.fontFamily.sans],
      },
      width: {
        "fluid-200": "min(200px, 100%)",
        "fluid-350": "min(350px, 100%)",
        "fluid-400": "min(400px, 100%)",
        "fluid-500": "min(500px, 100%)",
        "fluid-600": "min(600px, 100%)",
        "fluid-800": "min(800px, 100%)",
        "fluid-1000": "min(1000px, 100%)",
        "fluid-1200": "min(1200px, 100%)",
      },
    },
  },
  plugins: [
    require("autoprefixer"),
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
      addVariant("children", "& > *");
    }),
    createThemes({
      light: {
        primary: "#FFFFFF",
        secondary: "#505050",
        tertiary: "#EAEAEA",
        cta: "#083D77",
      },
      dark: {
        primary: "#0F0F0F",
        secondary: "#FFFFFF",
        cta: "#3E3E3E",
      },
    }),
  ],
};
