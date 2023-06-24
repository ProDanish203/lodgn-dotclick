/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#44A16F",
        secondary: "#72AA83",
        tertiary: "#D96A6B",
        "back-gray": "#D9D9D9",
        "txt": "#959595"
      },
      screens: {
        xsm: "550px",
        xs: "450px",
      }
    },
  },
  plugins: [],
}

