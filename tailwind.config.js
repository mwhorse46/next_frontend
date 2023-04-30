/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors');
const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    borderRadius: {
      'none': '0',
      'sm': '0.125rem',
      DEFAULT: '0.25rem',
      DEFAULT: '4px',
      'md': '0.375rem',
      'lg': '0.5rem',
      'xl': '0.75rem',
      '2xl': '1rem',
      '3xl': '1.5rem',
      '4xl': '1.875rem',
      '5xl': '2.5rem',
      'full': '9999px',
      'large': '12px',
    },
    letterSpacing:{
      wider:'0.125em',
      widest:'0.3125em'
    },
    colors:{
      ...colors,
      'gray':{
        200:'#101010',
        300:'#3e4048',
        500:"#a1a1a1",
        600:"#AFAFAF",
        700:"#757575",
        800:'#7e7e7e',
        900:'#3e3e3e'
      },
      'gras':{
        400:'#181718',
        500:'#4d4c4d',
        600:'#212121',
        800:'#171717'
      },
      'customGray':{
        200:'#6f6f6f',
        300:'#2f2f32',
        400:'#c4c4c4',
        500:'#696969',
        600:'#454545',
        700:'#61656d',
        800:' #f7f8fa',
        900:'#eaeaec'
      },
      'customBlack':{
        400:'#909090',
      }
    },
    extend: {
      fontFamily:{
        CormorantGaramond:['Cormorant Garamond, serif'],
        sans:['Poppins',...defaultTheme.fontFamily.sans],
        myraidPro:['MYRIADPRO'],
      },
      zIndex: {
        '100': '100',
      }

    },
  },
  plugins: [],
}