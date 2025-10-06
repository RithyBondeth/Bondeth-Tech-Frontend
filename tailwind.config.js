/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "gray-sm": "#F5F5F5",
        "gray-md": "#B4B4B4",
        "gray-lg": "#636363",
        "primary": "#FF5757"
      }
    },
  },
  plugins: [],
}

