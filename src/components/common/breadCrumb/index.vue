<!--  -->
<template>
    <div class="bread-crumb">
        <el-breadcrumb separator="/">
            <el-breadcrumb-item
                v-for="(item, index) in setRoute"
                :key="index"
                :to="item.path">
                {{item.name}}
            </el-breadcrumb-item>
        </el-breadcrumb>
    </div>
</template>

<script>
export default {
    name: 'phms-bread-crumb',
    data() {
        return {
        };
    },
    created() {
    },
    computed: {
        setRoute() {
            let ret = this.$route.matched
            if(this.$route.matched[0].name == 'XXX管理系统')
                ret.splice(0, 1)
            return ret
        }
    },
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.bread-crumb{
    font-size: $con-font-size-sm;
    height: 50px;
    display: table-cell;
    vertical-align: middle;
    padding-left: $con-spacing-row-base;
    /deep/ .el-breadcrumb__inner.is-link {
        color: $con-text-color;
        font-weight: normal; 
    }
}
</style>