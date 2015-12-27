const path = require('path');
const webpack = require('webpack');

const postcssImport = require('postcss-import');
const autoprefixer = require('autoprefixer');
const customProperties = require('postcss-custom-properties');
const bemLinter = require('postcss-bem-linter');
const calcCSS = require('postcss-calc');
const cssMedia = require('postcss-custom-media');
const hexA = require('postcss-hexrgba');
const cssReport = require('postcss-reporter');
const mqPacker = require('css-mqpacker');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  debug: true,
  devtool: '#eval-source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack/hot/dev-server',
    'webpack-hot-middleware/client',
    './index',
  ],
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    publicPath: '/',
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new ExtractTextPlugin('app.css', {
      allChunks: true,
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  module: {
    loaders: [
      // compiling react components
      {
        test: /\.jsx?$/,
        include: path.join(__dirname, 'src'),
        // loaders: ['react-hot', 'babel'],
        loader: 'babel',
      },
      // css loader
      {
        test: /\.css/,
        include: path.join(__dirname, 'src'),
        loader: ExtractTextPlugin.extract('style', 'css!postcss'),
        // loader: 'style!css!postcss',
      },
      // file loaders
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|otf)$/,
        loader: 'url-loader?limit=10000&name=assets/[name].[ext]',
      },
      // json loader
      {
        test: /\.json$/,
        loader: 'json-loader',
      },
    ],
  },
  postcss: (webp) => {
    return [
      postcssImport({
        addDependencyTo: webp,
      }),
      bemLinter(),
      customProperties(),
      cssMedia(),
      calcCSS(),
      hexA(),
      autoprefixer(),
      mqPacker(),
      cssReport({ clearMessages: true }),
    ];
  },
};