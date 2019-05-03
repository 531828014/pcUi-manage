import {$ajax_post} from 'api/setting/methods'

export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Category/Add',
            data: {
                category: from.category,
                name: from.name,
                icon: from.icon
            }
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