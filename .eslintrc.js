module.exports = {
	env: {
		browser: true,
		node: true,
		es6: true,
		jquery: true
	},
	extends: 'eslint:recommended',
	globals: {
		Atomics: 'readonly',
		SharedArrayBuffer: 'readonly'
	},
	parserOptions: {
		sourceType: 'module',
		ecmaVersion: 2018
	},
	rules: {}
};
