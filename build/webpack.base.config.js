process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const path = require('path');
const Dotenv = require('dotenv-webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: ['./src/main.jsx']
  },
  resolve: {
    extensions: ['.js', '.jsx'],
    alias: {
      components: path.resolve(process.cwd(), 'src/components'),
      scss: path.resolve(process.cwd(), 'src/scss')
    }
  },
  plugins: [
    new Dotenv({
      path: path.join(process.cwd(), `${process.env.NODE_ENV}.env`)
    }),
    new HtmlWebpackPlugin({
      template: path.resolve(process.cwd(), 'src/index.html'),
      inject: true
    })
  ],
  module: {
    rules: [
      {
        test: /\.(m?js|jsx)$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader'
          },
          {
            loader: 'eslint-loader'
          }
        ]
      }
    ]
  },
  optimization: {
    noEmitOnErrors: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
};
