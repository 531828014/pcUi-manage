<!--  -->
<template>
    <div class="pagination-layout" :class="[`${mode}`]">
        <template v-if="mode==='center'">
            <div class="cell">
                <slot name="center">
                    <el-pagination></el-pagination>
                </slot>
            </div>
        </template>
        <template v-if="mode==='between'">
            <div class="cell left">
                <slot name="left">
                    <el-button>左边</el-button>
                </slot>
            </div>
            <div class="cell right">
                <slot name="right">
                    <el-pagination></el-pagination>
                </slot>
            </div>
        </template>
    </div>
</template>

<script>
export default {
    name: 'pagination-layout',
    props: {
        mode: {
            // 居中center 两侧布局between
            type: String,
            default: 'center'
        }
    }
}

</script>
<style lang='scss' scoped>
@import 'sass/variables.scss';
.pagination-layout{
    display: table;
    width: 100%;
    min-height: 32px;
    margin-top: $con-spacing-row-base;
    .cell{
        display: table-cell;
        vertical-align: middle;
    }
    &.center{
        text-align: center;
        .cell{
            width: 100%;
        }
    }
    &.between{
        .cell{
            width: 50%;
        }
        &.left{
            text-align: left;
        }
        &.right{
            text-align: right;
        }
    }
    & >>> .block-wrap{
        display: inline-block;
    }
}
</style>