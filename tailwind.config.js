/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*.html"],
  theme: {
    container: {
      center: true,
      // padding: "10rem",
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
            100: "#5438FD",
            500: "#007bff",
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
