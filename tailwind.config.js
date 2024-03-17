/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");
const plugin = require("tailwindcss/plugin");
const { createThemes } = require("tw-colors");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontSize: {
      headline: "clamp(2.5rem, 4vw + 1rem, 3rem)",
      subheadline: "clamp(2rem, 3vw + 1rem, 2.5rem)",
      title: "clamp(1.5rem, 2.5vw + 1rem, 2rem)",
      subtitle: "clamp(1.5rem, 2.5vw + 1rem, 2rem)",
      "main-fs": "clamp(.9rem, 1.5vw + .25rem, 1.05rem)",
      caption: "clamp(0.875rem, 1.25vw + .5rem, 1rem)",
      sm: "clamp(0.775rem, 1.15vw + .25rem, .925rem)",
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
    },
  },
  plugins: [
    plugin(function ({ addVariant }) {
      addVariant("hocus", ["&:hover", "&:focus"]);
    }),
    createThemes({
      light: {
        primary: "#FFFFFF",
        secondary: "#0F0F0F",
        cta: "#E6E6E6",
      },
      dark: {
        primary: "#0F0F0F",
        secondary: "#FFFFFF",
        cta: "#3E3E3E",
      },
    }),
  ],
};
