/** @type {import('tailwindcss').Config} */
export default {
  darkMode: false,
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"], // Poppins ফন্ট যুক্ত করা
        prosto: ["Prosto One", "sans-serif"],
      },
    },
  },
  plugins: [require("daisyui")],
}

