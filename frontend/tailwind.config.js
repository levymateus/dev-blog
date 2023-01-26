const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      'sans': ['Ubuntu', ...defaultTheme.fontFamily.sans]
    },
    extend: {
      fontSize: {
        xs: ['12px', {
          lineHeight: '15px',
          letterSpacing: 0,
          fontWeight: 300
        }],
        sm: ['15px', {
          lineHeight: '17px',
          letterSpacing: 0
        }],
        base: ['16px', {
          lineHeight: '18px',
          letterSpacing: 0
        }],
        lg: ['17px', {
          lineHeight: '19px',
          letterSpacing: 0
        }],
        xl: ['18px', {
          lineHeight: '20px',
          letterSpacing: 0
        }],
        '2xl': ['22px', {
          lineHeight: '25px',
          letterSpacing: 0
        }],
        '3xl': ['26px', {
          lineHeight: '30px',
          letterSpacing: 0
        }],
        '4xl': ['38px', {
          lineHeight: '43px',
          letterSpacing: 0
        }],
        '5xl': ['42px', {
          lineHeight: '48px',
          letterSpacing: 0
        }],
      },
    },
  },
  plugins: [],
}
