<!--  -->
<template>
    <div class="goods-list normal">
        <table-page-layout>
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
                            <el-button v-if="scope.row.status == '已付款'" @click="edit(scope.row)" type="primary" title="">发货</el-button>
                            <el-button v-if="scope.row.status == '未付款'" @click="remove(scope.row)" type="primary" title="">取消</el-button>
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
import OrderApi from 'api/main/order/index'
const columns = [
    {
        prop: 'id',
        label: '订单号',
        showOverflowTooltip: true
    },
    {
        prop: 'userId',
        label: '用户编号',
        showOverflowTooltip: true
    },
    
    {
        prop: 'address',
        label: '地址',
        showOverflowTooltip: true
    },
    {
        prop: 'contactNumber',
        label: '联系电话'
    },
    {
        prop: 'remark',
        label: '备注',
        showOverflowTooltip: true
    },
    {
        prop: 'total',
        label: '总金额',
        
    },
    {
        prop: 'status',
        label: '订单状态'
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
            console.log(this.$store.state.userInfo)
            if(this.$store.state.userInfo.id) {
                let opt = {
                    id: this.$store.state.userInfo.id
                }
                OrderApi.DesList(opt).then(data => {
                    this.list = data
                })
            }else{
                this.$message({ type: 'warning', message: '登陆信息过期，请重新登陆' })
                this.$router.push({path: '/login'}); 
            }
            
        },
        edit(res) {
            //发货
        },
        remove(res) {
            this.$confirm('是否取消该订单?', '提示', {
                confirmButtonText: '确定',
                cancelButtonText: '取消',
                type: 'warning'
            }).then(() => {
                OrderApi.Remove(res.id).then(data => {
                    this.getData()
                })
            })
        }
    }
}

</script>
<style lang='scss' scoped>
</style>