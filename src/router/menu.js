export default [
    {
        title: '首页',
        path: '/home',
        icon: 'el-icon-menu',
    },
    {
        title: '商品管理',
        path: '/home/goods',
        icon: 'el-icon-goods',
        children: [
            {
                title: '新增商品',
                path: '/home/goods/new',
            },
            {
                title: '商品列表',
                path: '/home/goods/manage'
            }
        ]
    },
    {
        title: '订单管理',
        path: '/home/order',
        icon: 'el-icon-tickets',
        children: [
            {
                title: '订单列表',
                path: '/home/order/list',
            },
            {
                title: '设计师订单',
                path: '/home/order/desList'
            }
        ]
    },
    {
        title: '售后管理',
        path: '/home/order',
        icon: 'el-icon-service',
        children: [
            {
                title: '订单列表',
                path: '/home/order/list',
            },
            {
                title: '设计师订单',
                path: '/home/order/desList'
            }
        ]
    },
    {
        title: '用户管理',
        path: '/home/order',
        icon: 'el-icon-view',
        children: [
            {
                title: '订单列表',
                path: '/home/order/list',
            },
            {
                title: '设计师订单',
                path: '/home/order/desList'
            }
        ]
    },
    {
        title: '数据分析',
        path: '/home/order',
        icon: 'el-icon-date',
        children: [
            {
                title: '订单列表',
                path: '/home/order/list',
            },
            {
                title: '设计师订单',
                path: '/home/order/desList'
            }
        ]
    },
]