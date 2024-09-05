/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js}"],
  theme: {
    extend: {
      backgroundImage: {
        'BLUISH': 'linear-gradient(135deg, rgba(55, 48, 107, 0.6), rgba(58, 134, 255, 0.5))',
      }
    },
  },
  plugins: [],
}

