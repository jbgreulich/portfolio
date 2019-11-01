const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
  mode: 'development',
  devtool: 'eval-source-map',
  context: path.resolve(__dirname),
  entry: {
    app: ['react-hot-loader/patch', './src/index.js'],
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: '[name].js',
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      title: 'Jessica Greulich | Portfolio',
    }),
    new MiniCssExtractPlugin({
      filename: 'dist/styles/[name].css',
    }),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      {
        test: /\.(gif|svg|jpg|jpeg|png)$/,
        loader: 'file-loader',
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', 'jsx'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    },
  },
  devServer: {
    port: 3000,
    historyApiFallback: true,
    hot: true,
    open: true,
  },
};