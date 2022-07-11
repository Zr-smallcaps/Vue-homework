<template>
  <div style="">
    <van-nav-bar :title="$route.meta.title" />
    <router-view></router-view>
    <van-tabbar route>
      <van-tabbar-item icon="home-o" to="/layout/home"
        >首页</van-tabbar-item
      >
      <van-tabbar-item icon="search" to="/layout/search"
        >搜索</van-tabbar-item
      >
    </van-tabbar>
  </div>
</template>

<script>
// 点击底部导航, 切换路由页面显示
// 1. 实现 头部底部布局
// 2. 切换路由页面显示
// 2.1 子路由配置
// 2.2 子路由对应的页面创建
// 3.动态显示标题
export default {
  name: 'VueMusicIndex',
  data() {
    return {
      // title: "",
    };
  },
  mounted() {
    // 挂载后
    // console.log(this.$route.meta);
    // this.title = this.$route.meta.title;
  },
  methods: {},
  watch: {
    // $route(newval) {
    //   this.title = newval.meta.title;
    // },
  },
};
</script>

<style scoped>
.van-cell__value {
  padding-top: 9px;
  flex: 0 0 30px;
}
</style>
