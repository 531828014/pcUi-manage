import {$ajax_fetch} from 'api/setting/methods'
import {createGoods} from 'model/goods'

//获取角色列表数据
export default function() {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Commodity/List',
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.list = data.data ? data.data.map(item => createGoods ({
                    id: item.id,
                    title: item.title, 
                    briefIntroduction: item.briefIntroduction, 
                    purchasePrice: item.purchasePrice,
                    sellingPrice: item.sellingPrice,
                    category: item.category,
                    designer: item.designer,
                    imgUrl: item.imgUrl,
                    number: item.number
                })) : []
                resolve(ret)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

