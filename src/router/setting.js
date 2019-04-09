
export default [
    {
        path: '/home',
        name: '',
        redirect: '/home/my',
        children:[
            {
                path: '/404',
                name: '异常页',
                component: () => import('views/login/login'),
            },
        ]
    }
]