import('tailwindcss').Config

module.exports = {
  content: [
    './royal-coats/config/*.json',
    './royal-coats/layout/*.liquid',
    './royal-coats/assets/*.liquid',
    './royal-coats/sections/*.liquid',
    './royal-coats/snippets/*.liquid',
    './royal-coats/templates/*.liquid',
    './royal-coats/templates/*.json',
    './royal-coats/templates/customers/*.liquid',
    "./src/**/*.{ts,tsx}"
],
  theme: {
    screens: {
      'xs':'310px',
      'sm': '640px',
      'md': '830px',
      'lg': '1080px',
      'xl': '1280px',
      '2xl': '1536px',
     },
    extend: {},
  },
  plugins: [],
}