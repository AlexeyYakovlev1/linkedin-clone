const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

module.exports = {
    mode: 'development',
    entry: './src/scripts/script.ts',
    devServer: {
        port: 3000
    },
    output: {
        publicPath: 'client',
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'client')
    },
    resolve: {
        alias: {
            img: path.resolve(__dirname, './src/assets/images/'),
        },
    },
    plugins: [
        new HTMLWebpackPlugin({
            template: './src/views/user.pug',
            filename: 'user.html',
            chunks: ['user']
        }),
        new MiniCssExtractPlugin({
            filename: '[name].css'
        })
    ],
    module: {
        rules: [{
                test: /\.sass$/,
                use: ['style-loader', 'css-loader', 'sass-loader']
            },
            {
                test: /\.ts$/,
                use: ['ts-loader'],
                include: [path.resolve(__dirname, 'src/scripts/')]
            },
            {
                test: /\.pug$/,
                use: ['pug-loader']
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/,
                use: ['file-loader']
            }
        ]
    }
}