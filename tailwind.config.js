/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // Negro
          light: '#333333',
          dark: '#000000',
        },
        secondary: {
          DEFAULT: '#FFD700', // Amarillo
          light: '#FFE44D',
          dark: '#FFC107',
        },
        white: {
          DEFAULT: '#FFFFFF', // Blanco
          off: '#F8F9FA',
        }
      },
      fontFamily: {
        'boxing': ['Boxing-Regular', 'sans-serif'],
      },
    },
  },
  plugins: [],
} 