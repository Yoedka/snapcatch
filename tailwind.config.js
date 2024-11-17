const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Montserrat"', "sans-serif", ...defaultTheme.fontFamily.sans],
      },
      container: {
        center: true,
      },
      colors: {
        primary: {
          DEFAULT: "#CC3843",
          700: "#A01F28",
        },
        secondary: {
          DEFAULT: "#2F2F2F",
          700: "#1F1F1F",

          dark: "#D1D1D1",
          "dark-700": "#A1A1A1",
        },
        body: {
          DEFAULT: "#ffff",
          dark: "#212121",
        },
      },
    },
  },
  darkMode: "selector",
  plugins: [],
};
