<template>
    <div>
        <p>你好</p>
        <p>项目</p>

        <router-link to="/item/item2">第二个项目</router-link>
        <router-view></router-view>

    </div>
</template>
<script>

export default {
    data() {
        return {
        }
    },
    created() {
    },
    computed: {
    },
    methods: {
    },
}
</script>
<style lang="scss" scoped>
</style>
