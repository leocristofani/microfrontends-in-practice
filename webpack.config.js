const path = require('path');
const webpack = require('webpack');
const webpackMerge = require('webpack-merge');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const htmlPlugin = new HtmlWebpackPlugin({ template: './client/src/standalone.html' });
const cssPlugin = new MiniCssExtractPlugin({ filename: 'index.[hash].css' });

/**
 * Shared production config
 */
const sharedProductionConfig = {
  mode: 'production',
  plugins: [cssPlugin],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, "css-loader"]
      }
    ]
  }
};

const configs = {
  /**
   * Shared config
   */
  base: {
    plugins: [new webpack.ProgressPlugin()],
    module: {
      rules: [
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: {
            loader: 'babel-loader'
          }
        }
      ]
    }
  },
  /**
   * Development config
   */
  development: {
    mode: 'development',
    entry: './client/src/standalone.js',
    plugins: [htmlPlugin, cssPlugin],
    module: {
      rules: [
        {
          test: /\.css$/,
          use: ['style-loader', 'css-loader']
        }
      ]
    }
  },
  /**
   * Generates a standalone production bundle
   */
  standalone: webpackMerge(sharedProductionConfig, {
    entry: './client/src/standalone.js',
    plugins: [htmlPlugin],
    output: {
      publicPath: '/public/standalone/',
      filename: 'index.[hash].js',
      path: path.resolve(__dirname, 'public/standalone')
    }
  }),
  /**
   * Generates an embed production bundle
   */
  embed: webpackMerge(sharedProductionConfig, {
    entry: './client/src/embed.js',
    output: {
      library: 'Songs',
      libraryTarget: 'umd',
      filename: 'index.[hash].js',
      path: path.resolve(__dirname, 'public/embed')
    }
  })
}

module.exports = ({ target }) => {
  return webpackMerge(configs.base, configs[target]);
};