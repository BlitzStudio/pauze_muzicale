/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Alkatra: ["Alkatra", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        DancingScript: ["Dancing Script", "cursive"],
      },
      colors: {
        primary: "#001B2E",
        secondary: "#F7EBE8",
        reading: "#FFFD3",
        accent: "#ADB6C4",
      },
    },
  },
  variants: {},
  plugins: [],
};
