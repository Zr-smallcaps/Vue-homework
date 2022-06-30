<template>
  <div>
    <ul>
      <li v-for="item in arr" :key="item">{{item}}</li>
    </ul>
    <button>数组翻转</button>
    <button>截取前3个</button>
    <button>更新第一个元素值</button>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo02VFor',

  data() {
    return {
    };
  },
  mounted() {
  },
  methods: {  
  },
};
</script>

<style scoped>

</style>
