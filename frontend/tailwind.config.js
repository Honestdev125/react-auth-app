const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        sans: ["Manrope", ...defaultTheme.fontFamily.sans],
      },
      width: {
        '1440': '1440px',
        '195': '195px',
      },
      fontSize: {
        '40': '40px',
        '29': '29px',
      },
      lineHeight: {
        '52': '52px',
      },
      backgroundColor: {
        'purple-custom': '#8748FF'
      },
      colors: {
        'custom': '#232323',
        'purple-custom': '#8748FF',
        'blog': '#585858',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};