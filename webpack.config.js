const Path = require('path')

module.exports = () => {
  const mode = process.env.NODE_ENV === 'production' ? 'prod' : 'dev'
  return require(Path.resolve('webpack', `webpack.${mode}.js`))
}
