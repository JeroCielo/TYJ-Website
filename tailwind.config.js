/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    color: {
      'ivory': '#f2ece2',
      'myRed': '#ea4f4a'
    },
    extend: {

    },
  },
  plugins: [],
}
