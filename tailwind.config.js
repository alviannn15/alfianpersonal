/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
     padding: "10rem",
    },
    fontFamily: {
      roboto: ["Roboto"],
      poppins: ["Poppins"],
    },
    extend: {
      spacing: {
        "custom-padding": "105px",
      },
      colors: {
        primary: {
          blue: {
            50: "#EDEFFD",
            100: "#DADEFB",
            200: "#B1B9F6",
            300: "#8D98F2",
            400: "#6878EE",
            500: "#4053E9",
            600: "#192FD7",
            700: "#1223A0",
            800: "#0C1769",
            900: "#060C37",
            950: "#03061B"
          },
        },
        secondary: {
          500: "#0C0533",
        },
      },
      backgroundImage: {
        "hero-pattern": "url('./assets/image/web-design.png')",
        "footer-texture": "url('/img/footer-texture.png')",
      },
    },
  },
  plugins: [],
};
