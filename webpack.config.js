
const path = require('path');
// const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin')

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',

	},
	module: {
		rules: [
			{
				use: 'babel-loader',
				test: /\.js$/,
				exclude: /node_modules/
			},
			{
				test: /\.(css|sass|scss)$/,

				use: ExtractTextPlugin.extract({
					fallback:'style-loader', 
					use: [
						"css-loader",
						"postcss-loader",
						"sass-loader"
					]
				})
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HTMLWebpackPlugin({
			template: 'src/index.html'
		})
	]
}; 


module.exports = config; 