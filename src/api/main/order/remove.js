import {$ajax_fetch} from 'api/setting/methods'

//删除
export default function(Id) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Order/Remove',
            data: {
                Id
            }
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                resolve(data)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

