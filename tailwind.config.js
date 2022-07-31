/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontSize:{
         x:'0.6rem'
      },
      colors:{
        primary:"#F2F6FE"
      },
        maxWidth: {
      '1/2': '1920px',
    }
    },
  },
  plugins: [],
}
