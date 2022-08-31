/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Karla", "sans-serif"],
        serif: ["Merriweather", "serif"],
      },
    },
  },
  darkMode: "class",
  plugins: [],
};
