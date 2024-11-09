/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        "inter": ['inter'] 
       },
      colors : {
      "grey" : '#222831',
      "orange" : {
        100: '#FFEDD5',
        200: '#FEF3C7',
        300: '#FDE68A',
        400: '#FCD34D',
        500: '#FBBF24',
        600: '#F59E0B',
        700: '#D97706',
        800: '#B45309',
        900: '#92400E',
        950: '#7A2A0D',
      },
      
    },
  },
  plugins: [],
}
}
