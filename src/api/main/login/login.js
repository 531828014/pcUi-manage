import {$ajax_post} from 'api/setting/methods'
import {createUser} from 'model/user'
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/User/Login',
            data: {
                number: from.number,
                password: from.password,
            }
        }
        $ajax_post(option).then(data => {
            if (data.Result) {
                let ret = {}
                ret.list = data.data ? data.data.map(item => createUser ({
                    id: item.Id,
                    name: item.name, 
                })) : []
                resolve(ret)
            } else {
                reject()
            }
        })
    })
}