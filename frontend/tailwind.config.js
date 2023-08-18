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
        'purple-custom': '#8748FF',
        'footer-custom': '#000025',
      },
      colors: {
        'custom': '#232323',
        'purple-custom': '#8748FF',
        'blog': '#585858',
        'footer-p': '#9A9A9A',
      },
      backgroundImage: {
        'signin-img': 'url(https://img.freepik.com/free-vector/technology-background_23-2148119855.jpg?w=2000&t=st=1689179372~exp=1689179972~hmac=8a67af351443807b8728d4c2e1b067ba4a54be7b07c038cac30bdb71291062c1)' 
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};