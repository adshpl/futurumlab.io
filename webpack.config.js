const path = require('path');

const CopyPlugin = require('copy-webpack-plugin');
const StylelintPlugin = require('stylelint-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const HtmlWebpackInlineSVGPlugin = require('html-webpack-inline-svg-plugin');

const sourcePath = path.join(__dirname, './src');
const buildPath = path.join(__dirname, './dist');

module.exports = {
  mode: 'production',
  output: {
    filename: '[name].js',
    path: buildPath,
    publicPath: '/',
  },
  stats: {
    errorDetails: true,
  },
  module: {
    rules: [
      {
        test: /\.(scss|css)$/,
        use: [
          {
            loader: 'style-loader',
          },
          {
            loader: 'css-loader',
          },
          {
            loader: 'sass-loader'
          },
        ],
      },
    ],
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        {
          from: `${sourcePath}/assets`,
          to: 'assets',
        },
      ],
    }),
    new HtmlWebpackPlugin({
      template: `${sourcePath}/index.html`,
      filename: 'index.html',
    }),
    new HtmlWebpackInlineSVGPlugin(),
    new StylelintPlugin(),
  ],
};