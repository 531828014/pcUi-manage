<template>
    <div class="breadcrumb">
        
        <a-breadcrumb :routes="setRoutelist">
            <template slot="itemRender" slot-scope="{route, params, routes}">
            <span v-if="routes.indexOf(route) === routes.length - 1 & route.name != ''">
                {{route.name}}
            </span>
            <router-link v-else-if="route.name != ''" :to="route.path">
                {{route.name}}
            </router-link>
            </template>
        </a-breadcrumb>
    </div>
</template>
<script>
export default {
    data() {
        return {
            routelist: []
        }
    },
    computed: {
        setRoutelist() {
            let ret = [...this.$route.matched]
            if(ret[0].name == '公房管理系统') {
                ret.splice(0, 1)
            }
            return ret
        }
    },
    created() {
        console.log(this.$route)
    }
}
</script>
<style lang="scss" scoped> 
@import 'sass/index.scss';
.breadcrumb{
    /deep/ .ant-breadcrumb {
        font-size: $con-font-size-sm;
    }
}

</style>
