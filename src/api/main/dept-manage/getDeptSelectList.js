import {$ajax_fetch} from 'api/setting/methods'

export default function() {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/department/GetSelectDepartmentData'
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                console.log(data)
                resolve(data)
            } else {
                reject()
            }
        })
    })
}