/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        ubuntu: '"Ubuntu", sans-serif',
        exo: '"Exo 2", sans-serif',
        roboto: '"Roboto", sans-serif',
      },
      backgroundImage: {
        'bgAuth': "url('https://img.freepik.com/free-photo/building-scheduling-metal-tomatoes-entrance-hall_1417-1114.jpg?w=1060&t=st=1713206741~exp=1713207341~hmac=288917fa98d3e465e2663c80205b434f517fe67a3637ad8a176e3c16e4d4719e')",
        'profile': "url('https://img.freepik.com/free-photo/environmental-pollution-factory-exterior-night_23-2149057716.jpg?t=st=1713287271~exp=1713290871~hmac=3f6f4490c2673dfef7208d9c06d1da52954a5cde8429ef486b13b736280dcf1b&w=996')",
      }
    },
  },
  plugins: [require("daisyui")],
}

