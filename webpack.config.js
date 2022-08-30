const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
    entry: './src/index.js',

    output: {
        path: __dirname + '/dist',
        filename: 'main.js'
    },

    module: {
        rules: [
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: /node_modules/
            },
            {
                test: /\.s?[ac]ss$/i,
                use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader']
            }
        ]
    },

    plugins: [

        new HtmlWebpackPlugin({
            filename: 'index.html',
            template: 'src/index.html'
        }),

        new MiniCssExtractPlugin({
            filename: 'index.css'
        })
    ]
}
