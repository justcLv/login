'use strict';

const path = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
// const StyleLintPlugin= require('stylelint-webpack-plugin');

const production = process.env.NODE_ENV === 'production';
const testing = process.env.NODE_ENV === 'testing';
// var fileContent = require("raw!./file.txt");
// const grab = require('node-raw')(require, {dirname: __dirname});
// const webpackHtaccess = require('manage-htaccess');
// webpackHtaccess(
//   [
//     {
//       tag: 'TESTTAG',
//       enabled: !production
//     }
//   ],
//   path.join(__dirname, 'public/.htaccess')
// );

// ----------------
// BASE CONFIG
//  dev server hot reload test 1

let config = {
  devtool: production ? 'source-map' : 'inline-source-map',
  target: testing ? 'node' : 'web',
  context: __dirname,
  entry: {
    site: './src/site.js',
    preflight: './src/preflight.js'
  },
  output: {
    path: './public/assets',
    filename: '[name].js',
    publicPath: production ? '//78.84.178.36/magebit/assets/' : 'http://localhost:4000/assets/'
  },
  resolve: {
    modulesDirectories: [
      'src',
      'node_modules',
      'bower_components'
    ],
    root: path.resolve('./src/')
  },
  devServer: {inline: true}
};

// ----------------
// MODULES

config.module = {
  preLoaders: [
    {
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'eslint-loader'
    }
  ],
  loaders: [
    {
      test: /\.js$/,
      exclude: [/node_modules/, /preflight\.js$/],
      // loader: production ? 'babel-loader' : 'react-hot-loader!babel-loader'
      loader: 'babel-loader'
    },
    {
      test: /\.(scss)$/,
      loader: production
      ? ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader!resolve-url-loader?keepQuery!sass-loader?sourceMap')
      : 'style-loader!css-loader?sourceMap!postcss-loader!resolve-url-loader?keepQuery!sass-loader?sourceMap'
    },
    {
      test: /\.(css)$/,
      loader: production
        ? ExtractTextPlugin.extract('style-loader', 'css-loader?sourceMap!postcss-loader')
        : 'style-loader!css-loader?sourceMap!postcss-loader'
    },
    {
      test: /\.(png|jpg|jpeg|gif)$/,
      loader: production
        ? 'url-loader?limit=10000!image-webpack-loader'
        : 'url-loader?limit=10000'
    },
    {
      test: /\.eot(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader'
    },
    {
      test: /\.woff2(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?mimetype=application/font-woff'
    },
    {
      test: /\.woff(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?mimetype=application/font-woff'
    },
    {
      test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?mimetype=application/x-font-ttf'
    },
    {
      test: /\.svg(\?v=\d+\.\d+\.\d+)?$/,
      loader: 'file-loader?mimetype=image/svg+xml'
    },
    {
      test: /\.html$/,
      loader: 'raw-loader'
    }
  ]
};

config.sassLoader = {
  data: `$env: ${process.env.NODE_ENV};`
};

// ----------------
// PLUGINS

config.plugins = [];

config.plugins.push(new webpack.DefinePlugin({
  'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
  __CLIENT__: true,
  __SERVER__: false,
  __DEVELOPMENT__: !production,
  __DEVTOOLS__: !production
}));

if (production) {
  config.plugins.push(new webpack.optimize.DedupePlugin());
  config.plugins.push(new webpack.optimize.OccurenceOrderPlugin());
  config.plugins.push(new webpack.optimize.LimitChunkCountPlugin({maxChunks: 15}));
  config.plugins.push(new webpack.optimize.MinChunkSizePlugin({minChunkSize: 10000}));
  config.plugins.push(new ExtractTextPlugin('[name].css', {allChunks: true}));
  config.plugins.push(new webpack.optimize.UglifyJsPlugin(
    {
      compressor: {
        warnings: false,
        drop_console: true
      },
      output: {
        comments: false
      },
      debug: false,
      sourceMap: false
    }
  ));
}

// ----------------
// 3rd party loader and plugin configuration

// config.plugins.push(new StyleLintPlugin({
//   configFile: '.stylelintrc',
//   files: '**/*.s?(a|c)ss',
//   failOnError: false
// }));

config.eslint = {
  quite: !production,
  failOnWarning: false,
  failOnError: production
};

config.postcss = function () {
  let postPluginConf = [];
  postPluginConf.push(
    require('autoprefixer')({
      browsers: ['> 0.0001%'],
      cascade: true,
      remove: true
    })
  );
  postPluginConf.push(
    require('css-mqpacker')()
  );
  postPluginConf.push(
    require('cssnano')({
      discardComments: {
        removeAll: true
      },
      autoprefixer: false,
      reduceIdents: false,
      zindex: false
    })
  );
  return postPluginConf;
};

module.exports = config;
