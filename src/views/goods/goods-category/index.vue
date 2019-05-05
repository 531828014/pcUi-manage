<!--  -->
<template>
    <div class="goods-category normal">
        <table-page-layout>
            <el-button type="primary btnWhite" class="normal" slot="actbar-left" @click="addGoods">添加品类</el-button>
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
                <el-dialog :title="dialogName" :visible.sync="dialogVisible">
                    <el-form :model="form" class="mmsFrom" label-width="120px" :rules="model.rules">
                        <mms-form :items="items" :form-data="form">
                        </mms-form>
                    </el-form>
                    <div slot="footer" class="dialog-footer">
                        <el-button @click="dialogVisible = false">取 消</el-button>
                        <el-button type="primary" @click="addCategory">确 定</el-button>
                    </div>
                </el-dialog>
            </el-card>
        </table-page-layout>
        <!-- <pagination-layout mode='center'>
        </pagination-layout> -->
    </div>
</template>

<script>
import mixins from 'mixins/index';
import CategoryApi from 'api/main/category/index'
import {initCategory} from 'model/category'
const columns = [
    {
        prop: 'name',
        label: '品类名称',
        showOverflowTooltip: true
    },
    {
        prop: 'category',
        label: '品类代码'
    },
    {
        prop: 'icon',
        label: '图标代码'
    },
    {
        label: '操作',
        prop: 'operation',
        width: 160,
        fixed: 'right'
    }
]
export default {
    mixins: [mixins.common.dialog],
    data() {
        return {
            list: [],
            columns: columns,
            form: initCategory(),
            formRules: {
                name: [{ required: true, message: '', trigger: 'blur'}],
                category: [{ required: true, message: '', trigger: 'blur'}],
                icon: [{ required: true, message: '', trigger: 'blur'}],
            },
            items: [
                {
                    label: '品类名称:',
                    prop: 'name',
                    component: 'el-input'   
                },
                
                {
                    label: '品类代码:',
                    prop: 'category',
                    component: 'el-input',
                },
                {
                    label: '图标代码:',
                    prop: 'icon',
                    component: 'el-input',
                },
                
            ],
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
            CategoryApi.List().then(data => {
                this.list = data.list
            })
        },
        addGoods() {
            this.dialogName = '添加商品品类'
            this.show()
        },
        edit(res) {
            this.dialogName = '修改商品品类'
            this.show()
        },
        remove(res) {
            console.log(res)
            CategoryApi.Remove(res.id).then(data => {
                this.getData()
            })
        },
        addCategory() {
            console.log(this.form)
            CategoryApi.Add(this.form).then(data => {
                this.form = initCategory()
                this.getData()
                this.hiden()
            })
        }
    }
}

</script>
<style lang='scss' scoped>
</style>