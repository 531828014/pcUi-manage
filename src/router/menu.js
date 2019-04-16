export default [
    {
        title: '商品管理',
        path: 'home/goods/manage',
        icon: 'el-icon-goods',
        children: [
            {
                title: '新增商品',
                path: 'home/goods/new',
            },
            {
                title: '商品列表',
                path: 'home/goods/manage'
            }
        ]
    },
    {
        title: '订单管理',
        path: 'home/order/list',
        icon: 'el-icon-tickets',
        children: [
            {
                title: '订单列表',
                path: 'home/order/list',
            },
            {
                title: '设计师订单',
                path: 'home/order/desList'
            }
        ]
    }
]