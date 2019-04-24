<template>
    <div class="condition-search">
        <el-input 
            placeholder="请输入内容" 
            v-model="keyword" 
            class="input-with-select">
            <el-select 
                v-model="field" 
                slot="prepend"
                value-key="code"
                placeholder="请选择"
                class="select">
                <el-option 
                    v-for="item in options"
                    :key="item.code"
                    :label="item.name"
                    :value="item">
                </el-option>
            </el-select>
            <el-button 
                slot="append" 
                icon="el-icon-search" 
                class="search" 
                @click="search">
            </el-button>
        </el-input>
    </div>
</template>

<script>

export default {
    name: 'condition-search',
    props: {
        searchCode: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            field: null,
            keyword: '',
            options: [] // 选项数据
        }
    },
    watch: {
        searchCode() {
            this.init()
        }
    },
    methods: {
        clearData() {
            this.keyword = ''
        },
        validate() {
            let result = false
            if (!this.field) {
                this.$message({type: 'warning', message: '请选择搜索字段'})
                return result
            }
            if (this.keyword.includes('&')) {
                this.$message({type: 'warning', message: '包含非法字符&'})
                return result
            }
            if (this.keyword.includes('|')) {
                this.$message({type: 'warning', message: '包含非法字符|'})
                return result
            }
            result = true
            return result
        },
        search() {
            if (this.validate()) {
                let ret = ''
                if (this.keyword) {
                    ret = this.field.code + this.field.operator + this.keyword
                }
                this.$emit('search', ret)
            }
        },
    },
}
</script>

<style lang="scss" scoped>
.condition-search {
    display: inline-block;
    vertical-align: top;
    margin: 0 10px;
    .input-with-select
        .select{
            width: 130px;
        }
}
</style>