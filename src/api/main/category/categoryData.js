import {$ajax_fetch} from 'api/setting/methods'
import {createCategory} from 'model/category'

//
export default function() {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/Category/categoryData',
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.list = data.data ? data.data.map(item => ({
                    number: item.number,
                    category: item.category,
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

