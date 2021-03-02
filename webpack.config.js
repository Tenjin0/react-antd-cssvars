const path = require("path");

const HtmlWebpackPlugin = require( 'html-webpack-plugin' );
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const packageProject = require('./package.json')
const dist = path.resolve(__dirname, "docs/example");

module.exports = {
	entry: ['./example/index.tsx',],
	output: {
		path: dist,
	},
	resolve: {
		extensions: ['.js', '.ts', '.tsx', '.css', '.less'],
	},
	devtool: 'eval-source-map',
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
				use: [
					{
						loader: MiniCssExtractPlugin.loader,
					},
					{
						loader: 'css-loader',
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
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: [/node_modules/, /\*(spec|test|stories)\.tsx?/, /(spec|test|stories)\.tsx/],
    	}
    ],
  },

  plugins: [
		new CleanWebpackPlugin(),
		new MiniCssExtractPlugin({
			filename: "./css/[name].css"
		}),
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
	optimization: {
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
	},
}
