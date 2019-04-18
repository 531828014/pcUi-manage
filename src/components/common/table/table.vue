<template>
    <a-table 
        class="table"
        :columns="columns" 
        :dataSource="cacheData" 
        :pagination="pagination"
        :locale="locale"
        bordered>
        <template 
            v-for="col in setTableKey" 
            :slot="col" 
            slot-scope="text, record">
        <div :key="col">
            <a-input
                v-if="record.editable"
                style="margin: -5px 0"
                :value="text"
                @change="e => handleChange(e.target.value, record.key, col)"
            />
            <template v-else>{{text}}</template>
        </div>
        </template>
        <template slot="operation" slot-scope="text, record">
            <div class='editable-row-operations'>
                <span v-if="record.editable">
                    <a @click="() => save(record.key)">保存</a>
                    <a-popconfirm title='确定取消吗?' @confirm="() => cancel(record.key)">
                        <a>取消</a>
                    </a-popconfirm>
                </span>
                <span v-else>
                    <a @click="() => edit(record.key)">编辑</a>
                </span>
                <a-popconfirm
                    v-if="dataSource.length"
                    title="确认删除吗?"
                    @confirm="() => deleteItem(record.key)">
                <a href="javascript:;">删除</a>
                </a-popconfirm>
            </div>
        </template>
    </a-table>
</template>
<script>
export default {
    data() {
        return {
            pagination: {position: 'bottom'},
            cacheData: [],
            locale: {
                filterConfirm: '确定',
                filterReset: '重置',
                emptyText: '暂无数据'
            }
        }
    },
    props: {
        dataSource: {
            type: Array,
            default: () => []
        },
        columns: {
            type: Array,
            default: () => []
        }
    },
    mounted() {
        this.cacheData = this.dataSource.map(item => ({ ...item }))
    },
    computed: {
        setTableKey() {
            let ret = []
            this.columns.map(item => {
                if(item.scopedSlots) {
                    ret.push(item.scopedSlots.customRender)
                }
            })
            return ret
        },
    },
    methods: {
        handleChange(value, key, column) {
            const newData = [...this.cacheData]
            const target = newData.filter(item => key === item.key)[0]
            if (target) {
                target[column] = value
                this.cacheData = newData
            }
        },
        cancel(key) {
            const newData = [...this.cacheData]
            const target = newData.filter(item => key === item.key)[0]
            if (target) {
                Object.assign(target, this.cacheData.filter(item => key === item.key)[0])
                delete target.editable
                this.cacheData = newData
            }
        },
        edit(key) {
            const newData = [...this.cacheData]
            const target = newData.filter(item => key === item.key)[0]
            if (target) {
                target.editable = true
                this.cacheData = newData
            }
        },
        save(key) {
            const newData = [...this.cacheData]
            const target = newData.filter(item => key === item.key)[0]
            if (target) {
                delete target.editable
                this.cacheData = newData
                this.cacheData = newData.map(item => ({ ...item }))
            }
            this.$emit('editItem', newData[key])
        },
        deleteItem(key) {
            this.$emit('deleteItem', key)
        }
    },
}
</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.table{
    margin-top: 20px;
    /deep/ .ant-table table{
        font-size: $con-font-size-nm;
    }
    /deep/ .ant-table-filter-dropdown-link.confirm {
        float: none;
    }
    .editable-row-operations a {
        margin-right: 8px;
    }
}

</style>