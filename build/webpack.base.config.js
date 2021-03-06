const webpack = require('webpack');

const dev = process.env.NODE_ENV === 'development' ? true : false;
const debug = process.env.DEBUG === 'true' ? true : false;
const production = process.env.NODE_ENV === 'production' ? true : false;

module.exports = {
  entry: './src/main.js',
  output: {
    path: './dist',
    publicPath: 'dist/',
    filename: 'build.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      'hljs': 'hljs',
      '$': 'jquery',
      '_': 'underscore'
    }),
    new webpack.DefinePlugin({
      __PROD__: production,
      __DEV__: dev,
      __DEBUG__: debug,
      'process.env.NODE_ENV': dev ? '"development"' : '"production"'
    })
  ],
  resolve: {
    alias: {
      'hljs': __dirname + '/../src/assets/hightlight.js',
      'jquery': __dirname + '/../src/assets/jquery.js',
      'underscore': __dirname + '/../src/assets/underscore.js'
    }
  },
  module: {
    loaders: [
      {
        test: /\.vue$/,
        loader: 'vue'
      },
      {
        test: /\.js$/,
        loader: 'babel!eslint',
        // make sure to exclude 3rd party code in node_modules
        exclude: /node_modules/
      },
      {
        // edit this for additional asset file types
        test: /\.(png|jpg|gif)$/,
        loader: 'url',
        query: {
          // inline files smaller then 10kb as base64 dataURL
          limit: 10000,
          // fallback to file-loader with this naming scheme
          name: '[name].[ext]?[hash]'
        }
      }
    ]
  },
  // vue-loader config:
  // lint all JavaScript inside *.vue files with ESLint
  // make sure to adjust your .eslintrc
  vue: {
    loaders: {
      js: 'babel!eslint'
    }
  }
}
