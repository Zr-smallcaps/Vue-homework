<template>
  <div>
    <router-link to='/find/ranking/smallthird'>飙升排行榜</router-link>
      <p>新歌排行榜</p>
      <p>热歌排行榜</p>
      <div class="third">
        <router-view></router-view>
      </div>
  </div>
</template>

<script>
export default {

}
</script>

<style>
.third{
  width: 100%;
  height: 100px;
  background-color: aqua;
}

</style>