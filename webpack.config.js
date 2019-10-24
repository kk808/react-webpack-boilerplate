const Path = require('path');

module.exports = (env, argv) => {
	const mode = argv && argv.mode == 'production' ? 'prod' : 'dev';
	return require(Path.resolve('webpack', `webpack.${mode}.js`));
};
