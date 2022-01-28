const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");

let mode = "development";
let target = "web";

if (process.env.NODE_ENV === "production") {
	mode = "production";
	target = "browserslist";
}
module.exports = {
	mode: mode,
	target: target,
	entry: {
		main: "./src/index.js",
		//vendor: "./src/vendor.js"
	},
	output: {
		path: path.resolve(__dirname, "dist"),
		assetModuleFilename: "img/[name][ext]", // "images/[hash][ext][query]",
		filename: "[name].[hash].js",
	},
	module: {
		rules: [
			{
				test: /\.(png|jpe?g|gif|svg)$/i,
				type: "asset",
			},
			{
				test: /\.(s[ac]|c)ss$/i,
				use: [
					mode === "production" ? MiniCssExtractPlugin.loader : "style-loader",
					"css-loader",
					"postcss-loader",
					"sass-loader",
				],
			},
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader",
				},
			},
		],
	},
	plugins: [
		new MiniCssExtractPlugin({ filename: "[name].[hash].css" }),
		new HtmlWebpackPlugin({
			template: path.resolve(__dirname, "src/index.html"),
		}),
	],

	devtool: "source-map", // good for debugging
	devServer: {
		static: path.resolve(__dirname, "dist"), // devServer will just inject the changes we make in out files.
		hot: true, // for hot loading on save
	},
};
