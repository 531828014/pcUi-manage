import {$ajax_post} from 'api/setting/methods'

//发货
export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Order/DeliverGoods',
            data: {
                Id: from.id, //订单id
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

