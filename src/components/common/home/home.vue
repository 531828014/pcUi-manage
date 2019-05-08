<!--  -->
<template>
    <div class="homeMenu">
        <el-menu
            class="el-menu-demo tarbar"
            mode="horizontal"
            @select="handleSelect">
            <div class="logo-wrap">
                <img class="logo" src="./image/logo.png">
                <span class="title">商城后台管理系统</span>
                <!-- <span  class="title titleItem"
                    v-for="(item, index) in menuList"
                    :key="index"
                    :index="`${index}`"
                    @click="activeIndex(index)">{{item.title}}</span> -->
                <el-submenu  index="2" class="menulist">
                    <template slot="title">
                        <span>{{$store.state.userInfo.name}}</span>
                    </template>
                    <el-menu-item index="2-1" @click="setLogin">退出登录</el-menu-item>
                </el-submenu>    
            </div>
            
        </el-menu>
        <sidebar @menuOpen="handleOpen" @menuClose="handleClose" ref="sidebar"></sidebar>
        <div class="rightcontent"  ref="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
            <copyright></copyright>
            <div class="clear"></div>
        </div>
    </div>
</template>

<script>
import sidebar from './side-bar/index';
import MenuList from 'router/menu'
import { mapState, mapMutations } from 'vuex'
export default {
    data() {
        return {
            current: ['user'],
            menuList: MenuList,
        };
    },
    created() {
        console.log(window.GlobalConfig)
    },
    components: {
        sidebar
    },

    computed: {
        ...mapState({
            contentScrollTop: state => state.user.contentScrollTop,
            isSaveScroll: state => state.user.isSaveScroll
        })
    },

    methods: {
        menuCheck(item, index) {
            this.$store.commit('setMenuIndex', index)
        },
        handleOpen() {
            this.$refs.content.style.marginLeft = '200px'
            this.$refs.sidebar.$el.style.width = '200px'
        },
        handleClose() {
            this.$refs.content.style.marginLeft = '64px'
            this.$refs.sidebar.$el.style.width = '64px'
        },
        contentScroll() {
            if (this.isSaveScroll) {
                this.setScrollTop(this.$refs.content.scrollTop)
            }
        },
        ...mapMutations([
            'setScrollTop'
        ]),
        handleSelect(key, keyPath) {
            // console.log(key, keyPath);
        },
        setLogin() {
            this.$store.state.userInfo = {}
            this.$router.push({path: '/login'}); 
        }
        // activeIndex(index) {
        //     this.$store.commit('setMenuIndex', index)
        // }
    }
}
</script>

<style lang='scss' scoped>
@import 'sass/index.scss';
.homeMenu {
    width: 100%;
    height: 100%;
    overflow: hidden;
    .tarbar{
        background-color: $color-theme-primary;
        color: #fff;
        position: fixed;
        width: 100%;
        z-index: 999;
    }
    .rightcontent {
        margin-left: 200px;
        margin-top: 63px;
        /* z-index: -1; */
        height: 100%;
        top: 63px;
    }
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }
    /deep/ {
        .ant-menu-horizontal {
            line-height: 60px;
            background-color: $color-theme-primary;
        }
        .ant-menu-submenu-title{
            font-size: $con-font-size-base;
        }
    }
    .menulist{
        float: right;
        margin-right: $con-spacing-row-lg;
        color:#fff;
        /deep/ {
            .el-submenu__title {
                line-height: 60px;
                height: 60px;
                color: #fff;
                cursor: pointer;
                width: 100px;
                background-color: $color-theme-primary !important;
            }
            .el-submenu__title i{
                color: #fff;
            }
        }
    }
    .logo-wrap{
        float: left;
        width: 100%;
        height: 60px;
        line-height: 60px;
        font-size: 0;
        overflow: hidden;
        box-sizing: border-box;
        .logo,
        .title{
            display: inline-block;
            vertical-align: middle;
            margin-left: $con-spacing-row-sm;
        }
        .logo{
            width: 36px;
            height: 36px;
        }
        .title{
            font-size: 24px;
            color: #fff;
        }
        .titleItem{
            font-size: $con-font-size-lg;
        }
    }
}

</style>