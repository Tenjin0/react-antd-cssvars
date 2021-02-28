const path = require("path");
const HtmlWebPackPlugin = require( 'html-webpack-plugin' );

const dist = path.resolve(__dirname, "dist");

module.exports = {
	mode: "development",
	entry: ['./example/index.tsx',],
	output: {
		publicPath: '/',
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
						loader: 'style-loader',
					},
					// {
					// 	loader: MiniCssExtractPlugin.loader,
					// },
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
		new HtmlWebPackPlugin({
			template: path.join(__dirname, 'example/index.html'),
			filename: 'index.html',
	}),
 ]
}
