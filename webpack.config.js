const path = require("path");

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const packageProject = require('./package.json')
const dist = path.resolve(__dirname, "docs/example");

module.exports = (env, options) => {

	const config =  {
		entry: ['./example/index.tsx',],
		output: {
			path: dist,
		},
		resolve: {
			extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
		},
		devtool: options.mode === "development" ? 'eval-source-map' : "cheap-module-source-map",
		devServer: {
			inline: true,
			contentBase: dist,
			hot: true,
			port: 9000,
		},
		module: {
			rules: [

				{
					test: /\.(less)$/,
					exclude: [/node_modules/],
					use: [
						{
							loader: 'css-loader',
							options: {
								importLoaders: 3,
								sourceMap: false
							}
						},
						{
							loader: 'less-loader',
							options: {
								lessOptions: {
									javascriptEnabled: true //This is important!
								},
							},
						},

					],
				},
				{
					test: /\.svg$/,
					loader: 'svg-inline-loader'
			},
				{
					test: /\.tsx?$/,
					use: 'ts-loader',
					exclude: [/node_modules/, /\*(spec|test|stories)\.tsx?/, /(spec|test|stories)\.tsx/],
				}
			],
		},

		plugins: [
			new HtmlWebpackPlugin({
				inject: true,
				template: path.join(__dirname, 'example/index.html'),
				filename: 'index.html',
				minify: {
					minifyJS: true,
					minifyCSS: true,
					removeComments: true,
					useShortDoctype: true,
					collapseWhitespace: true,
					collapseInlineTagWhitespace: true,
				},
				append: {
					head: `<script src="//cdn.polyfill.io/v3/polyfill.min.js"></script>`,
				},
				meta: {
					title: packageProject.name,
					description: packageProject.description,
					keywords: Array.isArray(packageProject.keywords)
						? packageProject.keywords.join(',')
						: undefined,
				},
			}),
		],
	}

	if (options.mode === "production") {
		config.module.rules[0].use.unshift({
			loader: MiniCssExtractPlugin.loader,
		})
		config.plugins.push(
			new MiniCssExtractPlugin({
				filename: "./css/[name].css"
			}),
		)
		config.plugins.unshift(
			new CleanWebpackPlugin(),
		)


		config.optimization = {
			minimize: options.mode === "development",
			minimizer: [
				// This is only used in production mode
				new TerserPlugin({
					terserOptions: {
						parse: {
							ecma: 8,
						},
						compress: {
							ecma: 5,
							warnings: false,
							comparisons: false,
							inline: 2,
						},
						mangle: {
							safari10: true,
						},
						keep_classnames: options.mode === "development",
						keep_fnames: options.mode === "development",
						output: {
							ecma: 5,
							comments: false,
							ascii_only: true,
						},
					},
				}),
			],
			splitChunks: {
				name: true,
				cacheGroups: {
					commons: {
						chunks: 'initial',
						minChunks: 2,
					},
					vendors: {
						test: /[\\/]node_modules[\\/]/,
						chunks: 'all',
						filename: 'vendor.[contenthash].js',
						priority: -10,
					},
				},
			},
			runtimeChunk: true,
		}
	}
	else {
		// config.stats = 'verbose',
		config.module.rules[0].use.unshift({
			loader: "style-loader",
		})
	}


	return config
}
