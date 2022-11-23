const path = require("path");
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    entry: {
        stone:"./src/stone.js",
        canvas:"./src/canvas.js"
    },
    output: {
        path: path.resolve(__dirname, "docs"),
        filename: "[name].bundle.js",
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
                exclude: /node_modules/,
            },
        ],
    },
    plugins: [new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "stone.html"),
        filename: "index.html",
    }),
    new HtmlWebpackPlugin({
        template: path.resolve(__dirname, "src", "canvas.html"),
        filename: "canvas.html",
    })]
};