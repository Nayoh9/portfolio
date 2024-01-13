/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "black": "#000000",
      "grey": "#808080",
      "lightGrey": "#D3D3D3"
    },
    fontFamily: {
      "mont": "Montserrat"
    },
    backgroundImage: {
      heroBackGround: "url('https://res.cloudinary.com/dwkwlok28/image/upload/v1704811696/portfolio/cloud-background_idlorr.jpg')"
    },
    height: {
      homeHeight: "80vh",
      reactLogoHeight: "96px",
      projectDivHeight: "550px"
    },
    minHeight: {
      minProjectDivHeight: "550px"
    },
    extend: {
      keyframes: {
        // Nom du keyframe
        "fadeAnim": {
          '0%': {
            // transform: 'translateY(-10px)',
            opacity: 50
          },
          "100%": {
            // transform: 'translateY(0px)',
          }
        },
        'fadeHeader': {
          "0%": {
            opacity: 0
          },
          "50%": {
            opacity: 0
          },
          "75%": {
            opacity: 0
          },
          "100%": { opacity: 1 }
        },


      },
      animation: {
        // Nom de la classe utilitaire pour utiliser l'anim + 
        "fadeAnim": "fadeAnim 4s ease-out 1",
        "fadeHeader": "fadeHeader 4s ease-out 1 "
      }
    },
  },
  plugins: [],
}

