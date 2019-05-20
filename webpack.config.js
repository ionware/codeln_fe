const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        //main: './resources/js/main.js',
        bootstrap: './resources/js/main.js'
    },
    module: {
        rules: [
            { test: /\.(js)$/, use: "babel-loader" },
            {
                test: /\.s?css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader"
                ]
            }
        ]
    },
    plugins: [
        new MiniCssExtractPlugin({
            filename: "../css/[name].css",
        })
    ],
    output: {
        path: path.resolve(__dirname, 'public', 'assets', 'js'),
    }
};