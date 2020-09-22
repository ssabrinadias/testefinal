const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const { HotModuleReplacementPlugin } = require('webpack');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',

  devServer: {
    contentBase: path.resolve(__dirname, 'dist'),
    writeToDisk: true,
    historyApiFallback: true,
    hot: true,
    port: 3001,
  },

  plugins: [
    new HotModuleReplacementPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '.env.dev'),
      safe: true,
    }),
  ],
});
