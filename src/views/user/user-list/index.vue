<!--  -->
<template>
    <div class="goods-list normal">
        <table-page-layout>
            <el-button type="primary btnWhite" class="normal" slot="actbar-left" @click="addUser">添加用户</el-button>
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
        <!-- <pagination-layout mode='center'>
        </pagination-layout> -->
    </div>
</template>

<script>
import UserManageApi from 'api/main/user-manage/index'
const columns = [
    {
        prop: 'number',
        label: '账号',
        showOverflowTooltip: true
    },
    {
        prop: 'name',
        label: '姓名',
        showOverflowTooltip: true
    },
    {
        prop: 'idNumber',
        label: '身份证号'
    },
    {
        prop: 'contactNumber',
        label: '联系电话'
    },
    {
        prop: 'email',
        label: '电子邮箱',
        showOverflowTooltip: true
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
            UserManageApi.List().then(data => {
                this.list = data.list
            })
        },
        addUser() {
            this.$router.push({
                path: '/home/user/user-add',
            })
        },
        edit(res) {
            this.dialogVisible = true
            this.dialogName = '修改系统参数'
        },
        remove(res) {
            this.$confirm('是否删除该用户?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                UserManageApi.Remove(res.id).then(data => {
                    this.getData()
                })
            })
        }
    }
}

</script>
<style lang='scss' scoped>
</style>