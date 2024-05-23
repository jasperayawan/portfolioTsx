/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'Krona-One': ['Krona One','sans-serif'],
      }
    },
  },
  plugins: [],
  darkMode: 'class'
}

