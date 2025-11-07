module.exports = function buildResolvers(options) {
  return {
    extensions: ['.tsx', '.ts', '.js', '.scss', '.css'],
    alias: {
      '@': options.paths.src,
      // '@@': options.paths.sections,
    },
  };
};
