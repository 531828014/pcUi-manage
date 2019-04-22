<!--  -->
<template>
    <div>
        <a-row>
            <a-col :span="7">
                <a-card>
                    <dept-tree></dept-tree>
                </a-card>
            </a-col>
            <a-col :span="17">
                <a-card>

                </a-card>
            </a-col>
        </a-row>
    </div>
</template>

<script>
import DeptTree from 'components/common/dept-tree/dept-tree'
export default {
    data() {
        return {
          
        };
    },

    components: {
        DeptTree
    },
    methods: {
       
    }
}

</script>
<style lang='scss' scoped>

</style>