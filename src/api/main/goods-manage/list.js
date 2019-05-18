import {$ajax_fetch} from 'api/setting/methods'
import {createGoods} from 'model/goods'
//
export default function(Id) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Commodity/List',
            data: {
                Id: Id,
            }
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.list = data.data ? data.data.map(item => createGoods ({
                    id: item.Id,
                    title: item.title, 
                    briefIntroduction: item.briefIntroduction, 
                    purchasePrice: item.purchasePrice,
                    sellingPrice: item.sellingPrice,
                    category: item.category,
                    designer: item.designer,
                    number: item.number,
                    imgUrl: item.imgUrl ? item.imgUrl.map(url => {
                        return{
                            url: window.GlobalConfig.baseUrl + '/' + url
                        }
                    }) : []
                })) : []
                console.log(ret)
                resolve(ret)
            }else {
                reject(data.Msg)
            }
        }).catch(() => {
            reject()
        })
    })
}

