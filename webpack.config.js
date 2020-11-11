const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
	mode: "production",
	entry: "./src/app/app.js",
	output: {
		filename: `[name].js`,
		path: path.resolve("./app/assets/bundle/")
	},
	module: {
		rules: [{
			test: /\.css$/,
			use: [{
					loader: MiniCssExtractPlugin.loader
				},
				"css-loader"
			]
		}]
	},
	plugins: [
		new MiniCssExtractPlugin({
			filename: "[name].css"
		})
	],
	devtool: "source-map"
};