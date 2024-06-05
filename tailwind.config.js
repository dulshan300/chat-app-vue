/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,vue}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'inter': ['Inter', 'sans-serif']
      },
      colors: {
        'chat-blue': '#00b0ff',
        'chat-gray': '#999',
        'chat-gray-light': '#e6e6e6',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}