<template>
  <div>
    <!-- 动态绑定class
    v-bind:class = '{类名: 布尔值}'
    :class="{类名: 布尔值}"
    使用场景: vue变量控制标签是否应该有类名
    v-bind:class 和 普通的class 是可以共存的-->
    <p v-bind:class="{ active: isActive }" class="ppp">smallcaps</p>
    <button @click="isActive = !isActive">Click Me</button>
  </div>
</template>

<script>
export default {
  name: 'VuecliDemo03Class',

  data() {
    return {
      activeFlag: true,
    };
  },

  mounted() {},

  methods: {},
};
</script>
<style>
.active {
  color: red;
}
.ppp {
  border: 10px solid #ccc;
}
</style>
