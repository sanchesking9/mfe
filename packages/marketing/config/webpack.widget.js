const {merge} = require('webpack-merge');
const commonConfig = require('./webpack.common');
const path = require("path");
const DESTINATION = path.resolve(__dirname, 'widget/');

const widgetConfig = {
    mode: 'development',
    devServer: {
        port: 8081,
        historyApiFallback: {
            index: 'index.html',
        }
    },
    output: {
        filename: 'marketingWidget.js',
        path: DESTINATION
    },
    optimization: {
        runtimeChunk: false,
        splitChunks: {
            cacheGroups: {
                default: false,
            }
        }
    }
}

module.exports = merge(commonConfig, widgetConfig);
