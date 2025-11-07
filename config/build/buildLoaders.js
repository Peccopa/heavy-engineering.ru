const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { buildBabelLoader } = require('./babel/buildBabelLoader');

module.exports = function buildLoaders({ mode }) {
  const isDev = mode === 'development';

  const scssLoaderModules = {
    test: /\.module\.s[ac]ss$/i,
    use: [
      MiniCssExtractPlugin.loader,
      {
        loader: 'css-loader',
        options: {
          modules: {
            localIdentName: isDev ? '[path][local]' : '[hash:base64:8]',
          },
        },
      },
      'sass-loader',
    ],
  };

  const tsLoader = {
    test: /\.tsx?$/,
    use: 'ts-loader',
    exclude: /node_modules/,
  };


  const scssLoaderGlobal = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };

  const assetLoader = {
    test: /\.(png|svg|jpg|jpeg|gif|webp)$/i,
    type: 'asset/resource',
    generator: { filename: 'assets/images/[name].[hash:8].[ext]' },
  };

  const soundLoader = {
  test: /\.(mp3|wav)$/i,
  type: 'asset/resource',
  generator: {
    filename: 'assets/sounds/[name].[hash:8].[ext]',
  },
};

  const babelLoader = buildBabelLoader();
  const loaders = [tsLoader, scssLoaderModules, scssLoaderGlobal, assetLoader, soundLoader];

  !isDev && loaders.push(babelLoader);

  return loaders;
};
