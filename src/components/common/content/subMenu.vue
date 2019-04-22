<template functional>
    <a-sub-menu
        :key="props.mainKey"
    >
        <span slot="title">
            <router-link :to="props.menuInfo.path">
                <a-icon :type="props.menuInfo.icon" /><span>{{ props.menuInfo.title }}</span>
            </router-link>
        </span>
        <template v-for="(item, index) in props.menuInfo.children">
            <a-menu-item
                v-if="!item.children"
                :key="`${props.mainKey}-${index}`"
            >
                <router-link :to="item.path">
                <span>{{ item.title }}</span>
                </router-link>
            </a-menu-item>
            <!-- <sub-menu 三级菜单
                v-else
                :key="item.key"
                :menu-info="item"
            /> -->
        </template>
    </a-sub-menu>
</template>
<script>
export default {
    props: ['menuInfo', 'mainKey'],
};
</script>