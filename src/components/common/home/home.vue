<!--  -->
<template>
    <div>
        home
        <div class="content">
            <transition name="fade" mode="out-in">
                <router-view></router-view>
            </transition>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
        };
    },

    components: {},

    computed: {},

    methods: {}
}

</script>
<style lang='scss' scoped>
</style>