const buildDevServer = require('./buildDevServer');
const buildLoaders = require('./buildLoaders');
const buildPlugins = require('./buildPlugins');
const buildResolvers = require('./buildResolvers');

module.exports = function buildWebpack(options) {
  const { mode, paths } = options;
  const isDev = mode === 'development';

  return {
    mode: mode ?? 'development',
    entry: paths.entry,
    output: {
      path: paths.output,
      filename: '[name].[contenthash:8].js',
      assetModuleFilename: 'assets/[name][ext]',
      clean: true,
    },
    plugins: buildPlugins(options),
    module: {
      rules: buildLoaders(options),
    },
    resolve: buildResolvers(options),
    devtool: isDev && 'inline-source-map',
    devServer: isDev && buildDevServer(options),
  };
};
