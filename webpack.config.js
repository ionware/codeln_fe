const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    entry: {
        //bundle: './resources/js/app.js',
        bootstrap: './resources/js/bootstrap.js'
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
            filename: "[name].css"
        })
    ],
    mode: 'development',
    output: {
        path: path.resolve(__dirname, 'dist'),
    }
};