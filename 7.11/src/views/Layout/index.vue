<template>
  <div style="padding-bottom: 48px">
    <van-nav-bar :title="$route.meta.title" />
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home">首页</van-tabbar-item>
      <van-tabbar-item icon="search" to="/layout/search">搜索</van-tabbar-item>
    </van-tabbar>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: '首页'
    };
  },
/*   watch: {
  // watch可以监听路由的变化
  // newval是更新后的路由 oldval是更新前的路由
    $route(newval){
      this.title = newval.meta.title
    }
  } */
};
</script>

<style>
</style>