// ----------------------
// Modules
// ----------------------

const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');



// ----------------------
// Helpers
// ----------------------

function absPath (value) {
    return path.join(__dirname, value);
}



// ----------------------
// Config
// ----------------------

module.exports = {

    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    MiniCssExtractPlugin.loader,
                    'css-loader'
                ]
            },
            {
                test: /\.svg$/,
                use: 'raw-loader'
            }
        ]
    },

    devServer: {
        static: 'dist',
        compress: true,
        port: 49043
    },

    plugins: [
        new webpack.DefinePlugin({
            NS: JSON.stringify('http://www.w3.org/2000/svg')
        }),
        new MiniCssExtractPlugin({
            filename: 'mind-map.css'
        })
    ],

    resolve: {
        alias: {
            '@': absPath('src')
        }
    },

    output: {
        library: 'MindMap',
        libraryTarget: 'umd',
        libraryExport: 'default',
        filename: 'mind-map.js'
    },

    devtool: 'source-map'

};
