<template>
    <div class="copyright">
        Copyright <span v-html="copy"></span> {{year}} 礼锦
    </div>
</template>
<script>
const date = new Date()
const year = date.getFullYear()
export default {
    data() {
        return {
            copy: '&copy',
            year: year
        }
    }
}
</script>

<style scoped lang="scss">
@import 'sass/variables.scss';
.copyright {
    font-size: $con-font-size-sm;
    height: 60px;
    line-height: 60px;
    border-top: 1px solid $con-border-color;
    width: 100%;
    text-align: center;
}
</style>