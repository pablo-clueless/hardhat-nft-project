module.exports = {
    content: ['./src/**/*.{js,jsx,ts,tsx}'],
    darkMode: 'class',
    theme: {
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
      },
      extend: {
        textColor: {
          primary: '#E35A44',
        },
        borderWidth: {
          1: '1px',
        },
        height: {
          100: '100px',
          300: '300px',
          400: '400px',
          500: '500px',
        },
        width: {
          100: '100px',
          150: '150px',
          300: '300px',
          400: '400px',
          500: '500px',
        },
      },
    },
    plugins: [],
  }