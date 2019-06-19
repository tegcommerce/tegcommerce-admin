const webpack = require('webpack');
const merge = require('webpack-merge');
const path = require('path');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const baseWebpackConfig = require('./webpack.base.config');
const config = require('./config');

const progressPluginHandler = (percentage, msg) => {
  // eslint-disable-next-line no-console
  console.info(`${parseInt(percentage * 100, 10).toFixed(0)}%`, msg);
};

module.exports = merge(baseWebpackConfig, {
  output: {
    path: path.resolve(process.cwd(), 'dist'),
    publicPath: '/',
    filename: '[name].bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.scss?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader
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
    contentBase: path.resolve(process.cwd(), 'dist'),
    historyApiFallback: true,
    hot: true,
    port: config.dev.port,
    noInfo: false
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: '[name].css',
      chunkFilename: '[id].css'
    }),
    new CleanWebpackPlugin(),
    new webpack.ProgressPlugin(progressPluginHandler)
  ],
  stats: 'errors-only'
});
