/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#679436',
        secondary: '#10B981',
        accent: '#3B82F6',
      },
    },
  },
  plugins: [],
}

