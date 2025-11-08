/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#499460',
        'primary-dark': '#3a7a4d',
        'primary-light': '#5fb079',
        'secondary': '#2c3e50',
        'accent': '#e8f5e9',
      },
    },
  },
  plugins: [],
}
