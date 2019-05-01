const fs = require('fs');
const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}
module.exports = {
    devServer: {
        port: 7879,
        open: true,
        proxy: {
            '/proxy': {
                //target: 'http://192.168.1.18:7676',
                target: 'http://localhost:5699',
                // target: 'http://std-api.youzuowei.com.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            sass: {
                import: [
                    path.join(__dirname, 'src/sass/variables.scss'),
                    path.join(__dirname, 'src/sass/index.scss')
                ]
            }
        },
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
            .set('mixins', resolve('src/mixins'))
            .set('model', resolve('src/model'))
            .set('utils', resolve('src/utils'))
            .set('components', resolve('src/components'))
            .set('router', resolve('src/router'))
            .set('store', resolve('src/store'))
            .set('sass', resolve('src/sass'))
            .set('views', resolve('src/views'))
            .set('assets', resolve('src/assets'))
            .set('directive', resolve('src/directive'))
    }
}