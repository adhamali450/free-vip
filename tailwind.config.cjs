/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "main-yellow": "#EED970",
        "dark-yellow": "#D4B100",
      },
    },
  },
  plugins: [],
};
