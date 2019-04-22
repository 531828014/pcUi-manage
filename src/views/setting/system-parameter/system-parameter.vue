<!--  -->
<template>
    <div>
        <search-add 
            :searchAddList="searchAddList"
            @addClick="addClick"></search-add>
        <com-table 
            :dataSource="dataSource" 
            :columns="columns"
            @deleteItem="deleteItem"
            @editItem="editItem"></com-table>
    </div>
</template>
<script>
import SearchAdd from 'components/common/search-add/search-add'
import ComTable from 'components/common/table/table'
//搜索、添加按钮、时间数据
const searchAddList = {
    buttons: [ //按钮数据
        {
            text: '添加系统参数',
            type: 'primary',
            onClickName: 'addClick',
            show: true
        },
    ]
}
//表头数据
const columns = [{
    title: '#',
    dataIndex: 'key',
    width: '2%',
}, {
    title: '键',
    dataIndex: 'mainKey',
    width: '15%',
    scopedSlots: { customRender: 'mainKey' }, //控制编辑字段
}, {
    title: '参数名',
    dataIndex: 'paramName',
    width: '15%',
    scopedSlots: { customRender: 'paramName' },
}, {
    title: '参数值',
    dataIndex: 'param',
    width: '15%',
    scopedSlots: { customRender: 'param' },
}, {
    title: '说明',
    dataIndex: 'explain',
    width: '30%',
    scopedSlots: { customRender: 'explain' },
}, {
    title: '操作',
    dataIndex: 'operation',
    scopedSlots: { customRender: 'operation' },
}]
//行内容
const dataSource = [] //数据
for (let i = 0; i < 10; i++) {
    dataSource.push({
        key: i.toString(),
        mainKey: 'sdf',
        paramName: `Edrward ${i}`,
        param: 32,
        explain: `London Park no. ${i}`,
    })
}
export default {
    data() {
        return {
            dataSource,
            columns,
            searchAddList
        };
    },
    components: {
        ComTable,
        SearchAdd
    },
    computed: {},
    methods: {
        deleteItem(key) {
            console.log(key)
        },
        editItem(res) {
            console.log(res)
        },
        addClick(value) {
            console.log('添加按钮事件')
        },
        infoClick(value) {
            console.log('导出按钮事件')
        }
    }
}

</script>
<style lang='scss' scoped>
</style>