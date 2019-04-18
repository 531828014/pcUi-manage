<!--  -->
<template>
    <div>
        <search-add 
            :searchAddList="searchAddList"
            @addClick="addClick"
            @infoClick="infoClick"></search-add>
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
            text: '添加员工',
            type: 'primary',
            onClickName: 'addClick',
            show: true
        },
    ],
    searchShow: true, //是否显示搜索框
    option: [ //搜索选择数据
        {
            value: 'userName',
            text: '用户名',
        },
        {
            value: 'name',
            text: '姓名'
        },
    ]
}
//表头数据
const columns = [{
    title: '#',
    dataIndex: 'key',
    width: '2%',
}, {
    title: '用户名',
    dataIndex: 'userName',
    width: '10%',
    scopedSlots: { customRender: 'userName' }, //控制编辑字段
    filters: [{
        text: 'Joe',
        value: 'Joe',
    }, {
        text: 'Jim',
        value: 'Jim',
    }, {
        text: 'Submenu',
        value: 'Submenu',
        children: [{
            text: 'Green',
            value: 'Green',
        }, {
            text: 'Black',
            value: 'Black',
        }],
    }],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
    sorter: (a, b) => a.name.length - b.name.length,
}, {
    title: '工号',
    dataIndex: 'jobNumber',
    width: '10%',
    scopedSlots: { customRender: 'jobNumber' },
}, {
    title: '姓名',
    dataIndex: 'name',
    width: '10%',
    scopedSlots: { customRender: 'name' },
    filters: [{
        text: 'London',
        value: 'London',
    }],
    filterMultiple: false,
    onFilter: (value, record) => record.address.indexOf(value) === 0,
    sorter: (a, b) => a.address.length - b.address.length
}, {
    title: '手机号',
    dataIndex: 'phone',
    width: '10%',
    scopedSlots: { customRender: 'phone' },
}, {
    title: '性别',
    dataIndex: 'sex',
    width: '10%',
    scopedSlots: { customRender: 'sex' },
}, {
    title: '状态',
    dataIndex: 'state',
    width: '10%',
    scopedSlots: { customRender: 'state' },
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
        userName: i.toString(),
        name: `Edrward ${i}`,
        sex: 32,
        phone: `London Park no. ${i}`,
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