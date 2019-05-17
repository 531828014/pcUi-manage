import {$ajax_post} from 'api/setting/methods'

export default function(from) {
    return new Promise((resolve, reject) => {
        let option = {
            url: '/Commodity/Add',
            data: {
                title: from.title,
                briefIntroduction: from.briefIntroduction,
                purchasePrice: from.purchasePrice,
                sellingPrice: from.sellingPrice,
                category: from.category,
                designer: from.designer,
                imgUrl: from.imgUrl,
                number: from.number,
                typeId: from.typeId,
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