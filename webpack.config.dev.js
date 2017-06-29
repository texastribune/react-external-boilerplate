const path = require('path');
const webpack = require('webpack');

module.exports = {
  entry: [
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    './src/index'
  ],

  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'reactExternal.js',
    publicPath: '/',
    library: 'reactExternal',
    libraryTarget: 'umd'
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify('development')
    })
  ],

  module: {
    rules: [
      {
        test: /\.js$/,
        loaders: 'babel-loader',
        exclude: /node_modules/
      },

      {
        test: /\.(scss|sass)$/,
        use: [
          { loader: 'style-loader' },
          {
            loader: 'css-loader',
            options: {
              importLoaders: 1,
              modules: true,
              localIdentName: '[local]--[hash:base64:5]'
            }
          },
          { loader: 'sass-loader' }
        ]
      }
    ]
  }
};
