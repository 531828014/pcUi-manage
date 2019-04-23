<!--  -->
<template>
    <div class="table-page-layout">
        <div class="left" :style="{width: `${leftWidth}px`}" v-if="leftWidth > 0">
            <slot name="left">
                <el-card class="title">{{leftTitle}}</el-card>
                <el-card>
                    <slot name="left-list">
                        left-list
                    </slot>
                </el-card>
            </slot>
        </div>
        <div class="right">
            <slot name="right">
                <slot name="actbar">
                    <mms-action-bar
                        :fast-search-active="fastSearchActive"
                        :fast-search-data="fastSearchData"
                        :fast-search-value="fastSearchValue"
                        :conditionm-string="conditionString"
                        :search-code="searchCode"
                        @fastSearch="fastSearch"
                        @search="search">
                        <template slot="actbar-left">
                            <slot name="actbar-left"></slot>
                        </template>
                        <template slot="actbar-right">
                            <slot name="actbar-right"></slot>
                        </template>
                        <template slot="actbar-right-prepend">
                            <slot name="actbar-right-prepend"></slot>
                        </template>
                        <template slot="actbar-right-append">
                            <slot name="actbar-right-append"></slot>
                        </template>
                    </mms-action-bar>
                </slot>
                <slot name="content">
                </slot>
                <slot name="bottom">
                </slot>
            </slot>
        </div>
    </div>
</template>

<script>
export default {
    name: 'table-page-layout',
    props: {
        leftWidth: {
            // 左侧宽度
            type: Number,
            default: 0
        },
        leftTitle: {
            // 左侧标题
            type: String,
            default: ''
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
        // ActionBar
    },

    computed: {},

    methods: {
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
.table-page-layout{
    overflow: hidden;
    margin-top: $con-spacing-row-sm;
    .left{
        float: left;
        width: 150px;
        margin-right: $con-spacing-row-base;
        min-height: 300px;
        box-sizing: border-box;
        .title{
            background: #fff;
            font-size:0% $con-font-size-nm;
            text-align: center;
            margin-bottom: $con-spacing-row-sm;
            border-radius: 3px;
            & >>> .el-card__body{
                padding: 10px;
            }
        }
    }
    .right{
        box-sizing: border-box;
        overflow: auto;
        margin-right: 10px;
    }
    & >>> .el-card{
        margin-bottom: $con-spacing-row-base;
    }
}
</style>