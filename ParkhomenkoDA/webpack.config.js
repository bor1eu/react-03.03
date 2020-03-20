const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
    entry: path.resolve(__dirname, "src", "index.js"),
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: 'index.js',
    },
    context: path.resolve(__dirname, "src"),
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                include: path.resolve(__dirname, "src"),
                loader: 'babel-loader',
                /*exclude: /node_modules/,*/
                options: {
                    presets: ['@babel/env', '@babel/react'],
                    plugins: ['@babel/plugin-proposal-class-properties']
                },
            },
        ],
    },
    plugins: [
        new HtmlWebpackPlugin({ template: path.resolve(__dirname, "index.html") })
    ],
    resolve: {
        extensions: [".jsx", ".js"],
    }
};