<template>
  <div>
    <router-link to="/index">首页</router-link>
    <router-link to="/my">我的</router-link>
    <router-link to="/item">项目</router-link>
    <router-link to="/fenlei">分类</router-link>


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
