import {$ajax_post} from 'api/setting/methods'

export default function() {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Home/Test1'
        }
        $ajax_post(option).then(data => {
            if (data) {
                resolve(data)
            } else {
                reject()
            }
        })
    })
}