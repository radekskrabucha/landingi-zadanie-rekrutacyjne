const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
const webpack = require("webpack");

module.exports = {
	mode: "development",
	entry: "./src/index.js",
	output: {
		filename: "bundle.js",
		path: path.resolve(__dirname, "build"),
		publicPath: "/",
	},
	plugins: [
		new HtmlWebpackPlugin({
			template: "./src/index.html",
		}),
		new webpack.ProvidePlugin({
			process: "process/browser",
		}),
	],
	resolve: {
		modules: [__dirname, "src", "node_modules"],
		extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
	},
	devServer: {
		historyApiFallback: true,
	},
	module: {
		rules: [
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				loader: require.resolve("babel-loader"),
			},
			{
				test: /\.css$/,
				use: [
					"style-loader",
					{
						loader: "css-loader",
						options: {
							importLoaders: 1,
							modules: true,
						},
					},
				],
				include: /\.module\.css$/,
			},
			{
				test: /\.css$/,
				use: ["style-loader", "css-loader"],
				exclude: /\.module\.css$/,
			},
			{
				test: /\.(png|jpe?g|svg|gif)$/i,
				use: ["file-loader"],
			},
		],
	},
};
