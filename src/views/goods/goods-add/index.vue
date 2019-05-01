<!--  -->
<template>
    <table-page-layout>
        <div slot="actbar"></div>
        <el-card slot="content" shadow="never">
            <el-form 
                :model="form" 
                class="mmsFrom"
                label-width="120px" >
                <mms-form :items="items" :form-data="form">
                </mms-form>
            </el-form>
            <div class="btn-box">
                <el-button type="primary" @click="addGoods">添加</el-button>
                <el-button @click="addGoods">返回</el-button>
            </div>
        </el-card>
    </table-page-layout>
</template>

<script>
import GoodsManageApi from 'api/main/goods-manage/index'
import {initGoods} from 'model/goods'
export default {
    data() {
        return {
            form: initGoods(),
            items: [
                {
                    label: '商品标题:',
                    prop: 'title',
                    component: 'el-input'   
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
                    label: '商品数量:',
                    prop: 'number',
                    component: 'el-input',
                    attrs: {
                        type: 'number' 
                    } 
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
                },
                {
                    label: '商品简介:',
                    prop: 'briefIntroduction',
                    component: 'el-input',
                    attrs: {
                        type: 'textarea' 
                    } 
                },
            ],
        };
    },

    components: {},

    computed: {},

    methods: {
        addGoods() {
            console.log(this.form)
            GoodsManageApi.Add(this.form).then(data => {
                console.log(data)
                this.form = initGoods()
            })
        }
    }
}

</script>
<style lang='scss' scoped>
</style>