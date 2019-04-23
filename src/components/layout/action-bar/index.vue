<template>
    <div class="action-bar-layout">
        <slot name="actbar-left">
            快速查询
        </slot>
        <div class="right">
            <slot name="actbar-right">
                <slot name="actbar-right-prepend">
                </slot>
                搜索框
                <el-button
                    v-if="useSearchCmp('set-condition')"
                    type="text" 
                    class="search-btn" 
                    @click="$refs.setCondition.show()">
                    {{setConditionBtnText}}
                </el-button>
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
        setConditionBtnText: {
            // 组合查询按钮文本
            type: String,
            default: '高级搜索'
        },
        searchCmp: {
            // 使用的搜索组件
            type: Array,
            default: () => ['fast-search', 'condition-search', 'set-condition']
        },
        fastSearchActive: {
            // 快速查询按钮是否显示高亮
            type: Boolean,
            default: true
        },
        fastSearchData: {
            // 快速查询渲染数据
            type: Array,
            default: () => []
        },
        fastSearchValue: {
            // 快速查询的值
            type: [Number, String]
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
        // 点击快速搜索
        fastSearch(searchString) {
            this.$emit('fast-search', searchString)
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
