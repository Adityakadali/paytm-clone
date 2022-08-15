/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/*.html"],
  theme: {
    extend: {
      colors: {
        pysky: {
          100: '#00BAF2',
          200: '#00afe3',
        },
        pyblue: {
          100: '#0f4a8a',
          200: '#0d3e80',
        },
      },
    },
    screens: {
      'sm': '480px',
      'md': '768px',
      'lg': '976px',
      'xl': '1024px',
      '2xl': '1200px',
    },
  },
  plugins: [],
}
