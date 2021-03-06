export default [ 
    {
        title: '商品管理',
        path: '/home/goods',
        icon: 'el-icon-goods',
        children: [
            {
                path: '/home/goods/goods-list',
                title: '商品列表',
            },
            {
                path: '/home/goods/goods-add',
                title: '新增商品',
            },
            // {
            //     path: '/home/goods/goods-stock',
            //     title: '商品库存',
            // },
        ]
    },
    {
        title: '订单管理',
        path: '/home/order',
        icon: 'el-icon-document',
        children: [
            {
                path: '/home/order/order-des',
                title: '设计师订单',
            }
        ]
    },
    {
        title: '售后管理',
        path: '/home/after-sale',
        icon: 'el-icon-service',
        children: [
            {
                path: '/home/after-sale/after-sale-list',
                title: '售后订单',
            }
        ]
    }
]