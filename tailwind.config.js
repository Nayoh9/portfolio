/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "black": "#000000"
    },
    backgroundImage: {
      "hero-banner": "url('https://res.cloudinary.com/dwkwlok28/image/upload/v1704811696/portfolio/cloud-background_idlorr.jpg')"
    },
    fontFamily: {
      "mont": "Montserrat"
    },
    extend: {},
  },
  plugins: [],
}

