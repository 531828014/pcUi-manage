import {$ajax_post} from 'api/setting/methods'
import {createUser} from 'model/user'
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/User/AddUser',
            data: {
                number: from.number,
                name: from.number,
                password: from.password,
            }
        }
        $ajax_post(option).then(data => {
            if (data.Result) {
                let ret = data.data 
                resolve(ret)
            } else {
                reject()
            }
        })
    })
}