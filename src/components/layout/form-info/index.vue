<template>
    <el-row class="mms-form-info">
        <el-col v-for="item in items" :key="item.prop" :span="item.span">
            <div class="info-wrap normal">
                <div class="cell label normal" :style="{width: `${labelWidth}px`}">
                    <slot :name="`${item.prop}-label`">
                        {{item.label}}
                    </slot>
                </div>
                <div class="cell content normal">
                    <slot :name="`${item.prop}-content`">
                        {{formData[item.prop]}}
                    </slot>
                </div>
            </div>
        </el-col>
    </el-row>
</template>

<script>
export default {
    name: 'mms-form-info',
    props: {
        formData: {
            type: Object,
            required: true
        },
        items: {
            type: Array,
            default: () => []
        },
        labelWidth: {
            type: Number,
            default: 120
        }
    }
}
</script>

<style lang='scss' scoped>
@import 'sass/variables.scss';
.mms-form-info{
    .info-wrap{
        display: table;
        font-size: $con-font-size-nm;
        color: $color-theme-black;
        padding: 8px 0;
        table-layout: fixed;
        word-break: break-word;
        width: 100%;
        margin: 0;
        .label,
        .content{
            display: table-cell;
            vertical-align: middle;
            font-size: $con-font-size-nm;
        }
        .label{
            font-size: $con-font-size-nm;
            width: 120px;
            text-align: right;
            opacity: 0.85;
        }
        .content{
            padding-left: $con-spacing-row-sm;
        }
        & >>> .red-color{
            color: $color-theme-red;
        }
    }
}
</style>
