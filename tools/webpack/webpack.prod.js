const { rootPath } = require('../common/utils');

module.exports = {
  mode: 'production',
  entry: ['./src/appRenderer.tsx'],
  module: {
    rules: require('./rules'),
  },
  output: {
    path: rootPath('build'),
    filename: '[name].[chunkhash].js',
    chunkFilename: '[name].[chunkhash].chunk.js',
    clean: true,
  },
  plugins: [...require('./plugins')],
  resolve: {
    extensions: ['.js', '.ts', '.jsx', '.tsx', '.css'],
    alias: {
      // Custom Aliases
      ...require('./aliases'),
    },
  },
  stats: 'errors-warnings',
  optimization: {
    minimize: true,
    sideEffects: true,
    concatenateModules: true,
    runtimeChunk: 'single',
    splitChunks: {
      chunks: 'all',
      maxInitialRequests: 10,
      minSize: 0,
      cacheGroups: {
        vendor: {
          name: 'vendors',
          test: /[\\/]node_modules[\\/]/,
          chunks: 'all',
        },
      },
    },
  },
};
