const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CopyPlugin = require('copy-webpack-plugin');

module.exports = function buildPlugins(options) {
  const { mode, paths } = options;

  const plugins = [
    new MiniCssExtractPlugin({
      filename: 'css/[name].[contenthash:8].css',
      chunkFilename: 'css/[name].[contenthash:8].css',
    }),
    new HtmlWebpackPlugin({
      template: paths.html,
      favicon: path.resolve(paths.public, 'favicon.svg'),
    }),
    new webpack.ProgressPlugin(),
    new CopyPlugin({
      patterns: [
        {
          from: path.resolve(paths.public, 'locales'),
          to: path.resolve(paths.output, 'locales'),
        },
        {
          from: path.resolve(paths.public, 'assets'),
          to: path.resolve(paths.output, 'assets'),
        },
      ],
    }),
  ];

  return plugins;
};
