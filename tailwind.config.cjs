/** @type {import('tailwindcss').Config} */
const config = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        purple: "#524E58",
        orange: "#F98D21",
        "off-white": "#D9D9D9",
      },
    },
  },
  plugins: [require("@tailwindcss/forms")],
};

module.exports = config;
