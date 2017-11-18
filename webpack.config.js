
const path = require('path');
// const webpack = require('webpack'); 
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin'); 
const OptimizeCSSAssets = require('optimize-css-assets-webpack-plugin');

const config = {
	entry: './src/index.js',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js'

	},
	resolve: {
		extensions: ['.js', '.json', '.scss', '.css', '.jpeg', '.jpg', '.gif', '.png'],
		alias: {
			images: path.resolve(__dirname, 'src/assets/images')
		}
	},
	module: {
		rules: [
			{
				use: [
					{
						loader: 'babel-loader',
						query: {
							presets: ['env']
						}
					}

				 ],
				test: /\.js$/,
				exclude: /node_modules/,
				
			},
			{
				test: /\.(css|sass|scss)$/,

				use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
					fallback:'style-loader', 
					use: [
						"css-loader",
						"sass-loader",
						"postcss-loader"
						
					]
				})),
			},
			// {
			// 	test: /\.(png|jp(e*)g|svg)$/,
			// 	use: [{
			// 		loader: 'url-loader',
			// 		options: {
			// 			limit: 8000,
			// 			name: 'src/assets/images/[hash]-[name].[ext]'
			// 		}
			// 	}, {loader: 'image-webpack-loader'}]

			// },
			{
				test: /\.(jpe?g|png|gif|svg)$/i,
				loaders: ['file-loader?context=src/assets/images/&name=images/[path][name].[ext]',{
					loader: 'image-webpack-loader',
					query: {
						mozjpeg: {
							progressive: true,
						},
						gifsicle: {
							interlaced: false,
						},
						optipng: {
							optimizationLevel: 4,
						},
						pngquant: {
							quality: '75-90',
							speed: 3,
						},
					},
				}], 
				exclude: /node_modules/,
				include: __dirname,
			}
		]
	},
	plugins: [
		new ExtractTextPlugin('style.css'),
		new HTMLWebpackPlugin({
			template: 'src/index.html'
		})
	],

	devServer:  {
		contentBase: path.resolve(__dirname, 'dist'),
		historyApiFallback: true, 
		inline: true,
		open: true,
		hot: true
	},
	devtool: 'eval-source-map'
}; 




module.exports = config; 


if (process.env.NODE_ENV === 'production') {
	module.exports.plugins.push(
		new webpack.optimize.UglifyJsPlugin(), // call uglify plugin
		new OptimizeCSSAssets() 
	); 
}