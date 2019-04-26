<!--  -->
<template>
    <table-page-layout>
        <div slot="actbar"></div>
        <el-card slot="content" shadow="never">
            <el-form :model="form" class="mmsFrom">
                <mms-form :items="items" :form-data="form">
                </mms-form>
                <el-button type="primary" @click="addGoods(form)">添加</el-button>
                <el-button @click="addGoods(form)">返回</el-button>
                
            </el-form>
        </el-card>
    </table-page-layout>
</template>

<script>
export default {
    data() {
        return {
            form: {
                code: '448',
                name: '编号',
                value: 666,
                remark: 'sdakdjh'
            },
            items: [
                {
                    label: '键:',
                    prop: 'code',
                    component: 'el-input'   
                },
                {
                    label: '参数名:',
                    prop: 'name',
                    component: 'el-input'
                },
                {
                    label: '参数值:',
                    prop: 'value',
                    component: 'el-input'   
                },
                {
                    label: '说明:',
                    prop: 'remark',
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
        addGoods(data) {
            console.log(data)
        }
    }
}

</script>
<style lang='scss' scoped>
</style>