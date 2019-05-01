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
        name: 'XXX管理系统',
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
                path: '/home/my',
                name: '首页',
                component: Content,
                redirect: '/home/my/index',
                children: [
                    {
                        path: '/home/my/index',
                        name: '',
                        component: () => import('views/home/home')
                    },
                ]
            },
            {
                path: '/home/goods',
                name: '商品管理',
                component: Content,
                redirect: '/home/goods/goods-list',
                children: [
                    {
                        path: '/home/goods/goods-list',
                        name: '商品列表',
                        component: () => import('views/goods/goods-list/index')
                    },
                    {
                        path: '/home/goods/goods-add',
                        name: '新增商品',
                        component: () => import('views/goods/goods-add/index')
                    },
                    {
                        path: '/home/goods/goods-stock',
                        name: '商品库存',
                        component: () => import('views/goods/goods-stock/index')
                    },
                    {
                        path: '/home/goods/goods-category',
                        name: '商品品类',
                        component: () => import('views/goods/goods-category/index')
                    },
                ]
            },
            {
                path: '/home/order',
                name: '订单管理',
                component: Content,
                redirect: '/home/order/order-list',
                children: [
                    {
                        path: '/home/order/order-list',
                        name: '自营订单',
                        component: () => import('views/order/order-list/index')
                    },
                    {
                        path: '/home/order/order-des',
                        name: '设计师订单',
                        component: () => import('views/order/order-des/index')
                    },
                ]
            },
            {
                path: '/home/after-sale',
                name: '售后管理',
                component: Content,
                redirect: '/home/after-sale/after-sale-list',
                children: [
                    {
                        path: '/home/after-sale/after-sale-list',
                        name: '售后订单',
                        component: () => import('views/after-sale/after-sale-list/index')
                    }
                ]
            },
            {
                path: '/home/user',
                name: '用户管理',
                component: Content,
                redirect: '/home/user/user-list',
                children: [
                    {
                        path: '/home/user/user-list',
                        name: '用户列表',
                        component: () => import('views/user/user-list/index')
                    }
                ]
            },
            {
                path: '/home/data',
                name: '数据分析',
                component: Content,
                redirect: '/home/data/data-list',
                children: [
                    {
                        path: '/home/data/data-list',
                        name: '数据图表',
                        component: () => import('views/data/data-list/index')
                    }
                ]
            }
        ]
    }
]