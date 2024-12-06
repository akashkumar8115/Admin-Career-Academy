/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {

    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],

    },
    colors: {

      "green-shade-50": "#67CBA6",
      "green-shade-100": "#6eea8e",
      "violet-100": "#D3C7F4",
      "violet-50": "#826cf6",
      "violet-200": "#D1DFFD",

      white: "#ffffff",
      black: {
        100: '#f5f5f5',
        200: '#e5e5e5',
        300: '#d4d4d4',
        400: '#a3a3a3',
        500: '#737373',
        600: '#525252',
        700: '#404040',
        800: '#262626',
        900: '#171717'
      },
      green: {
        100: '#d1fae5',
        200: '#a7f3d0',
        300: '#6ee7b7',
        400: '#34d399',
        500: '#10b981',
        600: '#059669',
        700: '#047857',
        800: '#064e3b'
      },

    },
    screens: {
      dxs: '300px',
      // => @media (min-width: 300px) { ... }

      xxs: '400px',
      // => @media (min-width: 400px) { ... }

      xsm: '458px',
      // => @media (min-width: 458px) { ... }

      xs: '500px',
      // => @media (min-width: 500px) { ... }

      ssm: '600px',
      // => @media (min-width: 640px) { ... }

      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      smd: '800px',
      // => @media (min-width: 800px) { ... }

      mmd: '860px',
      // => @media (min-width: 860px) { ... }

      xmd: '930px',
      // => @media (min-width: 930px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xlg: '1110px',
      // => @media (min-width: 1110px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      xxl: '1390px',
      // => @media (min-width: 1390px) { ... }
      '1490px': '1490px',
      // => @media (min-width: 1490px) { ... }
    },
    extend: {},
  },
  plugins: [],
}