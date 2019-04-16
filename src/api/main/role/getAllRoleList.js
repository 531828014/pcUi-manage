import {$ajax_fetch} from 'api/setting/methods'
import {createRoleData} from 'model/role'

//获取角色列表数据
export default function(form) {
    return new Promise ((resolve, reject) => {
        let option = {
            url: '/role/GetAllRoleList',
            data: form
        }
        $ajax_fetch(option).then(data => {
            if (data) {
                let ret = {}
                ret.pageIndex = data.PageIndex
                ret.totalPage = data.TotalPage
                ret.totalCount = data.TotalCount
                ret.list = data.DataList ? data.DataList.map(item => createRoleData ({
                    id: item.Id,
                    remark: item.Remark,
                    roleName: item.RoleName,
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

