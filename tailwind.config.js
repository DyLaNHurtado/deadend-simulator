/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor:{
        dark: 'background-color: #242423;',
        darkgray: 'background-color: #333533;',
        light: 'background-color: #e8eddf;',
        lightgray: 'background-color: #cfdbd5;',
        accent: 'background-color: #f5cb5c;',
      },
      colors:{
        dark: 'color: #242423;',
        darkgray: 'color: #333533;',
        light: 'color: #e8eddf;',
        lightgray: 'color: #cfdbd5;',
        accent: 'color: #f5cb5c;',
      }
    },
  },
  plugins: [],
}
