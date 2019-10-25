const HtmlWebPackPlugin = require('html-webpack-plugin');
const Webpack = require('webpack');
const Path = require('path');

module.exports = {
	entry: {
		main: [ Path.resolve('src', 'app/index.js') ]
	},
	mode: 'production',
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
		new Webpack.DefinePlugin({
			'process.env.NODE_ENV': JSON.stringify('production')
		}),
		new HtmlWebPackPlugin({
			template: Path.resolve('src', 'app/index.html')
		})
	],
	resolve: {
		modules: [ Path.join(__dirname, 'src'), 'node_modules' ],
		alias: {
			src: Path.resolve('src'),
			components: Path.resolve('src', 'components'),
			style: Path.resolve('src', 'style')
		}
	}
};
