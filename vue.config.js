//vue-cli配置文件

const path = require('path');
const BASE_URL = process.env.NODE_ENV === 'production' ? '/site-front-system-demo/' : '/';

module.exports = {
    publicPath: BASE_URL,
    devServer: {
        proxy: {
            '/api': {
                target: 'http://localhost:7001',
            },
        },
        // build: {
        //     index: path.resolve(__dirname, '../dist/index.html'),
        //     assetsRoot: path.resolve(__dirname, '../dist'),
        //     assertsSubDirectory: './static',
        //     assertsPublicPath: './',
        // }
    },
    
};