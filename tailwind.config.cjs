/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "translucent-black": "rgba(0, 0, 0, 0.6)",
        "primary-light": "#f7a3b7",
        primary: "#f26b8b",
        "primary-dark": "#f26b8b",
      },
    },
  },
  plugins: [],
};
