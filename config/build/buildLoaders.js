const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const { buildBabelLoader } = require('./babel/buildBabelLoader');

module.exports = function buildLoaders({ mode }) {
  const isDev = mode === 'development';

  // SCSS модули
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
          esModule: false,
        },
      },
      'sass-loader',
    ],
  };

  // SCSS глобальные
  const scssLoaderGlobal = {
    test: /\.s[ac]ss$/i,
    exclude: /\.module\.s[ac]ss$/i,
    use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
  };

  // TypeScript
  const tsLoader = {
    test: /\.tsx?$/i,
    use: 'ts-loader',
    exclude: /node_modules/,
  };

  // // SVG как ReactComponent
  // const svgComponentLoader = {
  //   test: /\.svg$/i,
  //   // issuer: /\.[jt]sx?$/, // только JS/TS файлы
  //   use: ['@svgr/webpack'],
  // };

  // Остальные изображения
  const assetLoader = {
    test: /\.(png|jpe?g|gif|svg)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/images/[name].[hash:8].[ext]',
    },
  };

  // Звуки
  const soundLoader = {
    test: /\.(mp3|wav)$/i,
    type: 'asset/resource',
    generator: {
      filename: 'assets/sounds/[name].[hash:8].[ext]',
    },
  };

  const babelLoader = buildBabelLoader();

  const loaders = [
    tsLoader,
    scssLoaderModules,
    scssLoaderGlobal,
    assetLoader,
    soundLoader,
  ];

  if (!isDev) loaders.push(babelLoader);

  return loaders;
};
