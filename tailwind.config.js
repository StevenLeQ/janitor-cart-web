/** @type {import("tailwindcss").Config} */
import defaultTheme from "tailwindcss/defaultTheme"

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        "logo": ["GeneralSans-Semibold", "Archivo", ...defaultTheme.fontFamily.sans],
        "sans": ["Inter", ...defaultTheme.fontFamily.sans]
      },
      colors: {
        "royal-blue": "#0028BE",
        "grayish-blue": "#E6EAF9",
        "font-gray": "#607489",
        "font-black": "#212B36",
      }
    },
  },
  plugins: [],
}

