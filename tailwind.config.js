/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: '#EE3B51',
        'wd-white': '#FFFFFF',
        'wd-grey': '#999999',
        'wd-darkgrey': '#2D2D2D',
        'wd-black': '#373090',
      },
      backgroundImage: {
        'hero-pattern':
          "linear-gradient(to left, rgba(0,0,0, 0), rgba(0,0,0,1)), url('../assets/hero/hero.jpg')",
      },
      fontFamily: {
        sans: ['poppins', 'arial', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
