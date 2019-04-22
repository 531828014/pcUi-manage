<!--  -->
<template>
    <div>
        <div class="leftMenu">
            <el-menu
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose">
                <div 
                    v-for="(item,index) in menuList"
                    :key="index">
                    <el-submenu 
                        v-if="item.children"
                        :index="`${index}`">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <router-link :to="item.path">
                                <span>{{item.title}}</span>
                            </router-link>
                        </template>
                        <div 
                            class="listItem"
                            v-for="(it,itIndex) in item.children" 
                            :key="itIndex">
                            <router-link :to="it.path">
                                <el-menu-item :index="`${index}-${itIndex}`">
                                    {{it.title}}
                                </el-menu-item>
                            </router-link>
                        </div>
                    </el-submenu>
                    <div v-else>
                        <router-link :to="item.path">
                            <el-menu-item :index="`${index}`" class="title">
                                <i :class="item.icon"></i>
                                {{item.title}}
                            </el-menu-item>
                        </router-link>
                    </div>
                </div>
                
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
@import 'sass/index.scss';
.leftMenu {
    width: 200px;
    float: left;
    font-size: $con-font-size-nm;
    /deep/ .el-submenu__title{
        font-size: $con-font-size-base;
    }
}
.rightContent{
    margin-left: 210px;
}
</style>