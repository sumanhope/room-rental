/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [ "./src/**/*.{js,jsx,ts,tsx}",
],
  theme: {
    extend: {
      colors:{
        customOrange: '#F9482B',
        customShadow: '3fdd2cc',

      },
    },
    fontFamily: {
      inter : ['Inter', 'sans-serif'],
    }
  },
  plugins: [],
}

