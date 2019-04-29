<!--  -->
<template>
    <table-page-layout>
        <div slot="actbar"></div>
        <el-card slot="content" shadow="never">
            <el-form 
                :model="form" 
                class="mmsFrom"
                label-width="100px" >
                <mms-form :items="items" :form-data="form">
                </mms-form>
                <el-button type="primary" @click="addGoods(form)">添加</el-button>
                <el-button @click="addGoods(form)">返回</el-button>
            </el-form>
        </el-card>
    </table-page-layout>
</template>

<script>
import {initGoods} from 'model/goods'
export default {
    data() {
        return {
            form: initGoods(),
            items: [
                {
                    label: '标题:',
                    prop: 'title',
                    component: 'el-input'   
                },
                {
                    label: '简介:',
                    prop: 'briefIntroduction',
                    component: 'el-input',
                    attrs: {
                        type: 'textarea' 
                    } 
                },
                {
                    label: '进货价:',
                    prop: 'purchasePrice',
                    component: 'el-input',
                    attrs: {
                        type: 'number' 
                    } 
                },
                {
                    label: '销售价:',
                    prop: 'sellingPrice',
                    component: 'el-input',
                    attrs: {
                        type: 'number' 
                    }
                },
                {
                    label: '数量:',
                    prop: 'number',
                    component: 'el-input',
                    attrs: {
                        type: 'number' 
                    } 
                },
                {
                    label: '标题:',
                    prop: 'title',
                    component: 'el-input'   
                },
                {
                    label: '简介:',
                    prop: 'briefIntroduction',
                    component: 'el-input'
                },
                {
                    label: '类别:',
                    prop: 'category',
                    component: 'el-input'   
                },
                {
                    label: '厂家/设计师:',
                    prop: 'designer',
                    component: 'el-input'
                }
            ],
        };
    },

    components: {},

    computed: {},

    methods: {
        addGoods(data) {
            console.log(data)
        }
    }
}

</script>
<style lang='scss' scoped>
</style>