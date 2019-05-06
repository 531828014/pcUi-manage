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
                <el-upload
                    class="upload-demo"
                    action="http://localhost:5699/Commodity/upload?userId='lid'"
                    :on-success="handleSuccess"
                    :on-preview="handlePreview"
                    :on-remove="handleRemove"
                    :file-list="fileList"
                    list-type="picture">
                    <el-button size="small" type="primary">点击上传商品图片</el-button>
                    <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
                </el-upload>
            </el-form>
            <div class="btn-box">
                <el-button type="primary" @click="addGoods">添加</el-button>
                <el-button @click="back">返回</el-button>
            </div>
        </el-card>
    </table-page-layout>
</template>

<script>
import GoodsManageApi from 'api/main/goods-manage/index'
import {initGoods} from 'model/goods'
import {mapState} from 'vuex'
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
            fileList: []
        };
    },

    components: {},
    computed: {
        ...mapState({
            serverAddress: state => state.serverAddress,
        })
    },

    methods: {
        addGoods() {
            GoodsManageApi.Add(this.form).then(data => {
                this.form = initGoods()
                this.fileList = []
            })
        },
        back() {
            this.$router.back()
        },
        handleRemove(file, fileList) {
            let index = this.form.imgUrl.findIndex(item => item == file.response.url)
            this.form.imgUrl.splice(index, 1)
        },
        handlePreview(file) {
            // console.log(file);
        },
        handleSuccess(response, file, fileList) {
            this.form.imgUrl.push(response.url)
        }
    }
}

</script>
<style lang='scss' scoped>
</style>