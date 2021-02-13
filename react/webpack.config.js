const path = require("path");

module.exports = {
  devServer: {
    historyApiFallback: true,
  },
  entry: path.resolve(__dirname, 'src', 'index.js'),
  mode: 'development',
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      use: ['source-map-loader'],
    }, {
      exclude: /node_modules/,
      include: path.resolve(__dirname, 'src'),
      test: /\.(jsx|js)$/,
      use: [{
        loader: 'babel-loader',
        options: {
          presets: [
            ['@babel/preset-env', {
              targets: 'defaults'
            }],
            '@babel/preset-react',
          ],
        },
      }],
    }, {
      test: /\.css$/i,
      use: ['style-loader', 'css-loader'],
    }, {
      test: /\.(otf|eot|svg|ttf|woff|woff2)$/i,
      use: [{
        loader: 'url-loader',
        options: {
          limit: 10000,
        },
      }],
    }]
  },
  output: {
    crossOriginLoading: 'anonymous',
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'public'),
    publicPath: '/',
  },
};
