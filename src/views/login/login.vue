<!--  -->
<template>
    <div class="login-page">
        <div class="main">
            <div class="logo-wrap">
                <img class="logo" src="./image/logo.png" width="60" height="60">
                <p class="text">后台管理系统</p>
            </div>
            <div class="banner">
                <div class="right-bg"></div>
                <div class="content">
                    <div class="bg-img"></div>
                    <div class="login-form">
                        <el-tabs v-model="tabName">
                            <el-tab-pane label="用户登陆" name="User" class="panel">
                                <el-form 
                                    :model="form" 
                                    :rules="formRules"
                                    class="mmsFrom normal"
                                    label-width="60px" >
                                    <mms-form :items="items" :form-data="form">
                                    </mms-form>
                                    <div class="btn-wrap">
                                        <el-button
                                            class="btn"
                                            size="medium"
                                            type="primary"
                                            @click="login">
                                            登 录
                                        </el-button>
                                    </div>
                                </el-form>
                            </el-tab-pane>
                        </el-tabs>
                    </div>
                </div>
            </div>
        </div>
        <copyright></copyright>
    </div>
</template>

<script>
import LoginApi from 'api/main/login/index'
import {initUser} from 'model/user'
export default {
    data() {
        return {
            form: initUser(),
            tabName: 'User',
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
@import 'sass/variables.scss';
.login-page{
    min-width: 1200px;
    .main{
        padding-bottom: $con-spacing-col-base;
        .logo-wrap{
            height: 60px;
            line-height: 60px;
            width: 1200px;
            margin: 0 auto $con-spacing-col-base auto;
            padding-top: $con-spacing-col-base;
            .logo{
                float: left;
                margin-right: $con-spacing-col-lg;}
            .text{
                font-size: 24px;}
        }
        .banner{
            position: relative;
            height: 560px;
            background-color: $color-theme-primary;
            .right-bg,
            .left-bg{
                position: absolute;
                width: 430px;
                height: 300px;}
            .left-bg{
                top: 0;
                left: 10;
                background-image: url("./image/login-bg-left.png");}
            .right-bg{
                right: 0;
                bottom: 0;
                background-image: url("./image/login-bg-right.png");
                background-position-x: 50px;
                background-repeat: no-repeat;}
            .content{
                width: 1200px;
                height: 560px;
                margin: 0 auto;
                position: relative;
                overflow: hidden;
                .bg-img{
                    margin-top: 80px;
                    margin-left: $con-spacing-col-lg;
                    height: 400px;
                    width: 700px;
                    background-image: url("./image/login-bg.png");
                    background-repeat: no-repeat;}
                .login-form{
                    position: absolute;
                    width: 350px;
                    top: 50%;
                    right: 0px;
                    transform: translateY(-50%);
                    height: 320px;
                    background: #fff;
                    padding: $con-spacing-col-lg $con-spacing-col-base 0 $con-spacing-col-base;
                    border-radius: 5px;}
                    /deep/{
                        .el-form-item__content,
                        .el-form-item__label{
                            font-size: $con-font-size-nm !important;
                        }
                        .el-input__inner{
                            height: 30px;
                            line-height: 30px;
                        }
                    } 
                    .panel{
                        padding: $con-spacing-col-base 20px;
                            margin-bottom: 30px;}
                        .btn-wrap{
                            text-align: center;
                            margin-top: $con-spacing-col-base;}
                            .btn{
                                width: 100%;}
            }
        }
    }
}
</style>