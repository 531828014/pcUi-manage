<!--  -->
<template>
    <div class="goods-list normal">
        <table-page-layout>
            <el-button type="primary btntext" class="normal" slot="actbar-left" @click="addGoods">添加商品</el-button>
            <el-card slot="content" shadow="never">
                <el-form
                    :model="model"
                    :rules="model.rules"
                    status-icon
                    ref="form">
                    <mms-table
                        ref="table"
                        :data="model.data"
                        :columns="columns"
                        :header-cell-class-name="headerClaaName">
                        <template slot="operation" slot-scope="{scope}">
                            <el-button icon="el-icon-edit" circle @click="edit(scope.row)" type="primary" title="编辑"></el-button>
                            <el-button icon="el-icon-delete" circle @click="remove(scope.row)" type="danger" title="删除"></el-button>
                        </template>
                    </mms-table>
                </el-form>
            </el-card>
        </table-page-layout>
        <pagination-layout mode='center'>
        </pagination-layout>
    </div>
</template>

<script>
import GoodsManageApi from 'api/main/goods-manage/index'
const columns = [
    {
        prop: 'title',
        label: '标题',
        showOverflowTooltip: true
    },
    {
        prop: 'briefIntroduction',
        label: '简介',
        showOverflowTooltip: true
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
        showOverflowTooltip: true
    },
    {
        prop: 'designer',
        label: '厂家/设计师',
        showOverflowTooltip: true
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
    created() {
        this.getData()
    },
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
        getData() {
            GoodsManageApi.List().then(data => {
                this.list = data.list
            })
        },
        addGoods() {
            this.$router.push({
                path: '/home/goods/goods-add',
            })
        },
        edit(res) {
            this.dialogVisible = true
            this.dialogName = '修改系统参数'
        },
        remove(res) {
            console.log(res)
            GoodsManageApi.Remove(res.id).then(data => {
                this.getData()
            })
        }
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