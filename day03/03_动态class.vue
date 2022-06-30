<template>
  <div>
    <!-- 动态绑定class
    v-bind:class = '{类名: 布尔值}'
    :class="{类名: 布尔值}"
    使用场景: vue变量控制标签是否应该有类名
    v-bind:class 和 普通的class 是可以共存的-->
    <p v-bind:class="{active: activeFlag}" class="ppp">我是乒乒乓乓</p>
    <button @click="activeFlag = !activeFlag">Click ME</button>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo03Class',

  data() {
    return {
      activeFlag: true
    };
  },

  mounted() {
    
  },

  methods: {
    
  },
};
</script>
<style>
  .active {
    color: red;
  }
  .ppp{
    border: 10px solid #ccc;
  }
</style>
