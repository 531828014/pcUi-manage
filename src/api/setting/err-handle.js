import router from 'router/index'
import { Modal, message } from 'ant-design-vue'

export function forceToLogin(data) {
    Modal.confirm({
        title: '错误',
        cancelText: '取消',
        okText: '确定',
        onOk: function() {
            router.push('/login')
        },
        onCancel: function() {
            router.push('/login')
        }
    })
}

export function requestError(err) {
    if (err.response && err.response.status == 404) {
        message.error('404错误')
    }else if (err.response && err.response.status == 500) {
        message.error('500错误，系统异常了');
    } else if (err.response && err.response.status == 401) {
        message.error('登陆信息过期，请重新登陆')
        router.push('/login')
    } else {
        let msg = '请求错误：' + (err.response ? err.response.status : '') + ',' + (err.response ? err.response.statusText : '')
        message.error(`${msg}`);
    }
}