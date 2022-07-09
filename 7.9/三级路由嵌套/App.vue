<template>
  <div>
    <div class="footer_wrap">
      <router-link to="/find">发现音乐</router-link>
      <!-- router-link-exact-active router-link-active   exact精准匹配 点击触发的时候添加类名-->
      <router-link to="/my">我的音乐</router-link>
      <!-- 使用query -->
      <!-- <router-link to="/part?id=1&username=smallcaps">朋友</router-link> -->

      <!-- 使用params -->
      <!-- <router-link to="/part/1/smallcaps">朋友</router-link> -->
      <button @click="goOther('/part','part')">去盆友页面</button>
    </div>
    <div class="top">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 目标: 声明式导航 - 激活类名区别
// 1. url上hash值(#/home/recommend) 包含 导航的href值(#/home) - 当前a就有 "router-link-active"  (模糊)
// 2. url上hash值(#/home/recommend) 等于 导航的href值(#/home/recommend) - 当前a就有"router-link-exact-active" (精确)
export default {
  methods: {
    goOther(targetPath,targetName){
        this.$router.push({
          // path: targetPath,
          name: targetName,
          query :{
            id:1
          }
        })
     }
  }
};
</script>

<style scoped>
.footer_wrap {
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  width: 100%;
  text-align: center;
  background-color: #333;
  color: #ccc;
}
.footer_wrap a {
  flex: 1;
  text-decoration: none;
  padding: 20px 0;
  line-height: 20px;
  background-color: #333;
  color: #ccc;
  border: 1px solid black;
}
.footer_wrap a:hover {
  background-color: #555;
}
.top {
  padding-top: 62px;
}

/*激活时样式 */

.footer_wrap .router-link-active{
  background-color: red;

}
</style>