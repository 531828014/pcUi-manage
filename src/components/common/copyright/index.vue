<!--  -->
<template>
    <div class="copyright">
        Copyright <span v-html="copy"></span> {{year}} 南宁师范大学计算机与信息工程学院 软件工程 2015级 杨礼锦
    </div>
</template>

<script>
const date = new Date()
const year = date.getFullYear()
export default {
    name: 'copyright',
    data() {
        return {
            copy: '&copy',
            year: year
        }
    }
}

</script>
<style lang='scss' scoped>
@import 'sass/index.scss';
.copyright{
    height: 60px;
    line-height: 60px;
    margin: 30px auto;
    text-align: center;
    font-size: $con-font-size-sm !important;
    border-top: 1px solid $con-border-color;
}
    
</style>