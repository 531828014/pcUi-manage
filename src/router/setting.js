/**
 * 路由信息参数
 * @param  {boolean}   hidden             是否显示该菜单
 * @param  {boolean}   showChildren       是否显示子菜单
 * @param  {string}    activePath         该路由对应的菜单激活路径,在跳转到部分路由时通过query传递,或者写在meta属性里
 * @param  {string}    permissiblePath    该路由的权限路径, 主要用于部分带有参数的路由进行权限验证
 **/
const Home = (resolve) => {
    import('components/common/home/home').then((module) => {
        resolve(module)
    })
}

const Content = (resolve) => {
    import('components/common/content/content').then((module) => {
        resolve(module)
    })
}

export default [
    {
        path: '/home',
        name: '后台管理系统',
        component: Home,
        redirect: '/home/my',
        children: [
            {
                path: '/404',
                name: '异常页',
                component: () => import('views/abnormal-page/404/404'),
            },
            {
                path: '/403',
                name: '无权限页',
                component: () => import('views/abnormal-page/403/403'),
            },
            {
                path: '/home/system',
                name: '系统设置',
                component: Content,
                redirect: '/home/system/dept-manage',
                children: [
                    {
                        path: '/home/system/menu-manage',
                        name: '菜单权限管理',
                        component: () => import('views/setting/menu-manage/menu-manage')
                    },
                    {
                        path: '/home/system/dept-manage',
                        name: '部门管理',
                        component: () => import('views/setting/dept-manage/dept-manage')
                    }
                ]
            }
        ]
    }
]