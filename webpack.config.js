const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
  mode: 'production',
  entry:  './src/modal.js', //library 设置与 entry 配置项绑定。对于绝大多数的库，指定一个入口就已经足够了
  plugins: [
    new HtmlWebpackPlugin({ // 创建了一个全新的文件，所有的 bundle 会自动添加到 html 中。
      title: 'modal'
    }),
    new MiniCssExtractPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [MiniCssExtractPlugin.loader, "css-loader"],
      },
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