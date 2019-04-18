<!--  -->
<template>
    <div class="content">
            <div class="menuLeft">
                <a-button 
                    class="btn-menu"
                    @click="toggleCollapsed">
                <a-icon :type="collapsed ? 'menu-unfold' : 'menu-fold'" />
                </a-button>
                <a-menu
                    mode="inline"
                    theme="light"
                    :inlineCollapsed="collapsed"
                    @click="handleClick"
                    >
                    <template v-for="(item, index) in setTitle">
                        <a-menu-item v-if="!item.children" :key="index">
                            <router-link :to="item.path">
                            <a-icon :type="item.icon" />
                            <span>{{item.title}}</span>
                            </router-link>
                        </a-menu-item>
                        <sub-menu v-else :menu-info="item" :mainKey="index" :key="index"/>
                    </template>
                </a-menu>
            </div>
            <div class="contentRight">
                <div class="clear"></div>
                <a-card class="card">
                    <span slot="title">
                        <bread-crumb></bread-crumb>
                    </span>
                    <router-view></router-view>
                </a-card>
                <copyright></copyright>
            </div>
    </div>
</template>

<script>
import SubMenu from 'components/common/content/subMenu'
import BreadCrumb from 'components/common/breadCrumb/breadCrumb'
import menu from 'router/menu'
import MenuList from 'router/menuTitle'
import Copyright from 'components/common/copyright/copyright'
export default {
    data() {
        return {
            menuList: MenuList,
            collapsed: false,
        };
    },
    components: {
        BreadCrumb,
        SubMenu,
        Copyright
    },

    computed: {
        setTitle() {
            let number = this.$store.state.menuIndex
            return this.menuList[number].children
        }
    },

    methods: {
        handleClick(e) {
            // console.log('click', e)
        },
        titleClick(e) {
            // console.log('titleClick', e)
        },
        toggleCollapsed() {
            this.collapsed = !this.collapsed
        },
    },
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.content {
    .menuLeft{
        float: left;
        font-size: $con-font-size-base;
        border-right: 1px solid $con-border-color;
        height: 100%;
        max-width: 200px;
        .btn-menu{
            padding: 0 8px;
            float: left;
            position: relative;
            left: 30%;
            clear: both;
            margin-top: 5px;
        }
        /deep/ .ant-menu-submenu-title .anticon + span{
            margin-right: 30px;
        }
        /deep/ .ant-menu-sub.ant-menu-inline > .ant-menu-item{
            font-size: $con-font-size-nm;
        }
    }
    .contentRight{
        display: grid;
        padding: 0 20px;
        .card {
            /deep/ .ant-card-body {
                padding: 20px 0 !important;
            }
            /deep/ .ant-card-head {
                padding: 0 !important;
            }
        }
    }
}
</style>