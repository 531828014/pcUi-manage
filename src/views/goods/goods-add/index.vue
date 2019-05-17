<!--  -->
<template>
    <table-page-layout>
        <div slot="actbar"></div>
        <el-card slot="content" shadow="never">
            <el-form 
                :model="form" 
                class="mmsFrom"
                ref="mmsFrom"
                :rules="rules"
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
import CategoryApi from 'api/main/category/index'
import GoodsManageApi from 'api/main/goods-manage/index'
import {initGoods} from 'model/goods'
import {mapState} from 'vuex'
export default {
    data() {
        return {
            form: initGoods(),
            fileList: [],
            categoryList: [],
            rules: {
                title: [{ required: true, message: '请填写商品标题', trigger: 'blur' }],
                purchasePrice: [{ required: true, message: '请填写进货价', trigger: 'blur' }],
                sellingPrice: [{ required: true, message: '请填写销售价', trigger: 'blur' }],
                number: [{ required: true, message: '请填写商品数量', trigger: 'blur' }],
                category: [{ required: true, message: '请填写类别', trigger: 'blur' }]
            }
        };
    },
    created() {
        this.getCategory()
    },
    components: {},
    computed: {
        ...mapState({
            serverAddress: state => state.serverAddress,
        }),
        items() {
            return [
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
                    },
                },
                {
                    label: '类别',
                    prop: 'category',
                    component: 'el-select',
                    attrs: {
                        placeholder: '请选择品类',
                    },
                    data: {
                        options: this.categoryList
                    }
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
            ]
        }
    },

    methods: {
        getCategory() {
            CategoryApi.List().then(date => {
                date.list.forEach(item => {
                    let opt = {
                        value: item.category,
                        label: item.name
                    }
                    this.categoryList.push(opt)
                });
            })
        },
        addGoods() {
            this.form.typeId = this.$store.state.userInfo.id
            this.$refs['mmsFrom'].validate((valid) => {
                if (valid) {
                    if(this.form.imgUrl.length > 0) {
                        GoodsManageApi.Add(this.form).then(data => {
                            this.form = initGoods()
                            this.fileList = []
                        })
                    }else{
                        this.$message({type: 'warning', message: '请上传商品图片。'})
                    }
                } else {
                    return false;
                }
            });
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