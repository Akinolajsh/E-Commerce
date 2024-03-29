/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      screens: {
        meduim: {max: "768px"},
        small: {max: "320px"},
      }
    },
  },
  plugins: [],
}

