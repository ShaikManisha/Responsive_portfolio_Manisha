/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
      fontSize: {
        biggest: "1.75rem",
        h1: "1.5rem",
        h2: "1.25rem",
        h3: "1rem",
        normal: ".938rem",
        small: ".813rem",
        smaller: ".75rem",
        tiny: ".625rem",
      },
      fontWeight: {
        medium: 500,
        semibold: 600,
      },
      zIndex: {
        tooltip: 10,
        fixed: 100,
        modal: 1000,
      },
      colors: {
        firstColor: "#a395e9",
        firstColorAlt: "#9584e6",
        titleColor: "#f0f2f4",
        textColor: "#babec4",
        textColorLight: "#888b91",
        bodyColor: "#0b111e",
        containerColor: "#151c28",
      },
    },
  },
  plugins: [
    require("tailwindcss"),
    // Other PostCSS plugins if any
  ],
};
