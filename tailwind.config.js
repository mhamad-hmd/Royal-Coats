import('tailwindcss').Config

module.exports = {
  content: [
    './shopify/config/*.json',
    './shopify/layout/*.liquid',
    './shopify/assets/*.liquid',
    './shopify/sections/*.liquid',
    './shopify/snippets/*.liquid',
    './shopify/templates/*.liquid',
    './shopify/templates/*.json',
    './shopify/templates/customers/*.liquid',
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