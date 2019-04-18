<!--  -->
<template>
    <div class="home">
        <div class="main">
            <div class="logo-wrap">
                <img class="logo" src="./image/logo.png">
                <span class="title">公房管理系统</span>
                <span 
                    class="title menu"
                    v-for="(item, index) in menuList"
                    :key="index"
                    @click="menuCheck(item,index)">{{item.title}}</span>
            </div>
            <a-menu
                v-model="current"
                mode="horizontal">
                <a-sub-menu>
                    <span slot="title" class="submenu-title-wrapper headtitle">
                        <a-icon type="user" />
                        admin
                    </span>
                    <a-menu-item key="setting:1">修改密码</a-menu-item>
                    <a-menu-item key="setting:2">退出登录</a-menu-item>
                </a-sub-menu>
            </a-menu>
            <div class="content">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
    </div>
</template>

<script>
import MenuList from 'router/menuTitle'
export default {
    data() {
        return {
            current: ['user'],
            menuList: MenuList,
        };
    },

    components: {},

    computed: {},

    methods: {
        menuCheck(item, index) {
            this.$store.commit('setMenuIndex', index)
        }
    }
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.home {
    .logo-wrap {
        top: 0px;
        position: absolute;
        line-height: 60px;
        margin-left: 20px;
        .logo{
            width: 36px;
            height: 36px;
            top: 10px;
        position: absolute;
        margin-right: 40px;
        }
        .title{
            font-size: 24px;
            color: #fff;
            margin-left: 40px;
        }
        .menu {
            font-size: $con-font-size-lg;
            cursor: pointer;
        }
    }
    .headtitle {
        color: white;
    }
    /deep/ .ant-menu-horizontal {
        line-height: 60px;
        background-color: $color-theme-primary;
    }
    /deep/ .ant-menu-submenu-title{
        font-size: $con-font-size-base;
    }
    /deep/ .ant-menu-horizontal > .ant-menu-item, .ant-menu-horizontal > .ant-menu-submenu {
        float: right;
    }
}
</style>