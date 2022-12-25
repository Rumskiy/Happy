/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')

module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors:{
        'red-main': '#FF5437',
        'gray-main': '#F2F2F2',
        'blue-main': '#0278ED',
        'black-main': '#222222',
        'ligth-gray': '#666666',
      }
    },
  },
  plugins: [],
} 
