/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {

    extend: {
      fontFamily: {
        Alkatra: ["Alkatra", "sans-serif"],
        Roboto: ["Roboto", "sans-serif"],
        Nunito: ["Nunito", "sans-serif"],
        DancingScript: ["Dancing Script", "cursive"],
      },
      backgroundImage: {
        'login1': "url(./src/imgs/login-1.jpg)",
        'login2': "url(./src/imgs/login-2.jpg)",
      },
      colors: {
        primary: "#001B2E",
        secondary: "#F7EBE8",
        reading: "#FFFD3",
        accent: "#ADB6C4",
        richBlack: "#000814",
        oxfordBlue: "#001d3d",
        yaleBlue: "#003566",
        mikadoYellow: "#ffc300",
        gold: "#ffd60a"
      },
    },
  },
  variants: {},
  plugins: [],
};
