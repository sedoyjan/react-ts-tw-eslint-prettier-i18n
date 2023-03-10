const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = merge(common, {
  mode: 'production',
  plugins: [new CleanWebpackPlugin(), new BundleAnalyzerPlugin()],
  optimization: {
    minimizer: [new CssMinimizerPlugin()],
  },
});
