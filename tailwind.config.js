/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      "white": "#FFFFFF",
      "black": "#000000"
    },
    fontFamily: {
      "mont": "Montserrat"
    },
    extend: {
      keyframes: {
        // Nom du keyframe
        "fadeAnim": {
          '0%': {
            transform: 'translateY(-30px)',
            opacity: 0
          },

          "100%": {
            transform: 'translateY(0)',

          }
        },

        'fadeHeader': {
          "0%": {
            opacity: 0
          },
          "50%": {
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

