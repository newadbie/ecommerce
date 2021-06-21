const path = require("path");

module.exports = {
  reactStrictMode: true,
  optimizeFonts: true,
  images: {
    disableStaticImages: false,
  },
  sassOptions: {
    includePaths: [path.join(__dirname, "styles")],
    prependData: `@import "./styles/variables.scss";@import "./styles/mixins.scss";`,
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
