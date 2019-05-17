import {$ajax_fetch} from 'api/setting/methods'
import {createOrder} from 'model/order'

//
export default function(Id) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/AfterSale/List',
            data: {
                Id: Id
            }
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                
                let ret = data.data ? data.data.map(item => createOrder({
                    id: item.Id,
                    userId: item.userId,
                    afterSaleMode: item.afterSaleMode,
                    orderGoodsId: item.orderGoodsId,
                    address: item.address,
                    contactNumber: item.contactNumber,
                    remark: item.remark,
                    total: item.total,
                    status: item.status,
                    typeId: item.typeId,
                })) : []
                // console.log(ret)
                resolve(ret)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

