const path = require('path');
const buildWebpack = require('./config/build/buildWebpack');

module.exports = (env) => {
  const paths = {
    output: path.resolve(__dirname, 'build'),
    entry: path.resolve(__dirname, 'src', 'app', 'index.tsx'),
    html: path.resolve(__dirname, 'public', 'index.html'),
    public: path.resolve(__dirname, 'public'),
    src: path.resolve(__dirname, 'src'),
    app: path.resolve(__dirname, 'src/app'),
    sections: path.resolve(__dirname, 'src/app/pages/main-page/main/sections'),
  };

  const config = buildWebpack({
    port: env.port ?? 3000,
    mode: env.mode ?? 'development',
    paths,
  });

  return config;
};
