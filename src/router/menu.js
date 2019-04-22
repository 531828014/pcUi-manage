export let personal = [ //个人业务
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
                title: 'XXXXX管理',
                path: '/home/system/menu-manage',
            },
            {
                title: 'XXX管理',
                path: '/home/system/dept-manage'
            }
        ]
    },
    {
        title: 'XXX管理',
        path: '/home/system',
        icon: 'appstore',
        children: [
            {
                title: 'XXX列表',
                path: '/home/system/menu-manage',
            },
            {
                title: 'XXXXX',
                path: '/home/system/dept-manage'
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