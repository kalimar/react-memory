var webpack = require('webpack');
var path = require('path');

module.exports = {
  cache: true,
  debug: true,
  devtool: 'source-map',
  context: path.join(__dirname, 'src'),
  entry: [
    'webpack-dev-server/client?http://localhost:4000',
    'webpack/hot/only-dev-server',
    './index'
  ],
  output: {
    path: __dirname + '/dist',
    filename: 'memory.js'
  },
  resolve: {
    extensions: ['', '.js', '.scss'],
    modulesDirectories: ['node_modules', 'src'],
    fallback: __dirname
  },
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'babel'], exclude: /node_modules/ },
      { test: /\.scss$/, loaders: ['style', 'css', 'sass'], exclude: /node_modules/ }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ]
};
