import {$ajax_fetch} from 'api/setting/methods'

export default function() {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/department/GetDepartmentList'
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                resolve(data)
            } else {
                reject()
            }
        })
    })
}