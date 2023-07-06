/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['GeneralSans-Semibold', 'Archivo', ...defaultTheme.fontFamily.sans],
        'sans': ['Inter', ...defaultTheme.fontFamily.sans]
      },
      colors: {
        'logo-blue': '#0028BE',
      }
    },
  },
  plugins: [],
}

