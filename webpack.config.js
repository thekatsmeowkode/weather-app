const path = require("path");

module.exports = {
  entry: "./src/index.js",
  output: { filename: "main.js", path: path.resolve(__dirname, "dist") , clean: true},
  mode: "production",
//   devServer: {
//     static: './dist',
//   },
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
  }, 
  plugins: [
    new HtmlWebpackPlugin({
        template: 'src/index.html',
        filename: './dist/index.html',
        inject: false
    })
],
};
