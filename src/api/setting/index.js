import axios from 'axios'
import {getUserInfo} from 'utils/storage'
import {forceToLogin, requestError} from './err-handle'
import { Modal, message } from 'ant-design-vue'

axios.defaults.baseURL = window.GlobalConfig.baseUrl
// 设置请求拦截器
axios.interceptors.request.use(config => {
    if (config.method === 'post') {
        if (!config.data.noCarryToken && config.data.noCarryToken !== true) {
            config.headers.Authorization = 'bearer ' + getUserInfo().token
        }
    }
    if (config.method === 'get') {
        if (!config.params.noCarryToken && config.params.noCarryToken !== true) {
            config.headers.Authorization = 'bearer ' + getUserInfo().token
        }
    }
    return config
}, err => {
    console.log(err)
})

// 设置响应拦截器, 集中处理接口消息
axios.interceptors.response.use(res => {
    if (res.status === 200) {
        if (res.config.method === 'post') {
            let submitData = JSON.parse(res.config.data)
            if (res.data.Result) {
                if (res.data.Msg && !submitData.nomessage && !res.config.nomessage) {
                    message.success(`${res.data.Msg}`)
                }
                return Promise.resolve(res.data)
            } else if (res.data.ForceToLogin) {
                forceToLogin(res.data)
            } else {
                if (res.data.Msg && !submitData.nomessage && !res.config.nomessage) {
                    Modal.info({title: '提示', okText: '确定'})
                }
                return Promise.resolve(res.data)
            }
        } else {
            if (res.data.ForceToLogin) {
                forceToLogin(res.data)
            } else {
                if (res.data.Result === true && res.data.Msg && !res.config.params.nomessage && !res.config.nomessage) {
                    message.success(`${res.data.Msg}`)
                } else if (res.data.Result === false && res.data.Msg && !res.config.params.nomessage && !res.config.nomessage) {
                    message.error(`${res.data.Msg}`)
                }
                return Promise.resolve(res.data)
            }
        }
    } else {
        requestError(res.data)
        return Promise.reject(err)
    }
}, err => {
    console.log(err)
    requestError(err)
    return Promise.reject(err)
})
