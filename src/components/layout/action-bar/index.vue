<template>
    <div class="action-bar-layout normal">
        <slot name="actbar-left">
        </slot>
        <div class="right">
            <slot name="actbar-right">
                <slot name="actbar-right-prepend">
                </slot>
                <condition-search
                    v-if="useSearchCmp('condition-search')"
                    :search-code="searchCode" 
                    @search="search">
                </condition-search>
                <slot name="actbar-right-append">
                </slot>
            </slot>
        </div>
    </div>
</template>

<script>

export default {
    name: 'mms-action-bar',
    props: {
        searchCmp: {
            // 使用的搜索组件
            type: Array,
            default: () => ['condition-search']
        },
        conditionString: {
            // 条件字符串
            type: String
        },
        searchCode: {
            // 页面查询code
            type: String
        }
    },
    components: {
    },
    methods: {
        // 判断是否是由某个搜索组件
        useSearchCmp(name) {
            return this.searchCmp.some(item => item === name)
        },
        // 搜索
        search(conditionString) {
            this.$emit('search', conditionString)
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'sass/variables.scss';
.action-bar-layout{
    height: 36.4px;
    line-height: 36.4px;
    margin-bottom: $con-spacing-row-sm;
    & >>> .block-wrap{
        display: inline-block;
        vertical-align: middle;
        height: 36px;
        line-height: 36px;
        margin: 0 $con-spacing-row-sm;
    }
    .right{
        float: right;
        vertical-align: top;
        overflow: hidden;
    }
}
</style>
