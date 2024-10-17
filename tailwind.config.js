/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "color-primary": "#01051e",
        "color-primary-light": "#020726",
        "color-primary-dark": "#010417",
        "color-secondary": "#ff7d3b",
        "color-gray": "#333",
        "color-white": "#fff",
        "color-blob": "#A427DF",
      },

      fontFamily: {
        LXGW: ['"LXGW WenKai Mono TC", monospace;'],
        Poppins: ['"Poppins", sans-serif;'],
        Parisiene: ['"Parisienne", serif;'],
        Montserrat: ['"Montserrat", sans-serif;'],
        Sacramento: ['"Sacramento", serif;'],
        Roboto: ['"Roboto", sans-serif;'],
        WorkSans: ['"Work Sans", serif;'],
      }
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '20px',
        md: "50px"
      }
    }
  },
  plugins: [],
}

