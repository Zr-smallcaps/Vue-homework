<template>
    <div>
        <p>你好</p>
        <p>我是首页</p>
        <router-link to="/index/index2">次级首页</router-link>

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
