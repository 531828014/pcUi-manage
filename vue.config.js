const path = require('path');
const fs = require('fs');
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    devServer: {
        port: 9090,
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
            sass: {
                import: [
                    path.join(__dirname, 'src/stylus/variable.scss'),
                    path.join(__dirname, 'src/stylus/mixin/index.scss')
                ]
                // data: fs.readFileSync('src/sass/variables.scss', 'utf-8')
            },
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
            .set('sass', resolve('src/sass'))
            .set('views', resolve('src/views'))
            .set('assets', resolve('src/assets'))
    }
}