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

        // primary:"#F2F6FE",
        // chat:"#27282F",
        // chatBg:"#35383E",
        // chatInputBg:"#40454A",
        // rightBg:"#2E3037",
        // navBg:"#2E3037",
        // white:"#FEFEFF"

        // primary:"#F2F6FE",
        // white:"#FEFEFF",

        // chat:"#1F2129",
        // chatBg:"#1D1E24",
        // chatInputBg:"#40454A",
        // rightBg:"#2A2A37",
        // navBg:"#1C1F27",



      },
        maxWidth: {
      '1/2': '1920px',
    }
    },
  },
  plugins: [],
}
