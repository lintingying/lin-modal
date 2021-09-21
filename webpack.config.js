const path = require('path');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
  mode: 'production',
  entry:  './src/modal.js', //library 设置与 entry 配置项绑定。对于绝大多数的库，指定一个入口就已经足够了
  plugins: [
    new MiniCssExtractPlugin({
      filename: "modal.css"
    })
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"], // 推荐 production 环境的构建将 CSS 从你的 bundle 中分离出来，这样可以使用 CSS/JS 文件的并行加载。 这可以通过使用 mini-css-extract-plugin 来实现，因为它可以创建单独的 CSS 文件。 对于 development 模式（包括 webpack-dev-server），你可以使用 style-loader，因为它可以使用多个 标签将 CSS 插入到 DOM 中，并且反应会更快。
      },
    ],
  },
  optimization: {
    minimizer: [
      // For webpack@5 you can use the `...` syntax to extend existing minimizers (i.e. `terser-webpack-plugin`), uncomment the next line
      `...`,
      new CssMinimizerPlugin(),
    ],
  },
  output: {
    filename: 'modal.js',
    path: path.resolve(__dirname, 'dist'), // 绝对路径
    clean: true, 
    library: { // 暴露从入口导出的内容
      name: 'Modal',
      type: 'umd'
    }
  },
};