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
                        <a :href="item.path">
                            <span>{{item.title}}</span>
                        </a>
                    </template>
                    <div 
                        v-for="(it,itIndex) in item.children" 
                        :key="itIndex">
                        <a :href="item.path">
                            <el-menu-item :index="`${index}-${itIndex}`">
                                {{it.title}}
                            </el-menu-item>
                        </a>   
                    </div>
                </el-submenu>
            </el-menu>
        </div>
        <div class="rightContent">
            <router-view></router-view>
        </div>
    </div>
</template>

<script>
import menuList from 'router/menu'
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