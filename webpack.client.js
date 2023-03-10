const path = require("path");

module.exports = {
  mode: "development",
  entry: "./src/client/index.js",
  output: {
    filename: "webpack-bundle.js",
    path: path.resolve(__dirname, "public"),
  },
  module: {
    rules: [
      {
        test: /\.js?$/,
        loader: "babel-loader",
        exclude: /node_modules/,
        options: {
          presets: ["@babel/react", "@babel/env"],
        },
      },
    ],
  },
};
