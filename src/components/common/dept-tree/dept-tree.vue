<template>
    <div class="dept-tree">
        <div>
            <a-input placeholder="可输入部门名称搜索" v-model="searchName">
                <a-icon type="search" />
            </a-input>
        </div>
        <div class="tree-wrap">
            <a-tree
                :treeData="deptTreeList"
                @change="onChange">
            </a-tree>
        </div>
    </div>
</template>
<script>
import deptApi from 'api/main/dept-manage/index'
import {createDept} from 'model/department'

export default {
    data() {
        return{
            value: '',
            deptTreeList: [],
            searchName: '',
        }
    },
    created() {
        // this.getDeptList()
    },
    methods: {
        onChange() {

        },
        // 获取部门列表
        getDeptList() {
            deptApi.getDeptTreeList().then(data => {
                this.deptTreeList = data
            })
        },
    }
}
</script>

