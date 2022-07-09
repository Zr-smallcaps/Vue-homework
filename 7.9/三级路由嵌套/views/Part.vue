<template>
  <div>
      <p>关注明星</p>
      <p>发现精彩</p>
      <p>寻找伙伴</p>
      <p>加入我们</p>
      <p>id: {{ $route.params.id }} 
        ===============================
         name: {{ $route.params.username }}
      </p>
  </div>
</template>

<script>
export default {
  created() {
    console.log('原生当中用location====',location)
    console.log('原生当中用location.hash=====',location.hash)
    console.log('this.$route=====',this.$route)
  }

}
</script>

<style>

</style>