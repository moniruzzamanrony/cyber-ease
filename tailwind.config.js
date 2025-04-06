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
        prosto: ["Prosto One", "sans-serif"], // Poppins ফন্ট যুক্ত করা
      },
    },
  },
  plugins: [require("daisyui")],
}

