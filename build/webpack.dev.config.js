const webpack = require('webpack');
const path = require('path');
const merge = require('webpack-merge');
const DashboardPlugin = require('webpack-dashboard/plugin');
// const { BundleAnalyzerPlugin } = require('webpack-bundle-analyzer');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config');

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(process.cwd(), 'src'),
    publicPath: config.dev.publicAssetsPath,
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: [
          {
            loader: 'style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              modules: {
                mode: 'local',
                localIdentName: '[path][name]__[local]--[hash:base64:5]',
                context: path.resolve(process.cwd(), 'src')
              },
              importLoaders: 2
            }
          },
          {
            loader: 'sass-loader'
          }
        ]
      }
    ]
  },
  devServer: {
    contentBase: path.resolve(process.cwd(), 'src'),
    historyApiFallback: true,
    hot: true,
    port: config.dev.port,
    noInfo: false
  },
  devtool: 'eval-source-map',
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    // new webpack.NoEmitOnErrorsPlugin(),
    // new BundleAnalyzerPlugin(),
    new DashboardPlugin()
  ]
});
