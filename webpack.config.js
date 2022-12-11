const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") , clean: true},
  mode: "development",
  devServer: {
    static: './dist',
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/,
        type: 'asset/resource'
      },
    ],
  }
};
