/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  theme: {
    extend: {
      fontSize:{
         x:'0.6rem'
      },
      colors:{
        primary:"#F2F6FE",
        chat:"#27282F",
        chatBg:"#171616",
        chatInputBg:"#2D2D2C",
        rightBg:"#1f1e1f",
        navBg:"#2C2C2D",
        white:"#FEFEFF"

      },
        maxWidth: {
      '1/2': '1920px',
    }
    },
  },
  plugins: [],
}
