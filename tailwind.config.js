const { colors } = require("tailwindcss/defaultTheme");

module.exports = {
  future: {
    // removeDeprecatedGapUtilities: true,
    // purgeLayersByDefault: true,
  },
  // prefix: "riziq-",
  purge: [],
  theme: {
    extend: {
      colors: {
        blue: {
          ...colors.blue,
          100: "#9cdbdd",
        },
      },
    },
  },
  variants: {},
  plugins: [],
};
