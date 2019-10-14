const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const outputPath = path.resolve(__dirname, 'build');

module.exports = {
  entry: {
    app: './src/index.tsx'
  },

  output: {
    path: outputPath,
    filename: 'static/js/[name].[hash].bundle.js',
    publicPath: '/',
  },

  devServer: {
    contentBase: outputPath,
    historyApiFallback: true
  },

  module: {
    rules: [
      {
        enforce: "pre",
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "eslint-loader",
        exclude: /node_modules/,
        options: {
          fix: true
        }
      },
      {
        test: /\.(js|jsx|tsx|ts)$/,
        loader: "babel-loader",
        exclude: /node_modules/,
      },
    ],
  },

  resolve: {
    extensions: ['.js', '.jsx', '.ts', '.tsx']
  },

  plugins: [
    new HtmlWebpackPlugin({
      filename: path.resolve(__dirname, 'build/index.html'),
      template: path.resolve(__dirname, 'src/index.html')
    })
  ]
}