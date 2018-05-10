const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');
// const ExtractTextPlugin = require('extract-text-webpack-plugin');
const webpack = require('webpack');
module.exports = {
	// 配置了development本地开发超级快
	mode: 'development', // "production" | "development" | "none"
	entry: ['./app/js/hotcss.js','./app/js/main.js'],
	// entry: {
	//   hotcss: './app/js/hotcss.js',
	//   app: './app/js/main.js'
	// },
	module: {
		rules: [
			{ test: /\.html$/, use: 'html-loader' },
			// vue
			{
				test: /\.vue$/,
				loader: 'vue-loader',
			},
			// css
			{
				test: /\.css$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: {
							// enable CSS Modules
							modules: true,
							// customize generated class names
							localIdentName: '[local]_[hash:base64:8]'
						}
					},
					{
						loader: 'px2rem-loader',
						// options here
						options: {
							remUni: 75,
							remPrecision: 8
						}
					}
				]
			},
			// scss
			{
				test: /\.scss$/,
				use: [
					'vue-style-loader',
					{
						loader: 'css-loader',
						options: { modules: true }
					},
					{
						loader: 'px2rem-loader',
						// options here
						options: {
							remUni: 75,
							remPrecision: 8
						}
					},
					'sass-loader'
				]
			},
			{
				test: /\.(png|svg|jpg|gif)$/,
				use: [
					'file-loader'
				]
			}
		]
	},
	plugins: [
		// webpack
		new webpack.HotModuleReplacementPlugin(),
		// clear
		new CleanWebpackPlugin(['dist']),
		// css
		new VueLoaderPlugin(),
		// html
		new HtmlWebpackPlugin({
			title: '示例页面',
			filename: 'index.html',
			template: './app/index.html'
		}),
	],
	resolve: {
		alias: {
			// vue: 'vue/dist/vue.js',
			'vue$': 'vue/dist/vue.esm.js',
		}
	},
	output: {
		filename: '[name].bundle.js',
		path: path.resolve(__dirname, 'dist')
	}
};
