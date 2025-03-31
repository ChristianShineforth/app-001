const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    entry: './index.web.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: 'bundle.js',
    },
    resolve: {
      alias: {
        'react-native$': 'react-native-web'
      },
      extensions: ['.web.js', '.js', '.jsx', '.json']
    },
    plugins: [
        new HtmlWebpackPlugin({
          template: path.resolve(__dirname, 'public', 'index.html'),
        }),
    ],
  };