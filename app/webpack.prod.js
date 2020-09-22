const path = require('path');
const Dotenv = require('dotenv-webpack');
const { merge } = require('webpack-merge');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const common = require('./webpack.common');

module.exports = merge(common, {
  mode: 'producition',
  devtool: 'eval-source-map',

  module: {
    rules: [
      {
        test: /\.css$/,
        use: [{ loader: 'style-loader' }, { loader: 'css-loader' }],
      },
    ],
  },

  plugins: [
    new CleanWebpackPlugin(),
    new Dotenv({
      path: path.resolve(__dirname, '.env.prod'),
      safe: true,
    }),
  ],
});
