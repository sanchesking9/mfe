const {merge} = require('webpack-merge');
const ModelFederationPlugin = require('webpack/lib/container/ModuleFederationPlugin');
const commonConfig = require('./webpack.common');
const packageJson = require('../package.json');

const prodConfig = {
    mode: 'production',
    output: {
        filename: '[name].[contenthash].js'
    },
    plugins: [
        new ModelFederationPlugin({
            name: 'marketing',
            filename: 'remoteEntry',
            exposes: {
                './MarketingApp': `./src/bootstrap`
            },
            shared: packageJson.dependencies,
        })
    ],
}

module.exports = merge(commonConfig, prodConfig);
