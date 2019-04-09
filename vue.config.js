const path = require('path');

function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 7878,
        open: true,
        proxy: {
            '/proxy': {
                target: 'http://std-api.youzuowei.com.cn',
                changeOrigin: true,
                pathRewrite: {
                    '^/proxy': ''
                }
            }
        }
    },
    css: {
        loaderOptions: {
            stylus: {
                import: [
                    path.join(__dirname, 'src/stylus/variable.styl'),
                    path.join(__dirname, 'src/stylus/mixin/index.styl')
                ]
            }
        }
    },
    chainWebpack: config => {
        config.resolve.alias
            .set('@', resolve('src'))
            .set('api', resolve('src/api'))
            .set('mixins', resolve('src/mixins'))
            .set('model', resolve('src/model'))
            .set('components', resolve('src/components'))
            .set('router', resolve('src/router'))
            .set('store', resolve('src/store'))
            .set('stylus', resolve('src/sass'))
            .set('views', resolve('src/views'))
            .set('assets', resolve('src/assets'))
    }
}