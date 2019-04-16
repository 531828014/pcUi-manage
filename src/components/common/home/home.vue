<!--  -->
<template>
    <div class="homeMenu">
        <el-menu
            :default-active="activeIndex"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="2">
                <template slot="title">用户名</template>
                <el-menu-item index="2-1">退出登录</el-menu-item>
                <el-menu-item index="2-2">修改密码</el-menu-item>
            </el-submenu>
            <el-menu-item index="4"><a href="#">订单管理</a></el-menu-item>
            <el-menu-item index="1">处理中心</el-menu-item>
        </el-menu>
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            activeIndex: '1'
        };
    },

    components: {},

    computed: {},

    methods: {
        handleSelect(key, keyPath) {
            console.log(key, keyPath);
        }
    }
}

</script>
<style lang='scss' scoped>
.homeMenu {
    .fade-enter-active,
    .fade-leave-active {
        transition: opacity .3s;
    }

    .fade-enter,
    .fade-leave-active {
        opacity: 0
    }
    /deep/ .el-menu--horizontal>.el-menu-item,.el-menu--horizontal>.el-submenu {
        float: right !important;
    }
}

</style>