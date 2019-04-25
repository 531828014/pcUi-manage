import router from 'router/index'
import {MessageBox, Message} from 'element-ui'

export function forceToLogin(data) {
    MessageBox.alert(data.Msg, '错误', {
        confirmButtonText: '确定',
        type: 'warning'
    }).then(() => {
        router.push('/login')
    }).catch(() => {
        router.push('/login')
    })
}

export function requestError(err) {
    if (err.response && err.response.status == 404) {
        Message({ type: 'error', message: '404错误' });
    } else if (err.response && err.response.status == 500) {
        Message({ type: 'error', message: '500错误，系统异常了' });
    } else if (err.response && err.response.status == 401) {
        Message({ type: 'warning', message: '登陆信息过期，请重新登陆' })
        router.push('/login')
    } else {
        let msg = '请求错误：' + (err.response ? err.response.status : '') + ',' + (err.response ? err.response.statusText : '')
        Message({ type: 'error', message: msg });
    }
}