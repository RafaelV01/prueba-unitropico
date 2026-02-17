/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}"
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#004D40", // Dee  p Teal
        "primary-dark": "#00251a",
        "primary-light": "#00695c",
        secondary: "#bfa15f",
        "secondary-dark": "#8f763f",
        "accent-gold": "#d4af37",
        accent: "#B09A51", // Gold/Mustard
        "accent-light": "#C5B26E",
        "background-light": "#F9FAFB",
        "background-dark": "#121212",
        "surface-dark": "#1E1E1E",
        "surface-white": "#ffffff",
        "emerald-dark": "#003d33",
      },
      fontFamily: {
        sans: ["Montserrat", "ui-sans-serif", "system-ui", "sans-serif"],
        display: ["Orbitron", "sans-serif"],
        body: ["Montserrat", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage: {
        'network-light': "url('https://www.transparenttextures.com/patterns/cubes.png')",
        'network-dark': "url('https://www.transparenttextures.com/patterns/black-scales.png')",
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/forms'),
  ],
}
