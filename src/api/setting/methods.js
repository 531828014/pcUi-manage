import axios from 'axios'
import { Loading } from 'element-ui'

// 封装get方法
export function $ajax_fetch(config, loadingOptions) {
    return new Promise((resolve, reject) => {
        let option = {
            method: 'get',
            params: {}
        }
        let {data, ...temp} = config
        temp.params = data ? data : {}
        let params = Object.assign(option, temp)
        let loadingOpt = loadingOptions ? Object.assign({text: window.GlobalConfig.loadingText, spinner: window.GlobalConfig.loadingSpinner}, loadingOptions) : null
        let loadingInstance = loadingOptions ? Loading.service(loadingOpt) : null
        axios(params).then(res => {
            if (loadingInstance) {
                loadingInstance.close()
            }
            resolve(res)
        }).catch(err => {
            if (loadingInstance) {
                loadingInstance.close()
            }
            reject()
        })
    })
}

// 封装post方法
export function $ajax_post(config, loadingOptions) {
    return new Promise((resolve, reject) => {
        let option = {
            method: 'post',
            data: {}
        }
        let params = Object.assign(option, config)
        let loadingOpt = loadingOptions ? Object.assign({text: window.GlobalConfig.loadingText, spinner: window.GlobalConfig.loadingSpinner}, loadingOptions) : null
        let loadingInstance = loadingOptions ? Loading.service(loadingOpt) : null
        axios(params).then(res => {
            if (loadingInstance) {
                loadingInstance.close()
            }
            resolve(res)
        }).catch(err => {
            if (loadingInstance) {
                loadingInstance.close()
            }
            reject()
        })
    })
}