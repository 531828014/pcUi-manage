export let personal = [ //个人业务
    {
        title: '首页',
        path: '/home',
        icon: 'home',
    },
    {
        title: '系统设置',
        path: '/home/system',
        icon: 'appstore',
        children: [
            {
                title: '菜单权限管理',
                path: '/home/system/menu-manage',
            },
            {
                title: '部门管理',
                path: '/home/system/dept-manage'
            },
            {
                title: '人员管理',
                path: '/home/system/personnel-manage'
            },
            {
                path: '/home/system/system-parameter',
                title: '系统参数设置',
            }
        ]
    },
    {
        title: 'XXX管理',
        path: '/home/system',
        icon: 'mail',
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
    }
]

export let sponsor = [ //主办业务
    {
        title: 'XXX设置',
        path: '/home/system',
        icon: 'mail',
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
    }
]