<!--  -->
<template>
    <div class="content">
        <div class="rightContent">
            <phms-bread-crumb></phms-bread-crumb>
            <div class="content-top">
                <transition name="fade" mode="out-in">
                    <router-view></router-view>
                </transition>
            </div>
        </div>
        <div class="clear"></div>
    </div>
</template>

<script>
import menuList from 'router/menu'
export default {
    data() {
        return {
            menuList: menuList,
            isCollapse: true
        };
    },
    created() {
        let ret = document.getElementsByClassName('el-menu-vertical-demo')
        console.log(ret)
    },
    computed: {
        setMenuList() {
            this.$store.state.menuIndex
            return this.menuList[this.$store.state.menuIndex].children
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
            }else{
                this.isCollapse = true
            }
        }
    }
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.content{
    min-width:1100px;
    .rightContent{
        .content-top{
            border-top: 1px solid $con-border-color;
            padding-left: $con-spacing-row-base;
            padding-right: $con-spacing-row-base;
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
                font-size: $con-font-size-nm;
            }
        }
    }
}

</style>