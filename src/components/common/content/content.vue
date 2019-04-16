<!--  -->
<template>
    <div>
        <div class="leftMenu">
            <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <el-submenu 
                    v-for="(item,index) in menuList"
                    :key="index"
                    :index="`${index}`">
                    <template slot="title">
                        <i :class="item.icon"></i>
                        <span>{{item.title}}</span>
                    </template>
                    <el-menu-item
                        v-for="(it,itIndex) in item.children" 
                        :key="itIndex"
                        :index="`${index}-${itIndex}`">
                        {{it.title}}
                    </el-menu-item>
                </el-submenu>
            </el-menu>
        </div>
        <div class="rightContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
const menuList = [
    {
        title: '商品管理',
        icon: 'el-icon-goods',
        children: [
            {title: '新增商品'},
            {title: '商品列表'}
        ]
    },
    {
        title: '订单管理',
        icon: 'el-icon-tickets',
        children: [
            {title: '订单列表'},
            {title: '设计师订单'}
        ]
    }
]
export default {
    data() {
        return {
            menuList: menuList
        };
    },
    components: {},

    computed: {},

    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}

</script>
<style lang='scss' scoped>
.leftMenu {
    width: 200px;
    float: left;
}
.rightContent{
    margin-left: 210px;
}
</style>