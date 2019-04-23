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
                    <mms-table
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
                    </mms-table>
                </el-form>
            </el-card>
            <el-card slot="content">
                <mms-form-info :form-data="currentApply" :items="applyInfos">
                </mms-form-info>
            </el-card>
            <el-card slot="content">
                <el-form :model="form">
                    <mms-form :items="items" :form-data="form"></mms-form>
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
const applyInfos = [
    {
        label: '编号',
        prop: 'number',
        span: 12
    },
    {
        label: '标题',
        prop: 'title',
        span: 12
    },
    {
        label: '状态',
        prop: 'statusName',
        span: 12
    },
]
export default {
    data() {
        return {
            list: [],
            currentApply: {},
            columns: columns,
            applyInfos: applyInfos,
            formRules: {
                title: [{ required: true, message: '请输入标题', trigger: 'blur'}],
            },
            form: {
                title: '',
                number: '编号',
                money: 666,
                name: 'sdakdjh'
            },
            items: [
                {
                    label: '编号',
                    component: 'el-input'
                },
                // {
                //     label: '标题',
                //     prop: 'title',
                //     component: 'pms-item-list',
                //     attrs: {
                //         code: 'cgfs'
                //     }
                // },
                {
                    label: '金额',
                    prop: 'money',
                    component: 'el-input'
                },
                {
                    label: '名称',
                    prop: 'name',
                    component: 'el-select',
                    attrs: {
                        placeholder: '请输入名称',
                        code: 'cgfs'
                    },
                    data: {
                        options: [{label: '选项1', value: '1'}, {label: '选项2', value: '2'}]
                    }
                },
            ],
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