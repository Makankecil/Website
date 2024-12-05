/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/index.html'],
  theme: {
    screens:{
      sm: '340px',
      md: '540px',
      lg: '768px',
      xl: '1180px',
    },
    extend: {
      fontFamily: {
        main : ['"Plus Jakarta Sans"', 'serif'],
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '12px',
        md: '32px'
      },
    }
  },
  plugins: [],
}

