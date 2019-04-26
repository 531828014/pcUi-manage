<!--  -->
<template>
    <div>
        <div class="leftMenu normal">
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
            <phms-bread-crumb></phms-bread-crumb>
            <div class="content-top">
                <router-view></router-view>
            </div>
            <copyright></copyright>
        </div>
    </div>
</template>

<script>
import MenuList from 'router/menu'
export default {
    data() {
        return {
            menuList: MenuList,
            collapsed: false,
        };
    },

    computed: {
        setTitle() {
            let number = this.$store.state.menuIndex
            return this.menuList[number].children
        }
    },

    methods: {
        handleOpen(e) {
            // console.log('click', e)
        },
        handleClose(e) {
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
.content{
    .leftMenu {
        width: 200px;
        float: left;
        padding: 0 $con-spacing-row-sm 0 0;
        /deep/ {
            .el-submenu__title{
                font-size: $con-font-size-base;
                height: 45px;
                line-height: 45px;
            }
            .el-menu-vertical-demo{
                border-right: 1px solid $con-border-color;
            }
            .el-menu-item{
                height: 40px;
                line-height: 40px;
            }
        }
    }
    .rightContent{
        .content-top{
            border-top: 1px solid $con-border-color;
        }
        /deep/ {
            .el-form-item__label,
            .el-date-editor .el-range-input,
            .el-input__inner{
                font-size: $con-font-size-nm !important;
            }
            .el-table td, .el-table th{
                padding: 7px 0 !important;
            }
            .el-button.is-circle{
                padding: 7px !important;
            }
            .el-button{
                padding: 7px 15px !important;
            }
            .el-input__inner{
                height: 28px;
                line-height: 28px;
            }
        }
    }
}
</style>