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
        xs: ['11px', {
          lineHeight: '13px',
          letterSpacing: 0,
          fontWeight: 300
        }],
        sm: ['13px', {
          lineHeight: '15px',
          letterSpacing: 0
        }],
        base: ['14px', {
          lineHeight: '16px',
          letterSpacing: 0
        }],
        lg: ['15px', {
          lineHeight: '17px',
          letterSpacing: 0
        }],
        xl: ['16px', {
          lineHeight: '18px',
          letterSpacing: 0
        }],
        '2xl': ['20px', {
          lineHeight: '23px',
          letterSpacing: 0
        }],
        '3xl': ['24px', {
          lineHeight: '28px',
          letterSpacing: 0
        }],
        '4xl': ['36px', {
          lineHeight: '41px',
          letterSpacing: 0
        }],
        '5xl': ['40px', {
          lineHeight: '46px',
          letterSpacing: 0
        }],
      },
    },
  },
  plugins: [],
}
