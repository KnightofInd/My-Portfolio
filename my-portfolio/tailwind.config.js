/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-inter)'],
        syne: ['var(--font-syne)'],
      },
      colors: {
        'custom-navy': '#000080',
      },
    },
  },
  plugins: [],
}