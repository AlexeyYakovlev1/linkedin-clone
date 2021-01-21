const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin');

module.exports = {
    mode: 'development',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'docs')
    },
    entry: './src/client/public/scripts/script.js',
    devServer: {
        port: 5000
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/client/views/login.pug',
            filename: 'login.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/client/views/signup.pug',
            filename: 'signup.html'
        }),
        new HTMLWebpackPlugin({
            template: './src/client/views/user.pug',
            filename: 'user.html'
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        }),
        new CleanWebpackPlugin()
    ],
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']        
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']        
            },
            {
                test: /\.(png|jpg|jpeg)$/,
                use: ['file-loader']        
            },
            {
                test: /\.js$/,
                use: 'babel-loader',
                exclude: [
                  /node_modules/
                ]
            }
        ]
    }
}