import axios from 'axios'

// 封装get方法
export function $ajax_fetch(config) {
    return new Promise((resolve, reject) => {
        let option = {
            method: 'get',
            params: {}
        }
        let {data, ...temp} = config
        temp.params = data ? data : {}
        let params = Object.assign(option, temp)
        axios(params).then(res => {
            resolve(res)
        }).catch(err => {
            reject()
        })
    })
}

// 封装post方法
export function $ajax_post(config) {
    return new Promise((resolve, reject) => {
        let option = {
            method: 'post',
            data: {}
        }
        let params = Object.assign(option, config)
        axios(params).then(res => {
            resolve(res)
        }).catch(err => {
            console.log(err)
            reject()
        })
    })
}