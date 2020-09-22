const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: path.resolve(__dirname, 'src', 'index.js'),
  target: 'web',
  resolve: {
    alias: {
      App: path.resolve(__dirname, 'src', 'App'),
      Assets: path.resolve(__dirname, 'src', 'Assets'),
      Components: path.resolve(__dirname, 'src', 'Components'),
      Constants: path.resolve(__dirname, 'src', 'Constants'),
      Containers: path.resolve(__dirname, 'src', 'Containers'),
      Pages: path.resolve(__dirname, 'src', 'Pages'),
      Routes: path.resolve(__dirname, 'src', 'Routes'),
      Services: path.resolve(__dirname, 'src', 'Services'),
      Store: path.resolve(__dirname, 'src', 'Store'),
      Styles: path.resolve(__dirname, 'src', 'Styles'),
      src: path.resolve(__dirname, 'src'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  output: {
    path: path.resolve(__dirname, 'dist', 'index.js'),
    chunkFilename: '[name].[hash].js',
    publicPath: '/',
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
        },
      },
      {
        test: /\.style.js$/,
        loader: 'babel-loader',
        options: {
          presets: ['@babel/preset-env', '@babel/preset-react'],
          plugins: [
            [
              'babel-plugin-styled-components',
              {
                ssr: false,
                minify: true,
                pure: true,
              },
            ],
          ],
        },
      },
      {
        test: /\.(png|jpe?g|gif|svg)$/,
        use: [
          {
            loader: 'file-loader',
            options: {
              name: '[path][name].[ext]',
              publicPath: 'assets',
              emitFile: false,
            },
          },
        ],
      },
    ],
  },
  optimization: {
    splitChunks: {
      cacheGroups: {
        default: false,
        vendors: false,
        vendor: {
          chunks: 'all',
          test: /node_modules/,
        },
      },
    },
  },
  plugins: [
    new HtmlWebpackPlugin({
      minify: false,
      filename: 'index.html',
      template: path.resolve(__dirname, 'public', 'index.html'),
    }),
  ],
};
