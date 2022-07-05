/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./public/index.html",
    "./src/**/*.{vue,ts}",
  ],
  theme: {
    screens: {
      'mobile': '540px',
      'tablet': '640px',
      'laptop': '1024px',
      'destop': '1280px'
    },
    extend: {}
  },
  plugins: [],
}
