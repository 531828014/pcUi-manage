<!--  -->
<template>
    <div class="login">
        <el-row>
            <el-col :span="8"></el-col>
            <el-col :span="8">
                <el-form 
                :model="form" 
                :rules="formRules"
                class="mmsFrom"
                label-width="120px" >
                <mms-form :items="items" :form-data="form">
                </mms-form>
                </el-form>
                <div class="btn-box">
                    <el-button type="primary" @click="login">登录</el-button>
                </div>
            </el-col>
            <el-col :span="8"></el-col>
        </el-row>
    </div>
</template>

<script>
import LoginApi from 'api/main/login/index'
import {initUser} from 'model/user'
export default {
    data() {
        return {
            form: initUser(),
            items: [
                {
                    label: '账号:',
                    prop: 'number',
                    component: 'el-input'   
                },
                
                {
                    label: '密码:',
                    prop: 'password',
                    component: 'el-input',
                    attrs: {
                        type: 'password' 
                    } 
                }
            ],
            formRules: {
                number: [{ required: true, message: '', trigger: 'blur'}],
                password: [{ required: true, message: '', trigger: 'blur'}],
            },
        };
    },
    created() {
    },

    methods: {
        login() {
            LoginApi.Login(this.form).then(data => {
                this.$store.state.userInfo = data.list[0]
                this.$router.push({
                    path: '/home/goods/goods-list',
                })
            })
        },
        
    }
}

</script>
<style lang='scss' scoped>
</style>