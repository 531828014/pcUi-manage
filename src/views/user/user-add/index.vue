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
                <el-button type="primary" @click="addUser">添加</el-button>
                <el-button @click="back">返回</el-button>
            </div>
        </el-card>
    </table-page-layout>
</template>

<script>
import UserManageApi from 'api/main/user-manage/index'
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
                },
                {
                    label: '姓名:',
                    prop: 'name',
                    component: 'el-input',
                },
                {
                    label: '身份证号:',
                    prop: 'idNumber',
                    component: 'el-input'
                },
                {
                    label: '联系电话:',
                    prop: 'contactNumber',
                    component: 'el-input'   
                },
                {
                    label: '电子邮箱:',
                    prop: 'email',
                    component: 'el-input'
                }
            ],
        };
    },

    components: {},

    computed: {},

    methods: {
        addUser() {
            UserManageApi.Add(this.form).then(data => {
                this.form = initUser()
                this.$router.push({
                    path: '/home/user/user-list',
                })
            })
        },
        back() {
            this.$router.back()
        }
    }
}

</script>
<style lang='scss' scoped>
</style>