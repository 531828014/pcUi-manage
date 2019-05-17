<!--  -->
<template>
    <div class="sidebar normal">
            <el-menu
                class="el-menu-vertical-demo"
                :default-active="activeMenu" 
                :collapse="isCollapse"
                @open="handleOpen"
                @close="handleClose">
                <el-button @click="onCollapse" style="margin: 11px;padding: 7px 15px !important;">
                    <i class="el-icon-share"></i>
                </el-button>
                <template v-for="(item,index) in setMenuList">
                    <el-submenu 
                        :key="index"
                        v-if="item.children"
                        :index="`${index}`">
                        <template slot="title">
                            <i :class="item.icon"></i>
                            <router-link :to="item.path">
                                <span>{{item.title}}</span>
                            </router-link>
                        </template>
                        <template 
                            class="listItem"
                            v-for="(it,itIndex) in item.children" 
                            >
                            <router-link :key="itIndex" :to="it.path">
                                <el-menu-item :index="`${index}-${itIndex}`">
                                    <span slot="title">{{it.title}}</span>
                                </el-menu-item>
                            </router-link>
                        </template>
                    </el-submenu>
                    <template v-else>
                        <router-link :key="index" :to="item.path">
                            <el-menu-item :index="`${index}`" class="title">
                                <i :class="item.icon"></i>
                                <span slot="title">{{item.title}}</span>
                            </el-menu-item>
                        </router-link>
                    </template>
                </template>
            </el-menu>
        <div class="clear"></div>
    </div>
</template>

<script>
import menuList from 'router/menu'
import desMenu from 'router/desMenu'
export default {
    data() {
        return {
            menuList: menuList,
            desMenu: desMenu,
            isCollapse: false
        };
    },
    mounted() {
        this.setheight()
    },
    updated() {
        this.setheight()
    },
    computed: {
        setMenuList() {
            switch(this.$store.state.userInfo.id) {
                case '10000': return this.menuList; break;
                default: return this.desMenu; break;
            }
            // this.$store.state.menuIndex
            // return this.menuList
        },
        activeMenu() {
            if (this.$route.meta.active) {
                return this.$route.meta.active
            }
            if (this.$route.matched.length >= 3) {
                return this.$route.matched[2].path;
            } else {
                return this.$route.matched[1].path;
            }
        }
    },
    methods: {
        handleOpen(key, keyPath) {
            console.log(key, keyPath);
        },
        handleClose(key, keyPath) {
            console.log(key, keyPath);
        },
        onCollapse() {
            if(this.isCollapse) {
                this.isCollapse = false
                this.$emit('menuOpen')
            }else{
                this.isCollapse = true
                this.$emit('menuClose')
            }
        },
        setheight() {
            let edit = window.innerHeight;
            let navScroll = document.getElementsByClassName('el-menu-vertical-demo')[0];
            navScroll.style.height = edit + 'px';
        },
    }
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.sidebar{
        position: absolute;
        width: 200px;
        left: 0;
        top: 63px;
        bottom: 0;
        background: #fff;
        /deep/ {
            .el-menu-vertical-demo:not(.el-menu--collapse) {
                width: 200px;
                min-height: 400px;
            }
            .el-submenu__title{
                font-size: $con-font-size-base;
                height: 45px;
                line-height: 45px;
            }
            .el-menu-vertical-demo{
                position: fixed;
                display: block;
                height: 100%;
                overflow: auto;
                z-index: 999;
                border-right: 1px solid $con-border-color;
            }
            .el-menu-item{
                height: 40px;
                line-height: 40px;
            }
        }
}

</style>