<!--  -->
<template>
    <div class="goods-list normal">
        <table-page-layout>
            <el-button type="primary btntext" class="normal" slot="actbar-left">添加商品</el-button>
            <!-- <el-button type="text" class="normal"  slot="actbar-right-append" 
        @click="validate">验证表单</el-button>
            <el-button type="text" class="normal"  slot="actbar-right-prepend" 
        @click="changeColumn">动态改变表格</el-button> -->
            <el-card slot="content" shadow="never">
                <el-form
                    :model="model"
                    :rules="model.rules"
                    status-icon
                    ref="form">
                    <mms-table
                        ref="table"
                        expand
                        :show-overflow-tooltip="true"
                        :data="model.data"
                        :columns="columns"
                        :header-cell-class-name="headerClaaName"></mms-table>
                </el-form>
            </el-card>
        </table-page-layout>
        <pagination-layout mode='center'>
        </pagination-layout>
    </div>
</template>

<script>
const columns = [
    {
        prop: 'title',
        label: '标题',
        showOverflowTooltip: false
    },
    {
        prop: 'briefIntroduction',
        label: '简介'
    },
    {
        prop: 'purchasePrice',
        label: '进货价'
    },
    {
        prop: 'sellingPrice',
        label: '销售价'
    },
    {
        prop: 'category',
        label: '品类',
        showOverflowTooltip: false
    },
    {
        prop: 'designer',
        label: '厂家/设计师'
    },
    {
        prop: 'number',
        label: '数量'
    },
    {
        label: '操作',
        prop: 'operation',
        width: 160,
        fixed: 'right'
    }
]
export default {
    data() {
        return {
            list: [],
            columns: columns,
            formRules: {
                title: [{ required: true, message: '请输入标题', trigger: 'blur'}],
            },
        };
    },

    components: {},

    computed: {
        model() {
            return {
                data: this.list,
                rules: this.formRules
            }
        }
    },

    methods: {
        validate() {
            this.$refs.form.validate()
        },
        headerClaaName({row, column, rowIndex, columnIndex}) {
            if (column.property === 'title') {
                return 'required-field'
            }
        },
        changeColumn() {
            this.columns = [
                {
                    prop: 'number',
                    label: '编号'
                },
                {
                    prop: 'title',
                    label: '标题'
                },
                {
                    label: '操作',
                    prop: 'operation',
                    width: 160,
                    fixed: 'right'
                }
            ]
        },
    }
}

</script>
<style lang='scss' scoped>
.goods-list{
    .btntext{
        color: white !important;
    }
}
</style>