<template>
  <div>
    <router-link to="/first">首页</router-link>
    <router-link to="/second">分类</router-link>
    <router-link to="/third">订单</router-link>
    <router-link to="/fourth">我的</router-link>
    <h3>显示路由切换的页面</h3>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
};
</script>

<style></style>
