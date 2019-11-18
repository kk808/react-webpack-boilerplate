const merge = require('webpack-merge');
const common = require('./webpack.common');

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
				use: [ 'style-loader', 'css-loader', 'less-loader' ]
			}
		]
	}
});
