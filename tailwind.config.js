/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: 'class',

  theme: {
    extend: {
      screens: {
        'tablet:': "950px"
      },

      width: {
        divTimelineWidth: "300px",
        contactBoxWidth: "400px",


      },
      colors: {
        "lightGrey": "#D3D3D3",
        "linkedinColor": "#007FBC",
        "gmailColor": "#C6221F"
      },
      fontFamily: {
        "mont": "Montserrat"
      },
      backgroundImage: {
        heroBackGround: "url('/assets/cloud-background.jpeg')"
      },
      height: {
        homeHeight: "750px",
        reactLogoHeight: "96px",
        projectDivHeight: "100%",
        imageProjectHeight: "150px",
        logoTitleProjectHeight: "40px",
        logoTimelineHeight: '50px',
        reacteurHeight: '30px',
        contactBoxHeight: '250px'
      },
      minHeight: {
        timeLineHeight: "1500px"
      },




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
          "100%": { opacity: 1 }
        },
        'gigleSocials': {
          "0%": {
            transform: "translateX(10px)"
          },
          "50%": {
            transform: "translateX(-10px)"
          },
          "100%": {
            transform: "translateX(0px)"
          }
        },
        "scrollToTop": {
          "0%": {
            transform: "translateX(0px)",
          },

          "50%": {
            transform: "translateX(10px)",
          },

          "100%": {
            transform: "translateX(0px)",
          }
        }



      },
      animation: {
        // Nom de la classe utilitaire pour utiliser l'anim + 
        "fadeAnim": "fadeAnim 4s ease-out 1",
        "fadeHeader": "fadeHeader 4s ease-out 1 ",
        "gigleSocials": "gigleSocials 0.2s ease-out 1",
        "scrollToTop": "scrollToTop 1.3s ease-out infinite"
      }
    },
  },
  plugins: [],
}

