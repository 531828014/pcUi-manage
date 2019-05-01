import {$ajax_fetch} from 'api/setting/methods'

//删除角色
export default function(Id) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Commodity/Remove',
            data: {
                Id
            }
        }
        console.log(option)
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

