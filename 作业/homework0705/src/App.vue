<template>
  <div id="app">
    <MyIndex />
  </div>
</template>

<script>
// 完整引入，main.js写入以下代码

import MyIndex from './components/MyIndex';

export default {
  name: 'App',
  data() {
    return {};
  },
  components: { MyIndex },
};
</script>

<style></style>
