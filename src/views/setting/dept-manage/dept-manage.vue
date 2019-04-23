<!--  -->
<template>
    <div>
        <table-page-layout >
            <template slot="actbar">
                <el-button type="text" slot="actbar-left">随便玩玩</el-button>
                <el-button type="text" slot="actbar-right-append" 
        @click="validate">验证表单</el-button>
                <el-button type="text" slot="actbar-right-prepend" 
        @click="changeColumn">动态改变表格</el-button>
            </template>
            <el-card slot="content" shadow="never">
                <el-form
                    :model="model"
                    :rules="model.rules"
                    status-icon
                    ref="form">
                    <phms-table
                        ref="table"
                        expand
                        :data="model.data"
                        :columns="columns"
                        :header-cell-class-name="headerClaaName">
                        <template slot="number" slot-scope="{scope}">
                            {{scope.row.number}}
                        </template>
                        <template slot="title" slot-scope="{scope}">
                            <el-form-item
                                :prop="'data.' + scope.$index + '.title'" 
                                :rules='model.rules.title'
                                :show-message="false">
                                <el-input v-model="scope.row.title"></el-input>
                            </el-form-item>
                        </template>
                        <template slot="operation" slot-scope="{scope}">
                            <el-button @click="edit(scope.row)" type="primary">编辑</el-button>
                        </template>    
                    </phms-table>
                </el-form>
            </el-card>
            <template slot="bottom">
                bottombottom
            </template>
        </table-page-layout>
        <pagination-layout mode='center'>
        </pagination-layout>
    </div>
</template>

<script>
const columns = [
    {
        prop: 'number',
        label: '编号'
    },
    {
        prop: 'title',
        label: '标题',
        showOverflowTooltip: false
    },
    {
        prop: 'statusName',
        label: '状态'
    },
    {
        prop: 'stageName',
        label: '阶段'
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
</style>