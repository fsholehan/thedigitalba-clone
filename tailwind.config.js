module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        blue: {
          450: "#004CFF",
        },
        gary: {
          450: "#A6A8AB",
        },
        purple: {
          450: "#4A2EAA",
          350: "#5F4C9F",
        },
        dark_blue: {
          100: "#1B0076",
          200: "#2C07A9",
        },
        red_new: "#EB175C",
        gray_new: "#E5F1FF",
        black_new: "#181B20",
        blue_beach: "#F8F9FB",
        white_new: "#F5F5F5",
      },
      fontFamily: {
        archivo: ['"Archivo"', "sans-serif"],
        inter: ['"Inter"', "sans-serif"],
      },
      width: {
        35: "347px",
        50: "500px",
        45: "456px",
      },
      height: {
        85: "850px",
        100: "1000px",
        45: "560px",
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
