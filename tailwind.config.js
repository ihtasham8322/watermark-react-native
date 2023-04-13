/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "subHeading-custom-color": "#A8A8A8",
      },
    },
  },
  plugins: [],
};
