const HtmlWebPackPlugin = require('html-webpack-plugin')
const Path = require('path')

module.exports = {
  // stats: 'verbose',
  mode: 'production',
  entry: ['core-js/stable', Path.resolve('src', 'app/index.js')],
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
  },
  plugins: [
    new HtmlWebPackPlugin({
      template: Path.resolve('src', 'app/index.html')
    })
  ],
  resolve: {
    modules: [Path.join(__dirname, 'src'), 'node_modules'],
    alias: {
      src: Path.resolve('src'),
      components: Path.resolve('src', 'components'),
      style: Path.resolve('src', 'style')
    }
  }
}
