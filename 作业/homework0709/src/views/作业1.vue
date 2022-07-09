<template>
  <div>
    <div id="app">
      <router-link to="/myhome">首页</router-link>
      <router-link to="/myclass">订单</router-link>
      <router-link to="/myorder">分类</router-link>
      <router-link to="/mymy">我的</router-link>
    </div>
    <h2>显示路由切换的页面</h2>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  name: 'App',
  components: {},
};
</script>

<style></style>
