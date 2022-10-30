/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "translucent-black": "rgba(0, 0, 0, 0.6)",
        "light-yellow": "#f0e4a6",
        "main-yellow": "#EED970",
        "dark-yellow": "#D4B100",
      },
    },
  },
  plugins: [],
};
