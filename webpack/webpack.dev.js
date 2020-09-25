const merge = require('webpack-merge')
const common = require('./webpack.common')

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map',
  output: {
    filename: '[name].[hash].js'
  },
  module: {
    rules: [
      {
        test: /\.less$/,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                localIdentName: 'component_[local]__[hash:base64:5]'
              }
            }
          },
          'less-loader'
        ]
      }
    ]
  }
})
