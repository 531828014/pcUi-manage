import {$ajax_post} from 'api/setting/methods'

//退换货
export default function(Id) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Order/ReplacementGoods',
            data: {
                Id: Id, //订单id
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

